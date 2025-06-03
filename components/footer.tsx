import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Centro Médico Phillips - Página de inicio">
              <Image
                src="/images/SmallLogo.jpg"
                alt="Centro Médico Phillips"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Centro Médico Phillips ofrece servicios de salud mental integral con un equipo multidisciplinario de
              expertos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 pb-2 border-b border-gray-100 inline-block">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <Link href="/" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <Link href="/#servicios" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Servicios
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <Link href="/#equipo" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <Link href="/#testimonios" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <Link href="/reserva" className="text-gray-600 hover:text-[#015233] transition-colors">
                  Reservar Hora
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 pb-2 border-b border-gray-100 inline-block">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <span className="text-gray-600">Psicoterapia Individual</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <span className="text-gray-600">Terapia Familiar</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <span className="text-gray-600">Terapia de Pareja</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <span className="text-gray-600">Diagnóstico Psiquiátrico</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#015233]/40"></div>
                <span className="text-gray-600">Test Psicológicos</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#262626] mb-4 pb-2 border-b border-gray-100 inline-block">
              Contacto
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#015233] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Pasaje Phillips 15, Santiago, Región Metropolitana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#015233] flex-shrink-0" />
                <a href="tel:+56226335519" className="text-gray-600 hover:text-[#015233] transition-colors">
                  +56226335519
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#015233] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <a
                  href="https://wa.me/56991595875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#015233] transition-colors"
                >
                  +56991595875
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#015233] flex-shrink-0" />
                <a
                  href="mailto:info@centromedicophillips.cl"
                  className="text-gray-600 hover:text-[#015233] transition-colors break-all"
                >
                  info@centromedicophillips.cl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center justify-center md:justify-start text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Centro Médico Phillips. Todos los derechos reservados.</p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-gray-500">
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
