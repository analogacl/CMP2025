import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, BarChart2, ShoppingCart } from "lucide-react"

export default function DesarrolloEcommercePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background z-0"></div>

          {/* Animated dots background */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          <div className="container relative z-10 px-4 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-6">
                  Shopify / VTEX + Baymard UX
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  Tiendas Shopify / VTEX de{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary">
                    alto rendimiento
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  Fusionamos la velocidad de Shopify / VTEX con la experiencia de usuario probada de Baymard Institute
                  para crear tiendas ultrarrápidas y de alta conversión.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg"
                  >
                    Solicitar consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Ver casos de éxito
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                  <Image
                    src="/modern-shopify-store.png"
                    alt="Tienda Shopify de alto rendimiento"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600/20 to-primary/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Velocidad de carga</p>
                      <p className="text-green-500 font-bold">0.4s</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600/20 to-primary/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <BarChart2 className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tasa de conversión</p>
                      <p className="text-blue-500 font-bold">+45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        {/* Problem Solution Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                  <Image
                    src="/frustrated-person-slow-website.png"
                    alt="Problemas comunes en tiendas online"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <p className="text-sm font-medium">Tiendas lentas pierden 7% de conversiones por segundo</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <p className="text-sm font-medium">70% de los usuarios abandonan por mala experiencia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  El problema con las{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                    tiendas online convencionales
                  </span>
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Las tiendas online tradicionales enfrentan desafíos significativos que afectan directamente a tus
                    ventas y al crecimiento de tu negocio:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Velocidad de carga lenta</p>
                        <p className="text-sm text-gray-400">
                          Temas sobrecargados y plugins innecesarios que ralentizan tu tienda y frustran a tus clientes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Experiencia de usuario deficiente</p>
                        <p className="text-sm text-gray-400">
                          Diseños genéricos que no consideran los patrones de comportamiento del usuario ni optimizan el
                          recorrido de compra.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Baja tasa de conversión</p>
                        <p className="text-sm text-gray-400">
                          Procesos de compra complicados y poco intuitivos que aumentan el abandono del carrito.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  solución
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Combinamos dos tecnologías líderes para crear tiendas Shopify que no solo se ven bien, sino que
                convierten mejor:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Shopify / VTEX</h3>
                  <p className="text-gray-400">
                    Framework de React que permite crear experiencias de compra dinámicas y ultrarrápidas, optimizadas
                    para dispositivos móviles.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Baymard Institute UX</h3>
                  <p className="text-gray-400">
                    Implementamos los hallazgos de más de 88,000 horas de investigación en UX de ecommerce para crear
                    experiencias que maximizan la conversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Beneficios{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  para tu negocio
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Nuestras tiendas Shopify de alto rendimiento no solo se ven bien, sino que generan resultados medibles
                para tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  title: "Velocidad Superior",
                  description:
                    "Tiendas que cargan en menos de 1 segundo, mejorando la experiencia del usuario y reduciendo la tasa de rebote.",
                },
                {
                  icon: <BarChart2 className="h-8 w-8 text-primary" />,
                  title: "Mayor Conversión",
                  description:
                    "Aumento promedio del 35-45% en la tasa de conversión gracias a la optimización de UX basada en investigación.",
                },
                {
                  icon: <ShoppingCart className="h-8 w-8 text-primary" />,
                  title: "ROI Mejorado",
                  description:
                    "Mayor retorno de inversión en marketing al convertir más visitantes en clientes y aumentar el valor promedio de pedido.",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Ventaja Competitiva",
                  description:
                    "Destaca frente a la competencia con una tienda que no solo se ve bien, sino que convierte mejor y ofrece una experiencia superior.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
                  45%
                </p>
                <p className="text-lg text-gray-300">Aumento promedio en conversión</p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
                  0.8s
                </p>
                <p className="text-lg text-gray-300">Tiempo promedio de carga</p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
                  30%
                </p>
                <p className="text-lg text-gray-300">Reducción en abandono de carrito</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestro{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">proceso</span>
              </h2>
              <p className="text-lg text-gray-300">
                Un enfoque metódico y centrado en resultados para crear tu tienda Shopify de alto rendimiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Análisis y Estrategia",
                  description: "Evaluamos tu negocio, competencia y objetivos para crear una estrategia personalizada.",
                },
                {
                  number: "02",
                  title: "Diseño UX/UI",
                  description:
                    "Creamos wireframes y diseños basados en investigación de UX para maximizar conversiones.",
                },
                {
                  number: "03",
                  title: "Desarrollo Técnico",
                  description: "Implementamos tu tienda con Shopify / VTEX, optimizando velocidad y rendimiento.",
                },
                {
                  number: "04",
                  title: "Lanzamiento y Optimización",
                  description: "Lanzamos tu tienda y realizamos mejoras continuas basadas en datos reales.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para llevar tu tienda Shopify al{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  siguiente nivel
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Solicita una consulta gratuita y descubre cómo podemos ayudarte a crear una tienda Shopify de alto
                rendimiento que convierta más y crezca más rápido.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg"
              >
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preguntas{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  frecuentes
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Respuestas a las preguntas más comunes sobre nuestro servicio de desarrollo de tiendas Shopify
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
              {[
                {
                  question: "¿Cuánto tiempo toma desarrollar una tienda Shopify con Hydrogen?",
                  answer:
                    "El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma entre 4 y 8 semanas desde la estrategia inicial hasta el lanzamiento. Trabajamos con un cronograma claro y transparente para que sepas exactamente qué esperar en cada etapa.",
                },
                {
                  question: "¿Qué hace que Shopify Hydrogen sea mejor que un tema tradicional?",
                  answer:
                    "Shopify Hydrogen utiliza React y una arquitectura headless que permite tiempos de carga significativamente más rápidos, experiencias de usuario más dinámicas y personalizadas, y mejor rendimiento en dispositivos móviles. Esto se traduce directamente en mayores tasas de conversión y ventas.",
                },
                {
                  question: "¿Puedo migrar mi tienda Shopify existente a Hydrogen?",
                  answer:
                    "Sí, podemos migrar tu tienda Shopify existente a Hydrogen manteniendo todos tus productos, colecciones, clientes y contenido. El proceso es fluido y aseguramos que no haya interrupciones en tus ventas durante la transición.",
                },
                {
                  question: "¿Qué soporte ofrecen después del lanzamiento?",
                  answer:
                    "Ofrecemos planes de soporte continuo que incluyen mantenimiento técnico, actualizaciones de seguridad, optimización continua basada en datos de uso real, y soporte prioritario para cualquier problema que pueda surgir.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
