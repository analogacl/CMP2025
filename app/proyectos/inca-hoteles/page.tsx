import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, MapPin, Star, Wifi } from "lucide-react"

export default function IncaHotelesPage() {
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
                <div className="inline-block bg-orange-500/20 text-orange-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
                  Turismo
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Inca Hoteles</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Integración de motor de reservas para cadena hotelera, optimizando la experiencia de usuario y
                  aumentando las conversiones directas en el valle de los viñedos.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-yellow-500/20 to-transparent z-10"></div>
                <Image
                  src="/incahoteles.png"
                  alt="Inca Hoteles"
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
                    Inca Hoteles es una cadena hotelera ubicada en Los Andes, Chile, especializada en turismo enológico
                    y experiencias en viñedos. Con una ubicación privilegiada a solo 50 minutos de Santiago, ofrecen una
                    experiencia única para los amantes del vino y la naturaleza.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El principal desafío era implementar un sistema de reservas integrado que permitiera a los huéspedes
                    reservar directamente desde el sitio web, reduciendo la dependencia de plataformas externas como
                    Booking.com y aumentando los márgenes de ganancia.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Desarrollamos una solución que integra un motor de reservas personalizado con el sitio web
                    existente, manteniendo la estética elegante y la funcionalidad que caracteriza a la marca, mientras
                    optimizamos la experiencia de usuario para maximizar las conversiones.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Inca Hoteles</p>
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
                      <li className="text-sm">Motor de Reservas</li>
                      <li className="text-sm">Integración de Pagos</li>
                      <li className="text-sm">Optimización UX</li>
                      <li className="text-sm">Gestión de Disponibilidad</li>
                      <li className="text-sm">Panel Administrativo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características del Motor de Reservas */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Características del Motor de Reservas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Reservas en Tiempo Real</h3>
                <p className="text-sm text-gray-400">Disponibilidad actualizada instantáneamente</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Gestión de Habitaciones</h3>
                <p className="text-sm text-gray-400">Control completo de tipos y disponibilidad</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Experiencias Premium</h3>
                <p className="text-sm text-gray-400">Reserva de tours y actividades enológicas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Integración Completa</h3>
                <p className="text-sm text-gray-400">Sincronización con sistemas hoteleros</p>
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
                <p className="text-gray-200">Aumento del 180% en reservas directas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Reducción del 40% en comisiones externas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Mejora del 95% en experiencia de usuario</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Integración exitosa con PMS hotelero</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Necesitas un motor de reservas para tu hotel?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a aumentar las reservas directas y reducir las comisiones externas.
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
