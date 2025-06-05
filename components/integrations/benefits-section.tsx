"use client"

import { motion } from "framer-motion"
import { Clock, TrendingUp, Shield, Zap } from "lucide-react"

export default function IntegrationsBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorra 80% del tiempo operativo",
      description: "Automatización que elimina tareas manuales repetitivas y errores humanos",
      metric: "80%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Aumenta productividad 300%",
      description: "Workflows optimizados que permiten a tu equipo enfocarse en tareas estratégicas",
      metric: "+300%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Procesos 10x más rápidos",
      description: "Sincronización instantánea que acelera todos los procesos de negocio",
      metric: "10x",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "99.9% de confiabilidad",
      description: "Integraciones robustas con monitoreo 24/7 y recuperación automática",
      metric: "99.9%",
      color: "from-orange-500 to-red-500",
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
            Beneficios que transforman tu operación
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Nuestras integraciones entregan resultados medibles que impactan directamente en la eficiencia y crecimiento
            de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                      <div
                        className={`bg-gradient-to-r ${benefit.color} text-white text-sm font-bold py-1 px-3 rounded-full`}
                      >
                        {benefit.metric}
                      </div>
                    </div>
                    <p className="text-gray-400 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">ROI promedio de 400% en el primer año</h3>
            <p className="text-gray-300 text-lg mb-6">
              Nuestros clientes recuperan la inversión en integraciones en promedio en 3-6 meses gracias a la eficiencia
              operativa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">Integraciones activas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-400">Reducción tiempo manual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime garantizado</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
