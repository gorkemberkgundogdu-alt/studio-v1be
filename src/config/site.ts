/**
 * Site-geneli sabitler. Tek doğruluk kaynağı (CLAUDE.md §2).
 * URL değişirse yalnızca burası ve astro.config.mjs `site` güncellenir.
 */
export const FOUNDER = {
  id: "https://studio.v1be.io/#gorkemberkgundogdu",
  name: "Görkem Berk Gündoğdu",
  jobTitle: "UI/UX Designer & Co-Founder",
  description: "Co-Founder of v1be studio.",
  linkedin: "https://www.linkedin.com/in/gorkemberkgundogdu/",
} as const;

export const SITE = {
  name: "v1be studio",
  tagline: "GEO-first web design & development",
  /** astro.config.mjs `site` ile aynı olmak zorunda. */
  url: "https://studio.v1be.io",
  /** Organization JSON-LD + footer için. */
  foundingYear: 2026,
  email: "hello@v1be.io",
  phone: "+90 505 502 97 63",
  /** Ana marka — Organization.parentOrganization ve footer "part of v1be". */
  parentOrg: {
    name: "v1be",
    url: "https://v1be.io",
    id: "https://v1be.io/#organization",
  },
  social: {
    // Hesaplar açıldıkça doldurulur; boş string'ler JSON-LD sameAs'e girmez.
    linkedin: "https://www.linkedin.com/company/v1be-vibemarketing/",
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

const SUPABASE_URL = (import.meta.env.PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * Static site audit taleplerini Supabase Edge Function'a yollar. Anon key
 * tarayıcıda kullanılmak üzere tasarlanmıştır; veritabanına doğrudan erişim
 * vermez. Her iki değer de yoksa form hello@v1be.io mailto fallback'ine döner.
 */
export const AUDIT_SUBMISSION = {
  endpoint:
    SUPABASE_URL && SUPABASE_ANON_KEY
      ? `${SUPABASE_URL}/functions/v1/audit-request-submit`
      : "",
  anonKey: SUPABASE_ANON_KEY,
  configured: Boolean(SUPABASE_URL && SUPABASE_ANON_KEY),
} as const;
