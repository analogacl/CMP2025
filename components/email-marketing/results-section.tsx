"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function EmailResults() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=80&width=80&text=MG",
      quote:
        "Nuestras conversiones por email aumentaron 340% en 3 meses. La automatización nos ahorra 20 horas semanales.",
      results: ["340% más conversiones", "20h semanales ahorradas", "ROI de 5200%"],
    },
    {
      name: "Carlos Ruiz",
      role: "Director Marketing, EcoShop",
      image: "/placeholder.svg?height=80&width=80&text=CR",
      quote:
        "La segmentación inteligente transformó completamente nuestro email marketing. Ahora cada mensaje es relevante.",
      results: ["280% más engagement", "45% tasa de apertura", "15% tasa de conversión"],
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, StyleCo",
      image: "/placeholder.svg?height=80&width=80&text=AM",
      quote:
        "Los workflows automatizados recuperan carritos abandonados que antes perdíamos. Es como tener un vendedor 24/7.",
      results: ["65% carritos recuperados", "25% más ventas", "ROI de 3800%"],
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
            Casos de éxito reales
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo nuestros clientes han transformado sus resultados con email marketing automation.
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
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
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
                <Quote className="h-8 w-8 text-purple-400 mb-3" />
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm mb-3">Resultados obtenidos:</h4>
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Únete a más de 150 empresas que ya transformaron su email marketing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                <div className="text-gray-400">Clientes activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50M+</div>
                <div className="text-gray-400">Emails enviados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">320%</div>
                <div className="text-gray-400">Aumento promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4200%</div>
                <div className="text-gray-400">ROI promedio</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
