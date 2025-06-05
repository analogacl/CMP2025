"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, Database, RefreshCw } from "lucide-react"

export default function IntegrationsProblem() {
  const problems = [
    {
      icon: Database,
      title: "Sistemas aislados",
      description: "Datos fragmentados en múltiples plataformas sin comunicación entre ellas",
      stat: "70% datos duplicados",
    },
    {
      icon: Clock,
      title: "Trabajo manual repetitivo",
      description: "Horas perdidas transfiriendo datos manualmente entre sistemas",
      stat: "25+ horas semanales",
    },
    {
      icon: RefreshCw,
      title: "Procesos ineficientes",
      description: "Workflows complejos que requieren intervención manual constante",
      stat: "60% más tiempo",
    },
    {
      icon: AlertTriangle,
      title: "Errores humanos",
      description: "Inconsistencias y errores por transferencia manual de información",
      stat: "15% tasa de error",
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
            ¿Tus sistemas no se comunican entre sí?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            La falta de integración entre sistemas genera ineficiencias operativas, errores costosos y pérdida de
            oportunidades de negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400 mb-3">{problem.description}</p>
                  <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium py-1 px-3 rounded-full">
                    {problem.stat}
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
            <h3 className="text-2xl font-bold text-white mb-4">
              El costo: Ineficiencia operativa y oportunidades perdidas
            </h3>
            <p className="text-gray-300 text-lg">
              Sin integraciones adecuadas, tu equipo pierde tiempo valioso en tareas manuales mientras los datos
              importantes se pierden entre sistemas desconectados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
