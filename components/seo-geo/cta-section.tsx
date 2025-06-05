"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
        <div className="bg-gradient-to-r from-blue-600 via-emerald-500 to-teal-500 p-8 md:p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Dominar el Ecosistema de Búsqueda?
          </h2>
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            No te quedes atrás en la evolución de la búsqueda. Permite que Analoga te guíe hacia una visibilidad digital
            completa y sostenible.
          </p>
          <a
            href="/agendar" // O #contacto si prefieres el formulario en la misma página
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl group"
          >
            Solicitar Consultoría Gratuita
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
