import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Users, ShoppingBag, Target } from "lucide-react"

export default function KliperModaPage() {
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
                <div className="inline-block bg-pink-500/20 text-pink-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
                  Moda
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Kliper.cl</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Implementación de estrategia digital integral para tienda de moda online, optimizando conversiones y
                  experiencia de usuario para marcas internacionales.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-transparent z-10"></div>
                <Image
                  src="/kliper.png"
                  alt="Kliper Moda"
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
                    Kliper.cl es una tienda de moda online que representa marcas internacionales reconocidas como GAP,
                    ofreciendo ropa de calidad para hombre, mujer y niños en el mercado chileno. Con un enfoque en la
                    moda contemporánea y accesible.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El desafío principal era desarrollar una estrategia digital integral que posicionara a Kliper como
                    una referencia en moda online en Chile, optimizando tanto la experiencia de usuario como las
                    conversiones, en un mercado altamente competitivo.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Implementamos una estrategia 360° que abarcó desde la optimización de la experiencia de usuario
                    hasta campañas de marketing digital segmentadas, posicionamiento SEO y estrategias de retención de
                    clientes, logrando un crecimiento sostenido en ventas y reconocimiento de marca.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Kliper.cl</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Duración</h4>
                    <p>8 meses</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Año</h4>
                    <p>2023</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Servicios</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm">Estrategia Digital</li>
                      <li className="text-sm">Optimización UX/UI</li>
                      <li className="text-sm">Marketing Digital</li>
                      <li className="text-sm">SEO & SEM</li>
                      <li className="text-sm">Email Marketing</li>
                      <li className="text-sm">Análisis de Conversión</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategia Digital Implementada */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Estrategia Digital Implementada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Optimización UX</h3>
                <p className="text-sm text-gray-400">Mejora en navegación y proceso de compra</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">SEO & SEM</h3>
                <p className="text-sm text-gray-400">Posicionamiento orgánico y campañas pagadas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Segmentación</h3>
                <p className="text-sm text-gray-400">Campañas personalizadas por audiencia</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Retención</h3>
                <p className="text-sm text-gray-400">Estrategias de fidelización y remarketing</p>
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
                <p className="text-gray-200">Aumento del 320% en conversiones</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Incremento del 280% en tráfico orgánico</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">ROI de 450% en campañas digitales</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Mejora del 65% en retención de clientes</p>
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
                  "La estrategia digital implementada por Analoga transformó completamente nuestro negocio. No solo
                  aumentamos significativamente las ventas, sino que logramos posicionarnos como una referencia en moda
                  online en Chile. Su enfoque integral y orientado a resultados superó todas nuestras expectativas."
                </p>
                <div>
                  <p className="font-semibold">María José Contreras</p>
                  <p className="text-sm text-gray-400">Directora de Marketing, Kliper.cl</p>
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
              <h2 className="text-3xl font-bold mb-4">¿Necesitas una estrategia digital para tu tienda de moda?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a optimizar conversiones y posicionar tu marca en el mercado digital.
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
