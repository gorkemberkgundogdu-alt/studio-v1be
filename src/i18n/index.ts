import { en, type Dictionary } from "./en";
import type { Locale } from "./locales";

// v1'de tek dil. Yeni dil: ./tr ekle, buraya spread et, locales.ts + astro.config güncelle.
const dictionaries: Record<Locale, Dictionary> = { en };

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from "./locales";
export type { Dictionary };
