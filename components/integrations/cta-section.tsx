"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function IntegrationsCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              ¿Listo para conectar{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                todos tus sistemas?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a más de 200 empresas que ya optimizaron sus operaciones con nuestras integraciones personalizadas.
              Comienza hoy y ve resultados inmediatos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6"
              >
                <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Análisis Gratuito</h3>
                <p className="text-gray-400 text-sm">
                  Evaluación completa de tu infraestructura y oportunidades de integración
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6"
              >
                <Zap className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Implementación Rápida</h3>
                <p className="text-gray-400 text-sm">
                  Integraciones funcionales en 2-6 semanas con resultados inmediatos
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6"
              >
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Soporte 24/7</h3>
                <p className="text-gray-400 text-sm">
                  Monitoreo continuo y soporte técnico para garantizar funcionamiento óptimo
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agendar">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                >
                  Solicitar Análisis Gratuito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/proyectos">
                <Button size="lg" variant="outline">
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 text-sm mb-4">
                ✓ Sin compromisos a largo plazo ✓ Análisis gratuito incluido ✓ Soporte técnico 24/7
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <span>500+ integraciones activas</span>
                <span>•</span>
                <span>99.9% uptime garantizado</span>
                <span>•</span>
                <span>200+ clientes satisfechos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
