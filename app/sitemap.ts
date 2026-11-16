import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"
import { teamMemberSlugs } from "@/app/equipo/[slug]/page"

/**
 * Fecha de la última modificación real del contenido de cada página.
 * Actualízala al cambiar el contenido visible de la página: Google ignora `lastmod`
 * si siempre coincide con la fecha del build.
 */
const staticPages: { path: string; lastModified: string; priority: number }[] = [
  { path: "/", lastModified: "2026-11-16", priority: 1 },
  { path: "/psicologos-fonasa-santiago", lastModified: "2026-11-16", priority: 0.9 },
  { path: "/psicologos-fonasa-online", lastModified: "2026-11-16", priority: 0.9 },
  { path: "/equipo", lastModified: "2026-11-16", priority: 0.8 },
  { path: "/convenios-empresas", lastModified: "2026-11-16", priority: 0.8 },
  { path: "/reserva", lastModified: "2026-11-16", priority: 0.7 },
  { path: "/tests", lastModified: "2026-05-16", priority: 0.6 },
  { path: "/tests/phq-9", lastModified: "2026-05-16", priority: 0.6 },
]

/** Fichas del equipo: actualizar al editar datos en app/equipo/[slug]/page.tsx */
const TEAM_LAST_MODIFIED = "2026-11-16"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, lastModified, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }))

  const teamEntries: MetadataRoute.Sitemap = teamMemberSlugs.map((slug) => ({
    url: `${base}/equipo/${slug}`,
    lastModified: TEAM_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...teamEntries]
}
