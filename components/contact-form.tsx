"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, Loader2, ShieldCheck } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validar formulario
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Por favor, completa todos los campos requeridos")
      return
    }

    // Mostrar captcha
    setShowCaptcha(true)
    setError("")
  }

  const handleFinalSubmit = async () => {
    // Validar reCAPTCHA
    if (!captchaToken) {
      setError("Por favor, verifica que no eres un robot")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      // Enviar datos del formulario al servidor
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Ocurrió un error al enviar el formulario")
      }

      // Éxito
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
      setShowCaptcha(false)

      // Resetear reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al enviar el formulario")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Estilo para corregir los bordes blancos del reCAPTCHA
  const recaptchaStyle = `
  .recaptcha-container > div {
    overflow: hidden !important;
    border-radius: 4px !important;
  }
  .recaptcha-container iframe {
    margin: 0 !important;
    border: none !important;
  }
`

  return (
    <>
      <style jsx global>
        {recaptchaStyle}
      </style>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Conversemos</CardTitle>
          <CardDescription>
            Completa el formulario a continuación y nos pondremos en contacto contigo pronto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="rounded-md bg-green-50 p-4 text-green-700">
              <p className="text-center font-medium">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</p>
            </div>
          ) : showCaptcha ? (
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                  Verificación de seguridad
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Por favor, completa la verificación a continuación para enviar tu mensaje.
                </p>

                <div className="flex justify-center my-4 overflow-hidden rounded-md">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Esta es una clave de prueba, deberás reemplazarla con tu clave real
                    onChange={handleCaptchaChange}
                    theme="dark"
                    className="recaptcha-container"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-3 text-red-700">
                  <p className="text-center text-sm">{error}</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowCaptcha(false)}
                  disabled={isSubmitting}
                >
                  Volver
                </Button>
                <Button
                  type="button"
                  className="flex-1"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting || !captchaToken}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInitialSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu.correo@ejemplo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+56 9 1234 5678"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿Cómo podemos ayudarte?"
                  rows={4}
                  required
                />
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-3 text-red-700">
                  <p className="text-center text-sm">{error}</p>
                </div>
              )}

              <Button type="submit" className="w-full">
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Continuar
                </span>
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </>
  )
}
