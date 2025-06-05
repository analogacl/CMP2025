import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/ecommerce/hero-section"
import ProblemSolution from "@/components/ecommerce/problem-solution"
import HydrogenTech from "@/components/ecommerce/hydrogen-tech"
import BaymardUX from "@/components/ecommerce/baymard-ux"
import KeyBenefits from "@/components/ecommerce/key-benefits"
import ContactCTA from "@/components/ecommerce/contact-cta"
import ClientLogos from "@/components/ecommerce/client-logos"

export const metadata: Metadata = {
  title: "Desarrollo Ecommerce de Alto Rendimiento | Analoga",
  description: "Diseño de tiendas Shopify ultrarrápidas y de alta conversión con Hydrogen y Baymard Institute",
}

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ClientLogos />
        <ProblemSolution />
        <HydrogenTech />
        <BaymardUX />
        <KeyBenefits />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
