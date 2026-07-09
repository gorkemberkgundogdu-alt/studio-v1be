// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Tek doğruluk kaynağı: locale listesi src/i18n/locales.ts + SITE.url ile senkron.
// English-only in v1 (CLAUDE.md §8): boş locale route'ları üretilmez.
export default defineConfig({
  site: "https://studio.v1be.io",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
