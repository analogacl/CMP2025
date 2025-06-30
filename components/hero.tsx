"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function Hero() {
  const router = useRouter()

  const handleReservaClick = useCallback(() => {
    router.push("/reserva")
  }, [router])

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Hero background with new image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-woman-joy.webp"
          alt="Mujer joven sonriendo al aire libre - Bienestar y felicidad en Centro Médico Phillips"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
           priority 
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-white">
            {/* Main heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(184, 227, 153, 0.3)",
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))",
              }}
            >
              BIENESTAR Y FELICIDAD
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed font-medium max-w-3xl">
              Un equipo multidisciplinario de expertos que te ayudará a mejorar tu calidad de vida.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-center">
              <button
                className="bg-[#015233] hover:bg-[#015233]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={handleReservaClick}
                aria-label="Reserva tu hora ahora"
              >
                RESERVA TU HORA
              </button>

              {/* Additional info */}
              <div className="flex flex-col text-sm text-white/90">
                <span className="font-medium">✓ Atención presencial y online</span>
                <span className="font-medium">✓ FONASA e ISAPRES</span>
                <span className="font-medium">✓ +30 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
