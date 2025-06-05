"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageSquare, Layout, FileText, Gift, Users } from "lucide-react"

export default function CROStrategies() {
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

  const strategies = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Copy y Mensajes Persuasivos",
      description:
        "Optimizamos cada elemento textual de tu sitio web para maximizar su impacto persuasivo. Desde titulares que captan la atención hasta descripciones de productos que resuelven objeciones y CTAs que impulsan a la acción, cada palabra se selecciona estratégicamente para guiar al usuario hacia la conversión.",
      examples: [
        "Titulares A/B testing para aumentar el engagement",
        "Optimización de CTAs para mayor claridad y urgencia",
        "Copywriting persuasivo basado en beneficios",
      ],
    },
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Diseño y Layout Orientado a la Conversión",
      description:
        "Rediseñamos elementos clave de tu interfaz para crear un recorrido visual intuitivo que guíe naturalmente hacia los puntos de conversión. Aplicamos principios de jerarquía visual, contraste y espacio en blanco para destacar los elementos más importantes y facilitar la toma de decisiones.",
      examples: [
        "Rediseño de páginas de producto para destacar beneficios clave",
        "Optimización de la jerarquía visual para guiar la atención",
        "Mejora de la navegación para reducir la fricción",
      ],
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Optimización de Formularios",
      description:
        "Simplificamos y optimizamos tus formularios para reducir la fricción y aumentar las tasas de completado. Analizamos cada campo, etiqueta y mensaje de error para crear una experiencia fluida que minimice el abandono y maximice las conversiones.",
      examples: [
        "Reducción de campos innecesarios para minimizar la fricción",
        "Implementación de validación en tiempo real para reducir errores",
        "Diseño de formularios multi-paso para conversiones complejas",
      ],
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: "Mejora de Ofertas y Propuestas de Valor",
      description:
        "Refinamos tus propuestas de valor y ofertas para hacerlas más atractivas y convincentes. Identificamos y destacamos los beneficios más relevantes para tu audiencia, creando ofertas irresistibles que impulsan la acción inmediata.",
      examples: [
        "Creación de ofertas limitadas para generar urgencia",
        "Desarrollo de garantías que reducen el riesgo percibido",
        "Optimización de bundling y pricing para aumentar el valor percibido",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Personalización Inteligente",
      description:
        "Implementamos estrategias de personalización basadas en datos para ofrecer experiencias relevantes a cada segmento de usuarios. Utilizamos información de comportamiento, demografía y preferencias para adaptar contenido, ofertas y recorridos que resuenen con las necesidades específicas de cada visitante.",
      examples: [
        "Personalización basada en comportamiento de navegación",
        "Recomendaciones de productos basadas en historial",
        "Contenido dinámico según la etapa del embudo de conversión",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-900/50" ref={ref}>
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
            TÁCTICAS EFECTIVAS
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Estrategias de CRO que{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Implementamos
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Aplicamos un conjunto probado de estrategias de optimización, personalizadas para tu negocio y adaptadas a
            tus objetivos específicos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="lg:col-span-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {strategy.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                    <p className="text-gray-400">{strategy.description}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <h4 className="text-lg font-semibold mb-4">Ejemplos de implementación:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategy.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-300">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
