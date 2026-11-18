import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Laptop, Shield, CheckCircle, Clock, Video } from "lucide-react"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"
import FonasaSteps from "@/components/fonasa-steps"
import JsonLd from "@/components/json-ld"
import RatingBadge from "@/components/rating-badge"
import { getBreadcrumbSchema } from "@/lib/schema-org"

export const metadata: Metadata = buildPageMetadata({
  title: "Psicólogos FONASA Online",
  description:
    "Psicólogos FONASA online en todo Chile: videollamada con bono FONASA desde $12.250 y horarios flexibles. Comienza tu proceso terapéutico desde casa.",
  path: "/psicologos-fonasa-online",
  keywords: [
    "psicólogos FONASA online",
    "terapia online",
    "bono FONASA psicólogo online",
    "psicólogo en línea",
    "salud mental",
    "teleconsulta",
  ],
})

export default function PsicologosFonasaOnlinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <JsonLd data={getBreadcrumbSchema([{ name: "Psicólogos FONASA online", path: "/psicologos-fonasa-online" }])} />
      <section className="bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Psicólogos FONASA online, en todo Chile</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Recibe atención psicológica online de calidad, con psicólogos clínicos certificados, pagando con
            bono FONASA. Agenda tu sesión por videollamada de forma rápida y segura.
          </p>
          <Link href="/reserva">
            <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4 h-auto max-w-full whitespace-normal">
              📅 Agenda tu primera sesión online
            </Button>
          </Link>
          <div className="mt-6">
            <RatingBadge tone="dark" />
          </div>
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
                <p className="text-gray-600">Pagas con bono FONASA, sin reembolsos</p>
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
                <p className="text-gray-600">Reserva, compra tu bono y atiéndete en pocos pasos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FonasaSteps modality="online" />

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

      {/* Enlazado interno: landing hermana + equipo */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href="/psicologos-fonasa-santiago" className="block rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">¿Prefieres una sesión presencial?</p>
              <p className="text-lg font-semibold text-phillips-green">Psicólogos FONASA en Santiago →</p>
              <p className="text-gray-600 mt-2">Atención en nuestra consulta de Santiago, Pasaje Phillips 15.</p>
            </Link>
            <Link href="/equipo" className="block rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Conoce a quienes te atenderán</p>
              <p className="text-lg font-semibold text-phillips-green">Nuestro equipo de psicólogos y psiquiatras →</p>
              <p className="text-gray-600 mt-2">Revisa la formación y enfoque de cada profesional antes de agendar.</p>
            </Link>
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
              <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4 h-auto max-w-full whitespace-normal">
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

    </div>
  )
}
