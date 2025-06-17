"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter()

  const handleReservaClick = () => {
    router.push("/reserva")
  }

  return (
    <section className="py-16 bg-[#015233]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comienza tu camino hacia el bienestar hoy mismo
          </h2>
          <p className="text-xl text-white/90 mb-8 font-normal leading-relaxed">
            Nuestro equipo de profesionales está listo para ayudarte a mejorar tu calidad de vida
          </p>
          <Button
            size="lg"
            className="bg-[#B8E399] text-[#015233] hover:bg-[#B8E399]/90 font-semibold text-base"
            onClick={handleReservaClick}
          >
            RESERVA TU HORA AHORA
          </Button>
        </div>
      </div>
    </section>
  )
}
