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

**S2 — What we do (dark).** Full-viewport value statement: "We build websites with the award-grade design, engineered from the ground up to be read and cited by AI search engines." Two equal-size CTAs: "Get a free audit" and "See our work" → `/work/`.

**S3 — How we do it (light/white, rounded top).** H2: "How we do it". Four macro stages: 01 Diagnose (audit the current state or define the opportunity from zero), 02 Design (message, content structure and award-grade UI/UX), 03 Build (semantic HTML, schema graph, llms.txt and crawler access), 04 Validate & measure (launch validation plus the before/after visibility snapshot). CTAs: "Get a free audit" and "See our process".

**S4 — Work (dark).** H2: "v1be, applied." The primary item is one full-width lime case card: **v1be.io** — "Our own platform site is case zero: schema graph, citability-scored content in progress, validated in Google's Rich Results Test. We practice on ourselves first." The entire card links to `/work/v1be-io/`. A compact, visually secondary dashed card follows: "This slot is reserved for a brand that wants to be cited." + "Get a free audit" CTA. On short desktop viewports, the scene uses the existing `data-paginate-scroll` boundary behavior so neither card is clipped.

**S5 — FAQ (dark).** Visible accordion with six decision-priority questions selected from the Contact FAQ source via `homeOrder`: free-audit scope, cost, duration, starting without a website, GEO vs SEO, and the difference from a regular agency. The visible six-item list and Home FAQPage schema use the same `homeFaqItems` array.

**S6 — Contact (dark).** H2: "Get your v1be". One-paragraph promise: "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first. No deck, no fluff; a working session." Simple form (name, email, website URL, message), plus direct email link.

## 6. PACKAGES PAGE (v1 content)

Three tiers as cards — names/prices are placeholders flagged for founder review (`<!-- TODO: pricing decision -->`), scope text is real:
1. **Audit** — one-time: AI visibility snapshot (ChatGPT/Gemini/Perplexity), technical GEO audit, prioritized fix list.
2. **Build** — project: GEO-first website (design + Astro build + full schema/llms.txt/robots infrastructure + launch validation).
3. **Grow** — monthly: content engine (citability-scored articles as drafts), continuous fixes, monthly before/after visibility report.
Each card: what's included (5–7 bullets), "Get a free audit" CTA (audit is the funnel entry for all tiers). Service JSON-LD for each tier.

### Process page — visible engagement system

`/process/` uses the proof-first headline "From first signal to a site you can prove." and a compact engagement map. Two starting conditions (from zero / already live) converge into four macro stages: Diagnose, Design, Build, Validate & measure. A sticky desktop evidence rail links to each stage; every stage pairs the operational copy with an inspectable UI artifact. The three explicit approval gates are Content & Structure, Experience & Visual, and Build, Evidence & Launch. Collaboration promises are a 60-minute kickoff, two written updates per week, one focused review per gate and a two-business-day feedback window. Every Build includes the launch evidence pack and a 30-day checkpoint; ongoing optimization remains an optional Grow engagement. The page uses native smooth scroll plus the shared one-time reveal layer—never Home pagination or scroll-jacking.

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
5. Usage (as-built, supersedes "Hero only" above): Hero (`look="classic"`, no nameplate) and the site-wide Footer (`look="classic"`, no nameplate — sits between the "v1be"/"studio" wordmarks; `greeter`'s close-up framing cropped the mascot's feet and was dropped in favor of `classic`'s full body). Both instances are decorative (`aria-hidden`), idle-loaded, and stay that way; the "blueprint" look and studio-specific color overrides described in steps 2–3 were reverted — `robot-looks.ts`/`robot-mascot.ts` are byte-identical to the main site again, since the real brand palette (not an invented one) made per-look color overrides unnecessary.

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

## 11. ANIMATION LAYER (as-built; supersedes earlier drafts of this section)

**Hard constraints (apply everywhere, including the paginated exception below):**
- **SEO-safe reveal:** nothing hidden by default. Inline script adds `js-anim` to `<html>`; animation initial states exist only under `.js-anim` selectors. JS-off / crawler / view-source = fully visible page, all 7 Home sections' full text present regardless of active/inert state — only `opacity`/`transform`/`pointer-events` are toggled, nothing is ever removed from the DOM.
- **GPU-only:** animate `transform` / `opacity` exclusively. No `filter`/`blur` (measurably expensive on throttled mobile CPUs — cut, not tuned down, after Lighthouse showed multi-second stalls from an earlier depth-scroll draft).
- **`prefers-reduced-motion: reduce`** disables every mechanism below without exception, including the paginated zone (mascot already follows this independently).

**1. One-time stagger reveal (`[data-reveal]`, `lib/scroll-fx.ts`) — the default everywhere:**
Each `<section>` is observed by one `IntersectionObserver` (threshold 0.2); on first intersect, its `[data-reveal]` descendants get `translateY(24px)→0` + fade, 550ms, `cubic-bezier(0.25,0.1,0.25,1)`, staggered 80ms per child capped at 400ms total, then the section is unobserved (no replay on scroll-up). No rAF loop, no scroll-linked continuous transform — this superseded an earlier scroll-linked depth-scroll draft (`translateZ`/`scale` tied to scroll position) that was removed entirely: continuous scroll-tied JS is a standing cost, a one-time reveal gives most of the same feel far cheaper (confirmed via Lighthouse: dropping it measurably improved Performance/LCP).

**2. CTA micro-interaction (`.cta-lift`):** hover `translateY(-2px) scale(1.02)` 150ms + press state. No pulse/shimmer loops.

**3. Paginated wheel controller (`[data-paginate]`, `lib/paginate.ts`) — deliberate, scoped exception to "no scroll-jacking":**
All 6 Home sections (Hero, What we do, How we do it, Work, FAQ, Contact) are one continuous wheel/keyboard-driven paginated zone — one section fully visible at a time, `position: fixed`, cross-fade + slight translateY/scale between them (650ms). There's deliberately no mid-page handoff to native scroll (an earlier draft released control between Work and FAQ; that boundary was the source of a stuck/broken transition, so the zone was extended through Contact instead — no internal boundary left to break). The zone releases exactly once, at the very end: scrolling past Contact hands off to the Footer (rendered by BaseLayout, always plain document flow).
- Gated in **both** CSS and JS on the same conditions, so neither can drift out of sync: `prefers-reduced-motion: no-preference` AND `pointer: fine` AND `min-width: 1024px`. Outside that (mobile, touch, narrow viewport, reduced-motion) `[data-paginate]` sections are plain `position: static` blocks and `.paginate-spacer` collapses to 0 height — the whole zone is inert, full native scroll straight through to the Footer.
- Spacers (`.paginate-spacer`, one `min-h-[100svh]` block per paginated section, 6 total) exist because fixed-position sections don't occupy document flow — without them there'd be no scroll distance for the handoff into the Footer to land on.
- `lib/paginate.ts` keeps `window.scrollY` synced to the active index after every transition, so releasing control at the last section (Contact → Footer) and re-entering it (scrolling back up from the Footer) both happen at a clean, exact boundary — no jump, no stuck fixed overlay left covering the Footer.

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
