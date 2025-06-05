"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function IntegrationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Qué tipos de sistemas pueden integrar?",
      answer:
        "Integramos prácticamente cualquier sistema: CRM (Salesforce, HubSpot), ERP (SAP, Oracle), e-commerce (Shopify, WooCommerce), marketing automation (Mailchimp, ActiveCampaign), sistemas de facturación, bases de datos, APIs de terceros y aplicaciones personalizadas.",
    },
    {
      question: "¿Cuánto tiempo toma implementar una integración?",
      answer:
        "Depende de la complejidad, pero típicamente: integraciones simples (1-2 semanas), integraciones complejas (4-6 semanas), y ecosistemas completos (8-12 semanas). Siempre entregamos en fases para que veas resultados rápidamente.",
    },
    {
      question: "¿Las integraciones afectan el rendimiento de mis sistemas?",
      answer:
        "No, diseñamos integraciones optimizadas que mejoran el rendimiento. Usamos técnicas como caching, procesamiento asíncrono y balanceadores de carga para garantizar que tus sistemas funcionen mejor, no peor.",
    },
    {
      question: "¿Qué pasa si uno de mis sistemas cambia o se actualiza?",
      answer:
        "Nuestras integraciones están diseñadas para ser resilientes. Incluimos versionado de APIs, manejo de errores automático y monitoreo 24/7. Además, ofrecemos mantenimiento continuo para adaptarnos a cambios.",
    },
    {
      question: "¿Pueden integrar sistemas legacy o muy antiguos?",
      answer:
        "Sí, tenemos experiencia integrando sistemas legacy. Usamos técnicas como APIs wrapper, conectores personalizados y middleware para conectar sistemas antiguos con tecnologías modernas sin modificar el sistema original.",
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos?",
      answer:
        "Implementamos protocolos de seguridad enterprise: encriptación end-to-end, autenticación OAuth 2.0, tokens JWT, auditoría completa, cumplimiento GDPR/SOC2, y monitoreo de seguridad 24/7.",
    },
    {
      question: "¿Proporcionan documentación y capacitación?",
      answer:
        "Sí, entregamos documentación técnica completa, guías de usuario, capacitación para tu equipo, y acceso a nuestro portal de soporte con recursos y mejores prácticas.",
    },
    {
      question: "¿Cuál es la inversión para integraciones personalizadas?",
      answer:
        "Los proyectos inician desde $5,000 USD para integraciones simples. Integraciones complejas van de $15,000-50,000 USD. Ofrecemos evaluación gratuita para darte un presupuesto exacto basado en tus necesidades específicas.",
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
            Resolvemos las dudas más comunes sobre nuestros servicios de integraciones y desarrollo de APIs.
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
