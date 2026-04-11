/**
 * Canonical origin for sitemap, robots.txt, and metadataBase.
 *
 * - NEXT_PUBLIC_SITE_URL overrides everything (e.g. staging or local tunnel).
 * - On Vercel, URLs must not use VERCEL_URL (preview URLs); use the public domain.
 * - Local dev without env → localhost.
 */
const CANONICAL_SITE_URL = "https://www.optima-salud.cl"

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "")
  }
  if (process.env.VERCEL) {
    return CANONICAL_SITE_URL
  }
  return "http://localhost:3000"
}
