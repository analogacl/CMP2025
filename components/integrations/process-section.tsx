"use client"

import { motion } from "framer-motion"
import { Search, FileText, Code, TestTube, Rocket, Settings } from "lucide-react"

export default function IntegrationsProcess() {
  const steps = [
    {
      icon: Search,
      title: "Análisis de Sistemas",
      description: "Auditamos tu infraestructura actual y identificamos oportunidades de integración",
      duration: "Semana 1",
    },
    {
      icon: FileText,
      title: "Diseño de Arquitectura",
      description: "Creamos el blueprint técnico con especificaciones detalladas de cada integración",
      duration: "Semana 1-2",
    },
    {
      icon: Code,
      title: "Desarrollo de APIs",
      description: "Construimos las integraciones personalizadas con las mejores prácticas",
      duration: "Semana 2-4",
    },
    {
      icon: TestTube,
      title: "Testing y QA",
      description: "Pruebas exhaustivas en ambiente de desarrollo antes del despliegue",
      duration: "Semana 4-5",
    },
    {
      icon: Rocket,
      title: "Implementación",
      description: "Despliegue gradual con monitoreo en tiempo real y rollback automático",
      duration: "Semana 5-6",
    },
    {
      icon: Settings,
      title: "Optimización Continua",
      description: "Monitoreo, mantenimiento y mejoras basadas en métricas de rendimiento",
      duration: "Ongoing",
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              integración
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Un enfoque metodológico que garantiza integraciones robustas, escalables y mantenibles desde el primer día.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

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
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <span className="bg-blue-500/20 text-blue-400 text-sm font-medium py-1 px-3 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
