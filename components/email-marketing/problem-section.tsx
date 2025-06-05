"use client"

import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Bajas Tasas de Apertura",
      description: "Emails genéricos que no conectan con tu audiencia, resultando en tasas de apertura menores al 20%.",
      stat: "< 20%",
    },
    {
      icon: Clock,
      title: "Gestión Manual Ineficiente",
      description: "Horas perdidas enviando emails uno por uno, sin segmentación ni personalización efectiva.",
      stat: "20h/sem",
    },
    {
      icon: Users,
      title: "Segmentación Deficiente",
      description: "Envío masivo sin considerar intereses, comportamiento o etapa del customer journey.",
      stat: "0% CTR",
    },
    {
      icon: AlertTriangle,
      title: "Falta de Seguimiento",
      description: "Sin métricas claras ni optimización continua, perdiendo oportunidades de mejora.",
      stat: "Sin ROI",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-red-900/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Tu Email Marketing
              <span className="block text-red-400">No Está Funcionando?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La mayoría de las empresas pierden hasta el 80% de sus oportunidades de venta por no tener una estrategia
              de email marketing automatizada y personalizada.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 text-white">{problem.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{problem.description}</p>

                  {/* Stat */}
                  <div className="absolute top-4 right-4 bg-red-500/20 rounded-lg px-3 py-1">
                    <span className="text-red-400 font-bold text-sm">{problem.stat}</span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">¿Te Identificas con Estos Problemas?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                No estás solo. El 73% de las empresas luchan con estos mismos desafíos. Pero hay una solución que puede
                transformar tu email marketing completamente.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  73% empresas afectadas
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  $42 perdidos por cada $1 no optimizado
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
