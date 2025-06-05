import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Palette, ShoppingCart, TrendingUp, Target } from "lucide-react"

export default function BoykotMaterialesArtePage() {
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
                  Ecommerce
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Boykot Materiales de Arte</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Plataforma de ecommerce personalizada con integraciones de marketplace y plan de crecimiento
                  aprovechando SEO, SEM y Meta Ads para el mercado de materiales artísticos.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-transparent z-10"></div>
                <Image
                  src="/boykot-materiales-de-arte.png"
                  alt="Boykot Materiales de Arte"
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
                    Boykot es una empresa chilena especializada en la venta de materiales de arte de alta calidad, con
                    un enfoque particular en pinturas acrílicas, marcadores, lápices y materiales para artistas
                    profesionales y aficionados.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El desafío principal era crear una plataforma de ecommerce robusta que no solo permitiera la venta
                    directa, sino que también se integrara con marketplaces existentes como MercadoLibre y Amazon,
                    maximizando el alcance y las oportunidades de venta.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Desarrollamos una estrategia integral que combinó el desarrollo de una plataforma ecommerce
                    personalizada con un plan de crecimiento digital que incluye SEO técnico, campañas SEM y publicidad
                    en Meta Ads, posicionando a Boykot como líder en el mercado de materiales artísticos online.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Boykot Materiales de Arte</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Duración</h4>
                    <p>6 meses</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Año</h4>
                    <p>2023</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Servicios</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm">Desarrollo Ecommerce</li>
                      <li className="text-sm">Integración Marketplaces</li>
                      <li className="text-sm">SEO Técnico</li>
                      <li className="text-sm">Campañas SEM</li>
                      <li className="text-sm">Meta Ads</li>
                      <li className="text-sm">Estrategia de Crecimiento</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategias Implementadas */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Estrategias Implementadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Ecommerce Personalizado</h3>
                <p className="text-sm text-gray-400">Plataforma optimizada para materiales de arte</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Integración Marketplaces</h3>
                <p className="text-sm text-gray-400">Conexión con MercadoLibre y Amazon</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">SEO & SEM</h3>
                <p className="text-sm text-gray-400">Posicionamiento orgánico y campañas pagadas</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Meta Ads</h3>
                <p className="text-sm text-gray-400">Campañas segmentadas en Facebook e Instagram</p>
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
                <p className="text-gray-200">Aumento del 250% en ventas online</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Integración exitosa con 3 marketplaces</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">ROI de 400% en campañas publicitarias</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-200">Posicionamiento #1 en términos clave</p>
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
                  "Analoga no solo nos ayudó a crear una plataforma de ecommerce excepcional, sino que desarrolló una
                  estrategia integral que nos posicionó como líderes en el mercado de materiales de arte online. Las
                  integraciones con marketplaces y las campañas publicitarias han superado todas nuestras expectativas."
                </p>
                <div>
                  <p className="font-semibold">Carlos Mendoza</p>
                  <p className="text-sm text-gray-400">Fundador, Boykot Materiales de Arte</p>
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
              <h2 className="text-3xl font-bold mb-4">¿Necesitas una estrategia de crecimiento para tu ecommerce?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a integrar marketplaces y desarrollar campañas publicitarias efectivas.
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
