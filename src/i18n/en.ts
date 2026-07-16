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
      ctaSecondary: "See our work",
    },
    how: {
      title: "How we do it",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          description:
            "We audit how people and AI engines read your site, then turn the findings into a prioritized brief. Starting from zero? We begin with the opportunity and requirements instead.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "We shape the message, content structure and award-grade UI/UX around what your audience needs and how AI engines understand each page.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We ship a fast website with semantic HTML, a full schema graph, llms.txt and crawler access built in from day one.",
        },
        {
          number: "04",
          title: "Validate & measure",
          description:
            "We validate the launch, re-run the visibility snapshot and show the before/after. Launch is the baseline, not the finish line.",
        },
      ],
      cta: "Get a free audit",
      ctaSecondary: "See our process →",
    },
    work: {
      title: "v1be, applied.",
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
  },
  process: {
    meta: {
      title: "Process — from first signal to verified launch | v1be studio",
      description:
        "A visible four-stage website process: diagnose, design, build, validate and measure—with three approval gates and proof at every handoff.",
    },
    hero: {
      eyebrow: "Process",
      title: "From first signal to a site you can prove.",
      subtitle:
        "We diagnose what people and AI engines understand, design around what they need, build the system, then validate the result. You approve the work at every consequential handoff.",
      primaryCta: "Get a free audit",
      secondaryCta: "See how the process works ↓",
    },
    overview: {
      label: "Engagement map",
      summary: "4 stages · 3 gates",
      stageStatus: ["brief", "2 gates", "preview", "proof"],
    },
    startingPoint: {
      eyebrow: "Two ways in",
      title: "Two ways in. One governed process.",
      intro:
        "Starting from zero, we begin with the opportunity and requirements. Already live, we audit what works, locate the friction and protect the value worth keeping. From there, both paths move through the same visible process.",
      paths: [
        {
          title: "Starting from zero",
          description:
            "We define the audience, opportunity and requirements before shaping the message, experience and technical foundation together.",
        },
        {
          title: "Already live",
          description:
            "We audit what is working, identify what creates friction and protect the search equity worth keeping before anything is rebuilt.",
        },
      ],
        convergence: "Different starting points. The same four-stage process.",
      },
      designReviewLabel: "You review:",
      steps: [
      {
        id: "diagnose",
        number: "01",
        label: "Diagnose",
        title: "Diagnose what the site must solve.",
        intro:
          "Before design begins, we find the gap between what your audience needs, what your website communicates and what search and AI engines can understand.",
        description:
          "We establish the baseline first: what people understand, what creates friction and where your brand appears—or disappears—in search and AI-generated answers. Starting from zero, we replace the visibility audit with an opportunity and requirements review.",
        sections: [
          {
            title: "What we examine",
            body: "",
            items: [
              "Your audience, offer and primary conversion goal",
              "Message clarity and gaps in the current journey",
              "Search structure, crawler access and AI visibility",
              "Existing content, routes and search equity worth protecting",
            ],
          },
          {
            title: "What you bring",
            body: "",
            items: [
              "Your domain or project idea",
              "Business goals and priority audiences",
              "Existing brand, content and analytics material",
              "The decisions or constraints we should know early",
            ],
          },
          {
            title: "What you receive",
            body: "",
            items: [
              "A baseline visibility snapshot",
              "A prioritized opportunity and risk map",
              "An agreed project brief that replaces assumptions with decisions",
            ],
          },
        ],
        gates: [],
        outcome: "We agree on the problem before designing the answer.",
        artifact: {
          label: "Baseline snapshot",
          status: "Live artifact",
          metrics: [
            { label: "Message clarity", value: "Review" },
            { label: "AI visibility", value: "Baseline" },
            { label: "Technical risk", value: "Mapped" },
          ],
          rows: [],
          checks: [],
          calloutLabel: "Stage output",
          callout: "Baseline snapshot · Priority map · Agreed brief",
        },
      },
      {
        id: "design",
        number: "02",
        label: "Design",
        title: "Design the logic, then the look.",
        intro:
          "The agreed brief becomes a content structure first, then a visual experience. We decide what each page must communicate and what each journey must make possible before styling the interface around it.",
        description: "",
        sections: [
          {
            title: "Content and structure",
            body:
              "We shape the sitemap, page purposes, message hierarchy, UX writing and primary user journeys. SEO and GEO are planned inside the content structure—not added after the pages are designed.",
            items: [
              "Sitemap and page priorities",
              "Core messaging and UX writing",
              "Conversion paths and calls to action",
              "Search intent, entities and answer-ready content structure",
            ],
          },
          {
            title: "Experience and visual direction",
            body:
              "Once the logic is approved, we turn it into key-page wireframes and an award-grade interface system. Layout, hierarchy, responsive behavior and interaction direction are designed as one experience—not as separate desktop screens.",
            items: [
              "Key-page wireframes",
              "Visual direction and UI system",
              "Responsive layout behavior",
              "Interaction and motion direction",
            ],
          },
          {
            title: "What you receive",
            body: "",
            items: [
              "An approved sitemap and content hierarchy",
              "Core page copy and UX writing direction",
              "Key-page wireframes",
              "A responsive UI direction and component behavior notes",
            ],
          },
        ],
        gates: [
          {
            label: "Approval Gate 01 · Content & Structure",
            description:
              "Approve what the site says, how it is organized and where each journey should lead before visual design moves forward.",
            afterSection: 0,
          },
          {
            label: "Approval Gate 02 · Experience & Visual",
            description:
              "Approve how the experience works and feels before development begins.",
            afterSection: 1,
          },
        ],
        outcome: "Build begins with approved decisions, not assumptions.",
        artifact: {
          label: "Wireframe / UI direction",
          status: "2 approval gates",
          metrics: [],
          rows: [],
          checks: [
            "Content hierarchy approved",
            "Primary journeys mapped",
            "Responsive direction visible",
            "Interaction behavior agreed",
          ],
          calloutLabel: "Design handoff",
          callout: "Logic first. Visual direction second. Build after approval.",
        },
      },
      {
        id: "build",
        number: "03",
        label: "Build",
        title: "Build the approved experience as a system.",
        intro:
          "We turn the approved content, interface and behavior into a fast, accessible website that works as one maintainable system. The build does not reinterpret the design behind closed doors—it makes every approved decision real and reviewable.",
        description: "",
        sections: [
          {
            title: "The experience becomes real",
            body:
              "We build responsive components, navigation, forms and interactions against the approved designs. You review the work in a live preview, where real content, real breakpoints and real browser behavior can be inspected before launch.",
            items: [],
          },
          {
            title: "SEO and GEO are built in",
            body:
              "Semantic HTML, page metadata, structured data, internal links, crawler access, sitemap and llms.txt are part of the architecture from day one. They are implemented alongside the interface—not added as a plugin after the website is finished.",
            items: [],
          },
          {
            title: "What we build",
            body: "",
            items: [
              "A responsive, component-based Astro website",
              "Semantic and accessible page structure",
              "Forms, agreed integrations and conversion tracking",
              "Page metadata, canonical URLs and internal linking",
              "Schema graph, sitemap, robots.txt and llms.txt",
              "Performance-conscious assets and interaction behavior",
            ],
          },
          {
            title: "What you can inspect",
            body: "",
            items: [
              "A working preview on real routes",
              "Responsive behavior across key viewport sizes",
              "Interactions, forms and conversion paths",
              "Visible progress against the agreed scope",
            ],
          },
        ],
        gates: [],
        outcome: "The approved design now exists as a real, testable website.",
        artifact: {
          label: "client / website",
          status: "Working preview",
          metrics: [],
          rows: [
            { label: "src/", value: "components + routes" },
            { label: "public/", value: "production assets" },
            { label: "schema graph", value: "structured data" },
            { label: "preview", value: "real breakpoints" },
            { label: "tracking", value: "agreed events" },
          ],
          checks: [],
          calloutLabel: "Inspectable build",
          callout: "Real content. Real browsers. No static promise.",
        },
      },
      {
        id: "validate",
        number: "04",
        label: "Validate & measure",
        title: "Validate the product. Measure the difference.",
        intro:
          "Before launch, we test the working website against the experience, technical and visibility decisions agreed at the start. Then we return to the original baseline and measure what changed using the same criteria.",
        description: "No launch without evidence.",
        sections: [
          {
            title: "We validate the experience",
            body: "",
            items: [
              "Responsive behavior across priority devices and viewport sizes",
              "Navigation, forms and primary conversion paths",
              "Keyboard access, focus states and essential accessibility checks",
              "Content, metadata, links and redirects on final routes",
            ],
          },
          {
            title: "We validate the technical foundation",
            body:
              "Technical validation proves that the implementation works as intended. It does not manufacture a ranking or citation guarantee.",
            items: [
              "Core Web Vitals and page performance",
              "Structured data in Google's Rich Results Test and Schema Markup Validator",
              "Sitemap, robots.txt, canonical URLs and crawler access",
              "Analytics and agreed conversion events",
            ],
          },
          {
            title: "We measure the difference",
            body:
              "We re-run the agreed search and AI visibility query set, compare it with the opening snapshot and document what improved, what still needs time and what should happen next.",
            items: [],
          },
          {
            title: "What you receive",
            body:
              "If enough real-user data has not accumulated by the checkpoint, we show that limitation clearly and report the verified technical, indexing and query-set signals available—without turning incomplete data into a success claim.",
            items: [
              "A launch QA and validation report",
              "Performance, schema and crawler evidence",
              "A before-and-after visibility snapshot",
              "The repository, assets and handoff notes",
              "A scheduled 30-day post-launch checkpoint",
            ],
          },
        ],
        gates: [
          {
            label: "Approval Gate 03 · Build, Evidence & Launch",
            description:
              "Approve the working product and the evidence behind it before the website goes live.",
            afterSection: 3,
          },
        ],
        outcome: "Launch is the baseline, not the finish line.",
        artifact: {
          label: "Launch evidence",
          status: "Verified",
          metrics: [
            { label: "Core Web Vitals", value: "Checked" },
            { label: "Schema", value: "Validated" },
            { label: "Crawler access", value: "Open" },
          ],
          rows: [],
          checks: [
            "Responsive and accessibility review",
            "Forms and conversion paths",
            "Before-and-after snapshot",
            "30-day checkpoint scheduled",
          ],
          calloutLabel: "Launch rule",
          callout: "No launch without evidence.",
        },
      },
    ],
    collaboration: {
      eyebrow: "Collaboration",
      title: "Clear decisions. Fewer meetings.",
      intro:
        "You should always know where the project stands without spending every day in a status call. We keep progress visible in writing and use meetings for decisions, not recaps.",
      rhythm: [
        { value: "60 min", label: "Kickoff to align goals, scope and decision owners" },
        { value: "2× weekly", label: "Concise written progress updates" },
        { value: "30–45 min", label: "Focused review to close each approval gate" },
        { value: "2 business days", label: "Feedback window for clear momentum" },
      ],
      principles: [
        "One decision owner on your side keeps approvals accountable",
        "Feedback is consolidated in one shared place",
        "Approved decisions remain visible throughout the project",
        "Scope changes are discussed before they affect delivery or cost",
        "Critical blockers are raised the same day",
      ],
      closing: "Progress stays visible. Meetings stay useful.",
    },
    afterLaunch: {
      eyebrow: "After launch",
      title: "The handoff is complete. The learning continues.",
      intro:
        "Launch closes the build, not your access to the work. You leave with the website, its evidence and a clear view of what should happen next.",
      includedTitle: "Included with every build",
      included: [
        "The repository, production-ready assets and handoff notes",
        "The final launch evidence pack",
        "Full ownership of the website we built for you",
        "A 30-day post-launch checkpoint against the original baseline",
        "A prioritized set of next opportunities based on the evidence available",
      ],
      growTitle: "Continue with Grow",
      growDescription:
        "If you want the learning to continue, Grow turns the launch baseline into an ongoing improvement loop: new citable content, prioritized fixes and regular visibility measurement across the agreed search and AI query set.",
      ownership:
        "Grow is optional. You do not need an ongoing subscription to keep the website, the code or the work already delivered.",
      boundary: "Measurement is included in the build. Continuous optimization is a separate engagement.",
    },
    cta: {
      title: "Start with the audit.",
      eyebrow: "Start with evidence",
      subtitle:
        "Tell us your domain or project idea. We'll show you what people and AI engines can understand today, what they miss and what the first decision should be.",
      button: "Get a free audit",
      note: "Evidence, not a proposal deck. One working session, a visible baseline and a prioritized first move.",
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
      // Dokuz maddenin tamamı Contact'ta görünür. `homeOrder` işaretli altı madde
      // Home'da aynı sırayla görünür ve Home FAQPage şemasını besler (CLAUDE.md §10).
      // `cta` alanı yalnızca FaqAccordion'da render olur — faqSchema() sadece question/answer okur, CTA şemaya sızmaz.
      items: [
        {
          question: "What is v1be studio?",
          answer:
            CANONICAL_DESCRIPTION +
            " Every site we ship is validated in Google's Rich Results Test before launch.",
        },
        {
          homeOrder: 5,
          question: "What is GEO and how is it different from SEO?",
          answer:
            "GEO (Generative Engine Optimization) makes your brand visible inside AI-generated answers from ChatGPT, Gemini and Perplexity. SEO optimizes for ranked links; GEO optimizes for being cited in the answer itself. They overlap but reward different content structures.",
        },
        {
          homeOrder: 1,
          question: "What does the free audit include?",
          answer:
            "A snapshot of how AI engines currently present your brand, a technical GEO review of your site (schema, crawler access, structure), and a prioritized fix list — delivered in a working session, not a slide deck.",
        },
        {
          homeOrder: 2,
          question: "How much does this cost?",
          answer:
            "The audit is free. Paid packages are scoped and quoted after we see where you stand — pricing depends on whether you need a fix, a full rebuild, or ongoing content.",
          cta: { label: "See packages →", href: "/packages/" },
        },
        {
          homeOrder: 4,
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
          homeOrder: 3,
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
          homeOrder: 6,
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
