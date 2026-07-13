/**
 * v1be tracking layer, the ONE source of truth for what the site tells GTM.
 *
 * Design (mirrors the tidy e-commerce container we cloned, re-shaped for a
 * lead-gen agency site):
 *   • The site NEVER talks to GA4 / Meta / Ads / LinkedIn directly. It only
 *     pushes a small, well-named vocabulary of events onto `dataLayer`. Every
 *     pixel is wired downstream in GTM, so adding a platform never touches the
 *     app bundle.
 *   • Events are namespaced under a stable schema (see docs/analytics/
 *     tracking-plan.md). Renaming one here means renaming one trigger in GTM.
 *   • PII (email/name) rides in a `user_data` object for enhanced conversions /
 *     Meta advanced matching. It is pushed only on the lead event and only ever
 *     leaves the browser through consent-gated tags, never before consent.
 *
 * Consent Mode v2 lives here too: BaseLayout <head> stamps the default state
 * *before* GTM loads (denied for new visitors, granted for returning visitors
 * who already accepted — read synchronously from localStorage); this module
 * only flips it when the visitor interacts with the banner.
 *
 * Package sales (future checkout) use the GA4 standard ecommerce vocabulary:
 * view_item → select_item → begin_checkout → add_payment_info → purchase,
 * with `transaction_id` as the cross-platform dedup key.
 */

/* ============================ dataLayer plumbing ========================== */

type DL = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DL[];
    /** Consent Mode gtag() shim installed in BaseLayout head. */
    gtag?: (...args: unknown[]) => void;
    /** Exposed so inline markup (e.g. the banner) can drive consent. */
    v1beAnalytics?: typeof publicApi;
  }
}

