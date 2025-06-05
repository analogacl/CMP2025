"use client"

import { motion } from "framer-motion"
import { Users, Settings, Zap, BarChart3, Target, CheckCircle } from "lucide-react"

export default function EmailProcess() {
  const steps = [
    {
      icon: Users,
      title: "Análisis de Audiencia",
      description: "Estudiamos tu base de datos y comportamiento de usuarios para crear segmentos efectivos",
      duration: "Semana 1",
    },
    {
      icon: Target,
      title: "Estrategia de Segmentación",
      description: "Definimos grupos específicos basados en comportamiento, demografía e intereses",
      duration: "Semana 1-2",
    },
    {
      icon: Settings,
      title: "Configuración de Workflows",
      description: "Creamos automatizaciones inteligentes para cada etapa del customer journey",
      duration: "Semana 2-3",
    },
    {
      icon: Zap,
      title: "Implementación y Testing",
      description: "Lanzamos las campañas con A/B testing para optimizar desde el primer día",
      duration: "Semana 3-4",
    },
    {
      icon: BarChart3,
      title: "Monitoreo y Optimización",
      description: "Análisis continuo y mejoras basadas en datos para maximizar resultados",
      duration: "Ongoing",
    },
    {
      icon: CheckCircle,
      title: "Escalamiento",
      description: "Expandimos las automatizaciones exitosas a nuevos segmentos y canales",
      duration: "Mes 2+",
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
            Nuestro proceso de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              implementación
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Un enfoque sistemático que garantiza resultados desde el primer mes, con optimización continua para
            maximizar tu ROI.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <span className="bg-purple-500/20 text-purple-400 text-sm font-medium py-1 px-3 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Resultados visibles desde el primer mes</h3>
            <p className="text-gray-300 text-lg">
              Nuestro proceso probado garantiza que veas mejoras significativas en tus métricas de email marketing en
              las primeras 4 semanas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
