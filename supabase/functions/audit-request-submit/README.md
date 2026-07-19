# audit-request-submit

Supabase Edge Function for the `studio.v1be.io` free-audit form. It validates
the request, stores it in `public.audit_requests`, and sends a notification to
`hello@v1be.io` through Resend.

The browser receives only the public Supabase URL and anon key. The function
keeps `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` server-side.

Activation and verification steps are documented in
`docs/audit-form-supabase-handoff.md`.
