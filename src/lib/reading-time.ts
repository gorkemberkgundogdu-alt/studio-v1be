export function estimateReadingMinutes(content: readonly string[], wordsPerMinute = 220): number {
  const words = content
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
