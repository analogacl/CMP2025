"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Star } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CROResults() {
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

  const caseStudies = [
    {
      title: "Ecommerce de Moda",
      challenge:
        "Un ecommerce de moda premium enfrentaba altas tasas de abandono de carrito (78%) y bajas conversiones en móvil.",
      solution:
        "Rediseñamos el proceso de checkout, optimizamos la experiencia móvil y mejoramos la presentación de productos.",
      results: [
        "Reducción del 45% en abandono de carrito",
        "Aumento del 68% en conversiones móviles",
        "Incremento del 32% en el valor medio del pedido",
      ],
      image: "/cro-case-study-fashion.png",
    },
    {
      title: "SaaS B2B",
      challenge:
        "Una plataforma SaaS B2B tenía una baja tasa de conversión (1.2%) en su página de registro para pruebas gratuitas.",
      solution:
        "Optimizamos el formulario de registro, mejoramos el copy y creamos una nueva estructura de página de aterrizaje.",
      results: [
        "Aumento del 105% en la tasa de conversión",
        "Reducción del 40% en el costo de adquisición",
        "Incremento del 25% en la retención post-prueba",
      ],
      image: "/cro-case-study-saas.png",
    },
  ]

  const [activeCase, setActiveCase] = useState(0)

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
            RESULTADOS REALES
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Casos de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Éxito</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Descubre cómo hemos ayudado a empresas como la tuya a transformar sus tasas de conversión y potenciar sus
            resultados.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {caseStudies.map((study, index) => (
              <Button
                key={index}
                variant={activeCase === index ? "default" : "outline"}
                onClick={() => setActiveCase(index)}
                className={activeCase === index ? "bg-primary hover:bg-primary/90" : ""}
              >
                {study.title}
              </Button>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-800 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{caseStudies[activeCase].title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">El Desafío</h4>
                    <p className="text-gray-400">{caseStudies[activeCase].challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">Nuestra Solución</h4>
                    <p className="text-gray-400">{caseStudies[activeCase].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">Resultados</h4>
                    <ul className="space-y-2">
                      {caseStudies[activeCase].results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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
                          <p className="text-gray-300">{result}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={caseStudies[activeCase].image || "/placeholder.svg"}
                  alt={`Caso de éxito: ${caseStudies[activeCase].title}`}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:bg-gradient-to-l"></div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-lg border border-gray-700 relative">
              <div className="absolute -top-5 -left-5 text-primary text-6xl opacity-30">"</div>
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl text-gray-300 italic mb-6">
                  "El equipo de Analoga transformó completamente nuestra estrategia de conversión. Su enfoque metódico y
                  basado en datos nos permitió identificar problemas que ni siquiera sabíamos que teníamos. Los
                  resultados han sido extraordinarios: nuestra tasa de conversión aumentó un 87% en solo tres meses, lo
                  que se tradujo directamente en un incremento de ingresos del 65%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/professional-man-headshot.png"
                      alt="Director de Marketing"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Mendoza</p>
                    <p className="text-sm text-gray-400">Director de Marketing, TechSolutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
