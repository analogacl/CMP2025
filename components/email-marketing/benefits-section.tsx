"use client"

import { TrendingUp, Clock, Target, DollarSign, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "ROI de 4200%",
      description: "Por cada $1 invertido en email marketing automatizado, obtienes $42 de retorno.",
      metric: "4200%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "300% Más Conversiones",
      description: "Emails personalizados y automatizados convierten 3x más que campañas genéricas.",
      metric: "+300%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "15 Horas Ahorradas",
      description: "Automatización completa libera 15+ horas semanales para estrategia y crecimiento.",
      metric: "15h/sem",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "68% Open Rate",
      description: "Segmentación inteligente y timing perfecto aumentan apertura hasta 68%.",
      metric: "68%",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "50% Más Retención",
      description: "Workflows de nurturing mantienen clientes activos y aumentan lifetime value.",
      metric: "+50%",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "24/7 Automatización",
      description: "Sistema que trabaja mientras duermes, capturando leads y cerrando ventas.",
      metric: "24/7",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/10 to-background">
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
              Beneficios
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprobados
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de 500 empresas han transformado su email marketing con nuestra plataforma. Estos son los resultados
              que puedes esperar.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full backdrop-blur-sm">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Metric */}
                  <div
                    className={`text-3xl font-bold mb-3 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                  >
                    {benefit.metric}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Resultados Promedio de Nuestros Clientes</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Empresas Exitosas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">$2.1M</div>
                  <div className="text-gray-300">Revenue Generado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300">Satisfacción Cliente</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">6 meses</div>
                  <div className="text-gray-300">ROI Promedio</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
