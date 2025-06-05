"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CalendarClock, Loader2 } from "lucide-react"

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    challenges: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Ocurrió un error al enviar el formulario")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al enviar el formulario")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">Agenda tu Auditoría Gratuita</CardTitle>
        <CardDescription className="text-gray-400">
          Completa el formulario y nos pondremos en contacto contigo para coordinar la auditoría.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="rounded-md bg-green-900/20 border border-green-800 p-4 text-green-400">
            <p className="text-center font-medium">
              ¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto para coordinar la
              auditoría.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-300">
                  Nombre
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-300">
                  Apellido
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu.correo@ejemplo.com"
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">
                Teléfono
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 1234 5678"
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-gray-300">
                Sitio Web
              </Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://tuempresa.com"
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-gray-300">
                ¿Cuáles son tus principales desafíos y objetivos hoy?
              </Label>
              <Textarea
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                placeholder="Cuéntanos sobre los desafíos que enfrentas y qué objetivos quieres alcanzar..."
                rows={4}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary resize-none"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-900/20 border border-red-800 p-3 text-red-400">
                <p className="text-center text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4" />
                  Solicitar Auditoría
                </span>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Al solicitar la auditoría, aceptas nuestra política de privacidad y términos de servicio.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
