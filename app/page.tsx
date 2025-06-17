import Hero from "@/components/hero"
import BookingForm from "@/components/booking-form"
import Services from "@/components/services"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import HowToSchedule from "@/components/how-to-schedule"
import Contact from "@/components/contact"
import Introduction from "@/components/introduction"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
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
