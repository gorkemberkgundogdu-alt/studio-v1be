# Free audit form — Supabase handoff

The repository-side implementation is complete. Until the values below are
configured, the form intentionally falls back to opening an email addressed to
`hello@v1be.io`.

## Architecture

`AuditForm.astro` sends JSON to the `audit-request-submit` Supabase Edge
Function. The function validates and stores the lead first, then asks Resend to
notify `hello@v1be.io`. If Resend is temporarily unavailable, the request stays
in `audit_requests` with `email_notified = false` and the visitor still sees a
successful receipt state.

No service-role or Resend credential is included in the browser bundle.

## Actions requiring Supabase / Resend access

1. Link the Supabase CLI to the v1be project, or open its SQL Editor.
2. Apply `supabase/migrations/20260719193000_audit_requests.sql`.
3. Confirm that the `audit_requests` table has RLS enabled and no anon policies.
4. In Resend, verify `v1be.io` as a sending domain if it is not already verified.
5. Add the required server-side function secrets. The canonical recipient,
   sender, and production origin are explicit deployment configuration rather
   than duplicated defaults inside the Edge Function:

   ```bash
   supabase secrets set RESEND_API_KEY=...
   supabase secrets set AUDIT_NOTIFY_TO=hello@v1be.io
   supabase secrets set "AUDIT_EMAIL_FROM=v1be Studio <hello@v1be.io>"
   supabase secrets set AUDIT_ALLOWED_ORIGINS=https://studio.v1be.io,http://localhost:4321,http://127.0.0.1:4321,http://localhost:4322,http://127.0.0.1:4322
   ```

   `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are supplied automatically by
   the Supabase Edge Functions runtime.

6. Deploy the function with JWT verification enabled:

   ```bash
   supabase functions deploy audit-request-submit
   ```

7. In the `studio-v1be` GitHub repository, create these Actions secrets:

   - `PUBLIC_SUPABASE_URL`: Project Settings → API → Project URL
   - `PUBLIC_SUPABASE_ANON_KEY`: Project Settings → API → anon/public key

   These values are designed to be public. Never put the service-role key or
   Resend API key in GitHub build variables prefixed with `PUBLIC_`.

8. Re-run the `Deploy to cPanel (studio.v1be.io)` workflow, or push a new commit
   to `main` after the secrets exist.

## End-to-end verification

1. Open `https://studio.v1be.io/contact/` in a private browser window.
2. Submit a clearly labelled test request.
3. Confirm the inline success state appears and no email application opens.
4. Confirm a new row exists in `public.audit_requests`.
5. Confirm `email_notified = true` and `email_error is null`.
6. Confirm the message arrives at `hello@v1be.io`.
7. Reply to the notification and confirm the reply targets the visitor's email.

Useful verification query:

```sql
select
  created_at,
  name,
  email,
  website,
  source,
  email_notified,
  email_error
from public.audit_requests
order by created_at desc
limit 20;
```

## Follow-up hardening

The included honeypot blocks basic bots. If spam appears after launch, add
Cloudflare Turnstile and verify its token inside the Edge Function before the
database insert. Do not expose the Turnstile secret to the browser.
