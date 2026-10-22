import type { ServiceDetail } from "./serviceDetails";

// Información general y clara. Su dentista confirmará los detalles de cada tratamiento en su visita.
export const serviceDetailsEs: Record<string, ServiceDetail> = {
  "dental-implants": {
    headline: "Implantes dentales que se sienten",
    accent: "naturales.",
    metaDescription: "Reemplazo dental permanente y de aspecto natural con implantes dentales en Yes Dental, en Manhattan. Solicite su cita hoy.",
    intro: [
      "Un implante dental reemplaza la raíz de un diente perdido con un pequeño poste de titanio. Luego se coloca encima una corona hecha a su medida, para que el nuevo diente se vea, se sienta y funcione como uno propio.",
      "Los implantes son una forma duradera de restaurar su mordida y su sonrisa. Le ayudan a comer, hablar y reír con confianza, y no hay que quitarlos por la noche.",
    ],
    benefitsTitle: "Por qué los pacientes eligen implantes",
    benefits: [
      { title: "Aspecto natural", text: "Su corona se iguala al color y la forma de sus propios dientes." },
      { title: "Firmes y estables", text: "El poste se une al hueso de la mandíbula, así el diente se mantiene bien sujeto." },
      { title: "Protegen el hueso", text: "Un implante ayuda a mantener sano el hueso donde falta un diente." },
      { title: "Hechos para durar", text: "Con buen cuidado diario y revisiones regulares, los implantes pueden durar muchos años." },
    ],
    stepsTitle: "Qué esperar",
    steps: [
      { title: "Consulta y radiografías", text: "Revisamos sus dientes, encías y hueso, y le explicamos sus opciones y costos en palabras sencillas." },
      { title: "Colocación del implante", text: "El poste se coloca con anestesia local para que usted esté cómodo." },
      { title: "Tiempo de cicatrización", text: "El hueso de la mandíbula y el implante se unen. Su dentista le dirá cuánto tiempo necesita en su caso." },
      { title: "Su nueva corona", text: "Se coloca una corona a su medida, se revisa su comodidad y su mordida, y se pule." },
    ],
    imageAlts: ["Modelo de implante dental que muestra dientes y un poste de implante", "Dentista revisando radiografías dentales", "Consultorio dental moderno y luminoso"],
    faqs: [
      { q: "¿Duele que le pongan un implante?", a: "La zona se adormece, por lo que la mayoría de los pacientes siente presión pero no dolor. Es normal sentir algo de molestia después, y suele controlarse con un analgésico sencillo." },
      { q: "¿Cuánto tiempo toma todo el proceso?", a: "Depende de cómo cicatrice su boca y de si necesita pasos adicionales, como un injerto de hueso. Su dentista le dará un plan claro en la consulta." },
      { q: "¿Soy un buen candidato para un implante?", a: "La mayoría de los adultos con encías sanas y suficiente hueso pueden recibir implantes. Lo examinaremos y le diremos si necesita algún tratamiento antes." },
      { q: "¿Cómo se cuida un implante?", a: "Cepíllese dos veces al día, límpiese entre los dientes y visítenos para revisiones regulares, igual que con sus dientes naturales." },
      { q: "¿Aceptan seguros dentales?", a: "Trabajamos con muchos planes de seguro. Llame al (212) 781-0700 y nuestro equipo verificará qué cubre su plan." },
    ],
  },

  dentures: {
    headline: "Dentaduras hechas para su comodidad y una",
    accent: "sonrisa natural.",
    metaDescription: "Dentaduras completas y parciales a la medida, diseñadas para su comodidad y un aspecto natural, en Yes Dental, en Manhattan.",
    intro: [
      "Las dentaduras reemplazan los dientes que faltan para que usted pueda comer bien, hablar con claridad y sonreír con libertad. Cada juego se hace a la medida de su boca y para verse natural junto a sus propios dientes.",
      "Ofrecemos dentaduras completas cuando faltan todos los dientes y dentaduras parciales cuando aún conserva dientes sanos. Nos tomamos el tiempo necesario para lograr un buen ajuste.",
    ],
    benefitsTitle: "Lo que le dan unas buenas dentaduras",
    benefits: [
      { title: "Un ajuste cómodo", text: "Se hacen a partir de moldes de su boca y se ajustan hasta que se sientan bien." },
      { title: "Comer con más facilidad", text: "Mastique una mayor variedad de alimentos con más confianza." },
      { title: "Un aspecto natural", text: "El color, la forma y el tamaño se eligen para que combinen con su rostro." },
      { title: "Apoyo para su rostro", text: "Reemplazar los dientes que faltan ayuda a que las mejillas y los labios no se vean hundidos." },
    ],
    stepsTitle: "Cómo funciona",
    steps: [
      { title: "Revisión y opciones", text: "Examinamos su boca y conversamos sobre dentaduras completas, parciales u otras opciones." },
      { title: "Moldes", text: "Tomamos moldes cuidadosos para que sus dentaduras se hagan especialmente para usted." },
      { title: "Prueba", text: "Usted prueba la forma y el color antes de que se haga el juego final." },
      { title: "Colocación final", text: "Colocamos y ajustamos sus dentaduras. Las visitas de seguimiento ayudan a que sigan siendo cómodas." },
    ],
    imageAlts: ["Pareja de adultos mayores sonriendo", "Modelo de una dentadura inferior", "Técnico dando los toques finales a una dentadura a mano"],
    faqs: [
      { q: "¿Cuánto tiempo toma acostumbrarse a las dentaduras?", a: "La mayoría de las personas necesita unas semanas. Al principio, hablar y comer pueden sentirse diferentes, y con la práctica se hace más fácil." },
      { q: "¿Puedo dormir con las dentaduras puestas?", a: "Su dentista le aconsejará. A muchas personas se les pide quitárselas por la noche para descansar las encías y mantener sana la boca." },
      { q: "¿Cómo se limpian las dentaduras?", a: "Enjuáguelas después de comer, cepíllelas a diario con un cepillo suave y un limpiador no abrasivo, y manténgalas en agua o en una solución limpiadora durante la noche." },
      { q: "¿Cada cuánto hay que reemplazar o ajustar las dentaduras?", a: "Las encías cambian con el tiempo, por eso recomendamos revisiones regulares. Muchas dentaduras necesitan un reajuste o un reemplazo después de varios años." },
      { q: "¿Una dentadura parcial es una opción para mí?", a: "Si todavía tiene dientes sanos, una dentadura parcial puede llenar los espacios. Le explicaremos qué le conviene más." },
    ],
  },

  crowns: {
    headline: "Coronas que protegen y",
    accent: "restauran.",
    metaDescription: "Coronas duraderas del color de sus dientes que reparan dientes dañados o débiles, en Yes Dental, en Manhattan.",
    intro: [
      "Una corona es una cubierta que protege un diente fracturado, desgastado, con una obturación grande o debilitado. Restaura la forma, la fuerza y la apariencia del diente.",
      "Nuestras coronas son del color de sus dientes, por lo que se integran con su sonrisa natural. Se hacen a la medida de su mordida y se sienten cómodas desde el primer día.",
    ],
    benefitsTitle: "Por qué una corona puede ser lo indicado para usted",
    benefits: [
      { title: "Da fuerza", text: "Una corona mantiene unido un diente débil y lo protege de más daño." },
      { title: "Se integra", text: "El color y la forma se igualan a los de los dientes vecinos." },
      { title: "Larga duración", text: "Con buen cuidado, una corona puede servirle por muchos años." },
      { title: "Salva su diente", text: "Una corona a menudo puede proteger un diente que de otro modo se perdería." },
    ],
    stepsTitle: "Su corona, paso a paso",
    steps: [
      { title: "Examen", text: "Revisamos el diente y tomamos radiografías para planificar el mejor tratamiento." },
      { title: "Preparación del diente", text: "El diente se adormece y se le da forma con suavidad. Tomamos un molde para su corona a la medida." },
      { title: "Corona temporal", text: "Una corona temporal protege su diente mientras se fabrica la definitiva." },
      { title: "Colocación de la corona definitiva", text: "Revisamos el ajuste, el color y la mordida, y luego fijamos su corona." },
    ],
    imageAlts: ["Manos del dentista sosteniendo un modelo de dientes", "Modelo dental que muestra una hilera de dientes de aspecto natural", "Implante dental con una corona"],
    faqs: [
      { q: "¿Cómo sé si necesito una corona?", a: "A menudo se recomienda una corona para un diente fracturado o roto, una obturación grande, o después de un tratamiento de conducto. Su dentista le explicará por qué." },
      { q: "¿Duele que le pongan una corona?", a: "No. El diente se adormece, por lo que debería sentirse cómodo durante el tratamiento. Es común sentir algo de sensibilidad después, que suele pasar." },
      { q: "¿Cuántas visitas toma una corona?", a: "Por lo general, dos visitas: una para preparar el diente y otra para colocar la corona definitiva. Su dentista le confirmará el plan." },
      { q: "¿Cuánto dura una corona?", a: "Muchas coronas duran años. Cepillarse, usar hilo dental y hacerse revisiones regulares ayuda a que duren más." },
      { q: "¿Puedo comer normalmente con una corona?", a: "Sí. Cuando pase el efecto de la anestesia, puede comer como de costumbre. Evite los alimentos muy duros o pegajosos si tiene una corona temporal." },
    ],
  },

  "gingivitis-treatment": {
    headline: "Las encías sanas comienzan con",
    accent: "cuidado temprano.",
    metaDescription: "Tratamiento suave de la gingivitis y la enfermedad de las encías en Yes Dental, en Manhattan. Detenga la inflamación a tiempo y proteja su sonrisa.",
    intro: [
      "La gingivitis es la etapa inicial de la enfermedad de las encías. Las encías pueden verse rojas o hinchadas y sangrar al cepillarse o usar hilo dental. La buena noticia es que, tratada a tiempo, suele poder revertirse.",
      "Nuestro equipo eliminará la placa y el sarro que causan el problema y le mostrará formas sencillas de mantener sanas sus encías en casa.",
    ],
    benefitsTitle: "Por qué tratar la gingivitis ahora",
    benefits: [
      { title: "Evita que empeore", text: "El tratamiento temprano ayuda a prevenir una enfermedad de las encías más grave." },
      { title: "Aliento más fresco", text: "Eliminar la placa y el sarro puede ayudar con el mal aliento." },
      { title: "Encías cómodas", text: "Menos enrojecimiento, hinchazón y sangrado." },
      { title: "Protege sus dientes", text: "Unas encías sanas ayudan a mantener los dientes firmes en su lugar." },
    ],
    stepsTitle: "Lo que hacemos",
    steps: [
      { title: "Revisión de las encías", text: "Examinamos sus encías y medimos los espacios alrededor de los dientes." },
      { title: "Limpieza profesional", text: "Eliminamos con suavidad la placa y el sarro, incluso debajo de la línea de las encías cuando es necesario." },
      { title: "Plan de cuidado en casa", text: "Le mostramos la mejor manera de cepillarse y limpiarse entre los dientes." },
      { title: "Seguimiento", text: "Revisamos de nuevo sus encías para asegurarnos de que estén sanando bien." },
    ],
    imageAlts: ["Cepillo de dientes con pasta dental", "Dentista examinando los dientes y las encías de un paciente", "Primer plano de una revisión dental"],
    faqs: [
      { q: "¿Cuáles son los signos de la gingivitis?", a: "Encías rojas, hinchadas o sensibles, sangrado al cepillarse o usar hilo dental, y mal aliento que no se quita." },
      { q: "¿Puede desaparecer la gingivitis?", a: "Sí. Con una limpieza profesional y buen cuidado diario, la gingivitis a menudo puede revertirse." },
      { q: "¿Qué pasa si no se trata?", a: "Puede convertirse en una enfermedad de las encías más grave, que puede dañar el hueso que sostiene los dientes." },
      { q: "¿El tratamiento es doloroso?", a: "La mayoría de los pacientes siente solo una molestia leve. Avísenos si siente sensibilidad y ajustaremos nuestra forma de trabajar." },
      { q: "¿Cómo puedo evitar que vuelva?", a: "Cepíllese dos veces al día, límpiese entre los dientes a diario y mantenga sus revisiones y limpiezas regulares." },
    ],
  },

  orthodontics: {
    headline: "Dientes más derechos, una versión más",
    accent: "segura de usted.",
    metaDescription: "Brackets tradicionales y alineadores transparentes para niños, adolescentes y adultos en Yes Dental, en Manhattan.",
    intro: [
      "El tratamiento de ortodoncia mueve con suavidad sus dientes a una posición más sana y más atractiva. Los dientes derechos son más fáciles de limpiar y pueden mejorar la forma en que encajan entre sí.",
      "Ofrecemos brackets tradicionales y alineadores transparentes para pacientes de todas las edades, para que usted elija lo que mejor se adapte a su vida.",
    ],
    benefitsTitle: "Sus opciones",
    benefits: [
      { title: "Brackets tradicionales", text: "Confiables, eficaces y adecuados para muchos tipos de alineación dental." },
      { title: "Alineadores transparentes", text: "Férulas casi invisibles que puede quitarse para comer y cepillarse." },
      { title: "Para todas las edades", text: "Tratamiento para niños, adolescentes y adultos." },
      { title: "Una mordida más sana", text: "Una mejor alineación puede facilitar la limpieza de los dientes y ayudar a que trabajen en conjunto." },
    ],
    stepsTitle: "Su camino hacia una nueva sonrisa",
    steps: [
      { title: "Consulta", text: "Examinamos sus dientes y su mordida y conversamos sobre sus metas." },
      { title: "Su plan", text: "Le explicamos la mejor opción, cuánto tiempo puede tomar y cuánto costará." },
      { title: "Tratamiento", text: "Se colocan sus brackets o alineadores, con visitas regulares para revisar el progreso." },
      { title: "Mantener sus resultados", text: "Un retenedor ayuda a que sus dientes se mantengan en su nueva posición." },
    ],
    imageAlts: ["Persona colocándose un alineador transparente", "Modelos de dientes con brackets", "Modelo de ortodoncia de los dientes"],
    faqs: [
      { q: "¿Cuál es la mejor edad para comenzar un tratamiento de ortodoncia?", a: "El tratamiento es posible a casi cualquier edad. En el caso de los niños, una revisión temprana nos ayuda a planificar el momento adecuado." },
      { q: "¿Cuánto tiempo necesitaré brackets o alineadores?", a: "Depende de sus dientes. Muchos tratamientos duran desde varios meses hasta un par de años, y le daremos un estimado." },
      { q: "¿Los alineadores transparentes son para todos?", a: "Funcionan bien para muchos pacientes, pero algunos casos necesitan brackets. Le recomendaremos lo mejor para usted." },
      { q: "¿Duele el tratamiento de ortodoncia?", a: "Puede sentir presión o molestia durante unos días después de una nueva colocación o ajuste. Por lo general pasa rápido." },
      { q: "¿Todavía tengo que usar un retenedor?", a: "Sí. Un retenedor ayuda a mantener sus dientes en su nueva posición después del tratamiento." },
    ],
  },

  "pediatric-dentistry": {
    headline: "Cuidado dental amable para",
    accent: "sonrisas en crecimiento.",
    metaDescription: "Atención dental pediátrica amable para niños, desde su primera visita, con Yes Dental, en Manhattan.",
    intro: [
      "Los hábitos sanos comienzan temprano. Nuestra atención amable y centrada en el paciente ayuda a los niños a sentirse tranquilos y seguros en el dentista, desde su primera visita.",
      "Nos tomamos nuestro tiempo, explicamos las cosas con palabras sencillas y hacemos que cada visita sea lo más positiva posible, para que su hijo aprenda que cuidar sus dientes puede ser fácil.",
    ],
    benefitsTitle: "Una atención con la que su hijo se sentirá bien",
    benefits: [
      { title: "Trato pensado para niños", text: "Palabras amables, un ambiente tranquilo y mucha tranquilidad." },
      { title: "La prevención primero", text: "Limpiezas, revisiones y consejos que ayudan a evitar las caries antes de que aparezcan." },
      { title: "Hábitos sanos", text: "Consejos sencillos de cepillado y alimentación para niños y padres." },
      { title: "Comodidad para la familia", text: "Atención para toda la familia en un mismo lugar de confianza." },
    ],
    stepsTitle: "La primera visita de su hijo",
    steps: [
      { title: "Una cálida bienvenida", text: "Lo saludamos, le mostramos el lugar a su hijo y respondemos sus preguntas." },
      { title: "Una revisión suave", text: "Revisamos dientes, encías y el crecimiento de la mandíbula de forma relajada y paso a paso." },
      { title: "Limpieza y pulido", text: "Una limpieza suave deja los dientes frescos y brillantes." },
      { title: "Consejos para la casa", text: "Compartimos consejos fáciles sobre cepillado, hilo dental y meriendas saludables." },
    ],
    imageAlts: ["Dentista examinando los dientes de un niño", "Dos profesionales dentales atendiendo a un paciente joven", "Niño recibiendo atención dental"],
    faqs: [
      { q: "¿Cuándo debe ver su hijo al dentista por primera vez?", a: "Los expertos sugieren una primera visita alrededor del primer cumpleaños, o cuando aparece el primer diente." },
      { q: "¿Cómo puedo ayudar a que mi hijo esté tranquilo?", a: "Hable de la visita de forma positiva y cuéntenos si tiene alguna preocupación. Iremos al ritmo de su hijo." },
      { q: "¿Cada cuánto deben hacerse revisiones los niños?", a: "Por lo general cada seis meses, aunque su dentista puede sugerir un horario distinto para su hijo." },
      { q: "¿Son seguras las radiografías dentales para los niños?", a: "Las radiografías se usan solo cuando es necesario, con protección cuidadosa, para ayudarnos a ver lo que no se ve a simple vista." },
      { q: "¿Dónde puedo obtener más información sobre el cuidado dental infantil?", a: "Nuestros especialistas pediátricos están afiliados a nuestro grupo en MyFirstDENTISTNY.com, con 3 ubicaciones en NYC." },
    ],
  },

  "root-canals": {
    headline: "Tratamiento de conducto que salva su",
    accent: "diente natural.",
    metaDescription: "Tratamiento de conducto cómodo y experto que alivia el dolor y salva su diente natural, en Yes Dental, en Manhattan.",
    intro: [
      "El tratamiento de conducto trata el interior de un diente cuando el nervio está infectado o dañado. El objetivo es aliviar su dolor y salvar el diente para que no tenga que extraerlo.",
      "El tratamiento de conducto moderno es mucho más cómodo de lo que se cree. La zona se adormece por completo y la mayoría de los pacientes se siente mejor poco después del tratamiento.",
    ],
    benefitsTitle: "¿Por qué salvar el diente?",
    benefits: [
      { title: "Alivia el dolor", text: "Eliminar la infección quita la causa del dolor." },
      { title: "Conserva su diente natural", text: "Su propio diente suele ser la mejor opción para morder y masticar." },
      { title: "Evita que la infección se propague", text: "El tratamiento protege los dientes y las encías de alrededor." },
      { title: "Una sonrisa normal", text: "Una corona encima restaura la fuerza y la apariencia del diente." },
    ],
    stepsTitle: "Qué pasa durante un tratamiento de conducto",
    steps: [
      { title: "Examen y radiografía", text: "Encontramos la causa de su dolor y planificamos el tratamiento." },
      { title: "Anestesia", text: "Adormecemos la zona para que usted esté cómodo." },
      { title: "Limpieza del diente", text: "Se retira el tejido infectado y se limpia y sella el interior del diente." },
      { title: "Protección del diente", text: "Por lo general se coloca una corona para proteger y reforzar el diente." },
    ],
    imageAlts: ["Dentista tratando a un paciente con lámpara de cabeza y lupa", "Dentista conversando con un paciente en un consultorio luminoso", "Dentista revisando radiografías"],
    faqs: [
      { q: "¿Es doloroso un tratamiento de conducto?", a: "El tratamiento en sí no debería doler porque la zona está adormecida. Es común sentir una molestia leve durante unos días después." },
      { q: "¿Cómo sé si necesito un tratamiento de conducto?", a: "Algunas señales son un dolor de muela fuerte, sensibilidad prolongada al calor o al frío, hinchazón o un diente oscurecido. Solo un examen puede confirmarlo." },
      { q: "¿Cuánto tiempo toma?", a: "Muchos tratamientos de conducto se completan en una o dos visitas. Su dentista le explicará qué esperar en el caso de su diente." },
      { q: "¿Necesitaré una corona después?", a: "A menudo, sí. Una corona protege un diente tratado para que no se rompa y ayuda a que dure." },
      { q: "¿Qué pasa si espero?", a: "Un diente infectado rara vez se cura solo y puede empeorar. Llámenos pronto si tiene dolor de muela." },
    ],
  },

  "sleep-apnea": {
    headline: "Un mejor sueño sin los",
    accent: "ronquidos.",
    metaDescription: "Aparatos orales a la medida para la apnea del sueño y los ronquidos en Yes Dental, en Manhattan. Duerma mejor con la ayuda de su dentista.",
    intro: [
      "La apnea del sueño hace que su respiración se detenga o se vuelva superficial mientras duerme. Puede dejarlo cansado durante el día y molestar a su pareja con ronquidos fuertes.",
      "Para muchos pacientes, un aparato oral a la medida es una alternativa cómoda a otros tratamientos. Se usa al dormir y mantiene con suavidad la mandíbula en una posición que ayuda a mantener abiertas las vías respiratorias.",
    ],
    benefitsTitle: "Por qué probar un aparato oral",
    benefits: [
      { title: "Hecho a la medida", text: "Se fabrica a partir de moldes de sus dientes para un ajuste cómodo." },
      { title: "Silencioso y pequeño", text: "Fácil de usar y fácil de llevar de viaje." },
      { title: "Mejor descanso", text: "Menos ronquidos puede significar un mejor sueño para usted y su pareja." },
      { title: "Trabaja con su médico", text: "Podemos trabajar junto con su especialista del sueño." },
    ],
    stepsTitle: "Cómo funciona el tratamiento",
    steps: [
      { title: "Conversación y revisión", text: "Revisamos sus problemas de sueño y su historial de salud. Puede ser necesario un estudio del sueño indicado por su médico." },
      { title: "Moldes", text: "Tomamos moldes de sus dientes para diseñar su aparato." },
      { title: "Colocación", text: "Le colocamos su aparato y le mostramos cómo usarlo y limpiarlo." },
      { title: "Seguimiento", text: "Revisamos su comodidad y su progreso, y hacemos ajustes si es necesario." },
    ],
    imageAlts: ["Pareja durmiendo plácidamente", "Persona descansando cómodamente en la cama", "Persona acostada en una cama suave y cómoda"],
    faqs: [
      { q: "¿Cuáles son los signos de la apnea del sueño?", a: "Ronquidos fuertes, jadeos al dormir, dolores de cabeza por la mañana y mucho cansancio durante el día. Consulte con su médico para obtener un diagnóstico." },
      { q: "¿Necesito primero un estudio del sueño?", a: "A menudo sí. Un diagnóstico de su médico nos ayuda a asegurarnos de que un aparato oral sea la opción correcta para usted." },
      { q: "¿Es cómodo el aparato?", a: "La mayoría de los pacientes se acostumbra en unas semanas. Lo ajustamos para mejorar la comodidad." },
      { q: "¿Puede ayudar solo con los ronquidos?", a: "Sí. Los aparatos orales también se usan para reducir los ronquidos. Revisaremos qué es lo mejor para usted." },
      { q: "¿Cómo se limpia?", a: "Cepíllelo con suavidad cada mañana y guárdelo en su estuche. Le mostraremos la mejor manera de hacerlo." },
    ],
  },

  "wisdom-teeth": {
    headline: "Extracción de muelas del juicio con",
    accent: "cuidado.",
    metaDescription: "Extracción segura y profesional de las muelas del juicio, que reduce las molestias y acelera la recuperación, en Yes Dental, en Manhattan.",
    intro: [
      "Las muelas del juicio son las últimas en salir, por lo general al final de la adolescencia o a los veinte años. Si no hay suficiente espacio, pueden quedar atrapadas, doler o infectarse.",
      "Examinamos sus dientes y radiografías, le explicamos si la extracción es la mejor opción y realizamos las extracciones con cuidado para que esté cómodo y se recupere pronto.",
    ],
    benefitsTitle: "¿Por qué extraer las muelas del juicio?",
    benefits: [
      { title: "Alivia el dolor", text: "Elimina la causa del dolor, la hinchazón o la presión." },
      { title: "Protege los dientes vecinos", text: "Evita el apiñamiento o el daño a los dientes de al lado." },
      { title: "Previene infecciones", text: "Las muelas del juicio que salen solo en parte son difíciles de limpiar y pueden infectarse." },
      { title: "Recuperación más fácil", text: "Instrucciones claras de cuidado ayudan a que sane cómodamente." },
    ],
    stepsTitle: "De la revisión a la recuperación",
    steps: [
      { title: "Radiografía y examen", text: "Vemos la posición de sus muelas del juicio y planificamos el tratamiento." },
      { title: "Tratamiento cómodo", text: "Le adormecemos la zona y conversamos sobre las opciones de comodidad antes de su visita." },
      { title: "Extracción cuidadosa", text: "Extraemos las muelas con suavidad y protegemos la zona de alrededor." },
      { title: "Cuidados posteriores", text: "Recibe instrucciones sencillas y por escrito sobre reposo, alimentos y limpieza." },
    ],
    imageAlts: ["Radiografía dental panorámica que muestra las muelas del juicio", "Asistente dental preparando a un paciente en el sillón de tratamiento", "Paciente sonriente durante una revisión dental"],
    faqs: [
      { q: "¿Hay que extraer todas las muelas del juicio?", a: "No. Si están sanas, en buena posición y son fáciles de limpiar, pueden dejarse y revisarse con regularidad." },
      { q: "¿Es doloroso el procedimiento?", a: "La zona se adormece, por lo que no debería sentir dolor. Es normal tener algo de molestia e hinchazón durante unos días." },
      { q: "¿Cuánto dura la recuperación?", a: "Muchas personas se sienten mejor en unos pocos días, pero la cicatrización toma más tiempo. Le daremos pasos claros de cuidado posterior." },
      { q: "¿Qué puedo comer después?", a: "Alimentos blandos y fríos los primeros días, como yogur, sopa y puré de papas. Evite los pitillos y los alimentos duros o crujientes." },
      { q: "¿Cuándo debo llamarlos después del tratamiento?", a: "Llámenos si tiene dolor intenso, sangrado abundante, fiebre o una hinchazón que empeora después de unos días." },
    ],
  },

  veneers: {
    headline: "Carillas para una",
    accent: "sonrisa impecable.",
    metaDescription: "Carillas hechas a la medida que transforman dientes astillados, manchados o desiguales, en Yes Dental, en Manhattan.",
    intro: [
      "Las carillas son láminas delgadas, hechas a la medida, que cubren la parte frontal de sus dientes. Pueden mejorar el color, la forma, el tamaño y el aspecto de dientes astillados, manchados, desgastados o desiguales.",
      "Cada carilla se diseña para armonizar con su rostro y su sonrisa, de modo que el resultado se vea natural y se sienta cómodo.",
    ],
    benefitsTitle: "Lo que pueden hacer las carillas",
    benefits: [
      { title: "Color más brillante", text: "Cubren manchas que el blanqueamiento no puede quitar." },
      { title: "Forma uniforme", text: "Disimulan astillas, pequeños espacios o bordes desiguales." },
      { title: "Aspecto natural", text: "Los materiales delgados que reflejan la luz se ven como el esmalte real." },
      { title: "Resultados duraderos", text: "Con buen cuidado, las carillas conservan su aspecto por años." },
    ],
    stepsTitle: "La transformación de su sonrisa",
    steps: [
      { title: "Consulta de sonrisa", text: "Conversamos sobre lo que le gustaría cambiar y comprobamos que sus dientes estén sanos." },
      { title: "Planificación", text: "Planificamos la forma y el tono para que su nueva sonrisa le quede bien." },
      { title: "Preparación de sus dientes", text: "Por lo general se retira una capa muy delgada de esmalte y se toman moldes." },
      { title: "Colocación", text: "Sus carillas se revisan, se ajustan y se adhieren en su lugar." },
    ],
    imageAlts: ["Primer plano de una sonrisa brillante y natural", "Primer plano de una sonrisa con dientes blancos", "Mujer mostrando una sonrisa sana"],
    faqs: [
      { q: "¿Las carillas son permanentes?", a: "Las carillas requieren retirar una pequeña cantidad de esmalte, por lo que el tratamiento se considera permanente. Es posible que haya que reemplazarlas después de muchos años." },
      { q: "¿Las carillas se ven falsas?", a: "No, cuando están bien diseñadas. Elegimos un tono y una forma que le queden bien y se vean naturales." },
      { q: "¿Duelen las carillas?", a: "El tratamiento se hace con anestesia si es necesario, por lo que debería sentirse cómodo. Puede haber algo de sensibilidad por un corto tiempo." },
      { q: "¿Cómo cuido mis carillas?", a: "Cepíllese y use hilo dental como de costumbre, evite morder objetos duros y mantenga sus revisiones regulares." },
      { q: "¿Quién no es un buen candidato?", a: "Las carillas pueden no ser lo indicado si tiene enfermedad de las encías o dientes débiles. Trataremos eso primero o le sugeriremos otras opciones." },
    ],
  },
};
