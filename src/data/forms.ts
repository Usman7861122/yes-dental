// Patient forms. The files are served from the practice's current website.
// To host them on this site instead, copy the files to /public/forms and change the hrefs below.
const OLD_SITE = "http://54.144.71.2/wp-content/uploads/2026/09";

export const forms = [
  {
    title: "Patient Registration Form",
    language: "English",
    lang: "en",
    description: "Our all-in-one registration form for new patients. Fill it in before your visit to save time at the front desk.",
    href: `${OLD_SITE}/Pt-regist-Form-all-in-one-ENG.doc`,
    format: "Word document (.doc)",
    size: "140 KB",
  },
  {
    title: "Formulario de registro de pacientes",
    language: "Español",
    lang: "es",
    description: "Nuestro formulario de registro para nuevos pacientes. Complételo antes de su cita para ahorrar tiempo en la recepción.",
    href: `${OLD_SITE}/Spanish-Form-All-in-One.docx`,
    format: "Documento de Word (.docx)",
    size: "61 KB",
  },
];
