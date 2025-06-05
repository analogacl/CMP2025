"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, MapPin, Phone, CreditCard, Users } from "lucide-react" // Added CreditCard and Users icons
import { useRouter, usePathname } from "next/navigation"

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container flex flex-col gap-8 py-12 px-4 md:flex-row md:py-16">
        <div className="flex-1 space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analoga-logo-mini-4kYVzW9COsxlFNayBTBax9uG59GBVX.webp"
              alt="Analoga"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-slate-400">Soluciones de Ecommerce para la era digital</p>
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" />
            <p>Av. Presidente Kennedy 5600, Of 4013, Vitacura, Santiago de Chile</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <Phone className="h-4 w-4" />
            <p>+56942870742</p> {/* Updated phone number */}
          </div>
        </div>

        <div className="space-y-4 md:w-40">
          <h3 className="text-sm font-medium text-slate-100">Navegación</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => handleNavigation("features")}
                className="text-slate-400 transition-colors hover:text-slate-100"
              >
                Soluciones
              </button>
            </li>
            <li>
              <Link href="/nosotros" className="text-slate-400 transition-colors hover:text-slate-100">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="text-slate-400 transition-colors hover:text-slate-100">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/agendar" className="text-slate-400 transition-colors hover:text-slate-100">
                Conversemos
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 md:w-48">
          {" "}
          {/* Adjusted width for new links */}
          <h3 className="text-sm font-medium text-slate-100">Recursos</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="https://www.flow.cl/btn.php?token=gfxrtah"
                className="flex items-center text-slate-400 transition-colors hover:text-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Pago Online
              </Link>
            </li>
            <li>
              <Link
                href="https://analoga.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1"
                className="flex items-center text-slate-400 transition-colors hover:text-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="h-4 w-4 mr-2" />
                Soporte Clientes
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 md:w-40">
          <h3 className="text-sm font-medium text-slate-100">Redes Sociales</h3>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/company/analoga"
              className="text-slate-400 transition-colors hover:text-slate-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/analoga"
              className="text-slate-400 transition-colors hover:text-slate-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-t border-slate-800 py-6">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Analoga. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
