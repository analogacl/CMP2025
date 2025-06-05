"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, CalendarClock } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Función para manejar la navegación y cerrar el menú móvil
  const handleNavigation = (href: string) => {
    setIsMenuOpen(false)

    // Si es un enlace de anclaje en la misma página
    if (href.startsWith("#")) {
      const targetId = href.substring(1)

      if (pathname === "/") {
        // Ya estamos en la página principal, solo desplazamos al anclaje
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // Navegar a la página principal con el hash
        router.push(`/${href}`)
      }
    } else {
      // Navegación normal para otras páginas
      router.push(href)
    }
  }

  // Manejar scroll cuando llegamos desde otra página con hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analoga-logo-mini-4kYVzW9COsxlFNayBTBax9uG59GBVX.webp"
            alt="Analoga"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-auto ml-10">
          <button
            onClick={() => handleNavigation("/nosotros")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleNavigation("#features")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Soluciones
          </button>
          <button
            onClick={() => handleNavigation("/proyectos")}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Proyectos
          </button>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden flex items-center gap-2"
            onClick={() => handleNavigation("/agendar")}
          >
            <CalendarClock className="h-4 w-4" />
            Solicitar Auditoría
          </Button>
          <Button size="sm" onClick={() => handleNavigation("#contact")} className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4" />
            Conversemos
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden">
          <nav className="flex flex-col space-y-6 text-lg font-medium">
            <button
              className="transition-colors hover:text-primary text-left"
              onClick={() => handleNavigation("/nosotros")}
            >
              Nosotros
            </button>
            <button
              className="transition-colors hover:text-primary text-left"
              onClick={() => handleNavigation("#features")}
            >
              Soluciones
            </button>
            <button
              className="transition-colors hover:text-primary text-left"
              onClick={() => handleNavigation("/proyectos")}
            >
              Proyectos
            </button>
            <button
              className="hidden transition-colors hover:text-primary text-left"
              onClick={() => handleNavigation("/agendar")}
            >
              Agendar Consultoría
            </button>
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <Button className="w-full" onClick={() => handleNavigation("#contact")}>
              Conversemos
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

// Mantener la exportación por defecto para compatibilidad con el código existente
export default Navbar
