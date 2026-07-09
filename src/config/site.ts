/**
 * Site-geneli sabitler. Tek doğruluk kaynağı (CLAUDE.md §2).
 * URL değişirse yalnızca burası ve astro.config.mjs `site` güncellenir.
 */
export const SITE = {
  name: "v1be studio",
  tagline: "GEO-first web design & development",
  /** astro.config.mjs `site` ile aynı olmak zorunda. */
  url: "https://studio.v1be.io",
  /** Organization JSON-LD + footer için. */
  legalName: "v1be studio",
  foundingYear: 2026,
  email: "hello@v1be.io",
  /** Ana marka — Organization.parentOrganization ve footer "part of v1be". */
  parentOrg: {
    name: "v1be",
    url: "https://v1be.io",
    id: "https://v1be.io/#organization",
  },
  social: {
    // Hesaplar açıldıkça doldurulur; boş string'ler JSON-LD sameAs'e girmez.
    linkedin: "https://www.linkedin.com/company/v1be-vibemarketing/about/",
    instagram: "",
    x: "",
  },
  /** OG image fallback (public/ altında). scripts/gen-og.mjs üretir. */
  defaultOgImage: "/og-default.png",
  /**
   * KANONİK marka tarifi (CLAUDE.md §1). Organization schema, llms.txt, About
   * ve FAQ cevap 1 birebir bunu kullanır — asla parafraz etme.
   */
  description:
    "v1be studio is the web design and development arm of v1be. We build fast, structured websites engineered to be read, understood and cited by AI search engines like ChatGPT, Gemini, and Perplexity — with SEO- and GEO-optimized content built in.",
} as const;

/** Ana sitedeki blog — studio kendi blog'unu tutmaz, otoriteyi ana domaine yığar. */
export const PARENT_BLOG_URL = "https://v1be.io/blog/";

/**
 * Contact formunun POST hedefi (Formspree-tarzı). Boşsa form mailto'ya düşer.
 * .env → PUBLIC_FORM_ENDPOINT.
 */
export const FORM_ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT ?? "";
