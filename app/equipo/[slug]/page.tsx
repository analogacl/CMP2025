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
    description: "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta.",
    fullBio:
      "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Especializada en terapia cognitivo-conductual y mindfulness. Ha trabajado con pacientes de todas las edades, con especial énfasis en adultos y adultos mayores. Su enfoque terapéutico se centra en ayudar a las personas a desarrollar habilidades para manejar el estrés, la ansiedad y la depresión, promoviendo el bienestar emocional y la calidad de vida.",
    specialties: ["Terapia Cognitivo-Conductual", "Mindfulness", "Manejo del Estrés", "Ansiedad", "Depresión"],
    education: ["Doctorado en Psicoterapia", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "$35.000",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$30.000",
        isapres: "$35.000",
      },
      online: {
        private: "$35.000",
        fonasa: "$28.000",
        isapres: "$32.000",
      },
    },
  },
  {
    slug: "susana-romero-a",
    name: "SUSANA ROMERO A.",
    role: "PSICÓLOGA",
    image: "/images/avatars/susana-romero-professional.jpg",
    fallbackImage: "/images/avatars/avatar-f2.png",
    description: "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo.",
    fullBio:
      "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo, combinando elementos de diferentes corrientes terapéuticas para adaptarse a las necesidades específicas de cada paciente. Cuenta con amplia experiencia en el tratamiento de trastornos del estado de ánimo, problemas de autoestima y dificultades en las relaciones interpersonales. Su objetivo es acompañar a las personas en su proceso de autoconocimiento y crecimiento personal.",
    specialties: ["Terapia Integrativa", "Trastornos del Estado de Ánimo", "Autoestima", "Relaciones Interpersonales"],
    education: ["Magister en Psicología Clínica", "Licenciatura en Psicología"],
    iframeSrc: "https://agendamiento.reservo.cl/makereserva/agenda/F0SihxL0b02pX4145n21dOs9t8l3Df",
    fees: {
      initial: {
        private: "$48.000",
        fonasa: "$38.000",
        isapres: "$42.000",
      },
      followUp: {
        private: "$42.000",
        fonasa: "$32.000",
        isapres: "$38.000",
      },
      online: {
        private: "$38.000",
        fonasa: "$30.000",
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
      "Magister en psicóloga clínica, doctora en psicoterapia y una psicoterapeuta experimentada. Su enfoque es constructivista cognitivo.",
    fullBio:
      "Magister en psicóloga clínica, doctora en psicoterapia y una psicoterapeuta experimentada. Su enfoque es constructivista cognitivo, centrándose en cómo las personas construyen su realidad a través de sus experiencias y percepciones. Ha trabajado extensamente con adolescentes y adultos, abordando temas como la identidad, el sentido de vida y las transiciones vitales. Su práctica se caracteriza por un profundo respeto por la autonomía y la capacidad de cambio de cada individuo.",
    specialties: [
      "Enfoque Constructivista Cognitivo",
      "Identidad",
      "Sentido de Vida",
      "Transiciones Vitales",
      "Adolescentes y Adultos",
    ],
    education: ["Doctorado en Psicoterapia", "Magister en Psicología Clínica", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$50.000",
        fonasa: "$40.000",
        isapres: "$45.000",
      },
      followUp: {
        private: "$45.000",
        fonasa: "$35.000",
        isapres: "$40.000",
      },
      online: {
        private: "$40.000",
        fonasa: "$32.000",
        isapres: "$36.000",
      },
    },
  },
  {
    slug: "maria-jesus-riade",
    name: "MARÍA JESUS RIADE",
    role: "PSICÓLOGA",
    image: "/images/team/maria-jesus-riade.jpeg",
    fallbackImage: "/images/avatars/avatar-f4.png",
    description: "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémico.",
    fullBio:
      "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémico, que considera a la persona en el contexto de sus relaciones familiares y sociales. Especializada en terapia familiar y de pareja, ayuda a mejorar la comunicación y resolver conflictos en el entorno familiar. También trabaja con individuos que enfrentan dificultades en sus relaciones interpersonales, ofreciendo herramientas para desarrollar vínculos más saludables y satisfactorios.",
    specialties: ["Enfoque Sistémico", "Terapia Familiar", "Terapia de Pareja", "Relaciones Interpersonales"],
    education: ["Magister en Psicología Clínica", "Especialización en Terapia Familiar", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$47.000",
        fonasa: "$37.000",
        isapres: "$42.000",
      },
      followUp: {
        private: "$42.000",
        fonasa: "$32.000",
        isapres: "$37.000",
      },
      online: {
        private: "$38.000",
        fonasa: "$30.000",
        isapres: "$34.000",
      },
    },
  },
  {
    slug: "maximiliano-lucas-aranguiz",
    name: "MAXIMILIANO LUCAS ARANGUIZ",
    role: "PSICÓLOGO",
    image: "/images/team/maximiliano-aranguiz.jpeg",
    fallbackImage: "/images/avatars/avatar-m1.png",
    description:
      "Psicólogo, diplomado en clínica con enfoque integral. Atiendo a personas desde los 5 años hasta adulto mayor.",
    fullBio:
      "Psicólogo, diplomado en clínica con enfoque integral. Atiendo a personas desde los 5 años hasta adulto mayor. Mi práctica se caracteriza por una visión holística que integra aspectos cognitivos, emocionales, conductuales y relacionales. Tengo experiencia en el trabajo con niños, adolescentes y adultos, abordando diversas problemáticas como dificultades de aprendizaje, problemas conductuales, ansiedad, depresión y crisis vitales. Mi objetivo es acompañar a las personas en su proceso de desarrollo y bienestar.",
    specialties: [
      "Enfoque Integral",
      "Psicología Infantil",
      "Adolescentes",
      "Adultos",
      "Adultos Mayores",
      "Dificultades de Aprendizaje",
    ],
    education: ["Diplomado en Clínica", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$45.000",
        fonasa: "$35.000",
        isapres: "$40.000",
      },
      followUp: {
        private: "$40.000",
        fonasa: "$30.000",
        isapres: "$35.000",
      },
      online: {
        private: "$35.000",
        fonasa: "$28.000",
        isapres: "$32.000",
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
      "Psicóloga clínica con postítulo en psicoanálisis relacional. Me especializo en la atención de adolescentes y adultos.",
    fullBio:
      "Psicóloga clínica con postítulo en psicoanálisis relacional. Me especializo en la atención de adolescentes y adultos. Mi enfoque terapéutico se basa en la importancia de las relaciones interpersonales en el desarrollo psicológico y emocional. Trabajo con personas que enfrentan dificultades en sus vínculos, problemas de identidad, trastornos del estado de ánimo y situaciones de crisis. Mi objetivo es crear un espacio seguro donde explorar y comprender las experiencias emocionales para promover el cambio y el crecimiento personal.",
    specialties: [
      "Psicoanálisis Relacional",
      "Adolescentes",
      "Adultos",
      "Vínculos Interpersonales",
      "Identidad",
      "Crisis",
    ],
    education: ["Postítulo en Psicoanálisis Relacional", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$46.000",
        fonasa: "$36.000",
        isapres: "$41.000",
      },
      followUp: {
        private: "$41.000",
        fonasa: "$31.000",
        isapres: "$36.000",
      },
      online: {
        private: "$37.000",
        fonasa: "$29.000",
        isapres: "$33.000",
      },
    },
  },
  {
    slug: "pilar-olmos-garcia",
    name: "PILAR OLMOS GARCÍA",
    role: "PSICÓLOGA",
    image: "/images/team/pilar-olmos.jpeg",
    fallbackImage: "/images/avatars/avatar-f6.png",
    description:
      "Psicóloga con más 20 años de experiencia en el área educacional, investigativa y clínica adultos, cuenta además con más de 3 años de experiencia en el área clínica de las adiciones.",
    fullBio:
      "Psicóloga con más 20 años de experiencia en el área educacional, investigativa y clínica adultos, cuenta además con más de 3 años de experiencia en el área clínica de las adiciones. Su amplia trayectoria le ha permitido desarrollar un enfoque integral que aborda las necesidades educativas, psicológicas y sociales de las personas. En el ámbito de las adicciones, trabaja con un modelo de reducción de daños y fortalecimiento de recursos personales. Su objetivo es acompañar a las personas en su proceso de recuperación y reinserción social.",
    specialties: ["Psicología Educacional", "Investigación", "Clínica Adultos", "Adicciones", "Reducción de Daños"],
    education: ["Especialización en Adicciones", "Licenciatura en Psicología"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$48.000",
        fonasa: "$38.000",
        isapres: "$43.000",
      },
      followUp: {
        private: "$43.000",
        fonasa: "$33.000",
        isapres: "$38.000",
      },
      online: {
        private: "$38.000",
        fonasa: "$30.000",
        isapres: "$35.000",
      },
    },
  },
  {
    slug: "margarita-loubat-oyarce",
    name: "MARGARITA LOUBAT OYARCE",
    role: "PSICÓLOGA",
    image: "/images/team/margarita-loubat.jpeg",
    fallbackImage: "/images/avatars/avatar-f7.png",
    description: "Doctora en Educación y Psicología. Universidad Central Universidad Paris V. (La Sorbonne)",
    fullBio:
      "Doctora en Educación y Psicología por la Universidad Central y la Universidad Paris V (La Sorbonne). Su formación académica internacional le ha permitido desarrollar un enfoque que integra perspectivas educativas y psicológicas. Cuenta con amplia experiencia en investigación, docencia y práctica clínica. Su trabajo se centra en el desarrollo de potencialidades y recursos personales, con especial énfasis en el ámbito educativo y el bienestar psicológico. Su objetivo es promover el aprendizaje significativo y el crecimiento personal.",
    specialties: ["Psicología Educativa", "Desarrollo Personal", "Bienestar Psicológico", "Aprendizaje Significativo"],
    education: [
      "Doctorado en Educación y Psicología (Universidad Central y Universidad Paris V)",
      "Licenciatura en Psicología",
    ],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$52.000",
        fonasa: "$42.000",
        isapres: "$47.000",
      },
      followUp: {
        private: "$47.000",
        fonasa: "$37.000",
        isapres: "$42.000",
      },
      online: {
        private: "$42.000",
        fonasa: "$34.000",
        isapres: "$38.000",
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
      "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Su enfoque es cognitivo-social.",
    fullBio:
      "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Su enfoque es cognitivo-social, integrando aspectos biológicos, psicológicos y sociales en el tratamiento de trastornos mentales. Especializada en trastornos del estado de ánimo, ansiedad y trastornos de personalidad. Combina intervenciones farmacológicas con psicoterapia para ofrecer un tratamiento integral. Su objetivo es ayudar a las personas a recuperar su equilibrio emocional y mejorar su calidad de vida.",
    specialties: [
      "Enfoque Cognitivo-Social",
      "Trastornos del Estado de Ánimo",
      "Ansiedad",
      "Trastornos de Personalidad",
      "Tratamiento Farmacológico",
    ],
    education: ["Doctorado en Psicoterapia", "Especialidad en Psiquiatría", "Medicina"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$65.000",
        fonasa: "$50.000",
        isapres: "$58.000",
      },
      followUp: {
        private: "$55.000",
        fonasa: "$45.000",
        isapres: "$50.000",
      },
      online: {
        private: "$50.000",
        fonasa: "$40.000",
        isapres: "$45.000",
      },
    },
  },
  {
    slug: "dra-alicia-figueroa",
    name: "DRA. ALICIA FIGUEROA",
    role: "PSIQUIATRA",
    image: "/images/team/alicia-figueroa.jpeg",
    fallbackImage: "/images/avatars/avatar-f9.png",
    description: "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo.",
    fullBio:
      "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo, combinando diferentes modelos terapéuticos según las necesidades de cada paciente. Como psiquiatra, integra el tratamiento farmacológico con intervenciones psicoterapéuticas para abordar trastornos mentales de manera integral. Especializada en trastornos del ánimo, ansiedad y trauma. Su objetivo es acompañar a las personas en su proceso de recuperación, promoviendo el bienestar emocional y la salud mental.",
    specialties: ["Enfoque Integrativo", "Trastornos del Ánimo", "Ansiedad", "Trauma", "Tratamiento Farmacológico"],
    education: ["Magister en Psicología Clínica", "Especialidad en Psiquiatría", "Medicina"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$68.000",
        fonasa: "$52.000",
        isapres: "$60.000",
      },
      followUp: {
        private: "$58.000",
        fonasa: "$46.000",
        isapres: "$52.000",
      },
      online: {
        private: "$52.000",
        fonasa: "$42.000",
        isapres: "$48.000",
      },
    },
  },
  {
    slug: "dra-mariana-nuno",
    name: "DRA. MARIANA NUÑO",
    role: "PSIQUIATRA",
    image: "/images/team/dra-mariana-nuno.webp",
    fallbackImage: "/images/avatars/avatar-f10.png",
    description: "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémicos.",
    fullBio:
      "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémico, que considera a la persona en el contexto de sus relaciones familiares y sociales. Como psiquiatra, integra el tratamiento farmacológico con intervenciones psicoterapéuticas, considerando el entorno familiar y social del paciente. Especializada en trastornos mentales graves, psicosis y trastornos del neurodesarrollo. Su objetivo es promover la recuperación y la inclusión social de las personas con trastornos mentales.",
    specialties: [
      "Enfoque Sistémico",
      "Trastornos Mentales Graves",
      "Psicosis",
      "Trastornos del Neurodesarrollo",
      "Tratamiento Farmacológico",
    ],
    education: ["Magister en Psicología Clínica", "Especialidad en Psiquiatría", "Medicina"],
    iframeSrc: "", // To be populated when available
    fees: {
      initial: {
        private: "$70.000",
        fonasa: "$55.000",
        isapres: "$62.000",
      },
      followUp: {
        private: "$60.000",
        fonasa: "$48.000",
        isapres: "$55.000",
      },
      online: {
        private: "$55.000",
        fonasa: "$45.000",
        isapres: "$50.000",
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
                      <p className="text-sm text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#015233] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Modalidad</p>
                      <p className="text-sm text-gray-600">Presencial y Online</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-5 w-5 text-[#015233] mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Tarifas</p>
                      <div className="mt-2 space-y-3">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs font-semibold text-[#015233] mb-1">Primera consulta</p>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <span className="text-gray-600">Particular:</span>
                            <span className="font-medium">{member.fees.initial.private}</span>
                            <span className="text-gray-600">FONASA:</span>
                            <span className="font-medium">{member.fees.initial.fonasa}</span>
                            <span className="text-gray-600">ISAPRES:</span>
                            <span className="font-medium">{member.fees.initial.isapres}</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs font-semibold text-[#015233] mb-1">Consulta de seguimiento</p>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <span className="text-gray-600">Particular:</span>
                            <span className="font-medium">{member.fees.followUp.private}</span>
                            <span className="text-gray-600">FONASA:</span>
                            <span className="font-medium">{member.fees.followUp.fonasa}</span>
                            <span className="text-gray-600">ISAPRES:</span>
                            <span className="font-medium">{member.fees.followUp.isapres}</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs font-semibold text-[#015233] mb-1">Consulta online</p>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <span className="text-gray-600">Particular:</span>
                            <span className="font-medium">{member.fees.online.private}</span>
                            <span className="text-gray-600">FONASA:</span>
                            <span className="font-medium">{member.fees.online.fonasa}</span>
                            <span className="text-gray-600">ISAPRES:</span>
                            <span className="font-medium">{member.fees.online.isapres}</span>
                          </div>
                        </div>
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
