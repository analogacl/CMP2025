import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Heart, Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Psicólogos FONASA en Santiago | Terapia Presencial y Reembolso FONASA",
  description: "Encuentra psicólogos FONASA en Santiago. Atención presencial, fácil acceso, precios asequibles y reembolso FONASA. Agenda tu primera sesión hoy mismo.",
  keywords: ["psicólogos FONASA", "Santiago", "terapia presencial", "reembolso FONASA", "salud mental", "psicología clínica"],
}

export default function PsicologosFonsaSantiagoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Psicólogos FONASA Santiago
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Si buscas atención psicológica de calidad en Santiago, con precios accesibles y la posibilidad de obtener reembolso a través de FONASA, te podeos ayudar. Nuestro equipo de psicólogos clínicos certificados te acompaña en tu proceso personal con sesiones presenciales en el corazón de la ciudad.
          </p>
          <Link href="/reserva">
            <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
              📅 Reserva aquí tu primera consulta
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            ¿Por qué elegir a nuestros psicólogos FONASA en Santiago?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Ubicación Céntrica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fácil acceso en el corazón de Santiago</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Psicólogos Certificados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Amplia experiencia y certificaciones</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Respaldo FONASA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Atención en salud mental con respaldo oficial</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-phillips-lightGreen rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-phillips-green" />
                </div>
                <CardTitle className="text-xl">Tarifas Preferenciales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Precios accesibles con opción de reembolso</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How FONASA Reimbursement Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Cómo funciona el reembolso FONASA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-xl text-phillips-green">Paso 1: Obtén tu orden médica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Solicita una orden médica a tu médico de cabecera o especialista</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-xl text-phillips-green">Paso 2: Agenda tu sesión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reserva tu cita con nuestros psicólogos certificados</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-xl text-phillips-green">Paso 3: Recibe tu reembolso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Presenta la boleta en FONASA y recibe tu reembolso</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Specialties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Especialidades disponibles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Ansiedad y estrés", description: "Manejo de trastornos de ansiedad y estrés cotidiano" },
              { title: "Depresión", description: "Tratamiento especializado para la depresión" },
              { title: "Terapia de pareja", description: "Mejora la comunicación y resolución de conflictos" },
              { title: "Problemas familiares", description: "Terapia familiar integral y mediación" },
              { title: "Orientación para adolescentes", description: "Apoyo especializado para jóvenes" },
              { title: "Trastornos del estado de ánimo", description: "Tratamiento de bipolaridad y otros trastornos" }
            ].map((specialty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl text-phillips-green">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agenda tu primera sesión
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Agenda tu cita hoy y comienza tu camino hacia el bienestar. Nuestro equipo está listo para recibirte en Santiago y brindarte el apoyo que necesitas.
          </p>
          <div className="space-y-4">
            <p className="text-lg font-medium">
              📅 Reserva aquí tu primera consulta – Atención presencial y con reembolso FONASA.
            </p>
            <Link href="/reserva">
              <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
                Reservar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              ¿Tienes dudas sobre el proceso FONASA?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo administrativo está disponible para ayudarte con toda la documentación necesaria y resolver cualquier consulta sobre el proceso de reembolso.
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
          </div>
        </div>
      </section>
    </div>
  )
}
