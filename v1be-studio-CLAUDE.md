# v1be studio — Full Site Build Spec (Claude Code)

**KİME:** Claude Code — boş bir klasörde başlat, bu dosyayı repo köküne `CLAUDE.md` olarak koy ve "Build the site described in CLAUDE.md" de.
**NE YAPILACAK:** Site sıfırdan inşa edilecek. Tasarım, içerik, animasyon ve SEO/GEO kararlarının tamamı bu dosyada — Claude Code'un bu dosya dışında karar icat etmesi gerekmiyor; boşluk bulursa sormalı, varsaymamalı.

---

## 1. WHAT THIS IS

v1be studio (`studio.v1be.io`) is the productized service arm of v1be (`v1be.io`): a GEO/SEO-first web design & development studio. This site must itself be a proof of the methodology it sells — a technical SEO auditor viewing source must find nothing to criticize.

**Canonical brand description (use verbatim in Organization schema, llms.txt, About, and FAQ answer 1):**
> "v1be studio is the web design and development arm of v1be. We build fast, structured websites engineered to be read, understood and cited by AI search engines like ChatGPT, Gemini, and Perplexity — with SEO- and GEO-optimized content built in."

Conversion goal: the visitor should reach a single, always-available CTA — **"Get a free audit"** — as fast as possible. Every design decision optimizes speed-to-contact, not time-on-site.

## 2. STACK & CONVENTIONS

