import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, CreditCard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Team members data with updated professional photos and dynamic iframe sources
const teamMembers = [
  // Psicólogas
  {
    slug: "leonor-irarrazaval",
    name: "LEONOR IRARRÁZAVAL",
    role: "Psicóloga",
    image: "/images/team/leonor-irarrazaval-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f1.png",
    description:
      "Doctora en psicoterapia. Experta en tratamientos psicológicos de adultos con enfoque cognitivo social.",
    fullBio:
      "Doctor en psicoterapia y psicóloga clínica .Académica Escuela Psicología UTEM. Tiene una larga experiencia como psicoterapeuta. Con enfoque cognitivo-social, se centra en el trabajo de las cogniciones. Atiende a personas adultas con problemas psicológicos -como problemas de la vida cotidiana, incapacidad para resolver problemas, pérdida de seres queridos, problemas de comunicación, estrés, conflictos en las relaciones interpersonales, problemas de autoestima, entre otros-y/o psiquiátricos - trastornos de personalidad, crisis de angustia, agorafobia, duelo patológico, trastorno de pánico, trastorno obsesivo-compulsivo, depresión, bipolaridad, esquizofrenia.",
    specialties: [
      "Enfoque Cognitivo-Social",
      "Trastornos de Personalidad",
      "Crisis de Angustia",
      "Trastorno de Pánico",
      "Depresión",
      "Bipolaridad",
    ],
    education: ["Psicóloga, Universidad Central y Universidad Autónoma de Barcelona", "Doctorado en Psicoterapia, Universidad de Heidelberg","Especialización: Psicología Clínica, psicoterapia individual"],
    schedule: "Lunes 19:30 a 20:15",
    modality: "Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "No atiende",
      },
      followUp: {
        private: "$45.000",
        fonasa: "No atiende",
      },
      online: {
        private: "$45.000",
        fonasa: "No atiende",
      },
    },
  },
  {
    slug: "susana-romero-a",
    name: "SUSANA ROMERO A.",
    role: "PSICÓLOGA",
    image: "/images/team/susana-romero-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f2.png",
    description:
      "Magíster en psicología clínica con enfoque integrativo, experta en el abordaje de ansiedad, crisis personales, duelo, autoestima y conflictos laborales.",
    fullBio:
      "Magister en psicología clínica .Psicoterapeuta experimentada con un enfoque integrativo .Le puede ayudar a revisar qué aspectos de su forma de vida le generan ansiedad, estrés, desánimo y/o relaciones humanas conflictivas, así como a superar sus problemas de autoestima o el dolor que experimenta frente a una pérdida o facilitar su reincorporación laboral luego de su postnatal o de su licencia prolongada. Susana Romero tiene formación en recursos humanos de modo que puede ayudarle a enfrentar problemas en su lugar de trabajo.",
    specialties: ["Terapia Integrativa", "Ansiedad", "Crisis de Pánico", "Autoestima", "Duelo", "Conflictos Laborales"],
    education: ["Magister en Psicología Clínica", "Formación en Recursos Humanos"],
    schedule: "Martes 9:00 - 12:00 y de 15:00 - 18:00",
    modality: "Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/F0SihxL0b02pX4145n21dOs9t8l3Df",
    fees: {
      initial: {
        private: "40.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
      followUp: {
        private: "40.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
      online: {
        private: "$4.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
    },
  },
  {
    slug: "wilsa-szabo-lagos",
    name: "WILSA SZABO LAGOS",
    role: "PSICÓLOGA",
    image: "/images/team/wilsa-szabo.jpeg",
    fallbackImage: "/images/avatars/avatar-f3.png",
    description:
      "Magíster y doctora en psicoterapia, experta en enfoque constructivista cognitivo para tratar trastornos emocionales y promover bienestar en adultos y adolescentes.",
    fullBio:
      "Doctor en psicoterapia y Magister en psicología clínica. Es académica de la Escuela de Psicología de la USACH y una psicoterapeuta experimentada con un enfoque constructivista cognitivo. Se centra en lograr un reordenamiento psicológico frente a situaciones que afectan el curso normal de la existencia. Atiende adultos y adolescentes con síntomas depresivos y/o ansiosos, con conflictos familiares y de pareja, con trastornos sexuales, dificultades laborales o interpersonales. Acuerda con las personas las metas a alcanzar como revitalización de la esperanza dejando atrás la desmoralización.",
    specialties: [
      "Enfoque Constructivista Cognitivo",
      "Trastornos Depresivos",
      "Trastornos Ansiosos",
      "Conflictos Familiares",
      "Trastornos Sexuales",
    ],
    education: ["Psicóloga, Universidad de Chile.", "Doctorado en Psicoterapia y Magister en Psicología Clínica, Universidad de Chile", "Especialización: Psicología Clínica, psicoterapia individual"],
    schedule: "Consultar disponibilidad",
    modality: "Consultar modalidad",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$55.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
      followUp: {
        private: "$55.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
      online: {
        private: "$55.000",
        fonasa: "No atiende",
        isapres: "Reembolsa tarifa particular",
      },
    },
  },
  {
    slug: "margarita-loubat-oyarce",
    name: "MARGARITA LOUBAT OYARCE",
    role: "PSICÓLOGA",
    image: "/images/team/margarita-loubat-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f7.png",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/Z07Oo320M0p1wP2l5D91HjL987O3kt",
    description:
      "Doctora en Educación y Psicología, con formación avanzada en psicología clínica en universidades de Francia y España.",
    fullBio:
      "Doctora en Educación y Psicología con Maestría en Psicología Clínica y Diplomada en Estudios en Profundidad (DEA) en Psicología y Educación. Es académica de la Escuela de Psicología de la USACH. Tiene una larga experiencia en evaluaciones psicológicas y en psicoterapia de personas en distintas etapas de la vida desde la adolescencia. Atiende adultos y adolescentes con síntomas depresivos y/o ansiosos, con trastornos psiquiátricos, con conflictos familiares y de pareja, con trastornos sexuales, dificultades laborales o interpersonales.",
    specialties: ["Psicología Educativa", "Psicología Clínica", "Evaluación Psicológica"],
    education: [
      "Psicóloga, Universidad La Sorbonne",
      "Doctora en Educación y Psicología, Universidad Central. Magister en Psicología Clínica, Universidad Paris V",
      "Especialización: Psicología Clínica, psicoterapia individual",
    ],
    schedule: "Lunes y Jueves 18:00 a 20:00",
    modality: "Presencial / Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular",
      },
    },
  },
  {
    slug: "jocelyn-calderon-caceres",
    name: "JOCELYN CALDERÓN CÁCERES",
    role: "Psicóloga",
    image: "/images/team/jocelyn-calderon-caceres-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f5.png",
    description:
      "Especializada en psicoanálisis relacional, enfocada en trastornos emocionales y restaurar el bienestar integral.",
    fullBio:
      "Psicóloga clínica con postítulo en psicoanálisis relacional. Se especializa en la atención de adolescentes y adultos con trastornos del ánimo, trastornos de ansiedad y depresión, crisis de pánico, trastornos de conducta alimentaria, problemas emocionales del puerperio y trastornos de la personalidad. Realiza intervenciones que ayudan a las personas a recuperar sus actividades cotidianas.",
    specialties: [
      "Psicoanálisis Relacional",
      "Trastornos del Ánimo",
      "Trastornos de Ansiedad",
      "Crisis de Pánico",
      "Trastornos de Personalidad",
      "Trastornos de Conducta Alimentaria",
    ],
    education: ["Psicóloga, Universidad Central", "Especialización: Psicología Clínica, psicoterapia"],
    schedule: "Lunes 11:00 a 12:30 (On line) y 15:00 a 19:00 (presencial/on line), Miercoles 16:00 a 19:00  (presencial/on line)",
    modality: "Online y Presencial (Escuela Militar)",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/r0Kcl600g0hyNs9Y5F31zZ69i2T3FJ",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
      followUp: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
      online: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
    },
  },
  {
    slug: "cristian-ugarte",
    name: "CRISTIÁN UGARTE",
    role: "Psicólogo",
    image: "/images/team/cristian-ugarte-psicologo.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicólogo clínico con enfoque psicoanalítico y experiencia en psicoterapia y temas laborales, especializado en conflictos personales, familiares y de pareja.",
    fullBio:
      "Psicólogo Clínico con amplia experiencia como psicoterapeuta. Trabaja bajo un enfoque psicoanalítico atendiendo a adolescentes y adultos con problemas en su vida cotidiana -como problemas de pareja y familiares- y conflictos que afectan la salud mental de las personas. Puede ayudar a mejorar la autoestima y la calidad de vida de los usuarios. Tiene formación en recursos humanos y experiencia en apoyar a las personas a enfrentar problemas laborales.",
    specialties: ["Enfoque Psicoanalítico", "Psicología Laboral", "Conflictos de Pareja", "Autoestima", "RRHH"],
    education: ["Psicólogo, Universidad Central", "Magíster en Psicología, Clínica Universidad Adolfo Ibáñez",
"Coaching Ejecutivo Profesional, Universidad Complutense de Madrid",
"Especialización: Psicología Clínica, psicoterapia, Coaching"],
    schedule: "Martes 13:00 a 17:00",
    modality: "Presencial en Plaza de Armas y Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/B0qdh2u0s0Snmf7H5K21xrT93103SD",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
  {
    slug: "makarena-morris",
    name: "MAKARENA MORRIS",
    role: "PSICÓLOGA",
    image: "/images/team/makarena-morris-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f6.png",
    description:
      "Psicóloga especializada en psicoterapia, neuropsicología y evaluación de personalidad, con experiencia en trastornos emocionales, crisis vitales, familiares y parentales.",
    fullBio:
      "Académica de la Escuela de Psicología de la USACH. Sus servicios principales abarcan el tratamiento psicoterapéutico y la evaluación de la personalidad y las funciones cognitivas (Neuropsicología). Trata trastornos del ánimo, de ansiedad, estrés, trastornos de personalidad, diversidad funcional psíquica, trastorno de déficit atencional con y sin hiperactividad, violencia intrafamiliar, trastornos alimenticios, procesos de duelo, relaciones y sexualidad. Además, se ha especializado en abordar crisis del ciclo vital y familiar, así como conflictos y crisis parentales.",
    specialties: [
      "Neuropsicología",
      "Evaluación de Personalidad",
      "Trastornos del Ánimo",
      "TDAH",
      "Trastornos Alimenticios",
    ],
    education: ["Psicóloga, Universidad de Santiago", "Magíster en Psicología Social Aplicada, Humanidades/Estudios Humanísticos", "Especialización: Psicología Clínica, psicoterapia, evaluaciones neuropsicológicas, test de Rorschach."]
,
    schedule: "MIÉRCOLES 15:00 a 19:30",
    modality: "Presencial en Kennedy y Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/S0RbM2S0F0WeME5e50515hh9X3e302",
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
      followUp: {
        private: "$45.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
      online: {
        private: "$45.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular",
      },
      evaluations: "$150.000",
    },
  },
  {
    slug: "denise-gerber",
    name: "DENISE GERBER",
    role: "PSICÓLOGA",
    image: "/images/team/denise-gerber-psicologa.webp",
    fallbackImage: "/images/avatars/avatar-f8.png",
    description:
      "Psicóloga titulada de la Universidad de Chile, Doctorada en Psicoterapia y un Máster en neurociencias cognitivas en la University College London.",
    fullBio:
      "Doctor en psicoterapia y Magister en neurociencias cognitivas. Es académica de la Universidad Autónoma de Chile. Psicóloga clínica y psicoterapeuta experimentada en la atención de adultos con distintos problemas emocionales e interpersonales y con trastornos mentales comunes como los trastornos afectivos y ansiosos. Tiene formación como terapeuta EMDR en la Asociación Chilena de Terapeutas en EMDR y en Psicotrauma y trabaja principalmente desde este modelo terapéutico.",
    specialties: ["Psicoterapia", "Neurociencias Cognitivas", "Terapia EMDR"],
    education: [
      "Doctorado en Psicoterapia",
      "Máster en Neurociencias Cognitivas (University College London)",
      "Licenciatura en Psicología (Universidad de Chile)",
      "Especialización: Terapia EMDR por Asociación Chilena de Terapeutas en EMDR",
    ],
    schedule: "Jueves 16:00",
    modality: "Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/k0JQq280402GUV7K5y51Fmu9K5c3nz",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso Tarifa Particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso Tarifa Particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso Tarifa Particular.",
      },
    },
  },
  {
    slug: "jose-manuel-gonzalez",
    name: "JOSÉ MANUEL GONZÁLEZ",
    role: "PSICÓLOGO",
    image: "/images/team/jose-manuel-gonzalez-psicologo.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicólogo clínico con 30 años de experiencia, especializado en duelo, trauma y evaluaciones de personalidad desde un enfoque relacional.",
    fullBio:
      "Psicólogo Clínico con 30 años de experiencia. Atiende adolescentes, adultos y familias que han sufrido pérdidas, duelos y que han vivido situaciones traumáticas, donde las señales de alarma y malestar pueden ser cuadros ansiosos, depresivos o sintomatología física. Utiliza un enfoque relacional en la realización de los procesos psicoterapéuticos. Ofrece sus servicios para evaluaciones psicológicas siendo experto en evaluaciones de personalidad a través de test proyectivos, especialmente el test de Rorschach.",
    specialties: ["Enfoque Relacional", "Duelo", "Trauma", "Test de Rorschach", "Evaluaciones de Personalidad"],
    education: ["Psicólogo, Universidad Diego Portales", "30 años de experiencia clínica", "Especialización: Psicología Clínica, psicoterapia en trauma complejo, evaluaciones de personalidad."],
    schedule: "Miércoles 15:00 a 20:00, Jueves 9:00 a 13:00",
    modality: "Presencial Providencia / Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/P07tOxu0Z0NBeV995691qR79c7Y3Bm",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "carolina-arnes",
    name: "CAROLINA ARNÉS",
    role: "PSICÓLOGA",
    image: "/images/team/carolina-arnes.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicóloga especializada en psicoterapia en personas con problemas de adicciones.",
    fullBio:
      "Psicóloga clínica. Académica de la Universidad Autónoma de Chile. Psicoterapeuta con vasta experiencia en el tratamiento de personas con problemas de adicciones -alcohol, drogas legales e ilegales-. Tiene formación en psicoterapia humanista transpersonal y trabaja con este enfoque para ayudar a adolescentes y adultos a retomar su vida sin una adicción.",
    specialties: ["Adicciones", "Trastornos del Ánimo", "Mindfullnes", "Arte terapia "],
    education: ["Psicóloga Clínica, Universidad Central", "Magister en Educación Superior", "Especialización: Psicología Clínica, psicoterapia individual"],
    schedule: "Martes 17:00 a 20:00",
    modality: "Presencial Phillips 15",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "liliana-canileo",
    name: "LILIANA CANILEO",
    role: "PSICÓLOGA",
    image: "/images/team/liliana-canileo.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Realiza diagnóstico de salud mental estructurado y psicoterapia con enfoque de género.",
    fullBio:
      "Liliana es psicóloga con experiencia en el diagnóstico y tratamiento de diversas problemáticas de salud mental. Su enfoque de trabajo se basa en evaluaciones estructuradas que permiten identificar con claridad las necesidades emocionales y psicológicas de cada persona. Ofrece procesos de psicoterapia individual desde una perspectiva de género, lo que implica comprender cómo las experiencias personales están influenciadas por los contextos sociales, culturales y de género. Su objetivo es acompañar a las personas en un proceso de autoconocimiento, fortalecimiento emocional y desarrollo de herramientas que les permitan afrontar sus desafíos con mayor bienestar y autonomía. Atiende a adolescentes y adultos en un espacio seguro, de respeto y libre de juicios, promoviendo la salud mental desde una mirada integral y empática.",
    specialties: ["Adicciones", "Trastornos del Ánimo", "Mindfullnes", "Arte terapia "],
    education: ["Psicóloga, Universidad Católica de Temuco", "Especialización: diagnóstico estructurado de salud mental, psicoterapia individual."],
    schedule: "Viernes 15:00 a 17:00",
    modality: "Presencial Phillips 15",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "valentin-farias",
    name: "VALENTÍN FARÍAS",
    role: "PSICÓLOGO",
    image: "/images/team/valentin-farias.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Realiza diagnóstico de salud mental estructurado y psicoterapia basada en el autoconocimiento.",
    fullBio:
      "Psicólogo con formación en evaluación clínica y psicoterapia, especializado en el acompañamiento de adolescentes y adultos. Su labor se centra en el diagnóstico estructurado de salud mental, lo que permite orientar de forma precisa el tratamiento según las necesidades de cada persona. Su enfoque terapéutico promueve el autoconocimiento como herramienta central del proceso. A través de un espacio seguro y de confianza, Valentín acompaña a sus consultantes en la exploración de sus emociones, pensamientos y experiencias, favoreciendo una mayor comprensión personal y el desarrollo de recursos para enfrentar dificultades emocionales o relacionales.",
    specialties: ["Pendiente"],
    education: ["Psicólogo, Universidad Alberto Hurtado", "Especialización: diagnóstico estructurado de salud mental, psicoterapia individual."],
    schedule: "Por confirmar",
    modality: "Presencial Phillips 15",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/P07tOxu0Z0NBeV995691qR79c7Y3Bm",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "ignacia-leal",
    name: "IGNACIA LEAL",
    role: "PSICÓLOGA",
    image: "/images/team/ignacia-leal.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Realiza diagnóstico de salud mental estructurado y psicoterapia en todas las etapas de la vida a partir de la adolescencia.",
    fullBio:
      "Psicóloga con experiencia en evaluación y psicoterapia para adolescentes, jóvenes y adultos. Su trabajo se basa en el diagnóstico estructurado de salud mental, permitiendo identificar con precisión las necesidades emocionales y conductuales de cada persona, y orientar un tratamiento adecuado. Ofrece psicoterapia en distintas etapas de la vida a partir de la adolescencia, adaptando su enfoque a las características y desafíos propios de cada etapa. Su intervención busca acompañar a las personas en sus procesos de cambio, crisis o crecimiento personal, promoviendo el bienestar psicológico y la construcción de herramientas para enfrentar distintas situaciones de la vida cotidiana.",
    specialties: ["Pendiente"],
    education: ["Psicóloga, Universidad Autónoma de Chile", "Especialización: diagnóstico estructurado de salud mental, psicoterapia individual."],
    schedule: "Lunes 9:00 - 12:00",
    modality: "Presencial Phillips 15",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "ignacio-rios",
    name: "IGNACIO RIOS",
    role: "PSICÓLOGO",
    image: "/images/team/ignacio-rios.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Realiza diagnóstico de salud mental estructurado y psicoterapia a adolescentes y adultos con enfoque cognitivo conductual y sistémico.",
    fullBio:
      "Psicólogo con formación en evaluación clínica y psicoterapia, especializado en la atención de adolescentes y adultos. Su trabajo se basa en diagnósticos estructurados de salud mental, que permiten comprender en profundidad las dificultades emocionales, conductuales o relacionales de cada persona. En sus procesos terapéuticos integra dos enfoques complementarios: el cognitivo-conductual, centrado en identificar y modificar patrones de pensamiento y comportamiento poco funcionales; y el sistémico, que considera la influencia de las relaciones y el entorno en el bienestar psicológico. Esta combinación le permite abordar una amplia variedad de problemáticas, desde síntomas de ansiedad y depresión, hasta dificultades en vínculos familiares, sociales o de pareja.",
    specialties: ["Pendiente"],
    education: ["Psicólogo, Universidad UNIACC", "Especialización: diagnóstico estructurado de salud mental, psicoterapia individual"],
    schedule: "Por confirmar",
    modality: "Presencial Phillips 15",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
    {
    slug: "alfonso-saldia",
    name: "ALFONSO SALDÍA",
    role: "PSICÓLOGO",
    image: "/images/team/alfonso-saldia.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Realiza diagnóstico de salud mental estructurado, evaluaciones cognitivas breves y psicoterapia en todas las etapas de la vida a partir de la adolescencia.",
    fullBio:
      "Psicólogo con experiencia en evaluación y acompañamiento terapéutico desde la adolescencia hasta la adultez. Realiza diagnósticos estructurados de salud mental y evaluaciones cognitivas breves, herramientas clave para identificar con precisión las necesidades individuales y orientar el tratamiento de manera efectiva. Ofrece psicoterapia adaptada a distintas etapas del ciclo vital, abordando problemáticas emocionales, conductuales y relacionales según las características propias de cada edad. Su enfoque promueve el bienestar psicológico mediante un trabajo empático, profesional y centrado en las fortalezas de cada persona.",
    specialties: ["Pendiente"],
    education: ["Psicólogo,  Universidad de Santiago", "Especialización: diagnóstico estructurado de salud mental, psicoterapia individual, evaluación neuropsicológica breve."],
    schedule: "Miércoles 15:00 - 17:00 (online), Jueves 10:00 a 12:00 y 15:00 a 17:00 (Presencial)",
    modality: "Online y Presencial Phillips 15",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$40.000",
        fonasa: "Bono Fonasa 3: $14.170",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },

  // Psiquiatras
   {
    slug: "dra-alicia-figueroa",
    name: "DRA. ALICIA FIGUEROA",
    role: "Psiquiatra",
    image: "/images/team/dra-alicia-figueroa.webp",
    fallbackImage: "/images/avatars/avatar-f8.png",
    description:
      "Magister en Neurociencias Experta en diagnósticos y tratamientos psiquiátricos del adulto.",
    fullBio:
      "Pendiente.",
    specialties: [
      "Pendiente",
    ],
    education: ["Médico Cirujano, Universidad de Chile", "Magister en Neurociencias, Universidad de Chile", "Psiquiatra adultos, Universidad de Chile", "Especialización: evaluaciones y tratamientos psiquiátricos"],
    schedule: "Por definir",
    modality: "Por definir",
    iframeSrc: "",
    fees: {
      initial: {
        private: "Por definir",
        fonasa: "Por definir",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$100.000",
        fonasa: "Bono Fonasa 3: $45.870",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$100.000",
        fonasa: "Bono Fonasa 3: $45.870",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
  {
    slug: "dra-graciela-rojas",
    name: "DRA. GRACIELA ROJAS",
    role: "Psiquiatra",
    image: "/images/team/graciela-rojas.jpeg",
    fallbackImage: "/images/avatars/avatar-f8.png",
    description:
      "Psiquiatra y doctora en psicoterapia, con enfoque cognitivo-social, especializada en el tratamiento de trastornos psiquiátricos en adultos.",
    fullBio:
      "Doctor en Medicina. Psiquiatra y Terapeuta Familiar. Académica de la Facultad de Medicina de la Universidad de Chile. Tiene una vasta experiencia en el diagnóstico y tratamiento de los diferentes trastornos psiquiátricos.  Luego del estudio del caso, plantea un plan de tratamiento que puede incluir psicoterapia y farmacoterapia. Trabaja colaborativamente con médicos de otras especialidades y con psicólogos de distinta orientación. Atiende a jóvenes, adultos y personas de la tercera edad.",
    specialties: [
      "Trastornos Afectivos",
      "Trastornos de Personalidad",
      "Trastornos de Ansiedad",
      "Depresión",
      "Trastorno Bipolar",
      "Trastornos cognitivos del adulto mayor",
    ],
    education: ["Médico, J. W. Goethe Universidad Alemania", "Doctor en Medicina, J. W. Goethe Universidad. Alemania", "Psiquiatra adultos, Universidad de Chile","Especialización: evaluaciones y tratamientos psiquiátricos"],
    schedule: "Lunes 8:30 a 12:40, Jueves 9:30 a 12:20 y 15:00 a 18:40, Viernes 15:00 a 16:40",
    modality: "Presencial / Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$100.000",
        fonasa: "Bono Fonasa 3: $45.870",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$100.000",
        fonasa: "Bono Fonasa 3: $45.870",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$100.000",
        fonasa: "Bono Fonasa 3: $45.870",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
  {
    slug: "dr-eduard-heberlein",
    name: "DR. EDUARD HEBERLEIN",
    role: "PSIQUIATRA",
    image: "/images/team/dr-eduard-heberlein.webp",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description: "Especialista en Psiquiatría Adultos de la Universidad de Chile.",
    fullBio:
      "Médico Cirujano y Psiquiatra.  Atiende a personas adultas. Es experto en diagnóstico clínico y en planificar un buen tratamiento. Puede atender a personas con patología psiquiátrica de distinto grado de severidad: enfermedad depresiva, ansiosa, con crisis de pánico, trastorno afectivo bipolar, trastornos adaptativos, estrés, trastorno de estrés postraumático, esquizofrenia, trastornos de la personalidad, adicciones, alcoholismo, agorafobia, déficit atencional, duelos patológicos, fobias y trastorno de control de impulsos.",
    specialties: [
      "Depresión",
      "Crisis de Pánico",
      "Ansiedad",
      "Trastorno Bipolar",
      "Trastorno de Estrés Postraumático",
    ],
    education: ["Médico Cirujano, Universidad de Chile", "Psiquiatra adultos, Universidad de Chile","Especialización: evaluaciones y tratamientos psiquiátricos"],
    schedule: "Martes 16:30, Viernes 10:40",
    modality: "Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/8015Xjh0P064oJ385R81GON9R623Ay",
    fees: {
      initial: {
        private: "$80.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      followUp: {
        private: "$80.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
      online: {
        private: "$80.000",
        fonasa: "No",
        isapres: "Reembolso tarifa particular.",
      },
    },
  },
]

// Generate static params for all team members
export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

// Function to get team member data
function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug)
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getTeamMember(slug)

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Profesional no encontrado</h1>
        <p className="mb-8">Lo sentimos, no pudimos encontrar el profesional que estás buscando.</p>
        <Button asChild>
          <Link href="/equipo">Volver al equipo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/equipo" className="inline-flex items-center text-[#015233] hover:underline mb-8 font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver al equipo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={member.image || member.fallbackImage || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role} en Centro Médico Phillips`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-[#262626] mb-2">{member.name}</h1>
                <p className="text-[#015233] font-semibold text-sm uppercase mb-4">{member.role}</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#015233] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Horario de atención</p>
                      <p className="text-sm text-gray-600">{member.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#015233] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Modalidad</p>
                      <p className="text-sm text-gray-600">{member.modality}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-5 w-5 text-[#015233] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Tarifas</p>
                      <div className="mt-2 space-y-3">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs font-semibold text-[#015233] mb-1">Consulta</p>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <span className="text-gray-600">Particular:</span>
                            <span className="font-medium">{member.fees.initial.private}</span>
                            <span className="text-gray-600">FONASA:</span>
                            <span className="font-medium">{member.fees.initial.fonasa}</span>
                            <span className="text-gray-600">ISAPRES:</span>
                            <span className="font-medium">{member.fees.initial.isapres}</span>
                          </div>
                        </div>
                        {member.fees.evaluations && (
                          <div className="bg-gray-50 p-3 rounded-md">
                            <p className="text-xs font-semibold text-[#015233] mb-1">Evaluaciones</p>
                            <span className="font-medium text-sm">{member.fees.evaluations}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">* Los precios pueden variar según el caso específico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-[#262626] mb-4">Biografía</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{member.fullBio}</p>

              <h2 className="text-xl font-bold text-[#262626] mb-4">Especialidades</h2>
              <ul className="list-disc pl-5 mb-8 space-y-1">
                {member.specialties.map((specialty, index) => (
                  <li key={index} className="text-gray-700">
                    {specialty}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-[#262626] mb-4">Formación Académica</h2>
              <ul className="list-disc pl-5 mb-8 space-y-1">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-gray-700">
                    {edu}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-[#262626] mb-4">Agenda</h2>
              {member.iframeSrc ? (
                <div className="mb-8">
                  <iframe
                    style={{
                      borderRadius: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      height: "600px",
                      border: "none",
                    }}
                    src={member.iframeSrc}
                    title={`Sistema de Reservas - ${member.name}`}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-4 mb-8">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Agenda"
                      className="rounded-md"
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-2xl font-bold text-gray-500 bg-white/80 px-4 py-2 rounded">
                        Agenda próximamente disponible
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
