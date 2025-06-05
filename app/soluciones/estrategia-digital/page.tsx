import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StrategyHero from "@/components/estrategia/hero-section"
import StrategyProcess from "@/components/estrategia/process-section"
import StrategyBenefits from "@/components/estrategia/benefits-section"
import StrategyImportance from "@/components/estrategia/importance-section"
import StrategyCTA from "@/components/estrategia/cta-section"
import StrategyTestimonials from "@/components/estrategia/testimonials-section"
import StrategyFAQ from "@/components/estrategia/faq-section"

export default function EstrategiaDigitalPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <StrategyHero />
        <StrategyProcess />
        <StrategyBenefits />
        <StrategyImportance />
        <StrategyTestimonials />
        <StrategyFAQ />
        <StrategyCTA />
      </main>
      <Footer />
    </>
  )
}