- **Astro** (latest), static output. **Tailwind CSS** properly configured from the start (verify a `text-[13vw]` style arbitrary class renders before building pages). TypeScript strict.
- No React/framework islands needed; interactive parts (mascot, scroll FX, mobile nav) are vanilla TS in Astro `<script>` blocks or `src/lib/*.ts`.
- No animation libraries (no GSAP/Lenis/Locomotive). No CSS frameworks beyond Tailwind. Zero unnecessary dependencies; `three` is the only notable runtime dep (mascot).
- Single source of truth: `src/config/site.ts` (name, url, email, description, social, parent org url), `src/config/schemas.ts` (JSON-LD builders), i18n-ready folder structure but **English only in v1** (see §8 — do NOT scaffold empty locale routes; we learned this the hard way on the main site).
- Every page renders through `BaseLayout.astro` which owns `<head>` via a `Seo.astro` component and injects JSON-LD via a `JsonLd.astro` component with a `schemas` prop (mirror the main site's proven architecture).

## 3. BRAND / DESIGN LANGUAGE

Same family as v1be.io, studio variant ("blueprint/redline"):

- Background ink: `#0C0F14`; text: `#D7E2EA`; accent (redline): `#FF4D2E` — used sparingly (CTA, numbers, thin rules, hover).
- Light sections allowed (e.g. one white section for contrast on Home).
- Font: **Montserrat Variable**, self-hosted via fontsource (copy the pattern from the main site: preload woff2, no Google Fonts requests).
- Subtle blueprint grid texture on dark sections: 1px lines `rgba(215,226,234,0.05)`, 80px cells.
- Logo: text-lock "v1be **studio**" (studio in accent color) until a logo asset exists; reserve `public/logo.png` (square ≥112px) and reference it in Organization schema only when the file exists (optional field, main-site pattern).
- Design tone: engineered, precise, confident. Generous whitespace, big type, no stock-photo feel. All imagery = our own screenshots/renders.

## 4. SITE MAP

| Route | Purpose |
|---|---|
| `/` | Home — the 5-section conversion page (see §5) |
| `/packages/` | Productized offers (3 tiers, see §6) |
| `/process/` | How an engagement runs, step by step |
| `/work/` | Case studies index (starts with the v1be.io dogfooding case) |
| `/work/v1be-io/` | Case study #1: our own platform site |
| `/about/` | Who we are + relation to v1be + the canonical description |
| `/contact/` | The audit request form / contact |
| `/llms.txt` | Dynamic endpoint (see §9) |
| `/rss.xml` | Only if/when studio publishes articles — **do NOT create now; no blog in v1** (main v1be.io blog is the content home; studio pages link to it) |

Header (all pages): logo left; nav: Packages, Process, Work, About; CTA button right: "Get a free audit" → `/contact/`. Footer: canonical description, nav links, link to v1be.io ("part of v1be"), email, legal minimal.

## 5. HOME — FIVE SECTIONS

Section order and content. All copy below is final v1 copy (refine typography, not meaning):

**S1 — Hero (dark).** Giant display heading: `v1be studio` (gradient text `linear-gradient(180deg, #5A6470 0%, #C4D6E2 100%)`, clip to text). Subline: "Websites engineered to be cited — not just indexed. GEO-first design, development and content for brands and agencies." CTA: Get a free audit. Right/center: the robot mascot (§7), `look="blueprint"`, nameplate `v1ben.`.

**S2 — What we do (dark).** H2: "What we do". Three cards:
1. **GEO-first websites** — "Design and build engineered for how AI engines read: answer-first structure, semantic HTML, structured data as infrastructure."
2. **Content engine** — "SEO- and GEO-optimized articles produced by the v1be pipeline, scored for citability before publishing, human-approved always."
3. **Visibility & proof** — "Baseline audits, schema validation and before/after measurement across ChatGPT, Gemini and Perplexity."
Section-end CTA: Get a free audit.

**S3 — How we do it (light/white, rounded top).** H2: "How we do it". Four numbered steps (redline numbers): 01 Audit ("We snapshot how AI engines currently see you — or don't."), 02 Build ("Static-first Astro build, full schema graph, llms.txt, crawler access — audit-proof from day one."), 03 Content ("Citable articles in your brand voice, pushed as drafts, published only with your approval."), 04 Measure ("We re-run the snapshot and show the before/after. Launch day is where GEO starts, not ends."). Section-end CTA.

**S4 — Work (dark).** H2: "Work". Case card: **v1be.io** — "Our own platform site is case zero: schema graph, citability-scored content in progress, validated in Google's Rich Results Test. We practice on ourselves first." → link `/work/v1be-io/`. A second slot styled as an open slot: "This slot is reserved for a brand that wants to be cited." + CTA.

**S5 — Contact (dark).** H2: "Get your free audit". One-paragraph promise: "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first. No deck, no fluff; a working session." Simple form (name, email, website URL, message) posting to the Supabase audit Edge Function when configured, with a direct email fallback. FAQ block (5 items, §10) below the form — visible accordion + FAQPage schema from the same data.

## 6. PACKAGES PAGE (v1 content)

Three tiers as cards — names/prices are placeholders flagged for founder review (`<!-- TODO: pricing decision -->`), scope text is real:
1. **Audit** — one-time: AI visibility snapshot (ChatGPT/Gemini/Perplexity), technical GEO audit, prioritized fix list.
2. **Build** — project: GEO-first website (design + Astro build + full schema/llms.txt/robots infrastructure + launch validation).
3. **Grow** — monthly: content engine (citability-scored articles as drafts), continuous fixes, monthly before/after visibility report.
Each card: what's included (5–7 bullets), "Get a free audit" CTA (audit is the funnel entry for all tiers). Service JSON-LD for each tier.

## 7. ROBOT MASCOT (shared component from main site)

Source repo on this machine: **`C:\Users\HP\v1be_website\`**. Copy these three files unchanged into the same relative paths here:
- `src\components\sections\RobotMascot.astro`
- `src\lib\robot-mascot.ts`
- `src\lib\robot-looks.ts`

Then:
1. `npm i three` (and types if needed).
2. In `robot-looks.ts`: extend `RobotLook` with optional `bodyColor?: number; darkColor?: number; silverColor?: number; lensColor?: number;` and add a `blueprint` look = copy of `classic` values plus `bodyColor: 0x3a4550, darkColor: 0x14181d, silverColor: 0xaeb8c2, lensColor: 0xff4d2e`.
3. In `robot-mascot.ts`: change the four material color definitions to `look.bodyColor ?? 0x63aca6` (equivalents for dark/silver/lens) — fallbacks keep the main site's palette intact if files are ever synced back.
4. The mascot component expects CSS vars `--font-mono`, `--color-ink-muted`, `--color-line`, `--color-surface` for its nameplate — define them in this repo's global.css.
5. Usage: Hero only, `<RobotMascot look="blueprint" name="v1ben." />`. It is decorative (`aria-hidden`), idle-loaded, and must stay that way.

## 8. LANGUAGES

English only in v1. Architecture stays i18n-ready (translation dictionaries pattern like the main site is welcome), but **no locale routes are generated until real content exists** — empty locale indexes are a known anti-pattern we already had to patch on v1be.io with conditional noindex. When TR content is ready we add `/tr/` in one PR.

## 9. SEO/GEO INFRASTRUCTURE (the product proof — nothing here is optional)

1. **Schema graph** on every page via BaseLayout: `Organization` (`@id: https://studio.v1be.io/#organization`, name "v1be studio", canonical description, url, email, `parentOrganization: { "@id": "https://v1be.io/#organization" }`, `sameAs` when profiles exist, optional `logo`) + `WebSite`. Page-level: `Service` (packages, what-we-do), `FAQPage` (contact FAQ), `BreadcrumbList` (all non-home pages), `WebPage`/`AboutPage` on About. All builders in `src/config/schemas.ts`, fed from the same dictionaries as visible content (never diverge visible text and schema).
2. **robots.txt**: allow all; explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended; sitemap line. Comment: "AI crawlers deliberately allowed (GEO)".
3. **llms.txt** as dynamic endpoint (`src/pages/llms.txt.ts`): canonical description + page list generated from the route table at build time so it cannot go stale.
4. **Sitemap** via @astrojs/sitemap.
5. **Meta**: unique title/description per page (descriptions BLUF-style, ≤155 chars); OG + Twitter card tags; og-image `public/og-default.png` 1200×630 — create a simple branded placeholder PNG at build if no asset provided (never ship a 404 og:image; second lesson learned from the main site).
6. **Content rules baked into components**: single h1 per page; heading levels never skip; every image has a descriptive alt (never the page title verbatim); all copy server-rendered in HTML.
7. Link to v1be.io/blog articles where relevant (What we do → content engine card links "see the research on how AI engines cite"). Studio has **no own blog** in v1 — authority concentrates on the main domain.

## 10. FAQ (contact page — visible + schema, same data source)

1. **What is v1be studio?** → canonical description + "Every site we ship is validated in Google's Rich Results Test before launch."
2. **What is GEO and how is it different from SEO?** → "GEO (Generative Engine Optimization) makes your brand visible inside AI-generated answers from ChatGPT, Gemini and Perplexity. SEO optimizes for ranked links; GEO optimizes for being cited in the answer itself. They overlap but reward different content structures."
3. **What does the free audit include?** → "A snapshot of how AI engines currently present your brand, a technical GEO review of your site (schema, crawler access, structure), and a prioritized fix list — delivered in a working session, not a slide deck."
4. **Do you publish content automatically?** → "No. Content is produced by the v1be pipeline, scored for citability, and pushed to your CMS as a draft. Nothing goes live without human approval."
5. **How is v1be studio related to v1be?** → "v1be studio is the services arm of v1be, the AI marketing agent platform. The studio builds and optimizes your web presence using the same methodology and tooling."

## 11. ANIMATION LAYER (build last, after everything above passes checks)

**Hard constraints:**
- **SEO-safe reveal:** nothing hidden by default. Inline script adds `js-anim` to `<html>`; animation initial states exist only under `.js-anim` selectors; IntersectionObserver reveals. JS-off / crawler / view-source = fully visible page.
- **No scroll-jacking:** never override native scroll; no wheel preventDefault, no snap-lock. All effects scroll-LINKED via progress values.
- **GPU-only:** animate `transform` / `opacity` / `clip-path` exclusively. Zero layout shift (space reserved from first paint).
- **`prefers-reduced-motion: reduce`** disables the entire layer (mascot already follows this; match it).
- Passive listeners; one rAF loop; `will-change` only while near viewport.

**Effects:**
1. "Go deep" section transitions on Home: each section after Hero enters through a scroll-linked circular reveal — `clip-path: circle(calc(8% + var(--reveal) * 142%) at 50% 0%)`, `--reveal` (0..1) driven by section scroll progress in the rAF loop. Prefer pure CSS scroll-driven animation under `@supports (animation-timeline: view())`, JS path otherwise.
2. One-time stagger reveals inside sections: children `translateY(24px)→0` + fade, 550ms, `cubic-bezier(0.25,0.1,0.25,1)`, 80ms stagger, total cap 400ms, unobserve after firing.
3. CTA micro-interaction: hover `translateY(-2px) scale(1.02)` 150ms + press state. No pulse/shimmer loops.
4. Subtle outgoing-section parallax (`translateY(progress * -4%)`).

## 12. ACCEPTANCE CHECKLIST (definition of done)

1. `npm run build` clean; `astro check` 0 errors.
2. `view-source` on every route: all copy present, no default-hidden content.
3. JS disabled: full site readable; forms degrade gracefully.
4. Reduced-motion ON: static page, everything visible; mascot renders single frame.
5. Rich Results Test (or schema validator on built HTML): Organization + WebSite everywhere; Service on packages; FAQPage on contact; Breadcrumb on subpages — all valid.
6. robots.txt, llms.txt, sitemap-index reachable in built output; og-image resolves (no 404).
7. Lighthouse mobile on Home: Performance ≥ 90, CLS < 0.1, SEO ≥ 95.
8. Mascot: renders in blueprint palette, follows cursor on fine pointers, self-gazes on touch, static frame under reduced motion.
9. Every page has exactly one h1; no heading level skips; all images have descriptive alts.
10. The word "Placeholder" appears nowhere in built output (pricing TODOs live in HTML comments only).
