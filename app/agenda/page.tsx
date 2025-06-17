import { Suspense } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Reserva tu Hora | Centro Médico Phillips",
  description: "Agenda tu cita con nuestros profesionales de salud mental. Sistema de reservas online fácil y rápido.",
}

function BookingIframe() {
  return (
    <iframe
      style={{
        borderRadius: "10px",
        marginBottom: "20px",
        width: "100%",
        height: "600px",
        border: "none",
      }}
      src="https://agendamiento.reservo.cl/makereserva/agenda/F00bJNy0x0f4l06M5a51dBd9V8g3og"
      title="Sistema de Reservas - Centro Médico Phillips"
      allowFullScreen
      loading="lazy"
    />
  )
}

function BookingFallback() {
  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#015233] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-600">Cargando sistema de reservas...</p>
      </div>
    </div>
  )
}

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back navigation */}
          <Link href="/" className="inline-flex items-center text-[#015233] hover:underline mb-8 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Page header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">Reserva tu Hora</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completa el formulario a continuación para agendar tu cita. Selecciona el tipo de atención y modalidad que
              prefieras.
            </p>
          </div>

          {/* Booking iframe with suspense for better loading experience */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Suspense fallback={<BookingFallback />}>
              <BookingIframe />
            </Suspense>
          </div>

          {/* Additional information */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#262626] mb-4">Información Importante</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-[#262626] mb-2">Horarios de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
              </div>
              <div>
                <h4 className="font-medium text-[#262626] mb-2">Modalidades</h4>
                <p>• Atención presencial en nuestras instalaciones</p>
                <p>• Videollamadas para atención online</p>
              </div>
              <div>
                <h4 className="font-medium text-[#262626] mb-2">Formas de Pago</h4>
                <p>• FONASA e ISAPRES</p>
                <p>• Pago particular</p>
              </div>
              <div>
                <h4 className="font-medium text-[#262626] mb-2">Confirmación</h4>
                <p>Recibirás un correo de confirmación con los detalles de tu cita</p>
              </div>
            </div>
          </div>

          {/* Contact information for alternative booking */}
          <div className="mt-6 bg-[#015233]/5 rounded-lg p-6">
            <h4 className="font-semibold text-[#262626] mb-3">¿Necesitas ayuda para agendar?</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+5626335519"
                className="inline-flex items-center justify-center bg-[#015233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015233]/90 transition-colors"
              >
                Llamar: +5626335519
              </a>
              <a
                href="mailto:info@centromedicophillips.cl"
                className="inline-flex items-center justify-center bg-white text-[#015233] border-2 border-[#015233] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
