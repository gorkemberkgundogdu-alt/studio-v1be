import { createClient } from "npm:@supabase/supabase-js@2";

interface AuditRequestPayload {
  name: string;
  email: string;
  website: string;
  message?: string;
  project_path?: string;
  project_needs?: string;
  source?: string;
  page_url?: string;
  company_fax?: string;
}

function json(body: Record<string, unknown>, status: number, headers: HeadersInit): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json; charset=utf-8" },
  });
}

function allowedOrigins(): Set<string> {
  const configured = Deno.env.get("AUDIT_ALLOWED_ORIGINS")
    ?.split(",")
    .map(normalizeOrigin)
    .filter(Boolean);
  return new Set(configured ?? []);
}

function normalizeOrigin(value: string): string {
  const candidate = value
    .trim()
    .replace(/^AUDIT_ALLOWED_ORIGINS=/, "")
    .replace(/^["']|["']$/g, "");
  if (!candidate) return "";
  try {
    return new URL(candidate).origin;
  } catch {
    return candidate.replace(/\/+$/, "");
  }
}

function corsHeaders(origin: string | null): HeadersInit {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers": "authorization, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function sanitizeTextInput(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function optionalRow(label: string, value: string): string {
  return value
    ? `<tr><td style="padding:8px 12px;color:#687078">${escapeHtml(label)}</td><td style="padding:8px 12px">${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`
    : "";
}

function renderEmailHtml(payload: AuditRequestPayload): string {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h2>New free audit request</h2>
      <table style="width:100%;max-width:720px;border-collapse:collapse">
        ${optionalRow("Name", payload.name)}
        ${optionalRow("Email", payload.email)}
        ${optionalRow("Website", payload.website)}
        ${optionalRow("Project path", payload.project_path ?? "")}
        ${optionalRow("Priorities", payload.project_needs ?? "")}
        ${optionalRow("Source", payload.source ?? "contact")}
        ${optionalRow("Page", payload.page_url ?? "")}
        ${optionalRow("Message", payload.message ?? "")}
      </table>
    </div>
  `;
}

function normalisePayload(value: unknown): AuditRequestPayload | null {
  if (!isObject(value)) return null;

  const payload: AuditRequestPayload = {
    name: sanitizeTextInput(value.name, 120),
    email: sanitizeTextInput(value.email, 254).toLowerCase(),
    website: sanitizeTextInput(value.website, 2048),
    message: sanitizeTextInput(value.message, 4000),
    project_path: sanitizeTextInput(value.project_path, 160),
    project_needs: sanitizeTextInput(value.project_needs, 1000),
    source: sanitizeTextInput(value.source, 80) || "contact",
    page_url: sanitizeTextInput(value.page_url, 2048),
    company_fax: sanitizeTextInput(value.company_fax, 200),
  };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  let validWebsite = false;
  try {
    const url = new URL(payload.website);
    validWebsite = url.protocol === "http:" || url.protocol === "https:";
  } catch {
    validWebsite = false;
  }

  if (payload.name.length < 2 || !validEmail || !validWebsite) return null;
  return payload;
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("Origin");
  const headers = corsHeaders(origin);
  const origins = allowedOrigins();

  if (origins.size === 0) {
    return json({ ok: false, error: "Allowed origins are not configured" }, 500, headers);
  }
  if (origin && !origins.has(normalizeOrigin(origin))) {
    return json({ ok: false, error: "Origin not allowed" }, 403, headers);
  }
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405, headers);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400, headers);
  }

  const payload = normalisePayload(raw);
  if (!payload) return json({ ok: false, error: "Invalid form fields" }, 400, headers);

  // Honeypot: bots receive a success response without creating a record.
  if (payload.company_fax) return json({ ok: true }, 200, headers);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return json({ ok: false, error: "Function is not configured" }, 500, headers);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const { data: saved, error: insertError } = await supabase
    .from("audit_requests")
    .insert({
      name: payload.name,
      email: payload.email,
      website: payload.website,
      message: payload.message || null,
      project_path: payload.project_path || null,
      project_needs: payload.project_needs || null,
      source: payload.source || "contact",
      page_url: payload.page_url || null,
    })
    .select("id")
    .single();

  if (insertError || !saved?.id) {
    console.error("audit request insert failed", insertError);
    return json({ ok: false, error: "Request could not be saved" }, 500, headers);
  }

  const notifyTo = Deno.env.get("AUDIT_NOTIFY_TO");
  const from = Deno.env.get("AUDIT_EMAIL_FROM");
  if (!resendApiKey || !notifyTo || !from) {
    const detail = "Resend notification secrets are not configured";
    await supabase
      .from("audit_requests")
      .update({ email_error: detail })
      .eq("id", saved.id);
    return json({ ok: true, saved: true, notified: false }, 202, headers);
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [notifyTo],
        reply_to: payload.email,
      subject: `Free audit request - ${payload.website}`,
        html: renderEmailHtml(payload),
      }),
    });
  } catch (error) {
    const detail = `Resend network error: ${error instanceof Error ? error.message : "unknown"}`.slice(0, 1000);
    console.error("audit request email failed", detail);
    await supabase
      .from("audit_requests")
      .update({ email_error: detail })
      .eq("id", saved.id);
    return json({ ok: true, saved: true, notified: false }, 202, headers);
  }

  if (!resendResponse.ok) {
    const detail = (await resendResponse.text().catch(() => "")).slice(0, 1000);
    console.error("audit request email failed", resendResponse.status, detail);
    await supabase
      .from("audit_requests")
      .update({ email_error: `Resend ${resendResponse.status}: ${detail}` })
      .eq("id", saved.id);

    // The lead is safely stored. Avoid inviting a duplicate submission merely
    // because the notification provider is temporarily unavailable.
    return json({ ok: true, saved: true, notified: false }, 202, headers);
  }

  const resendBody = (await resendResponse.json().catch(() => ({}))) as { id?: string };
  await supabase
    .from("audit_requests")
    .update({
      email_notified: true,
      email_provider_id: resendBody.id ?? null,
      email_error: null,
      notified_at: new Date().toISOString(),
    })
    .eq("id", saved.id);

  return json({ ok: true, saved: true, notified: true }, 200, headers);
});
