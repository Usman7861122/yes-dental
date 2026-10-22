import type { Lang } from "../i18n";

const en = [
  { icon: "tooth", title: "Easy to find, easy to book", text: "Visit us at 617 West 181st Street in Manhattan. Call or send a message and we will find a time that suits you." },
  { icon: "tooth", title: "Meet experienced dentists", text: "General care and specialties such as orthodontics, implants and root canals, together in one trusted group." },
  { icon: "tooth", title: "A plan that fits you", text: "We explain every option and every cost in plain words before treatment begins. No pressure, no surprises." },
  { icon: "tooth", title: "Gentle, modern care", text: "Calm, comfortable rooms and modern technology help you feel relaxed from the first minute to the last." },
  { icon: "tooth", title: "A smile for life", text: "Regular check-ups, membership savings and our KIDS DENTAL partners help the whole family stay healthy." },
];

const es = [
  { icon: "tooth", title: "Fácil de encontrar, fácil de reservar", text: "Visítenos en 617 West 181st Street, en Manhattan. Llame o envíenos un mensaje y encontraremos un horario que le convenga." },
  { icon: "tooth", title: "Conozca a dentistas con experiencia", text: "Atención general y especialidades como ortodoncia, implantes y tratamientos de conducto, todo en un grupo de confianza." },
  { icon: "tooth", title: "Un plan que se ajusta a usted", text: "Le explicamos cada opción y cada costo en palabras sencillas antes de comenzar el tratamiento. Sin presión y sin sorpresas." },
  { icon: "tooth", title: "Atención amable y moderna", text: "Consultorios tranquilos y cómodos, con tecnología moderna, para que se sienta relajado desde el primer minuto hasta el último." },
  { icon: "tooth", title: "Una sonrisa para toda la vida", text: "Revisiones regulares, ahorros con la membresía y nuestros aliados de KIDS DENTAL ayudan a toda la familia a mantenerse sana." },
];

export const whyStepsFor = (lang: Lang) => (lang === "es" ? es : en);
export const whySteps = en;
