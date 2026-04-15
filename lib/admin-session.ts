import { createHmac, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"

const COOKIE = "os_admin"

function sessionSecret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET?.trim() || process.env.ADMIN_PASSWORD?.trim()
  return s || null
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url")
}

/** 7 días */
const MAX_AGE_SEC = 60 * 60 * 24 * 7

export function createAdminCookieValue(): string | null {
  const secret = sessionSecret()
  if (!secret) return null
  const exp = Date.now() + MAX_AGE_SEC * 1000
  const body = JSON.stringify({ exp, v: 1 })
  const bodyB64 = Buffer.from(body, "utf8").toString("base64url")
  const sig = sign(bodyB64, secret)
  return `${bodyB64}.${sig}`
}

export function verifyAdminCookieValue(raw: string | undefined): boolean {
  const secret = sessionSecret()
  if (!secret || !raw || !raw.includes(".")) return false
  const [bodyB64, sig] = raw.split(".")
  if (!bodyB64 || !sig) return false
  const expected = sign(bodyB64, secret)
  try {
    if (expected.length !== sig.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) {
      return false
    }
  } catch {
    return false
  }
  let exp = 0
  try {
    const body = JSON.parse(Buffer.from(bodyB64, "base64url").toString("utf8")) as { exp?: number }
    exp = typeof body.exp === "number" ? body.exp : 0
  } catch {
    return false
  }
  return exp > Date.now()
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const token = (await cookies()).get(COOKIE)?.value
  return verifyAdminCookieValue(token)
}

export function adminCookieOptions() {
  const secure = process.env.NODE_ENV === "production"
  return {
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: MAX_AGE_SEC,
  }
}

export function isAdminPasswordConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD?.trim())
}

export { COOKIE as ADMIN_COOKIE_NAME }
