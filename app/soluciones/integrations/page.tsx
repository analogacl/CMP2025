import type { Metadata } from "next"
import HeroSection from "@/components/integrations/hero-section"
import ProblemSection from "@/components/integrations/problem-section"
import SolutionSection from "@/components/integrations/solution-section"
import BenefitsSection from "@/components/integrations/benefits-section"
import ProcessSection from "@/components/integrations/process-section"
// import ResultsSection from "@/components/integrations/results-section" // Ocultado
import FAQSection from "@/components/integrations/faq-section"
import CTASection from "@/components/integrations/cta-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Integraciones & APIs | Analoga",
  description:
    "Conecta todos tus sistemas y automatiza procesos con integraciones personalizadas y desarrollo de APIs robustas.",
}

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ProcessSection />
        {/* <ResultsSection /> */} {/* Casos de éxito y testimonios ocultos */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
