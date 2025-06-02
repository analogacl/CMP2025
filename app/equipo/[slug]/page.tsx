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
    role: "PSICÓLOGA",
    image: "/images/team/leonor-irarrazaval.jpeg",
    fallbackImage: "/images/avatars/avatar-f1.png",
    description:
      "Experta en enfoque cognitivo-social y tratamiento de trastornos psicológicos y psiquiátricos en adultos.",
    fullBio:
      "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Su enfoque es cognitivo-social y se enfoca en el trabajo de las cogniciones. Atiende individualmente a personas adultas con problemas psicológicos —como problemas de la vida cotidiana, incapacidad para resolver problemas, pérdida de seres queridos, problemas de comunicación, estrés, conflictos en las relaciones interpersonales, problemas de autoestima, entre otros— y/o psiquiátricos —trastornos de personalidad, crisis de angustia, agorafobia, duelo patológico, trastorno de pánico, trastorno obsesivo-compulsivo, depresión, bipolaridad, esquizofrenia.",
    specialties: [
      "Enfoque Cognitivo-Social",
      "Trastornos de Personalidad",
      "Crisis de Angustia",
      "Trastorno de Pánico",
      "Depresión",
      "Bipolaridad",
    ],
    education: ["Doctorado en Psicoterapia", "Licenciatura en Psicología"],
    schedule: "LUNES 19:30 a 20:30",
    modality: "Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
      followUp: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
      online: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
    },
  },
  {
    slug: "susana-romero-a",
    name: "SUSANA ROMERO A.",
    role: "PSICÓLOGA",
    image: "/images/avatars/susana-romero-professional.jpg",
    fallbackImage: "/images/avatars/avatar-f2.png",
    description:
      "Magíster en psicología clínica con enfoque integrativo, experta en el abordaje de ansiedad, crisis personales, duelo, autoestima y conflictos laborales.",
    fullBio:
      "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo y se aproxima a la psicología desde más de un modelo teórico. Puede ayudarle a revisar qué aspectos de su forma de vida le generan ansiedad, crisis de pánico, estrés, desánimo y/o relaciones humanas conflictivas. Le puede ayudar a superar sus problemas de autoestima o el dolor que experimenta frente a una pérdida o facilitar su reincorporación laboral luego de su postnatal o de su licencia prolongada. Susana Romero tiene formación en recursos humanos de modo que puede ayudarle a enfrentar sus problemas en su lugar de trabajo.",
    specialties: ["Terapia Integrativa", "Ansiedad", "Crisis de Pánico", "Autoestima", "Duelo", "Conflictos Laborales"],
    education: ["Magister en Psicología Clínica", "Formación en Recursos Humanos"],
    schedule: "MARTES 9:00 y 12:00 a 18:00",
    modality: "Online",
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/F0SihxL0b02pX4145n21dOs9t8l3Df",
    fees: {
      initial: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
      },
      followUp: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
      },
      online: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
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
      "Magíster en psicología clínica, doctora en psicoterapia y una psicoterapeuta experimentada. Su enfoque es constructivista cognitivo y se centra en lograr un reordenamiento psicológico frente a situaciones que afectan el curso normal de la existencia. Atiende adultos y adolescentes con síntomas depresivos y/o ansiosos, con trastornos psiquiátricos, con conflictos familiares y de pareja, con trastornos sexuales, dificultades laborales o interpersonales. Acuerda con las personas las metas a alcanzar como revitalización de la esperanza dejando atrás la desmoralización, mejoramiento del funcionamiento cotidiano.",
    specialties: [
      "Enfoque Constructivista Cognitivo",
      "Trastornos Depresivos",
      "Trastornos Ansiosos",
      "Conflictos Familiares",
      "Trastornos Sexuales",
    ],
    education: ["Doctorado en Psicoterapia", "Magister en Psicología Clínica"],
    schedule: "Consultar disponibilidad",
    modality: "Consultar modalidad",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$55.000",
        fonasa: "$55.000",
        isapres: "$55.000",
      },
      followUp: {
        private: "$55.000",
        fonasa: "$55.000",
        isapres: "$55.000",
      },
      online: {
        private: "$55.000",
        fonasa: "$55.000",
        isapres: "$55.000",
      },
    },
  },
  {
    slug: "margarita-loubat-oyarce",
    name: "MARGARITA LOUBAT OYARCE",
    role: "PSICÓLOGA",
    image: "/images/team/margarita-loubat.jpeg",
    fallbackImage: "/images/avatars/avatar-f7.png",
    description:
      "Doctora en Educación y Psicología, con formación avanzada en psicología clínica en universidades de Francia y España.",
    fullBio:
      "Doctora en Educación y Psicología. Universidad Central; Diploma de Estudios en Profundidad (DEA) en Psicología y Educación. Universidad de Granada; DESS en Psicología Clínica y Patológica. Universidad Paris V.; Maestría en Psicología Clínica. Universidad Paris V.; Licenciatura en Psicología. Universidad Paris V. (La Sorbonne).",
    specialties: ["Psicología Educativa", "Psicología Clínica", "Formación Internacional"],
    education: [
      "Doctorado en Educación y Psicología (Universidad Central)",
      "DEA en Psicología y Educación (Universidad de Granada)",
      "DESS en Psicología Clínica (Universidad Paris V)",
      "Maestría en Psicología Clínica (Universidad Paris V)",
      "Licenciatura en Psicología (Universidad Paris V - La Sorbonne)",
    ],
    schedule: "LUNES 18:00 a 20:00, JUEVES 18:00 a 20:00",
    modality: "Presencial PH (Bono Fonasa) / Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
      },
      followUp: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
      },
      online: {
        private: "$35.000",
        fonasa: "$25.000",
        isapres: "$35.000",
      },
    },
  },
  {
    slug: "jocelyn-calderon-caceres",
    name: "JOCELYN CALDERÓN CÁCERES",
    role: "PSICÓLOGA",
    image: "/images/team/jocelyn-calderon.jpeg",
    fallbackImage: "/images/avatars/avatar-f5.png",
    description:
      "Especializada en psicoanálisis relacional, enfocada en trastornos emocionales y restaurar el bienestar integral.",
    fullBio:
      "Psicóloga clínica con postítulo en psicoanálisis relacional. Se especializa en la atención de adolescentes y adultos con abordaje de diagnósticos de trastornos del ánimo, trastornos mixtos de ansiedad y depresión, trastornos ansiosos, trastornos adaptativos, crisis de pánico y trastornos de la personalidad. Realiza intervenciones que devuelven el funcionamiento integral de quien consulta.",
    specialties: [
      "Psicoanálisis Relacional",
      "Trastornos del Ánimo",
      "Trastornos de Ansiedad",
      "Crisis de Pánico",
      "Trastornos de Personalidad",
    ],
    education: ["Postítulo en Psicoanálisis Relacional", "Licenciatura en Psicología"],
    schedule: "LUNES 11:00 a 12:30 y 15:00 a 18:30, MARTES 16:00 a 20:30",
    modality: "Online y Presencial (Escuela Militar)",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      online: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
    },
  },
  {
    slug: "cristian-ugarte",
    name: "CRISTIÁN UGARTE",
    role: "PSICÓLOGO",
    image: "/images/avatars/avatar-m1.png",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicólogo clínico con enfoque psicoanalítico y experiencia en psicoterapia y temas laborales, especializado en conflictos personales, familiares y de pareja.",
    fullBio:
      "Psicólogo Clínico con amplia experiencia como psicoterapeuta, además cuenta con formación y experiencia en el mundo Laboral/Organizacional y en áreas de RRHH. Trabaja bajo un enfoque Psicoanalítico y atiende principalmente diferentes tipos de problemáticas de la vida cotidiana, conflictos de pareja o familiares, autoestima entre otros, además de temáticas de interacción laboral.",
    specialties: ["Enfoque Psicoanalítico", "Psicología Laboral", "Conflictos de Pareja", "Autoestima", "RRHH"],
    education: ["Licenciatura en Psicología", "Formación en Psicología Organizacional"],
    schedule: "MARTES 13:00 a 17:00",
    modality: "Presencial PH (Bono Fonasa) y Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "$14.170",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$14.170",
        isapres: "$40.000",
      },
      online: {
        private: "$40.000",
        fonasa: "$14.170",
        isapres: "$40.000",
      },
    },
  },
  {
    slug: "makarena-morris",
    name: "MAKARENA MORRIS",
    role: "PSICÓLOGA",
    image: "/images/avatars/avatar-f6.png",
    fallbackImage: "/images/avatars/avatar-f6.png",
    description:
      "Psicóloga especializada en psicoterapia, neuropsicología y evaluación de personalidad, con experiencia en trastornos emocionales, crisis vitales, familiares y parentales.",
    fullBio:
      "Sus servicios principales abarcan el tratamiento psicoterapéutico y la evaluación de la personalidad y las funciones cognitivas (Neuropsicología). Aborda trastornos del ánimo, ansiedad, estrés, trastornos de personalidad, diversidad funcional psíquica, trastorno de déficit atencional con y sin hiperactividad, violencia intrafamiliar, trastornos alimenticios, procesos de duelo, relaciones y sexualidad. Además, se especializa en abordar crisis del ciclo vital y familiar, así como conflictos y crisis parentales.",
    specialties: [
      "Neuropsicología",
      "Evaluación de Personalidad",
      "Trastornos del Ánimo",
      "TDAH",
      "Trastornos Alimenticios",
    ],
    education: ["Licenciatura en Psicología", "Especialización en Neuropsicología"],
    schedule: "MIÉRCOLES 15:00 a 19:30",
    modality: "Presencial en Kennedy y Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
      followUp: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
      online: {
        private: "$45.000",
        fonasa: "$45.000",
        isapres: "$45.000",
      },
      evaluations: "$150.000",
    },
  },
  {
    slug: "denise-gerber",
    name: "DENISE GERBER",
    role: "PSICÓLOGA",
    image: "/images/avatars/avatar-f8.png",
    fallbackImage: "/images/avatars/avatar-f8.png",
    description:
      "Psicóloga titulada de la Universidad de Chile, Doctorada en Psicoterapia y un Máster en neurociencias cognitivas en la University College London.",
    fullBio:
      "Psicóloga titulada de la Universidad de Chile, Doctorada en Psicoterapia y un Máster en neurociencias cognitivas en la University College London.",
    specialties: ["Psicoterapia", "Neurociencias Cognitivas"],
    education: [
      "Doctorado en Psicoterapia",
      "Máster en Neurociencias Cognitivas (University College London)",
      "Licenciatura en Psicología (Universidad de Chile)",
    ],
    schedule: "JUEVES 16:00",
    modality: "Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      online: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
    },
  },
  {
    slug: "jose-manuel-gonzalez",
    name: "JOSÉ MANUEL GONZÁLEZ",
    role: "PSICÓLOGO",
    image: "/images/avatars/avatar-m1.png",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicólogo clínico con 30 años de experiencia, especializado en duelo, trauma y evaluaciones de personalidad desde un enfoque relacional.",
    fullBio:
      "Psicólogo Clínico con 30 años de experiencia. Se ha enfocado, desde un enfoque relacional, en atender adolescentes, adultos y familias que han sufrido pérdidas, duelos y que han vivido situaciones traumáticas, donde las señales de alarma y malestar pueden ser cuadros ansiosos, depresivos o físicos. Además, realiza evaluaciones de personalidad a través de test proyectivos, especialmente el test de Rorschach.",
    specialties: ["Enfoque Relacional", "Duelo", "Trauma", "Test de Rorschach", "Evaluaciones de Personalidad"],
    education: ["Licenciatura en Psicología", "30 años de experiencia clínica"],
    schedule: "MIÉRCOLES 15:00 a 20:00, JUEVES 9:00 a 13:00",
    modality: "Presencial Providencia / Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
      online: {
        private: "$40.000",
        fonasa: "$40.000",
        isapres: "$40.000",
      },
    },
  },
  // Psiquiatras
  {
    slug: "dra-graciela-rojas",
    name: "DRA. GRACIELA ROJAS",
    role: "PSIQUIATRA",
    image: "/images/team/graciela-rojas.jpeg",
    fallbackImage: "/images/avatars/avatar-f8.png",
    description:
      "Psiquiatra y doctora en psicoterapia, con enfoque cognitivo-social, especializada en el tratamiento de trastornos psiquiátricos en adultos.",
    fullBio:
      "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Su enfoque es cognitivo-social y se centra en el trabajo de las cogniciones. Atiende individualmente a personas adultas con problemas psicológicos —como problemas de la vida cotidiana, incapacidad para resolver problemas, pérdida de seres queridos, problemas de comunicación, estrés, conflictos en las relaciones interpersonales, problemas de autoestima, entre otros— y/o psiquiátricos —trastornos de personalidad, crisis de angustia, agorafobia, duelo patológico, trastorno de pánico, trastorno obsesivo-compulsivo, depresión, bipolaridad, esquizofrenia.",
    specialties: [
      "Enfoque Cognitivo-Social",
      "Trastornos de Personalidad",
      "Trastorno de Pánico",
      "Depresión",
      "Bipolaridad",
      "Esquizofrenia",
    ],
    education: ["Doctorado en Psicoterapia", "Especialidad en Psiquiatría", "Medicina"],
    schedule: "LUNES 8:30 a 12:40, JUEVES 9:30 a 12:20 y 15:00 a 18:40, VIERNES 15:00 a 16:40",
    modality: "Presencial PH (Bono Fonasa) / Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$100.000",
        fonasa: "$45.870",
        isapres: "$100.000",
      },
      followUp: {
        private: "$100.000",
        fonasa: "$45.870",
        isapres: "$100.000",
      },
      online: {
        private: "$100.000",
        fonasa: "$45.870",
        isapres: "$100.000",
      },
    },
  },
  {
    slug: "dr-eduard-heberlein",
    name: "DR. EDUARD HEBERLEIN",
    role: "PSIQUIATRA",
    image: "/images/avatars/avatar-m1.png",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description: "Especialista en Psiquiatría Adultos de la Universidad de Chile.",
    fullBio:
      "Médico Cirujano y Psiquiatra de la Universidad de Chile, donde ha ejercido su profesión en distintos centros de las regiones Metropolitana y Los Lagos, donde actualmente reside. Atiende a personas adultas con problemas como depresión, crisis de pánico, ansiedad, trastorno afectivo bipolar, trastornos adaptativos, estrés, trastorno de estrés postraumático.",
    specialties: [
      "Depresión",
      "Crisis de Pánico",
      "Ansiedad",
      "Trastorno Bipolar",
      "Trastorno de Estrés Postraumático",
    ],
    education: ["Especialista en Psiquiatría Adultos (Universidad de Chile)", "Médico Cirujano (Universidad de Chile)"],
    schedule: "MARTES 16:30, VIERNES 10:40",
    modality: "Online",
    iframeSrc: "",
    fees: {
      initial: {
        private: "$80.000",
        fonasa: "$80.000",
        isapres: "$80.000",
      },
      followUp: {
        private: "$80.000",
        fonasa: "$80.000",
        isapres: "$80.000",
      },
      online: {
        private: "$80.000",
        fonasa: "$80.000",
        isapres: "$80.000",
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
                  src={member.fallbackImage || "/placeholder.svg"}
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
