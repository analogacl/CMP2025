import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Video, Shield, Award } from "lucide-react"

export default function DraGracielaRojasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          <div className="container relative z-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver a Proyectos
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
                  Salud Mental
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Dra. Graciela Rojas</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Sitio web corporativo para psiquiatra especialista en salud mental con sistema de reservas online y
                  funcionalidad de videollamadas para consultas remotas.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-transparent z-10"></div>
                <Image
                  src="/dra-graciela-rojas.png"
                  alt="Dra. Graciela Rojas"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Información del Proyecto */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Sobre el Proyecto</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 mb-4">
                    La Dra. Graciela Rojas es una reconocida psiquiatra con más de 25 años de experiencia en salud
                    mental, especializada en trastornos del ánimo, ansiedad y terapias cognitivo-conductuales. Como
                    Doctora en Medicina y Profesora Titular, buscaba modernizar su práctica profesional.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El principal desafío era crear una presencia digital profesional que transmitiera confianza y
                    credibilidad, mientras implementaba funcionalidades modernas como reservas online y consultas por
                    videollamada, especialmente importante para pacientes con dificultades de movilidad o que prefieren
                    la comodidad de consultas remotas.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Desarrollamos un sitio web elegante y profesional que refleja la experiencia y calidez humana de la
                    doctora, integrando tecnología de punta para facilitar el acceso a servicios de salud mental de
                    calidad, tanto presenciales como remotos.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Dra. Graciela Rojas</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Duración</h4>
                    <p>3 meses</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Año</h4>
                    <p>2023</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Servicios</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm">Diseño Web Profesional</li>
                      <li className="text-sm">Sistema de Reservas</li>
                      <li className="text-sm">Integración Videollamadas</li>
                      <li className="text-sm">Optimización SEO</li>
                      <li className="text-sm">Seguridad HIPAA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características Profesionales */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Características Profesionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Reservas Online</h3>
                <p className="text-sm text-gray-400">Sistema de citas integrado con calendario médico</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Telemedicina</h3>
                <p className="text-sm text-gray-400">Consultas por videollamada seguras y privadas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Privacidad</h3>
                <p className="text-sm text-gray-400">Cumplimiento de normativas de confidencialidad médica</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Credenciales</h3>
                <p className="text-sm text-gray-400">Presentación clara de experiencia y especialidades</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Resultados Obtenidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Aumento del 200% en consultas online</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Reducción del 60% en tiempo de gestión</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Mejora del 90% en accesibilidad para pacientes</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Implementación exitosa de telemedicina</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-lg border border-gray-700 relative">
              <div className="absolute -top-5 -left-5 text-primary text-6xl opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-300 italic mb-6">
                  "Analoga creó una solución digital que ha transformado mi práctica profesional. El sitio web no solo
                  refleja mi experiencia y profesionalismo, sino que las funcionalidades de reservas online y
                  videollamadas me han permitido brindar un mejor servicio a mis pacientes, especialmente durante
                  tiempos donde la accesibilidad es crucial."
                </p>
                <div>
                  <p className="font-semibold">Dra. Graciela Rojas</p>
                  <p className="text-sm text-gray-400">Psiquiatra, Doctora en Medicina</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Eres profesional de la salud y necesitas presencia digital?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a modernizar tu práctica con soluciones digitales seguras y
                profesionales.
              </p>
              <Link href="/agendar">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600">
                  Solicitar Consulta Gratuita
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
