import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { z } from "zod"
import { ADMIN_COOKIE_NAME, adminCookieOptions, createAdminCookieValue, isAdminPasswordConfigured } from "@/lib/admin-session"

const schema = z.object({
  password: z.string().min(1),
})

export async function POST(request: Request) {
  if (!isAdminPasswordConfigured()) {
    return NextResponse.json({ error: "Admin no configurado (ADMIN_PASSWORD)" }, { status: 503 })
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
  }

  const expected = process.env.ADMIN_PASSWORD!
  if (parsed.data.password !== expected) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
  }

  const token = createAdminCookieValue()
  if (!token) {
    return NextResponse.json({ error: "No se pudo crear la sesión" }, { status: 503 })
  }

  ;(await cookies()).set(ADMIN_COOKIE_NAME, token, adminCookieOptions())

  return NextResponse.json({ ok: true })
}
