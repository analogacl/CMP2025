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
  postalCode: "8320340",
  geo: { latitude: -33.437366, longitude: -70.65194 },
  /** Fijo de la clínica + celulares/WhatsApp */
  telephones: ["+5626335519", "+56991595875", "+56994837223"] as const,
  email: "contacto@optima-salud.cl",
  sameAs: ["https://www.instagram.com/centrooptimasalud/"] as const,
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
          postalCode: ORG.postalCode,
        },
        geo: { "@type": "GeoCoordinates", ...ORG.geo },
        hasMap: `https://maps.google.com/?q=${encodeURIComponent(`${ORG.streetAddress}, ${ORG.addressLocality}`)}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        medicalSpecialty: ["Psychiatric"],
        availableService: [
          { "@type": "MedicalTherapy", name: "Psicoterapia individual" },
          { "@type": "MedicalTherapy", name: "Terapia de pareja" },
          { "@type": "MedicalTherapy", name: "Terapia familiar" },
          { "@type": "MedicalTherapy", name: "Tratamiento psiquiátrico" },
          { "@type": "MedicalTherapy", name: "Terapia ocupacional" },
        ],
        paymentAccepted: "FONASA, ISAPRE, particular",
        areaServed: { "@type": "Country", name: "Chile" },
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

export type BreadcrumbItem = { name: string; path: string }

/** BreadcrumbList JSON-LD. `items` no incluye "Inicio": se agrega automáticamente. */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  const base = getSiteUrl()
  const all = [{ name: "Inicio", path: "/" }, ...items]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

export type ProfessionalProfile = {
  slug: string
  name: string
  jobTitle: string
  description: string
  image?: string
  specialties?: string[]
  education?: string[]
}

/**
 * ProfilePage + Person para las fichas del equipo. Se usa Person (no Physician):
 * en schema.org Physician es una consulta/organización y no aplica a psicólogos.
 */
export function getProfessionalProfileSchema(p: ProfessionalProfile) {
  const base = getSiteUrl()
  const url = `${base}/equipo/${p.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profilepage`,
    url,
    inLanguage: "es-CL",
    isPartOf: { "@id": `${base}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": `${url}#person`,
      name: p.name,
      jobTitle: p.jobTitle,
      description: p.description,
      ...(p.image ? { image: `${base}${p.image}` } : {}),
      worksFor: { "@id": `${base}/#organization` },
      ...(p.specialties?.length ? { knowsAbout: p.specialties } : {}),
      ...(p.education?.length ? { hasCredential: p.education.map((e) => ({ "@type": "EducationalOccupationalCredential", name: e })) } : {}),
    },
  }
}
