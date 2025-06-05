"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function CRODefinition() {
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
    <section id="definition" className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50" ref={ref}>
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
              FUNDAMENTOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué es la{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Optimización de la Tasa de Conversión
              </span>
              ?
            </h2>
            <div className="text-gray-300 space-y-6">
              <p>
                La Optimización de la Tasa de Conversión (CRO) es la práctica sistemática y basada en datos de mejorar
                el porcentaje de visitantes de un sitio web que realizan una acción deseada. Es un proceso científico
                que combina análisis de datos, psicología del usuario y diseño centrado en el cliente para incrementar
                la efectividad de tu presencia digital.
              </p>
              <p>
                A diferencia de simplemente aumentar el tráfico, el CRO se enfoca en maximizar el valor de los
                visitantes que ya tienes, convirtiendo más de ellos en clientes, suscriptores o leads. Esto implica
                identificar y eliminar los obstáculos en el recorrido del usuario, optimizar elementos clave de tu sitio
                web y crear experiencias que guíen naturalmente a los usuarios hacia la conversión.
              </p>
              <p>
                En Analoga, aplicamos metodologías probadas de CRO que van más allá de los cambios superficiales.
                Analizamos comportamientos de usuarios, realizamos pruebas A/B rigurosas y optimizamos cada elemento de
                tu embudo de conversión para lograr mejoras significativas y sostenibles en tus resultados de negocio.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/cro-funnel-optimization.png"
                  alt="Optimización del embudo de conversión"
                  width={800}
                  height={600}
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
                    <p className="text-sm">Reducción de abandono</p>
                    <p className="text-blue-500 font-bold">-30%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-sm">Aumento de ingresos</p>
                    <p className="text-purple-500 font-bold">+65%</p>
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
