import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

// Every photo lives in src/assets/images so Astro can resize it and save it as AVIF and WebP.
const all = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/**/*.{jpg,jpeg,png}", { eager: true });

/** Turn an old public path such as "/images/services/crowns.jpg" into the image file in src/assets. */
export function asset(path: string): ImageMetadata {
  const hit = all[`/src/assets${path}`];
  if (!hit) throw new Error(`Image not found in src/assets: ${path}`);
  return hit.default;
}

export const HERO_WIDTHS = [480, 768, 1080, 1440, 1800];

/** The hero photo in AVIF, WebP and JPG at several widths, ready for <picture> and for a preload link. */
export async function heroSources() {
  const src = asset("/images/hero-smile.jpg");
  const make = async (format: "avif" | "webp" | "jpeg") => {
    const imgs = await Promise.all(HERO_WIDTHS.map((w) => getImage({ src, width: w, format, quality: format === "avif" ? 60 : 72 })));
    return {
      srcset: imgs.map((i, n) => `${i.src} ${HERO_WIDTHS[n]}w`).join(", "),
      fallback: imgs[imgs.length - 1].src,
    };
  };
  const [avif, webp, jpeg] = await Promise.all([make("avif"), make("webp"), make("jpeg")]);
  return { avif, webp, jpeg, width: src.width, height: src.height };
}
