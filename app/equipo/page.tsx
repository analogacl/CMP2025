import type { Metadata } from "next"
import Team from "@/components/team"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Nuestro Equipo",
  description:
    "Conoce a psicólogos, psiquiatras y terapeutas ocupacionales de Optima Salud en Santiago. Profesionales con experiencia en salud mental presencial y online.",
  path: "/equipo",
  keywords: ["equipo psicólogos Santiago", "psiquiatras Santiago", "profesionales salud mental", "Optima Salud equipo"],
})

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Team />
    </div>
  )
}
