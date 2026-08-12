import { FOUNDER, SITE } from "./site";
import { localizePath, type Locale } from "../i18n/locales";

/**
 * JSON-LD üreticileri (CLAUDE.md §9.1). Girdi daima sözlük verisidir; görünen
 * içerik ile yapılandırılmış veri tek kaynaktan beslenir. @context eklenmez —
 * onu JsonLd.astro tek noktadan ekler. Entity'ler @id ile çapraz referans verir.
 *
 * Organization + WebSite BaseLayout.astro'da otomatik enjekte edilir (her sayfa).
 */

export function serviceSchema(opts: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${SITE.url}/#organization` },
    url: new URL(localizePath(opts.locale, opts.path), SITE.url).href,
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[], locale?: Locale) {
  return {
    "@type": "FAQPage",
    ...(locale ? { inLanguage: locale } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Breadcrumb zinciri — her adım mutlak URL taşır (CLAUDE.md §9.1). */
export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
  locale: Locale,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(localizePath(locale, item.path), SITE.url).href,
    })),
  };
}

/** Genel WebPage şeması (non-home sayfalar). */
export function webPageSchema(opts: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  const url = new URL(localizePath(opts.locale, opts.path), SITE.url).href;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: opts.name,
    description: opts.description,
    url,
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: opts.locale,
  };
}

/** About sayfası — WebPage yerine AboutPage (CLAUDE.md §9.1). */
export function aboutPageSchema(opts: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    ...webPageSchema(opts),
    "@type": "AboutPage",
    about: { "@id": `${SITE.url}/#organization` },
  };
}

export function founderSchemas() {
  return [
    {
      "@type": "Person",
      "@id": FOUNDER.id,
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      description: FOUNDER.description,
      worksFor: { "@id": `${SITE.url}/#organization` },
      sameAs: [FOUNDER.linkedin],
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      founder: { "@id": FOUNDER.id },
    },
  ];
}
