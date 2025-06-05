import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, BarChart3, Zap, Globe } from "lucide-react"

export default function EsbuenisimoNewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background z-0"></div>

          {/* Animated dots background */}
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
                <div className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
                  Desarrollo Web & SEO
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">Esbuenisimo News</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">
                  Upgrade tecnológico con foco en SEO, performance y seguridad para un medio de comunicación con más de
                  3 mil artículos SEO.
                </p>

                <a
                  href="https://esbuenisimo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Visitar Sitio Web
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/esbuenisimo-hero.png"
                  alt="Esbuenisimo News - Sitio web"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detalles del Proyecto */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Sobre el Proyecto</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 mb-4">
                    Esbuenisimo News es un medio de comunicación online, chileno, que se dedica a la generación de
                    contenidos SEO y link building.
                  </p>
                  <p className="text-gray-300 mb-4">
                    El principal desafío fue hacer un upgrade de la tecnología usada para mejorar tiempos de carga,
                    seguridad y escalabilidad, para un blog con más de 10 mil visitas y 3 mil artículos SEO indexados en
                    Google.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Para esto desarrollamos un frontend Headless con NextJS y hospedado en la nube. Mantuvimos WordPress
                    como gestor de contenidos (CMS).
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Cliente</h4>
                    <p>Esbuenismo Labs</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Duración</h4>
                    <p>2 meses</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Año</h4>
                    <p>2025</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Servicios</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm">Desarrollo Frontend</li>
                      <li className="text-sm">Desarrollo Backend</li>
                      <li className="text-sm">Arquitectura solución</li>
                      <li className="text-sm">SEO</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arquitectura de la Solución */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Arquitectura de la Solución</h2>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">Arquitectura Headless</h3>
                  <p className="text-gray-300 mb-6 text-center">
                    Implementamos una arquitectura headless que separa el frontend del backend para maximizar
                    rendimiento y flexibilidad
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Frontend Optimizado</h3>
                      <p className="text-sm text-gray-400">Next.js con SSG para máxima velocidad y SEO</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">API GraphQL</h3>
                      <p className="text-sm text-gray-400">Comunicación eficiente con WordPress</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">CDN Global</h3>
                      <p className="text-sm text-gray-400">Distribución de contenido optimizada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Galería del Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/esbuenisimo-hero.png"
                  alt="Esbuenisimo News - Página principal"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/esbuenisimo-mobile.png"
                  alt="Esbuenisimo News - Versión móvil"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Desafíos y Soluciones */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Desafíos</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">Generar un frontend con carga ultrarápida y web vitals en verde.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">Migrar el frontend sin dañar el SEO para +3 mil páginas.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">
                      Hospedar el sitio en una infraestructura global de alto performance sin gastar miles de dólares en
                      hosting.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Soluciones</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">
                      Frontend Headless desarrollado con Next.js con foco en performance y SEO.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">Habilitación de API GraphQL para comunicar con Backend.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 text-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300">
                      Hosting escalable, seguro con CDN global y cache de última generación.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Resultados</h2>

            {/* KPIs destacados - Ahora primero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-200">100% Rendimiento para web vital según Google PageSpeed</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-200">Grado A (88%) rendimiento según GTMetrix</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-200">70% más liviano, de 2.1 MB a 647 kb</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-200">100% uptime durante la migración</p>
              </div>
            </div>

            {/* Imágenes de rendimiento - Ahora después de los KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">PageSpeed Insights</h3>
                <Image
                  src="/esbuenisimo-pagespeed.png"
                  alt="PageSpeed Insights mostrando puntuación perfecta"
                  width={600}
                  height={400}
                  className="w-full h-[35%] object-contain rounded-lg"
                />
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">GTmetrix Performance</h3>
                <Image
                  src="/esbuenisimo-gtmetrix.png"
                  alt="GTmetrix mostrando calificación A"
                  width={600}
                  height={400}
                  className="w-full h-[35%] object-contain rounded-lg"
                />
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
                  "Gracias a Analoga, logramos que nuestro blog cargue como un ferrari, sin gastar presupuesto para un
                  equipo de F1. El trabajo super profesional, buena comunicación y desarrollos de calidad."
                </p>
                <div>
                  <p className="font-semibold">Felipe Morales</p>
                  <p className="text-sm text-gray-400">SEO Consultant & Esbuenisimo Labs founder</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>
            </div>
          </div>
        </section>

        {/* Tecnologías Utilizadas */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Tecnologías Utilizadas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center mb-4 bg-white/10 rounded-full p-3">
                  <Image
                    src="/nextjs-logo.png"
                    alt="Next.js"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-medium">Next.js</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Frontend Framework</p>
              </div>
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center mb-4 bg-white/10 rounded-full p-3">
                  <Image
                    src="/wordpress-logo.png"
                    alt="WordPress"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-medium">WordPress</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Headless CMS</p>
              </div>
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center mb-4 bg-white/10 rounded-full p-3">
                  <Image
                    src="/graphql-logo.png"
                    alt="GraphQL"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-medium">GraphQL</h3>
                <p className="text-sm text-gray-400 text-center mt-2">API Query Language</p>
              </div>
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 flex flex-col items-center">
                <div className="h-16 w-16 flex items-center justify-center mb-4 bg-white/10 rounded-full p-3">
                  <Image
                    src="/vercel-logo.png"
                    alt="Vercel"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-medium">Vercel</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Hosting & CDN</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Necesitas mejorar el rendimiento de tu sitio web?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a optimizar tu presencia online con soluciones de alto rendimiento y
                enfocadas en SEO.
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
