"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Target, Zap, BarChart3, Users, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SolutionSection() {
  const solutions = [
    {
      icon: Brain,
      title: "IA Predictiva",
      description: "Algoritmos que predicen el mejor momento, contenido y frecuencia para cada contacto.",
      features: ["Análisis de comportamiento", "Predicción de engagement", "Optimización automática"],
    },
    {
      icon: Target,
      title: "Segmentación Avanzada",
      description: "Divide tu audiencia en micro-segmentos basados en 50+ variables de comportamiento.",
      features: ["Segmentación dinámica", "Perfiles de usuario", "Triggers personalizados"],
    },
    {
      icon: Zap,
      title: "Automatización Total",
      description: "Workflows que se ejecutan 24/7 sin intervención manual, desde welcome hasta win-back.",
      features: ["Workflows visuales", "Triggers automáticos", "A/B testing continuo"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-purple-900/10">
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
              La Solución:
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Email Marketing Inteligente
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestra plataforma de automatización combina IA avanzada, segmentación inteligente y personalización a
              escala para maximizar cada interacción con tus clientes.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Plataforma Todo-en-Uno</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Analytics en Tiempo Real</h4>
                      <p className="text-gray-300 text-sm">
                        Métricas detalladas de cada campaña, segmento y contacto individual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Gestión de Contactos</h4>
                      <p className="text-gray-300 text-sm">
                        CRM integrado con perfiles completos y historial de interacciones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Editor Visual</h4>
                      <p className="text-gray-300 text-sm">
                        Crea emails profesionales sin código con nuestro editor drag & drop.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Ver Demo en Vivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-white">Campaign Performance</h4>
                      <div className="text-xs text-gray-400">Últimas 24h</div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-400">68%</div>
                        <div className="text-xs text-gray-400">Open Rate</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-pink-400">24%</div>
                        <div className="text-xs text-gray-400">Click Rate</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-400">$12.4K</div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-400">4.2x</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-white/5 rounded-lg p-4 h-32 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">📊 Gráfico de Performance</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 text-white text-sm font-medium shadow-lg"
                >
                  +300% CTR
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
