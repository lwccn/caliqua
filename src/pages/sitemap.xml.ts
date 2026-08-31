import type { APIRoute } from "astro";
import { site } from "../data/site";

const paths = [
  "/",
  "/leistungen",
  "/leistungen/heizungstechnik",
  "/leistungen/raumlufttechnik",
  "/leistungen/sanitaer-gas-medien",
  "/leistungen/kaeltetechnik",
  "/kundendienst",
  "/referenzen",
  "/karriere",
  "/karriere/stellenangebote",
  "/karriere/ausbildung",
  "/unternehmen",
  "/unternehmen/historie",
  "/unternehmen/zertifikate",
  "/unternehmen/agb",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export const GET: APIRoute = () => {
  const urls = paths.map((path) => `${site.url}${path === "/" ? "" : path}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`).join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
