import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"
import { teamMemberSlugs } from "@/app/equipo/[slug]/page"

const staticPaths = [
  "",
  "/teleconsulta",
  "/diagnostics",
  "/reserva",
  "/agenda",
  "/equipo",
  "/psicologos-fonasa-santiago",
  "/psicologos-fonasa-online",
  "/convenios-empresas",
  "/tests",
  "/tests/phq-9",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }))

  const teamEntries: MetadataRoute.Sitemap = teamMemberSlugs.map((slug) => ({
    url: `${base}/equipo/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...teamEntries]
}
