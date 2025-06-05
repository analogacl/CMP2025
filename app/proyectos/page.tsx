import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

// Datos de proyectos reales
const projects = [
  {
    id: "centro-medico-phillips",
    title: "Centro Médico Phillips",
    description:
      "Renovación completa del sitio web con velocidades de carga ultra-rápidas y optimizaciones SEO. Incluye sistema de reservas online y funcionalidad de videollamadas.",
    image: "/centro-medico-phillips.png",
    category: "Sitio Médico",
    results: "Velocidad ultra-rápida",
  },
  {
    id: "boykot-materiales-arte",
    title: "Ecommerce Materiales de Arte (Boykot)",
    description:
      "Plataforma de ecommerce personalizada con integraciones de marketplace y plan de crecimiento aprovechando SEO, SEM y Meta Ads.",
    image: "/boykot-materiales-de-arte.png",
    category: "Ecommerce",
    results: "Crecimiento integral",
  },
  {
    id: "inca-hoteles",
    title: "Sitio Corporativo Inca Hoteles",
    description:
      "Integración de motor de reservas para cadena hotelera, optimizando la experiencia de usuario y aumentando las conversiones directas.",
    image: "/incahoteles.png",
    category: "Turismo",
    results: "Motor de reservas",
  },
  {
    id: "kliper-moda",
    title: "Ecommerce de Moda Kliper.cl",
    description:
      "Implementación de estrategia digital integral para tienda de moda online, optimizando conversiones y experiencia de usuario.",
    image: "/kliper.png",
    category: "Moda",
    results: "Estrategia digital",
  },
  {
    id: "dra-graciela-rojas",
    title: "Dra. Graciela Rojas",
    description:
      "Sitio web corporativo para psiquiatra con sistema de reservas online y funcionalidad de videollamadas para consultas remotas.",
    image: "/dra-graciela-rojas.png",
    category: "Salud Mental",
    results: "Consultas online",
  },
  {
    id: "esbuenisimonews",
    title: "EsBuenisimoNews",
    description:
      "Desarrollo de sitio de noticias con arquitectura headless usando Next.js y WordPress, logrando velocidades excepcionales y SEO optimizado.",
    image: "/esbuenisimo-hero.png",
    category: "Medios Digitales",
    results: "Arquitectura headless",
  },
]

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background z-0"></div>

          {/* Animated dots background */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedTitle>Nuestros Proyectos</AnimatedTitle>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Descubre cómo hemos ayudado a empresas a transformar su presencia digital y alcanzar resultados
                excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 border-b border-gray-800">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="ghost" className="rounded-full bg-primary/10 hover:bg-primary/20 text-white">
                Todos
              </Button>
              <Button variant="ghost" className="rounded-full hover:bg-gray-800/50 text-gray-400 hover:text-white">
                Ecommerce
              </Button>
              <Button variant="ghost" className="rounded-full hover:bg-gray-800/50 text-gray-400 hover:text-white">
                Salud
              </Button>
              <Button variant="ghost" className="rounded-full hover:bg-gray-800/50 text-gray-400 hover:text-white">
                Turismo
              </Button>
              <Button variant="ghost" className="rounded-full hover:bg-gray-800/50 text-gray-400 hover:text-white">
                Medios
              </Button>
            </div>
          </div>
        </section>

        {/* Proyectos Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link href={`/proyectos/${project.id}`} key={project.id} className="group">
                  <div className="bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded-full">
                        {project.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded-full">
                        {project.results}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        Ver Proyecto
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para ser nuestro próximo caso de éxito?</h2>
              <p className="text-gray-400 mb-8">
                Descubre cómo podemos ayudarte a transformar tu negocio digital y alcanzar resultados excepcionales.
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
