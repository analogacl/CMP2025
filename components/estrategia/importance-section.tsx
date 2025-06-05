"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Check } from "lucide-react"

export default function StrategyImportance() {
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

  const stats = [
    { value: "73%", label: "de los consumidores utilizan múltiples canales durante su proceso de compra" },
    { value: "68%", label: "de las empresas han aumentado su presupuesto en estrategia digital" },
    { value: "89%", label: "de las empresas con estrategia digital clara superan a su competencia" },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50" ref={ref}>
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
              TRANSFORMACIÓN DIGITAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué es{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Indispensable
              </span>{" "}
              la Estrategia Digital Hoy?
            </h2>
            <div className="text-gray-300 space-y-6">
              <p>
                En un entorno empresarial donde la transformación digital ya no es opcional sino imperativa, contar con
                una estrategia digital sólida marca la diferencia entre prosperar o quedarse atrás. El comportamiento
                del consumidor ha evolucionado radicalmente hacia lo digital, y las empresas que no se adaptan pierden
                relevancia rápidamente.
              </p>
              <p>
                Una estrategia digital bien ejecutada no solo mejora tu competitividad actual, sino que construye la
                resiliencia necesaria para adaptarte a los cambios futuros del mercado, permitiéndote capitalizar nuevas
                oportunidades antes que tu competencia.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-300">
                  Las empresas con estrategia digital clara tienen un 2.8x mayor crecimiento de ingresos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-300">
                  El 76% de los consumidores investiga online antes de realizar una compra importante
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-gray-300">
                  Las empresas digitalmente maduras tienen un 26% más de rentabilidad que sus competidores
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800&query=digital+transformation+business+meeting+professional+strategy+planning"
                  alt="Importancia de la Estrategia Digital"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 p-4 grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
