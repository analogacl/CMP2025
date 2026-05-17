import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Reserva tu Hora",
  description:
    "Agenda tu cita de salud mental en línea con psicólogos y psiquiatras de Optima Salud. Elige especialidad, modalidad presencial u online y confirma en minutos.",
  path: "/reserva",
  keywords: ["reservar hora psicólogo", "agendar cita salud mental", "cita psiquiatra Santiago", "agenda online"],
})

export default function ReservaLayout({ children }: { children: ReactNode }) {
  return children
}
