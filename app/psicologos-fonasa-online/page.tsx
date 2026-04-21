import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Laptop, Shield, CheckCircle, Clock, Video } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Psicólogos FONASA Online | Terapia en Línea y Reembolso FONASA",
  description:
    "Accede a psicólogos FONASA online desde cualquier lugar de Chile. Atención por videollamada, horarios flexibles y opción de reembolso FONASA.",
  keywords: [
    "psicólogos FONASA online",
    "terapia online",
    "reembolso FONASA",
    "psicólogo en línea",
    "salud mental",
    "teleconsulta",
  ],
}

export default function PsicologosFonasaOnlinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Psicólogos FONASA Online</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Recibe atención psicológica online de calidad, con psicólogos clínicos certificados y la posibilidad de
            obtener reembolso a través de FONASA. Agenda tu sesión por videollamada de forma rápida y segura.
          </p>
          <Link href="/reserva">
            <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
              📅 Agenda tu primera sesión online
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            ¿Por qué elegir psicólogos FONASA online?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <Laptop className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Atención desde casa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Conéctate desde cualquier lugar con internet y privacidad</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Horarios flexibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Agenda sesiones en horarios compatibles con tu rutina</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Respaldo FONASA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Atención en salud mental con opción de reembolso</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Proceso simple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reserva, atiéndete y gestiona tu documentación en pocos pasos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Cómo funciona la atención online con FONASA
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-xl text-phillips-green">Solicita tu orden médica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pide una orden vigente con tu médico de cabecera o especialista</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-xl text-phillips-green">Agenda tu teleconsulta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reserva una hora y recibe el enlace de videollamada</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-xl text-phillips-green">Gestiona tu reembolso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Presenta la boleta y documentación requerida en FONASA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Especialidades disponibles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Ansiedad y estrés", description: "Acompañamiento para reducir síntomas y mejorar tu bienestar" },
              { title: "Depresión", description: "Intervenciones terapéuticas personalizadas y seguimiento continuo" },
              { title: "Terapia de pareja", description: "Sesiones online para fortalecer comunicación y acuerdos" },
              { title: "Problemas familiares", description: "Orientación para mejorar dinámicas y vínculos familiares" },
              { title: "Adolescentes", description: "Apoyo psicológico online para jóvenes y sus familias" },
              { title: "Estado de ánimo", description: "Evaluación y manejo de alteraciones del ánimo" },
            ].map((specialty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl text-phillips-green">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{specialty.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza tu terapia online hoy</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Agenda tu cita y recibe apoyo profesional desde donde estés. Nuestro equipo está preparado para acompañarte
            con una experiencia online segura y cercana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserva">
              <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
                Reservar sesión
              </Button>
            </Link>
            <Link href="/teleconsulta">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-phillips-green text-lg px-8 py-4"
              >
                <Video className="w-5 h-5 mr-2" />
                Ir a Teleconsulta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Documentación y tiempos de reembolso</h3>
            <p className="text-lg text-gray-600 mb-8">
              Si tienes dudas, nuestro equipo administrativo te orienta en cada paso para facilitar el proceso.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-phillips-green mb-3">📋 Documentación Requerida</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Orden médica vigente</li>
                  <li>• Carnet de identidad</li>
                  <li>• Comprobante de afiliación FONASA</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-phillips-green mb-3">⏰ Tiempo de Reembolso</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Proceso: 15-30 días hábiles</li>
                  <li>• Reembolso: Hasta 80% del valor</li>
                  <li>• Cobertura: Según plan de salud</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/agenda">
                <Button variant="outline" className="text-phillips-green border-phillips-green hover:bg-phillips-lightGreen">
                  <Calendar className="w-4 h-4 mr-2" />
                  Ver disponibilidad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
