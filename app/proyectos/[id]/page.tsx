import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react"

// Datos de proyectos ficticios (mismo array que en la página de proyectos)
const projects = [
  {
    id: "luxury-fashion",
    title: "Luxury Fashion Boutique",
    description:
      "Transformación digital completa para una exclusiva boutique de moda de lujo, aumentando sus ventas online en un 150%.",
    fullDescription: `
      Luxury Fashion Boutique es una reconocida marca de moda de lujo con más de 15 años de trayectoria en el mercado chileno. 
      Con tres tiendas físicas en exclusivos centros comerciales de Santiago, la marca buscaba expandir su presencia online 
      para llegar a clientes de todo el país y eventualmente a mercados internacionales.

      El desafío principal era crear una experiencia digital que reflejara la exclusividad y elegancia de la marca, 
      manteniendo la atención personalizada que caracterizaba a sus tiendas físicas, mientras se implementaban 
      soluciones técnicas robustas para gestionar inventario, pagos y logística.
    `,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Ecommerce",
    client: "Luxury Fashion Boutique",
    duration: "6 meses",
    year: "2022",
    services: [
      "Desarrollo de Ecommerce",
      "Diseño UX/UI",
      "Estrategia Digital",
      "Integración de Sistemas",
      "Email Marketing Automation",
    ],
    challenges: [
      "Crear una experiencia de compra online que reflejara la exclusividad de la marca",
      "Integrar el inventario de tiendas físicas con la plataforma online",
      "Implementar un sistema de atención personalizada virtual",
      "Desarrollar una estrategia de marketing digital enfocada en un público exclusivo",
    ],
    solutions: [
      "Desarrollo de plataforma ecommerce personalizada con Shopify Plus",
      "Diseño de interfaz premium con enfoque en la experiencia de usuario",
      "Implementación de sistema de inventario omnicanal",
      "Creación de programa de fidelización digital",
      "Estrategia de email marketing segmentada y automatizada",
    ],
    results: [
      "Aumento del 150% en ventas online en los primeros 6 meses",
      "Incremento del 70% en el valor promedio del carrito",
      "Reducción del 35% en devoluciones gracias a mejoras en la experiencia de usuario",
      "Expansión a mercados internacionales en Latinoamérica",
    ],
    testimonial: {
      quote:
        "Analoga transformó nuestra visión del comercio electrónico. No solo crearon una plataforma visualmente impresionante, sino que implementaron soluciones que realmente entienden las necesidades de una marca de lujo y nuestros clientes exclusivos.",
      author: "Carolina Mendoza",
      position: "Directora de Marketing, Luxury Fashion Boutique",
    },
    website: "https://luxuryfashion.com",
  },
  {
    id: "organic-market",
    title: "Organic Market",
    description:
      "Desarrollo de plataforma ecommerce y estrategia de marketing digital para mercado de productos orgánicos.",
    fullDescription: `
      Organic Market es un emprendimiento chileno dedicado a la venta de productos orgánicos, sustentables y de origen local. 
      Iniciaron como un pequeño mercado físico en Providencia, pero con la creciente demanda de productos saludables y 
      ecológicos, decidieron expandirse al canal digital.

      El principal desafío era crear una plataforma que no solo permitiera la venta de productos, sino que también 
      educara a los consumidores sobre los beneficios de la alimentación orgánica y sustentable, mientras se 
      mantenía la frescura y calidad que caracterizaba a sus productos.
    `,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Desarrollo Web",
    client: "Organic Market",
    duration: "4 meses",
    year: "2023",
    services: [
      "Desarrollo de Ecommerce",
      "Estrategia de Contenidos",
      "SEO",
      "Email Marketing",
      "Gestión de Redes Sociales",
    ],
    challenges: [
      "Crear un sistema de venta online que garantizara la frescura de los productos",
      "Desarrollar una estrategia de contenidos educativa sobre productos orgánicos",
      "Implementar un sistema logístico eficiente para entregas en Santiago",
      "Competir con grandes supermercados que estaban incursionando en productos orgánicos",
    ],
    solutions: [
      "Desarrollo de plataforma ecommerce con WooCommerce",
      "Implementación de sistema de reservas y pedidos programados",
      "Creación de blog educativo sobre alimentación saludable y sustentabilidad",
      "Estrategia SEO enfocada en términos relacionados con productos orgánicos",
      "Campaña de email marketing segmentada por intereses y hábitos de compra",
    ],
    results: [
      "Aumento del 200% en tráfico web en los primeros 3 meses",
      "Incremento del 180% en ventas online",
      "Crecimiento de base de suscriptores de 500 a 15,000 en 6 meses",
      "Posicionamiento en primeros resultados de Google para términos clave",
    ],
    testimonial: {
      quote:
        "Gracias a Analoga, pudimos llevar nuestra pasión por los productos orgánicos a miles de hogares en Santiago. Su enfoque estratégico no solo nos ayudó a vender más, sino a construir una comunidad comprometida con la alimentación saludable y sustentable.",
      author: "Matías Vergara",
      position: "Fundador, Organic Market",
    },
    website: "https://organicmarket.cl",
  },
  // Los demás proyectos tendrían una estructura similar
  {
    id: "tech-gadgets",
    title: "Tech Gadgets Store",
    description:
      "Optimización de conversión y estrategia SEO para tienda de gadgets tecnológicos, duplicando su tasa de conversión.",
    fullDescription: `
      Tech Gadgets Store es una tienda online especializada en gadgets tecnológicos innovadores. 
      A pesar de contar con un catálogo extenso y productos de calidad, su tasa de conversión era baja 
      y el tráfico orgánico limitado, lo que afectaba directamente sus ventas.

      El desafío principal era optimizar la experiencia de usuario para aumentar las conversiones y 
      desarrollar una estrategia SEO efectiva para incrementar la visibilidad orgánica en un mercado 
      altamente competitivo.
    `,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "CRO & SEO",
    client: "Tech Gadgets Store",
    duration: "5 meses",
    year: "2023",
    services: [
      "Conversion Rate Optimization",
      "SEO Técnico",
      "Optimización de Contenidos",
      "A/B Testing",
      "Análisis de UX",
    ],
    challenges: [
      "Baja tasa de conversión (menos del 1%)",
      "Alto porcentaje de abandono de carrito (78%)",
      "Posicionamiento orgánico deficiente para términos clave",
      "Experiencia de usuario confusa en el proceso de compra",
    ],
    solutions: [
      "Rediseño completo del proceso de checkout reduciendo los pasos de 5 a 2",
      "Implementación de estrategia de recuperación de carritos abandonados",
      "Optimización técnica SEO (velocidad, estructura, metadatos)",
      "Creación de contenido optimizado para términos clave del sector",
      "Programa de A/B testing continuo para optimizar elementos críticos",
    ],
    results: [
      "Aumento de la tasa de conversión de 0.8% a 2.1%",
      "Reducción del abandono de carrito en un 40%",
      "Incremento del 95% en tráfico orgánico",
      "Mejora del 65% en el tiempo de carga del sitio",
    ],
    testimonial: {
      quote:
        "Los resultados hablan por sí solos. Analoga transformó nuestra tienda online de un sitio con potencial a una máquina de ventas optimizada. Su enfoque metódico en CRO y SEO nos permitió competir con grandes players del mercado.",
      author: "Roberto Álvarez",
      position: "CEO, Tech Gadgets Store",
    },
    website: "https://techgadgetsstore.cl",
  },
  {
    id: "artisan-marketplace",
    title: "Artisan Marketplace",
    description:
      "Creación de marketplace para artesanos locales, conectando a más de 200 creadores con clientes globales.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Marketplace",
    results: "10K+ productos",
  },
  {
    id: "gourmet-delivery",
    title: "Gourmet Delivery",
    description:
      "Plataforma de delivery para restaurantes gourmet con sistema de suscripción y programa de fidelización.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Ecommerce & App",
    results: "30K+ pedidos mensuales",
  },
  {
    id: "sports-equipment",
    title: "Sports Equipment Pro",
    description:
      "Migración de tienda física a online para retailer de equipamiento deportivo, con integración omnicanal.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Omnichannel",
    results: "-40% en costos operativos",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Encontrar el proyecto por ID
  const project = projects.find((p) => p.id === params.id) || projects[0]

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
                  {project.category}
                </div>
                <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl">{project.title}</AnimatedTitle>
                <p className="text-lg text-gray-300 mb-8">{project.description}</p>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Visitar Sitio Web
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detalles del Proyecto */}
        {project.fullDescription && (
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Sobre el Proyecto</h2>
                  <div className="prose prose-lg prose-invert max-w-none">
                    {project.fullDescription.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-gray-300 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 h-fit">
                  <h3 className="text-xl font-bold mb-4">Información del Proyecto</h3>
                  <div className="space-y-4">
                    {project.client && (
                      <div>
                        <h4 className="text-sm text-gray-400">Cliente</h4>
                        <p>{project.client}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <h4 className="text-sm text-gray-400">Duración</h4>
                        <p>{project.duration}</p>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <h4 className="text-sm text-gray-400">Año</h4>
                        <p>{project.year}</p>
                      </div>
                    )}
                    {project.services && (
                      <div>
                        <h4 className="text-sm text-gray-400">Servicios</h4>
                        <ul className="mt-2 space-y-1">
                          {project.services.map((service, idx) => (
                            <li key={idx} className="text-sm">
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Galería de Imágenes */}
        {project.gallery && (
          <section className="py-16 bg-gray-950">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8">Galería del Proyecto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.gallery.map((image, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Imagen ${idx + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Desafíos y Soluciones */}
        {(project.challenges || project.solutions) && (
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.challenges && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Desafíos</h2>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mr-4 mt-1 text-primary">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM7.5 13.5L3 9L4.06 7.94L7.5 11.38L13.94 4.94L15 6L7.5 13.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300">{challenge}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Soluciones</h2>
                    <ul className="space-y-4">
                      {project.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mr-4 mt-1 text-primary">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM7.5 13.5L3 9L4.06 7.94L7.5 11.38L13.94 4.94L15 6L7.5 13.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300">{solution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Resultados */}
        {project.results && (
          <section className="py-16 bg-gray-950">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8 text-center">Resultados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-gray-200">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-lg border border-gray-700 relative">
                <div className="absolute -top-5 -left-5 text-primary text-6xl opacity-30">"</div>
                <div className="relative z-10">
                  <p className="text-xl text-gray-300 italic mb-6">"{project.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-sm text-gray-400">{project.testimonial.position}</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>
              </div>
            </div>
          </section>
        )}

        {/* Proyectos Relacionados */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Proyectos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link href={`/proyectos/${relatedProject.id}`} key={relatedProject.id} className="group">
                    <div className="bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded-full">
                          {relatedProject.category}
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{relatedProject.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio digital?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a transformar tu presencia online y alcanzar resultados excepcionales.
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
