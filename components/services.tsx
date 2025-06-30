"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "PSICOTERAPIA INDIVIDUAL",
      description:
        "Apoyo personalizado para superar dificultades emocionales y fomentar el autoconocimiento y bienestar.",
      image: "/images/services/terapia-individual.webp",
      fallback: "/therapy-session.png",
    },
    {
      title: "TERAPIA FAMILIAR",
      description:
        "Mejora la comunicación y los vínculos familiares con apoyo profesional y enfoque sistémico.",
      image: "/images/services/terapia-de-familia.webp",
      fallback: "/family-therapy-group.png",
    },
    {
      title: "TERAPIA DE PAREJA",
      description:
        "Fortalece el vínculo afectivo y resuelve conflictos a través de herramientas comunicacionales.",
      image: "/images/services/terapia-de-pareja.webp",
      fallback: "/couple-therapy-session.png",
    },
    {
      title: "DIAGNÓSTICO Y TRATAMIENTO PSIQUIÁTRICO",
      description:
        "Evaluación clínica para detectar trastornos mentales y definir un plan terapéutico con o sin fármacos.",
      image: "/images/services/tratamiento-psiquiatria.webp",
      fallback: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "TEST PSICOLÓGICOS",
      description:
        "Evaluaciones que identifican aspectos emocionales, conductuales y cognitivos para apoyar el diagnóstico.",
      image: "/images/services/test-psicologicos.webp",
      fallback: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "TERAPIA OCUPACIONAL",
      description:
        "Intervención para recuperar o mantener habilidades que permiten participar en actividades significativas.",
      image: "/images/services/terapia-ocupacional.webp",
      fallback: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-6">Nuestros Servicios</h2>
          <p className="text-lg text-[#262626] mb-6 leading-relaxed">
            Accede a un equipo de <span className="font-semibold">Psicólogos y Psiquiatras</span> experimentados
            dedicados a mejorar tu calidad de vida a través de terapias basadas en evidencia y efectivas. 
          </p>
          <p className="text-lg text-[#262626] mb-8 leading-relaxed">
            Ayudamos a las personas a navegar y superar situaciones complejas de la vida. Nuestras áreas de enfoque
            incluyen:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
            >
              <div className="h-48 sm:h-56 relative overflow-hidden bg-white">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`Ilustración de ${service.title}`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (target.src !== service.fallback) {
                      target.src = service.fallback
                    }
                  }}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-[#262626] text-center leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <p className="text-[#262626] text-sm text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#262626] mb-4">
              ¿Listo para comenzar tu proceso de bienestar?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo multidisciplinario está preparado para acompañarte en cada paso hacia una mejor calidad de
              vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#equipo"
                className="cta-button-secondary py-3 px-6 text-base"
                onClick={(e) => {
                  e.preventDefault()
                  const targetElement = document.getElementById("equipo")
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop - 96,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                CONOCE NUESTRO EQUIPO
              </a>
              <a href="/reserva" className="cta-button py-3 px-6 text-base">
                RESERVA TU HORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
