import Link from "next/link"
import type { Metadata } from "next"
import Phq9Form from "@/components/phq9-form"

export const metadata: Metadata = {
  title: "PHQ-9 (depresión) — test gratuito | Optima Salud",
  description:
    "Cuestionario PHQ-9 sobre las últimas 2 semanas. Uso educativo; no es diagnóstico. Basado en el instrumento de referencia clínica.",
}

export default function Phq9Page() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          <Link href="/tests" className="text-[#015233] hover:underline">
            ← Tests de autocuidado
          </Link>
        </p>
        <h1 className="text-3xl font-bold text-[#262626] mb-4">PHQ-9</h1>
        <p className="text-gray-600 leading-relaxed">
          El PHQ-9 es un cuestionario breve de depresión. Aquí lo ofrecemos de forma anónima y gratuita. Si la
          pregunta 9 indica pensamientos de autolesión, busca ayuda urgente (familia, emergencias o líneas de crisis en
          tu país).
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Referencia del instrumento:{" "}
          <a
            href="https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf"
            className="text-[#015233] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            APA — Patient Health Questionnaire (PDF)
          </a>
        </p>
      </div>

      <Phq9Form />

      <div className="max-w-2xl mx-auto mt-12 text-center text-sm text-muted-foreground space-y-2">
        <p>
          Chile: línea nacional de prevención del suicidio <strong>1419</strong> (llamada) o conversación por chat en{" "}
          <a href="https://www.sentir.cl" className="text-[#015233] hover:underline" target="_blank" rel="noreferrer">
            sentir.cl
          </a>
          .
        </p>
        <p>
          Salud Responde (Minsal): <strong>600 360 7777</strong>.
        </p>
      </div>
    </div>
  )
}
