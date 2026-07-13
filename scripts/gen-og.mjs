/**
 * OG image üretici (CLAUDE.md §9.5). 1200×630 markalı placeholder PNG'yi
 * gerçek v1be studio paleti (kırık siyah + krem + lime) ile üretir. Build öncesi çalışır
 * (package.json "build" script). Gerçek asset gelirse public/og-default.png'yi
 * elle koyup bu adımı atlayabilirsin. Asla 404 og:image gönderme.
 *
 * sharp bir DEV bağımlılığıdır (runtime bundle'a girmez).
 * Renkler src/styles/global.css @theme ile birebir aynı (v1be.io paleti).
 */
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../public/og-default.png", import.meta.url));
const W = 1200;
const H = 630;

const BASE = "#121214"; // --color-base
const CREAM = "#fff8e8"; // --color-ink / --color-cream
const ACCENT = "#d1f300"; // --color-accent (lime)

// İnce mimari grid: 80px hücre, gerçek ink (krem) rengiyle çok düşük opaklık.
const CELL = 80;
let gridLines = "";
for (let x = CELL; x < W; x += CELL) {
  gridLines += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${CREAM}" stroke-opacity="0.05" stroke-width="1"/>`;
}
for (let y = CELL; y < H; y += CELL) {
  gridLines += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${CREAM}" stroke-opacity="0.05" stroke-width="1"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BASE}"/>
  ${gridLines}
  <line x1="96" y1="300" x2="180" y2="300" stroke="${ACCENT}" stroke-width="3"/>
  <text x="96" y="360" font-family="Montserrat, Arial, sans-serif" font-size="96" font-weight="800" letter-spacing="-3">
    <tspan fill="${CREAM}">v1be </tspan><tspan fill="${ACCENT}">studio</tspan>
  </text>
  <text x="98" y="430" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="500" fill="${CREAM}" fill-opacity="0.62">
    Websites engineered to be cited — not just indexed.
  </text>
  <text x="98" y="480" font-family="Montserrat, Arial, sans-serif" font-size="26" font-weight="500" fill="${CREAM}" fill-opacity="0.4">
    GEO-first design, development &amp; content.
  </text>
</svg>`;

async function main() {
  await mkdir(fileURLToPath(new URL("../public/", import.meta.url)), {
    recursive: true,
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await writeFile(OUT, png);
  console.log(`[gen-og] wrote public/og-default.png (${W}x${H}, ${png.length} bytes)`);
}

main().catch((err) => {
  console.error("[gen-og] failed:", err);
  process.exit(1);
});
