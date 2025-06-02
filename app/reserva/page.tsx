"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Iframe configuration based on service type and modality
const iframeConfig = {
  psicologia: {
    presencial: "https://agendamiento.reservo.cl/makereserva/agenda/v05ojpT0k0IZPX995971C5y9c6x3YF",
    online: "https://agendamiento.reservo.cl/makereserva/agenda/n016jNr000zIRw775k41ren9X1t3h",
  },
  psiquiatria: {
    presencial: "https://agendamiento.reservo.cl/makereserva/agenda/W0iFHBd0i0XUSK1B5l81pPj9K8t3l4",
    online: "https://agendamiento.reservo.cl/makereserva/agenda/V0cFpLr0X0jRqL0q5O31S2h9N6Q3ND",
  },
}

// Default iframe for other buttons
const defaultIframeSrc = "https://agendamiento.reservo.cl/makereserva/agenda/F00bJNy0x0f4l06M5a51dBd9V8g3og"

// Service type labels
const serviceLabels = {
  psicologia: "Psicología",
  psiquiatria: "Psiquiatría",
}

// Modality labels
const modalityLabels = {
  presencial: "Presencial",
  online: "Online",
}

function BookingContent() {
  const searchParams = useSearchParams()
  const [iframeSrc, setIframeSrc] = useState<string>("")
  const [serviceType, setServiceType] = useState<string>("")
  const [modality, setModality] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tipo = searchParams.get("tipo") || ""
    const modalidad = searchParams.get("modalidad") || ""

    setServiceType(tipo)
    setModality(modalidad)

    // Get the appropriate iframe URL
    if (tipo && modalidad && iframeConfig[tipo as keyof typeof iframeConfig]) {
      const config = iframeConfig[tipo as keyof typeof iframeConfig]
      const src = config[modalidad as keyof typeof config]
      if (src) {
        setIframeSrc(src)
      }
    } else {
      // Use default iframe if no specific selection or for other buttons
      setIframeSrc(defaultIframeSrc)
    }

    setIsLoading(false)
  }, [searchParams])

  const getPageTitle = () => {
    if (serviceType && modality) {
      const serviceLabel = serviceLabels[serviceType as keyof typeof serviceLabels]
      const modalityLabel = modalityLabels[modality as keyof typeof modalityLabels]
      return `Reserva tu Hora - ${serviceLabel} ${modalityLabel}`
    }
    return "Reserva tu Hora"
  }

  const getPageDescription = () => {
    if (serviceType && modality) {
      const serviceLabel = serviceLabels[serviceType as keyof typeof serviceLabels]
      const modalityLabel = modalityLabels[modality as keyof typeof modalityLabels]
      return `Agenda tu cita de ${serviceLabel} en modalidad ${modalityLabel}. Sistema de reservas online fácil y rápido.`
    }
    return "Agenda tu cita con nuestros profesionales de salud mental. Sistema de reservas online fácil y rápido."
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#015233] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Cargando sistema de reservas...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
            <h1 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">{getPageTitle()}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{getPageDescription()}</p>

            {serviceType && modality && (
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#015233] text-white">
                  {serviceLabels[serviceType as keyof typeof serviceLabels]}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#B8E399] text-[#015233]">
                  {modalityLabels[modality as keyof typeof modalityLabels]}
                </span>
              </div>
            )}
          </div>

          {/* Booking iframe */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {iframeSrc ? (
              <iframe
                style={{
                  borderRadius: "10px",
                  marginBottom: "20px",
                  width: "100%",
                  height: "600px",
                  border: "none",
                }}
                src={iframeSrc}
                title={`Sistema de Reservas - ${getPageTitle()}`}
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-[#262626] mb-4">Sistema de Reservas No Disponible</h3>
                <p className="text-gray-600 mb-6">
                  Lo sentimos, el sistema de reservas para esta combinación no está disponible en este momento.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Por favor, selecciona una opción válida o contacta directamente:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            )}
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

export default function ReservaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 pt-8 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#015233] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-gray-600">Cargando sistema de reservas...</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  )
}
