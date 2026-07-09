/**
 * Locale altyapısı — astro.config.mjs i18n bloğuyla senkron tutulur.
 * v1'de yalnızca English aktif (CLAUDE.md §8). Mimari i18n-ready kalır:
 * TR içeriği hazır olduğunda LOCALES + astro.config + sitemap + dictionaries
 * tek PR'da güncellenir (bu dosyalar sync noktalarıdır).
 */
export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** hreflang/og:locale için BCP-47 karşılıkları. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
};

export const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
};

/** Dil değiştiricide görünen yerel adlar (v1'de tek dil, ileri kullanım için). */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
};

/** Intl API'leri için BCP-47 etiketi (tarih formatı vb.). */
export const INTL_LOCALES: Record<Locale, string> = {
  en: "en-US",
};

/** Locale'e göre path üretir. Varsayılan dil prefix'sizdir. */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return locale === DEFAULT_LOCALE ? withSlash : `/${locale}${withSlash}`;
}

/** Bir path'in locale-siz halini döndürür (hreflang alternatifleri için). */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  // LOCALES'i string[] olarak gez: tek dilde narrowing `never` üretmesin (i18n-ready).
  for (const locale of LOCALES as readonly string[]) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      const rest = pathname.slice(locale.length + 1) || "/";
      return { locale: locale as Locale, path: rest };
    }
  }
  return { locale: DEFAULT_LOCALE, path: pathname };
}
