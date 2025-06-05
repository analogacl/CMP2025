"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BarChart2, Beaker, Layers, RefreshCw } from "lucide-react"

export default function CROApproach() {
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

  const approaches = [
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Análisis Profundo de Datos",
      description:
        "Utilizamos herramientas avanzadas de análisis para comprender cómo los usuarios interactúan con tu sitio web. Analizamos mapas de calor, grabaciones de sesiones, embudos de conversión y métricas clave para identificar puntos de fricción y oportunidades de mejora. Este análisis detallado nos permite tomar decisiones basadas en datos reales, no en suposiciones.",
    },
    {
      icon: <Beaker className="h-8 w-8 text-primary" />,
      title: "Testeo y Validación",
      description:
        "Implementamos un riguroso proceso de pruebas A/B y multivariante para validar hipótesis y medir el impacto real de cada cambio. Diseñamos experimentos estadísticamente significativos que nos permiten determinar con precisión qué variaciones generan mejores resultados. Este enfoque científico elimina las conjeturas y garantiza mejoras basadas en evidencia.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Optimización de la Experiencia de Usuario",
      description:
        "Nos enfocamos en crear experiencias digitales intuitivas y persuasivas que guíen naturalmente a los usuarios hacia la conversión. Aplicamos principios de psicología del consumidor, diseño centrado en el usuario y mejores prácticas de UX para eliminar obstáculos y facilitar el recorrido del cliente. Cada elemento de la interfaz se optimiza para maximizar la claridad y minimizar la fricción.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Iteración y Mejora Continua",
      description:
        "Adoptamos un enfoque de mejora continua, donde cada optimización se convierte en la base para el siguiente ciclo de mejoras. Implementamos un proceso sistemático de medición, análisis, optimización y validación que genera ganancias incrementales y sostenibles a lo largo del tiempo. Este enfoque iterativo garantiza que tu tasa de conversión siga mejorando constantemente.",
    },
  ]

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
            METODOLOGÍA
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Aspectos Clave de Nuestro{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Enfoque CRO</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Nuestra metodología de optimización combina análisis de datos, experimentación científica y diseño centrado
            en el usuario para lograr resultados excepcionales.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                {approach.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
              <p className="text-gray-400">{approach.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
