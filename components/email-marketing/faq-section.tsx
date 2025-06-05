"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function EmailFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo toma ver resultados con email marketing automation?",
      answer:
        "Típicamente, nuestros clientes ven mejoras significativas en las primeras 2-4 semanas. Los resultados completos se materializan en 60-90 días, con aumentos promedio del 300% en conversiones.",
    },
    {
      question: "¿Qué plataformas de email marketing utilizan?",
      answer:
        "Trabajamos con las principales plataformas como Mailchimp, HubSpot, ActiveCampaign, Klaviyo, y otras. Seleccionamos la mejor opción según las necesidades específicas de tu negocio y presupuesto.",
    },
    {
      question: "¿Necesito una base de datos grande para empezar?",
      answer:
        "No necesariamente. Podemos trabajar con bases de datos desde 500 suscriptores. De hecho, es mejor empezar con automatización desde el principio para construir una audiencia comprometida desde el inicio.",
    },
    {
      question: "¿Cómo garantizan que los emails no lleguen a spam?",
      answer:
        "Implementamos mejores prácticas de deliverability: autenticación SPF/DKIM, gestión de reputación, limpieza de listas, contenido optimizado y monitoreo constante de métricas de entrega.",
    },
    {
      question: "¿Incluyen el diseño de templates y contenido?",
      answer:
        "Sí, incluimos diseño de templates responsive, creación de contenido estratégico, copywriting persuasivo y optimización continua basada en resultados de A/B testing.",
    },
    {
      question: "¿Qué tipo de automatizaciones implementan?",
      answer:
        "Implementamos secuencias de bienvenida, recuperación de carritos abandonados, nurturing de leads, reactivación de clientes inactivos, upselling/cross-selling, y workflows personalizados según tu industria.",
    },
    {
      question: "¿Proporcionan reportes y análisis?",
      answer:
        "Sí, entregamos reportes mensuales detallados con métricas clave, insights accionables, recomendaciones de optimización y análisis de ROI. También configuramos dashboards en tiempo real.",
    },
    {
      question: "¿Cuál es la inversión mínima para empezar?",
      answer:
        "Nuestros paquetes de email marketing automation inician desde $1,500 USD mensuales, incluyendo estrategia, implementación, contenido y optimización continua. El ROI típico es de 4200%.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de email marketing automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-800/50 hover:bg-gray-800/70 transition-colors flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
