import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Team() {
  const team = [
    // Psicólogas
    {
      name: "LEONOR IRARRÁZAVAL",
      role: "PSICÓLOGA",
      image: "/images/team/leonor-irarrazaval.jpeg",
      fallbackImage: "/images/avatars/avatar-f1.png",
      description:
        "Experta en enfoque cognitivo-social y tratamiento de trastornos psicológicos y psiquiátricos en adultos.",
      slug: "leonor-irarrazaval",
    },
    {
      name: "SUSANA ROMERO A.",
      role: "PSICÓLOGA",
      image: "/images/avatars/susana-romero-professional.jpg",
      fallbackImage: "/images/avatars/avatar-f2.png",
      description:
        "Magíster en psicología clínica con enfoque integrativo, experta en el abordaje de ansiedad, crisis personales, duelo, autoestima y conflictos laborales.",
      slug: "susana-romero-a",
    },
    {
      name: "WILSA SZABO LAGOS",
      role: "PSICÓLOGA",
      image: "/images/team/wilsa-szabo.jpeg",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Magíster y doctora en psicoterapia, experta en enfoque constructivista cognitivo para tratar trastornos emocionales y promover bienestar en adultos y adolescentes.",
      slug: "wilsa-szabo-lagos",
    },
    {
      name: "MARGARITA LOUBAT OYARCE",
      role: "PSICÓLOGA",
      image: "/images/team/margarita-loubat.jpeg",
      fallbackImage: "/images/avatars/avatar-f7.png",
      description:
        "Doctora en Educación y Psicología, con formación avanzada en psicología clínica en universidades de Francia y España.",
      slug: "margarita-loubat-oyarce",
    },
    {
      name: "JOCELYN CALDERÓN CÁCERES",
      role: "PSICÓLOGA",
      image: "/images/team/jocelyn-calderon.jpeg",
      fallbackImage: "/images/avatars/avatar-f5.png",
      description:
        "Especializada en psicoanálisis relacional, enfocada en trastornos emocionales y restaurar el bienestar integral.",
      slug: "jocelyn-calderon-caceres",
    },
    {
      name: "CRISTIÁN UGARTE",
      role: "PSICÓLOGO",
      image: "/images/avatars/avatar-m1.png",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description:
        "Psicólogo clínico con enfoque psicoanalítico y experiencia en psicoterapia y temas laborales, especializado en conflictos personales, familiares y de pareja.",
      slug: "cristian-ugarte",
    },
    {
      name: "MAKARENA MORRIS",
      role: "PSICÓLOGA",
      image: "/images/avatars/avatar-f6.png",
      fallbackImage: "/images/avatars/avatar-f6.png",
      description:
        "Psicóloga especializada en psicoterapia, neuropsicología y evaluación de personalidad, con experiencia en trastornos emocionales, crisis vitales, familiares y parentales.",
      slug: "makarena-morris",
    },
    {
      name: "DENISE GERBER",
      role: "PSICÓLOGA",
      image: "/images/avatars/avatar-f8.png",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Psicóloga titulada de la Universidad de Chile, Doctorada en Psicoterapia y un Máster en neurociencias cognitivas en la University College London.",
      slug: "denise-gerber",
    },
    {
      name: "JOSÉ MANUEL GONZÁLEZ",
      role: "PSICÓLOGO",
      image: "/images/avatars/avatar-m1.png",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description:
        "Psicólogo clínico con 30 años de experiencia, especializado en duelo, trauma y evaluaciones de personalidad desde un enfoque relacional.",
      slug: "jose-manuel-gonzalez",
    },
    // Psiquiatras
    {
      name: "DRA. GRACIELA ROJAS",
      role: "PSIQUIATRA",
      image: "/images/team/graciela-rojas.jpeg",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Psiquiatra y doctora en psicoterapia, con enfoque cognitivo-social, especializada en el tratamiento de trastornos psiquiátricos en adultos.",
      slug: "dra-graciela-rojas",
    },
    {
      name: "DR. EDUARD HEBERLEIN",
      role: "PSIQUIATRA",
      image: "/images/avatars/avatar-m1.png",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description: "Especialista en Psiquiatría Adultos de la Universidad de Chile.",
      slug: "dr-eduard-heberlein",
    },
  ]

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">NUESTRO EQUIPO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role} en Centro Médico Phillips`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-[#262626] leading-tight">{member.name}</CardTitle>
                <CardDescription className="text-[#015233] font-semibold text-sm uppercase">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-[#262626] text-sm mb-6 leading-relaxed">{member.description}</p>
                <div className="mt-auto pt-4 flex justify-center">
                  <Link href={`/equipo/${member.slug}`}>
                    <button className="cta-button-secondary group">
                      VER MÁS
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
