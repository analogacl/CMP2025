"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedTitle from "@/components/animated-title"
import { useRouter, usePathname } from "next/navigation"

export default function CTA() {
  const router = useRouter()
  const pathname = usePathname()

  const handleContactClick = () => {
    if (pathname === "/") {
      // Ya estamos en la página principal, solo desplazamos al anclaje
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navegar a la página principal con el hash
      router.push("/#contact")
    }
  }

  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-16 px-4 text-center md:py-24 lg:py-32">
        <AnimatedTitle className="text-center">¿Estás listo para mejorar tu ecommerce?</AnimatedTitle>
        <p className="max-w-[42rem] text-sm leading-normal text-muted-foreground sm:text-base md:text-lg lg:text-xl">
          Auditoría gratis sobre tu ecommerce y recomendaciones personalizadas para mejorar tu tasa de conversión.
        </p>
        <Link href="/agendar">
          <Button size="lg" className="mt-4 w-full sm:w-auto">
            Solicitar Auditoría
          </Button>
        </Link>
      </div>
    </section>
  )
}
