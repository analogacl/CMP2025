"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { MouseMoveEffect } from "@/components/mouse-move-effect"
import { AnimatedTitle } from "@/components/animated-title"
import Image from "next/image" // Asegurarse de importar Image de next/image

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <MouseMoveEffect intensity={0.05} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <AnimatedTitle
                text="Domina el Ecosistema Completo de Búsqueda"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                highlightWords={["Ecosistema Completo"]}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-xl"
            >
              Optimizamos tu visibilidad tanto en búsquedas tradicionales como en la nueva era de respuestas generativas
              con IA.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contacto" // Asegúrate que este ID exista en la página o cambialo a /contacto
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              >
                Solicitar Consultoría Gratuita
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9]">
              {" "}
              {/* Control de aspect ratio */}
              <Image
                src="/seo-geo-hero.png"
                alt="SEO y GEO: Ecosistema completo de búsqueda"
                fill // Usar fill para que la imagen cubra el contenedor
                style={{ objectFit: "cover" }} // Asegurar que la imagen cubra sin distorsionarse
                className="rounded-lg"
                priority // Cargar la imagen del hero con prioridad
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 mix-blend-overlay rounded-lg"></div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/20 hidden md:block">
              <p className="text-white font-semibold">+187% de visibilidad</p>
              <p className="text-slate-300 text-sm">en resultados de búsqueda</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/20 hidden md:block">
              <p className="text-white font-semibold">+93% de menciones</p>
              <p className="text-slate-300 text-sm">en respuestas generativas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
