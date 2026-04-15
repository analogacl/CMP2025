import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"

export const metadata: Metadata = {
  title: "Tests de autocuidado | Optima Salud",
  description:
    "Cuestionarios gratuitos con fines educativos. No sustituyen evaluación clínica. PHQ-9 de depresión.",
}

export default function TestsHubPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#262626] mb-2">Tests de autocuidado</h1>
      <p className="text-gray-600 mb-10">
        Herramientas gratuitas para reflexionar sobre tu bienestar. Los resultados son orientativos y{" "}
        <strong>no reemplazan</strong> una evaluación con un profesional de salud mental.
      </p>

      <ul className="space-y-4">
        <li>
          <Link href="/tests/phq-9" className="block group">
            <Card className="transition-shadow group-hover:shadow-md border-gray-200">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-lg bg-[#015233]/10 p-3 text-[#015233]">
                  <ClipboardList className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-[#015233] transition-colors">
                    PHQ-9 — Cuestionario de salud del paciente (depresión)
                  </CardTitle>
                  <CardDescription className="mt-2">
                    9 ítems sobre las últimas 2 semanas. Ampliamente usado en atención primaria y guías clínicas.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </li>
      </ul>
    </div>
  )
}