function dataLayer(): DL[] {
  if (typeof window === "undefined") return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

/* ============================ Event vocabulary ============================ */

/** Every custom event the site is allowed to emit. Keep in sync with GTM. */
export type V1beEvent =
  | "generate_lead" // a real lead landed in Supabase (contact form or popup)
  | "form_start" // first meaningful interaction with a lead form
  | "discount_popup_view" // the pricing discount popup became visible
  | "cta_click" // a primary call-to-action was clicked
  | "contact_channel_click" // email / social / phone link clicked
  | "consent_update" // visitor granted/updated consent
  // GA4 standard ecommerce vocabulary — the package purchase funnel. These
  // ride the top-level `ecommerce` object (not `v1be.*`) because the GA4 tags
  // in GTM read ecommerce data straight from dataLayer.
  | "view_item" // a package's details became visible
  | "select_item" // a package was chosen from the list
  | "begin_checkout" // checkout for a package started
  | "add_payment_info" // payment method entered
  | "purchase"; // money changed hands — the only irreversible event

/** Modeled lead values (USD) so ad platforms can optimise on value, not count. */
export const LEAD_VALUE: Record<string, number> = {
  contact_form: 50,
  discount_popup: 5,
};

export interface UserData {
  email?: string;
  name?: string;
  brand?: string;
}

/**
 * Push one namespaced event. Always clears the previous `v1be` payload first
 * (dataLayer is append-only, so stale keys would otherwise bleed into the next
 * event, the classic GTM footgun).
 */
export function track(event: V1beEvent, params: DL = {}): void {
  const dl = dataLayer();
  dl.push({ v1be: undefined }); // reset the namespace
  dl.push({
    event,
    v1be: {
      ...params,
      locale: currentLocale(),
      page_path: currentPath(),
    },
  });
}

function currentLocale(): string {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang || "en";
}

function currentPath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

/* ============================ Lead event ================================== */

export interface LeadEvent {
  lead_type: "contact_form" | "discount_popup";
  lead_source: "pricing" | "contact";
  goal?: string;
  user_data?: UserData;
}

/**
 * Fire the canonical GA4 `generate_lead`. Called from the single lead choke
 * point (lib/leads.ts) so there is exactly one place a conversion is born.
 */
export function trackLead({ lead_type, lead_source, goal, user_data }: LeadEvent): void {
  track("generate_lead", {
    lead_type,
    lead_source,
    goal: goal || undefined,
    value: LEAD_VALUE[lead_type] ?? 0,
    currency: "USD",
    brand_provided: Boolean(user_data?.brand),
    // Raw PII for enhanced conversions / advanced matching, GTM hashes it and
    // only sends it on consent-gated tags. Omitted keys stay omitted.
    user_data: user_data
      ? {
          email: user_data.email?.trim().toLowerCase() || undefined,
          name: user_data.name?.trim() || undefined,
        }
      : undefined,
  });
}

/* ====================== Ecommerce (package sales) ======================== */

/** One sellable package, GA4 `items[]` shape so GTM forwards it verbatim. */
export interface PackageItem {
  item_id: string; // stable slug, e.g. "growth-monthly"
  item_name: string; // human name, e.g. "Growth"
  price: number; // unit price in `currency`
  quantity?: number; // defaults to 1
  item_category?: string; // e.g. "package"
  item_variant?: string; // e.g. "monthly" | "one_time"
}

interface EcommercePayload {
  currency?: string;
  value?: number;
  items: PackageItem[];
  transaction_id?: string;
  coupon?: string;
  payment_type?: string;
}

function itemsValue(items: PackageItem[]): number {
  return items.reduce((sum, i) => sum + i.price * (i.quantity ?? 1), 0);
}

/**
 * Push a GA4 ecommerce event. `ecommerce` rides at the TOP level of dataLayer
 * (GA4 tags read it from there), `v1be` still carries locale/page_path.
 * The `ecommerce: null` reset is Google's own recommended pattern — without it
 * a previous event's items bleed into the next one.
 */
function trackEcommerce(event: V1beEvent, payload: EcommercePayload, extra: DL = {}): void {
  const dl = dataLayer();
  dl.push({ ecommerce: null, v1be: undefined });
  dl.push({
    event,
    ecommerce: {
      currency: payload.currency ?? "USD",
      value: payload.value ?? itemsValue(payload.items),
      ...(payload.transaction_id ? { transaction_id: payload.transaction_id } : {}),
      ...(payload.coupon ? { coupon: payload.coupon } : {}),
      ...(payload.payment_type ? { payment_type: payload.payment_type } : {}),
      items: payload.items.map((i) => ({ quantity: 1, ...i })),
    },
    v1be: { ...extra, locale: currentLocale(), page_path: currentPath() },
  });
}

/** A package's details became visible (pricing card expanded / detail page). */
export function trackViewItem(item: PackageItem): void {
  trackEcommerce("view_item", { items: [item] });
}

/** A package was picked from the pricing list. */
export function trackSelectItem(item: PackageItem): void {
  trackEcommerce("select_item", { items: [item] });
}

/** Checkout started for a package. */
export function trackBeginCheckout(items: PackageItem[], coupon?: string): void {
  trackEcommerce("begin_checkout", { items, coupon });
}

/** Payment details entered. */
export function trackAddPaymentInfo(items: PackageItem[], payment_type?: string): void {
  trackEcommerce("add_payment_info", { items, payment_type });
}

export interface PurchaseEvent {
  transaction_id: string; // REQUIRED — dedup key for GA4/Ads/Meta CAPI
  items: PackageItem[];
  value?: number; // defaults to sum(items)
  currency?: string; // defaults to USD
  coupon?: string;
  payment_type?: string;
}

const PURCHASE_GUARD_KEY = "v1be_purchases_v1";

/**
 * Fire the canonical `purchase`. Guarded against double-fire (thank-you page
 * refresh, back/forward cache) by remembering recent transaction_ids — the
 * classic source of double-counted revenue in every ad platform at once.
 */
export function trackPurchase(p: PurchaseEvent): void {
  let seen: string[] = [];
  try {
    seen = JSON.parse(window.localStorage.getItem(PURCHASE_GUARD_KEY) || "[]");
  } catch {
    /* private mode → guard is session-only */
  }
  if (seen.includes(p.transaction_id)) return;
  try {
    window.localStorage.setItem(
      PURCHASE_GUARD_KEY,
      JSON.stringify([...seen, p.transaction_id].slice(-20)),
    );
  } catch {
    /* ignore */
  }
  trackEcommerce("purchase", {
    transaction_id: p.transaction_id,
    items: p.items,
    value: p.value,
    currency: p.currency,
    coupon: p.coupon,
    payment_type: p.payment_type,
  });
}

/* ============================ Consent Mode v2 ============================= */

const CONSENT_KEY = "v1be_studio_consent_v1";
type ConsentChoice = "granted" | "denied";

/**
 * Two channels, deliberately separate:
 *  • gtag consent update — Google's built-in gating (GA4/Ads react instantly).
 *  • the `consent_update` dataLayer EVENT — GTM's "EV - consent granted"
 *    trigger uses it to fire Meta/LinkedIn/Clarity base tags the moment the
 *    visitor accepts, without waiting for the next page load.
 * Only explicit user action pushes the event; silent restores must NOT, or
 * base pixels would double-fire PageView on every return visit (once via
 * All Pages, once via the event).
 */
function applyConsent(choice: ConsentChoice, pushEvent: boolean): void {
  const state = {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
  window.gtag?.("consent", "update", state);
  if (pushEvent) track("consent_update", { consent: choice, ...state });
}

/** True once the visitor has made any explicit choice. */
export function hasStoredConsent(): boolean {
  try {
    return Boolean(window.localStorage.getItem(CONSENT_KEY));
  } catch {
    return false;
  }
}

export function grantConsent(): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, "granted");
  } catch {
    /* private mode, consent is session-only, still applied */
  }
  applyConsent("granted", true);
}

