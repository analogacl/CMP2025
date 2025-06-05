"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { BarChart2, Target, LineChart, Lightbulb, BarChart } from "lucide-react"

export default function StrategyProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50" ref={ref}>
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4"
          >
            NUESTRO ENFOQUE
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Qué es la{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Consultoría de Estrategia Digital
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            La consultoría de estrategia digital de Analoga es un servicio integral que ayuda a las empresas a
            planificar, desarrollar y ejecutar iniciativas digitales alineadas con sus objetivos de negocio. Combinamos
            análisis de datos, conocimiento del mercado y experiencia técnica para crear una hoja de ruta digital
            personalizada que maximiza tu presencia online, optimiza la experiencia de tus clientes y aumenta tus
            ventas.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">¿Qué implica nuestra Consultoría?</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Análisis de la Situación Actual</h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Definición de Objetivos Claros</h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Diseño de Estrategias Personalizadas</h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Plan de Implementación Detallado</h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Monitoreo y Análisis Continuo</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/digital-strategy-dashboard.png"
                  alt="Proceso de Estrategia Digital"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

              {/* Floating stat card */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 shadow-xl hidden lg:block">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-sm">Aumento de conversiones</p>
                    <p className="text-green-500 font-bold">+45%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-sm">Reducción de costos</p>
                    <p className="text-blue-500 font-bold">-30%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-sm">Aumento de tráfico</p>
                    <p className="text-purple-500 font-bold">+120%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
