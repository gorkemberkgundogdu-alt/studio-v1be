/**
 * İngilizce sözlük — ŞEMANIN SAHİBİ (CLAUDE.md §2, §9.1).
 * Görünen içerik ile JSON-LD tek kaynaktan beslenir; ikisi asla ayrışmaz.
 * Tüm v1 copy'si CLAUDE.md'den birebir (tipografiyi rafine et, anlamı değiştirme).
 */
import { SITE } from "../config/site";
import { labEn } from "./lab";

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
    languageMenu: "Language",
    breadcrumb: "Breadcrumb",
    keepScrolling: "Keep scrolling",
    processStages: "Process stages",
    websiteSystemLayers: "Website system layers",
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
        "GEO-first web design and development for brands and agencies. Websites engineered to be cited by ChatGPT, Gemini and Perplexity—not just indexed.",
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
      title: "Web Design & Development Packages | v1be studio",
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
      ctaHref: "/contact/",
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
        flow: {
          modelLabel: "Live engagement model",
          selectLabel: "Select a starting point",
          choiceLabel: "Choose a starting point",
          opportunityLabel: "Opportunity",
          evidenceLabel: "Evidence",
          convergenceTitle: "One process",
          convergenceStatus: "Shared governance",
          stagesLabel: "Four-stage process",
        },
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
        {
          id: "kickoff",
          title: "Kickoff & align",
          description: "Align goals, scope and decision owners.",
          signal: "60 min",
        },
        {
          id: "updates",
          title: "Async updates",
          description: "Concise written progress updates shared twice weekly.",
          signal: "2× weekly",
        },
        {
          id: "review",
          title: "Focused review",
          description: "A clear review closes each approval gate.",
          signal: "30–45 min",
        },
        {
          id: "feedback",
          title: "Feedback loop",
          description: "Feedback stays actionable, documented and visible.",
          signal: "2 business days",
        },
        {
          id: "delivery",
          title: "Delivery alignment",
          description: "Approved decisions move into delivery without losing momentum.",
          signal: "Keep moving",
        },
      ],
      loopLabel: "Continuous visibility. Fewer blockers.",
      outcomeLabel: "Outcome",
      principles: [
        { id: "owner", text: "One decision owner keeps approvals accountable" },
        { id: "visibility", text: "Feedback and approved decisions stay visible in one shared place" },
        { id: "blockers", text: "Scope changes and critical blockers surface before they affect delivery" },
      ],
      principlesLabel: "Working agreements",
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
  lab: labEn,
  work: {
    meta: {
      title: "Work — inspectable case studies | v1be studio",
      description:
        "Inspectable web design and development case studies from v1be studio, starting with v1be.io: our own platform site and case zero.",
    },
    hero: {
      eyebrow: "v1be, applied.",
      title: "Proof you can inspect.",
      subtitle:
        "The promise is only useful when the work behind it stays visible. We document the decisions, the delivered system and the evidence for every case.",
      indexLabel: "Published cases",
      indexNote: "One owned platform case today. Client work joins only when the evidence is ready to show.",
    },
    featured: {
      eyebrow: "Featured case",
      title: "The first proof is ours.",
      titleBefore: "The first proof is ours.",
      titleLink: "",
      note: "Case zero keeps the method honest before it reaches a client project.",
      servicesLabel: "Work included in this case",
    },
    cases: [
      {
        name: "v1be.io",
        tag: "Case 01 · Case zero",
        ownership: "Owned platform",
        description:
          "Our own platform site is case zero: schema graph, citability-scored content in progress, validated in Google's Rich Results Test. We practice on ourselves first.",
        linkLabel: "Read the case study",
        href: "/work/v1be-io/",
        services: ["Strategy & UX", "Astro development", "SEO / GEO infrastructure"],
        proof: [
          { label: "Schema graph", value: "Structured" },
          { label: "AI crawler access", value: "Open" },
          { label: "Launch evidence", value: "Validated" },
        ],
      },
      {
        name: "studio.v1be.io",
        tag: "Case 002",
        description:
          "Our own service site applies the GEO-first system to bilingual routes, localized schema and a single path to contact.",
        linkLabel: "Read the case study",
        href: "/work/studio-v1be/",
      },
    ],
    standard: {
      eyebrow: "The case standard",
      title: "Show the work. Show the reason. Show the proof.",
      description:
        "A polished screen is not enough. Every v1be studio case is structured so a potential client can understand what changed and why it matters.",
      items: [
        {
          title: "Context",
          description: "The business problem, audience and constraints that shaped the brief.",
        },
        {
          title: "Decisions",
          description: "The content, experience and technical choices made during the engagement.",
        },
        {
          title: "Evidence",
          description: "The working artifact, validation and measurable signals available at handoff.",
        },
      ],
    },
    openSlot: {
      eyebrow: "Case 02 · Open",
      label: "This slot is reserved for you.",
      description:
        "Start with a free audit. We’ll turn the opportunity into a clear brief and a website built to be cited.",
      cta: "Get a free audit",
    },
    caseStudy: {
      meta: {
        title: "v1be.io Web Design Case Study | v1be studio",
        description:
          "See how v1be.io was designed and built from zero as a visual, technical and measurable home for an AI marketing platform.",
      },
      hero: {
        eyebrow: "Case 01 · v1be.io",
        title: "A platform site built to compound.",
        subtitle:
          "We created v1be.io from zero as the owned home for a connected AI marketing platform—bringing its product story, visual system and GEO infrastructure into one experience people and machines can understand.",
        primaryCta: "Visit v1be.io",
        secondaryCta: "See the build evidence",
        secondaryHref: "#technical-foundation",
        image: "/images/work/v1be-io/homepage-hero.png",
        imageAlt: "The live v1be.io homepage showing the brand-trained AI product story and v1ben mascot",
        liveLabel: "Live",
        figureCaption: "Live homepage · real production interface",
        figureProof: "Captured from v1be.io",
      },
      breadcrumbLabel: "v1be.io",
      summary: {
        eyebrow: "01 · Project summary",
        title: "One platform, many capabilities, one understandable story.",
        description:
          "The product story, visual language and technical model had to be defined as one system—without allowing any layer to outrun or contradict the others.",
        cards: [
          {
            label: "Challenge",
            title: "Explain a connected product",
            description: "Turn a broad AI marketing offer into one coherent platform story without reducing it to generic software language.",
          },
          {
            label: "Our role",
            title: "Shape the whole experience",
            description: "Own the strategy, UX writing, visual direction, responsive interface and production build as one system.",
          },
          {
            label: "Outcome",
            title: "A platform ready to expand",
            description: "New services, content and languages can join the system without breaking its hierarchy or product story.",
          },
        ],
      },
      walkthrough: {
        eyebrow: "02 · Visual walkthrough",
        title: "The interface explains what a paragraph cannot.",
        description:
          "These are real production screens from v1be.io. Each one carries a different part of the product story while staying inside the same visual and interaction system.",
        items: [
          {
            image: "/images/work/v1be-io/services-hero.webp",
            route: "/services/",
            alt: "The live v1be services page with its platform proposition and original futuristic brand visual",
            title: "A proposition with its own world",
            description:
              "The services hero pairs direct product language with original art direction, making the platform feel authored rather than assembled from familiar AI tropes.",
            proof: "Original imagery and product language create recognition before the visitor reaches the feature list.",
          },
          {
            image: "/images/work/v1be-io/services-system.png",
            route: "/services/#service-map",
            alt: "The live v1be service map showing connected products around one shared brand intelligence layer",
            title: "Complexity made navigable",
            description:
              "The service map gives every capability a distinct job while keeping the shared brand intelligence layer visible as the organizing idea.",
            proof: "Information architecture turns a large offer into a system visitors can scan, understand and enter from multiple points.",
          },
        ],
      },
      foundation: {
        eyebrow: "03 · Technical foundation",
        title: "Meaning is built into the product, not added after it.",
        description:
          "The stack stays intentionally compact. The important work is how content, routes, metadata and machine-readable entities remain connected as the platform grows.",
        items: [
          {
            title: "Server-rendered foundation",
            description: "Core content, meaning and navigation arrive in HTML, keeping every page resilient and directly readable without client-side rendering.",
          },
          {
            title: "Semantic content model",
            description: "Shared dictionaries and content collections connect visible copy, metadata, routes and structured data.",
          },
          {
            title: "Connected schema graph",
            description: "Organization, WebSite, Service, FAQ, Article and breadcrumb entities describe what each page visibly supports.",
            evidence: [{ label: "Open live implementation", path: "/" }],
          },
          {
            title: "Machine discovery",
            description: "Sitemaps, dynamic llms.txt outputs and explicit AI crawler rules keep discovery surfaces deliberate and current.",
            evidence: [
              { label: "robots.txt", path: "/robots.txt" },
              { label: "llms.txt", path: "/llms.txt" },
              { label: "sitemap", path: "/sitemap-index.xml" },
            ],
          },
        ],
      },
      delivery: {
        eyebrow: "04 · Deploy and operations",
        title: "A short path from approved work to production.",
        description:
          "The delivery model avoids an opaque hosting layer. Every release has a visible build artifact, a defined production destination and a repeatable validation pass.",
        steps: [
          { title: "GitHub", description: "Versioned source and an auditable change history." },
          { title: "Astro build", description: "A production-ready static dist artifact." },
          { title: "cPanel", description: "Static output deployed to the production document root." },
          { title: "Cloudflare", description: "Edge cache and media delivery in front of production." },
          { title: "Validate", description: "Routes, forms, schema and indexing signals checked after release." },
        ],
      },
      measurement: {
        eyebrow: "05 · Launch baseline & measurement plan",
        title: "The launch created the baseline.",
        description:
          "Because v1be.io was created from zero, there is no honest legacy-site uplift to manufacture. The useful comparison begins at launch and follows the same signals over time.",
        note: "No invented before-and-after numbers. The case separates implemented evidence from outcomes that require elapsed production data.",
        baseline: [
          {
            label: "Release point",
            value: "Day 0",
            description: "Capture technical health, index coverage, the agreed AI query set and conversion events at launch.",
          },
          {
            label: "First review",
            value: "Day 30",
            description: "Check crawl and index coverage, early search movement and the first repeatable AI visibility signals.",
          },
          {
            label: "Trend review",
            value: "Day 90",
            description: "Compare performance, search, AI mentions and conversion against the same launch baseline.",
          },
        ],
        trackLabel: "Signals compared at every checkpoint",
        signals: [
          { title: "Performance", description: "Core Web Vitals and priority page speed." },
          { title: "Search", description: "Index coverage, impressions and clicks in Search Console." },
          { title: "AI visibility", description: "Mentions and citations across an agreed query set." },
          { title: "Conversion", description: "CTA clicks, form starts and qualified lead events." },
        ],
      },
      auditEvidence: {
        eyebrow: "Studio audit evidence",
        title: "What we tested on the studio site.",
        description:
          "Alongside the v1be.io case-zero build, we audited the production studio site. These results document accessibility and readiness checks, not evidence that a named crawler visited.",
        items: [
          {
            title: "AI crawler access",
            description:
              "robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended; the sitemap and llms.txt are linked for discovery.",
          },
          {
            title: "JavaScript-off readability",
            description:
              "Critical page sections remain visible in raw HTML and default CSS. Pagination concealment only activates after JavaScript marks animation as ready.",
          },
          {
            title: "Structured content",
            description:
              "Organization, WebSite, Service, FAQ and breadcrumb data are generated from the same visible page content they describe.",
          },
        ],
      },
      cta: {
        eyebrow: "Build from evidence",
        title: "Your launch can become the baseline.",
        subtitle:
          "Start with a clear view of what people, search engines and AI systems can understand today.",
        button: "Get a free audit",
      },
    },
    studioCase: {
      meta: { title: "v1be studio website design and development case study", description: "How v1be studio designed, built, tested and continues to improve its own service website for discovery and action." },
      breadcrumbLabel: "v1be studio",
      hero: { eyebrow: "CASE 002 · V1BE STUDIO", title: "We built our own site the way we believe websites should be built.", narrative: ["v1be studio was designed and developed from zero to do more than look good. It had to make a strong first impression, explain what we do clearly, support discovery, and create clear paths from attention to action.", "Then we shipped it, started testing it, found things we could improve, and kept building."], image: "", imageAlt: "" },
      origin: { eyebrow: "ORIGIN", title: "One build led to another.", narrative: ["v1be studio was born from v1be.io.", "Building v1be.io showed us that the system behind the website could become useful beyond our own product: visual design, development and the technical foundations behind discoverability could be approached as one connected process.", "That became the starting point for v1be studio.", "The two websites still share some of the same DNA, including the underlying procedural mascot system, but they were designed for different jobs. v1be.io introduces the product. v1be studio needs to demonstrate what we can build, explain how we work, make our services understandable and create a path from first visit to conversation.", "So we carried the lessons forward without copying the experience. The Studio developed its own visual language, interface decisions and commercial role."], map: ["v1be.io", "experience / learnings", "design + development + discovery", "v1be studio"], link: "See how v1be.io was designed and built" },
      design: { eyebrow: "DESIGN", title: "The first impression had to do some of the selling.", narrative: ["Someone discovering v1be studio might know nothing about us before landing on the site. Before they read about our process, packages or technical approach, the experience itself needed to make one thing clear: we know how to build a distinctive website.", "That shaped the visual direction from the beginning.", "We kept the interface dark and restrained, then used lime as a deliberate point of contrast. The procedural mascot gives the Studio a recognizable visual signature, while typography, motion and paginated interactions make the landing experience feel intentionally designed rather than assembled from familiar agency patterns.", "But visual impact was only one side of the job. The site still needed to remain understandable, responsive and easy to move through. Interior pages step away from the more expressive landing-page behavior when the content needs room to breathe.", "The goal wasn't complexity for its own sake. It was to create enough character to be remembered without making the experience harder to use."], visuals: [{ label: "LANDING EXPERIENCE", title: "Landing with a point of view", body: "The landing experience carries most of the Studio's visual personality: a focused palette, procedural character and interaction system designed to make the first encounter feel distinctly v1be studio.", image: "", alt: "" }, { label: "WORK", title: "The work should explain the claim", body: "A strong first impression can earn attention. The Work system has to justify it. Cases document what we build; Labs increasingly document what we test, learn and change after shipping.", image: "", alt: "" }] },
      discovery: { eyebrow: "SEO + GEO", title: "Looking good was only half the job.", narrative: ["A website can make a strong impression and still remain almost invisible beyond the people who already know where to find it.", "A distinctive interface can earn attention, but a stronger digital presence also depends on whether the website can be discovered, understood and connected to the rest of the brand.", "From the beginning, we wanted v1be studio to work on both sides of that equation: create an experience worth arriving at, then build the foundations that support people finding it in the first place.", "That meant treating search visibility as part of the build rather than something to bolt on after launch. Semantic structure, indexable content, structured data and clear discovery paths were considered alongside the interface itself.", "We applied the same thinking to", "The goal wasn't to chase every new optimization tactic. It was to build a technically sound foundation that could be tested, measured and improved as search and AI discovery continue to evolve."], definition: "Improving how clearly AI systems can access, understand and represent a brand and its website.", flow: ["SEARCH + AI", "DISCOVERY", "v1be studio", "UNDERSTAND", "ACT"], concepts: [["DISCOVERABLE", "Clear routes and machine-readable discovery paths."], ["UNDERSTANDABLE", "Semantic content and structured relationships around the brand, services and work."], ["TESTABLE", "A foundation we could inspect after launch instead of assuming it worked."]] },
      conversion: { eyebrow: "CONVERSION", title: "Attention needed somewhere to go.", narrative: ["Getting someone to the website was never the final objective.", "From the first structure, we designed clear paths for visitors at different levels of intent. Someone ready to understand the offer can explore our packages. Someone who already has a website but isn't sure what is holding it back can start with a free audit. And someone who wants proof before either can move through our Work.", "That thinking shaped the site architecture before the visual details were finished.", "The Packages experience turns an abstract website design and development service into clearer ways to start. Work provides evidence behind the promise. The audit creates a lower-friction first conversation.", "Together, these paths are designed to make the website more than a digital brochure and give different kinds of visitors a meaningful next step."], sources: "SEARCH · AI · LINKEDIN · REFERRAL", steps: ["ARRIVE", "v1be studio"], destinations: [["EXPLORE", "Packages", "/packages/"], ["VERIFY", "Work", "/work/"], ["START", "Free audit", "/contact/"]], sequence: "DISCOVER → UNDERSTAND → INSPECT → ACT" },
      development: { eyebrow: "DEVELOPMENT", title: "The experience needed a foundation that could keep up with it.", narrative: ["The visual system asked for movement and personality. The discovery strategy asked for clean, accessible content. The build had to support both without making one a compromise for the other.", "We chose Astro with TypeScript and Tailwind to keep the site fast, component-driven and close to the HTML delivered to the browser. More expressive interactions could live where they added something to the experience, while the underlying content remained readable and resilient.", "The homepage uses a more directed, paginated experience. Interior pages switch to native scrolling where longer-form content benefits from a familiar reading model. Progressive enhancement keeps core content available even when the interaction layer isn't.", "AI-assisted development became part of the workflow as well, primarily to accelerate implementation, iteration and repetitive technical work. Information architecture, UX decisions, visual direction and final judgment remained human-directed.", "The point wasn't to use more technology. It was to create a foundation we could keep changing without rebuilding the thinking every time."], stack: [["ASTRO", "Static-first foundation"], ["TYPESCRIPT", "Predictable components"], ["TAILWIND", "Consistent interface system"], ["PROGRESSIVE ENHANCEMENT", "Content before interaction"]], annotation: "HUMAN-DIRECTED · AI-ACCELERATED" },
      afterDeploy: { eyebrow: "AFTER DEPLOY", title: "Shipping gave us something to improve.", lead: "We shipped it. Then we started finding reasons to change it.", narrative: ["Once the site became part of real outreach, we started seeing it differently.", "Looking at the experience through the eyes of potential clients exposed gaps that were difficult to see while building it. Work needed to carry more proof. v1be studio itself deserved to become a Case. Questions about whether our SEO and GEO foundations actually behaved the way we expected led us to start testing them.", "Those questions eventually became Labs.", "Improvement wasn't a scheduled redesign. It came from using the website in the real world, learning from it and feeding those lessons back into the system."], loop: ["DESIGN", "CODE", "SEO/GEO", "DEPLOY", "OBSERVE", "IMPROVE"] },
      lab: { eyebrow: "LAB 001 · AI CRAWLABILITY", intro: "One of the first questions was simple: if we're building for AI discovery, can AI crawlers actually access what we built?", stages: [["QUESTION", "Can AI crawlers actually access the site we built for them to understand?"], ["TEST", "Crawler user-agents, raw HTML and JavaScript-off behavior."], ["FINDING", "The site was accessible under the tested conditions, but the experiment exposed a JavaScript-off pagination issue."], ["CHANGE", "We fixed it and added the check to our post-deploy QA."]], result: "ACCESSIBLE*", qualification: "Under the tested request conditions. This does not establish indexing, citation or ranking.", cta: "Explore Lab 001: AI Crawlability" },
      state: { eyebrow: "CURRENT STATE", title: "What exists today. What still needs time.", establishedLabel: "ESTABLISHED", measuringLabel: "STILL MEASURING", established: ["A live service website designed and developed from zero", "A distinct visual and interaction system", "Clear service, Work and audit paths", "Search and AI discovery foundations", "Structured, crawlable content", "Post-launch crawler testing", "A production issue identified and fixed through Lab 001", "A growing Case + Lab proof system"], measuring: ["Long-term organic search growth", "AI visibility and citations", "Conversion performance", "How different acquisition channels influence each other", "Commercial impact over time"], note: "We are early, so we would rather show what exists than manufacture outcomes that need more time to measure." },
      service: { eyebrow: "FROM PROOF TO SERVICE", title: "The same thinking is available for your website.", narrative: ["We use the same design, development, discovery and post-launch thinking when we work on client websites.", "If you already have a site, the easiest place to start is understanding what it may be leaving on the table."], primary: "Get a free audit", secondary: "Explore packages" },
    },
  },
  about: {
    meta: {
      title: "About — the studio arm of v1be | v1be studio",
      description:
        "v1be studio is the web design and development arm of v1be. We build fast, structured websites engineered to be cited by AI search engines.",
    },
    hero: {
      eyebrow: "About v1be studio",
      title: "The studio arm of v1be.",
      mapLabel: "How v1be and v1be studio work together",
      platform: {
        label: "Platform",
        name: "v1be",
        role: "Research, intelligence, content systems and AI-assisted marketing operations.",
      },
      studio: {
        label: "Service arm",
        name: "v1be studio",
        role: "Strategy, UX, visual design and technical delivery for the web presence those systems rely on.",
      },
      outcome: {
        label: "Shared outcome",
        value: "An owned website people understand and AI engines can parse.",
      },
    },
    canonical: CANONICAL_DESCRIPTION,
    relationship: {
      eyebrow: "One company · Two ways to work",
      title: "The platform builds the intelligence. The studio builds the place it lands.",
      description:
        "Software can find the signal, create the draft and measure the change. It still needs an owned experience with a clear message, useful journeys and a technical foundation that can carry the work.",
      parts: [
        {
          label: "v1be · Platform",
          title: "The intelligence layer",
          description:
            "v1be analyzes how a brand appears across search and AI answers, then supports the content and operating systems needed to improve that presence.",
          points: [
            "Visibility and brand analysis",
            "AI-assisted content and marketing workflows",
            "Continuous learning across owned channels",
          ],
        },
        {
          label: "v1be studio · Service",
          title: "The experience layer",
          description:
            "The studio turns the opportunity into a clear brief, a designed experience and a maintainable website with SEO and GEO infrastructure built in.",
          points: [
            "Content strategy, UX and visual direction",
            "Responsive frontend and technical systems",
            "Launch validation, evidence and handoff",
          ],
        },
      ],
      shared: "Shared method · Brand clarity → structured experience → visible evidence",
    },
    principles: {
      eyebrow: "How we operate",
      title: "The way we work is part of the deliverable.",
      description:
        "A website project should reduce ambiguity as it moves. These principles keep the work reviewable, the decisions accountable and the final system yours.",
      items: [
        {
          title: "Evidence before opinion",
          description: "We start from the audience, the current site and the visibility baseline before prescribing a solution.",
        },
        {
          title: "Decisions before decoration",
          description: "Message, structure and user journeys are approved before visual direction turns them into an interface.",
        },
        {
          title: "AI assists. Humans decide.",
          description: "Automation can accelerate research and production; consequential content and product choices keep an owner.",
        },
        {
          title: "Ownership at handoff",
          description: "You receive the repository, production assets and the evidence behind the launch—without platform lock-in.",
        },
      ],
    },
    proof: {
      eyebrow: "Our own benchmark",
      title: "We practice on ourselves first.",
      description:
        "v1be.io is case zero, and studio.v1be.io follows the same rule: the methodology should remain visible in the source, the content and the delivered artifact.",
      cta: "See the work",
    },
    founder: {
      eyebrow: "Founder",
      description:
        "Görkem Berk Gündoğdu co-founded v1be studio and leads its UI/UX and product direction. The studio works remotely with teams worldwide.",
      linkedinLabel: "Connect on LinkedIn",
    },
    cta: {
      eyebrow: "Start with evidence",
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
      websiteLabel: "Website domain",
      websitePlaceholder: "yourbrand.com",
      messageLabel: "Anything we should know?",
      messagePlaceholder: "Where are you now, and where do you want your brand to be?",
      submit: "Request my free audit",
      submitting: "Sending…",
      successTitle: "Got it — talk soon.",
      successBody:
        "Thanks for reaching out. A real person will get back to you personally, usually within one business day.",
      errorGeneric: "Something went wrong. Please email us directly and we'll pick it up.",
      invalidEmail: "Please enter a valid email address.",
      invalidWebsite: "Enter a complete domain such as yourbrand.com.",
      mailtoIntro: "Prefer email? Reach us directly at",
      reassurance: "A human reads every message. We never share your details.",
      mailtoSubject: "Free audit request",
      mailtoName: "Name",
      mailtoEmail: "Email",
      mailtoWebsite: "Website",
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
  consent: { title: "Your data, your call.", text: "A few cookies help us see which pages genuinely help visitors and whether our ads pay their way. We never sell your data, and the site works exactly the same if you decline.", accept: "Allow cookies", decline: "No thanks", label: "Cookie consent", privacy: "Privacy" },
  promo: { minimize: "Minimize v1be", eyebrow: "from", title: "Turn visibility into a growth system.", text: "v1be connects content, brand intelligence and AI automation in one human-approved platform.", cta: "Explore v1be" },
} as const;

/** Şemayı korur ama değerleri `string`e genişletir — diğer diller buna uyar. */
type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Dictionary = DeepString<typeof en>;
