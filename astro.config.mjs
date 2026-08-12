// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Tek doğruluk kaynağı: locale listesi src/i18n/locales.ts + SITE.url ile senkron.
// Locale listesi src/i18n/locales.ts ile senkron tutulur.
export default defineConfig({
  site: "https://studio.v1be.io",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", tr: "tr" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
