"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function IntroSection() {
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
    <section ref={ref} className="py-20 md:py-32 bg-slate-900">
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
          Impulsa tu Visibilidad Digital con SEO y GEO
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            El panorama de la búsqueda digital está evolucionando rápidamente. Ya no basta con aparecer en los
            resultados tradicionales de Google; ahora, tu contenido debe estar optimizado también para ser utilizado por
            los motores de búsqueda con IA generativa que responden directamente a las consultas de los usuarios.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700">
            <Image
              src="/seo-geo-ecosystem.png"
              alt="Ecosistema SEO y GEO integrado"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 mix-blend-overlay"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-100">Estrategia Dual Integrada</h3>
              <p className="text-slate-300">
                En Analoga, no vemos el SEO y el GEO como disciplinas separadas, sino como dos caras de la misma moneda.
                Nuestra estrategia integrada optimiza tu contenido para ambos ecosistemas simultáneamente, maximizando
                tu visibilidad total.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-100">Adaptación Continua</h3>
              <p className="text-slate-300">
                Los algoritmos y las tecnologías de búsqueda evolucionan constantemente. Nuestro enfoque se adapta en
                tiempo real a estos cambios, asegurando que tu estrategia de visibilidad siempre esté a la vanguardia.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-100">Resultados Medibles</h3>
              <p className="text-slate-300">
                Utilizamos métricas avanzadas para medir tanto el rendimiento SEO tradicional como la presencia en
                respuestas generativas, proporcionándote una visión completa de tu visibilidad digital.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
