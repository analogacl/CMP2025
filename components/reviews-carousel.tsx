"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Rodrigo Marchant",
    company: "Lifecorp",
    text: "Todo impecable, simple ... levantaron mi ecommerce en tiempo record. Un 7 el equipo, lo recomiendo.",
    image: "/testimonial-rodrigo.jpeg", // Correct path to the image in the public folder
  },
  {
    id: 2,
    name: "Mario Maldonado",
    company: "Boykot Materiales de Arte",
    text: "Me ayudaron a levantar mi negocio online y escalarlo con SEO e integraciones a marketplaces. Recomendadisimo!!!",
    image: "/testimonial-mario.jpeg", // Correct path to the image in the public folder
  },
  {
    id: 3,
    name: "Dra. Graciela Rojas",
    company: "Centro Médico Phillips",
    text: "Muy buena disposición y gran compromiso. Me ayudaron a digitalizar mi consulta y ahora me es mas fácil todo.",
    image: "/testimonial-graciela.png", // Correct path to the image in the public folder
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleReviews, setVisibleReviews] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleReviews(1)
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2)
      } else {
        setVisibleReviews(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(reviews.length / visibleReviews)
  const maxIndex = Math.max(0, reviews.length - visibleReviews)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - visibleReviews))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + visibleReviews))
  }

  const currentSlide = Math.floor(currentIndex / visibleReviews) // Use Math.floor for 0-indexed slide

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-2xl font-bold sm:text-3xl md:text-4xl mb-6 overflow-hidden">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
              Lo Que Dicen Nuestros Clientes
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
            <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No solo tomes nuestra palabra - escucha a nuestros clientes satisfechos
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleReviews}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-none w-full px-2 md:w-1/2 lg:w-1/3"
                  style={{ width: `${100 / visibleReviews}%` }}
                >
                  <Card className="h-full bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20 shrink-0">
                          {review.image ? (
                            <Image
                              src={review.image || "/placeholder.svg"}
                              alt={`Foto de ${review.name}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes for better optimization
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs">
                              No img
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-lg text-slate-100">{review.name}</p>
                          <p className="text-sm text-slate-400">{review.company}</p>
                        </div>
                      </div>
                      <p className="mb-4 text-sm md:text-base italic text-slate-300 flex-grow">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="rounded-full border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
              aria-label="Reseñas anteriores"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === currentSlide ? "bg-primary" : "bg-slate-600"} transition-colors`}
                  onClick={() => setCurrentIndex(i * visibleReviews)}
                  aria-label={`Ir a diapositiva ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
              aria-label="Siguientes reseñas"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsCarousel
