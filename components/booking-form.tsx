"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useState, useCallback } from "react"
import { Calendar, Clock, User, Video } from "lucide-react"

export default function BookingForm() {
  const router = useRouter()
  const [serviceType, setServiceType] = useState<string>("")
  const [modalityType, setModalityType] = useState<string>("")

  const handleReservaClick = useCallback(() => {
    const params = new URLSearchParams()
    if (serviceType) params.set("tipo", serviceType)
    if (modalityType) params.set("modalidad", modalityType)

    const url = params.toString() ? `/reserva?${params.toString()}` : "/reserva"
    router.push(url)
  }, [router, serviceType, modalityType])

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">Agenda tu Cita</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona el tipo de atención y modalidad que prefieras para comenzar tu proceso de bienestar
            </p>
          </div>

          {/* Booking form */}
          <div className="bg-gradient-to-br from-[#015233]/5 to-[#B8E399]/10 p-8 rounded-2xl shadow-lg border border-[#015233]/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Service Type Selection */}
              <div className="space-y-3">
                <label htmlFor="service-type" className="flex items-center text-sm font-semibold text-[#262626] mb-2">
                  <User className="h-4 w-4 mr-2 text-[#015233]" />
                  Tipo de Atención
                </label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger
                    id="service-type"
                    className="w-full h-12 border-2 border-[#015233]/20 focus:border-[#015233] bg-white"
                  >
                    <SelectValue placeholder="Seleccionar especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="psicologia">Psicología</SelectItem>
                    <SelectItem value="psiquiatria">Psiquiatría</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Modality Selection */}
              <div className="space-y-3">
                <label htmlFor="modality-type" className="flex items-center text-sm font-semibold text-[#262626] mb-2">
                  <Video className="h-4 w-4 mr-2 text-[#015233]" />
                  Modalidad
                </label>
                <Select value={modalityType} onValueChange={setModalityType}>
                  <SelectTrigger
                    id="modality-type"
                    className="w-full h-12 border-2 border-[#015233]/20 focus:border-[#015233] bg-white"
                  >
                    <SelectValue placeholder="Seleccionar modalidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* CTA Button */}
              <div className="flex items-end">
                <button
                  className="w-full h-12 bg-[#015233] hover:bg-[#015233]/90 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  onClick={handleReservaClick}
                  aria-label="Reserva tu hora ahora"
                >
                  <Calendar className="h-4 w-4" />
                  RESERVAR HORA
                </button>
              </div>
            </div>

            {/* Additional information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#015233]/10">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-[#015233]" />
                <span>Respuesta inmediata</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-[#015233]" />
                <span>Horarios flexibles</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <User className="h-4 w-4 mr-2 text-[#015233]" />
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>

          {/* Focus on self-service */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Completa el formulario para agendar tu cita de forma rápida y sencilla
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
