-- v1be studio free-audit intake.
-- All writes are performed by the audit-request-submit Edge Function with the
-- service-role key. The public anon role receives no table policy and cannot
-- insert, read, update, or delete audit requests directly.

create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 3 and 254),
  website text not null check (char_length(website) between 4 and 2048),
  message text check (message is null or char_length(message) <= 4000),
  project_path text check (project_path is null or char_length(project_path) <= 160),
  project_needs text check (project_needs is null or char_length(project_needs) <= 1000),
  source text not null default 'contact' check (char_length(source) <= 80),
  page_url text check (page_url is null or char_length(page_url) <= 2048),

  email_notified boolean not null default false,
  email_provider_id text,
  email_error text,
  notified_at timestamptz
);

alter table public.audit_requests enable row level security;

create index if not exists audit_requests_created_at_idx
  on public.audit_requests (created_at desc);

comment on table public.audit_requests is
  'Free audit requests submitted through studio.v1be.io; service-role access only.';
