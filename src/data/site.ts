export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = {
  label: string;
  href?: string; // omitted for items that only open a dropdown
  children?: NavChild[];
  viewAll?: { label: string; href: string };
  wide?: boolean; // wide two-column dropdown
};

/** Every "Request Appointment" button points here. */
export const contactHref = "/contact-us";

export const site = {
  name: "Yes Dental",
  tagline: "Luxury dental care in Manhattan",
  description:
    "Refined, personalised dentistry in Manhattan for the whole family. Gentle care, modern technology and a warm welcome.",
  phone: { display: "(212) 781-0700", tel: "+12127810700" },
  email: "info@yesdental.com",
  address: {
    street: "617 West 181st Street, 2nd Floor",
    city: "New York, NY 10033",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Membership Plan", href: "/#membership" },
    { label: "Insurance", href: "/insurance" },
    { label: "Patient Forms", href: "/patient-forms" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact-us" },
  ] as NavItem[],
  social: [] as { label: string; href: string }[], // TODO: add Yes Dental social links
  kids: { name: "MyFirstDENTISTNY.com", url: "https://www.myfirstdentistny.com/" },
};

export const fullAddress = `${site.address.street}, ${site.address.city}`;
export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`;
