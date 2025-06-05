import type { Metadata } from "next"
import { HeroSection } from "@/components/seo-geo/hero-section"
import { IntroSection } from "@/components/seo-geo/intro-section"
import { SeoSection } from "@/components/seo-geo/seo-section"
import { GeoSection } from "@/components/seo-geo/geo-section"
import { WhyAnalogaSection } from "@/components/seo-geo/why-analoga-section"
// import { ResultsSection } from "@/components/seo-geo/results-section" // Ocultar esta sección
import { CtaSection } from "@/components/seo-geo/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Consultoría SEO y GEO | Analoga",
  description:
    "Optimiza tu visibilidad en buscadores tradicionales y generativos con nuestra consultoría SEO y GEO. Domina el ecosistema de búsqueda actual.",
  keywords:
    "SEO, GEO, consultoría SEO, optimización para buscadores, búsqueda generativa, IA generativa, posicionamiento web, marketing digital",
}

export default function SeoGeoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <SeoSection />
        <GeoSection />
        <WhyAnalogaSection />
        {/* <ResultsSection /> */} {/* Ocultar esta sección */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
