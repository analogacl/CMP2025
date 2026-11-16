/**
 * Artículos recuperados del blog de Centro Médico Phillips (centromedicophillips.cl),
 * a partir del historial del Internet Archive. El texto se mantiene fiel al original;
 * solo se corrigieron errores de formato (palabras unidas, viñetas) y se ordenaron títulos.
 *
 * Las URLs antiguas que redirigen a cada artículo están en lib/legacy-redirects.mjs.
 *
 * Formato de `body`: párrafos separados por línea en blanco, "## " y "### " para títulos,
 * "- " para listas y "> " para citas.
 */

export type BlogAuthor =
  | { type: "team"; name: string; slug: string; credentials: string }
  | { type: "org"; name: string }

export type BlogSource = { label: string; url?: string }

export type BlogPost = {
  slug: string
  title: string
  /** Título SEO (sin el sufijo "| Optima Salud") */
  seoTitle: string
  description: string
  excerpt: string
  author: BlogAuthor
  /** Fecha de publicación original en el blog anterior */
  datePublished: string
  /** Fecha de la última actualización del contenido en este sitio */
  dateModified: string
  body: string
  sources?: BlogSource[]
  /** Páginas relacionadas del sitio para enlazado interno */
  related: { label: string; href: string }[]
}

const GRACIELA_ROJAS: BlogAuthor = {
  type: "team",
  name: "Dra. Graciela Rojas",
  slug: "dra-graciela-rojas",
  credentials: "Psiquiatra. Profesora Titular de Psiquiatría, Facultad de Medicina, Universidad de Chile",
}

const EQUIPO: BlogAuthor = { type: "org", name: "Equipo Optima Salud" }

