import { NextResponse } from "next/server"
import { z } from "zod"
import { isValidPhq9Answers, phq9Severity, phq9Total } from "@/lib/phq9"
import { insertPhq9Submission, phq9StorageAvailable } from "@/lib/phq9-store"

export const runtime = "nodejs"

const bodySchema = z.object({
  answers: z.array(z.number().int().min(0).max(3)).length(9),
})

export async function POST(request: Request) {
  if (!phq9StorageAvailable()) {
    return NextResponse.json(
      { error: "Almacenamiento no configurado. Define DATABASE_URL en el servidor." },
      { status: 503 },
    )
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Respuestas inválidas" }, { status: 400 })
  }

  const answers = parsed.data.answers
  if (!isValidPhq9Answers(answers)) {
    return NextResponse.json({ error: "Respuestas inválidas" }, { status: 400 })
  }

  const total = phq9Total(answers)
  const severity = phq9Severity(total)

  try {
    await insertPhq9Submission(answers, total, severity)
  } catch (e) {
    console.error("phq9 insert", e)
    return NextResponse.json({ error: "No se pudo guardar el resultado" }, { status: 503 })
  }

  return NextResponse.json({ ok: true, total, severity })
}
