import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const errors = [];

function collectIndexFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectIndexFiles(absolute);
    return entry.name === "index.html" ? [absolute] : [];
  });
}

function textContent(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

const indexFiles = collectIndexFiles(DIST);
const homeHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const homeCanonical = homeHtml.match(
  /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
)?.[1];
const siteOrigin = homeCanonical ? new URL(homeCanonical).origin : "";

if (!siteOrigin) errors.push("home page canonical is missing or invalid");

for (const file of indexFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relativeDirectory = path.relative(DIST, path.dirname(file)).replaceAll(path.sep, "/");
  const route = relativeDirectory ? `/${relativeDirectory}/` : "/";
  const label = route;

  const title = textContent(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  const description = textContent(
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] ?? "",
  ).trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;

  if (!title) errors.push(`${label}: missing title`);
  if (!description) errors.push(`${label}: missing meta description`);
  if (description.length > 155) {
    errors.push(`${label}: meta description is ${description.length} characters`);
  }
  if (canonical !== `${siteOrigin}${route}`) {
    errors.push(`${label}: canonical is ${canonical || "missing"}`);
  }
  if (h1Count !== 1) errors.push(`${label}: expected one h1, found ${h1Count}`);
  if (/href=["'][^"']*\?source=/i.test(html)) {
    errors.push(`${label}: internal CTA still uses a source query parameter`);
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    const altMatch = image[0].match(/\balt=["']([^"']*)["']/i);
    if (!altMatch) {
      errors.push(`${label}: image is missing alt text`);
      continue;
    }
    const alt = textContent(altMatch[1]).trim();
    if (!alt) errors.push(`${label}: image alt text is empty`);
    if (alt.length > 100) errors.push(`${label}: image alt text is ${alt.length} characters`);
  }
}

const optimizedImage = path.join(DIST, "images/work/v1be-io/services-hero.webp");
if (!fs.existsSync(optimizedImage)) {
  errors.push("optimized services hero is missing");
} else if (fs.statSync(optimizedImage).size > 100 * 1024) {
  errors.push("optimized services hero exceeds 100 kB");
}
if (fs.existsSync(path.join(DIST, "images/work/v1be-io/services-hero.png"))) {
  errors.push("obsolete oversized services-hero.png is still deployed");
}

const robots = fs.readFileSync(path.join(DIST, "robots.txt"), "utf8");
for (const bot of ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User"]) {
  if (!robots.includes(`User-agent: ${bot}`)) errors.push(`robots.txt does not name ${bot}`);
}

const htaccess = fs.readFileSync(path.join(DIST, ".htaccess"), "utf8");
for (const header of ["Content-Security-Policy", "X-Frame-Options", "X-Content-Type-Options"]) {
  if (!htaccess.includes(`Header always set ${header}`)) errors.push(`.htaccess does not set ${header}`);
}
for (const allowedIntegration of ["googletagmanager.com", "supabase.co", "connect.facebook.net", "snap.licdn.com", "clarity.ms"]) {
  if (!htaccess.includes(allowedIntegration)) {
    errors.push(`Content-Security-Policy does not allow ${allowedIntegration}`);
  }
}
if (!htaccess.includes("form-action 'self' mailto:")) {
  errors.push("Content-Security-Policy blocks the no-JS mailto fallback");
}

if (errors.length > 0) {
  for (const error of errors) console.error(`[built-seo] ${error}`);
  process.exit(1);
}

console.log("[built-seo] canonicals, metadata, headings, CTA URLs, crawler rules, headers and assets pass");