export const blogPosts: BlogPost[] = [
  {
    slug: "depresion-diagnostico-y-tratamiento",
    title: "Depresión: diagnóstico y tratamiento",
    seoTitle: "Depresión: síntomas, diagnóstico y tratamiento",
    description:
      "Qué es la depresión, cuáles son sus síntomas, cómo se diagnostica y qué tratamientos han probado ser efectivos. Por la Dra. Graciela Rojas, psiquiatra.",
    excerpt:
      "La depresión afecta el cuerpo, el ánimo y los pensamientos. Conoce sus síntomas, sus causas y los tratamientos con evidencia.",
    author: GRACIELA_ROJAS,
    datePublished: "2020-09-09",
    dateModified: "2026-11-16",
    body: `La depresión afecta el cuerpo, el ánimo y los pensamientos. Puede afectar la manera en que te sientes sobre ti mismo y sobre los demás. Si no se somete a tratamiento, puede afectar el trabajo, la familia, los hábitos del comer, el dormir y la vida en general. No es posible ignorar la depresión y pensar que desaparecerá con el tiempo: los síntomas pueden empeorar con el paso del tiempo.

Es importante buscar tratamiento, ya que la mayoría de las personas afectadas pueden seguir una vida plena una vez que lo inician. Quien sufre de depresión tiene sentimientos de desesperanza y desesperación que pueden llegar a obstaculizarle muchos aspectos de la vida y afectarle actividades de las que antes disfrutaba. La depresión puede ocurrir una vez en la vida, aunque es común que ocurra varias veces.

## ¿Cuáles son los síntomas?

Puedes padecer cinco o más de los siguientes síntomas por un período mínimo de dos semanas:

- Tristeza y pesimismo persistentes
- Sentimientos de culpa, de desvalimiento o de desesperanza
- Pérdida de interés o de placer en las actividades normales, incluidas las relaciones sexuales
- Dificultad para concentrarse y problemas de memoria
- Empeoramiento de enfermedades crónicas que coexisten, como la diabetes
- Cambios en los hábitos del dormir (insomnio o dormir demasiado)
- Cambios en los hábitos del comer (subir o bajar de peso sin planearlo)
- Cansancio y falta de energía
- Ansiedad, agitación e irritabilidad
- Pensamientos de suicidio o de muerte
- Hablar lentamente; movimientos lentos
- Dolor de cabeza, dolor de estómago y problemas digestivos

## Síntomas depresivos y enfermedad depresiva

La mayoría de las personas presentan en algún momento de sus vidas síntomas depresivos relacionados con hechos que han impactado su vida. Estos acontecimientos pueden ser psicosociales, ambientales o pueden ser enfermedades o síntomas físicos. En estos casos se trataría de una sintomatología depresiva reactiva a esos sucesos, y su intensidad debiera relacionarse con la gravedad de los hechos.

La enfermedad depresiva, en cambio, se caracteriza por un conjunto de síntomas e implica que la persona presenta una discapacidad en sus actividades rutinarias. Los síntomas característicos son tristeza e incapacidad de disfrutar de la vida, junto con síntomas físicos (alteración del sueño, del apetito, cansancio físico), otros síntomas emocionales (tristeza, angustia) y síntomas cognitivos (ideas negativas de muerte, de desesperanza, de inutilidad). Estos síntomas deben ser de tal magnitud que la persona no puede continuar rindiendo en sus actividades como lo hacía antes.

## ¿Cuáles son sus causas?

Las causas de la aparición de esta enfermedad son muy variadas y actúan sobre una vulnerabilidad personal: eventos vitales, problemas familiares, económicos o sociales y cambios en el ciclo de vida pueden producir la enfermedad en personas vulnerables. Esta vulnerabilidad puede estar dada por múltiples factores: biográficos (por ejemplo, pérdida temprana de los padres, maltrato infantil o abuso sexual), de personalidad (personas con menos capacidad de adaptación y de enfrentamiento de los problemas) y genéticos.

## ¿Tiene tratamiento?

La enfermedad depresiva es muy frecuente (afecta aproximadamente a un 5-10% de la población adulta), pero actualmente tiene tratamientos efectivos que han logrado una remisión importante de los síntomas.

La investigación científica ha probado la efectividad de diversos tratamientos para el trastorno depresivo. Para los casos leves, intervenciones psicoterapéuticas y psicosociales llevadas a cabo por distintos profesionales; para los casos más graves, tratamientos farmacológicos y la combinación de tratamientos farmacológicos y psicoterapéuticos.

A pesar de la evidencia acumulada sobre la efectividad de los tratamientos antidepresivos, un porcentaje importante de pacientes no recibe tratamiento adecuado y, si lo hace, no lo continúa por el tiempo necesario. La depresión es un cuadro generalmente de varios meses de evolución que, en algunos pacientes, sigue un curso crónico o recurrente: se observa una recurrencia de un 50% luego de un primer episodio, de un 80% luego de un segundo y de alrededor de un 90% luego de un tercero. Por eso es importante que las personas que han sufrido esta enfermedad varias veces se mantengan en tratamiento para evitar nuevos episodios.`,
    related: [
      { label: "Haz el test PHQ-9 de síntomas depresivos", href: "/tests/phq-9" },
      { label: "Conoce a la Dra. Graciela Rojas", href: "/equipo/dra-graciela-rojas" },
      { label: "Psicólogos FONASA en Santiago", href: "/psicologos-fonasa-santiago" },
    ],
  },
  {
    slug: "depresion-posparto",
    title: "Depresión posparto: diagnóstico y tratamiento",
    seoTitle: "Depresión posparto: síntomas, riesgos y tratamiento",
    description:
      "Cuándo aparece la depresión posparto, cuántas mujeres la sufren en Chile, factores de riesgo y tratamientos. Por la Dra. Graciela Rojas, psiquiatra.",
    excerpt:
      "Entre un 10 y un 20% de las mujeres en Chile presenta depresión posparto. Cómo reconocerla, tratarla y cómo puede ayudar la familia.",
    author: GRACIELA_ROJAS,
    datePublished: "2020-09-09",
    dateModified: "2026-11-16",
    body: `## ¿Cuándo podemos decir que estamos frente a una depresión posparto?

Cuando, en el periodo que transcurre después del nacimiento de un bebé, la madre presenta síntomas compatibles con un episodio depresivo; es decir, disminución del ánimo, pérdida de la capacidad para disfrutar de la vida, angustia, irritabilidad, alteraciones del sueño o del apetito, entre otros. En algunos casos la madre no quiere asumir los cuidados del recién nacido, o bien tiene miedo a que a este le suceda algo malo.

En casos graves puede presentarse ideación suicida o alteraciones del juicio de realidad.

## ¿Cómo y desde cuándo se manifiesta? ¿Cuánto puede durar?

La depresión posparto aparece generalmente a partir de la cuarta semana del puerperio y alcanza su mayor frecuencia en la semana 12 del periodo posparto. La duración es variable y depende fundamentalmente del diagnóstico precoz, del inicio del tratamiento y de la respuesta de la madre a ese tratamiento.

## ¿Qué porcentaje de las mujeres sufre depresión posparto?

Las cifras de prevalencia son variables. En Chile, los estudios realizados indican que entre un 10 y un 20% de las mujeres presenta una depresión posparto, y que más de un 30% presenta en este período síntomas depresivos que no alcanzan la intensidad de una enfermedad depresiva, pero que afectan su calidad de vida.

## ¿Cuáles son los mayores factores de riesgo?

Los factores psicosociales son muy importantes en el desencadenamiento de la enfermedad. Como en todas las depresiones, el nivel socioeconómico bajo es un factor de riesgo indiscutible. También se sabe que es más frecuente en madres solteras y en mujeres que tienen relaciones inestables o de mala calidad con el padre del bebé.

Los problemas relacionados con el parto y el puerperio también tienen una influencia negativa; por ejemplo, los problemas de salud del recién nacido o las dificultades con la lactancia. Un factor muy importante es el antecedente de depresiones previas: si una mujer ha presentado un episodio depresivo, tiene mayor riesgo de sufrir depresión en el período posparto.

## ¿Cuáles son los tratamientos más habituales? ¿Cuánto duran?

El tratamiento de la depresión posparto es similar al de cualquier episodio depresivo: el tratamiento farmacológico y el psicoterapéutico han mostrado eficacia. Sin embargo, por tratarse de una enfermedad que se presenta en un período complicado de la vida de una mujer, presenta algunas dificultades.

Una de las barreras es el tiempo que la mujer puede dedicarle a su tratamiento en un período en que debe cuidar intensamente al recién nacido; una psicoterapia implica asistir regularmente a un tratamiento relativamente largo. Por otro lado, la terapia con fármacos presenta el problema de la lactancia. Aunque hay antidepresivos recomendados para esta situación, muchas veces las madres muestran resistencia a usarlos durante la lactancia.

En general, en los casos menos graves la psicoterapia debiera ser el tratamiento de elección, y en los casos más severos hay que llevar a cabo un tratamiento combinado de psicoterapia y farmacoterapia.

La duración del tratamiento es de 6 meses, contados a partir de la fecha en que la madre ha remitido sus síntomas. Si tiene antecedentes de otros episodios, la duración del tratamiento debiera ser mayor.

En Chile llevamos a cabo un ensayo clínico en consultorios del sistema público de salud y demostramos la eficacia de un tratamiento combinado: las mujeres deprimidas en el posparto participaban en un taller grupal donde se abordaban sus principales problemas y algunos aspectos importantes de la crianza, y las mujeres con cuadros más graves recibían fármacos antidepresivos. La intervención mostró buenos resultados a los tres meses de seguimiento. En esta investigación, una barrera para el tratamiento fue claramente el tiempo de las mujeres, pues la mayoría tenía poco apoyo para el cuidado de los bebés.

## ¿Cómo debe enfrentar la familia esta enfermedad?

La familia debe, en primer lugar, ser consciente de la existencia del problema para dar la voz de alerta, ya que es una enfermedad poco detectada: toda la atención está centrada en el recién nacido.

Una vez que la enfermedad es diagnosticada y la madre ha iniciado un tratamiento, la familia debe apoyarla con el cuidado del bebé para que tenga el tiempo necesario para su tratamiento y recuperación.

La familia también juega un papel en el origen de la depresión posparto, pues las distintas formas de inestabilidad de la pareja son factores de riesgo para la enfermedad.

## ¿Cuál es el principal mito sobre la depresión posparto?

Un mito es que es normal deprimirse en este período. Tiende a confundirse la depresión con un periodo transitorio de labilidad emocional que efectivamente puede producirse en el puerperio, inmediatamente después del parto.

El tratamiento de la depresión posparto es muy importante no solo por la salud de la madre, sino también por la del recién nacido. Hay mucha evidencia sobre los efectos negativos que puede tener en la vida de la pareja y en el desarrollo afectivo y cognitivo del bebé.`,
    sources: [
      {
        label:
          "Rojas G, Fritsch R, Solís J, Jadresic E, Castillo C, González M, Guajardo V, Lewis G, Peters TJ, Araya R. Treatment of postnatal depression in low-income mothers in primary-care clinics in Santiago, Chile: a randomised controlled trial. The Lancet. 2007;370:1629-1637.",
      },
    ],
    related: [
      { label: "Conoce a la Dra. Graciela Rojas", href: "/equipo/dra-graciela-rojas" },
      { label: "Haz el test PHQ-9 de síntomas depresivos", href: "/tests/phq-9" },
      { label: "Psicólogos FONASA online", href: "/psicologos-fonasa-online" },
    ],
  },
  {
    slug: "depresion-en-la-tercera-edad",
    title: "Depresión en la tercera edad",
    seoTitle: "Depresión en la tercera edad: señales y tratamiento",
    description:
      "Cómo reconocer la depresión en personas mayores, por qué aparece, qué riesgos tiene, cuándo consultar y cómo prevenirla.",
    excerpt:
      "Señales de alerta, factores que la facilitan, riesgos y tratamientos de la depresión en personas mayores, y el rol de la familia.",
    author: EQUIPO,
    datePublished: "2020-09-09",
    dateModified: "2026-11-16",
    body: `## ¿Qué señales indican una depresión en una persona mayor?

La depresión es una enfermedad que presenta síntomas muy específicos. Los más importantes son la disminución del ánimo y la incapacidad para disfrutar de la vida. A estos síntomas se agregan otros, como alteraciones del sueño, irritabilidad, alteración del apetito, disminución de la libido, alteración de la concentración y de la memoria, e incapacidad para desempeñar actividades de la vida cotidiana. Estos síntomas deben estar presentes al menos durante dos semanas.

Tener una depresión significa estar enfermo: hay un cambio importante en el aspecto y en la conducta de la persona que la sufre. La persona no es la misma; se ve triste, decaída y más inactiva. Las conductas de aislamiento social, de retraimiento y dejar de hacer algunas actividades pueden ser indicativas de una depresión.

## ¿Por qué se da la depresión en la tercera edad?

Los factores que desencadenan una depresión son múltiples y variados. Influyen factores genéticos y, en concreto, los antecedentes familiares son importantes. Es una enfermedad que puede presentarse varias veces en la vida de la misma persona, por lo que hay factores de vulnerabilidad relacionados con cómo la persona maneja las situaciones de estrés. Estas son fundamentalmente psicosociales y presentan diferencias de género: a las mujeres les afectan más los problemas familiares y a los hombres los problemas económicos y laborales.

En la tercera edad se producen una serie de cambios a los que las personas deben adaptarse y que, en algunas, pueden desencadenar una depresión:

- La jubilación, que en nuestra sociedad suele implicar una disminución importante de los ingresos y del reconocimiento social.
- La pérdida de familiares y amigos, cuyos duelos pueden ser causa de depresión.
- Las enfermedades discapacitantes, un factor especialmente difícil de sobrellevar.

## ¿Qué cambios psicológicos produce?

La depresión afecta la forma de pensar: la persona tiene ideas negativas, está más pesimista y tiene ideas de muerte. Ve el futuro negro, no le ve salida a los problemas y se siente culpable de ciertas cosas. A veces estas ideas son muy patológicas, como creer que uno está enfermo sin tener evidencias de ello. Cuando el juicio de realidad está alterado, se trata de una depresión grave.

## ¿Qué consecuencias puede traer una depresión a esta edad?

La depresión en la tercera edad tiene un pronóstico más reservado que en etapas anteriores de la vida:

- Con frecuencia la persona responde solo parcialmente al tratamiento y permanece con síntomas residuales.
- Un tercio de las personas puede evolucionar hacia un cuadro de demencia; es decir, la depresión sería una etapa inicial de un cuadro más grave.
- El riesgo de suicidio es más elevado en las personas con depresión de edad avanzada.

## ¿Cuándo consultar y quién debe tomar la decisión?

La persona debe consultar siempre que presente algunos de los síntomas mencionados, pues el médico debe estudiar el caso y determinar si se trata de un episodio depresivo o si hay otra enfermedad que esté produciendo esos síntomas.

La familia o la propia persona deben tomar la iniciativa. A veces la persona no se da cuenta de lo que le pasa, y la familia puede hacer notar los cambios que desde fuera son más evidentes.

## ¿Qué tratamientos existen?

Los tratamientos pueden ser psicoterapéuticos o farmacológicos. Si la depresión es leve, la persona no necesita ser tratada con fármacos. Los tratamientos combinados son eficaces para las depresiones más graves. Cuando los desencadenantes son problemas que la persona debe enfrentar, la psicoterapia es de gran ayuda.

## ¿Cómo prevenirla?

Si la persona, al llegar a la tercera edad, sabe que ha tenido depresiones previas, debe mantener un tratamiento preventivo para evitar que la enfermedad se presente en esta etapa de la vida.

También ayuda anticiparse a los cambios que uno debe enfrentar en la vida. Por ejemplo, es natural que los hijos partan de la casa familiar, y ello no debiera ser un factor precipitante de una depresión. Uno debiera prepararse durante la vida para la vejez y, por ende, para una eventual viudez, para la jubilación y para la muerte.`,
    related: [
      { label: "Terapia ocupacional para personas mayores", href: "/equipo/rayen-quintulen-gonzalez" },
      { label: "Nuestro equipo de psiquiatras", href: "/equipo" },
      { label: "Haz el test PHQ-9 de síntomas depresivos", href: "/tests/phq-9" },
    ],
  },
  {
    slug: "que-es-la-ansiedad",
    title: "¿Qué es la ansiedad? Trastorno de ansiedad generalizada",
    seoTitle: "¿Qué es la ansiedad? Síntomas, causas y tratamiento",
    description:
      "Síntomas del trastorno de ansiedad generalizada en adultos y niños, sus causas y cómo se trata con psicoterapia y medicamentos.",
    excerpt:
      "Preocuparse demasiado por las cosas cotidianas, no poder relajarse, cansancio constante: cómo reconocer la ansiedad generalizada y tratarla.",
    author: EQUIPO,
    datePublished: "2021-08-13",
    dateModified: "2026-11-16",
    body: `Las personas con trastorno de ansiedad generalizada se sienten muy nerviosas por problemas de diversa índole, incluso cuando hay poca o ninguna razón para preocuparse.

## Síntomas

- Preocuparse demasiado por las cosas cotidianas
- Ser conscientes de que se preocupan mucho más de lo que deberían
- Tener dificultad para relajarse
- Sentirse cansadas todo el tiempo
- Sentirse irritables o nerviosas
- Tener dolores de cabeza, musculares o del estómago, o molestias inexplicables

Los niños y adolescentes con trastorno de ansiedad generalizada a menudo se preocupan excesivamente por:

- Su rendimiento, tanto en el colegio como en los deportes o pasatiempos
- Enfermedades o catástrofes naturales

Los adultos con este trastorno a menudo se ponen muy nerviosos por situaciones diarias como:

- Problemas en el trabajo
- La salud
- Las finanzas
- La salud y el bienestar de sus hijos
- Cumplir con sus responsabilidades

Tanto niños como adultos pueden experimentar síntomas físicos que dificultan su funcionamiento e interfieren con la vida diaria. Los síntomas pueden mejorar o empeorar en diferentes momentos, y a menudo son peores en períodos de estrés, como durante una enfermedad física, la época de exámenes o un conflicto familiar o de pareja.

## ¿Qué causa el trastorno de ansiedad generalizada?

A veces es hereditario, pero nadie sabe con seguridad por qué algunas personas lo tienen y otras no. Los investigadores han descubierto que varias partes del cerebro, así como procesos biológicos, desempeñan un papel clave en el miedo y la ansiedad. También se estudia cómo el estrés y los factores ambientales influyen en el desarrollo de este trastorno.

## ¿Cómo se trata?

Primero, habla con un profesional de salud sobre tus síntomas. Es importante una evaluación y una historia clínica para asegurarse de que los síntomas no sean causados por un problema físico. Es posible que te recomienden un especialista en salud mental, como un psiquiatra o un psicólogo.

Por lo general, el trastorno de ansiedad generalizada se trata con psicoterapia, medicamentos o una combinación de ambos.

La psicoterapia es especialmente útil: enseña a la persona diferentes formas de pensar, comportarse y reaccionar ante distintas situaciones para ayudarla a sentirse menos ansiosa o preocupada.

Los medicamentos también pueden ayudar. El médico trabajará contigo para encontrar el medicamento y la dosis adecuados. Hay distintos tipos de fármacos que pueden ser eficaces:

- Inhibidores selectivos de la recaptación de serotonina (ISRS)
- Inhibidores de la recaptación de serotonina y norepinefrina (IRSN)
- Otros medicamentos serotoninérgicos
- Benzodiacepinas

Consulta con tu médico sobre cualquier efecto secundario y no abandones el tratamiento demasiado rápido: tanto la psicoterapia como la medicación pueden tardar en mostrar resultados. Un estilo de vida saludable también ayuda: dormir lo suficiente, hacer ejercicio, comer de forma saludable y apoyarse en familiares y amigos de confianza.

## ¿Qué se siente tener ansiedad generalizada?

> "Estaba preocupado todo el tiempo y me sentía nervioso. Mi familia me dijo que no había razón para preocuparme, pero aun así me sentía angustiado. Me daba temor ir al trabajo porque no lograba concentrarme. Por las noches tenía problemas para dormir y estaba molesto con mi familia todo el tiempo. Consulté con mi doctor y le conté que me preocupaba de todo. Ahora estoy trabajando con un profesional para enfrentar mejor mi ansiedad. He tenido que trabajar duro, pero me siento mejor. Me alegro de haber hecho esa primera llamada."`,
    sources: [
      {
        label:
          "Adaptado de: National Institute of Mental Health (NIMH). Trastorno de ansiedad generalizada: cuando no se pueden controlar las preocupaciones.",
        url: "https://www.nimh.nih.gov/health/publications/espanol/trastorno-de-ansiedad-generalizada-cuando-no-se-pueden-controlar-las-preocupaciones-new",
      },
    ],
    related: [
      { label: "Psicólogos FONASA online", href: "/psicologos-fonasa-online" },
      { label: "Nuestro equipo de psicólogos", href: "/equipo" },
      { label: "¿Necesito ayuda para mi salud mental?", href: "/blog/necesito-ayuda-salud-mental" },
    ],
  },
  {
    slug: "necesito-ayuda-salud-mental",
    title: "¿Necesito ayuda para mi salud mental?",
    seoTitle: "¿Necesito ayuda psicológica? Cómo saber cuándo consultar",
    description:
      "Guía para saber si tus síntomas son leves y puedes probar medidas de autocuidado, o si es momento de consultar con un psicólogo o psiquiatra.",
    excerpt:
      "Cómo distinguir síntomas leves de síntomas que requieren consultar, y qué medidas de autocuidado probar primero.",
    author: EQUIPO,
    datePublished: "2021-06-25",
    dateModified: "2026-11-16",
    body: `Es parte de la vida sentirse agobiado o preocupado por algo, aunque no todo el tiempo. Para saber en qué momento conviene pedir ayuda a un profesional, lo primero es revisar si tus síntomas interfieren en tu vida diaria.

## ¿Tengo síntomas leves que han durado menos de dos semanas?

- Te sientes un poco decaído.
- Te sientes decaído, pero aún puedes trabajar, estudiar o realizar labores domésticas.
- Tienes cierta dificultad para dormir.
- Te sientes decaído, pero aún puedes cuidarte a ti mismo o a otros.

Si es así, te recomendamos probar durante dos semanas las siguientes medidas de autocuidado:

- Hacer ejercicio.
- Dormir bien, manteniendo un horario regular, idealmente 8 horas.
- Comer de forma saludable.
- Conversar con amigos o familiares de confianza.
- Practicar meditación, relajación o actividades contemplativas.
- Participar en actividades con contacto social, ya sean virtuales o presenciales.

Si los síntomas no mejoran o parecen empeorar a pesar del autocuidado, te recomendamos consultar con un psicólogo para revisar tu situación.

## ¿Tengo síntomas graves que han durado dos semanas o más?

- Dificultades para dormir.
- Cambios de apetito que provocan cambios no deseados en tu peso.
- Dificultades en las mañanas para levantarte de la cama debido a tu estado de ánimo.
- Dificultades para concentrarte.
- Pérdida de interés en cosas que solían ser entretenidas.
- No poder realizar tus actividades y funciones diarias.
- Pensamientos sobre la muerte o de hacerte daño.

Si tienes estos síntomas, te recomendamos consultar con un psiquiatra para evaluarlos y tratarlos.`,
    related: [
      { label: "Haz el test PHQ-9 (5 minutos)", href: "/tests/phq-9" },
      { label: "Reserva tu hora con un psicólogo o psiquiatra", href: "/reserva" },
      { label: "Depresión: diagnóstico y tratamiento", href: "/blog/depresion-diagnostico-y-tratamiento" },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
