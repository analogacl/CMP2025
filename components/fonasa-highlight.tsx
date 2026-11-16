import Link from "next/link"
import { ArrowRight, MapPin, Video } from "lucide-react"

/**
 * Bloque de la home que distribuye autoridad hacia las landings FONASA.
 * La home apunta a la intención general ("psicólogos y psiquiatras en Santiago");
 * las búsquedas con modificador FONASA / online se derivan a sus páginas dedicadas.
 */
const options = [
  {
    href: "/psicologos-fonasa-santiago",
    icon: MapPin,
    title: "Psicólogos FONASA en Santiago",
    text: "Sesiones presenciales en nuestra consulta de Santiago, con opción de reembolso FONASA.",
    cta: "Ver atención presencial",
  },
  {
    href: "/psicologos-fonasa-online",
    icon: Video,
    title: "Psicólogos FONASA online",
    text: "Terapia por videollamada desde cualquier lugar de Chile, con horarios flexibles.",
    cta: "Ver atención online",
  },
] as const

export default function FonasaHighlight() {
  return (
    <section id="fonasa" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">Atención con FONASA</h2>
          <p className="text-gray-600">
            Si eres paciente FONASA, puedes atenderte con nuestro equipo de psicólogos de forma presencial en Santiago
            u online desde cualquier región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map(({ href, icon: Icon, title, text, cta }) => (
            <Link
              key={href}
              href={href}
              className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#015233]/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#015233]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#262626] mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{text}</p>
              <span className="inline-flex items-center text-[#015233] font-semibold">
                {cta}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          ¿Buscas un beneficio de salud mental para tu equipo?{" "}
          <Link href="/convenios-empresas" className="text-[#015233] font-semibold underline underline-offset-2">
            Conoce nuestros convenios para empresas
          </Link>
        </p>
      </div>
    </section>
  )
}
