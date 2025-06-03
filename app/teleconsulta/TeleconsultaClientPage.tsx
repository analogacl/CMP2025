"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Wifi, Sun, Volume2, Chrome, Maximize, Minimize } from "lucide-react"

export default function TeleconsultaClientPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const iframeContainerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = async () => {
    if (!iframeContainerRef.current) return

    try {
      if (!isFullscreen) {
        await iframeContainerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error)
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const fullscreenStyles = `
  .fullscreen-container:fullscreen {
    width: 100vw !important;
    height: 100vh !important;
    max-width: none !important;
    aspect-ratio: unset !important;
    border-radius: 0 !important;
  }
  .fullscreen-container:fullscreen iframe {
    border-radius: 0 !important;
  }
`

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fullscreenStyles }} />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" aria-label="Centro Médico Phillips - Página de inicio">
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
                <h1 className="text-xl font-bold text-[#262626]">Sala de Videollamados</h1>
              </div>

              {/* Back button */}
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#015233] bg-white border-2 border-[#015233] rounded-lg hover:bg-[#015233] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Volver a la página principal"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">VOLVER</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            {/* Page header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 md:hidden">Sala de Videollamados</h1>

              {/* Recommendations */}
            </div>

            {/* Video call iframe */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-[#262626]">Sala de Videollamados</h2>
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#015233] bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label={isFullscreen ? "Salir de pantalla completa" : "Ver en pantalla completa"}
                  >
                    {isFullscreen ? (
                      <>
                        <Minimize className="h-4 w-4" />
                        <span className="hidden sm:inline">Salir de pantalla completa</span>
                      </>
                    ) : (
                      <>
                        <Maximize className="h-4 w-4" />
                        <span className="hidden sm:inline">Pantalla completa</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div
                      ref={iframeContainerRef}
                      className={`relative bg-gray-100 rounded-lg overflow-hidden ${
                        isFullscreen ? "fullscreen-container" : ""
                      }`}
                      style={{ aspectRatio: "800/640" }}
                    >
                      <iframe
                        src="https://tokbox.com/embed/embed/ot-embed.js?embedId=e94ca780-e804-4e6a-a0b8-3c7d1405235a&room=CMP2025&iframe=true"
                        width="100%"
                        height="100%"
                        scrolling="auto"
                        allow="microphone; camera"
                        className="absolute inset-0 w-full h-full border-0"
                        title="Sala de Videollamados - Centro Médico Phillips"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8 mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-[#262626] mb-6">Para una mejor experiencia recomendamos:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Wifi className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-[#262626]">Conexión WiFi</p>
                    <p className="text-sm text-gray-600">Asegúrate de tener una conexión estable a internet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-[#262626]">Lugar luminoso</p>
                    <p className="text-sm text-gray-600">Prefiera un lugar luminoso para una mejor imagen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Volume2 className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-[#262626]">Lugar silencioso</p>
                    <p className="text-sm text-gray-600">Prefiera un lugar silencioso libre de distracciones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Chrome className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-[#262626]">Google Chrome</p>
                    <p className="text-sm text-gray-600">Prefiera Google Chrome. Evite Safari</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for help */}
            <div className="mt-6 bg-[#015233]/5 rounded-lg p-6">
              <h4 className="font-semibold text-[#262626] mb-3">¿Necesitas ayuda técnica?</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5626335519"
                  className="inline-flex items-center justify-center bg-[#015233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015233]/90 transition-colors"
                >
                  Llamar: +5626335519
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
