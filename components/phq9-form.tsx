"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PHQ9_OPTIONS, PHQ9_QUESTIONS, phq9Severity, phq9Total, type Phq9Answers } from "@/lib/phq9"

const initialAnswers = (): (number | null)[] => Array(9).fill(null)

export default function Phq9Form() {
  const [answers, setAnswers] = useState<(number | null)[]>(initialAnswers)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<{ total: number; severity: string } | null>(null)

  const allAnswered = answers.every((a) => a !== null && a >= 0 && a <= 3)

  const setQ = (index: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
    setError(null)
    setDone(null)
  }

  const submit = async () => {
    if (!allAnswered) {
      setError("Responde las 9 preguntas antes de enviar.")
      return
    }
    const tuple = answers as unknown as Phq9Answers
    const total = phq9Total(tuple)
    const severity = phq9Severity(total)

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/tests/phq-9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: [...tuple] }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string; total?: number; severity?: string }
      if (!res.ok) {
        setError(data.error || "No se pudo enviar. Intenta más tarde.")
        return
      }
      setDone({ total: data.total ?? total, severity: data.severity ?? severity })
    } catch {
      setError("Error de conexión. Intenta más tarde.")
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    setAnswers(initialAnswers())
    setDone(null)
    setError(null)
  }

  if (done) {
    return (
      <Card className="max-w-2xl mx-auto border-[#015233]/20">
        <CardHeader>
          <CardTitle className="text-[#015233]">Resultado registrado</CardTitle>
          <CardDescription>
            Puntuación PHQ-9: <strong>{done.total}</strong> de 27 — interpretación orientativa:{" "}
            <strong>{done.severity}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Este cuestionario no es un diagnóstico. Si te sientes en riesgo o necesitas apoyo, contacta a un
            profesional de salud mental o una línea de crisis.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="outline" onClick={reset}>
              Hacer el test de nuevo
            </Button>
            <Button asChild className="bg-[#015233] hover:bg-[#015233]/90">
              <Link href="/reserva">Agendar evaluación</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#262626]">Instrucciones</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Durante las <strong>últimas 2 semanas</strong>, ¿con qué frecuencia le han molestado los siguientes
            problemas? Elige la opción que mejor describa tu experiencia en cada caso.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-8">
        {PHQ9_QUESTIONS.map((question, i) => (
          <Card key={i} className="border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle id={`phq9-q-${i}`} className="text-base font-semibold text-[#262626]">
                {i + 1}. {question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3" role="radiogroup" aria-labelledby={`phq9-q-${i}`}>
                {PHQ9_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    htmlFor={`q${i}-v${opt.value}`}
                    className="flex items-center gap-3 cursor-pointer rounded-md border border-transparent px-2 py-1.5 hover:bg-gray-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#015233]/30"
                  >
                    <input
                      type="radio"
                      id={`q${i}-v${opt.value}`}
                      name={`phq9-q-${i}`}
                      value={opt.value}
                      checked={answers[i] === opt.value}
                      onChange={() => setQ(i, opt.value)}
                      className="h-4 w-4 accent-[#015233] shrink-0"
                    />
                    <span className="text-sm text-[#262626]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-600 text-center" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-center pb-12">
        <Button
          type="button"
          className="min-w-[200px] bg-[#015233] hover:bg-[#015233]/90"
          disabled={!allAnswered || submitting}
          onClick={submit}
        >
          {submitting ? "Enviando…" : "Enviar respuestas"}
        </Button>
      </div>
    </div>
  )
}
