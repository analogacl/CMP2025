"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { TrendingUp, Users, ShoppingCart, Zap, BarChart } from "lucide-react"

export default function StrategyBenefits() {
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-background" ref={ref}>
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
            RESULTADOS TANGIBLES
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Beneficios Clave{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              para tu Negocio
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Nuestra consultoría de estrategia digital ofrece ventajas competitivas que impulsan el crecimiento
            sostenible de tu empresa en el entorno digital.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/business-growth-digital-transformation.png"
                  alt="Beneficios de la Estrategia Digital"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600/20 to-primary/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Crecimiento promedio</p>
                    <p className="text-blue-500 font-bold">+85% anual</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Mejora de la Presencia Online</h4>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Aumento de Tráfico y Generación de Leads</h4>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Optimización de la Experiencia del Cliente</h4>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Eficiencia en Procesos de Negocio</h4>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Incremento de Ventas y ROI</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
