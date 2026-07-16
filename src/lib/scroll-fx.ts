/**
 * Animasyon katmanı (CLAUDE.md §11) — SEO-safe, TEK mekanizma: one-time
 * stagger reveal. .js-anim yoksa (JS kapalı / crawler / view-source) HER ŞEY
 * görünür; reduced-motion tümünü kapatır (bkz global.css).
 *
 * Bilerek burada YOK: sürekli scroll-linked transform/opacity (eski
 * depth-scroll translateZ/scale ve mascot parallax'ı), scroll-snap, wheel
 * hijack, fixed positioning, rAF döngüsü. Native document scroll'a hiç
 * dokunulmaz — scrollY normal şekilde artar, mouse/trackpad/klavye/touch
 * scroll davranışı tarayıcının kendi varsayılanı.
 *
 * Mekanizma: her <section> IntersectionObserver ile izlenir (threshold 0.2).
 * Bir section görünüme girdiğinde, içindeki [data-reveal] çocuklarına
 * sırayla (80ms artan, toplamda 400ms'de tavan) --reveal-delay yazılır ve
 * .is-revealed eklenir; section bir daha izlenmez (scroll yukarı çıkınca
 * tekrar oynamaz). `data-reveal-contained` kullanan iç içe section'larda her
 * reveal en yakın section'ı tarafından yönetilir; diğer sayfaların mevcut
 * reveal kapsamı değişmez.
 */
export function initScrollFx(): void {
  const root = document.documentElement;
  if (!root.classList.contains("js-anim")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const STAGGER_MS = 80;
  const MAX_DELAY_MS = 400;

  const sections = document.querySelectorAll<HTMLElement>("section");
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const section = entry.target as HTMLElement;
        const children = section.hasAttribute("data-reveal-contained")
          ? [
              ...(section.matches("[data-reveal]") ? [section] : []),
              ...Array.from(section.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
                (element) => element.closest("section") === section,
              ),
            ]
          : Array.from(section.querySelectorAll<HTMLElement>("[data-reveal]"));
        children.forEach((el, i) => {
          const delay = Math.min(i * STAGGER_MS, MAX_DELAY_MS);
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-revealed");
        });
        obs.unobserve(section);
      }
    },
    { threshold: 0.2 },
  );

  sections.forEach((section) => observer.observe(section));
}
