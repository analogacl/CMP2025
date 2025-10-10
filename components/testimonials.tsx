"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Atención de excelencia la atención de la profesional de muy buen trato y calidez, la secretaria maravillosamente atenta y buena voluntad",
      author: "Ana Maria O.",
      date: "12-06-2025",
    },
    {
      quote: "Excelentes profesionales, desde las secretarias a los doctores",
      author: "Claudia F.",
      date: "23-05-2025",
    },
    {
      quote: "Muy buena atención, 💯 recomendable 🥰",
      author: "Daniela",
      date: "02-12-2024",
    },
    {
      quote: "Excelente atención muchas gracias por escucharme",
      author: "Hugo C",
      date: "28-07-2025",
    },
    {
      quote: "Estoy muy agradecida por su atención. Fué dentro del horario estipulado y en todo momento me sentí muy cómoda. Muchas gracias 😊",
      author: "María Angelica",
      date: "05-11-2024",
    },
    {
      quote: "Todos en el centro me han hecho sentir segura y acogida. Se nota el interés y la preocupación real por sus pacientes. No tengo más que elogios y gratitud por todos.",
      author: "María José A",
      date: "19-11-2024",
    },
    {
      quote: "Excelente desde la secretaria, hasta los profesionales.",
      author: "Mónica",
      date: "31-03-2025",
    },
    {
      quote: "Agradecida de encontrar escucha, contención, en un ambiente distendido.",
      author: "Patricia",
      date: "23-01-2025",
    },
    {
      quote: "Excelentes profesionales tiempo dedicado atenciones escucha y explicacion realmemte apoyo y ayuda al paciente",
      author: "Psicilla F.",
      date: "07-11-2024",
    },
    {
      quote: "Mis comentarios solo pueden ser favorables. La atención ha sido valiosa y oportuna. Y la dedicación y preocupación de las profesionales que me han atendido ha sido invaluable.",
      author: "Rosa",
      date: "30-12-2024",
    },
    {
      quote: "Muy agradecida de la atención de la profesional y del personal administrativo",
      author: "Veronica G",
      date: "27-06-2025",
    },
  ]

  // Dividir testimonios en dos filas
  const rowSize = Math.ceil(testimonials.length / 2)
  const firstRow = testimonials.slice(0, rowSize)
  const secondRow = testimonials.slice(rowSize)

  // Configurar carrusel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  // Renderizar estrellas
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
      )
    }

    return stars
  }

  return (
    <section id="testimonios" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con título */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#262626] mb-6 md:mb-8">TESTIMONIOS</h2>
          
          {/* Rating Section */}
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center gap-1 md:gap-2">
              {renderStars(4.9)}
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#015233]">4.9/5</p>
              <p className="text-base md:text-lg text-[#262626]/70 mt-2">
                Basado en <span className="font-semibold text-[#015233]">+200 evaluaciones</span>
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 -ml-2 md:-ml-6"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#015233]" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 -mr-2 md:-mr-6"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#015233]" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Crear slides - cada slide contiene 2 filas */}
              {firstRow.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  {/* Grid de 2 filas */}
                  <div className="grid grid-rows-2 gap-4 md:gap-6">
                    {/* Fila 1 */}
                    {firstRow[slideIndex] && (
                      <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 h-full min-h-[200px] md:min-h-[240px] flex flex-col">
                        <CardHeader className="pb-3">
                          <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#015233]/30" />
                        </CardHeader>
                        <CardContent className="flex-grow pb-3">
                          <p className="text-[#262626] italic leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-4">
                            "{firstRow[slideIndex].quote}"
                          </p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start pt-3">
                          <p className="font-bold text-[#262626] text-sm md:text-base">{firstRow[slideIndex].author}</p>
                          <p className="text-xs md:text-sm text-[#262626]/70">{firstRow[slideIndex].date}</p>
                        </CardFooter>
                      </Card>
                    )}

                    {/* Fila 2 */}
                    {secondRow[slideIndex] && (
                      <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 h-full min-h-[200px] md:min-h-[240px] flex flex-col">
                        <CardHeader className="pb-3">
                          <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#015233]/30" />
                        </CardHeader>
                        <CardContent className="flex-grow pb-3">
                          <p className="text-[#262626] italic leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-4">
                            "{secondRow[slideIndex].quote}"
                          </p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start pt-3">
                          <p className="font-bold text-[#262626] text-sm md:text-base">{secondRow[slideIndex].author}</p>
                          <p className="text-xs md:text-sm text-[#262626]/70">{secondRow[slideIndex].date}</p>
                        </CardFooter>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#262626]/60">
            Testimonios reales de nuestros pacientes
          </p>
        </div>
      </div>
    </section>
  )
}
