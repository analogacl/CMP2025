"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Zap, Link2, Workflow } from "lucide-react"
import { motion } from "framer-motion"

export default function IntegrationsHero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-background z-0"></div>

      {/* Animated dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="container relative z-10 px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-medium py-1 px-3 rounded-full mb-6">
              Conectividad Total
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Integraciones{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                Inteligentes
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Conecta todos tus sistemas y automatiza workflows complejos con integraciones personalizadas que optimizan
              tu operación y eliminan trabajo manual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                onClick={() => setShowForm(!showForm)}
              >
                Conecta tus sistemas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver integraciones
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-2 mx-auto">
                  <Link2 className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Integraciones</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg mb-2 mx-auto">
                  <Workflow className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-sm text-gray-400">Menos trabajo manual</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-2 mx-auto">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-sm text-gray-400">Más eficiencia</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-transparent z-10"></div>
              <Image
                src="/integration-dashboard.png" // Imagen actualizada
                alt="Integrations Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Link2 className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">APIs conectadas</p>
                  <p className="text-green-400 font-bold">25+</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tiempo ahorrado</p>
                  <p className="text-blue-400 font-bold">40h/sem</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Descubre más</p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </div>
      </div>

      {/* Lead form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Conecta tus sistemas</h3>
            <p className="text-gray-400 mb-6">
              Descubre cómo podemos integrar todos tus sistemas para automatizar tu operación.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="systems" className="block text-sm font-medium mb-1">
                  Sistemas a integrar (opcional)
                </label>
                <input
                  type="text"
                  id="systems"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="CRM, ERP, E-commerce..."
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Solicitar Consulta
              </Button>
            </form>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowForm(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Cerrar</span>
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