export function denyConsent(): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, "denied");
  } catch {
    /* ignore */
  }
  applyConsent("denied", true);
}

/**
 * Safety net for a previously stored choice. The REAL restore happens
 * synchronously in BaseLayout <head>: the consent *default* is read from
 * localStorage before GTM loads, so returning visitors' very first page_view
 * is already consented. This late re-apply only covers the edge where the
 * head snippet could not read storage; it never pushes the consent_update
 * event (see applyConsent).
 */
export function restoreConsent(): void {
  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
  if (stored === "granted") applyConsent("granted", false);
  // "denied" or null → leave the head default (denied) untouched.
}

/* ===================== Auto-instrumented interactions ==================== */

/**
 * One delegated listener captures every CTA and contact-channel click without
 * per-component wiring:
 *   • `[data-cta]` elements  → cta_click
 *   • mailto:/tel: links     → contact_channel_click
 *   • known social profiles  → contact_channel_click
 * Location is derived from the nearest section id / heading so GTM sees where
 * on the page the click happened.
 */
function onDocumentClick(e: MouseEvent): void {
  const target = e.target as Element | null;
  const el = target?.closest?.("a, button, [data-cta]") as HTMLElement | null;
  if (!el) return;

  const link = el.closest("a") as HTMLAnchorElement | null;
  const href = link?.getAttribute("href") || "";

  const channel = channelFor(href);
  if (channel) {
    track("contact_channel_click", { channel, link_url: href });
    return;
  }

  const cta = el.closest("[data-cta]") as HTMLElement | null;
  if (cta) {
    track("cta_click", {
      cta_id: cta.dataset.cta || "primary",
      cta_label: (cta.textContent || "").trim().slice(0, 80),
      cta_destination: cta.closest("a")?.getAttribute("href") || undefined,
      cta_location: locationLabel(cta),
    });
  }
}

function channelFor(href: string): string | null {
  if (!href) return null;
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (/linkedin\.com/i.test(href)) return "linkedin";
  if (/instagram\.com/i.test(href)) return "instagram";
  if (/(^|\/\/)(x\.com|twitter\.com)/i.test(href)) return "x";
  if (/wa\.me|whatsapp/i.test(href)) return "whatsapp";
  return null;
}

function locationLabel(el: HTMLElement): string {
  const section = el.closest("section, header, footer, [id]") as HTMLElement | null;
  if (!section) return "unknown";
  if (section.id) return section.id;
  const heading = section.querySelector("h1, h2")?.textContent?.trim();
  return heading?.slice(0, 60) || section.tagName.toLowerCase();
}

/* ============================ Init ======================================= */

const publicApi = {
  track,
  trackLead,
  trackViewItem,
  trackSelectItem,
  trackBeginCheckout,
  trackAddPaymentInfo,
  trackPurchase,
  grantConsent,
  denyConsent,
  hasStoredConsent,
};

/** Called once from BaseLayout after hydration. Idempotent. */
export function initAnalytics(): void {
  if (typeof window === "undefined") return;
  if (window.v1beAnalytics) return; // guard against double init
  window.v1beAnalytics = publicApi;
  restoreConsent();
  document.addEventListener("click", onDocumentClick, { capture: true, passive: true });
}
