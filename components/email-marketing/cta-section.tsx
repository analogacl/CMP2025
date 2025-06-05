"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function EmailCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
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
              ¿Listo para automatizar tu{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                email marketing?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a más de 150 empresas que ya transformaron sus resultados con nuestras soluciones de email marketing
              automation. Comienza hoy y ve resultados en 30 días.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6"
              >
                <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Consulta Gratuita</h3>
                <p className="text-gray-400 text-sm">
                  Análisis de tu estrategia actual y recomendaciones personalizadas
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6"
              >
                <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Implementación Rápida</h3>
                <p className="text-gray-400 text-sm">
                  Setup completo en 2-4 semanas con resultados desde el primer mes
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6"
              >
                <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Resultados Garantizados</h3>
                <p className="text-gray-400 text-sm">ROI promedio de 4200% con optimización continua</p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agendar">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                >
                  Solicitar Consulta Gratuita
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
                ✓ Sin compromisos a largo plazo ✓ Setup incluido ✓ Soporte 24/7
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <span>Resultados en 30 días</span>
                <span>•</span>
                <span>ROI promedio 4200%</span>
                <span>•</span>
                <span>150+ clientes satisfechos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
