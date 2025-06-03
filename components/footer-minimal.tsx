import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function FooterMinimal() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Centro Médico Phillips - Página de inicio">
              <Image
                src="/images/SmallLogo.jpg"
                alt="Centro Médico Phillips"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            <a href="tel:+56226335519" className="flex items-center gap-2 hover:text-[#015233] transition-colors">
              <Phone className="h-4 w-4" />
              +56226335519
            </a>
            <a
              href="mailto:info@centromedicophillips.cl"
              className="flex items-center gap-2 hover:text-[#015233] transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@centromedicophillips.cl
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Pasaje Phillips 15, Santiago
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/reserva" className="text-gray-600 hover:text-[#015233] transition-colors font-medium">
              Reservar
            </Link>
            <Link href="/#equipo" className="text-gray-600 hover:text-[#015233] transition-colors font-medium">
              Equipo
            </Link>
            <Link href="/#contacto" className="text-gray-600 hover:text-[#015233] transition-colors font-medium">
              Contacto
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Centro Médico Phillips. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <span>Desarrollado por</span>
              <a
                href="https://www.analoga.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Desarrollado por Analoga"
              >
                <Image
                  src="/images/analoga-logo-mini.webp"
                  alt="Analoga"
                  width={60}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
