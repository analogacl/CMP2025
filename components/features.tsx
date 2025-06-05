"use client"

import { BarChart2, ShoppingCart, TrendingUp, Search, Mail, Link, ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    name: "Estrategia Digital",
    description: "Un servicio integral de diseño y ejecución de estrategias para hacer crecer los canales digitales.",
    icon: BarChart2,
    slug: "estrategia-digital",
  },
  {
    name: "Desarrollo Ecommerce",
    description:
      "Crea una tienda online que cargue rápido y convierta visitas en clientes gracias a comprobadas técnicas de UX y ventas.",
    icon: ShoppingCart,
    slug: "desarrollo-ecommerce",
  },
  {
    name: "Conversion Rate Optimization",
    description:
      "Mejoramos la tasa de conversión de tu ecommerce con la aplicación de mejoras técnicas y comprobadas practicas.",
    icon: TrendingUp,
    slug: "conversion-rate-optimization",
  },
  {
    name: "SEO & GEO",
    description:
      "Mejoramos tu tráfico orgánico mediante estrategias SEO on page, linkbuilding y creación de contenidos.",
    icon: Search,
    slug: "seo-geo",
  },
  {
    name: "Email Marketing Automation",
    description: "Crea estrategias automatizadas para vender por correo electrónico a tus clientes actuales.",
    icon: Mail,
    slug: "email-marketing-automation",
  },
  {
    name: "Integraciones",
    description: "Integramos marketplaces, medios de pagos y herramientas de marketing para crecer tu negocio online.",
    icon: Link,
    slug: "integrations",
  },
]

export default function Features() {
  const router = useRouter()

  const handleFeatureClick = (slug: string) => {
    router.push(`/soluciones/${slug}`)
  }

  return (
    <section id="features" className="container space-y-12 py-16 md:space-y-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[58rem] text-center px-4 sm:px-6">
        <h2 className="relative inline-block font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl mb-6 overflow-hidden">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
            Soluciones de Vanguardia
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
          <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base md:text-lg">
          Descubre cómo puedes transformar tu negocio con tecnología y consultoria de negocios.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-pointer"
            onClick={() => handleFeatureClick(feature.slug)}
          >
            {/* Efecto de resplandor en esquina */}
            <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-xl opacity-70 group-hover:bg-primary/20 transition-all duration-500"></div>

            {/* Contenedor del icono con efecto premium */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 p-3 shadow-inner">
              <div className="relative">
                <feature.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-blue-400" />
                <div className="absolute inset-0 h-full w-full rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Título con efecto de gradiente al hover */}
            <h3 className="relative mb-3 text-lg font-bold md:text-xl">
              <span className="bg-clip-text transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400">
                {feature.name}
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>

            <p className="text-sm md:text-base text-gray-400">{feature.description}</p>

            {/* Icono sutil que indica que es clickeable */}
            <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
