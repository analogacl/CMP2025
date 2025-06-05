"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, ShieldCheck, BarChart3, PencilRuler, TrendingUp, Users } from "lucide-react"

export function WhyAnalogaSection() {
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

  const features = [
    {
      icon: Lightbulb,
      title: "Pioneros en GEO",
      text: "Fuimos de los primeros en reconocer la importancia de la optimización para motores de búsqueda generativos y hemos desarrollado metodologías probadas.",
    },
    {
      icon: ShieldCheck,
      title: "Enfoque Ético",
      text: "No utilizamos tácticas de sombrero negro. Nuestras estrategias están diseñadas para construir una presencia digital sólida y duradera.",
    },
    {
      icon: BarChart3,
      title: "Análisis Avanzado",
      text: "Utilizamos herramientas de vanguardia para medir el impacto real en tu visibilidad y conversión.",
    },
    {
      icon: PencilRuler,
      title: "Contenido Estratégico",
      text: "Creamos y optimizamos contenido que establece tu marca como una autoridad para algoritmos y modelos generativos.",
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      text: "Definimos KPIs claros y proporcionamos informes detallados que muestran el impacto real de nuestras estrategias.",
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      text: "Combinamos especialistas en SEO tradicional con expertos en IA y PLN, ofreciendo una perspectiva integral única.",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
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
          ¿Por Qué Analoga es tu Aliado en SEO y GEO?
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-slate-300 leading-relaxed">
            En Analoga no solo nos mantenemos al día con las últimas tendencias en búsqueda digital; las anticipamos y
            las moldeamos. Nuestra experiencia combinada en SEO tradicional y optimización para búsqueda generativa nos
            posiciona como el socio ideal para maximizar tu visibilidad en todo el ecosistema de búsqueda.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
