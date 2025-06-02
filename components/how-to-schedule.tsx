"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Search, ClipboardCheck, Video } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HowToSchedule() {
  const router = useRouter()

  const handleReservaClick = () => {
    router.push("/reserva")
  }

  const steps = [
    {
      icon: <Search className="h-12 w-12 text-[#015233] mx-auto mb-4" />,
      title: "PASO 1",
      description: "Selecciona el tipo de atención y la modalidad que prefieras (presencial u online).",
    },
    {
      icon: <CalendarDays className="h-12 w-12 text-[#015233] mx-auto mb-4" />,
      title: "PASO 2",
      description: "Elige la fecha y hora que mejor se adapte a tu disponibilidad.",
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-[#015233] mx-auto mb-4" />,
      title: "PASO 3",
      description: "Completa el formulario con tus datos personales y confirma tu reserva.",
    },
    {
      icon: <Video className="h-12 w-12 text-[#015233] mx-auto mb-4" />,
      title: "PASO 4",
      description: "Recibirás un correo de confirmación con los detalles de tu cita.",
    },
  ]

  return (
    <section id="como-agendar" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">¿COMO AGENDAR UNA CITA?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg bg-white text-center">
              <CardContent className="pt-6">
                {step.icon}
                <h3 className="text-xl font-bold text-[#262626] mb-3">{step.title}</h3>
                <p className="text-[#262626]">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="cta-button py-4 px-8 text-base" onClick={handleReservaClick}>
            RESERVA TU HORA
          </button>
        </div>
      </div>
    </section>
  )
}
