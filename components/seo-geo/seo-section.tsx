"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Search, Code, FileText, LinkIcon } from "lucide-react"
import Image from "next/image"

export function SeoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-950">
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          SEO Tradicional: La Base de tu Presencia Online
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            El SEO tradicional sigue siendo fundamental para construir una presencia digital sólida. Optimizamos tu
            sitio para que aparezca en los resultados de búsqueda orgánicos, generando tráfico cualificado y
            construyendo autoridad en tu sector.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">
              Optimización para Motores de Búsqueda Convencionales
            </h3>
            <p className="text-slate-300 mb-6">
              Aplicamos las mejores prácticas de SEO para que tu sitio web sea fácilmente indexable y clasificable por
              los motores de búsqueda tradicionales como Google, Bing y Yahoo.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">Optimización técnica para rastreabilidad e indexación</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">Mejora de la velocidad y rendimiento del sitio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">Estructura de URLs y arquitectura de información optimizada</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/seo-traditional-concept.png"
                alt="SEO Tradicional"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-emerald-600/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-800/70 backdrop-blur-md rounded-lg p-4 shadow-xl border border-slate-700">
              <p className="text-slate-100 font-semibold">+65% de tráfico orgánico</p>
              <p className="text-slate-400 text-sm">promedio para nuestros clientes</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Palabras Clave",
              text: "Investigación exhaustiva de palabras clave relevantes para tu negocio, con análisis de intención de búsqueda y competencia.",
            },
            {
              icon: Code,
              title: "Optimización Técnica",
              text: "Mejora de aspectos técnicos como velocidad, estructura, metadatos y experiencia móvil para cumplir con los estándares de Google.",
            },
            {
              icon: FileText,
              title: "Contenido de Calidad",
              text: "Creación y optimización de contenido valioso, relevante y original que responda a las necesidades de tu audiencia.",
            },
            {
              icon: LinkIcon,
              title: "Backlinks",
              text: "Estrategias de construcción de enlaces de calidad que aumentan la autoridad de tu dominio y mejoran tu posicionamiento.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl border border-slate-700 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
