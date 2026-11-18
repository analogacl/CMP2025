"use client"

import { useState } from "react"
import { Star, ChevronDown, Quote } from "lucide-react"
import { REVIEWS_SUMMARY, formatRating } from "@/lib/reviews"

type Testimonial = { quote: string; author: string; date: string }

// Reseñas de encuestas de satisfacción de pacientes. Solo primer nombre y fecha (sin datos personales).
// Ordenadas de la más reciente a la más antigua.
const testimonials: Testimonial[] = [
  {
    quote: "Es muy agradable llegar a la consulta, te reciben muy bien… y la doctora es lo máximo",
    author: "Ana",
    date: "05-11-2026",
  },
  {
    quote: "Es un grupo de trabajo comprometido y cálido.",
    author: "Solange",
    date: "03-11-2026",
  },
  {
    quote: "Excelente atención, muchas gracias",
    author: "Hugo",
    date: "29-10-2026",
  },
  {
    quote: "Excelente atención",
    author: "Víctor",
    date: "23-10-2026",
  },
  {
    quote: "Ustedes nos brindan un apoyo único.",
    author: "Rosario",
    date: "11-10-2026",
  },
  {
    quote: "Excelente atención y sin esperas",
    author: "Etelvina",
    date: "11-09-2026",
  },
  {
    quote: "La atención es súper cercana y profesional, desde las chicas de la recepción que son muy amables y comprensivas.",
    author: "Rodrigo",
    date: "07-08-2026",
  },
  {
    quote: "Mi psicóloga es lo máximo, Zulema Guajardo la mejor, gracias. Ella me ha enseñado a descubrir mi mejor versión, gracias",
    author: "Marcela",
    date: "04-08-2026",
  },
  {
    quote: "Todo muy cordial y cercano",
    author: "Rosa",
    date: "18-07-2026",
  },
  {
    quote: "Buenísima atención y compromiso.",
    author: "Josefina",
    date: "27-06-2026",
  },
  {
    quote: "Sólo agradecer a mi hermosa psiquiatra Graciela!!! La adoro, y a la secretaria por siempre ser tan atenta",
    author: "Victoria",
    date: "04-06-2026",
  },
  {
    quote: "A pesar de ser mi primera vez ahí, encontré la atención, el ambiente y la ubicación de mi entera satisfacción",
    author: "Ricardo",
    date: "27-05-2026",
  },
  {
    quote: "Excelente atención, la Dra. Graciela es una excelente profesional",
    author: "Elizabeth",
    date: "26-02-2026",
  },
  {
    quote: "Excelente atención, la doctora Graciela Rojas fenómeno, y Carolina su asistente también atenta, rápida, buena y soluciona cualquier problema. Gracias miles, saludos",
    author: "Javier",
    date: "26-02-2026",
  },
  {
    quote: "Siempre tienen muy buena disposición para lo que una necesita, muy profesionales todos.",
    author: "Paula",
    date: "13-02-2026",
  },
  {
    quote: "Muy agradecida de la atención de la profesional y del personal administrativo",
    author: "Verónica",
    date: "27-06-2025",
  },
  {
    quote: "Atención de excelencia la atención de la profesional de muy buen trato y calidez, la secretaria maravillosamente atenta y buena voluntad",
    author: "Ana María",
    date: "12-06-2025",
  },
  {
    quote: "Excelentes profesionales, desde las secretarias a los doctores",
    author: "Claudia",
    date: "23-05-2025",
  },
  {
    quote: "Excelente desde la secretaria, hasta los profesionales.",
    author: "Mónica",
    date: "31-03-2025",
  },
  {
    quote: "Agradecida de encontrar escucha, contención, en un ambiente distendido.",
    author: "Patricia",
    date: "23-01-2025",
  },
]

const { rating: RATING, total: TOTAL_REVIEWS } = REVIEWS_SUMMARY
const INITIAL_VISIBLE = 9 // escritorio
const INITIAL_VISIBLE_MOBILE = 4

const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

// "dd-mm-yyyy" -> "agosto de 2026"
function formatMonth(date: string) {
  const [, mm, yyyy] = date.split("-")
  return `${MONTHS[Number(mm) - 1]} de ${yyyy}`
}

const AVATAR_COLORS = [
  "bg-[#015233] text-white",
  "bg-[#e6f0eb] text-[#015233]",
  "bg-amber-100 text-amber-800",
  "bg-sky-100 text-sky-800",
  "bg-rose-100 text-rose-800",
]

function Avatar({ name, index, className = "" }: { name: string; index: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full font-semibold ${AVATAR_COLORS[index % AVATAR_COLORS.length]} ${className}`}
    >
      {name.charAt(0)}
    </span>
  )
}

function Stars({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      ))}
    </span>
  )
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? testimonials : testimonials.slice(0, INITIAL_VISIBLE)

  return (
    <section id="testimonios" className="py-14 md:py-20 bg-gray-50" aria-labelledby="testimonios-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resumen: calificación + volumen de pacientes */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 id="testimonios-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#262626] mb-6">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-bold text-[#015233]">{formatRating(RATING)}</span>
              <div className="text-left">
                <Stars className="w-5 h-5" />
                <p className="text-sm text-gray-600 mt-1">de 5 estrellas</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200" aria-hidden="true" />

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 5).map((t, i) => (
                  <Avatar key={t.author + t.date} name={t.author} index={i} className="w-9 h-9 text-sm ring-2 ring-white" />
                ))}
              </div>
              <p className="text-left text-sm text-gray-700 leading-tight">
                <span className="block text-lg font-bold text-[#262626] whitespace-nowrap">{TOTAL_REVIEWS} evaluaciones</span>
                de pacientes atendidos
              </p>
            </div>
          </div>
        </div>

        {/* Muro de reseñas: columnas tipo masonry, texto completo y sin movimiento automático */}
        <ul className="columns-1 md:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
          {visible.map((t, i) => (
            <li
              key={t.author + t.date}
              className={`break-inside-avoid mb-5 ${!expanded && i >= INITIAL_VISIBLE_MOBILE ? "hidden md:block" : ""}`}
            >
              <figure className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <Quote className="w-5 h-5 text-[#015233]/20" aria-hidden="true" />
                </div>
                <blockquote className="text-[#262626] text-base leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <Avatar name={t.author} index={i} className="w-9 h-9 text-sm" />
                  <span className="text-sm">
                    <span className="block font-semibold text-[#262626]">{t.author}</span>
                    <span className="text-gray-500">Paciente · {formatMonth(t.date)}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {testimonials.length > INITIAL_VISIBLE && (
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#015233] text-[#015233] font-semibold px-6 py-2.5 hover:bg-[#015233] hover:text-white transition-colors"
            >
              {expanded ? "Ver menos reseñas" : "Ver más reseñas"}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mt-8">
          Comentarios reales de encuestas de satisfacción. Publicamos solo el primer nombre de cada paciente.
        </p>
      </div>
    </section>
  )
}
