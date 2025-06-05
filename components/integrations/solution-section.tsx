"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, Database, Workflow, Shield, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function IntegrationsSolution() {
  const features = [
    {
      icon: Database,
      title: "APIs Robustas",
      description: "Desarrollo de APIs RESTful y GraphQL para conectar cualquier sistema",
    },
    {
      icon: Workflow,
      title: "Automatización de Workflows",
      description: "Procesos automatizados que eliminan intervención manual",
    },
    {
      icon: Zap,
      title: "Sincronización en Tiempo Real",
      description: "Datos actualizados instantáneamente en todos los sistemas",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protocolos de seguridad y autenticación robustos",
    },
    {
      icon: BarChart3,
      title: "Monitoreo y Analytics",
      description: "Dashboards para supervisar el rendimiento de integraciones",
    },
    {
      icon: CheckCircle,
      title: "Testing Automatizado",
      description: "Pruebas continuas para garantizar funcionamiento óptimo",
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
            Nuestras Soluciones de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Integración
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Conectamos todos tus sistemas con integraciones personalizadas que automatizan workflows y optimizan tu
            operación para máxima eficiencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-transparent z-10"></div>
              <Image
                src="/integration-architecture.png" // Imagen actualizada
                alt="Integration Architecture"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Conectividad Total
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ecosistema integrado que trabaja como uno solo
            </h3>
            <p className="text-gray-400 text-lg">
              Nuestras integraciones personalizadas conectan CRM, ERP, e-commerce, marketing automation y cualquier
              sistema que uses, creando un flujo de datos perfecto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Integración con 500+ plataformas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">APIs personalizadas para casos únicos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Sincronización bidireccional en tiempo real</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Workflows automatizados complejos</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
