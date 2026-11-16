import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Teleconsulta",
  description:
    "Accede a tu sesión de teleconsulta con los profesionales de Optima Salud. Videollamada segura para continuar tu tratamiento de salud mental desde casa.",
  path: "/teleconsulta",
  keywords: ["teleconsulta psicología", "videollamada terapia", "consulta online salud mental"],
  // Sala de videollamada para pacientes con hora tomada: no es una página de captación
  noIndex: true,
})

export default function TeleconsultaLayout({ children }: { children: ReactNode }) {
  return children
}
