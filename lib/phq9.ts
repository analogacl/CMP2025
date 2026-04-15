/** PHQ-9 (Patient Health Questionnaire-9) — uso educativo; no sustituye evaluación clínica. */

export const PHQ9_OPTIONS = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Varios días" },
  { value: 2, label: "Más de la mitad de los días" },
  { value: 3, label: "Casi todos los días" },
] as const

export const PHQ9_QUESTIONS = [
  "Poco interés o placer en hacer cosas",
  "Se ha sentido decaído(a), deprimido(a) o sin esperanzas",
  "Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado",
  "Se ha sentido cansado(a) o con poca energía",
  "Sin apetito o ha comido en exceso",
  "Se ha sentido mal con usted mismo(a) — o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia",
  "Ha tenido dificultad para concentrarse en cosas como leer el periódico o ver la televisión",
  "Se ha movido o hablado tan lentamente que otras personas podrían haberlo notado. O lo contrario — muy inquieto(a) o agitado(a)",
  "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera",
] as const

export type Phq9Answers = readonly [number, number, number, number, number, number, number, number, number]

export function phq9Total(answers: Phq9Answers): number {
  return answers.reduce((a, b) => a + b, 0)
}

export function phq9Severity(total: number): string {
  if (total <= 4) return "Mínimo"
  if (total <= 9) return "Leve"
  if (total <= 14) return "Moderado"
  if (total <= 19) return "Moderadamente severo"
  return "Severo"
}

export function isValidPhq9Answers(value: unknown): value is Phq9Answers {
  if (!Array.isArray(value) || value.length !== 9) return false
  return value.every((v) => typeof v === "number" && v >= 0 && v <= 3 && Number.isInteger(v))
}
