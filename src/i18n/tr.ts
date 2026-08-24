import { en, type Dictionary } from "./en";
import { labTr } from "./lab";

/** Turkish content mirrors the English dictionary so visible copy and schema stay aligned. */
const trBase = {
  ...en,
  lab: labTr,
  meta: {
    siteTitle: "v1be studio — GEO odaklı web tasarım ve geliştirme",
    siteDescription: "v1be studio, ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarınca alıntılanmak üzere tasarlanmış hızlı ve yapılandırılmış web siteleri üretir.",
  },
  a11y: { skipToContent: "İçeriğe geç", mainNav: "Ana navigasyon", footerNav: "Alt bilgi navigasyonu", menuToggle: "Menü", menuClose: "Kapat", languageMenu: "Dil seçimi", breadcrumb: "İçerik yolu", keepScrolling: "Kaydırmaya devam edin", processStages: "Süreç aşamaları", websiteSystemLayers: "Web sitesi sistem katmanları" },
  nav: { packages: "Paketler", process: "Süreç", work: "İşler", about: "Hakkımızda", cta: "Ücretsiz denetim alın" },
  home: {
    ...en.home,
    meta: { title: "v1be studio — yapay zekâ tarafından alıntılanmak üzere tasarlanan siteler", description: "GEO odaklı tasarım, geliştirme ve içerik. Markalar ve ajanslar için ChatGPT, Gemini ve Perplexity'de alıntılanmak üzere tasarlanan siteler." },
    hero: { headline: [{ text: "Ödül düzeyinde", accent: "" }, { text: "tasarım.", accent: "tasarım." }, { text: "Yapay zekâ için", accent: "" }, { text: "yapı.", accent: "yapı." }], mascotName: "v1ben." },
    what: { headingLines: ["Ödül düzeyinde tasarıma sahip,", "temelden yapay zekâ arama motorlarının okuyup", "alıntılayacağı şekilde inşa edilen siteler üretiyoruz."], bold: ["tasarıma", "yapay zekâ", "okuyup", "alıntılayacağı"], cta: "Ücretsiz denetim alın" },
    how: { ...en.home.how, title: "Nasıl çalışıyoruz", steps: [
      { number: "01", title: "Denetim", description: "Sitenizi kendi motorumuzla analiz eder; gerçek yapay zekâ görünürlük skorları, alıntı sayıları ve öncelikli sorun listesi çıkarırız. Henüz siteniz yoksa fizibilite çalışmasıyla başlarız." },
      { number: "02", title: "Düzelt", description: "Denetimin işaret ettiği bozuk yapı, eksik şema ve zayıf içerik gibi sorunları, bunları bulan aynı motorla gideririz." },
      { number: "03", title: "İçerik", description: "Marka sesinizle hazırlanan, alıntılanabilirliği puanlanmış makaleler taslak olarak iletilir; yalnızca sizin onayınızla yayınlanır." },
      { number: "04", title: "Tasarım", description: "Awwwards adaylığı standardında UI/UX. Şablon değil, sonradan düşünülmüş bir katman hiç değil." },
      { number: "05", title: "Geliştir", description: "Tam şema grafiği, llms.txt ve tarayıcı erişimi tasarımla birlikte sunulur; sonradan eklenmez." },
      { number: "06", title: "Ölç", description: "Görünürlük anlık görüntüsünü yeniden alır, önce/sonra farkını gösteririz. Lansman günü GEO'nun bittiği değil, başladığı gündür." },
    ], cta: "Ücretsiz denetim alın", ctaSecondary: "Sürecimizi inceleyin →" },
    work: { ...en.home.work, title: "v1beholics", caseCard: { ...en.home.work.caseCard, description: "Kendi platform sitemiz ilk vakamızdır: şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulaması. Önce kendimizde uygularız.", linkLabel: "Vaka çalışmasını okuyun" }, openSlot: { label: "Bu alan, alıntılanmak isteyen bir marka için ayrıldı.", cta: "Ücretsiz denetim alın" } },
    contact: { title: "v1be'nizi alın", promise: "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü — neyi alıntıladığını, neyi kaçırdığını ve ilk neyi düzelteceğimizi — gösterelim. Sunum yok, laf kalabalığı yok; çalışma oturumu var." },
  },
  packages: {
    ...en.packages,
    paths: [
      { ...en.packages.paths[0], microLabel: "Henüz web siteniz yok", title: "Sıfırdan başlayın", selectorDescription: "Mesajı, deneyimi ve teknik temeli ilk günden birlikte kurun.", briefCta: "Ücretsiz denetim alın", bullets: ["Özel geliştirilmiş, en fazla 5 sayfa", "İlk günden varlık ana sayfası ve temel şema", "Yalnızca yayında değil, alıntılanabilir"] },
      { ...en.packages.paths[1], microLabel: "Sitenizden memnun değilsiniz", title: "Bozuk olanı düzeltin", selectorDescription: "Değer taşıyanı koruyun, sürtünme yaratanı onarın ve mevcut arama otoritesini koruyun.", briefCta: "Ücretsiz denetim alın", bullets: ["Yönlendirme haritası SEO otoritenizi korur", "Yapay zekâ araması için şema ve yapı yeniden kurulur", "Aynı GEO odaklı temel, kayıp zemin yok"] },
    ],
    faq: { title: "Sık sorulan sorular", items: [
      { question: "Lansmandan sonra kodun sahibi olur muyuz?", answer: "Evet. Depoyu ve tam mülkiyeti alırsınız. Kendi sitenizi çalıştırmak için kilitlenme ya da yinelenen lisans ücreti yoktur." },
      { question: "Hangi yolun bana uygun olduğunu nasıl anlarım?", answer: "Yayında bir siteniz yoksa sıfırdan başlayın. Siteniz var ama dönüşüm, sıralama ya da yapay zekâ yanıtlarında görünürlük sağlamıyorsa, bozuk olanı düzeltin." },
      { question: "Projem iki yoldan birine uymuyorsa ne olur?", answer: "Çoğu proje bu iki yoldan birine uyar. Daha fazla sayfa, web uygulaması veya e-ticaret gerekiyorsa bunu özel proje olarak kapsamlandırırız." },
      { question: "Fiyatlara lansman sonrası içerik veya SEO çalışması dahil mi?", answer: "Hayır. Bunlar tek seferlik geliştirmeyi kapsar. Sürekli GEO içerik üretimi için v1be'nin Vibe planı ayrı bir aboneliktir." },
      { question: "Ücretsiz denetim paketin bir parçası mı?", answer: "Hayır. Seçtiğiniz yoldan ya da hiç yol seçmemenizden bağımsız olarak ücretsizdir." },
      { question: "Proje ortasında kapsam büyürse ne olur?", answer: "Başlamadan önce kapsam üzerinde anlaşırız. Bir şey değişirse faturayı değil, sizi önce haberdar ederiz." },
    ] },
    meta: { title: "Paketler — Denetim, Geliştirme ve Büyüme | v1be studio", description: "Üç ürünleştirilmiş GEO teklifi: tek seferlik yapay zekâ görünürlük denetimi, GEO odaklı site geliştirme ve aylık içerik motoru." },
    hero: { eyebrow: "Paketler", title: "Alıntılanmanın üç yolu.", subtitle: "Her iş, üç paketin de giriş noktası olan ücretsiz denetimle başlar." },
    tiers: [
      { name: "Denetim", cadence: "tek seferlik", summary: "Yapay zekâ motorlarının sizi bugün nasıl gördüğünün özeti ve en önemli öncelikli düzeltmeler.", features: ["ChatGPT, Gemini ve Perplexity genelinde yapay zekâ görünürlük özeti", "Teknik GEO denetimi: şema, tarayıcı erişimi, yapı", "Etkisine göre sıralanmış öncelikli düzeltme listesi", "Slayt destesi yerine çalışma oturumunda teslim", "Önce neyi düzelteceğinize dair net resim"], cta: "Ücretsiz denetim alın" },
      { name: "Geliştir", cadence: "proje", summary: "Lansmandan itibaren denetime dayanıklı bir GEO odaklı site: tasarım, Astro geliştirme ve tam altyapı.", features: ["Yapay zekâ okunabilirliği için tasarlanan GEO odaklı tasarım", "Static-first Astro geliştirme, semantik HTML, yanıt-öncelikli yapı", "Tam şema grafiği, llms.txt ve robots altyapısı", "Kendi barındırılan fontlar, görsel disiplini, sıfır CLS düzeni", "Lansman öncesi Google Rich Results Test doğrulaması", "Sitemap, OG görselleri ve tarayıcı erişimi"], cta: "Ücretsiz denetim alın" },
      { name: "Büyüt", cadence: "aylık", summary: "Yayınlanmadan önce puanlanan taslaklar ve sürekli iyileştirmelerle alıntılanabilir kalmanızı sağlayan içerik motoru.", features: ["v1be pipeline tarafından üretilen alıntılanabilirlik puanlı makaleler", "Makaleler CMS'inize taslak olarak iletilir, otomatik yayınlanmaz", "Yayına alınmadan önce insan onayı gerekir", "Sürekli teknik GEO düzeltmeleri ve şema bakımı", "Aylık önce/sonra görünürlük raporu", "ChatGPT, Gemini ve Perplexity genelinde sürekli ölçüm"], cta: "Ücretsiz denetim alın" },
    ], note: "Ücretsiz denetim, her paketin başlangıç noktasıdır.",
  },
  legacyProcess: { ...en.process, meta: { title: "Süreç — v1be studio ile çalışma nasıl ilerler | v1be studio", description: "Bir işin adım adım nasıl ilerlediği: denetim, geliştirme, içerik ve ölçüm." }, hero: { eyebrow: "Süreç", title: "Bir iş nasıl ilerler.", subtitle: "Dört aşama, tek döngü. Yapay zekâ motorlarının sizi nasıl gördüğünü ölçerek başlar, yeniden ölçerek bitiririz." }, steps: [
    { number: "01", title: "Denetim", description: "Yapay zekâ motorlarının markanızı bugün nasıl sunduğunu anlık olarak görür ve teknik GEO incelemesi yaparız: şema, tarayıcı erişimi, yapı. Çalışma oturumunda öncelikli bir düzeltme listesi alırsınız." },
    { number: "02", title: "Geliştir", description: "GEO odaklı tasarlar ve geliştiririz: tam şema grafiği, llms.txt ve tarayıcı erişimi olan statik Astro site. İlk günden denetime hazırdır; lansman öncesi Google Rich Results Test'te doğrulanır." },
    { number: "03", title: "İçerik", description: "Marka sesinizde, v1be pipeline tarafından üretilen ve alıntılanabilirliği puanlanan makaleler. Hepsi CMS'inize taslak olarak aktarılır; yalnızca onayınızla yayınlanır." },
    { number: "04", title: "Ölç", description: "Görünürlük özetini yeniden çalıştırır; ChatGPT, Gemini ve Perplexity genelinde önce/sonra farkını gösteririz. Lansman günü GEO'nun bittiği değil, başladığı gündür." },
  ], cta: { title: "Denetimle başlayın.", subtitle: "Alan adınızı gönderin; bugün nerede olduğunuzu gösterelim.", button: "Ücretsiz denetim alın" } },
  work: { ...en.work, meta: { title: "İşler — vaka çalışmaları | v1be studio", description: "v1be studio vaka çalışmaları: kendi platform sitemiz v1be.io ile başlayan, doğrulanmış GEO uygulamaları." }, hero: { eyebrow: "İşler", title: "Kanıt, önce kendimizden.", subtitle: "Metodolojiyi satmadan önce kendi platformumuzda uygularız. İlk vaka v1be.io." }, cases: [{ ...en.work.cases[0], tag: "İlk vaka", description: "Kendi platform sitemiz ilk vakamızdır: şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulaması. Önce kendimizde uygularız.", linkLabel: "Vaka çalışmasını okuyun" }, { ...en.work.cases[1], tag: "Vaka 002", description: "Kendi hizmet sitemiz; iki dilde rotalar, yerelleştirilmiş şema ve tek bir iletişim yolu üzerinde aynı GEO sistemini uygular.", linkLabel: "Vaka çalışmasını okuyun" }], openSlot: { label: "Bu alan sizin için ayrıldı.", description: "Ücretsiz bir denetimle başlayın. Fırsatı net bir brief’e ve kaynak gösterilmek üzere tasarlanmış bir web sitesine dönüştürelim.", cta: "Ücretsiz denetim alın" }, studioCase: {
      meta: {
        title: "v1be studio web tasarım ve geliştirme vaka çalışması | v1be studio",
        description: "v1be studio'nun keşif ve aksiyon için kendi hizmet sitesini nasıl tasarladığını, geliştirdiğini, test ettiğini ve iyileştirmeye devam ettiğini inceleyin."
      },
      breadcrumbLabel: "v1be studio",
      hero: {
        eyebrow: "VAKA 002 · V1BE STUDIO",
        title: "Kendi sitemizi, web sitelerinin yapılması gerektiğine inandığımız şekilde inşa ettik.",
        titleBefore: "Kendi sitemizi, web sitelerinin yapılması gerektiğine inandığımız şekilde ",
        titleAccent: "inşa ettik.",
        narrative: [
          "v1be studio, sadece güzel görünmekten fazlasını yapmak üzere sıfırdan tasarlandı ve geliştirildi. Güçlü bir ilk izlenim bırakmalı, ne yaptığımızı net bir şekilde açıklamalı, keşfedilebilirliği desteklemeli ve ilgiyi aksiyona dönüştüren net yollar sunmalıydı.",
          "Ardından yayına aldık, test etmeye başladık, geliştirebileceğimiz noktaları keşfettik ve inşa etmeye devam ettik."
        ],
        image: "",
        imageAlt: "Prosedürel karakter ve yüksek kontrastlı tipografi ile canlı v1be studio deneyimi"
      },
      origin: {
        eyebrow: "KÖKEN",
        title: "Bir geliştirme diğerine öncülük etti.",
        narrative: [
          "v1be studio, v1be.io'dan doğdu.",
          "v1be.io'yu inşa etmek, web sitesinin arkasındaki sistemin kendi ürünümüzün ötesinde de faydalı olabileceğini gösterdi: görsel tasarım, geliştirme ve keşfedilebilirliğin arkasındaki teknik temeller birbirine bağlı tek bir süreç olarak ele alınabilirdi.",
          "Bu yaklaşım, v1be studio için bir başlangıç noktası oldu.",
          "İki web sitesi, temeldeki prosedürel maskot sistemi de dahil olmak üzere hâlâ aynı DNA'nın bir kısmını paylaşıyor; ancak farklı amaçlar için tasarlandılar. v1be.io ürünü tanıtır. v1be studio ise neler inşa edebileceğimizi kanıtlamalı, nasıl çalıştığımızı açıklamalı, hizmetlerimizi anlaşılır kılmalı ve ilk ziyaretten iş birliğine uzanan bir yol açmalıdır.",
          "Böylece deneyimi birebir kopyalamadan, öğrendiğimiz dersleri ileriye taşıdık. Stüdyo kendi görsel dilini, arayüz kararlarını ve ticari rolünü geliştirdi."
        ],
        map: ["v1be.io", "deneyim / öğrenimler", "tasarım + geliştirme + keşif", "v1be studio"],
        link: "v1be.io'nun nasıl tasarlandığını ve inşa edildiğini görün"
      },
      design: {
        eyebrow: "TASARIM",
        title: "İlk izlenim, sunumun bir parçasını üstlenmek zorundaydı.",
        narrative: [
          "v1be studio'yu keşfeden biri, siteye ulaşmadan önce hakkımızda hiçbir şey bilmiyor olabilir. Sürecimizi, paketlerimizi veya teknik yaklaşımımızı okumadan önce, deneyimin kendisinin tek bir şeyi netleştirmesi gerekiyordu: özgün ve ayırt edici bir web sitesi inşa etmeyi biliyoruz.",
          "Bu vizyon, görsel yönü en başından itibaren şekillendirdi.",
          "Arayüzü koyu ve ölçülü tuttuk, ardından bilinçli bir kontrast unsuru olarak neon yeşili kullandık. Prosedürel maskot Stüdyoya tanınabilir bir görsel imza kazandırırken; tipografi, hareket ve sayfalandırılmış etkileşimler, açılış deneyiminin bilindik ajans kalıplarından toplanmış gibi değil, kasıtlı olarak tasarlandığını hissettirir.",
          "Ancak görsel etki işin yalnızca bir tarafıydı. Sitenin anlaşılır, duyarlı ve kolayca gezinilebilir kalması gerekiyordu. İç sayfalar, içeriğin nefes alması gerektiğinde açılış sayfasının daha dışavurumcu davranışından bilinçli olarak uzaklaşır.",
          "Amaç kendi içinde bir karmaşıklık yaratmak değildi. Deneyimi zorlaştırmadan, akılda kalacak düzeyde güçlü bir karakter oluşturmaktı."
        ],
        visuals: [
          {
            label: "AÇILIŞ DENEYİMİ",
            title: "Bir bakış açısıyla açılan sayfa",
            body: "Açılış deneyimi Stüdyonun görsel kişiliğinin çoğunu taşır: odaklanmış bir palet, prosedürel karakter ve ilk karşılaşmayı belirgin şekilde v1be studio hissettirmek için tasarlanmış etkileşim sistemi.",
            image: "",
            alt: ""
          },
          {
            label: "İŞLER",
            title: "Çalışmalar vaadi açıklamalıdır",
            body: "Güçlü bir ilk izlenim ilgi çekebilir. İşler sistemi ise bunu haklı çıkarmalıdır. Vakalar ne inşa ettiğimizi belgeler; Laboratuvarlar ise yayından sonra neyi test ettiğimizi, öğrendiğimizi ve değiştirdiğimizi giderek daha fazla belgeler.",
            image: "",
            alt: ""
          }
        ]
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
          "Amaç her yeni optimizasyon taktiğinin peşinden koşmak değildi. Arama ve yapay zekâ keşfi gelişmeye devam ettikçe test edilebilecek, ölçülebilecek ve iyileştirilebilecek teknik açıdan sağlam bir temel oluşturmaktı."
        ],
        definition: "Yapay zekâ sistemlerinin bir markaya ve web sitesine ne kadar net erişebildiğini, anlayabildiğini ve temsil edebildiğini iyileştirmek.",
        flow: ["ARAMA + AI", "KEŞİF", "v1be studio", "ANLAMA", "AKSİYON"],
        concepts: [
          ["KEŞFEDİLEBİLİR", "Net rotalar ve makineler tarafından okunabilir keşif yolları."],
          ["ANLAŞILABİLİR", "Marka, hizmetler ve çalışmalar etrafında semantik içerik ve yapılandırılmış ilişkiler."],
          ["TEST EDİLEBİLİR", "Çalıştığını varsaymak yerine lansmandan sonra denetleyebileceğimiz bir altyapı."]
        ]
      },
      conversion: {
        eyebrow: "DÖNÜŞÜM",
        title: "İlginin gidecek bir yere ihtiyacı vardı.",
        narrative: [
          "Birini web sitesine getirmek hiçbir zaman nihai hedef olmadı.",
          "İlk taslaktan itibaren, farklı niyet düzeylerindeki ziyaretçiler için net yollar tasarladık. Teklifi anlamaya hazır biri paketlerimizi inceleyebilir. Zaten bir web sitesi olan ancak onu neyin geride tuttuğundan emin olmayan biri ücretsiz bir denetimle başlayabilir. Ve her ikisinden önce kanıt isteyen biri Çalışmalarımızı gezebilir.",
          "Bu yaklaşım, görsel detaylar tamamlanmadan önce site mimarisini şekillendirdi.",
          "Paketler deneyimi, soyut bir web tasarım ve geliştirme hizmetini başlamanın daha somut yollarına dönüştürür. Çalışmalar, vaadin arkasındaki kanıtı sunar. Denetim ise sürtünmesiz bir ilk diyalog ortamı yaratır.",
          "Birlikte ele alındığında bu yollar, web sitesini dijital bir broşürden fazlası kılmak ve farklı türdeki ziyaretçilere anlamlı bir sonraki adım sunmak için tasarlandı."
        ],
        sources: "ARAMA · AI · LINKEDIN · REFERANS",
        steps: ["ULAŞMA", "v1be studio"],
        destinations: [
          ["İNCELE", "Paketler", "/packages/"],
          ["DOĞRULA", "Çalışmalar", "/work/"],
          ["BAŞLA", "Ücretsiz denetim", "/contact/"]
        ],
        sequence: "KEŞFET → ANLA → DENETLE → HAREKETE GEÇ"
      },
      development: {
        eyebrow: "GELİŞTİRME",
        title: "Deneyimin, ona ayak uydurabilecek bir temele ihtiyacı vardı.",
        narrative: [
          "Görsel sistem dinamizm ve kişilik talep etti. Keşif stratejisi temiz ve erişilebilir içerik istedi. Geliştirme süreci, birini diğeri için feda etmeden her ikisini de desteklemek zorundaydı.",
          "Siteyi hızlı, bileşen odaklı ve tarayıcıya iletilen HTML'e olabildiğince yakın tutmak için TypeScript ve Tailwind ile Astro'yu seçtik. Daha dışavurumcu etkileşimler deneyime değer kattıkları noktalarda yer alırken, alttaki içerik okunabilir ve esnek kalmayı sürdürdü.",
          "Ana sayfa daha yönlendirilmiş, sayfalandırılmış bir deneyim kullanır. İç sayfalar, uzun formatlı içeriğin tanıdık bir okuma modelinden faydalandığı yerel kaydırmaya geçer. Kademeli zenginleştirme (progressive enhancement), etkileşim katmanı yüklenmediğinde dahi temel içeriğin erişilebilir kalmasını sağlar.",
          "Yapay zekâ destekli geliştirme de iş akışının bir parçası oldu; esas olarak uygulamayı, yinelemeyi ve tekrarlayan teknik işleri hızlandırmak için kullanıldı. Bilgi mimarisi, UX kararları, görsel yönlendirme ve nihai değerlendirme insan liderliğinde kaldı.",
          "Amaç daha fazla teknoloji kullanmak değildi. Her seferinde düşünceyi sıfırdan kurmak zorunda kalmadan geliştirmeye devam edebileceğimiz bir temel oluşturmaktı."
        ],
        stack: [
          ["ASTRO", "Statik-öncelikli temel"],
          ["TYPESCRIPT", "Öngörülebilir bileşenler"],
          ["TAILWIND", "Tutarlı arayüz sistemi"],
          ["PROGRESSIVE ENHANCEMENT", "Etkileşimden önce içerik"]
        ],
        annotation: "İNSAN-LİDERLİĞİNDE · AI-HIZLANDIRILMIŞ"
      },
      afterDeploy: {
        eyebrow: "YAYIN SONRASI",
        title: "Yayına almak bize geliştirecek bir zemin verdi.",
        lead: "Yayına aldık. Ardından onu değiştirmek için nedenler bulmaya başladık.",
        narrative: [
          "Site gerçek iletişim çalışmalarımızın bir parçası haline geldiğinde, onu farklı görmeye başladık.",
          "Deneyime potansiyel müşterilerin gözünden bakmak, inşa ederken fark edilmesi zor olan boşlukları açığa çıkardı. Çalışmaların daha fazla kanıt taşıması gerekiyordu. v1be studio'nun kendisi bir Vaka haline gelmeyi hak ediyordu. SEO ve GEO temellerimizin gerçekten beklediğimiz gibi davranıp davranmadığına dair sorular bizi bunları test etmeye yöneltti.",
          "Bu sorular zamanla Laboratuvarlar (Labs) haline geldi.",
          "İyileştirme, önceden planlanmış bir yeniden tasarım değildi. Web sitesini gerçek dünyada kullanmaktan, ondan öğrenmekten ve bu dersleri sisteme geri beslemekten doğdu."
        ],
        loop: ["TASARIM", "KOD", "SEO/GEO", "YAYIN", "GÖZLEM", "İYİLEŞTİRME"]
      },
      lab: {
        eyebrow: "LAB 001 · AI TARANABİLİRLİĞİ",
        intro: "İlk sorulardan biri oldukça basitti: Yapay zekâ keşfi için inşa ediyorsak, yapay zekâ tarayıcıları inşa ettiğimiz içeriğe gerçekten erişebiliyor mu?",
        stages: [
          ["SORU", "Yapay zekâ tarayıcıları, anlamaları için inşa ettiğimiz siteye gerçekten erişebiliyor mu?"],
          ["TEST", "Tarayıcı user-agent'ları, ham HTML ve JavaScript kapalıykenki davranış."],
          ["BULGU", "Site test edilen koşullarda erişilebilirdi; ancak deney JavaScript kapalıyken oluşan bir sayfalandırma sorununu açığa çıkardı."],
          ["DEĞİŞİKLİK", "Sorunu giderdik ve bu denetimi lansman sonrası QA sürecimize ekledik."]
        ],
        result: "ERİŞİLEBİLİR*",
        qualification: "Test edilen istek koşulları altında geçerlidir. Bu sonuç indeksleme, kaynak gösterme veya sıralama garantisi vermez.",
        cta: "Lab 001'i Keşfedin: AI Taranabilirliği"
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
          "Büyüyen bir Vaka + Laboratuvar kanıt sistemi"
        ],
        measuring: [
          "Uzun vadeli organik arama büyümesi",
          "Yapay zekâ görünürlüğü ve alıntıları",
          "Dönüşüm performansı",
          "Farklı edinme kanallarının birbirini nasıl etkilediği",
          "Zaman içindeki ticari etki"
        ],
        note: "Henüz erken aşamadayız; bu nedenle ölçülmesi zaman alan varsayımsal sonuçlar üretmek yerine, var olanı şeffafça göstermeyi tercih ederiz."
      },
      service: {
        eyebrow: "KANITTAN HİZMETE",
        title: "Aynı vizyon sizin web siteniz için de hazır.",
        narrative: [
          "Müşteri web sitelerinde çalışırken de aynı tasarım, geliştirme, keşif ve lansman sonrası düşünce sistemini uyguluyoruz.",
          "Zaten bir web siteniz varsa, başlamanın en kolay yolu onun neleri masada bırakıyor olabileceğini anlamaktır."
        ],
        primary: "Ücretsiz denetim alın",
        secondary: "Paketleri inceleyin"
      }
    }, caseStudy: { ...en.work.caseStudy, meta: { title: "Vaka çalışması: v1be.io — kendi platform sitemiz | v1be studio", description: "v1be.io'yu ilk vaka olarak nasıl geliştirdiğimizi inceleyin: tam şema grafiği, alıntılanabilirlik puanlı içerik ve Rich Results Test doğrulaması." }, hero: { ...en.work.caseStudy.hero, eyebrow: "Vaka çalışması · İlk vaka", title: "v1be.io — önce kendimizde uyguladığımız site.", subtitle: "Web varlığınızı optimize etmeden önce metodolojiyi kendi platformumuzda kanıtlarız. İşte bunun nasıl göründüğü." }, breadcrumbLabel: "v1be.io", sections: [
    { heading: "İhtiyaç", body: "v1be.io, yapay zekâ pazarlama ajanı v1be'nin platform ana sayfasıdır. Teknik SEO denetçisinin kaynak kodunu açıp eleştirecek hiçbir şey bulamayacağı, doğru yapılmış GEO'nun canlı bir gösterimi olmalıydı." },
    { heading: "Ne geliştirdik", body: "Her sayfada tam şema grafiğine sahip static-first Astro geliştirmesi: site genelinde Organization ve WebSite, teklif sayfalarında Service, gerektiği yerde FAQPage ve BreadcrumbList. Hepsi görünür içerikle aynı sözlüklerden beslenir; böylece yapılandırılmış veri asla okuyucunun gördüğünden kopmaz." },
    { heading: "GEO altyapısı", body: "robots.txt, GPTBot, ClaudeBot, PerplexityBot ve Google-Extended'a bilinçli olarak izin verir. Bir llms.txt uç noktası kanonik sayfaları listeler. Fontlar kendi barındırmamızda, önden yüklenmiş ve alt kümelenmiştir. OG görselleri her zaman çözülür. Her görsel açıklayıcı alt metne, her sayfa tam olarak bir h1'e sahiptir." },
    { heading: "Alıntılanabilirlik puanlı içerik", body: "Makaleler v1be pipeline ile üretilir ve yayımlanmadan önce alıntılanabilirlik açısından puanlanır — yanıt-öncelikli yapı, temiz başlıklar, yapılandırılmış veri. Böylece ChatGPT, Gemini ve Perplexity okuyabilir, alıntılayabilir ve kaynak gösterebilir. İçerik her zaman taslak olarak gelir ve insan onayıyla yayınlanır." },
    { heading: "Kanıt", body: "Şema grafiği Google Rich Results Test'te temiz şekilde doğrulanır. Site, v1be studio'nun müşteriler için geliştirdiği her şeyin referans uygulamasıdır — ilk vaka ve dürüst tuttuğumuz uygulama." },
  ], cta: { title: "Bunu markanız için ister misiniz?", subtitle: "Yapay zekâ motorlarının sizi bugün nasıl gördüğünü göstererek başlayalım.", button: "Ücretsiz denetim alın" } } },
  about: { ...en.about, meta: { title: "Hakkımızda — v1be'nin stüdyo kolu | v1be studio", description: "v1be studio, v1be'nin web tasarım ve geliştirme koludur. Yapay zekâ arama motorlarınca alıntılanmak üzere hızlı ve yapılandırılmış siteler üretiriz." }, hero: { ...en.about.hero, eyebrow: "Hakkımızda", title: "v1be'nin stüdyo kolu." }, canonical: "v1be studio, v1be'nin web tasarım ve geliştirme koludur. ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarının okuyup anlayacağı ve kaynak göstereceği, SEO ve GEO odaklı içerikleri yerleşik hızlı ve yapılandırılmış web siteleri üretiriz.", body: [{ heading: "Biz kimiz", text: "v1be studio, v1be'nin ürünleştirilmiş hizmet koludur. v1be platformu yapay zekâ pazarlama ajanıyken, stüdyo bu ajanın üzerinde çalıştığı web varlığını tasarlayan, geliştiren ve optimize eden ekip olarak aynı metodoloji ve araçları hizmet biçiminde sunar." }, { heading: "v1be ile ilişkimiz", text: "v1be studio, yapay zekâ pazarlama ajanı platformu v1be'nin hizmet koludur. Stüdyo, aynı metodoloji ve araçları kullanarak web varlığınızı geliştirir ve optimize eder. Otorite ana v1be.io alan adında yoğunlaşır; stüdyo ise onu besleyen siteleri ve alıntılanabilir içeriği üretir." }, { heading: "İnandığımız şey", text: "Yapay zekâ arama motorları artık müşterilerinizin Google'a yazdığı soruları yanıtlıyor. Bir site yalnızca tarayıcı tarafından indekslenmek için değil, bu motorlar tarafından okunmak, anlaşılmak ve alıntılanmak için tasarlanmalıdır. GEO budur; gönderdiğimiz her site bunun için inşa edilir." }, { heading: "Kanıt standardı", text: "Bu site, sattığı metodolojinin kanıtıdır: tam şema grafiği, llms.txt, bilinçli tarayıcı erişimi ve yapılandırılmış verisinden asla kopmayan içerik. Gönderdiğimiz her site lansmandan önce Google Rich Results Test'te doğrulanır." }], cta: { ...en.about.cta, title: "Yapay zekâ motorlarının sizi nasıl gördüğünü görün.", subtitle: "Her iş ücretsiz denetimle başlar.", button: "Ücretsiz denetim alın" } },
  contact: { ...en.contact, meta: { title: "Ücretsiz denetim alın | v1be studio", description: "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü ve ilk neyi düzelteceğimizi gösterelim." }, hero: { title: "Ücretsiz denetiminizi alın", promise: "Alan adınızı gönderin. Yapay zekâ motorlarının sizi bugün nasıl gördüğünü — neyi alıntıladığını, neyi kaçırdığını ve ilk neyi düzelteceğimizi — gösterelim. Sunum yok, laf kalabalığı yok; çalışma oturumu var." }, form: { ...en.contact.form, nameLabel: "Adınız", namePlaceholder: "Ada Lovelace", emailLabel: "E-posta", emailPlaceholder: "siz@marka.com", websiteLabel: "Web sitesi URL'si", websitePlaceholder: "https://markanız.com", messageLabel: "Bilmemiz gereken bir şey var mı?", messagePlaceholder: "Şu an neredesiniz ve markanızı nereye taşımak istiyorsunuz?", submit: "Ücretsiz denetimimi iste", submitting: "Gönderiliyor…", successTitle: "Aldık — yakında konuşuruz.", successBody: "İletişime geçtiğiniz için teşekkürler. Gerçek bir kişi size doğrudan, genellikle bir iş günü içinde dönecek.", errorGeneric: "Bir şeyler ters gitti. Lütfen doğrudan e-posta gönderin; buradan devam edelim.", invalidEmail: "Lütfen geçerli bir e-posta adresi girin.", mailtoIntro: "E-postayı mı tercih ediyorsunuz? Doğrudan şuradan ulaşın:", reassurance: "Her mesajı bir insan okur. Bilgilerinizi asla paylaşmayız.", mailtoSubject: "Ücretsiz denetim talebi", mailtoName: "Ad", mailtoEmail: "E-posta", mailtoWebsite: "Web sitesi" }, faq: { title: "Sık sorulan sorular", items: [
    { question: "v1be studio nedir?", answer: "v1be studio, v1be'nin web tasarım ve geliştirme koludur. ChatGPT, Gemini ve Perplexity gibi yapay zekâ arama motorlarının okuyup anlayacağı ve kaynak göstereceği, SEO ve GEO odaklı içerikleri yerleşik hızlı ve yapılandırılmış web siteleri üretiriz. Gönderdiğimiz her site lansmandan önce Google Rich Results Test'te doğrulanır." },
    { question: "GEO nedir ve SEO'dan farkı nedir?", answer: "GEO (Üretken Motor Optimizasyonu), markanızı ChatGPT, Gemini ve Perplexity'nin yapay zekâ yanıtlarında görünür kılar. SEO sıralanan bağlantıları optimize eder; GEO ise yanıtın içinde kaynak gösterilmeyi hedefler. Örtüştükleri alanlar vardır ama farklı içerik yapılarını ödüllendirirler." },
    { question: "Ücretsiz denetim neleri içerir?", answer: "Yapay zekâ motorlarının markanızı nasıl sunduğunun özeti, sitenizin teknik GEO incelemesi (şema, tarayıcı erişimi, yapı) ve çalışma oturumunda teslim edilen öncelikli düzeltme listesi." },
    { question: "Bu ne kadar tutar?", answer: "Denetim ücretsizdir. Ücretli paketler, mevcut durumunuzu gördükten sonra kapsamlandırılır ve fiyatlanır; ihtiyacınız düzeltme, tamamen yeniden geliştirme veya sürekli içerik olmasına göre değişir.", cta: { label: "Paketleri inceleyin →", href: "/packages/" } },
    { question: "Henüz bir web sitem yok — yine de yardımcı olabilir misiniz?", answer: "Evet. Geliştirmeye geçmeden önce, kategorinizde anahtar kelime ve rakip araştırmasını ve rakiplerin neden o şekilde puan aldığının dökümünü içeren fizibilite çalışmasıyla başlarız." },
    { question: "İçeriği otomatik mi yayınlıyorsunuz?", answer: "Hayır. İçerik v1be pipeline tarafından üretilir, alıntılanabilirlik için puanlanır ve CMS'inize taslak olarak gönderilir. İnsan onayı olmadan hiçbir şey yayına alınmaz." },
    { question: "Bu ne kadar sürer?", answer: "Denetim haftalar değil günler sürer. Tam yeniden geliştirme, kapsama bağlı olarak genellikle 1-2 hafta sürer; devam eden içerik aylık bir düzendedir." },
    { question: "v1be studio'nun v1be ile ilişkisi nedir?", answer: "v1be studio, yapay zekâ pazarlama ajanı platformu v1be'nin hizmet koludur. Stüdyo, aynı metodoloji ve araçları kullanarak web varlığınızı geliştirir ve optimize eder." },
    { question: "Bu, sıradan bir web tasarım ajansından nasıl farklı?", answer: "Çoğu ajans insanlar için tasarlar ve orada durur. Biz aynı ekip olarak, ilk günden Awwwards düzeyinde estetik ile yapay zekâ motoru yapısını birlikte tasarlarız." },
  ] } },
  notFound: { meta: { title: "Sayfa bulunamadı | v1be studio", description: "Aradığınız sayfa mevcut değil." }, title: "Sayfa bulunamadı", body: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.", cta: "Ana sayfaya dön" },
  footer: { ...en.footer, taglineLines: [{ text: "Güzel olmak için tasarlandı.", accent: "Güzel" }, { text: "Alıntılanmak için geliştirildi.", accent: "Alıntılanmak" }], nav: { home: "Ana sayfa", work: "İşler" }, cta: "İletişime geçin", rights: "Tüm hakları saklıdır", privacy: "Gizlilik Politikası", terms: "Kullanım Koşulları" },
  consent: { title: "Veriniz, kararınız.", text: "Birkaç çerez, hangi sayfaların ziyaretçilere gerçekten yardımcı olduğunu ve reklamlarımızın işe yarayıp yaramadığını görmemizi sağlar. Verilerinizi asla satmayız; reddetseniz de site aynı şekilde çalışır.", accept: "Çerezlere izin ver", decline: "Hayır, teşekkürler", label: "Çerez izni", privacy: "Gizlilik" },
  promo: { minimize: "v1be'yi küçült", eyebrow: "v1be'den", title: "Görünürlüğü bir büyüme sistemine dönüştürün.", text: "v1be, içerik, marka içgörüsü ve yapay zekâ otomasyonunu insan onaylı tek bir platformda bir araya getirir.", cta: "v1be'yi keşfedin" },
  // The current process experience is structured around stable stage IDs.
  // Keep its complete stage model until Turkish stage copy is authored against it.
  process: en.process,
} as unknown as Dictionary;

