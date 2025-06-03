import type { Metadata } from "next"
import TeleconsultaClientPage from "./TeleconsultaClientPage"

export const metadata: Metadata = {
  title: "Sala de Videollamados | Centro Médico Phillips",
  description:
    "Sala de videollamados para teleconsultas del Centro Médico Phillips. Atención online profesional y segura.",
}

export default function TeleconsultaPage() {
  return <TeleconsultaClientPage />
}
