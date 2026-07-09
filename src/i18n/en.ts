/**
 * İngilizce sözlük — ŞEMANIN SAHİBİ (CLAUDE.md §2, §9.1).
 * Görünen içerik ile JSON-LD tek kaynaktan beslenir; ikisi asla ayrışmaz.
 * Tüm v1 copy'si CLAUDE.md'den birebir (tipografiyi rafine et, anlamı değiştirme).
 */
import { SITE } from "../config/site";

const CANONICAL_DESCRIPTION = SITE.description;

export const en = {
  meta: {
    siteTitle: "v1be studio — GEO-first web design & development",
    siteDescription:
      "v1be studio builds fast, structured websites engineered to be cited by AI search engines like ChatGPT, Gemini and Perplexity. SEO + GEO built in.",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    footerNav: "Footer navigation",
    menuToggle: "Menu",
  },
  nav: {
    packages: "Packages",
    process: "Process",
    work: "Work",
    about: "About",
    cta: "Get a free audit",
  },
  home: {
    meta: {
      title: "v1be studio — websites engineered to be cited by AI",
      description:
        "GEO-first web design, development and content for brands and agencies. Websites engineered to be cited by ChatGPT, Gemini and Perplexity — not just indexed.",
    },
    hero: {
      // Her satır: {text, accent}. accent="" ise satırda vurgulanan kelime yok;
      // dolu ise `text` içinde o alt-dizi lime (accent) renkte render edilir.
      headline: [
        { text: "Beautiful enough", accent: "" },
        { text: "for Awwwards.", accent: "Awwwards." },
        { text: "Structured enough", accent: "" },
        { text: "for AI.", accent: "AI." },
      ],
      mascotName: "v1ben.",
    },
    // Karşılama ekranı artık yalnızca headline + mascot; bu metin (eski hero
    // subline'ı) artık "What we do" section'ının başlığı olarak kullanılıyor.
    what: {
      heading:
        "We build websites with the award-grade design, engineered from the ground up to be read and cited by AI search engines.",
      bold: ["websites", "engineered", "cited", "AI"],
      cta: "Get a free audit",
    },
    how: {
      title: "How we do it",
      steps: [
        {
          number: "01",
          title: "Audit",
          description: "We snapshot how AI engines currently see you — or don't.",
        },
        {
          number: "02",
          title: "Build",
          description:
            "Static-first Astro build, full schema graph, llms.txt, crawler access — audit-proof from day one.",
        },
        {
          number: "03",
          title: "Content",
          description:
            "Citable articles in your brand voice, pushed as drafts, published only with your approval.",
        },
        {
          number: "04",
          title: "Measure",
          description:
            "We re-run the snapshot and show the before/after. Launch day is where GEO starts, not ends.",
        },
      ],
      cta: "Get a free audit",
    },
    work: {
      title: "v1beholics",
      caseCard: {
        name: "v1be.io",
        description:
          "Our own platform site is case zero: schema graph, citability-scored content in progress, validated in Google's Rich Results Test. We practice on ourselves first.",
        linkLabel: "Read the case study",
        href: "/work/v1be-io/",
      },
      openSlot: {
        label: "This slot is reserved for a brand that wants to be cited.",
        cta: "Get a free audit",
      },
    },
    contact: {
      title: "Get your v1be",
      promise:
        "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first. No deck, no fluff; a working session.",
    },
  },
  packages: {
    meta: {
      title: "Packages — Audit, Build & Grow | v1be studio",
      description:
        "Three productized GEO offers: a one-time AI visibility Audit, a GEO-first Build, and a monthly Grow content engine. The free audit is the entry to all.",
    },
    hero: {
      eyebrow: "Packages",
      title: "Three ways to get cited.",
      subtitle:
        "Every engagement starts with the free audit — it's the funnel entry for all three tiers.",
    },
    tiers: [
      {
        name: "Audit",
        cadence: "one-time",
        summary:
          "A snapshot of how AI engines see you today, plus the prioritized fixes that matter most.",
        features: [
          "AI visibility snapshot across ChatGPT, Gemini and Perplexity",
          "Technical GEO audit: schema, crawler access, structure",
          "Prioritized fix list ranked by impact",
          "Delivered as a working session, not a slide deck",
          "A clear picture of what you'd fix first",
        ],
        cta: "Get a free audit",
      },
      {
        name: "Build",
        cadence: "project",
        summary:
          "A GEO-first website that is audit-proof from launch: design, Astro build and the full infrastructure.",
        features: [
          "GEO-first design engineered for AI readability",
          "Static-first Astro build, semantic HTML, answer-first structure",
          "Full schema graph, llms.txt and robots infrastructure",
          "Self-hosted fonts, image discipline, zero-CLS layout",
          "Launch validation in Google's Rich Results Test",
          "Sitemap, OG images and crawler access done right",
        ],
        cta: "Get a free audit",
      },
      {
        name: "Grow",
        cadence: "monthly",
        summary:
          "A content engine that keeps you citable — drafts scored before they ship, plus continuous fixes.",
        features: [
          "Citability-scored articles produced by the v1be pipeline",
          "Articles pushed to your CMS as drafts, never auto-published",
          "Human approval required before anything goes live",
          "Continuous technical GEO fixes and schema upkeep",
          "Monthly before/after visibility report",
          "Ongoing measurement across ChatGPT, Gemini and Perplexity",
        ],
        cta: "Get a free audit",
      },
    ],
    note: "The free audit is the entry point for every tier.",
  },
  process: {
    meta: {
      title: "Process — how a v1be studio engagement runs | v1be studio",
      description:
        "How we run an engagement, step by step: audit, build, content and measure. Launch day is where GEO starts, not ends.",
    },
    hero: {
      eyebrow: "Process",
      title: "How an engagement runs.",
      subtitle:
        "Four stages, one loop. We start by measuring how AI engines see you, and we finish by measuring it again.",
    },
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "We snapshot how AI engines currently present your brand and run a technical GEO review — schema, crawler access, structure. You get a prioritized fix list in a working session.",
      },
      {
        number: "02",
        title: "Build",
        description:
          "We design and build GEO-first: a static Astro site with a full schema graph, llms.txt and crawler access. Audit-proof from day one, validated in Google's Rich Results Test before launch.",
      },
      {
        number: "03",
        title: "Content",
        description:
          "Citable articles in your brand voice, produced by the v1be pipeline and scored for citability. Everything is pushed to your CMS as a draft and published only with your approval.",
      },
      {
        number: "04",
        title: "Measure",
        description:
          "We re-run the visibility snapshot and show you the before/after across ChatGPT, Gemini and Perplexity. Launch day is where GEO starts, not ends.",
      },
    ],
    cta: {
      title: "Start with the audit.",
      subtitle: "Tell us your domain and we'll show you where you stand today.",
      button: "Get a free audit",
    },
  },
  work: {
    meta: {
      title: "Work — case studies | v1be studio",
      description:
        "Case studies from v1be studio, starting with v1be.io: our own platform site, engineered and validated as case zero. We practice on ourselves first.",
    },
    hero: {
      eyebrow: "Work",
      title: "Proof, starting with ourselves.",
      subtitle:
        "We practice the methodology on our own platform before we sell it. Case zero is v1be.io.",
    },
    cases: [
      {
        name: "v1be.io",
        tag: "Case zero",
        description:
          "Our own platform site is case zero: schema graph, citability-scored content in progress, validated in Google's Rich Results Test. We practice on ourselves first.",
        linkLabel: "Read the case study",
        href: "/work/v1be-io/",
      },
    ],
    openSlot: {
      label: "This slot is reserved for a brand that wants to be cited.",
      cta: "Get a free audit",
    },
    caseStudy: {
      meta: {
        title: "Case study: v1be.io — our own platform site | v1be studio",
        description:
          "How we engineered v1be.io as case zero: a full schema graph, citability-scored content and Rich Results Test validation. The methodology, dogfooded.",
      },
      hero: {
        eyebrow: "Case study · Case zero",
        title: "v1be.io — the site we practice on first.",
        subtitle:
          "Before we optimize your web presence, we prove the methodology on our own platform. Here's what that looks like.",
      },
      breadcrumbLabel: "v1be.io",
      sections: [
        {
          heading: "The brief",
          body: "v1be.io is the platform home for v1be, the AI marketing agent. It had to be a live demonstration of GEO done right — a site a technical SEO auditor could open in view-source and find nothing to criticize.",
        },
        {
          heading: "What we built",
          body: "A static-first Astro build with a full schema graph on every page: Organization and WebSite site-wide, Service on offer pages, FAQPage and BreadcrumbList where they belong — all fed from the same dictionaries as the visible content, so structured data never drifts from what a reader sees.",
        },
        {
          heading: "The GEO infrastructure",
          body: "robots.txt deliberately allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended. An llms.txt endpoint lists the canonical pages. Self-hosted fonts, preloaded and subset. OG images that always resolve. Every image carries a descriptive alt; every page has exactly one h1.",
        },
        {
          heading: "Citability-scored content",
          body: "Articles are produced by the v1be pipeline and scored for citability before publishing — answer-first structure, clean headings, structured data — so ChatGPT, Gemini and Perplexity can read, quote and cite them. Content ships as drafts and is human-approved, always.",
        },
        {
          heading: "The proof",
          body: "The schema graph validates cleanly in Google's Rich Results Test. The site is the reference implementation for everything v1be studio builds for clients — case zero, and the one we keep honest.",
        },
      ],
      cta: {
        title: "Want this for your brand?",
        subtitle:
          "We'll start by showing you how AI engines see you today.",
        button: "Get a free audit",
      },
    },
  },
  about: {
    meta: {
      title: "About — the studio arm of v1be | v1be studio",
      description:
        "v1be studio is the web design and development arm of v1be. We build fast, structured websites engineered to be cited by AI search engines.",
    },
    hero: {
      eyebrow: "About",
      title: "The studio arm of v1be.",
    },
    canonical: CANONICAL_DESCRIPTION,
    body: [
      {
        heading: "Who we are",
        text: "v1be studio is the productized service arm of v1be. Where the v1be platform is the AI marketing agent, the studio is the team that designs, builds and optimizes the web presence that agent works on — the same methodology and tooling, delivered as a service.",
      },
      {
        heading: "How we relate to v1be",
        text: "v1be studio is the services arm of v1be, the AI marketing agent platform. The studio builds and optimizes your web presence using the same methodology and tooling. Authority concentrates on the main v1be.io domain; the studio ships the sites and the citable content that feed it.",
      },
      {
        heading: "What we believe",
        text: "AI search engines now answer the questions your customers used to type into Google. A website should be engineered to be read, understood and cited by those engines — not just indexed by a crawler. That is what GEO is, and it is what every site we ship is built for.",
      },
      {
        heading: "The proof standard",
        text: "This site is itself a proof of the methodology it sells: a full schema graph, llms.txt, deliberate crawler access, and content that never diverges from its structured data. Every site we ship is validated in Google's Rich Results Test before launch.",
      },
    ],
    cta: {
      title: "See how AI engines see you.",
      subtitle: "The free audit is where every engagement starts.",
      button: "Get a free audit",
    },
  },
  contact: {
    meta: {
      title: "Get a free audit | v1be studio",
      description:
        "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first. A working session, no deck.",
    },
    hero: {
      title: "Get your free audit",
      promise:
        "Tell us your domain. We'll show you how AI engines see you today — what they cite, what they miss, and what we'd fix first. No deck, no fluff; a working session.",
    },
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Ada Lovelace",
      emailLabel: "Email",
      emailPlaceholder: "you@brand.com",
      websiteLabel: "Website URL",
      websitePlaceholder: "https://yourbrand.com",
      messageLabel: "Anything we should know?",
      messagePlaceholder: "Where are you now, and where do you want your brand to be?",
      submit: "Request my free audit",
      submitting: "Sending…",
      successTitle: "Got it — talk soon.",
      successBody:
        "Thanks for reaching out. A real person will get back to you personally, usually within one business day.",
      errorGeneric: "Something went wrong. Please email us directly and we'll pick it up.",
      invalidEmail: "Please enter a valid email address.",
      mailtoIntro: "Prefer email? Reach us directly at",
      reassurance: "A human reads every message. We never share your details.",
    },
    faq: {
      title: "Frequently asked questions",
      // Bu 5 madde hem görünür akordeonu hem FAQPage JSON-LD'yi besler (CLAUDE.md §10).
      items: [
        {
          question: "What is v1be studio?",
          answer:
            CANONICAL_DESCRIPTION +
            " Every site we ship is validated in Google's Rich Results Test before launch.",
        },
        {
          question: "What is GEO and how is it different from SEO?",
          answer:
            "GEO (Generative Engine Optimization) makes your brand visible inside AI-generated answers from ChatGPT, Gemini and Perplexity. SEO optimizes for ranked links; GEO optimizes for being cited in the answer itself. They overlap but reward different content structures.",
        },
        {
          question: "What does the free audit include?",
          answer:
            "A snapshot of how AI engines currently present your brand, a technical GEO review of your site (schema, crawler access, structure), and a prioritized fix list — delivered in a working session, not a slide deck.",
        },
        {
          question: "Do you publish content automatically?",
          answer:
            "No. Content is produced by the v1be pipeline, scored for citability, and pushed to your CMS as a draft. Nothing goes live without human approval.",
        },
        {
          question: "How is v1be studio related to v1be?",
          answer:
            "v1be studio is the services arm of v1be, the AI marketing agent platform. The studio builds and optimizes your web presence using the same methodology and tooling.",
        },
      ],
    },
  },
  notFound: {
    meta: {
      title: "Page not found | v1be studio",
      description: "The page you're looking for doesn't exist.",
    },
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to home",
  },
  footer: {
    // Kanonik tarif footer'da da görünür (CLAUDE.md §4).
    description: CANONICAL_DESCRIPTION,
    partOf: "Part of v1be",
    rights: "All rights reserved.",
    emailLabel: "Email",
  },
} as const;

/** Şemayı korur ama değerleri `string`e genişletir — diğer diller buna uyar. */
type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Dictionary = DeepString<typeof en>;
