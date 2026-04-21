import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, HeartHandshake, Activity, Calendar, Building2, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Convenios para Empresas | Salud Mental para Organizaciones",
  description:
    "Implementa convenios de salud mental para empresas, startups, universidades y comunidades. Programas con terapeutas certificados, atención online/presencial y talleres para equipos.",
  keywords: [
    "convenios empresas",
    "salud mental laboral",
    "beneficios para empleados",
    "terapia para empresas",
    "bienestar organizacional",
    "workshops salud mental",
  ],
}

const offerItems = [
  "+300 terapeutas certificados",
  "+30 tratamientos para reducir ansiedad, estres y depresion",
  "Atencion en diferentes idiomas",
  "Workshops y talleres para fortalecer equipos",
  "Atencion online y presencial",
]

const benefits = [
  "Aumenta la productividad",
  "Reduce el absentismo",
  "Mejora el clima laboral y organizacional",
  "Da mayor sentido al trabajo",
  "Reduce el riesgo de burnout",
  "Fortalece la inteligencia emocional y social",
]

const organizationTypes = [
  { name: "Empresas", icon: Building2 },
  { name: "Startups", icon: Briefcase },
  { name: "Universidades", icon: GraduationCap },
  { name: "Comunidades", icon: Users },
]

export default function ConveniosEmpresasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Convenios para empresas</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transformamos la cultura organizacional promoviendo la salud emocional y mental de las personas.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl font-semibold">"5 de cada 6 empleados prefieren salud mental que un salario alto"</p>
          </div>
          <Link href="/agenda">
            <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
              Solicitar informacion
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Soluciones para tu organizacion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {organizationTypes.map((type) => (
              <Card key={type.name} className="text-center border-0 shadow-md">
                <CardContent className="pt-6">
                  <type.icon className="w-8 h-8 text-phillips-green mx-auto mb-3" />
                  <p className="font-semibold text-gray-800">{type.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Que ofrecemos</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {offerItems.map((item) => (
              <Card key={item} className="border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-phillips-green mt-1 shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-phillips-lightGreen to-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-gray-800">Personas cubiertas</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-phillips-green mb-4">400.000</p>
              <p className="text-lg text-gray-600">colaboradores impactados por programas de salud mental</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Beneficios para tu organizacion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-phillips-green mt-1 shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-phillips-green to-phillips-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Activa un convenio de salud mental en tu empresa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Disena una estrategia de bienestar emocional para tu equipo con atencion profesional, talleres y acompanamiento continuo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agenda">
              <Button size="lg" className="bg-white text-phillips-green hover:bg-gray-100 text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Solicitar reunion
              </Button>
            </Link>
            <Link href="/reserva">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-phillips-green text-lg px-8 py-4"
              >
                Conocer servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
