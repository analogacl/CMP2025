"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Play,
  Users,
  Target,
  Lightbulb,
  Cog,
  Briefcase,
  TrendingUp,
  Award,
  DollarSign,
  Calendar,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SlideContainer } from "@/components/presentation/slide-container"

const slides = [
  {
    id: 1,
    title: "Analoga",
    subtitle: "Transformamos tu negocio digital",
    content: "Portada",
    icon: Play,
  },
  {
    id: 2,
    title: "¿Quiénes somos?",
    subtitle: "Expertos en desarrollo digital",
    content: "Quienes somos",
    icon: Users,
  },
  {
    id: 3,
    title: "El problema del cliente",
    subtitle: "Entendemos tus desafíos",
    content: "Problema",
    icon: Target,
  },
  {
    id: 4,
    title: "Nuestra solución",
    subtitle: "La respuesta a tus necesidades",
    content: "Solucion",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Servicios",
    subtitle: "Todo lo que necesitas",
    content: "Servicios",
    icon: Cog,
  },
  {
    id: 6,
    title: "Cómo trabajamos",
    subtitle: "Metodología probada",
    content: "Metodologia",
    icon: Briefcase,
  },
  {
    id: 7,
    title: "Casos de éxito",
    subtitle: "Resultados que hablan",
    content: "Casos",
    icon: Award,
  },
  {
    id: 8,
    title: "Beneficios",
    subtitle: "Valor para tu negocio",
    content: "Beneficios",
    icon: TrendingUp,
  },
  {
    id: 9,
    title: "Planes de trabajo",
    subtitle: "Opciones flexibles",
    content: "Planes",
    icon: DollarSign,
  },
  {
    id: 10,
    title: "¡Comencemos!",
    subtitle: "Tu próximo paso",
    content: "CTA",
    icon: Calendar,
  },
]

