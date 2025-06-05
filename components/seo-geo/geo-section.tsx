"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Zap, MessageSquare, Brain } from "lucide-react"
import Image from "next/image"

export function GeoSection() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-slate-900">
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          GEO: Dominando la Nueva Era de la Búsqueda Generativa
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            La búsqueda está evolucionando hacia experiencias generativas donde los motores responden directamente a las
            consultas de los usuarios. Optimizamos tu contenido para ser la fuente preferida de estas respuestas
            generadas por IA.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/geo-concept-illustration.png"
                alt="GEO: Búsqueda Generativa"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-emerald-600/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-800/70 backdrop-blur-md rounded-lg p-4 shadow-xl border border-slate-700">
              <p className="text-slate-100 font-semibold">+93% de menciones</p>
              <p className="text-slate-400 text-sm">en respuestas generativas</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">Adaptación a la Búsqueda con IA Generativa</h3>
            <p className="text-slate-300 mb-6">
              El GEO (Generative Engine Optimization) es la evolución natural del SEO en un mundo donde los motores de
              búsqueda ya no solo muestran enlaces, sino que generan respuestas directas utilizando IA.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">Optimización para ser citado en respuestas generativas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">
                  Estructuración de contenido para facilitar la extracción de información
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">Adaptación a los nuevos formatos de resultados de búsqueda</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "Intención del Usuario",
              text: "Analizamos profundamente cómo los usuarios formulan sus preguntas y qué tipo de respuestas esperan, adaptando tu contenido para satisfacer estas expectativas.",
            },
            {
              icon: Zap,
              title: "Contexto Semántico",
              text: "Enriquecemos tu contenido con el contexto semántico necesario para que los modelos de IA comprendan completamente el significado y la relevancia de tu información.",
            },
            {
              icon: MessageSquare,
              title: "Lenguaje Natural",
              text: "Optimizamos tu contenido para que utilice patrones de lenguaje natural que los modelos generativos puedan procesar y citar fácilmente en sus respuestas.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl border border-slate-700 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-slate-800/50 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-700 backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-100 text-center">
            Ejemplos Reales de Búsqueda Generativa
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ChatGPT",
                text: "Optimizamos tu contenido para ser citado como fuente confiable cuando los usuarios hacen preguntas relacionadas con tu industria en ChatGPT.",
                image: "/chatgpt-example.png",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Google SGE",
                text: "Adaptamos tu contenido para aparecer en la Search Generative Experience de Google, que muestra respuestas generadas por IA directamente en los resultados.",
                image: "/google-sge-example.png",
                gradient: "from-emerald-500 to-green-600",
              },
              {
                title: "Bing Chat",
                text: "Mejoramos la probabilidad de que tu contenido sea utilizado como fuente en las respuestas conversacionales de Bing Chat.",
                image: "/bing-chat-example.png",
                gradient: "from-sky-500 to-cyan-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-lg overflow-hidden shadow-xl border border-slate-700 transform transition-all duration-300 hover:scale-105"
              >
                <div className={`p-4 bg-gradient-to-r ${item.gradient}`}>
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{item.text}</p>
                  <div className="aspect-video rounded-md overflow-hidden border border-slate-700">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Ejemplo de ${item.title}`}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
