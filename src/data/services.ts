import type { Lang } from "../i18n";
import { lp } from "../i18n";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  image: string;
  alt: string; // describes the card photo
  featured?: boolean; // shown as a photo card on the homepage
  href?: string; // external link (pediatric partner site)
};

// The 10 services Yes Dental offers (order matches the practice's menu).
export const services: Service[] = [
  { slug: "dental-implants", title: "Dental Implants", icon: "crown", featured: true, image: "/images/services/dental-implants.jpg", alt: "Dental model showing an implant with a crown next to a jaw model", summary: "Permanent, natural-looking tooth replacement that restores your bite, your smile, and your confidence for years to come." },
  { slug: "dentures", title: "Dentures", icon: "smile", image: "/images/services/dentures.jpg", alt: "Model of a lower denture on a dental lab stand", summary: "Custom-fitted full or partial dentures designed for comfort, function, and a natural appearance you'll be proud to show off." },
  { slug: "crowns", title: "Crowns", icon: "crown", featured: true, image: "/images/services/crowns.jpg", alt: "Gloved hand holding a dental crown on an implant post", summary: "Durable, tooth-colored crowns that repair damaged or weakened teeth while blending seamlessly with your natural smile." },
  { slug: "gingivitis-treatment", title: "Gingivitis", icon: "shield-check", image: "/images/services/gingivitis-treatment.jpg", alt: "Close-up of a smile showing teeth and gums", summary: "Gentle, effective gum disease treatment to stop inflammation early and protect your long-term oral health." },
  { slug: "orthodontics", title: "Orthodontics", icon: "smile", featured: true, image: "/images/services/orthodontics.jpg", alt: "Two jaw models, one with braces, one without", summary: "Straighten your smile with modern options including traditional braces and clear aligners for patients of all ages." },
  { slug: "pediatric-dentistry", title: "Pediatric Dentistry", icon: "heart", featured: true, image: "/images/services/pediatric-dentistry.jpg", alt: "Dentist caring for a young patient in the treatment chair", href: "https://www.myfirstdentistny.com/", summary: "Friendly, patient-focused dental care designed to keep your child's smile healthy from their very first visit." },
  { slug: "root-canals", title: "Root Canals", icon: "activity", featured: true, image: "/images/services/root-canals.jpg", alt: "Dentist reviewing tooth scans on a light box", summary: "Comfortable, expert root canal therapy that relieves pain and saves your natural tooth from extraction." },
  { slug: "sleep-apnea", title: "Sleep Apnea", icon: "sparkles", image: "/images/services/sleep-apnea.jpg", alt: "Woman sleeping peacefully in bed", summary: "Custom oral appliances that treat sleep apnea and snoring, helping you and your partner sleep better." },
  { slug: "wisdom-teeth", title: "Wisdom Teeth", icon: "activity", image: "/images/services/wisdom-teeth.jpg", alt: "Panoramic dental X-ray showing wisdom teeth", summary: "Safe, professional wisdom teeth extractions performed with care to minimize discomfort and speed up recovery." },
  { slug: "veneers", title: "Veneers", icon: "gem", featured: true, image: "/images/services/veneers.jpg", alt: "Close-up of a bright, even smile", summary: "Thin, custom-crafted veneers that transform chipped, stained, or uneven teeth into a flawless, confident smile." },
];

/** Link target for a service detail page. */
export const serviceHref = (s: Service) => `/services/${s.slug}`;

/** Order used in the site menu (same as above). */
export const menuServices: Service[] = services;

const es: Record<string, { title: string; summary: string; alt: string }> = {
  "dental-implants": { alt: "Modelo dental que muestra un implante con corona junto a un modelo de mandíbula", title: "Implantes dentales", summary: "Reemplazo dental permanente y de aspecto natural que restaura su mordida, su sonrisa y su confianza por muchos años." },
  dentures: { alt: "Modelo de una dentadura inferior sobre un soporte de laboratorio dental", title: "Dentaduras", summary: "Dentaduras completas o parciales hechas a su medida, diseñadas para su comodidad, su función y una apariencia natural que le dará orgullo mostrar." },
  crowns: { alt: "Mano con guante sosteniendo una corona dental sobre un implante", title: "Coronas", summary: "Coronas duraderas del color de sus dientes que reparan dientes dañados o debilitados y se integran con su sonrisa natural." },
  "gingivitis-treatment": { alt: "Primer plano de una sonrisa con dientes y encías", title: "Gingivitis", summary: "Tratamiento suave y eficaz de las encías para detener la inflamación a tiempo y proteger su salud bucal a largo plazo." },
  orthodontics: { alt: "Dos modelos de mandíbula, uno con brackets y otro sin ellos", title: "Ortodoncia", summary: "Alinee su sonrisa con opciones modernas, como brackets tradicionales y alineadores transparentes, para pacientes de todas las edades." },
  "pediatric-dentistry": { alt: "Dentista atendiendo a un paciente joven en el sillón de tratamiento", title: "Odontología pediátrica", summary: "Atención dental amable y centrada en el paciente para mantener sana la sonrisa de su hijo desde su primera visita." },
  "root-canals": { alt: "Dentista revisando radiografías de dientes en un negatoscopio", title: "Tratamientos de conducto", summary: "Tratamiento de conducto cómodo y experto que alivia el dolor y salva su diente natural de la extracción." },
  "sleep-apnea": { alt: "Mujer durmiendo tranquila en la cama", title: "Apnea del sueño", summary: "Aparatos orales a la medida que tratan la apnea del sueño y los ronquidos, para que usted y su pareja duerman mejor." },
  "wisdom-teeth": { alt: "Radiografía dental panorámica que muestra las muelas del juicio", title: "Muelas del juicio", summary: "Extracción segura y profesional de las muelas del juicio, con cuidado para reducir las molestias y acelerar la recuperación." },
  veneers: { alt: "Primer plano de una sonrisa brillante y pareja", title: "Carillas dentales", summary: "Carillas delgadas y hechas a la medida que transforman dientes astillados, manchados o desiguales en una sonrisa perfecta y segura." },
};

/** A service with its title and summary in the given language. */
export const localizeService = (s: Service, lang: Lang): Service =>
  lang === "es" && es[s.slug] ? { ...s, ...es[s.slug] } : s;

export const localizedServices = (lang: Lang) => services.map((s) => localizeService(s, lang));
export const localizedMenuServices = localizedServices;

/** Link target for a service detail page in the given language. */
export const serviceHrefFor = (s: Service, lang: Lang) => lp(`/services/${s.slug}`, lang);
