/**
 * Canonical site origin for sitemap, robots, and metadataBase.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.tudominio.cl).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "")
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`
  }
  return "http://localhost:3000"
}
