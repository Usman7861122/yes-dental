import type { Lang } from "../i18n";
import { lp } from "../i18n";

export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = {
  label: string;
  href?: string; // omitted for items that only open a dropdown
  children?: NavChild[];
  viewAll?: { label: string; href: string };
  wide?: boolean; // wide two-column dropdown
};

/** Every "Request Appointment" button points here (add the language prefix with lp()). */
export const contactHref = "/contact-us";

export const site = {
  name: "Yes Dental",
  phone: { display: "(212) 781-0700", tel: "+12127810700" },
  email: "info@yesdental.com",
  address: {
    street: "617 West 181st Street, 2nd Floor",
    city: "New York, NY 10033",
  },
  social: [] as { label: string; href: string }[], // TODO: add Yes Dental social links
  kids: { name: "MyFirstDENTISTNY.com", url: "https://www.myfirstdentistny.com/" },
};

export const siteCopy = {
  en: {
    tagline: "Luxury dental care in Manhattan",
    description:
      "Refined, personalised dentistry in Manhattan for the whole family. Gentle care, modern technology and a warm welcome.",
  },
  es: {
    tagline: "Cuidado dental de lujo en Manhattan",
    description:
      "Odontología refinada y personalizada en Manhattan para toda la familia. Atención amable, tecnología moderna y una cálida bienvenida.",
  },
} satisfies Record<Lang, { tagline: string; description: string }>;

const navLabels = {
  en: { about: "About", services: "Services", membership: "Membership Plan", insurance: "Insurance", forms: "Patient Forms", testimonials: "Testimonials", contact: "Contact Us" },
  es: { about: "Nosotros", services: "Servicios", membership: "Membresía", insurance: "Seguros", forms: "Formularios", testimonials: "Testimonios", contact: "Contacto" },
};

/** Main navigation in the given language, with language-prefixed links. */
export function navFor(lang: Lang): NavItem[] {
  const l = navLabels[lang];
  return [
    { label: l.about, href: lp("/about", lang) },
    { label: l.services, href: lp("/services", lang) },
    { label: l.membership, href: lp("/#membership", lang) },
    { label: l.insurance, href: lp("/insurance", lang) },
    { label: l.forms, href: lp("/patient-forms", lang) },
    { label: l.testimonials, href: lp("/testimonials", lang) },
    { label: l.contact, href: lp("/contact-us", lang) },
  ];
}

export const fullAddress = `${site.address.street}, ${site.address.city}`;
export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`;