export const tr: Dictionary = {
  ...trBase,
  nav: { ...trBase.nav, cta: "Ücretsiz teklif alın" },
  home: {
    ...trBase.home,
    what: { ...trBase.home.what, cta: "Ücretsiz teklif alın" },
    how: { ...trBase.home.how, cta: "Ücretsiz teklif alın" },
    work: { ...trBase.home.work, openSlot: { ...trBase.home.work.openSlot, cta: "Ücretsiz teklif alın" } },
  },
  packages: {
    ...trBase.packages,
    hero: { ...trBase.packages.hero, primaryCta: "Ücretsiz teklif alın" },
    paths: [
      { ...trBase.packages.paths[0], briefCta: "Ücretsiz teklif alın" },
      { ...trBase.packages.paths[1], briefCta: "Ücretsiz teklif alın" },
    ],
  },
  about: { ...trBase.about, cta: { ...trBase.about.cta, button: "Ücretsiz teklif alın" } },
  contact: { ...trBase.contact, form: { ...trBase.contact.form, submit: "Ücretsiz teklifimi iste" } },
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
      subtitle: "Bir vaat, ancak arkasındaki iş görünür kaldığında anlam taşır. Her vaka için kararları, teslim edilen sistemi ve kanıtı somutlaştırıyoruz.",
      indexLabel: "Yayınlanmış vakalar",
      indexNote: "Şu anlık, sadece markalarımızın tasarımdan yayına almaya kadar süreçlerini yönettiğimiz çalışmaları sergileyebiliyoruz. Sergi alanımızda sizin için de bir yer bıraktık, çalışma ve geliştirmelere aynı zamanda devam ediyoruz.",
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
        description: "Kendi markamız ilk çalışmamız. Şema grafiği, hazırlık aşamasındaki alıntılanabilirlik puanlı içerik ve Google Rich Results Test doğrulamasıyla bunu ilk kendimizde uyguladık ve metodolojimizi oluşturduk.",
        services: ["Strateji ve UX", "Astro geliştirme", "SEO / GEO altyapısı"],
        proof: [
          { label: "Şema grafiği", value: "Yapılandırılmış" },
          { label: "Yapay zekâ crawler erişimi", value: "Açık" },
          { label: "Yayın kanıtı", value: "Doğrulandı" },
        ],
      },
      { ...trBase.work.cases[1], linkLabel: "Çalışmamızı inceleyin" },
    ],
    openSlot: { ...trBase.work.openSlot, cta: "Ücretsiz teklif alın" },
    studioCase: trBase.work.studioCase,
    caseStudy: { ...trBase.work.caseStudy, cta: { ...trBase.work.caseStudy.cta, button: "Ücretsiz teklif alın" } },
  },
};
