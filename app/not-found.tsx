import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft, Search, Phone, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header with logo */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#015233] bg-white border-2 border-[#015233] rounded-lg hover:bg-[#015233] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">VOLVER AL INICIO</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 illustration */}
          <div className="mb-8">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#015233]/10 to-[#B8E399]/20 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl sm:text-8xl font-bold text-[#015233] mb-2">404</h1>
                  <div className="w-16 h-1 bg-[#B8E399] mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262626] mb-4">Página no encontrada</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Lo sentimos, la página que estás buscando no existe o ha sido movida. Puede que el enlace esté roto o que
              hayas escrito mal la dirección.
            </p>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              No te preocupes, puedes volver al inicio o explorar nuestros servicios de salud mental.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#015233] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#015233]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Home className="h-5 w-5 mr-2" />
              VOLVER AL INICIO
            </Link>
            <Link
              href="/#servicios"
              className="inline-flex items-center justify-center bg-white text-[#015233] border-2 border-[#015233] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#015233] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Search className="h-5 w-5 mr-2" />
              VER SERVICIOS
            </Link>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#262626] mb-6">Enlaces útiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/#servicios"
                className="p-4 rounded-lg border border-gray-200 hover:border-[#015233] hover:bg-[#015233]/5 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#015233]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#015233]/20 transition-colors">
                    <Search className="h-6 w-6 text-[#015233]" />
                  </div>
                  <h4 className="font-semibold text-[#262626] text-sm">Servicios</h4>
                  <p className="text-xs text-gray-500 mt-1">Nuestras especialidades</p>
                </div>
              </Link>

              <Link
                href="/#equipo"
                className="p-4 rounded-lg border border-gray-200 hover:border-[#015233] hover:bg-[#015233]/5 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#015233]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#015233]/20 transition-colors">
                    <svg className="h-6 w-6 text-[#015233]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#262626] text-sm">Equipo</h4>
                  <p className="text-xs text-gray-500 mt-1">Nuestros profesionales</p>
                </div>
              </Link>

              <Link
                href="/reserva"
                className="p-4 rounded-lg border border-gray-200 hover:border-[#015233] hover:bg-[#015233]/5 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#015233]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#015233]/20 transition-colors">
                    <svg className="h-6 w-6 text-[#015233]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#262626] text-sm">Reservar</h4>
                  <p className="text-xs text-gray-500 mt-1">Agenda tu cita</p>
                </div>
              </Link>

              <Link
                href="/#contacto"
                className="p-4 rounded-lg border border-gray-200 hover:border-[#015233] hover:bg-[#015233]/5 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#015233]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#015233]/20 transition-colors">
                    <Phone className="h-6 w-6 text-[#015233]" />
                  </div>
                  <h4 className="font-semibold text-[#262626] text-sm">Contacto</h4>
                  <p className="text-xs text-gray-500 mt-1">Información de contacto</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact information */}
          <div className="mt-8 bg-[#015233]/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-[#262626] mb-4">¿Necesitas ayuda?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+56226335519"
                className="inline-flex items-center justify-center bg-[#015233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015233]/90 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +56226335519
              </a>
              <a
                href="mailto:info@centromedicophillips.cl"
                className="inline-flex items-center justify-center bg-white text-[#015233] border-2 border-[#015233] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Centro Médico Phillips. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
