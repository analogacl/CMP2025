import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CROHero from "@/components/cro/hero-section"
import CRODefinition from "@/components/cro/definition-section"
import CROConversions from "@/components/cro/conversions-section"
import CROImportance from "@/components/cro/importance-section"
import CROApproach from "@/components/cro/approach-section"
import CROStrategies from "@/components/cro/strategies-section"
import CROCTA from "@/components/cro/cta-section"

export default function ConversionRateOptimizationPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <CROHero />
        <CRODefinition />
        <CROConversions />
        <CROImportance />
        <CROApproach />
        <CROStrategies />
        {/* <CROResults /> */}
        <CROCTA />
      </main>
      <Footer />
    </>
  )
}