export default function PresentacionComercial() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlay) {
      interval = setInterval(nextSlide, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full flex items-center justify-center"
        >
          {currentSlide === 0 && <PortadaSlide />}
          {currentSlide === 1 && <QuienesSomosSlide />}
          {currentSlide === 2 && <ProblemaSlide />}
          {currentSlide === 3 && <SolucionSlide />}
          {currentSlide === 4 && <ServiciosSlide />}
          {currentSlide === 5 && <MetodologiaSlide />}
          {currentSlide === 6 && <CasosSlide />}
          {currentSlide === 7 && <BeneficiosSlide />}
          {currentSlide === 8 && <PlanesSlide />}
          {currentSlide === 9 && <CTASlide />}
        </motion.div>
      </AnimatePresence>

      {/* Arrow Navigation - Now positioned above dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 -mt-20 z-50 flex flex-col space-y-3">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/5 border-white/10 text-white hover:bg-white/20 h-8 w-8"
          disabled={currentSlide === 0}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          variant="outline"
          size="icon"
          className="bg-white/5 border-white/10 text-white hover:bg-white/20 h-8 w-8"
        >
          <Play className={`h-4 w-4 ${isAutoPlay ? "text-green-400" : ""}`} />
        </Button>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/5 border-white/10 text-white hover:bg-white/20 h-8 w-8"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation Controls - Now positioned below arrow controls */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 mt-16 z-50">
        <div className="flex flex-col space-y-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-1/2 transform -translate-y-1/2 -mt-32 right-8 z-50 text-white/70 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

// Slide Components
function PortadaSlide() {
  return (
    <SlideContainer>
      <div className="text-center text-white max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analoga-logo-mini-4kYVzW9COsxlFNayBTBax9uG59GBVX.webp"
            alt="Analoga"
            width={200}
            height={80}
            className="h-20 w-auto mx-auto mb-8"
          />
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl mb-8 text-gray-300"
        >
          Soluciones de Ecommerce para la era digital
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg text-gray-400"
        >
          <p>Presentado por el equipo de Analoga</p>
          <p>Especialistas en desarrollo y estrategia digital</p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}

function QuienesSomosSlide() {
  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        ¿Quiénes somos?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Nuestra Historia</h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Somos un equipo de especialistas en desarrollo digital con más de 5 años de experiencia transformando
            negocios a través de la tecnología.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Nuestro propósito es ayudar a empresas a alcanzar su máximo potencial digital mediante soluciones
            innovadoras y estrategias personalizadas.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-6"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h4 className="text-xl font-semibold mb-3 text-blue-300">Experiencia Clave</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• +50 proyectos exitosos</li>
              <li>• Especialistas en ecommerce</li>
              <li>• Tecnologías de vanguardia</li>
              <li>• Enfoque en resultados</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h4 className="text-xl font-semibold mb-3 text-purple-300">Nuestros Valores</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Innovación constante</li>
              <li>• Calidad sin compromisos</li>
              <li>• Transparencia total</li>
              <li>• Resultados medibles</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProblemaSlide() {
  const problemas = [
    {
      icon: "🐌",
      title: "Performance Bajo",
      description: "Sitios web lentos que alejan a los clientes",
    },
    {
      icon: "🔗",
      title: "Integración Deficiente",
      description: "Sistemas desconectados que generan ineficiencias",
    },
    {
      icon: "😤",
      title: "Experiencia de Usuario Pobre",
      description: "Interfaces confusas que reducen las conversiones",
    },
    {
      icon: "📈",
      title: "Falta de Escalabilidad",
      description: "Plataformas que no crecen con tu negocio",
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"
      >
        El Problema del Cliente
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl text-center mb-12 text-gray-300"
      >
        Entendemos las frustraciones que enfrentas en el mundo digital
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problemas.map((problema, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20"
          >
            <div className="text-4xl mb-4">{problema.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-red-300">{problema.title}</h3>
            <p className="text-gray-300 leading-relaxed">{problema.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SolucionSlide() {
  const soluciones = [
    {
      icon: Zap,
      title: "Desarrollo Ecommerce",
      description: "Tiendas Shopify de alto rendimiento",
      features: ["Velocidad superior", "UX optimizada"],
      gradient: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: Target,
      title: "Estrategia Digital",
      description: "Consultoría integral personalizada",
      features: ["Análisis profundo", "ROI medible"],
      gradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: TrendingUp,
      title: "Optimización CRO",
      description: "Maximiza conversiones con datos",
      features: ["A/B Testing", "Mejoras continuas"],
      gradient: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: Users,
      title: "SEO & GEO",
      description: "Domina buscadores tradicionales",
      features: ["SEO técnico", "IA generativa"],
      gradient: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8 py-8 h-screen flex flex-col justify-center">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
      >
        Nuestras Soluciones
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-lg text-center mb-8 text-gray-300 max-w-3xl mx-auto"
      >
        Soluciones especializadas que transforman tu negocio digital
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {soluciones.map((solucion, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`bg-gradient-to-br ${solucion.gradient} backdrop-blur-sm p-6 rounded-xl border ${solucion.borderColor} hover:border-opacity-60 transition-all duration-300`}
          >
            <div
              className={`w-12 h-12 ${solucion.gradient} rounded-xl flex items-center justify-center mb-4 border ${solucion.borderColor}`}
            >
              <solucion.icon className={`h-6 w-6 ${solucion.iconColor}`} />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">{solucion.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">{solucion.description}</p>

            <div className="space-y-1">
              {solucion.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-gray-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${solucion.iconColor.replace("text-", "bg-")} mr-2`}></div>
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact Stats Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-4 rounded-lg border border-blue-500/20 text-center">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
            +50
          </p>
          <p className="text-sm text-gray-300">Proyectos exitosos</p>
        </div>

        <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 p-4 rounded-lg border border-green-500/20 text-center">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-1">
            150%
          </p>
          <p className="text-sm text-gray-300">Aumento conversión</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-4 rounded-lg border border-purple-500/20 text-center">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
            24/7
          </p>
          <p className="text-sm text-gray-300">Soporte</p>
        </div>
      </motion.div>
    </div>
  )
}

function ServiciosSlide() {
  const servicios = [
    {
      categoria: "Desarrollo Ecommerce",
      icon: Cog,
      items: [
        { name: "Shopify Hydrogen", description: "Tiendas ultrarrápidas" },
        { name: "Shopify Plus", description: "Soluciones enterprise" },
        { name: "Integraciones API", description: "Conectividad total" },
      ],
      gradient: "from-blue-900/30 to-cyan-900/30",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      categoria: "Estrategia Digital",
      icon: Target,
      items: [
        { name: "Auditoría Digital", description: "Análisis completo" },
        { name: "Roadmap Estratégico", description: "Plan de crecimiento" },
        { name: "Consultoría UX/UI", description: "Experiencia optimizada" },
      ],
      gradient: "from-purple-900/30 to-pink-900/30",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      categoria: "Optimización & CRO",
      icon: TrendingUp,
      items: [
        { name: "A/B Testing", description: "Pruebas controladas" },
        { name: "Análisis de Conversión", description: "Métricas detalladas" },
        { name: "Optimización UX", description: "Mejora continua" },
      ],
      gradient: "from-green-900/30 to-emerald-900/30",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      categoria: "SEO & Marketing",
      icon: Users,
      items: [
        { name: "SEO Técnico", description: "Optimización avanzada" },
        { name: "GEO Strategy", description: "IA generativa" },
        { name: "Content Marketing", description: "Contenido estratégico" },
      ],
      gradient: "from-orange-900/30 to-red-900/30",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8 py-8 h-screen flex flex-col justify-center">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Nuestros Servicios
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-lg text-center mb-8 text-gray-300 max-w-3xl mx-auto"
      >
        Servicios especializados para impulsar tu crecimiento digital
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`bg-gradient-to-br ${servicio.gradient} backdrop-blur-sm p-6 rounded-xl border ${servicio.borderColor} hover:border-opacity-60 transition-all duration-300`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 ${servicio.gradient} rounded-lg flex items-center justify-center mr-3 border ${servicio.borderColor}`}
              >
                <servicio.icon className={`h-5 w-5 ${servicio.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white">{servicio.categoria}</h3>
            </div>

            <div className="space-y-2">
              {servicio.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + itemIndex * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${servicio.iconColor.replace("text-", "bg-")} mt-1.5 flex-shrink-0`}
                  ></div>
                  <div>
                    <p className="font-medium text-white text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact Process Overview */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-gradient-to-r from-gray-900/50 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
      >
        <h3 className="text-lg font-bold text-center mb-4 text-white">Proceso de Trabajo</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { step: "01", title: "Análisis" },
            { step: "02", title: "Estrategia" },
            { step: "03", title: "Implementación" },
            { step: "04", title: "Optimización" },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xs">{process.step}</span>
              </div>
              <h4 className="font-semibold text-white text-sm">{process.title}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function MetodologiaSlide() {
  const pasos = [
    { numero: "01", titulo: "Descubrimiento", descripcion: "Análisis profundo de tu negocio y objetivos" },
    { numero: "02", titulo: "Estrategia", descripcion: "Diseño de la solución perfecta para ti" },
    { numero: "03", titulo: "Desarrollo", descripcion: "Implementación con las mejores prácticas" },
    { numero: "04", titulo: "Testing", descripcion: "Pruebas exhaustivas de calidad" },
    { numero: "05", titulo: "Lanzamiento", descripcion: "Puesta en marcha y monitoreo" },
    { numero: "06", titulo: "Soporte", descripcion: "Acompañamiento continuo y mejoras" },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
      >
        Cómo Trabajamos
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl text-center mb-12 text-gray-300"
      >
        Metodología probada para garantizar el éxito de tu proyecto
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pasos.map((paso, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 text-center"
          >
            <div className="text-3xl font-bold text-cyan-300 mb-4">{paso.numero}</div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-200">{paso.titulo}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{paso.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CasosSlide() {
  const casos = [
    {
      cliente: "Esbuenisimo News",
      sector: "Media Digital",
      resultado: "+300% velocidad de carga",
      descripcion: "Migración a arquitectura headless con Next.js y WordPress",
    },
    {
      cliente: "Tienda Fashion",
      sector: "Ecommerce",
      resultado: "+150% conversiones",
      descripcion: "Optimización UX/UI y implementación de Shopify Plus",
    },
    {
      cliente: "Startup SaaS",
      sector: "Tecnología",
      resultado: "+200% leads calificados",
      descripcion: "Landing page optimizada y automatización de marketing",
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
      >
        Casos de Éxito
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl text-center mb-12 text-gray-300"
      >
        Resultados reales que respaldan nuestra experiencia
      </motion.p>

      <div className="space-y-8">
        {casos.map((caso, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{caso.cliente}</h3>
                <p className="text-gray-400">{caso.sector}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{caso.resultado}</div>
                <p className="text-gray-300 text-sm">Mejora obtenida</p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">{caso.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BeneficiosSlide() {
  const beneficios = [
    {
      icon: "💰",
      titulo: "Aumento de Ventas",
      descripcion: "Incrementa tus ingresos con conversiones optimizadas",
      porcentaje: "+150%",
    },
    {
      icon: "⚡",
      titulo: "Eficiencia Operativa",
      descripcion: "Automatiza procesos y reduce costos operativos",
      porcentaje: "+200%",
    },
    {
      icon: "📈",
      titulo: "Escalabilidad",
      descripcion: "Crece sin límites con infraestructura robusta",
      porcentaje: "∞",
    },
    {
      icon: "😊",
      titulo: "Experiencia de Usuario",
      descripcion: "Clientes satisfechos que regresan por más",
      porcentaje: "+300%",
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
      >
        Beneficios para tu Negocio
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl text-center mb-12 text-gray-300"
      >
        El valor real que aportamos a tu empresa
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {beneficios.map((beneficio, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/20 text-center"
          >
            <div className="text-5xl mb-4">{beneficio.icon}</div>
            <div className="text-4xl font-bold text-emerald-300 mb-4">{beneficio.porcentaje}</div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-200">{beneficio.titulo}</h3>
            <p className="text-gray-300 leading-relaxed">{beneficio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PlanesSlide() {
  const planes = [
    {
      tipo: "Por Proyecto",
      descripcion: "Ideal para proyectos específicos con alcance definido",
      caracteristicas: [
        "Cotización personalizada",
        "Entrega en fechas fijas",
        "Garantía de calidad",
        "Soporte post-lanzamiento",
      ],
    },
    {
      tipo: "Retainer Mensual",
      descripcion: "Para empresas que necesitan soporte continuo",
      caracteristicas: ["Horas dedicadas mensuales", "Prioridad en soporte", "Mejoras continuas", "Reportes mensuales"],
    },
    {
      tipo: "Por Horas",
      descripcion: "Flexibilidad máxima para necesidades puntuales",
      caracteristicas: [
        "Facturación por tiempo real",
        "Sin compromisos a largo plazo",
        "Ideal para consultorías",
        "Respuesta rápida",
      ],
    },
  ]

  return (
    <div className="text-white max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Planes de Trabajo
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl text-center mb-12 text-gray-300"
      >
        Opciones flexibles que se adaptan a tu negocio
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {planes.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-indigo-500/20"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">{plan.tipo}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{plan.descripcion}</p>
            <ul className="space-y-3">
              {plan.caracteristicas.map((caracteristica, charIndex) => (
                <li key={charIndex} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  {caracteristica}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CTASlide() {
  return (
    <div className="text-center text-white max-w-4xl mx-auto px-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-8"
      >
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center">
          <Calendar className="w-16 h-16" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
      >
        ¡Comencemos Hoy!
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-2xl mb-12 text-gray-300"
      >
        Tu transformación digital está a un clic de distancia
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-green-300">Diagnóstico Gratuito</h3>
            <p className="text-gray-300">Análisis completo de tu situación actual sin costo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Reunión Estratégica</h3>
            <p className="text-gray-300">Sesión personalizada para definir tu hoja de ruta</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Propuesta Personalizada</h3>
            <p className="text-gray-300">Plan de acción específico para tus objetivos</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-full"
          >
            Agendar Reunión Gratuita
          </Button>
          <p className="text-gray-400">📧 contacto@analoga.cl | 📱 +56 2 2253654</p>
        </div>
      </motion.div>
    </div>
  )
}
