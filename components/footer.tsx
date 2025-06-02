import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo only */}
        <div className="flex justify-center md:justify-start mb-10 sm:mb-12">
          <Link href="/" aria-label="Centro Médico Phillips - Página de inicio">
            <Image
              src="/images/SmallLogo.jpg"
              alt="Centro Médico Phillips"
              width={220}
              height={70}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-12">
          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 sm:mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#015233] mr-3"></span>
              Sobre Nosotros
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Centro especializado en salud mental integral, comprometido con tu bienestar y calidad de vida. Nuestro
              equipo de profesionales está listo para ayudarte.
            </p>
            <Link href="/equipo" className="inline-flex items-center text-[#015233] font-medium hover:underline group">
              Conoce a nuestro equipo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 sm:mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#015233] mr-3"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#equipo" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/reserva" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Reserva tu Hora
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 sm:mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#015233] mr-3"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#015233] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Pasaje Phillips 15, Plaza de Armas, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#015233] mr-3 flex-shrink-0" />
                <a href="tel:+56226335519" className="text-gray-600 hover:text-[#015233] transition-colors">
                  +56226335519
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 text-[#015233] mr-3 flex-shrink-0" />
                <a
                  href="https://wa.me/56991595875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#015233] transition-colors"
                >
                  +56991595875
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#015233] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@centromedicophillips.cl"
                  className="text-gray-600 hover:text-[#015233] transition-colors break-words"
                >
                  info@centromedicophillips.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instagram highlight section */}
        <div className="bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 p-5 sm:p-6 rounded-xl mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold text-[#262626] mb-2">Síguenos en Instagram</h4>
              <p className="text-gray-600">Mantente al día con nuestras últimas noticias y eventos</p>
            </div>
            <Link
              href="https://www.instagram.com/centromedicophillips"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center"
              aria-label="Síguenos en Instagram @centromedicophillips"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @centromedicophillips
            </Link>
          </div>
        </div>

        {/* Analoga attribution */}
        <div className="border-t border-gray-100 pt-6 pb-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Centro Médico Phillips. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Developed by</span>
              <a
                href="https://www.analoga.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
                aria-label="Desarrollado por Analoga"
              >
                <Image
                  src="/images/analoga-logo-mini.webp"
                  alt="Analoga"
                  width={80}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
