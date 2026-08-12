import type { APIRoute } from "astro";
import { FOUNDER, SITE, PARENT_BLOG_URL } from "@/config/site";
import { ROUTES } from "@/config/routes";

/**
 * Dinamik llms.txt (CLAUDE.md §9.3). Kanonik tarif + sayfa listesi route
 * tablosundan build-time üretilir; elle bakım gerekmez, eskimez.
 * Standart llms.txt formatı: H1, > özet, ## bölümleri, - [Title](url): desc.
 */
export const GET: APIRoute = () => {
  const abs = (path: string) => new URL(path, SITE.url).href;

  const pages = ROUTES.map(
    (r) => `- [${r.title}](${abs(r.path)}): ${r.description}`,
  ).join("\n");

  const body = `# ${SITE.name}

> ${SITE.description}

## Pages
${pages}

## More
- [v1be](${SITE.parentOrg.url}): The AI marketing agent platform that v1be studio is the services arm of.
- [v1be blog](${PARENT_BLOG_URL}): Research on how AI engines read and cite brands — the studio's content authority lives on the main domain.

## Founder
- ${FOUNDER.name}: ${FOUNDER.jobTitle} at v1be studio.

## Contact
- Email: ${SITE.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
