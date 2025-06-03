"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"
import { ArrowLeft, Wifi, Sun, Volume2, Chrome, Maximize, Minimize, AlertCircle, RefreshCw } from "lucide-react"

export default function TeleconsultaPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [errorDetails, setErrorDetails] = useState<string>("")
  const [retryCount, setRetryCount] = useState(0)
  const [loadingTime, setLoadingTime] = useState(0)
  const iframeContainerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loadStartTime = useRef<number>(Date.now())

  // Enhanced iframe URL with additional parameters for better compatibility
  const tokboxUrl =
    "https://tokbox.com/embed/embed/ot-embed.js?embedId=e94ca780-e804-4e6a-a0b8-3c7d1405235a&room=CMP2025&iframe=true&autoplay=1&controls=1"

  const toggleFullscreen = useCallback(async () => {
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
      setErrorDetails(`Fullscreen error: ${error}`)
    }
  }, [isFullscreen])

  const handleIframeLoad = useCallback(() => {
    const endTime = Date.now()
    setLoadingTime(endTime - loadStartTime.current)
    setIframeLoaded(true)
    setIframeError(false)
    setErrorDetails("")
    console.log(`✅ Tokbox iframe loaded successfully in ${endTime - loadStartTime.current}ms`)
  }, [])

  const handleIframeError = useCallback((error: any) => {
    setIframeError(true)
    setIframeLoaded(false)
    const errorMsg = error?.message || error?.type || "Unknown iframe error"
    setErrorDetails(errorMsg)
    console.error("❌ Tokbox iframe failed to load:", error)
  }, [])

  const retryIframe = useCallback(() => {
    if (iframeRef.current) {
      setRetryCount((prev) => prev + 1)
      setIframeError(false)
      setIframeLoaded(false)
      setErrorDetails("")
      loadStartTime.current = Date.now()

      // Force reload by changing src
      const currentSrc = iframeRef.current.src
      iframeRef.current.src = ""
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc
        }
      }, 100)
    }
  }, [])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Set loading timeout
  useEffect(() => {
    loadStartTime.current = Date.now()

    const timeout = setTimeout(() => {
      if (!iframeLoaded && !iframeError) {
        setIframeError(true)
        setErrorDetails("Iframe loading timeout (30 seconds)")
      }
    }, 30000)

    return () => clearTimeout(timeout)
  }, [retryCount, iframeLoaded, iframeError])

  // Check browser compatibility
  const getBrowserCompatibility = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes("chrome")) return { browser: "Chrome", compatible: true }
    if (userAgent.includes("firefox")) return { browser: "Firefox", compatible: true }
    if (userAgent.includes("safari") && !userAgent.includes("chrome")) return { browser: "Safari", compatible: false }
    if (userAgent.includes("edge")) return { browser: "Edge", compatible: true }
    return { browser: "Unknown", compatible: false }
  }

  const browserInfo = getBrowserCompatibility()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

            {/* Action buttons */}
            <div className="flex items-center gap-2">
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
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Browser compatibility warning */}
          {!browserInfo.compatible && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8 mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-semibold text-yellow-800">Navegador no recomendado</h3>
              </div>
              <p className="text-yellow-700 mt-2">
                Estás usando {browserInfo.browser}. Para una mejor experiencia, recomendamos usar Google Chrome o
                Firefox.
              </p>
            </div>
          )}

          {/* Video call iframe */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
            <div className="p-6">
              <div className="flex justify-end items-center gap-2 mb-4">
                {iframeError && (
                  <button
                    onClick={retryIframe}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Reintentar
                  </button>
                )}
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
                <div className="w-full">
                  <div
                    ref={iframeContainerRef}
                    className={`relative bg-gray-100 rounded-lg overflow-hidden w-full ${
                      isFullscreen ? "fullscreen-container" : "h-[60vh] min-h-[400px] max-h-[800px]"
                    }`}
                  >
                    {/* Loading indicator */}
                    {!iframeLoaded && !iframeError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <div className="text-center">
                          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#015233] border-r-transparent"></div>
                          <p className="mt-4 text-gray-600">Cargando sala de videollamados...</p>
                          <p className="text-sm text-gray-500 mt-2">Esto puede tomar unos segundos</p>
                        </div>
                      </div>
                    )}

                    {/* Error state */}
                    {iframeError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <div className="text-center p-6 max-w-md">
                          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error al cargar la videollamada</h3>
                          <p className="text-gray-600 mb-4">No se pudo cargar la sala de videollamados.</p>
                          {errorDetails && (
                            <p className="text-sm text-red-600 mb-4 font-mono bg-red-50 p-2 rounded">{errorDetails}</p>
                          )}
                          <div className="space-y-3">
                            <button
                              onClick={retryIframe}
                              className="w-full bg-[#015233] text-white px-6 py-2 rounded-lg hover:bg-[#015233]/90 transition-colors"
                            >
                              Reintentar conexión
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Iframe */}
                    <iframe
                      ref={iframeRef}
                      src={tokboxUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="microphone; camera; autoplay; encrypted-media; fullscreen; display-capture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      title="Sala de Videollamados - Centro Médico Phillips"
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation-by-user-activation"
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
                  <p className="font-medium text-[#262626]">Conexión WiFi estable</p>
                  <p className="text-sm text-gray-600">Asegúrate de tener una conexión estable a internet</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sun className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium text-[#262626]">Lugar bien iluminado</p>
                  <p className="text-sm text-gray-600">Prefiera un lugar luminoso para una mejor imagen</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Volume2 className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium text-[#262626]">Ambiente silencioso</p>
                  <p className="text-sm text-gray-600">Prefiera un lugar silencioso libre de distracciones</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Chrome className="h-6 w-6 text-[#015233] mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium text-[#262626]">Google Chrome recomendado</p>
                  <p className="text-sm text-gray-600">Prefiera Google Chrome. Evite Safari</p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-yellow-800 mb-3">¿Problemas para conectar?</h4>
            <div className="text-sm text-yellow-700 space-y-2">
              <p>• Desactive temporalmente su bloqueador de anuncios</p>
              <p>• Permita el acceso a cámara y micrófono cuando se solicite</p>
              <p>• Actualice su navegador a la última versión</p>
              <p>• Intente en una ventana de incógnito/privada</p>
              <p>• Verifique que no haya firewall corporativo bloqueando tokbox.com</p>
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
              <a
                href="mailto:info@centromedicophillips.cl"
                className="inline-flex items-center justify-center bg-white text-[#015233] border-2 border-[#015233] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal footer only for teleconsulta */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Centro Médico Phillips. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}
