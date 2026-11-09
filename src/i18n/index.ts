export type Lang = "en" | "es";
export const langs: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

/** Current language for any Astro page or component (from the /es/ URL prefix). */
export function getLang(astro: { currentLocale?: string }): Lang {
  return astro.currentLocale === "es" ? "es" : "en";
}

/** Page paths end with "/" (one URL per page). Files ("/robots.txt"), query strings and #anchors are kept. */
function withSlash(path: string): string {
  const m = path.match(/^([^?#]*)(.*)$/)!;
  let p = m[1] || "/";
  if (!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
  return p + m[2];
}

/** Prefix an internal path with the language ("/services" → "/es/services/"). External, tel: and mailto: links pass through. */
export function lp(path: string, lang: Lang): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const isEs = path === "/es" || path.startsWith("/es/") || path.startsWith("/es?") || path.startsWith("/es#");
  if (lang === defaultLang || isEs) return withSlash(path);
  return withSlash(`/es${path === "/" ? "/" : path}`);
}

/** The same page in the other language, from the current URL path. */
export function switchPath(pathname: string, to: Lang): string {
  const bare = pathname === "/es" ? "/" : pathname.replace(/^\/es(?=\/)/, "");
  return lp(bare || "/", to);
}

/** Format an ISO date ("2026-05-13") for the language. */
export function formatDate(iso: string, lang: Lang): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "es" ? "es-US" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
