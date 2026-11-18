import Link from "next/link"
import { Star } from "lucide-react"
import { REVIEWS_SUMMARY, formatRating } from "@/lib/reviews"

type Props = {
  /** "dark": sobre fondos oscuros (hero, banners verdes). "light": sobre fondo claro. */
  tone?: "dark" | "light"
  className?: string
  /** false en páginas de conversión (p. ej. /reserva) para no sacar al usuario del flujo. */
  link?: boolean
}

/** Badge compacto de confianza: 4,9 ★★★★★ · 266 evaluaciones. Lleva a las reseñas de la home. */
export default function RatingBadge({ tone = "light", className = "", link = true }: Props) {
  const { rating, total } = REVIEWS_SUMMARY
  const styles =
    tone === "dark"
      ? "bg-white/15 text-white border-white/25 hover:bg-white/25 backdrop-blur-sm"
      : "bg-white text-[#262626] border-gray-200 shadow-sm hover:shadow-md"

  const label = `Calificación ${formatRating(rating)} de 5 según ${total} evaluaciones de pacientes`
  const classes = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${styles} ${className}`

  const content = (
    <>
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </span>
      <span aria-hidden="true">
        <strong className="font-bold">{formatRating(rating)}</strong>
        <span className={tone === "dark" ? "text-white/80" : "text-gray-600"}>
          {" "}· {total} evaluaciones<span className="hidden sm:inline"> de pacientes</span>
        </span>
      </span>
    </>
  )

  if (!link) {
    return (
      <p className={classes} role="img" aria-label={label}>
        {content}
      </p>
    )
  }

  return (
    <Link href="/#testimonios" className={classes} aria-label={`${label}. Ver reseñas`}>
      {content}
    </Link>
  )
}
