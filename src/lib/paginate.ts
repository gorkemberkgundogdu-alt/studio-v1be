/**
 * Paginated wheel controller — Home'un TÜM section'ları (Hero, What we do,
 * How we do it, Work, FAQ, Contact) VE Footer için (bkz [data-paginate]
 * işaretli elemanlar — Footer.astro'da yalnızca `paginate` prop'u true iken
 * bu attribute'u alır, bkz BaseLayout.astro `paginateFooter`). Deliberate
 * scroll-jacking: kullanıcı wheel/klavye ile bu "sayfalar" arasında tek tek
 * geçer, tek sürekli dizi olarak — Footer dahil, aralarında native scroll'a
 * ara devir-teslim yok. Footer artık zincirin en son üyesi (index === last);
 * eskiden Contact'tan sonra native scroll'a "release" edilirdi, bu ayrı bir
 * debounce/yön-takip mekanizması gerektiriyordu ve Contact→Footer geçişi
 * kırılgandı. Footer'ı basitçe bir section daha yaparak bu ayrım tamamen
 * kaldırıldı: current === last && aşağı yönlü hareket artık en baştaki
 * current === 0 && yukarı yönlü hareket ile simetrik — ikisi de sadece no-op.
 *
 * Guard'lar (CSS'teki media query ile birebir aynalanır):
 *  - prefers-reduced-motion: reduce  → init edilmez.
 *  - pointer kaba (touch)            → init edilmez.
 *  - viewport < 1024px               → init edilmez.
 * Bu durumların herhangi birinde [data-paginate] elemanlar CSS'te zaten
 * position:static'e döner (global.css'teki media query hiç eşleşmez) — bu
 * dosya çalışmasa da sayfa tamamen normal, native scroll ile okunur kalır.
 *
 * Ayrıca: nav overlay açıkken (Header.astro, <html class="nav-overlay-open">)
 * wheel/keydown handler'ları no-op döner — overlay menüdeyken sayfa altında
 * paginated geçiş tetiklenmesin diye.
 *
 * Perf/doğruluk notları (canlı Puppeteer testiyle bulundu, önceki sürümden):
 *  - Tek gate: yalnızca `animating` (650ms, CSS transition'la birebir).
 *  - syncScroll "auto" kullanır ("instant" DOM spec'inde yok).
 *
 * SEO-safe: yalnızca opacity/transform/pointer-events class'ları toggle
 * edilir; hiçbir içerik DOM'dan kaldırılmaz, view-source'ta her zaman var.
 */
export function initPaginate(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.innerWidth < 1024) return;

  const paginated = Array.from(document.querySelectorAll<HTMLElement>("[data-paginate]"));
  if (paginated.length === 0) return;

  const last = paginated.length - 1;
  let current = 0;
  let animating = false;

  const vh = () => window.innerHeight;
  const syncScroll = (index: number) => {
    window.scrollTo({ top: index * vh(), behavior: "auto" });
  };

  function goTo(index: number, dir: 1 | -1) {
    if (animating || index < 0 || index > last || index === current) return;
    animating = true;
    const outgoing = paginated[current];
    const incoming = paginated[index];

    incoming.classList.add("is-incoming", dir > 0 ? "from-below" : "from-above");
    outgoing.classList.add("is-outgoing", dir > 0 ? "to-above" : "to-below");

    requestAnimationFrame(() => {
      incoming.classList.add("is-active");
      outgoing.classList.remove("is-active");
    });

    window.setTimeout(() => {
      outgoing.classList.remove("is-outgoing", "to-above", "to-below");
      incoming.classList.remove("is-incoming", "from-below", "from-above");
      current = index;
      syncScroll(current);
      animating = false;
    }, 650);
  }

  const canScrollRegion = (region: HTMLElement, dir: 1 | -1) =>
    dir > 0
      ? region.scrollTop + region.clientHeight < region.scrollHeight - 1
      : region.scrollTop > 1;

  window.addEventListener(
    "wheel",
    (e) => {
      if (document.documentElement.classList.contains("nav-overlay-open")) return;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;
      if (!goingDown && !goingUp) return;

      // FAQ gibi viewport'tan uzun paginated adımlarda wheel önce aktif
      // section'ın kendi içeriğini kaydırır. İç scroll sınırına gelince aynı
      // hareket normal section geçişine devam eder.
      const scrollRegion =
        e.target instanceof Element ? e.target.closest<HTMLElement>("[data-paginate-scroll]") : null;
      const direction = goingDown ? 1 : -1;
      if (scrollRegion === paginated[current] && canScrollRegion(scrollRegion, direction)) return;

      // En baştaki/sondaki sınırda no-op — yukarıda/aşağıda başka section yok.
      if ((current === last && goingDown) || (current === 0 && goingUp)) return;

      e.preventDefault();
      if (animating) return;

      if (goingDown) goTo(current + 1, 1);
      else goTo(current - 1, -1);
    },
    { passive: false },
  );

  window.addEventListener("keydown", (e) => {
    if (document.documentElement.classList.contains("nav-overlay-open")) return;
    const down = e.key === "PageDown" || e.key === "ArrowDown";
    const up = e.key === "PageUp" || e.key === "ArrowUp";
    if (!down && !up) return;

    const direction = down ? 1 : -1;
    const active = paginated[current];
    if (active.hasAttribute("data-paginate-scroll") && canScrollRegion(active, direction)) {
      e.preventDefault();
      const distance = e.key.startsWith("Page") ? active.clientHeight * 0.75 : 80;
      active.scrollBy({ top: distance * direction, behavior: "smooth" });
      return;
    }

    if ((current === last && down) || (current === 0 && up)) return;

    e.preventDefault();
    if (animating) return;
    if (down) goTo(current + 1, 1);
    else goTo(current - 1, -1);
  });

  // Footer's "Get in Touch" CTA (data-goto-contact, see Footer.astro) — jumps
  // straight to the Contact section instead of following its href, since
  // that section is position:fixed while the zone is active and a native
  // anchor-scroll can't move a fixed element into view.
  const contactIndex = paginated.findIndex((el) => el.querySelector("#contact-title"));
  if (contactIndex !== -1) {
    const ctaLink = document.querySelector<HTMLAnchorElement>("[data-goto-contact]");
    ctaLink?.addEventListener("click", (e) => {
      e.preventDefault();
      if (animating || contactIndex === current) return;
      goTo(contactIndex, contactIndex > current ? 1 : -1);
    });
  }

  // Arriving via "/#contact-title" (e.g. from another page's footer CTA) —
  // land directly on Contact instead of Hero, no cross-fade needed on load.
  if (contactIndex !== -1 && window.location.hash === "#contact-title") {
    current = contactIndex;
  }
  paginated[current].classList.add("is-active");
  syncScroll(current);
}
