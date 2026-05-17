import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site-url"

export const SITE_NAME = "Optima Salud"
export const DEFAULT_DESCRIPTION =
  "Centro de salud mental en Santiago: psicólogos y psiquiatras con atención presencial y online. FONASA, ISAPRES y más de 30 años de experiencia."

/** Imagen OG por defecto (ruta relativa; se resuelve con metadataBase) */
export const DEFAULT_OG_IMAGE = "/images/hero-woman-joy.webp"

export type PageMetadataOptions = {
  /** Título corto de la página (el layout aplica `| Optima Salud` salvo `absoluteTitle`) */
  title: string
  description: string
  /** Ruta canónica, ej. `/reserva` o `/` */
  path: string
  keywords?: string[]
  noIndex?: boolean
  /** Título completo sin plantilla (solo home u overrides) */
  absoluteTitle?: boolean
  ogImage?: string
  ogType?: "website" | "article" | "profile"
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "/"
  return path.startsWith("/") ? path : `/${path}`
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    noIndex = false,
    absoluteTitle = false,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
  } = options

  const canonicalPath = normalizePath(path)
  const pageTitle = absoluteTitle ? { absolute: title } : title
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`

  return {
    title: pageTitle,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: ogType,
      locale: "es_CL",
      url: canonicalPath,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
  }
}

/** Metadatos por defecto del sitio (root layout) */
export function getDefaultSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${SITE_NAME} | Centro de Salud Mental Integral`,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    keywords: [
      "salud mental",
      "psicología",
      "psiquiatría",
      "terapia",
      "bienestar",
      "Santiago",
      "Chile",
      "FONASA",
    ],
    alternates: {
      canonical: "/",
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url: "/",
      siteName: SITE_NAME,
      title: `${SITE_NAME} | Centro de Salud Mental Integral`,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Centro de salud mental en Santiago`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} | Centro de Salud Mental Integral`,
      description: DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
