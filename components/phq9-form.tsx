"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PHQ9_OPTIONS, PHQ9_QUESTIONS, phq9Severity, phq9Total, type Phq9Answers } from "@/lib/phq9"

const initialAnswers = (): (number | null)[] => Array(9).fill(null)

export default function Phq9Form() {
  const [answers, setAnswers] = useState<(number | null)[]>(initialAnswers)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<{ total: number; severity: string } | null>(null)

  const allAnswered = answers.every((a) => a !== null && a >= 0 && a <= 3)
  const answeredCount = answers.filter((a) => a !== null).length
  const progressPct = Math.round((answeredCount / PHQ9_QUESTIONS.length) * 100)
  const currentAnswer = answers[currentIndex]
  const isLastQuestion = currentIndex === PHQ9_QUESTIONS.length - 1

  const setQ = (index: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
    setError(null)
    setDone(null)

    // Auto-advance for a smoother "slider-like" flow.
    if (index < PHQ9_QUESTIONS.length - 1) {
      setDirection("forward")
      setCurrentIndex(index + 1)
    }
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
    setDirection("forward")
    setCurrentIndex(0)
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
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="border-[#015233]/10 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-[#262626]">Instrucciones</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Durante las <strong>últimas 2 semanas</strong>, ¿con qué frecuencia le han molestado los siguientes
            problemas? Elige la opción que mejor describa tu experiencia en cada caso.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="border-[#015233]/10 shadow-sm overflow-hidden bg-gradient-to-b from-white to-[#f8fcfa]">
        <div className="px-5 pt-5 pb-3 sm:px-6">
          <div className="flex items-center justify-between gap-2 text-sm mb-3">
            <span className="text-muted-foreground">
              Pregunta {currentIndex + 1} de {PHQ9_QUESTIONS.length}
            </span>
            <span className="font-semibold text-[#015233] tracking-tight">{progressPct}% completado</span>
          </div>
          <div className="grid grid-cols-9 gap-1.5" aria-hidden>
            {PHQ9_QUESTIONS.map((_, idx) => {
              const isAnswered = answers[idx] !== null
              const isCurrent = idx === currentIndex
              return (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent ? "bg-[#015233] scale-y-125" : isAnswered ? "bg-[#015233]/55" : "bg-gray-200"
                  }`}
                />
              )
            })}
          </div>
        </div>

        <CardHeader className="pt-3 pb-2">
          <p className="text-xs uppercase tracking-[0.12em] text-[#015233]/70 font-medium">PHQ-9</p>
          <CardTitle id={`phq9-q-${currentIndex}`} className="text-base sm:text-lg font-semibold text-[#262626]">
            {currentIndex + 1}. {PHQ9_QUESTIONS[currentIndex]}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div
            key={currentIndex}
            className={`space-y-3 animate-in duration-300 ${
              direction === "forward" ? "fade-in slide-in-from-right-3" : "fade-in slide-in-from-left-3"
            }`}
            role="radiogroup"
            aria-labelledby={`phq9-q-${currentIndex}`}
          >
            {PHQ9_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                htmlFor={`q${currentIndex}-v${opt.value}`}
                className={`group flex items-center gap-3 cursor-pointer rounded-xl border px-3.5 py-3 transition-all duration-200 ${
                  currentAnswer === opt.value
                    ? "border-[#015233]/45 bg-[#015233]/7 shadow-sm"
                    : "border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm"
                } has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#015233]/30`}
              >
                <input
                  type="radio"
                  id={`q${currentIndex}-v${opt.value}`}
                  name={`phq9-q-${currentIndex}`}
                  value={opt.value}
                  checked={currentAnswer === opt.value}
                  onChange={() => setQ(currentIndex, opt.value)}
                  className="h-4 w-4 accent-[#015233] shrink-0"
                />
                <span className="text-sm sm:text-base text-[#262626]">{opt.label}</span>
                {currentAnswer === opt.value && <span className="ml-auto text-xs text-[#015233] font-medium">Elegido</span>}
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
            <Button
              type="button"
              variant="outline"
              disabled={currentIndex === 0}
              onClick={() => {
                setDirection("backward")
                setCurrentIndex((v) => Math.max(0, v - 1))
              }}
            >
              Anterior
            </Button>
            {!isLastQuestion ? (
              <Button
                type="button"
                className="bg-[#015233] hover:bg-[#015233]/90 shadow-sm"
                disabled={currentAnswer === null}
                onClick={() => {
                  setDirection("forward")
                  setCurrentIndex((v) => Math.min(PHQ9_QUESTIONS.length - 1, v + 1))
                }}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                type="button"
                className="bg-[#015233] hover:bg-[#015233]/90 shadow-sm"
                disabled={!allAnswered || submitting}
                onClick={submit}
              >
                {submitting ? "Enviando…" : "Enviar respuestas"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {error && (
        <p className="text-sm text-red-600 text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
