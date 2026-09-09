import { en, type Dictionary } from "./en";
import { labTr } from "./lab";

/** Turkish content mirrors the English dictionary so visible copy and schema stay aligned. */
const trBase = {
  ...en,
  lab: labTr,
  meta: {
    siteTitle: "v1be studio — GEO odaklı web tasarım ve geliştirme",
    siteDescription:
      "v1be studio, ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarınca alıntılanmak üzere tasarlanmış hızlı ve yapılandırılmış web siteleri üretir.",
  },
  a11y: {
    skipToContent: "İçeriğe geç",
    mainNav: "Ana navigasyon",
    footerNav: "Alt bilgi navigasyonu",
    menuToggle: "Menü",
    menuClose: "Kapat",
    languageMenu: "Dil seçimi",
    breadcrumb: "İçerik yolu",
    keepScrolling: "Kaydırmaya devam edin",
    processStages: "Süreç aşamaları",
    websiteSystemLayers: "Web sitesi sistem katmanları",
  },
  nav: {
    packages: "Paketler",
    process: "Süreç",
    work: "İşler",
    about: "Hakkımızda",
    cta: "Ücretsiz audit’inizi alın",
  },
  home: {
    ...en.home,
    meta: {
      title: "v1be studio — yapay zekâ tarafından alıntılanmak üzere tasarlanan siteler",
      description:
        "GEO odaklı tasarım, geliştirme ve içerik. Markalar ve ajanslar için ChatGPT, Gemini ve Perplexity'de alıntılanmak üzere tasarlanan siteler.",
    },
    hero: {
      headline: [
        { text: "Ödül düzeyinde", accent: "" },
        { text: "tasarım.", accent: "tasarım." },
        { text: "Yapay zekâ için", accent: "" },
        { text: "yapı.", accent: "yapı." },
      ],
      mascotName: "v1ben.",
    },
    what: {
      headingLines: [
        "Ödüllü düzeyde tasarıma sahip,",
        "temelden yapay zekâ motorlarının",
        "okuyup alıntılayacağı şekilde",
        "inşa edilen web siteleri üretiyoruz.",
      ],
      bold: ["tasarıma", "yapay zekâ", "okuyup", "alıntılayacağı"],
      cta: "Ücretsiz audit’inizi alın",
      ctaSecondary: "Projelerimizi görün",
    },
    how: {
      ...en.home.how,
      title: "Nasıl çalışıyoruz",
      steps: [
        {
          number: "01",
          title: "Denetim",
          description:
            "Sitenizi kendi motorumuzla analiz eder; gerçek yapay zekâ görünürlük skorları, alıntı sayıları ve öncelikli sorun listesi çıkarırız. Henüz siteniz yoksa fizibilite çalışmasıyla başlarız.",
        },
        {
          number: "02",
          title: "Düzelt",
          description:
            "Denetimin işaret ettiği bozuk yapı, eksik şema ve zayıf içerik gibi sorunları, bunları bulan aynı motorla gideririz.",
        },
        {
          number: "03",
          title: "İçerik",
          description:
            "Marka sesinizle hazırlanan, alıntılanabilirliği puanlanmış makaleler taslak olarak iletilir; yalnızca sizin onayınızla yayınlanır.",
        },
        {
          number: "04",
          title: "Tasarım",
          description:
            "Awwwards adaylığı standardında UI/UX. Şablon değil, sonradan düşünülmüş bir katman hiç değil.",
        },
        {
          number: "05",
          title: "Geliştir",
          description:
            "Tam şema grafiği, llms.txt ve tarayıcı erişimi tasarımla birlikte sunulur; sonradan eklenmez.",
        },
        {
          number: "06",
          title: "Ölç",
          description:
            "Görünürlük anlık görüntüsünü yeniden alır, önce/sonra farkını gösteririz. Lansman günü GEO'nun bittiği değil, başladığı gündür.",
        },
      ],
      cta: "Ücretsiz audit’inizi alın",
      ctaSecondary: "Sürecimizi inceleyin →",
    },
    work: {
      ...en.home.work,
      title: "v1beholics",
      caseCard: {
        ...en.home.work.caseCard,
        description:
          "Kendi platform sitemiz ilk vakamızdır: şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulaması. Önce kendimizde uygularız.",
        linkLabel: "Vaka çalışmasını okuyun",
      },
      openSlot: {
        label: "Bu alan, alıntılanmak isteyen bir marka için ayrıldı.",
        cta: "Ücretsiz audit’inizi alın",
      },
    },
    contact: {
      title: "v1be'nizi alın",
      promise:
        "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü — neyi alıntıladığını, neyi kaçırdığını ve ilk neyi düzelteceğimizi — gösterelim. Sunum yok, laf kalabalığı yok; çalışma oturumu var.",
    },
  },
  packages: {
    meta: {
      title: "Web Tasarım ve Geliştirme Paketleri | v1be studio",
      description:
        "GEO odaklı bir siteye iki yol: sıfırdan inşa edin veya SEO otoritesini kaybetmeden onarıp yeniden geliştirin. Her iki yolda ücretsiz denetim.",
    },
    hero: {
      eyebrow: "Paketler",
      title: "Başlamanın iki yolu.",
      subtitle:
        "İster sıfırdan inşa edin, ister bozuk olanı düzeltin — hedef aynı: sadece taranan değil, alıntılanan bir site.",
      primaryCta: "Ücretsiz audit’inizi alın",
      secondaryCta: "Proje brief'inizi oluşturun",
      reassurance: "İki dakika. Taahhüt yok. Denetim her zaman ücretsizdir.",
    },
    configurator: {
      eyebrow: "Çalışmayı şekillendirin",
      title: "Bir sonraki web siteniz neyi çözmeli?",
      intro:
        "Mevcut durumunuzla başlayın, ardından en acil hissettiren sorunları seçin. Bu sinyalleri jenerik bir paket listesi yerine pratik bir başlangıç brief'ine dönüştürelim.",
      pathQuestion: "Nereden başlıyorsunuz?",
      needsQuestion: "İlk olarak neyin değişmesi gerekiyor?",
      needsNote: "En fazla üç tane seçin. Öncelik katmanlarınız siz seçtikçe güncellenecektir.",
      needs: [
        {
          id: "clarity",
          title: "İnsanlar teklifimizi anlamıyor",
          briefLabel: "Mesaj netliği",
          description: "Mesajın daha keskin bir konumlandırmaya, yapıya ve metne ihtiyacı var.",
          layerIds: ["message", "experience"],
        },
        {
          id: "friction",
          title: "Deneyim zorlayıcı hissettiriyor",
          briefLabel: "UX sürtünmesi",
          description: "Navigasyon, hiyerarşi veya dönüşüm yolları gereksiz zorluk yaratıyor.",
          layerIds: ["experience", "interface"],
        },
        {
          id: "credibility",
          title: "Tasarım güvenilir hissettirmiyor",
          briefLabel: "Görsel güvenilirlik",
          description: "Arayüzün daha güçlü bir görsel sisteme ve net kanıtlara ihtiyacı var.",
          layerIds: ["interface", "message"],
        },
        {
          id: "performance",
          title: "Site yavaş veya kırılgan",
          briefLabel: "Performans ve dayanıklılık",
          description: "Performans, erişilebilirlik ve ön yüz temeli ilgi gerektiriyor.",
          layerIds: ["code", "experience"],
        },
        {
          id: "systems",
          title: "Entegrasyonlara veya özel mantığa ihtiyacımız var",
          briefLabel: "Entegrasyonlar ve özel mantık",
          description: "Formlar, veri akışları veya arka uç sistemlerinin tek bir ürün olarak çalışması gerekiyor.",
          layerIds: ["systems", "code"],
        },
        {
          id: "visibility",
          title: "Arama ve yapay zekâ motorları bizi anlayamıyor",
          briefLabel: "SEO ve yapay zekâ görünürlüğü",
          description: "Yapı, varlıklar ve kanıtların makineler tarafından okunabilir hale gelmesi gerekiyor.",
          layerIds: ["discoverability", "message"],
        },
      ],
      layers: [
        { id: "message", title: "Mesaj", caption: "Konumlandırma, yapı ve metin" },
        { id: "experience", title: "Deneyim", caption: "Yolculuklar, hiyerarşi ve dönüşüm" },
        { id: "interface", title: "Arayüz", caption: "Görsel sistem ve etkileşim" },
        { id: "systems", title: "Sistemler", caption: "Mantık, veri ve entegrasyonlar" },
        { id: "code", title: "Kod", caption: "Performans ve erişilebilirlik" },
        { id: "discoverability", title: "Keşfedilebilirlik", caption: "SEO, GEO ve yapılandırılmış veri" },
      ],
      summary: {
        eyebrow: "Proje brief'i",
        empty: "Web sitesi katmanlarını etkinleştirmek için bir öncelik seçin.",
        layersLabel: "Öncelik sinyalleri",
        ctaSuffix: "→",
        limitMessage: "Üç öncelik seçildi. Başka birini seçmek için birini kaldırın.",
      },
    },
    paths: [
      {
        id: "new",
        microLabel: "Henüz web siteniz yok",
        title: "Sıfırdan başlayın",
        serviceType: "Web Tasarım ve Geliştirme",
        selectorDescription:
          "Mesajı, deneyimi ve teknik temeli ilk günden birlikte kurun.",
        briefCta: "Ücretsiz audit’inizi alın",
        priceNew: "$749",
        bullets: [
          "Özel geliştirilmiş, en fazla 5 sayfa",
          "İlk günden varlık ana sayfası ve temel şema",
          "Yalnızca yayında değil, alıntılanabilir",
        ],
      },
      {
        id: "redesign",
        microLabel: "Sitenizden memnun değilsiniz",
        title: "Bozuk olanı düzeltin",
        serviceType: "Web Sitesi Yenileme ve Taşıma",
        selectorDescription:
          "Değer taşıyanı koruyun, sürtünme yaratanı onarın ve mevcut arama otoritesini koruyun.",
        briefCta: "Ücretsiz audit’inizi alın",
        priceNew: "$999",
        bullets: [
          "Yönlendirme haritası SEO otoritenizi korur",
          "Yapay zekâ araması için şema ve yapı yeniden kurulur",
          "Aynı GEO odaklı temel, mevcut zemini kaybetmeden",
        ],
      },
    ],
    proof: {
      eyebrow: "Kanıt teslimatta yaşar",
      title: "Somut bir çıktı olmadan vaat olmaz.",
      intro:
        "Sizden dört jenerik iddiaya güvenmenizi istemek yerine, her birini inceleyebileceğiniz, onaylayabileceğiniz ve saklayabileceğiniz somut bir teslimatla eşleştiriyoruz.",
      items: [
        {
          number: "01",
          kind: "repository",
          eyebrow: "Kod deposu teslimi",
          title: "Kod tamamen sizindir.",
          description:
            "Depoyu, varlıkları ve devir notlarını teslim alırsınız. Kendi web sitenizi çalıştırmaya devam etmek için platform kilitlenmesi veya yinelenen lisans ücreti yoktur.",
        },
        {
          number: "02",
          kind: "scope",
          eyebrow: "Geliştirmeden önce anlaşılır",
          title: "Kapsam her zaman görünür kalır.",
          description:
            "Dahil edilen işler, sonraki fırsatlar ve her türlü kapsam değişikliği teslimatı veya faturanızı etkilemeden önce açıkça belirtilir.",
        },
        {
          number: "03",
          kind: "audit",
          eyebrow: "Fikirden önce kanıt",
          title: "Denetim, çalışan bir çıktıdır.",
          description:
            "Arama ve yapay zekâ motorlarının ne bulduğunu, neyi kaçırdığını ve hangi düzeltmelerin öncelikli olduğunu bir satış sunumu olmadan gösteririz.",
        },
        {
          number: "04",
          kind: "redirects",
          eyebrow: "Korunan geçiş",
          title: "Mevcut arama otoritesinin bir haritası vardır.",
          description:
            "Yeniden inşa edilen sitelerde, lansmanın önceden kazandığınız otoriteyi dikkatsizce bir kenara atmaması için eski rotalar yeni hedeflerine haritalanır.",
        },
      ],
      cta: "Ücretsiz audit’inizi alın",
      ctaHref: "/contact/",
      secondaryCta: "Çalışmalarımızı inceleyin",
      secondaryHref: "/work/",
    },
    faq: {
      title: "Sık sorulan sorular",
      items: [
        {
          question: "Lansmandan sonra kodun sahibi olur muyuz?",
          answer:
            "Evet. Depoyu ve tam mülkiyeti alırsınız. Kendi sitenizi çalıştırmak için kilitlenme ya da yinelenen lisans ücreti yoktur.",
        },
        {
          question: "Hangi yolun bana uygun olduğunu nasıl anlarım?",
          answer:
            "Yayında bir siteniz yoksa sıfırdan başlayın. Siteniz var ama dönüşüm, sıralama ya da yapay zekâ yanıtlarında görünürlük sağlamıyorsa, bozuk olanı düzeltin — nedenin tasarım veya SEO/GEO olması fark etmez, izlenecek yol aynıdır.",
        },
        {
          question: "Projem iki yoldan birine uymuyorsa ne olur?",
          answer:
            "Çoğu proje bu iki yoldan birine uyar. Projeniz farklı bir kapsam gerektiriyorsa — daha fazla sayfa, web uygulaması veya e-ticaret — bize bildirin, bunu özel bir proje olarak kapsamlandıralım.",
        },
        {
          question: "Fiyatlara lansman sonrası içerik veya SEO çalışması dahil mi?",
          answer:
            "Hayır. Bunlar tek seferlik geliştirmeyi kapsar. Sürekli GEO içerik üretimi için v1be'nin Vibe planı ayrı bir aboneliktir; hazır olduğunuzda sizi oraya yönlendiririz.",
        },
        {
          question: "Ücretsiz denetim paketin bir parçası mı?",
          answer: "Hayır. Seçtiğiniz yoldan ya da hiç yol seçmemenizden bağımsız olarak ücretsizdir.",
        },
        {
          question: "Proje ortasında kapsam büyürse ne olur?",
          answer:
            "Başlamadan önce kapsam üzerinde anlaşırız. Bir şey değişirse faturanıza yansımadan önce haberdar edilirsiniz.",
        },
      ],
    },
  },
  work: {
    ...en.work,
    meta: {
      title: "İşler — vaka çalışmaları | v1be studio",
      description:
        "v1be studio vaka çalışmaları: kendi platform sitemiz v1be.io ile başlayan, doğrulanmış GEO uygulamaları.",
    },
    hero: {
      eyebrow: "İşler",
      title: "Kanıt, önce kendimizden.",
      subtitle:
        "Metodolojiyi satmadan önce kendi platformumuzda uygularız. İlk vaka v1be.io.",
    },
    cases: [
      {
        ...en.work.cases[0],
        tag: "İlk vaka",
        description:
          "Kendi platform sitemiz ilk vakamızdır: şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulaması. Önce kendimizde uygularız.",
        linkLabel: "Vaka çalışmasını okuyun",
      },
      {
        ...en.work.cases[1],
        tag: "Vaka 002",
        description:
          "Kendi hizmet sitemiz; iki dilde rotalar, yerelleştirilmiş şema ve tek bir iletişim yolu üzerinde aynı GEO sistemini uygular.",
        linkLabel: "Vaka çalışmasını okuyun",
      },
    ],
    openSlot: {
      label: "Bu alan sizin için ayrıldı.",
      description:
        "Ücretsiz bir denetimle başlayın. Fırsatı net bir brief’e ve kaynak gösterilmek üzere tasarlanmış bir web sitesine dönüştürelim.",
      cta: "Ücretsiz audit’inizi alın",
    },
    studioCase: {
      meta: {
        title: "v1be studio web tasarım ve geliştirme vaka çalışması | v1be studio",
        description:
          "v1be studio'nun keşif ve aksiyon için kendi hizmet sitesini nasıl tasarladığını, geliştirdiğini, test ettiğini ve iyileştirmeye devam ettiğini inceleyin.",
      },
      breadcrumbLabel: "v1be studio",
      hero: {
        eyebrow: "VAKA 002 · V1BE STUDIO",
        title:
          "Kendi sitemizi, web sitelerinin yapılması gerektiğine inandığımız şekilde inşa ettik.",
        titleBefore:
          "Kendi sitemizi, web sitelerinin yapılması gerektiğine inandığımız şekilde ",
        titleAccent: "inşa ettik.",
        narrative: [
          "v1be studio, sadece güzel görünmekten fazlasını yapmak üzere sıfırdan tasarlandı ve geliştirildi. Güçlü bir ilk izlenim bırakmalı, ne yaptığımızı net bir şekilde açıklamalı, keşfedilebilirliği desteklemeli ve ilgiyi aksiyona dönüştüren net yollar sunmalıydı.",
          "Ardından yayına aldık, test etmeye başladık, geliştirebileceğimiz noktaları keşfettik ve inşa etmeye devam ettik.",
        ],
        image: "",
        imageAlt:
          "Prosedürel karakter ve yüksek kontrastlı tipografi ile canlı v1be studio deneyimi",
      },
      origin: {
        eyebrow: "KÖKEN",
        title: "Bir geliştirme diğerine öncülük etti.",
        narrative: [
          "v1be studio, v1be.io'dan doğdu.",
          "v1be.io'yu inşa etmek, web sitesinin arkasındaki sistemin kendi ürünümüzün ötesinde de faydalı olabileceğini gösterdi: görsel tasarım, geliştirme ve keşfedilebilirliğin arkasındaki teknik temeller birbirine bağlı tek bir süreç olarak ele alınabilirdi.",
          "Bu yaklaşım, v1be studio için bir başlangıç noktası oldu.",
          "İki web sitesi, temeldeki prosedürel maskot sistemi de dahil olmak üzere hâlâ aynı DNA'nın bir kısmını paylaşıyor; ancak farklı amaçlar için tasarlandılar. v1be.io ürünü tanıtır. v1be studio ise neler inşa edebileceğimizi kanıtlamalı, nasıl çalıştığımızı açıklamalı, hizmetlerimizi anlaşılır kılmalı ve ilk ziyaretten iş birliğine uzanan bir yol açmalıdır.",
          "Böylece deneyimi birebir kopyalamadan, öğrendiğimiz dersleri ileriye taşıdık. Stüdyo kendi görsel dilini, arayüz kararlarını ve ticari rolünü geliştirdi.",
        ],
        map: [
          "v1be.io",
          "deneyim / öğrenimler",
          "tasarım + geliştirme + keşif",
          "v1be studio",
        ],
        link: "v1be.io'nun nasıl tasarlandığını ve inşa edildiğini görün",
      },
      design: {
        eyebrow: "TASARIM",
        title: "İlk izlenim, sunumun bir parçasını üstlenmek zorundaydı.",
        narrative: [
          "v1be studio'yu keşfeden biri, siteye ulaşmadan önce hakkımızda hiçbir şey bilmiyor olabilir. Sürecimizi, paketlerimizi veya teknik yaklaşımımızı okumadan önce, deneyimin kendisinin tek bir şeyi netleştirmesi gerekiyordu: özgün ve ayırt edici bir web sitesi inşa etmeyi biliyoruz.",
          "Bu vizyon, görsel yönü en başından itibaren şekillendirdi.",
          "Arayüzü koyu ve ölçülü tuttuk, ardından bilinçli bir kontrast unsuru olarak neon yeşili kullandık. Prosedürel maskot Stüdyoya tanınabilir bir görsel imza kazandırırken; tipografi, hareket ve sayfalandırılmış etkileşimler, açılış deneyiminin bilindik ajans kalıplarından toplanmış gibi değil, kasıtlı olarak tasarlandığını hissettirir.",
          "Ancak görsel etki işin yalnızca bir tarafıydı. Sitenin anlaşılır, duyarlı ve kolayca gezinilebilir kalması gerekiyordu. İç sayfalar, içeriğin nefes alması gerektiğinde açılış sayfasının daha dışavurumcu davranışından bilinçli olarak uzaklaşır.",
          "Amaç kendi içinde bir karmaşıklık yaratmak değildi. Deneyimi zorlaştırmadan, akılda kalacak düzeyde güçlü bir karakter oluşturmaktı.",
        ],
        visuals: [
          {
            label: "AÇILIŞ DENEYİMİ",
            title: "Bir bakış açısıyla açılan sayfa",
            body: "Açılış deneyimi Stüdyonun görsel kişiliğinin çoğunu taşır: odaklanmış bir palet, prosedürel karakter ve ilk karşılaşmayı belirgin şekilde v1be studio hissettirmek için tasarlanmış etkileşim sistemi.",
            image: "",
            alt: "",
          },
          {
            label: "İŞLER",
            title: "Çalışmalar vaadi açıklamalıdır",
            body: "Güçlü bir ilk izlenim ilgi çekebilir. İşler sistemi ise bunu haklı çıkarmalıdır. Vakalar ne inşa ettiğimizi belgeler; Laboratuvarlar ise yayından sonra neyi test ettiğimizi, öğrendiğimizi ve değiştirdiğimizi giderek daha fazla belgeler.",
            image: "",
            alt: "",
          },
        ],
      },
      discovery: {
        eyebrow: "SEO + GEO",
        title: "İyi görünmek işin sadece yarısıydı.",
        narrative: [
          "Bir web sitesi güçlü bir izlenim bırakabilir ancak onu nereden bulacağını zaten bilenlerin ötesinde neredeyse görünmez kalabilir.",
          "Özgün bir arayüz ilgi çekebilir; ancak daha güçlü bir dijital varlık, sitenin keşfedilebilir olmasına, anlaşılmasına ve markanın geri kalanına doğru bağlanmasına da bağlıdır.",
          "En başından beri, v1be studio'nun bu denklemin her iki tarafında da çalışmasını istedik: ziyaret edilmeye değer bir deneyim yaratmak, ardından insanların onu en başta bulmasını destekleyen temelleri kurmak.",
          "Bu, arama görünürlüğünü lansmandan sonra eklenecek bir şey olarak değil, geliştirmenin doğal bir parçası olarak ele almak anlamına geliyordu. Semantik yapı, indekslenebilir içerik, yapılandırılmış veri ve net keşif yolları doğrudan arayüzün kendisiyle birlikte tasarlandı.",
          "Aynı düşünceyi şunun için de uyguladık:",
          "Amaç her yeni optimizasyon taktiğinin peşinden koşmak değildi. Arama ve yapay zekâ keşfi gelişmeye devam ettikçe test edilebilecek, ölçülebilecek ve iyileştirilebilecek teknik açıdan sağlam bir temel oluşturmaktı.",
        ],
        definition:
          "Yapay zekâ sistemlerinin bir markaya ve web sitesine ne kadar net erişebildiğini, anlayabildiğini ve temsil edebildiğini iyileştirmek.",
        flow: ["ARAMA + AI", "KEŞİF", "v1be studio", "ANLAMA", "AKSİYON"],
        concepts: [
          [
            "KEŞFEDİLEBİLİR",
            "Net rotalar ve makineler tarafından okunabilir keşif yolları.",
          ],
          [
            "ANLAŞILABİLİR",
            "Marka, hizmetler ve çalışmalar etrafında semantik içerik ve yapılandırılmış ilişkiler.",
          ],
          [
            "TEST EDİLEBİLİR",
            "Çalıştığını varsaymak yerine lansmandan sonra denetleyebileceğimiz bir altyapı.",
          ],
        ],
      },
      conversion: {
        eyebrow: "DÖNÜŞÜM",
        title: "İlginin gidecek bir yere ihtiyacı vardı.",
        narrative: [
          "Birini web sitesine getirmek hiçbir zaman nihai hedef olmadı.",
          "İlk taslaktan itibaren, farklı niyet düzeylerindeki ziyaretçiler için net yollar tasarladık. Teklifi anlamaya hazır biri paketlerimizi inceleyebilir. Zaten bir web sitesi olan ancak onu neyin geride tuttuğundan emin olmayan biri ücretsiz bir denetimle başlayabilir. Ve her ikisinden önce kanıt isteyen biri Çalışmalarımızı gezebilir.",
          "Bu yaklaşım, görsel detaylar tamamlanmadan önce site mimarisini şekillendirdi.",
          "Paketler deneyimi, soyut bir web tasarım ve geliştirme hizmetini başlamanın daha somut yollarına dönüştürür. Çalışmalar, vaadin arkasındaki kanıtı sunar. Denetim ise sürtünmesiz bir ilk diyalog ortamı yaratır.",
          "Birlikte ele alındığında bu yollar, web sitesini dijital bir broşürden fazlası kılmak ve farklı türdeki ziyaretçilere anlamlı bir sonraki adım sunmak için tasarlandı.",
        ],
        sources: "ARAMA · AI · LINKEDIN · REFERANS",
        steps: ["ULAŞMA", "v1be studio"],
        destinations: [
          ["İNCELE", "Paketler", "/packages/"],
          ["DOĞRULA", "Çalışmalar", "/work/"],
          ["BAŞLA", "Ücretsiz denetim", "/contact/"],
        ],
        sequence: "KEŞFET → ANLA → DENETLE → HAREKETE GEÇ",
      },
      development: {
        eyebrow: "GELİŞTİRME",
        title: "Deneyimin, ona ayak uydurabilecek bir temele ihtiyacı vardı.",
        narrative: [
          "Görsel sistem dinamizm ve kişilik talep etti. Keşif stratejisi temiz ve erişilebilir içerik istedi. Geliştirme süreci, birini diğeri için feda etmeden her ikisini de desteklemek zorundaydı.",
          "Siteyi hızlı, bileşen odaklı ve tarayıcıya iletilen HTML'e olabildiğince yakın tutmak için TypeScript ve Tailwind ile Astro'yu seçtik. Daha dışavurumcu etkileşimler deneyime değer kattıkları noktalarda yer alırken, alttaki içerik okunabilir ve esnek kalmayı sürdürdü.",
          "Ana sayfa daha yönlendirilmiş, sayfalandırılmış bir deneyim kullanır. İç sayfalar, uzun formatlı içeriğin tanıdık bir okuma modelinden faydalandığı yerel kaydırmaya geçer. Kademeli zenginleştirme (progressive enhancement), etkileşim katmanı yüklenmediğinde dahi temel içeriğin erişilebilir kalmasını sağlar.",
          "Yapay zekâ destekli geliştirme de iş akışının bir parçası oldu; esas olarak uygulamayı, yinelemeyi ve tekrarlayan teknik işleri hızlandırmak için kullanıldı. Bilgi mimarisi, UX kararları, görsel yönlendirme ve nihai değerlendirme insan liderliğinde kaldı.",
          "Amaç daha fazla teknoloji kullanmak değildi. Her seferinde düşünceyi sıfırdan kurmak zorunda kalmadan geliştirmeye devam edebileceğimiz bir temel oluşturmaktı.",
        ],
        stack: [
          ["ASTRO", "Statik-öncelikli temel"],
          ["TYPESCRIPT", "Öngörülebilir bileşenler"],
          ["TAILWIND", "Tutarlı arayüz sistemi"],
          ["PROGRESSIVE ENHANCEMENT", "Etkileşimden önce içerik"],
        ],
        annotation: "İNSAN-LİDERLİĞİNDE · AI-HIZLANDIRILMIŞ",
      },
      afterDeploy: {
        eyebrow: "YAYIN SONRASI",
        title: "Yayına almak bize geliştirecek bir zemin verdi.",
        lead: "Yayına aldık. Ardından onu değiştirmek için nedenler bulmaya başladık.",
        narrative: [
          "Site gerçek iletişim çalışmalarımızın bir parçası haline geldiğinde, onu farklı görmeye başladık.",
          "Deneyime potansiyel müşterilerin gözünden bakmak, inşa ederken fark edilmesi zor olan boşlukları açığa çıkardı. Çalışmaların daha fazla kanıt taşıması gerekiyordu. v1be studio'nun kendisi bir Vaka haline gelmeyi hak ediyordu. SEO ve GEO temellerimizin gerçekten beklediğimiz gibi davranıp davranmadığına dair sorular bizi bunları test etmeye yöneltti.",
          "Bu sorular zamanla Laboratuvarlar (Labs) haline geldi.",
          "İyileştirme, önceden planlanmış bir yeniden tasarım değildi. Web sitesini gerçek dünyada kullanmaktan, ondan öğrenmekten ve bu dersleri sisteme geri beslemekten doğdu.",
        ],
        loop: ["TASARIM", "KOD", "SEO/GEO", "YAYIN", "GÖZLEM", "İYİLEŞTİRME"],
      },
      lab: {
        eyebrow: "LAB 001 · AI TARANABİLİRLİĞİ",
        intro:
          "İlk sorulardan biri oldukça basitti: Yapay zekâ keşfi için inşa ediyorsak, yapay zekâ tarayıcıları inşa ettiğimiz içeriğe gerçekten erişebiliyor mu?",
        stages: [
          [
            "SORU",
            "Yapay zekâ tarayıcıları, anlamaları için inşa ettiğimiz siteye gerçekten erişebiliyor mu?",
          ],
          [
            "TEST",
            "Tarayıcı user-agent'ları, ham HTML ve JavaScript kapalıykenki davranış.",
          ],
          [
            "BULGU",
            "Site test edilen koşullarda erişilebilirdi; ancak deney JavaScript kapalıyken oluşan bir sayfalandırma sorununu açığa çıkardı.",
          ],
          [
            "DEĞİŞİKLİK",
            "Sorunu giderdik ve bu denetimi lansman sonrası QA sürecimize ekledik.",
          ],
        ],
        result: "ERİŞİLEBİLİR*",
        qualification:
          "Test edilen istek koşulları altında geçerlidir. Bu sonuç indeksleme, kaynak gösterme veya sıralama garantisi vermez.",
        cta: "Lab 001'i Keşfedin: AI Taranabilirliği",
      },
      state: {
        eyebrow: "MEVCUT DURUM",
        title: "Bugün var olanlar. Hâlâ zamana ihtiyaç duyanlar.",
        establishedLabel: "YERLEŞİK OLANLAR",
        measuringLabel: "HÂLÂ ÖLÇÜLENLER",
        established: [
          "Sıfırdan tasarlanıp geliştirilen canlı bir hizmet sitesi",
          "Özgün bir görsel ve etkileşim sistemi",
          "Net hizmet, Çalışmalar ve denetim yolları",
          "Arama ve yapay zekâ keşif temelleri",
          "Yapılandırılmış, taranabilir içerik",
          "Lansman sonrası tarayıcı testleri",
          "Lab 001 ile tespit edilip giderilen bir canlı ortam sorunu",
          "Büyüyen bir Vaka + Laboratuvar kanıt sistemi",
        ],
        measuring: [
          "Uzun vadeli organik arama büyümesi",
          "Yapay zekâ görünürlüğü ve alıntıları",
          "Dönüşüm performansı",
          "Farklı edinme kanallarının birbirini nasıl etkilediği",
          "Zaman içindeki ticari etki",
        ],
        note: "Henüz erken aşamadayız; bu nedenle ölçülmesi zaman alan varsayımsal sonuçlar üretmek yerine, var olanı şeffafça göstermeyi tercih ederiz.",
      },
      service: {
        eyebrow: "KANITTAN HİZMETE",
        title: "Aynı vizyon sizin web siteniz için de hazır.",
        narrative: [
          "Müşteri web sitelerinde çalışırken de aynı tasarım, geliştirme, keşif ve lansman sonrası düşünce sistemini uyguluyoruz.",
          "Zaten bir web siteniz varsa, başlamanın en kolay yolu onun neleri masada bırakıyor olabileceğini anlamaktır.",
        ],
        primary: "Ücretsiz audit’inizi alın",
        secondary: "Paketleri inceleyin",
      },
    },
    caseStudy: {
      ...en.work.caseStudy,
      meta: {
        title: "Vaka çalışması: v1be.io — kendi platform sitemiz | v1be studio",
        description:
          "v1be.io'yu ilk vaka olarak nasıl geliştirdiğimizi inceleyin: tam şema grafiği, alıntılanabilirlik puanlı içerik ve Rich Results Test doğrulaması.",
      },
      hero: {
        ...en.work.caseStudy.hero,
        eyebrow: "Vaka çalışması · İlk vaka",
        title: "v1be.io — önce kendimizde uyguladığımız site.",
        subtitle:
          "Web varlığınızı optimize etmeden önce metodolojiyi kendi platformumuzda kanıtlarız. İşte bunun nasıl göründüğü.",
      },
      breadcrumbLabel: "v1be.io",
      sections: [
        {
          heading: "İhtiyaç",
          body: "v1be.io, yapay zekâ pazarlama ajanı v1be'nin platform ana sayfasıdır. Teknik SEO denetçisinin kaynak kodunu açıp eleştirecek hiçbir şey bulamayacağı, doğru yapılmış GEO'nun canlı bir gösterimi olmalıydı.",
        },
        {
          heading: "Ne geliştirdik",
          body: "Her sayfada tam şema grafiğine sahip static-first Astro geliştirmesi: site genelinde Organization ve WebSite, teklif sayfalarında Service, gerektiği yerde FAQPage ve BreadcrumbList. Hepsi görünür içerikle aynı sözlüklerden beslenir; böylece yapılandırılmış veri asla okuyucunun gördüğünden kopmaz.",
        },
        {
          heading: "GEO altyapısı",
          body: "robots.txt, GPTBot, ClaudeBot, PerplexityBot ve Google-Extended'a bilinçli olarak izin verir. Bir llms.txt uç noktası kanonik sayfaları listeler. Fontlar kendi barındırmamızda, önden yüklenmiş ve alt kümelenmiştir. OG görselleri her zaman çözülür. Her görsel açıklayıcı alt metne, her sayfa tam olarak bir h1'e sahiptir.",
        },
        {
          heading: "Alıntılanabilirlik puanlı içerik",
          body: "Makaleler v1be pipeline ile üretilir ve yayımlanmadan önce alıntılanabilirlik açısından puanlanır — yanıt-öncelikli yapı, temiz başlıklar, yapılandırılmış veri. Böylece ChatGPT, Gemini ve Perplexity okuyabilir, alıntılayabilir ve kaynak gösterebilir. İçerik her zaman taslak olarak gelir ve insan onayıyla yayınlanır.",
        },
        {
          heading: "Kanıt",
          body: "Şema grafiği Google Rich Results Test'te temiz şekilde doğrulanır. Site, v1be studio'nun müşteriler için geliştirdiği her şeyin referans uygulamasıdır — ilk vaka ve dürüst tuttuğumuz uygulama.",
        },
      ],
      cta: {
        title: "Bunu markanız için ister misiniz?",
        subtitle: "Yapay zekâ motorlarının sizi bugün nasıl gördüğünü göstererek başlayalım.",
        button: "Ücretsiz audit’inizi alın",
        secondary: "Paketleri inceleyin",
      },
    },
  },
  about: {
    ...en.about,
    meta: {
      title: "Hakkımızda — v1be'nin stüdyo kolu | v1be studio",
      description:
        "v1be studio, v1be'nin web tasarım ve geliştirme koludur. Yapay zekâ arama motorlarınca alıntılanmak üzere hızlı ve yapılandırılmış siteler üretiriz.",
    },
    hero: { ...en.about.hero, eyebrow: "Hakkımızda", title: "v1be'nin stüdyo kolu." },
    canonical:
      "v1be studio, v1be'nin web tasarım ve geliştirme koludur. ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarının okuyup anlayacağı ve kaynak göstereceği, SEO ve GEO odaklı içerikleri yerleşik hızlı ve yapılandırılmış web siteleri üretiriz.",
    body: [
      {
        heading: "Biz kimiz",
        text: "v1be studio, v1be'nin ürünleştirilmiş hizmet koludur. v1be platformu yapay zekâ pazarlama ajanıyken, stüdyo bu ajanın üzerinde çalıştığı web varlığını tasarlayan, geliştiren ve optimize eden ekip olarak aynı metodoloji ve araçları hizmet biçiminde sunar.",
      },
      {
        heading: "v1be ile ilişkimiz",
        text: "v1be studio, yapay zekâ pazarlama ajanı platformu v1be'nin hizmet koludur. Stüdyo, aynı metodoloji ve araçları kullanarak web varlığınızı geliştirir ve optimize eder. Otorite ana v1be.io alan adında yoğunlaşır; stüdyo ise onu besleyen siteleri ve alıntılanabilir içeriği üretir.",
      },
      {
        heading: "İnandığımız şey",
        text: "Yapay zekâ arama motorları artık müşterilerinizin Google'a yazdığı soruları yanıtlıyor. Bir site yalnızca tarayıcı tarafından indekslenmek için değil, bu motorlar tarafından okunmak, anlaşılmak ve alıntılanmak için tasarlanmalıdır. GEO budur; gönderdiğimiz her site bunun için inşa edilir.",
      },
      {
        heading: "Kanıt standardı",
        text: "Bu site, sattığı metodolojinin kanıtıdır: tam şema grafiği, llms.txt, bilinçli tarayıcı erişimi ve yapılandırılmış verisinden asla kopmayan içerik. Gönderdiğimiz her site lansmandan önce Google Rich Results Test'te doğrulanır.",
      },
    ],
    cta: {
      ...en.about.cta,
      title: "Yapay zekâ motorlarının sizi nasıl gördüğünü görün.",
      subtitle: "Her iş ücretsiz denetimle başlar.",
      button: "Ücretsiz audit’inizi alın",
    },
  },
  contact: {
    ...en.contact,
    breadcrumbLabel: "İletişim",
    meta: {
      title: "Ücretsiz denetim alın | v1be studio",
      description:
        "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü ve ilk neyi düzelteceğimizi gösterelim.",
    },
    hero: {
      title: "Ücretsiz audit’inizi alın",
      promise:
        "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü — neyi alıntıladığını, neyi kaçırdığını ve ilk neyi düzelteceğimizi — gösterelim. Sunum yok, laf kalabalığı yok; çalışma oturumu var.",
    },
    form: {
      ...en.contact.form,
      nameLabel: "Adınız",
      namePlaceholder: "Ada Lovelace",
      emailLabel: "E-posta",
      emailPlaceholder: "siz@marka.com",
      websiteLabel: "Web sitesi URL'si",
      websitePlaceholder: "https://markanız.com",
      messageLabel: "Bilmemiz gereken bir şey var mı?",
      messagePlaceholder: "Şu an neredesiniz ve markanızı nereye taşımak istiyorsunuz?",
      submit: "Ücretsiz denetimimi iste",
      submitting: "Gönderiliyor…",
      successTitle: "Aldık — yakında konuşuruz.",
      successBody:
        "İletişime geçtiğiniz için teşekkürler. Gerçek bir kişi size doğrudan, genellikle bir iş günü içinde dönecek.",
      errorGeneric: "Bir şeyler ters gitti. Lütfen doğrudan e-posta gönderin; buradan devam edelim.",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
      mailtoIntro: "E-postayı mı tercih ediyorsunuz? Doğrudan şuradan ulaşın:",
      reassurance: "Her mesajı bir insan okur. Bilgilerinizi asla paylaşmayız.",
      mailtoSubject: "Ücretsiz denetim talebi",
      mailtoName: "Ad",
      mailtoEmail: "E-posta",
      mailtoWebsite: "Web sitesi",
    },
    faq: {
      title: "Sık sorulan sorular",
      items: [
        {
          question: "v1be studio nedir?",
          answer:
            "v1be studio, v1be'nin web tasarım ve geliştirme koludur. ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarının okuyup anlayacağı ve kaynak göstereceği, SEO ve GEO odaklı içerikleri yerleşik hızlı ve yapılandırılmış web siteleri üretiriz. Gönderdiğimiz her site lansmandan önce Google Rich Results Test'te doğrulanır.",
        },
        {
          question: "GEO nedir ve SEO'dan farkı nedir?",
          answer:
            "GEO (Üretken Motor Optimizasyonu), markanızı ChatGPT, Gemini ve Perplexity'nin yapay zekâ yanıtlarında görünür kılar. SEO sıralanan bağlantıları optimize eder; GEO ise yanıtın içinde kaynak gösterilmeyi hedefler. Örtüştükleri alanlar vardır ama farklı içerik yapılarını ödüllendirirler.",
        },
        {
          question: "Ücretsiz denetim neleri içerir?",
          answer:
            "Yapay zekâ motorlarının markanızı nasıl sunduğunun özeti, sitenizin teknik GEO incelemesi (şema, tarayıcı erişimi, yapı) ve çalışma oturumunda teslim edilen öncelikli düzeltme listesi.",
        },
        {
          question: "Bu ne kadar tutar?",
          answer:
            "Denetim ücretsizdir. Ücretli paketler, mevcut durumunuzu gördükten sonra kapsamlandırılır ve fiyatlanır; ihtiyacınız düzeltme, tamamen yeniden geliştirme veya sürekli içerik olmasına göre değişir.",
          cta: { label: "Paketleri inceleyin →", href: "/packages/" },
        },
        {
          question: "Henüz bir web sitem yok — yine de yardımcı olabilir misiniz?",
          answer:
            "Evet. Geliştirmeye geçmeden önce, kategorinizde anahtar kelime ve rakip araştırmasını ve rakiplerin neden o şekilde puan aldığının dökümünü içeren fizibilite çalışmasıyla başlarız.",
        },
        {
          question: "İçeriği otomatik mi yayınlıyorsunuz?",
          answer:
            "Hayır. İçerik v1be pipeline tarafından üretilir, alıntılanabilirlik için puanlanır ve CMS'inize taslak olarak gönderilir. İnsan onayı olmadan hiçbir şey yayına alınmaz.",
        },
        {
          question: "Bu ne kadar sürer?",
          answer:
            "Denetim haftalar değil günler sürer. Tam yeniden geliştirme, kapsama bağlı olarak genellikle 1-2 hafta sürer; devam eden içerik aylık bir düzendedir.",
        },
        {
          question: "v1be studio'nun v1be ile ilişkisi nedir?",
          answer:
            "v1be studio, yapay zekâ pazarlama ajanı platformu v1be'nin hizmet koludur. Stüdyo, aynı metodoloji ve araçları kullanarak web varlığınızı geliştirir ve optimize eder.",
        },
        {
          question: "Bu, sıradan bir web tasarım ajansından nasıl farklı?",
          answer:
            "Çoğu ajans insanlar için tasarlar ve orada durur. Biz aynı ekip olarak, ilk günden Awwwards düzeyinde estetik ile yapay zekâ motoru yapısını birlikte tasarlarız.",
        },
      ],
    },
  },
  notFound: {
    meta: { title: "Sayfa bulunamadı | v1be studio", description: "Aradığınız sayfa mevcut değil." },
    title: "Sayfa bulunamadı",
    body: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    cta: "Ana sayfaya dön",
  },
  footer: {
    ...en.footer,
    taglineLines: [
      { text: "Güzel olmak için tasarlandı.", accent: "Güzel" },
      { text: "Alıntılanmak için geliştirildi.", accent: "Alıntılanmak" },
    ],
    nav: {
      home: "Ana sayfa",
      packages: "Paketler",
      process: "Süreç",
      work: "İşler",
      about: "Hakkımızda",
    },
    cta: "İletişime geçin",
    rights: "Tüm hakları saklıdır",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
  },
  consent: {
    title: "Veriniz, kararınız.",
    text: "Birkaç çerez, hangi sayfaların ziyaretçilere gerçekten yardımcı olduğunu ve reklamlarımızın işe yarayıp yaramadığını görmemizi sağlar. Verilerinizi asla satmayız; reddetseniz de site aynı şekilde çalışır.",
    accept: "Çerezlere izin ver",
    decline: "Hayır, teşekkürler",
    label: "Çerez izni",
    privacy: "Gizlilik",
  },
  promo: {
    minimize: "v1be'yi küçült",
    eyebrow: "v1be'den",
    title: "Görünürlüğü bir büyüme sistemine dönüştürün.",
    text: "v1be, içerik, marka içgörüsü ve yapay zekâ otomasyonunu insan onaylı tek bir platformda bir araya getirir.",
    cta: "v1be'yi keşfedin",
  },
  process: {
    meta: {
      title: "Süreç — ilk sinyalden doğrulanmış lansmana | v1be studio",
      description:
        "Dört aşamalı şeffaf web sitesi süreci: teşhis, tasarım, geliştirme, doğrulama ve ölçüm — üç onay kapısı ve her teslimatta kanıtla.",
    },
    hero: {
      eyebrow: "Süreç",
      title: "İlk sinyalden kanıtlayabileceğiniz bir web sitesine.",
      subtitle:
        "İnsanların ve yapay zekâ motorlarının ne anladığını teşhis eder, ihtiyaçlarına göre tasarlar, sistemi inşa eder ve sonucu doğrularız. Her kritik dönüm noktasında işi siz onaylarsınız.",
      primaryCta: "Ücretsiz audit’inizi alın",
      secondaryCta: "Sürecin nasıl çalıştığını görün ↓",
    },
    overview: {
      label: "Çalışma haritası",
      stageStatus: ["brief", "2 onay kapısı", "önizleme", "kanıt"],
    },
    startingPoint: {
      eyebrow: "Başlamanın iki yolu",
      title: "İki giriş yolu. Tek yönetilen süreç.",
      intro:
        "Sıfırdan başlarken fırsat ve gereksinimlerle yola çıkarız. Halihazırda yayındaysanız, neyin çalıştığını denetler, sürtünmeyi tespit eder ve korunmaya değer değeri koruruz. Buradan itibaren her iki yol da aynı şeffaf süreçten geçer.",
      paths: [
        {
          title: "Sıfırdan başlamak",
          description:
            "Mesajı, deneyimi ve teknik temeli birlikte şekillendirmeden önce hedef kitleyi, fırsatı ve gereksinimleri tanımlarız.",
        },
        {
          title: "Halihazırda yayında olmak",
          description:
            "Herhangi bir şey yeniden inşa edilmeden önce neyin çalıştığını denetler, neyin sürtünme yarattığını belirler ve saklanmaya değer arama otoritesini koruruz.",
        },
      ],
      flow: {
        modelLabel: "Canlı çalışma modeli",
        selectLabel: "Bir başlangıç noktası seçin",
        choiceLabel: "Başlangıç noktası seçin",
        opportunityLabel: "Fırsat",
        evidenceLabel: "Kanıt",
        convergenceTitle: "Tek süreç",
        convergenceStatus: "Ortak yönetim",
        stagesLabel: "Dört aşamalı süreç",
      },
      convergence: "Farklı başlangıç noktaları. Aynı dört aşamalı süreç.",
    },
    designReviewLabel: "İnceleyecekleriniz:",
    steps: [
      {
        id: "diagnose",
        number: "01",
        label: "Teşhis",
        title: "Sitenin neyi çözmesi gerektiğini teşhis edin.",
        intro:
          "Tasarım başlamadan önce, hedef kitlenizin ihtiyaçları, web sitenizin ilettikleri ile arama ve yapay zekâ motorlarının anlayabildikleri arasındaki boşluğu buluruz.",
        description:
          "Önce mevcut durumu netleştiririz: insanların ne anladığı, neyin sürtünme yarattığı ve markanızın arama ile yapay zekâ tarafından üretilen yanıtlarda nerede göründüğü — ya da kaybolduğu. Sıfırdan başlarken, görünürlük denetiminin yerini fırsat ve gereksinim incelemesi alır.",
        sections: [
          {
            title: "Neleri inceliyoruz",
            body: "",
            items: [
              "Hedef kitleniz, teklifiniz ve birincil dönüşüm hedefiniz",
              "Mesaj netliği ve mevcut kullanıcı yolculuğundaki boşluklar",
              "Arama yapısı, tarayıcı erişimi ve yapay zekâ görünürlüğü",
              "Mevcut içerik, rotalar ve korunmaya değer arama otoritesi",
            ],
          },
          {
            title: "Neler getiriyorsunuz",
            body: "",
            items: [
              "Alan adınız veya proje fikriniz",
              "İş hedefleriniz ve öncelikli hedef kitleleriniz",
              "Mevcut marka, içerik ve analitik materyalleriniz",
              "Erkenden bilmemiz gereken kararlar veya kısıtlamalar",
            ],
          },
          {
            title: "Neler teslim alıyorsunuz",
            body: "",
            items: [
              "Temel bir görünürlük anlık görüntüsü",
              "Önceliklendirilmiş bir fırsat ve risk haritası",
              "Varsayımları kararlarla değiştiren üzerinde anlaşılmış bir proje brief'i",
            ],
          },
        ],
        gates: [],
        outcome: "Cevabı tasarlamadan önce problem üzerinde anlaşırız.",
        artifact: {
          label: "Temel anlık görüntü",
          status: "Canlı çıktı",
          metrics: [
            { label: "Mesaj netliği", value: "İnceleme" },
            { label: "AI görünürlüğü", value: "Temel seviye" },
            { label: "Teknik risk", value: "Haritalandı" },
          ],
          rows: [],
          checks: [],
          calloutLabel: "Aşama çıktısı",
          callout: "Temel anlık görüntü · Öncelik haritası · Onaylanmış brief",
        },
      },
      {
        id: "design",
        number: "02",
        label: "Tasarım",
        title: "Önce mantığı, sonra görünümü tasarlayın.",
        intro:
          "Onaylanan brief önce bir içerik yapısına, ardından görsel bir deneyime dönüşür. Arayüzü şekillendirmeden önce her sayfanın ne iletmesi ve her yolculuğun neyi mümkün kılması gerektiğine karar veririz.",
        description: "",
        sections: [
          {
            title: "İçerik ve yapı",
            body:
              "Site haritasını, sayfa amaçlarını, mesaj hiyerarşisini, UX metinlerini ve birincil kullanıcı yolculuklarını şekillendiririz. SEO ve GEO içerik yapısının içine planlanır — sayfalar tasarlandıktan sonra eklenmez.",
            items: [
              "Site haritası ve sayfa öncelikleri",
              "Temel mesajlar ve UX metin yazarlığı",
              "Dönüşüm yolları ve eylem çağrıları",
              "Arama niyeti, varlıklar ve alıntıya hazır içerik yapısı",
            ],
          },
          {
            title: "Deneyim ve görsel yön",
            body:
              "Mantık onaylandıktan sonra, bunu kilit sayfa tel kafeslerine ve ödül düzeyinde bir arayüz sistemine dönüştürürüz. Düzen, hiyerarşi, duyarlı davranış ve etkileşim yönü ayrı masaüstü ekranlar olarak değil, tek bir deneyim olarak tasarlanır.",
            items: [
              "Kilit sayfa tel kafesleri",
              "Görsel yön ve UI sistemi",
              "Duyarlı düzen davranışı",
              "Etkileşim ve hareket yönü",
            ],
          },
          {
            title: "Neler teslim alıyorsunuz",
            body: "",
            items: [
              "Onaylanmış bir site haritası ve içerik hiyerarşisi",
              "Temel sayfa metinleri ve UX yazarlık yönü",
              "Kilit sayfa tel kafesleri",
              "Duyarlı UI yönü ve bileşen davranışı notları",
            ],
          },
        ],
        gates: [
          {
            label: "Onay Kapısı 01 · İçerik ve Yapı",
            description:
              "Görsel tasarım ilerlemeden önce sitenin ne söylediğini, nasıl organize edildiğini ve her yolculuğun nereye varması gerektiğini onaylayın.",
            afterSection: 0,
          },
          {
            label: "Onay Kapısı 02 · Deneyim ve Görsel",
            description:
              "Geliştirme başlamadan önce deneyimin nasıl çalıştığını ve nasıl hissettirdiğini onaylayın.",
            afterSection: 1,
          },
        ],
        outcome: "Geliştirme varsayımlarla değil, onaylanmış kararlarla başlar.",
        artifact: {
          label: "Tel kafes / UI yönü",
          status: "2 onay kapısı",
          metrics: [],
          rows: [],
          checks: [
            "İçerik hiyerarşisi onaylandı",
            "Birincil yolculuklar haritalandı",
            "Duyarlı yön görünür",
            "Etkileşim davranışı kararlaştırıldı",
          ],
          calloutLabel: "Tasarım devri",
          callout: "Önce mantık. Sonra görsel yön. Onaydan sonra geliştirme.",
        },
      },
      {
        id: "build",
        number: "03",
        label: "Geliştirme",
        title: "Onaylanan deneyimi bir sistem olarak inşa edin.",
        intro:
          "Onaylanan içeriği, arayüzü ve davranışı, tek bir sürdürülebilir sistem olarak çalışan hızlı ve erişilebilir bir web sitesine dönüştürürüz. Geliştirme süreci tasarımı kapalı kapılar ardında yeniden yorumlamaz — onaylanan her kararı gerçek ve incelenebilir kılar.",
        description: "",
        sections: [
          {
            title: "Deneyim gerçeğe dönüşür",
            body:
              "Onaylanan tasarımlara göre duyarlı bileşenler, navigasyon, formlar ve etkileşimler geliştiririz. Gerçek içeriğin, gerçek kırılma noktalarının ve gerçek tarayıcı davranışının lansmandan önce incelenebileceği canlı bir önizlemede çalışmayı gözden geçirirsiniz.",
            items: [],
          },
          {
            title: "SEO ve GEO yerleşik olarak gelir",
            body:
              "Semantik HTML, sayfa meta verileri, yapılandırılmış veri, dahili bağlantılar, tarayıcı erişimi, site haritası ve llms.txt ilk günden itibaren mimarinin bir parçasıdır. Web sitesi bittikten sonra bir eklenti olarak eklenmez, arayüzle birlikte uygulanır.",
            items: [],
          },
          {
            title: "Neler inşa ediyoruz",
            body: "",
            items: [
              "Duyarlı, bileşen tabanlı bir Astro web sitesi",
              "Semantik ve erişilebilir sayfa yapısı",
              "Formlar, kararlaştırılan entegrasyonlar ve dönüşüm takibi",
              "Sayfa meta verileri, kanonik URL'ler ve dahili bağlantılar",
              "Şema grafiği, site haritası, robots.txt ve llms.txt",
              "Performans odaklı varlıklar ve etkileşim davranışı",
            ],
          },
          {
            title: "Neleri inceleyebilirsiniz",
            body: "",
            items: [
              "Gerçek rotalarda çalışan bir önizleme",
              "Temel ekran boyutlarında duyarlı davranış",
              "Etkileşimler, formlar ve dönüşüm yolları",
              "Anlaşılan kapsama göre görünür ilerleme",
            ],
          },
        ],
        gates: [],
        outcome: "Onaylanan tasarım artık gerçek, test edilebilir bir web sitesi olarak mevcuttur.",
        artifact: {
          label: "istemci / web sitesi",
          status: "Çalışan önizleme",
          metrics: [],
          rows: [
            { label: "src/", value: "bileşenler + rotalar" },
            { label: "public/", value: "üretim varlıkları" },
            { label: "şema grafiği", value: "yapılandırılmış veri" },
            { label: "önizleme", value: "gerçek kırılma noktaları" },
            { label: "takip", value: "anlaşılan olaylar" },
          ],
          checks: [],
          calloutLabel: "İncelenebilir geliştirme",
          callout: "Gerçek içerik. Gerçek tarayıcılar. Statik vaat yok.",
        },
      },
      {
        id: "validate",
        number: "04",
        label: "Doğrulama ve Ölçüm",
        title: "Ürünü doğrulayın. Farkı ölçün.",
        intro:
          "Lansmandan önce, çalışan web sitesini başlangıçta anlaşılan deneyim, teknik ve görünürlük kararlarına göre test ederiz. Ardından orijinal temel seviyeye döner ve aynı kriterleri kullanarak neyin değiştiğini ölçeriz.",
        description: "Kanıt olmadan lansman olmaz.",
        sections: [
          {
            title: "Deneyimi doğrularız",
            body: "",
            items: [
              "Öncelikli cihazlar ve ekran boyutlarında duyarlı davranış",
              "Navigasyon, formlar ve birincil dönüşüm yolları",
              "Klavye erişimi, odak durumları ve temel erişilebilirlik kontrolleri",
              "Nihai rotalarda içerik, meta veriler, bağlantılar ve yönlendirmeler",
            ],
          },
          {
            title: "Teknik temeli doğrularız",
            body:
              "Teknik doğrulama, uygulamanın amaçlandığı gibi çalıştığını kanıtlar. Sıralama veya alıntılanma garantisi üretmez.",
            items: [
              "Core Web Vitals ve sayfa performansı",
              "Google Rich Results Test ve Schema Markup Validator'da yapılandırılmış veri",
              "Site haritası, robots.txt, kanonik URL'ler ve tarayıcı erişimi",
              "Analitik ve kararlaştırılan dönüşüm olayları",
            ],
          },
          {
            title: "Farkı ölçeriz",
            body:
              "Kararlaştırılan arama ve yapay zekâ görünürlük sorgu setini yeniden çalıştırır, başlangıçtaki anlık görüntüyle karşılaştırır ve neyin iyileştiğini, neyin zamana ihtiyacı olduğunu ve bir sonraki adımın ne olması gerektiğini belgeleriz.",
            items: [],
          },
          {
            title: "Neler teslim alıyorsunuz",
            body:
              "Kontrol noktasına kadar yeterli gerçek kullanıcı verisi birikmemişse, bu kısıtlamayı açıkça gösterir ve eksik verileri bir başarı iddiasına dönüştürmeden mevcut doğrulanmış teknik, indeksleme ve sorgu seti sinyallerini raporlarız.",
            items: [
              "Bir lansman kalite kontrol ve doğrulama raporu",
              "Performans, şema ve tarayıcı kanıtları",
              "Önce-sonra görünürlük anlık görüntüsü",
              "Depo, varlıklar ve devir notları",
              "Planlanmış 30 günlük lansman sonrası kontrol noktası",
            ],
          },
        ],
        gates: [
          {
            label: "Onay Kapısı 03 · Geliştirme, Kanıt ve Lansman",
            description:
              "Web sitesi yayına girmeden önce çalışan ürünü ve arkasındaki kanıtı onaylayın.",
            afterSection: 3,
          },
        ],
        outcome: "Lansman bitiş çizgisi değil, temel seviyedir.",
        artifact: {
          label: "Lansman kanıtı",
          status: "Doğrulandı",
          metrics: [
            { label: "Core Web Vitals", value: "Kontrol edildi" },
            { label: "Şema", value: "Doğrulandı" },
            { label: "Tarayıcı erişimi", value: "Açık" },
          ],
          rows: [],
          checks: [
            "Duyarlı ve erişilebilirlik incelemesi",
            "Formlar ve dönüşüm yolları",
            "Önce-sonra anlık görüntüsü",
            "30 günlük kontrol noktası planlandı",
          ],
          calloutLabel: "Lansman kuralı",
          callout: "Kanıt olmadan lansman olmaz.",
        },
      },
    ],
    collaboration: {
      eyebrow: "İş birliği",
      title: "Net kararlar. Daha az toplantı.",
      intro:
        "Her gün bir durum toplantısında vakit geçirmeden projenin nerede durduğunu her zaman bilmelisiniz. İlerlemeyi yazılı olarak görünür tutar ve toplantıları özet geçmek için değil, kararlar almak için kullanırız.",
      rhythm: [
        {
          id: "kickoff",
          title: "Başlangıç ve hizalanma",
          description: "Hedefleri, kapsamı ve karar sahiplerini hizalayın.",
          signal: "60 dk",
        },
        {
          id: "updates",
          title: "Asenkron güncellemeler",
          description: "Haftada iki kez paylaşılan kısa, yazılı ilerleme güncellemeleri.",
          signal: "Haftada 2×",
        },
        {
          id: "review",
          title: "Odaklanmış inceleme",
          description: "Net bir inceleme her onay kapısını kapatır.",
          signal: "30–45 dk",
        },
        {
          id: "feedback",
          title: "Geri bildirim döngüsü",
          description: "Geri bildirimler eyleme geçirilebilir, belgelenmiş ve görünür kalır.",
          signal: "2 iş günü",
        },
        {
          id: "delivery",
          title: "Teslimat uyumu",
          description: "Onaylanan kararlar ivme kaybetmeden teslimata geçer.",
          signal: "İlerlemeye devam",
        },
      ],
      loopLabel: "Sürekli görünürlük. Daha az engel.",
      outcomeLabel: "Sonuç",
      principles: [
        {
          id: "owner",
          text: "Tek bir karar sahibi onayların hesap verebilir kalmasını sağlar",
        },
        {
          id: "visibility",
          text: "Geri bildirimler ve onaylanan kararlar paylaşılan tek bir yerde görünür kalır",
        },
        {
          id: "blockers",
          text: "Kapsam değişiklikleri ve kritik engeller teslimatı etkilemeden önce ortaya çıkar",
        },
      ],
      principlesLabel: "Çalışma prensipleri",
      closing: "İlerleme görünür kalır. Toplantılar faydalı kalır.",
    },
    afterLaunch: {
      eyebrow: "Lansman sonrası",
      title: "Devir tamamlandı. Öğrenme devam ediyor.",
      intro:
        "Lansman geliştirmeyi tamamlar, işe olan erişiminizi değil. Siteden, kanıtlarından ve bir sonraki adımın ne olması gerektiğine dair net bir bakış açısıyla ayrılırsınız.",
      includedTitle: "Her geliştirmeye dahil olanlar",
      included: [
        "Depo, üretime hazır varlıklar ve devir notları",
        "Nihai lansman kanıt paketi",
        "Sizin için inşa ettiğimiz web sitesinin tam mülkiyeti",
        "Orijinal temel seviyeye karşı 30 günlük lansman sonrası kontrol noktası",
        "Mevcut kanıtlara dayalı önceliklendirilmiş bir sonraki fırsatlar seti",
      ],
      growTitle: "Grow ile devam edin",
      growDescription:
        "Öğrenmenin devam etmesini isterseniz Grow, lansman temelini sürekli bir iyileştirme döngüsüne dönüştürür: yeni alıntılanabilir içerikler, öncelikli düzeltmeler ve anlaşılan arama ve yapay zekâ sorgu seti genelinde düzenli görünürlük ölçümü.",
      ownership:
        "Grow isteğe bağlıdır. Web sitesini, kodu veya teslim edilen işi korumak için devam eden bir aboneliğe ihtiyacınız yoktur.",
      boundary:
        "Ölçüm geliştirmeye dahildir. Sürekli optimizasyon ayrı bir çalışmadır.",
    },
    cta: {
      title: "Denetimle başlayın.",
      eyebrow: "Kanıtla başlayın",
      subtitle:
        "Alan adınızı veya proje fikrinizi bize bildirin. İnsanların ve yapay zekâ motorlarının bugün neyi anlayabildiğini, neyi kaçırdığını ve ilk kararın ne olması gerektiğini gösterelim.",
      button: "Ücretsiz audit’inizi alın",
      secondary: "Paketleri inceleyin",
      note: "Bir teklif sunumu değil, kanıt. Tek bir çalışma oturumu, görünür bir temel seviye ve öncelikli bir ilk hamle.",
    },
  },
} as unknown as Dictionary;

