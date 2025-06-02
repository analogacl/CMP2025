"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "STRESS",
      description: "Técnicas especializadas para el manejo efectivo del estrés y la ansiedad en la vida cotidiana.",
      image: "/images/services/stress-illustration.png",
      fallback: "/images/services/stress-illustration.png",
    },
    {
      title: "DEPRESIÓN POSPARTO",
      description: "Apoyo especializado para madres que enfrentan desafíos emocionales después del parto.",
      image: "/images/services/postpartum-illustration.png",
      fallback: "/images/services/postpartum-illustration.png",
    },
    {
      title: "TERCERA EDAD",
      description: "Atención integral para adultos mayores, abordando sus necesidades emocionales específicas.",
      image: "/images/services/elderly-illustration.png",
      fallback: "/images/services/elderly-illustration.png",
    },
    {
      title: "DEPRESIÓN BIPOLAR",
      description: "Tratamiento especializado para trastorno bipolar con enfoque integral y personalizado.",
      image: "/images/services/bipolar-illustration.png",
      fallback: "/images/services/bipolar-illustration.png",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-[#262626] text-center leading-tight">
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
