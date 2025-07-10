"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Team() {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState<"all" | "psicologia" | "psiquiatria">("all")

  // Team members data
  const team = [
    // Psicólogos
    {
      name: "CAROLINA ARNÉS",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/carolina-arnes.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Psicóloga especializada en psicoterapia en personas con problemas de adicciones",
      slug: "carolina-arnes",
    },
    {
      name: "JOCELYN CALDERÓN CÁCERES",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/jocelyn-calderon-caceres-psicologa.webp",
      fallbackImage: "/images/avatars/avatar-f5.png",
      description:
        "Psicoterapeuta de adultos, especializada en psicoanálisis relacional.",
      slug: "jocelyn-calderon-caceres",
    },
    {
      name: "LILIANA CANILEO",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/liliana-canileo.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Realiza diagnóstico de salud mental estructurado y psicoterapia con enfoque de género.",
      slug: "liliana-canileo",
    },
    {
      name: "VALENTÍN FARÍAS",
      role: "PSICÓLOGO",
      category: "psicologia",
      image: "/images/team/valentin-farias.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Realiza diagnóstico de salud mental estructurado y psicoterapia basada en el autoconocimiento.",
      slug: "valentin-farias",
    },
    {
      name: "DENISE GERBER",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/denise-gerber-psicologa.webp",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Doctora en psicoterapia y Magister en neurociencias. Experta en psicoterapia de adultos con certificación EMDR.",
      slug: "denise-gerber",
    },
    {
      name: "JOSÉ MANUEL GONZÁLEZ",
      role: "PSICÓLOGO",
      category: "psicologia",
      image: "/images/team/jose-manuel-gonzalez-psicologo.webp",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description:
        "Psicólogo clínico con 30 años de experiencia, especializado en tratamientos de duelos y traumas con enfoque relacional. Experto en evaluaciones de personalidad.",
      slug: "jose-manuel-gonzalez",
    },
    {
      name: "LEONOR IRARRÁZAVAL",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/leonor-irarrazaval-psicologa.webp",
      fallbackImage: "/images/avatars/avatar-f1.png",
      description:
        "Doctora en psicoterapia. Experta en tratamientos psicológicos de adultos con enfoque cognitivo social.",
      slug: "leonor-irarrazaval",
    },
    {
      name: "IGNACIA LEAL",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/ignacia-leal.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Realiza diagnóstico de salud mental estructurado y psicoterapia en todas las etapas de la vida a partir de la adolescencia.",
      slug: "ignacia-leal",
    },
    {
      name: "MARGARITA LOUBAT OYARCE",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/margarita-loubat.webp",
      fallbackImage: "/images/avatars/avatar-f7.png",
      description:
        "Doctora en Educación y Psicología, con formación avanzada en psicología clínica para tratamientos psicológicos de adultos y adolescentes.",
      slug: "margarita-loubat-oyarce",
    },
    {
      name: "MAKARENA MORRIS",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/makarena-morris-psicologa.webp",
      fallbackImage: "/images/avatars/avatar-f6.png",
      description:
        "Psicóloga especializada en psicoterapia en todas las etapas de la vida. Realiza evaluaciones neuropsicológicas y de personalidad.",
      slug: "makarena-morris",
    },
    {
      name: "IGNACIO RIOS",
      role: "PSICÓLOGO",
      category: "psicologia",
      image: "/images/team/ignacio-rios.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Realiza diagnóstico de salud mental estructurado y psicoterapia a adolescentes y adultos con enfoque cognitivo conductual y sistémico..",
      slug: "ignacio-rios",
    },
    {
      name: "SUSANA ROMERO A.",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/susana-romero-psicologa.webp",
      fallbackImage: "/images/avatars/avatar-f2.png",
      description:
        "Magíster en psicología clínica . Experta en tratamientos psicológicos individuales y de pareja con enfoque integrativo.",
      slug: "susana-romero-a",
    },
    {
      name: "ALFONSO SALDIA",
      role: "PSICÓLOGO",
      category: "psicologia",
      image: "/images/team/alfonso-saldia.webp",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Realiza diagnóstico de salud mental estructurado y psicoterapia a adolescentes y adultos con enfoque cognitivo conductual y sistémico..",
      slug: "alfonso-saldia",
    },
    {
      name: "WILSA SZABO LAGOS",
      role: "PSICÓLOGA",
      category: "psicologia",
      image: "/images/team/wilsa-szabo.jpeg",
      fallbackImage: "/images/avatars/avatar-f3.png",
      description:
        "Magíster y doctora en psicoterapia. Experta en psicoterapia de adultos y adolescentes con enfoque cognitivo social.",
      slug: "wilsa-szabo-lagos",
    },
    {
      name: "CRISTIÁN UGARTE",
      role: "PSICÓLOGO",
      category: "psicologia",
      image: "/images/team/cristian-ugarte-psicologo.webp",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description:
        "Psicólogo clínico. Experto en tratamientos psicológicos de adolescentes y adultos con enfoque psicoanalítico. Experto en conflictos laborales.",
      slug: "cristian-ugarte",
    },
    // Psiquiatras
    {
      name: "DRA. ALICIA FIGUEROA",
      role: "PSIQUIATRA",
      category: "psiquiatria",
      image: "/images/team/dra-alicia-figueroa.webp",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Magister en Neurociencias Experta en diagnósticos y tratamientos psiquiátricos del adulto.",
      slug: "dra-alicia-figueroa",
    },
    {
      name: "DR. EDUARD HEBERLEIN",
      role: "PSIQUIATRA",
      category: "psiquiatria",
      image: "/images/team/dr-eduard-heberlein.webp",
      fallbackImage: "/images/avatars/avatar-m1.png",
      description: "Experto en diagnósticos y tratamientos psiquiátricos del adulto.",
      slug: "dr-eduard-heberlein",
    },
    {
      name: "DRA. GRACIELA ROJAS",
      role: "PSIQUIATRA",
      category: "psiquiatria",
      image: "/images/team/graciela-rojas.jpeg",
      fallbackImage: "/images/avatars/avatar-f8.png",
      description:
        "Doctora en Medicina .Experta en diagnósticos y tratamientos psiquiátricos del adulto.",
      slug: "dra-graciela-rojas",
    },
    
  ]

  // Filter team members based on active filter
  const filteredTeam = team.filter((member) => activeFilter === "all" || member.category === activeFilter)

  // Count professionals by category
  const psicologosCount = team.filter((member) => member.category === "psicologia").length
  const psiquiatrasCount = team.filter((member) => member.category === "psiquiatria").length

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">NUESTRO EQUIPO</h2>
          <p className="text-gray-600 mb-8">
            Contamos con un equipo multidisciplinario de profesionales altamente calificados y comprometidos con tu
            bienestar mental y emocional.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-[#015233] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos ({team.length})
            </button>
            <button
              onClick={() => setActiveFilter("psicologia")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "psicologia"
                  ? "bg-[#015233] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Psicólogos ({psicologosCount})
            </button>
            <button
              onClick={() => setActiveFilter("psiquiatria")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "psiquiatria"
                  ? "bg-[#015233] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Psiquiatras ({psiquiatrasCount})
            </button>
          </div>
        </div>

        {/* Category headers when filtered */}
        {(activeFilter === "all" || activeFilter === "psicologia") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#015233] mb-6 text-center">Psicólogos</h3>
          </div>
        )}

        {/* Psychologists grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredTeam
            .filter((member) => member.category === "psicologia")
            .map((member, index) => (
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

        {/* Psychiatrists section - only show header in "all" mode or when psychiatrists are selected */}
        {(activeFilter === "all" || activeFilter === "psiquiatria") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#015233] mb-6 text-center">Psiquiatras</h3>
          </div>
        )}

        {/* Psychiatrists grid - only show in "all" or "psiquiatria" mode */}
        {(activeFilter === "all" || activeFilter === "psiquiatria") && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeam
              .filter((member) => member.category === "psiquiatria")
              .map((member, index) => (
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
        )}

        {/* No results message */}
        {filteredTeam.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No se encontraron profesionales con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  )
}
