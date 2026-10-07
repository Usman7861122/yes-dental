export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  image: string;
  featured?: boolean; // shown as a photo card on the homepage
  href?: string; // external link (pediatric partner site)
};

// The 10 services Yes Dental offers (order matches the practice's menu).
export const services: Service[] = [
  { slug: "dental-implants", title: "Dental Implants", icon: "crown", featured: true, image: "/images/services/dental-implants.jpg", summary: "Permanent, natural-looking tooth replacement that restores your bite, your smile, and your confidence for years to come." },
  { slug: "dentures", title: "Dentures", icon: "smile", image: "/images/services/dentures.jpg", summary: "Custom-fitted full or partial dentures designed for comfort, function, and a natural appearance you'll be proud to show off." },
  { slug: "crowns", title: "Crowns", icon: "crown", featured: true, image: "/images/services/crowns.jpg", summary: "Durable, tooth-colored crowns that repair damaged or weakened teeth while blending seamlessly with your natural smile." },
  { slug: "gingivitis-treatment", title: "Gingivitis", icon: "shield-check", image: "/images/services/gingivitis-treatment.jpg", summary: "Gentle, effective gum disease treatment to stop inflammation early and protect your long-term oral health." },
  { slug: "orthodontics", title: "Orthodontics", icon: "smile", featured: true, image: "/images/services/orthodontics.jpg", summary: "Straighten your smile with modern options including traditional braces and clear aligners for patients of all ages." },
  { slug: "pediatric-dentistry", title: "Pediatric Dentistry", icon: "heart", featured: true, image: "/images/services/pediatric-dentistry.jpg", href: "https://www.myfirstdentistny.com/", summary: "Friendly, patient-focused dental care designed to keep your child's smile healthy from their very first visit." },
  { slug: "root-canals", title: "Root Canals", icon: "activity", featured: true, image: "/images/services/root-canals.jpg", summary: "Comfortable, expert root canal therapy that relieves pain and saves your natural tooth from extraction." },
  { slug: "sleep-apnea", title: "Sleep Apnea", icon: "sparkles", image: "/images/services/sleep-apnea.jpg", summary: "Custom oral appliances that treat sleep apnea and snoring, helping you and your partner sleep better." },
  { slug: "wisdom-teeth", title: "Wisdom Teeth", icon: "activity", image: "/images/services/wisdom-teeth.jpg", summary: "Safe, professional wisdom teeth extractions performed with care to minimize discomfort and speed up recovery." },
  { slug: "veneers", title: "Veneers", icon: "gem", featured: true, image: "/images/services/veneers.jpg", summary: "Thin, custom-crafted veneers that transform chipped, stained, or uneven teeth into a flawless, confident smile." },
];

/** Link target for a service detail page. */
export const serviceHref = (s: Service) => `/services/${s.slug}`;

/** Order used in the site menu (same as above). */
export const menuServices: Service[] = services;
