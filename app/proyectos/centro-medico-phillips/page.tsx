import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, Video, Calendar } from "lucide-react"

export default function CentroMedicoPhillipsPage() {
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
                <div className="inline-block bg-green-500/20 text-green-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
                  Sitio Médico
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Centro Médico Phillips</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Renovación completa del sitio web con velocidades de carga ultra-rápidas y optimizaciones SEO. Incluye
                  sistema de reservas online y funcionalidad de videollamadas.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/centro-medico-phillips.png"
                  alt="Centro Médico Phillips"
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
                    Centro Médico Phillips es una institución de salud con más de 30 años de experiencia en Chile,
                    especializada en bienestar y felicidad. Con un equipo multidisciplinario de expertos, buscaban
                    modernizar su presencia digital para ofrecer una mejor experiencia a sus pacientes.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El principal desafío era crear un sitio web que reflejara la confianza y profesionalismo de la
                    institución, mientras implementaba funcionalidades modernas como reservas online y consultas por
                    videollamada, especialmente importante durante y después de la pandemia.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Desarrollamos una solución integral que no solo mejoró significativamente la velocidad de carga y el
                    posicionamiento SEO, sino que también facilitó el acceso de los pacientes a los servicios médicos
                    tanto presenciales como remotos.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Centro Médico Phillips</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Duración</h4>
                    <p>4 meses</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Año</h4>
                    <p>2023</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Servicios</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm">Desarrollo Web</li>
                      <li className="text-sm">Optimización SEO</li>
                      <li className="text-sm">Sistema de Reservas</li>
                      <li className="text-sm">Integración Videollamadas</li>
                      <li className="text-sm">Optimización de Velocidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características Principales */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Características Implementadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Velocidad Ultra-rápida</h3>
                <p className="text-sm text-gray-400">Optimización completa para tiempos de carga mínimos</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Sistema de Reservas</h3>
                <p className="text-sm text-gray-400">Reservas online 24/7 integradas con agenda médica</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Videollamadas</h3>
                <p className="text-sm text-gray-400">Consultas médicas remotas seguras y confiables</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Equipo Multidisciplinario</h3>
                <p className="text-sm text-gray-400">Presentación clara de especialistas y servicios</p>
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
                <p className="text-gray-200">Velocidad de carga mejorada en un 85%</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Aumento del 120% en reservas online</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Posicionamiento SEO en top 3 para términos clave</p>
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
                  "Analoga transformó completamente nuestra presencia digital. El nuevo sitio web no solo es más rápido
                  y atractivo, sino que las funcionalidades de reservas online y videollamadas han revolucionado la
                  forma en que atendemos a nuestros pacientes. Hemos visto un aumento significativo en las consultas y
                  una mejora notable en la satisfacción del paciente."
                </p>
                <div>
                  <p className="font-semibold">Dr. Ricardo Phillips</p>
                  <p className="text-sm text-gray-400">Director Médico, Centro Médico Phillips</p>
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
              <h2 className="text-3xl font-bold mb-4">¿Necesitas modernizar tu sitio médico?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a implementar soluciones digitales que mejoren la experiencia de tus
                pacientes.
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
