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
      description: "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta.",
      slug: "leonor-irarrazaval",
    },
    {
      name: "SUSANA ROMERO A.",
      role: "PSICÓLOGA",
      image: "/images/avatars/susana-romero-professional.jpg",
      fallbackImage: "/images/avatars/avatar-f2.png",
      description: "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo.",
      slug: "susana-romero-a",
    },
    {
      name: "WILSA SZABO LAGOS",
      role: "PSICÓLOGA",
      image: "/images/team/wilsa-szabo.jpeg",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Magister en psicóloga clínica, doctora en psicoterapia y una psicoterapeuta experimentada. Su enfoque es constructivista cognitivo.",
      slug: "wilsa-szabo-lagos",
    },
    {
      name: "MARÍA JESUS RIADE",
      role: "PSICÓLOGA",
      image: "/images/team/maria-jesus-riade.jpeg",
      fallbackImage: "/images/avatars/avatar-f4.png",
      description: "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémico.",
      slug: "maria-jesus-riade",
    },
    {
      name: "MAXIMILIANO LUCAS ARANGUIZ",
      role: "PSICÓLOGO",
      image: "/images/team/maximiliano-aranguiz.jpeg",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description:
        "Psicólogo, diplomado en clínica con enfoque integral. Atiendo a personas desde los 5 años hasta adulto mayor.",
      slug: "maximiliano-lucas-aranguiz",
    },
    {
      name: "JOCELYN CALDERÓN CÁCERES",
      role: "PSICÓLOGA",
      image: "/images/team/jocelyn-calderon.jpeg",
      fallbackImage: "/images/avatars/avatar-f5.png",
      description:
        "Psicóloga clínica con postítulo en psicoanálisis relacional. Me especializo en la atención de adolescentes y adultos.",
      slug: "jocelyn-calderon-caceres",
    },
    {
      name: "PILAR OLMOS GARCÍA",
      role: "PSICÓLOGA",
      image: "/images/team/pilar-olmos.jpeg",
      fallbackImage: "/images/avatars/avatar-f6.png",
      description:
        "Psicóloga con más 20 años de experiencia en el área educacional, investigativa y clínica adultos, cuenta además con más de 3 años de experiencia en el área clínica de las adiciones.",
      slug: "pilar-olmos-garcia",
    },
    {
      name: "MARGARITA LOUBAT OYARCE",
      role: "PSICÓLOGA",
      image: "/images/team/margarita-loubat.jpeg",
      fallbackImage: "/images/avatars/avatar-f7.png",
      description: "Doctora en Educación y Psicología. Universidad Central Universidad Paris V. (La Sorbonne)",
      slug: "margarita-loubat-oyarce",
    },
    // Psiquiatras
    {
      name: "DRA. GRACIELA ROJAS",
      role: "PSIQUIATRA",
      image: "/images/team/graciela-rojas.jpeg",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Doctorada en psicoterapia y psicóloga clínica con una larga experiencia como psicoterapeuta. Su enfoque es cognitivo-social.",
      slug: "dra-graciela-rojas",
    },
    {
      name: "DRA. ALICIA FIGUEROA",
      role: "PSIQUIATRA",
      image: "/images/team/alicia-figueroa.jpeg",
      fallbackImage: "/images/avatars/avatar-f9.png",
      description: "Magister en psicología clínica y una psicoterapeuta experimentada. Su enfoque es integrativo.",
      slug: "dra-alicia-figueroa",
    },
    {
      name: "DRA. MARIANA NUÑO",
      role: "PSIQUIATRA",
      image: "/images/team/dra-mariana-nuno.webp",
      fallbackImage: "/images/avatars/avatar-f10.png",
      description: "Magister en psicología clínica. Es una psicoterapeuta experimentada con un enfoque sistémicos.",
      slug: "dra-mariana-nuno",
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
