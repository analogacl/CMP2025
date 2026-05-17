import type { Metadata } from "next"
import Hero from "@/components/hero"
import BrandTransition from "@/components/brand-transition"
import BookingForm from "@/components/booking-form"
import Services from "@/components/services"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import HowToSchedule from "@/components/how-to-schedule"
import Contact from "@/components/contact"
import Introduction from "@/components/introduction"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Optima Salud | Centro de Salud Mental Integral",
  description:
    "Optima Salud: psicólogos y psiquiatras en Santiago. Terapia presencial y online, FONASA e ISAPRES. Más de 30 años acompañando tu bienestar emocional.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "centro salud mental Santiago",
    "psicólogo Santiago",
    "psiquiatra Santiago",
    "terapia online Chile",
    "FONASA psicología",
  ],
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandTransition />
      <BookingForm />
      <Introduction />
      <Services />
      <Team />
      <Testimonials />
      <HowToSchedule />
      <Contact />
    </div>
  )
}
