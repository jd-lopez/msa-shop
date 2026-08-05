import type { APIRoute } from "astro";

export const prerender = true;

const routes = ["/", "/servicios"];

export const GET: APIRoute = ({ site }) => {
  const urls = site
    ? routes
        .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
        .join("\n")
    : "";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
