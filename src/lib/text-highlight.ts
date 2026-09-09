/**
 * Paylaşılan metin-vurgu yardımcıları — Hero (headline/subline) ve Footer
 * (tagline) arasında ortak. Tek kaynak: bu iki fonksiyon aynı mantığı iki
 * yerde ayrı ayrı yazmak yerine buradan import edilir.
 */

/** Bir satırı {text, accent} parçalarına böler — `accent` alt-dizisi lime,
 *  geri kalanı normal renkte render edilsin diye. */
export interface AccentSegment {
  text: string;
  accent: boolean;
}
export function splitAccent(text: string, accent: string): AccentSegment[] {
  if (!accent) return [{ text, accent: false }];
  const idx = text.indexOf(accent);
  if (idx === -1) return [{ text, accent: false }];
  const before = text.slice(0, idx);
  const after = text.slice(idx + accent.length);
  const parts: AccentSegment[] = [];
  if (before) parts.push({ text: before, accent: false });
  parts.push({ text: accent, accent: true });
  if (after) parts.push({ text: after, accent: false });
  return parts;
}

/** Verilen kelimeleri (tam kelime eşleşmesi) kalın render etmek için metni
 *  sıralı {text, bold} parçalarına böler. */
export interface BoldSegment {
  text: string;
  bold: boolean;
}
export function highlightWords(text: string, words: readonly string[]): BoldSegment[] {
  if (words.length === 0) return [{ text, bold: false }];
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(?<=^|\\P{L})(${escaped.join("|")})(?=\\P{L}|$)`, "gu");
  const parts: BoldSegment[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index), bold: false });
    parts.push({ text: m[0], bold: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), bold: false });
  return parts;
}
