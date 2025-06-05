"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, TrendingUp, DollarSign, BarChart } from "lucide-react"

export default function KeyBenefits() {
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
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Velocidad Superior",
      description:
        "Tiendas que cargan en menos de 1 segundo, mejorando la experiencia del usuario y reduciendo la tasa de rebote.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Mayor Conversión",
      description:
        "Aumento promedio del 35-45% en la tasa de conversión gracias a la optimización de UX basada en investigación.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "ROI Mejorado",
      description:
        "Mayor retorno de inversión en marketing al convertir más visitantes en clientes y aumentar el valor promedio de pedido.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Ventaja Competitiva",
      description:
        "Destaca frente a la competencia con una tienda que no solo se ve bien, sino que convierte mejor y ofrece una experiencia superior.",
    },
  ]

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Beneficios{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              para tu negocio
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Nuestras tiendas Shopify de alto rendimiento no solo se ven bien, sino que generan resultados medibles para
            tu negocio.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center"
          >
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
              45%
            </p>
            <p className="text-lg text-gray-300">Aumento promedio en conversión</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center"
          >
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
              0.8s
            </p>
            <p className="text-lg text-gray-300">Tiempo promedio de carga</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-lg border border-primary/20 text-center"
          >
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">
              30%
            </p>
            <p className="text-lg text-gray-300">Reducción en abandono de carrito</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
