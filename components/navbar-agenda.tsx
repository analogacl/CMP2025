"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const NavbarReservaComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const router = useRouter()

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

  // Handle back navigation
  const handleBackNavigation = useCallback(() => {
    router.push("/")
  }, [router])

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

  return (
    <header
      className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Top bar with carousel - same as main navbar */}
      <div className="bg-[#015233] text-white h-10 flex items-center justify-center relative overflow-hidden">
        <div className="carousel-container relative w-full h-full flex items-center justify-center">
          {carouselTexts.map((text, index) => (
            <div
              key={index}
              className={`carousel-item absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentTextIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: "translateY(0)" }}
            >
              <p className="text-sm tracking-wide text-center whitespace-nowrap m-0 p-0 leading-normal">
                {formatText(text)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified navigation bar for reserva page */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" onClick={handleBackNavigation} aria-label="Centro Médico Phillips - Página de inicio">
            <Image
              src="/images/SmallLogo.jpg"
              alt="Centro Médico Phillips"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Page title - centered */}
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-[#262626]">Reserva tu Hora</h1>
          </div>

          {/* Back button */}
          <button
            onClick={handleBackNavigation}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#015233] bg-white border-2 border-[#015233] rounded-lg hover:bg-[#015233] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Volver a la página principal"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">VOLVER</span>
          </button>
        </div>
      </div>
    </header>
  )
}

// Memoize the component to prevent unnecessary re-renders
const NavbarReserva = memo(NavbarReservaComponent)
export default NavbarReserva