export const tr: Dictionary = {
  ...trBase,
  nav: { ...trBase.nav, cta: "Ücretsiz audit’inizi alın" },
  home: {
    ...trBase.home,
    what: { ...trBase.home.what, cta: "Ücretsiz audit’inizi alın" },
    how: { ...trBase.home.how, cta: "Ücretsiz audit’inizi alın" },
    work: {
      ...trBase.home.work,
      openSlot: { ...trBase.home.work.openSlot, cta: "Ücretsiz audit’inizi alın" },
    },
  },
  packages: {
    ...trBase.packages,
    hero: { ...trBase.packages.hero, primaryCta: "Ücretsiz audit’inizi alın" },
    paths: [
      { ...trBase.packages.paths[0], briefCta: "Ücretsiz audit’inizi alın" },
      { ...trBase.packages.paths[1], briefCta: "Ücretsiz audit’inizi alın" },
    ],
  },
  about: {
    ...trBase.about,
    cta: { ...trBase.about.cta, button: "Ücretsiz audit’inizi alın" },
  },
  contact: {
    ...trBase.contact,
    form: { ...trBase.contact.form, submit: "Ücretsiz teklifimi iste" },
  },
  footer: {
    ...trBase.footer,
    taglineLines: [
      { text: "Güzel olmak için tasarlandı.", accent: "Güzel" },
      { text: "Alıntılanabilmek için geliştirildi.", accent: "geliştirildi." },
    ],
  },
  work: {
    ...trBase.work,
    hero: {
      ...trBase.work.hero,
      eyebrow: "Uygulanmış v1be.",
      title: "İnceleyebileceğiniz çalışmalarımız.",
      subtitle:
        "Bir vaat, ancak arkasındaki iş görünür kaldığında anlam taşır. Her vaka için kararları, teslim edilen sistemi ve kanıtı somutlaştırıyoruz.",
      indexLabel: "Yayınlanmış vakalar",
      indexNote:
        "Şu anlık, sadece markalarımızın tasarımdan yayına almaya kadar süreçlerini yönettiğimiz çalışmaları sergileyebiliyoruz. Sergi alanımızda sizin için de bir yer bıraktık, çalışma ve geliştirmelere aynı zamanda devam ediyoruz.",
    },
    featured: {
      ...trBase.work.featured,
      eyebrow: "Öne çıkan çalışma",
      title: "İlk çalışma, v1be.",
      titleBefore: "İlk çalışma, ",
      titleLink: "v1be.",
      note: "",
      servicesLabel: "Bu çalışmaya dahil olanlar",
    },
    cases: [
      {
        ...trBase.work.cases[0],
        tag: "İlk çalışma",
        linkLabel: "Çalışmamızı inceleyin",
        description:
          "Kendi markamız ilk çalışmamız. Şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulamasıyla bunu ilk kendimizde uyguladık ve metodolojimizi oluşturduk.",
        services: ["Strateji ve UX", "Astro geliştirme", "SEO / GEO altyapısı"],
        proof: [
          { label: "Şema grafiği", value: "Yapılandırılmış" },
          { label: "Yapay zekâ crawler erişimi", value: "Açık" },
          { label: "Yayın kanıtı", value: "Doğrulandı" },
        ],
      },
      { ...trBase.work.cases[1], linkLabel: "Çalışmamızı inceleyin" },
    ],
    openSlot: { ...trBase.work.openSlot, cta: "Ücretsiz audit’inizi alın" },
    studioCase: trBase.work.studioCase,
    caseStudy: {
      ...trBase.work.caseStudy,
      cta: { ...trBase.work.caseStudy.cta, button: "Ücretsiz audit’inizi alın" },
    },
  },
};
