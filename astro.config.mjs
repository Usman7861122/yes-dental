// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // The live address. Canonical links, hreflang, share tags, sitemap and robots.txt all use it.
  site: "https://www.yesdentalny.com",
  // One address per page, always with a trailing slash (/services/).
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    react(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      // Leave out the 404 page and the redirect-only pages.
      filter: (page) => !/\/404\/?$/.test(page) && !/\/(contact|appointment)\/?$/.test(page) && !/\/locations\/?$/.test(page) && !/\/terms-conditions\/?$/.test(page) && !/\/services\/gingivitis\/?$/.test(page),
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    "/contact": "/contact-us/",
    "/es/contact": "/es/contact-us/",
    "/appointment": "/contact-us/",
    "/es/appointment": "/es/contact-us/",
    "/locations": "/locations/new-york/",
    "/terms-conditions": "/terms-and-conditions/",
    "/services/gingivitis": "/services/gingivitis-treatment/",
    "/es/services/gingivitis": "/es/services/gingivitis-treatment/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
