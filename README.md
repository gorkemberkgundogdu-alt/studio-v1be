# v1be studio (`studio.v1be.io`)

The GEO/SEO-first web design & development arm of [v1be](https://v1be.io). This
site is itself proof of the methodology it sells: a full schema graph, dynamic
`llms.txt`, deliberate AI-crawler access, and content that never diverges from
its structured data.

Built per [`CLAUDE.md`](./CLAUDE.md) — that file is the single source of design,
content, animation and SEO/GEO decisions.

## Stack

- **Astro** (static output, `trailingSlash: "always"`)
- **Tailwind CSS v4** via `@tailwindcss/vite` — tokens live in `src/styles/global.css` `@theme` (no `tailwind.config.js`)
- **TypeScript** strict, `@/*` → `src/*`
- **three** — the only notable runtime dep (idle-loaded robot mascot)
- **sharp** — dev-only, builds the branded OG image

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # gen-og → astro build (outputs dist/)
npm run preview    # serve the built site
npm run check      # astro check (0 errors expected)
npm run gen:og     # regenerate public/og-default.png
npm run deploy     # local build + cPanel-ready zip
```

## Configuration

- **`src/config/site.ts`** — name, url, email, canonical description, social, parent org. Single source of truth. `SITE.url` must equal `astro.config.mjs` `site`.
- **`src/config/schemas.ts`** — JSON-LD builders (Service, FAQPage, Breadcrumb, WebPage/AboutPage). Organization + WebSite are auto-injected by `BaseLayout.astro`.
- **`src/config/routes.ts`** — canonical route table; drives the dynamic `/llms.txt`.
- **`.env`** — `PUBLIC_FORM_ENDPOINT` (Formspree-style POST URL). Blank ⇒ the contact form degrades to a `mailto:` link. See `.env.example`.
- **`src/i18n/`** — English only in v1; architecture stays i18n-ready (add a locale in `locales.ts` + `astro.config.mjs` + `index.ts` in one PR).

## SEO/GEO infrastructure

- Schema graph on every page (Organization + WebSite site-wide; page-level Service / FAQPage / Breadcrumb / AboutPage).
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- `src/pages/llms.txt.ts` — dynamic endpoint generated from the route table (can't go stale).
- Sitemap via `@astrojs/sitemap`; `public/og-default.png` 1200×630 generated at build.

## Deploy

Pushes to `main` are deployed automatically to `studio.v1be.io` by
`.github/workflows/deploy.yml`. The workflow checks the project, builds the static
site, uploads `dist/` over FTP, then verifies the homepage, `robots.txt`, `llms.txt`
and sitemap.

Configure these GitHub Actions repository secrets:

- `FTP_HOST`
- `FTP_USER`
- `FTP_PASS`
- `PUBLIC_FORM_ENDPOINT` (optional; the contact form uses its email fallback when blank)

The default cPanel target is `public_html/studio/`. If the subdomain document root
is different, set the `STUDIO_FTP_SERVER_DIR` repository variable, including its
trailing slash. The workflow can also be started manually with **Run workflow**.

Static output is generated in `dist/`. `public/.htaccess` targets Apache/cPanel
(HTTPS + non-www canonical, cache-control, security headers, `404.html`). For a
manual release, `npm run deploy` produces `dist-deploy/v1be-studio.zip`.

## Adding a logo

Drop a square PNG (≥112px) at `public/logo.png` — `BaseLayout.astro` detects it
and adds `logo` to the Organization schema automatically.
