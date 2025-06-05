"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function IntegrationsResults() {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "CTO, LogiTech Solutions",
      image: "/placeholder.svg?height=80&width=80&text=RS",
      quote:
        "Las integraciones eliminaron 40 horas semanales de trabajo manual. Ahora nuestros datos fluyen perfectamente entre todos los sistemas.",
      results: ["40h semanales ahorradas", "0% errores de datos", "300% más eficiencia"],
    },
    {
      name: "Patricia López",
      role: "Directora Operaciones, RetailMax",
      image: "/placeholder.svg?height=80&width=80&text=PL",
      quote:
        "La sincronización en tiempo real entre nuestro e-commerce y ERP transformó completamente nuestra operación. ROI del 450% en 8 meses.",
      results: ["450% ROI", "Sincronización tiempo real", "95% menos errores"],
    },
    {
      name: "Miguel Torres",
      role: "CEO, FinanceFlow",
      image: "/placeholder.svg?height=80&width=80&text=MT",
      quote:
        "Conectar nuestro CRM con el sistema de facturación automatizó todo el proceso de ventas. Cerramos deals 60% más rápido.",
      results: ["60% ventas más rápidas", "100% automatización", "ROI 380%"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Casos de éxito en integraciones
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo nuestros clientes han optimizado sus operaciones con integraciones personalizadas que entregan
            resultados reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-400 mb-3" />
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm mb-3">Resultados obtenidos:</h4>
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
