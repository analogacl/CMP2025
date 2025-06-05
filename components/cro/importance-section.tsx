"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { TrendingUp, DollarSign, BarChart2, Target } from "lucide-react"

export default function CROImportance() {
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

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Mayor ROI de Marketing",
      description:
        "Maximiza el retorno de tus inversiones en marketing al convertir más visitantes en clientes sin aumentar el gasto en adquisición.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Reducción de Costos",
      description:
        "Disminuye el costo de adquisición de clientes (CAC) al aprovechar mejor el tráfico que ya estás generando.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Crecimiento Sostenible",
      description:
        "Construye una base sólida para el crecimiento a largo plazo con mejoras incrementales y acumulativas en tus tasas de conversión.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Ventaja Competitiva",
      description:
        "Destaca frente a la competencia con experiencias de usuario optimizadas que generan más conversiones y fidelidad.",
    },
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
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/cro-roi-chart.png"
                  alt="Gráfico de ROI de CRO"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="inline-block bg-primary/20 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
              IMPACTO EN EL NEGOCIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por Qué el CRO es{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Crucial</span>{" "}
              para tu Crecimiento?
            </h2>
            <div className="text-gray-300 space-y-6 mb-8">
              <p>
                En un mercado digital cada vez más competitivo, el CRO se ha convertido en un diferenciador crítico para
                las empresas que buscan maximizar su crecimiento. Mientras que aumentar el tráfico web implica costos
                crecientes, mejorar las conversiones permite extraer más valor del tráfico que ya tienes.
              </p>
              <p>
                El CRO no es solo una táctica, sino una estrategia fundamental que impacta directamente en tus
                resultados financieros. Un incremento del 20% en tu tasa de conversión puede traducirse en un aumento
                significativo de ingresos sin necesidad de invertir más en adquisición de tráfico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
