import type { Metadata } from "next"
import HeroSection from "@/components/email-marketing/hero-section"
import ProblemSection from "@/components/email-marketing/problem-section"
import SolutionSection from "@/components/email-marketing/solution-section"
import BenefitsSection from "@/components/email-marketing/benefits-section"
import ProcessSection from "@/components/email-marketing/process-section"
import ResultsSection from "@/components/email-marketing/results-section"
import FAQSection from "@/components/email-marketing/faq-section"
import CTASection from "@/components/email-marketing/cta-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Email Marketing Automation | Analoga",
  description:
    "Automatiza tus campañas de email marketing para aumentar conversiones y fidelizar clientes con estrategias personalizadas.",
}

export default function EmailMarketingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ProcessSection />
        <ResultsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
