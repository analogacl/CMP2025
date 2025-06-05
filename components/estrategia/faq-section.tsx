"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function StrategyFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una estrategia digital completa?",
      answer:
        "El tiempo para desarrollar una estrategia digital completa varía según la complejidad de tu negocio y objetivos, pero generalmente toma entre 4 y 6 semanas. Este período incluye la fase de análisis, investigación, definición de objetivos, diseño de la estrategia y creación del plan de implementación. Trabajamos con un cronograma claro y transparente para que sepas exactamente qué esperar en cada etapa.",
    },
    {
      question: "¿Cómo miden el éxito de una estrategia digital?",
      answer:
        "Medimos el éxito a través de KPIs específicos alineados con tus objetivos de negocio. Estos pueden incluir aumento de tráfico cualificado, tasas de conversión, generación de leads, engagement en redes sociales, posicionamiento SEO, y lo más importante, el impacto en ingresos y ROI. Implementamos herramientas de análisis avanzadas para monitorear estos indicadores en tiempo real y proporcionamos informes periódicos detallados que muestran el progreso y los resultados obtenidos.",
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños y sectores?",
      answer:
        "Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones, y en diversos sectores. Nuestra metodología se adapta a las necesidades específicas de cada cliente, considerando su tamaño, industria, recursos disponibles y objetivos particulares. Tenemos experiencia en sectores como retail, servicios profesionales, tecnología, salud, educación, manufactura y más. Cada estrategia que desarrollamos es completamente personalizada.",
    },
    {
      question: "¿Qué diferencia a Analoga de otras consultoras de estrategia digital?",
      answer:
        "Nos diferenciamos por nuestro enfoque integral basado en datos, combinado con un profundo conocimiento del mercado digital latinoamericano. No ofrecemos soluciones genéricas, sino estrategias personalizadas y accionables con un claro enfoque en resultados medibles. Además, no solo entregamos recomendaciones, sino que acompañamos a nuestros clientes durante todo el proceso de implementación, ajustando la estrategia según sea necesario para maximizar los resultados.",
    },
    {
      question: "¿Necesito tener conocimientos técnicos para implementar la estrategia?",
      answer:
        "No, no necesitas tener conocimientos técnicos avanzados. Nuestra consultoría está diseñada para ser accesible y comprensible para todos los niveles de la organización. Proporcionamos guías detalladas, capacitación y soporte continuo durante la implementación. Además, podemos trabajar directamente con tu equipo técnico o recomendarte profesionales calificados si necesitas asistencia adicional para implementar aspectos específicos de la estrategia.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50" ref={ref}>
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4"
          >
            PREGUNTAS FRECUENTES
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Resolvemos tus{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">dudas</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Respuestas a las preguntas más comunes sobre nuestra consultoría de estrategia digital
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border ${
                  openIndex === index ? "border-primary/50" : "border-gray-800"
                } transition-all duration-300`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
