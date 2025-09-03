"use client"

import type React from "react"
import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  // Text carousel items
  const carouselTexts = ["ATENDEMOS POR FONASA E ISAPRES", "ATENDEMOS PRESENCIAL y ONLINE", "+30 años de experiencia"]

  // Handle scroll event to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Text carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length)
    }, 4000) // Change text every 4 seconds

    return () => clearInterval(interval)
  }, [carouselTexts.length])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Handle navigation with proper scroll behavior
  const handleNavigation = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()

      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }

      if (href === "/") {
        // Navigate to home page
        router.push("/")
      } else if (href.startsWith("/#")) {
        const sectionId = href.substring(2) // Remove "/#"

        if (pathname === "/") {
          // We're already on the home page, just scroll to section
          const element = document.getElementById(sectionId)
          if (element) {
            const headerHeight = 96
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
            // Update URL without page reload
            window.history.pushState(null, "", href)
          }
        } else {
          // We're on a different page, navigate to home page with hash
          router.push(href)
        }
      } else {
        // Regular navigation
        router.push(href)
      }
    },
    [isMenuOpen, pathname, router],
  )

  // Handle CTA button navigation to reserva with default iframe
  const handleReservaNavigation = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      router.push("/reserva")
    },
    [router],
  )

  // Format text with bold keywords
  const formatText = useCallback((text: string) => {
    const boldWords = ["FONASA", "ISAPRES", "PRESENCIAL", "ONLINE", "+30"]
    return text.split(" ").map((word, index) => {
      const isBold = boldWords.some((boldWord) => word.includes(boldWord))
      return (
        <span key={index} className={isBold ? "font-bold" : "font-medium"}>
          {word}
          {index < text.split(" ").length - 1 ? " " : ""}
        </span>
      )
    })
  }, [])

  const isTelemedicineRoute = pathname === "/teleconsulta"

  // Si estamos en la ruta de teleconsulta, no renderizar el navbar
  if (isTelemedicineRoute) {
    return null
  }

  return (
    <header
      className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Top bar with carousel */}
      <div className="bg-[#015233] text-white h-10 flex items-center justify-center relative overflow-hidden">
        <div className="carousel-container relative w-full h-full flex items-center justify-center">
          {carouselTexts.map((text, index) => (
            <div
              key={index}
              className={`carousel-item absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentTextIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: "translateY(0)" }} // Force position
            >
              <p className="text-sm tracking-wide text-center whitespace-nowrap m-0 p-0 leading-normal">
                {formatText(text)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            aria-label="Centro Médico Phillips - Página de inicio"
          >
            {/* <Image
              src="/images/logo-optima-salud-removebg-preview.png"
              alt="Optima Salud - Centro de Salud Mental"
              width={250}
              height={95}
              className="h-12 w-auto object-contain"
              priority
            /> */}
            <Image 
            src="/images/SmallLogo.jpg"
            alt="Centro Médico Phillips"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          /> 
        
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#262626] hover:text-[#015233] font-medium transition-all duration-300 text-sm tracking-wide uppercase relative group"
              onClick={(e) => handleNavigation(e, "/")}
            >
              <span className="relative z-10">Inicio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#015233] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#servicios"
              className="text-[#262626] hover:text-[#015233] font-medium transition-all duration-300 text-sm tracking-wide uppercase relative group"
              onClick={(e) => handleNavigation(e, "/#servicios")}
            >
              <span className="relative z-10">Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#015233] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#equipo"
              className="text-[#262626] hover:text-[#015233] font-medium transition-all duration-300 text-sm tracking-wide uppercase relative group"
              onClick={(e) => handleNavigation(e, "/#equipo")}
            >
              <span className="relative z-10">Equipo</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#015233] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#testimonios"
              className="text-[#262626] hover:text-[#015233] font-medium transition-all duration-300 text-sm tracking-wide uppercase relative group"
              onClick={(e) => handleNavigation(e, "/#testimonios")}
            >
              <span className="relative z-10">Testimonios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#015233] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contacto"
              className="text-[#262626] hover:text-[#015233] font-medium transition-all duration-300 text-sm tracking-wide uppercase relative group"
              onClick={(e) => handleNavigation(e, "/#contacto")}
            >
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#015233] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex">
            <button
              className="cta-button py-2.5 px-6 text-sm"
              onClick={handleReservaNavigation}
              aria-label="Reserva tu hora"
            >
              RESERVA TU HORA
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-[#262626] hover:text-[#015233] p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 space-y-4">
            <Link
              href="/"
              className="block text-[#262626] hover:text-[#015233] font-semibold transition-colors text-sm py-2"
              onClick={(e) => handleNavigation(e, "/")}
            >
              INICIO
            </Link>
            <Link
              href="/#servicios"
              className="block text-[#262626] hover:text-[#015233] font-semibold transition-colors text-sm py-2"
              onClick={(e) => handleNavigation(e, "/#servicios")}
            >
              SERVICIOS
            </Link>
            <Link
              href="/#equipo"
              className="block text-[#262626] hover:text-[#015233] font-semibold transition-colors text-sm py-2"
              onClick={(e) => handleNavigation(e, "/#equipo")}
            >
              EQUIPO
            </Link>
            <Link
              href="/#testimonios"
              className="block text-[#262626] hover:text-[#015233] font-semibold transition-colors text-sm py-2"
              onClick={(e) => handleNavigation(e, "/#testimonios")}
            >
              TESTIMONIOS
            </Link>
            <Link
              href="/#contacto"
              className="block text-[#262626] hover:text-[#015233] font-semibold transition-colors text-sm py-2"
              onClick={(e) => handleNavigation(e, "/#contacto")}
            >
              CONTACTO
            </Link>
            <button className="cta-button w-full py-3 px-6 text-sm mt-4" onClick={handleReservaNavigation}>
              RESERVA TU HORA
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

// Memoize the component to prevent unnecessary re-renders
const Navbar = memo(NavbarComponent)
export default Navbar
