/**
 * Kanonik route tablosu — tek doğruluk kaynağı (CLAUDE.md §9.3).
 * llms.txt bu tablodan build-time üretilir, böylece asla eskimez.
 * Yeni sayfa eklendiğinde burası güncellenir.
 */
export interface RouteEntry {
  /** Locale-siz, trailing-slash'lı path. */
  path: string;
  title: string;
  /** BLUF-style, ≤155 char açıklama. llms.txt + insan okuması için. */
  description: string;
}

export const ROUTES: readonly RouteEntry[] = [
  {
    path: "/",
    title: "Home",
    description:
      "GEO-first web design, development and content — websites engineered to be cited by ChatGPT, Gemini and Perplexity, not just indexed.",
  },
  {
    path: "/packages/",
    title: "Packages",
    description:
      "Two website paths: Start from zero, or Fix what's broken with a rebuild that protects existing SEO equity. A free audit helps choose the path.",
  },
  {
    path: "/process/",
    title: "Process",
    description:
      "How an engagement runs, step by step: audit, build, content and measure. Launch day is where GEO starts, not ends.",
  },
  {
    path: "/work/",
    title: "Work",
    description:
      "Case studies from v1be studio, starting with v1be.io — our own platform site, engineered and validated as case zero.",
  },
  {
    path: "/work/v1be-io/",
    title: "Case study: v1be.io",
    description:
      "How we engineered v1be.io as case zero: a full schema graph, citability-scored content and Rich Results Test validation.",
  },
  {
    path: "/work/studio-v1be/",
    title: "Case study: studio.v1be.io",
    description:
      "How v1be studio applies its GEO-first system to its own bilingual service site: localized content, schema and crawlable routes.",
  },
  {
    path: "/privacy/",
    title: "Privacy Policy",
    description: "How v1be studio collects, uses and protects information submitted through this site.",
  },
  {
    path: "/terms/",
    title: "Terms & Conditions",
    description: "The terms that govern use of the v1be studio website and its services.",
  },
  {
    path: "/about/",
    title: "About",
    description:
      "v1be studio is the web design and development arm of v1be — the same GEO methodology and tooling, delivered as a service.",
  },
  {
    path: "/contact/",
    title: "Get a free audit",
    description:
      "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first.",
  },
] as const;

/** Routes with real English and Turkish documents. Legal pages and 404 stay English-only. */
export const BILINGUAL_PATHS = new Set([
  "/",
  "/packages/",
  "/process/",
  "/work/",
  "/work/v1be-io/",
  "/work/studio-v1be/",
  "/about/",
  "/contact/",
]);

export function hasLocalizedCounterpart(path: string): boolean {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return BILINGUAL_PATHS.has(normalized);
}
