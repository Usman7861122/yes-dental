export type Lang = "en" | "es";
export const langs: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

/** Current language for any Astro page or component (from the /es/ URL prefix). */
export function getLang(astro: { currentLocale?: string }): Lang {
  return astro.currentLocale === "es" ? "es" : "en";
}

/** Prefix an internal path with the language ("/services" → "/es/services"). External, tel: and mailto: links pass through. */
export function lp(path: string, lang: Lang): string {
  if (lang === defaultLang || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === "/es" || path.startsWith("/es/") || path.startsWith("/es?") || path.startsWith("/es#")) return path;
  return `/es${path === "/" ? "/" : path}`;
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
