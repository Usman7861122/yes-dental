// Real patient reviews, copied from the new Yes Dental website.
/** `date` is ISO (YYYY-MM-DD); it is formatted for the page language when shown. */
export type Testimonial = { quote: string; name: string; date?: string; lang?: string };

export const testimonials: Testimonial[] = [
  { quote: "The staff is amazing and had a very good experience with us! The wait is worth it. Super professional, it was a pleasure.", name: "N Del", date: "2026-05-13" },
  { quote: "Went there for a root canal. They saw her right away and set up an appointment for the following day. Next day we were in and out in one hour with the procedure completed. Great place, great service and an excellent staff to help you with all of your needs.", name: "Charles Reason", date: "2026-05-20" },
  { quote: "The receptionists there are amazing, very helpful and kind. The hygienist is very nice and makes you feel comfortable, takes her time with the patient. The whole place was a great experience.", name: "Irving Duarte" },
  { quote: "This place was perfect and I really needed a cleaning, so thank you to everybody there.", name: "Esteban Mercado" },
  { quote: "Cleaned my teeth and all the ladies in there were a big help.", name: "Jose Quinones" },
  { quote: "I had a really good experience here with the dental assistance.", name: "Luis Perez" },
  { quote: "Muy buena atención.", name: "Bianca Gomez", date: "2026-05-18", lang: "es" },
  { quote: "Amazing service.", name: "Sky Marie", date: "2026-05-13" },
];
