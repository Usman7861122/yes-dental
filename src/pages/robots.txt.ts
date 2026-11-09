import type { APIRoute } from "astro";

// robots.txt is built from `site` in astro.config.mjs, so the sitemap address always matches the live domain.
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("https://www.yesdentalny.com")).origin;
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap-index.xml`, ""].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
