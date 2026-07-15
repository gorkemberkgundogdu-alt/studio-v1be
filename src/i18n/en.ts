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
    menuClose: "Close",
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
      // İki satır: ilk satır "award-grade design," ile bitecek şekilde bilinçli
      // bölünmüş (Header redesign — CTA artık başlığın altına indi, genişlik
      // section container'ına uyarlandı; tipografik satır kırılımı için tek
      // string yerine dizi).
      headingLines: [
        "We build websites with the award-grade design,",
        "engineered from the ground up to be read and cited",
        "by AI search engines.",
      ],
      bold: ["websites", "engineered", "cited", "AI"],
      cta: "Get a free audit",
    },
    how: {
      title: "How we do it",
      steps: [
        {
          number: "01",
          title: "Audit",
          description:
            "We run your site through our own engine and get real AI-visibility scores, citation counts, and a prioritized issue list. No site yet? We start with a feasibility study instead.",
        },
        {
          number: "02",
          title: "Fix",
          description:
            "We correct what the audit flags — broken structure, missing schema, thin content — using the same engine that found it.",
        },
        {
          number: "03",
          title: "Content",
          description:
            "Citable articles drafted in your brand voice, scored for citability, pushed as drafts, published only with your approval.",
        },
        {
          number: "04",
          title: "Design",
          description:
            "Award-grade UI/UX, built to Awwwards-nomination standard. Not a template, not an afterthought.",
        },
        {
          number: "05",
          title: "Build",
          description:
            "Full schema graph, llms.txt, crawler access, shipped alongside the design, not bolted on after.",
        },
        {
          number: "06",
          title: "Measure",
          description:
            "We re-run the snapshot and show the before/after. Launch day is where GEO starts, not ends.",
        },
      ],
      cta: "Get a free audit",
      ctaSecondary: "See our process →",
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
      title: "Packages — start from zero or fix what's broken | v1be studio",
      description:
        "Two ways to get a GEO-first site: build from zero, or fix and rebuild what you already have without losing your SEO equity. Free audit either way.",
    },
    hero: {
      eyebrow: "Packages",
      title: "Two ways to start.",
      subtitle:
        "Building from zero or fixing what's broken — the destination is the same: cited, not just crawled.",
      primaryCta: "Get a free audit",
      secondaryCta: "Build your project brief",
      reassurance: "Two minutes. No commitment. The audit stays free.",
    },
    configurator: {
      eyebrow: "Shape the engagement",
      title: "What should your next website fix?",
      intro:
        "Start with where you are, then choose the problems that feel most urgent. We turn those signals into a practical starting brief — not a generic package list.",
      pathQuestion: "Where are you starting from?",
      needsQuestion: "What needs to change first?",
      needsNote: "Choose up to three. Your priority layers will update as you go.",
      needs: [
        {
          id: "clarity",
          title: "People don't understand our offer",
          briefLabel: "Message clarity",
          description: "The message needs sharper positioning, structure and copy.",
          layerIds: ["message", "experience"],
        },
        {
          id: "friction",
          title: "The experience feels difficult",
          briefLabel: "UX friction",
          description: "Navigation, hierarchy or conversion paths create unnecessary work.",
          layerIds: ["experience", "interface"],
        },
        {
          id: "credibility",
          title: "The design doesn't feel credible",
          briefLabel: "Visual credibility",
          description: "The interface needs a stronger visual system and clearer proof.",
          layerIds: ["interface", "message"],
        },
        {
          id: "performance",
          title: "The site is slow or fragile",
          briefLabel: "Performance and resilience",
          description: "Performance, accessibility and the frontend foundation need attention.",
          layerIds: ["code", "experience"],
        },
        {
          id: "systems",
          title: "We need integrations or custom logic",
          briefLabel: "Integrations and custom logic",
          description: "Forms, data flows or backend systems need to work as one product.",
          layerIds: ["systems", "code"],
        },
        {
          id: "visibility",
          title: "Search and AI engines can't understand us",
          briefLabel: "SEO and AI visibility",
          description: "Structure, entities and evidence need to become machine-readable.",
          layerIds: ["discoverability", "message"],
        },
      ],
      layers: [
        { id: "message", title: "Message", caption: "Positioning, structure and copy" },
        { id: "experience", title: "Experience", caption: "Journeys, hierarchy and conversion" },
        { id: "interface", title: "Interface", caption: "Visual system and interaction" },
        { id: "systems", title: "Systems", caption: "Logic, data and integrations" },
        { id: "code", title: "Code", caption: "Performance and accessibility" },
        { id: "discoverability", title: "Discoverability", caption: "SEO, GEO and structured data" },
      ],
      summary: {
        eyebrow: "Project brief",
        empty: "Choose a priority to activate its website layers.",
        layersLabel: "Priority signals",
        ctaSuffix: "→",
        limitMessage: "Three priorities selected. Remove one to choose another.",
      },
    },
    paths: [
      {
        id: "new",
        microLabel: "No website yet",
        title: "Start from zero",
        selectorDescription:
          "Build the message, experience and technical foundation together from day one.",
        briefCta: "Get your free audit",
        priceNew: "$749",
        bullets: [
          "Up to 5 pages, custom-built",
          "Entity home and core schema from day one",
          "Live and citable, not just online",
        ],
        // Yalnızca Service JSON-LD besler, görünür kopyaya girmez.
        schemaSummary:
          "A GEO-first website built from scratch — up to five custom pages with an entity home and core schema in place from day one, live and citable at launch.",
      },
      {
        id: "redesign",
        microLabel: "Not happy with your site",
        title: "Fix what's broken",
        selectorDescription:
          "Keep what has value, repair what creates friction and protect existing search equity.",
        briefCta: "Get your free audit",
        priceNew: "$999",
        bullets: [
          "Redirect map keeps your SEO equity",
          "Schema and structure rebuilt for AI search",
          "Same GEO-first foundation, no lost ground",
        ],
        schemaSummary:
          "A GEO-first rebuild of an existing site — a redirect map protects SEO equity while schema and structure are rebuilt for AI search, same foundation, no lost ground.",
      },
    ],
    proof: {
      eyebrow: "Proof lives in the handoff",
      title: "No promise without an artifact.",
      intro:
        "Instead of asking you to trust four generic claims, we map each one to a concrete deliverable you can inspect, approve and keep.",
      items: [
        {
          number: "01",
          kind: "repository",
          eyebrow: "Repository handoff",
          title: "The code is yours.",
          description:
            "You receive the repository, assets and handoff notes. No platform lock-in or recurring license to keep your own website running.",
        },
        {
          number: "02",
          kind: "scope",
          eyebrow: "Agreed before build",
          title: "Scope stays visible.",
          description:
            "Included work, later opportunities and any scope change stay explicit before they affect delivery or your invoice.",
        },
        {
          number: "03",
          kind: "audit",
          eyebrow: "Evidence before opinion",
          title: "The audit is a working artifact.",
          description:
            "We show what search and AI engines can find, what they miss and which fixes deserve attention first — without a sales deck.",
        },
        {
          number: "04",
          kind: "redirects",
          eyebrow: "Protected migration",
          title: "Existing search equity has a map.",
          description:
            "For rebuilds, old routes are mapped to their new destination so the launch does not casually discard the authority you already earned.",
        },
      ],
      cta: "Get your free audit",
      ctaHref: "/contact/?source=packages-proof",
      secondaryCta: "See our work",
      secondaryHref: "/work/",
    },
    // Packages'a özel FAQ — Contact/Home'daki paylaşımlı listeden ayrı
    // (bazı maddeler bu sayfanın iki-yol çerçevesine özel, orada bağlamsız
    // kalırdı). Aynı mimari: görünür accordion + FAQPage JSON-LD, tek veri.
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do we own the code after launch?",
          answer:
            "Yes. You get the repository and full ownership. No lock-in, no recurring license fee to keep your own site running.",
        },
        {
          question: "How do I know which path is right for me?",
          answer:
            "If you don't have a live site, start from zero. If you have one but it isn't converting, ranking, or showing up in AI answers, fix what's broken — the reason doesn't matter, design or SEO/GEO, same path.",
        },
        {
          question: "What if my project doesn't fit either path?",
          answer:
            "Most projects fit one of the two above. If yours needs a different shape — more pages, a web app, e-commerce — tell us and we'll scope it as a custom project.",
        },
        {
          question: "Do these prices include ongoing content or SEO work after launch?",
          answer:
            "No. These cover the one-time build. For ongoing GEO content production, that's v1be's Vibe plan — a separate subscription, we'll point you there when you're ready.",
        },
        {
          question: "Is the free audit part of a package?",
          answer: "No. It's free regardless of which path you choose, or whether you choose one at all.",
        },
        {
          question: "What happens if scope grows mid-project?",
          answer:
            "We agree on scope before we start. If something changes, you hear about it before it hits your invoice, not after.",
        },
      ],
    },
    auditBridge: {
      lead: "Not sure which fits?",
      linkLabel: "Get a free audit first.",
      href: "/contact/",
    },
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
      // Bu 9 madde hem görünür akordeonu hem FAQPage JSON-LD'yi besler (CLAUDE.md §10).
      // `cta` alanı yalnızca FaqAccordion'da render olur — faqSchema() sadece question/answer okur, CTA şemaya sızmaz.
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
          question: "How much does this cost?",
          answer:
            "The audit is free. Paid packages are scoped and quoted after we see where you stand — pricing depends on whether you need a fix, a full rebuild, or ongoing content.",
          cta: { label: "See packages →", href: "/packages/" },
        },
        {
          question: "I don't have a website yet — can you still help?",
          answer:
            "Yes. We start with a feasibility study — keyword and competitor research in your category, and a breakdown of why competitors score the way they do — before moving into build.",
        },
        {
          question: "Do you publish content automatically?",
          answer:
            "No. Content is produced by the v1be pipeline, scored for citability, and pushed to your CMS as a draft. Nothing goes live without human approval.",
        },
        {
          question: "How long does this take?",
          answer:
            "The audit takes days, not weeks. A full rebuild typically runs 1-2 weeks depending on scope; ongoing content is a monthly cadence.",
        },
        {
          question: "How is v1be studio related to v1be?",
          answer:
            "v1be studio is the services arm of v1be, the AI marketing agent platform. The studio builds and optimizes your web presence using the same methodology and tooling.",
        },
        {
          question: "How is this different from a regular web design agency?",
          answer:
            "Most agencies design for humans and stop there. We design for Awwwards-level aesthetics and AI-engine structure at the same time, by the same team, from day one.",
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
    taglineLines: [
      { text: "Designed to be beautiful.", accent: "Designed" },
      { text: "Built to be cited.", accent: "cited" },
    ],
    nav: {
      home: "Home",
      work: "Work",
    },
    linkedinLabel: "LinkedIn",
    cta: "Get in Touch",
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
} as const;

/** Şemayı korur ama değerleri `string`e genişletir — diğer diller buna uyar. */
type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Dictionary = DeepString<typeof en>;
