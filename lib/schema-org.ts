import { getSiteUrl } from "@/lib/site-url"

/** Aligned with `components/footer.tsx` — keep in sync if contact details change. */
export const ORG = {
  name: "Optima Salud",
  description:
    "Optima Salud ofrece servicios de salud mental integral con un equipo multidisciplinario de expertos.",
  streetAddress: "Pasaje Phillips 15",
  addressLocality: "Santiago",
  addressRegion: "Región Metropolitana",
  addressCountry: "CL",
  telephones: ["+56991595875", "+56994837223"] as const,
  email: "contacto@optima-salud.cl",
  sameAs: ["https://www.instagram.com/centromedicophillips"] as const,
  logoPath: "/images/logo-optima-salud-removebg-preview.png",
} as const

/**
 * Default Schema.org graph for the whole site (JSON-LD).
 * Safe to extend per-page with BreadcrumbList, Physician, FAQPage, etc.
 */
export function getDefaultSchemaGraph() {
  const base = getSiteUrl()
  const orgId = `${base}/#organization`
  const websiteId = `${base}/#website`
  const logoUrl = `${base}${ORG.logoPath}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": orgId,
        name: ORG.name,
        description: ORG.description,
        url: base,
        logo: { "@type": "ImageObject", url: logoUrl },
        image: logoUrl,
        telephone: [...ORG.telephones],
        email: ORG.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.streetAddress,
          addressLocality: ORG.addressLocality,
          addressRegion: ORG.addressRegion,
          addressCountry: ORG.addressCountry,
        },
        sameAs: [...ORG.sameAs],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: ORG.name,
        description: ORG.description,
        inLanguage: "es-CL",
        publisher: { "@id": orgId },
      },
    ],
  }
}
