"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShoppingCart, Mail, Download, MessageSquare, MousePointer } from "lucide-react"

export default function CROConversions() {
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

  const conversions = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Compras Completadas",
      description:
        "El objetivo principal de un ecommerce. Incluye tanto la primera compra como las compras recurrentes y el aumento del valor medio del carrito.",
      example: "Un usuario añade productos al carrito y completa el proceso de checkout realizando el pago.",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Suscripciones",
      description:
        "Captura de leads a través de formularios de suscripción a newsletters, alertas de productos o contenido exclusivo.",
      example: "Un visitante se suscribe a tu newsletter para recibir ofertas exclusivas y contenido de valor.",
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "Descargas",
      description:
        "Obtención de recursos como guías, ebooks, whitepapers o herramientas que proporcionan valor y generan leads cualificados.",
      example: "Un profesional descarga tu ebook sobre tendencias del sector a cambio de sus datos de contacto.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Solicitudes de Contacto",
      description:
        "Formularios completados para solicitar información, presupuestos o demostraciones de productos/servicios.",
      example: "Un potencial cliente completa un formulario solicitando una demostración de tu software.",
    },
    {
      icon: <MousePointer className="h-6 w-6 text-primary" />,
      title: "Micro-conversiones",
      description:
        "Acciones intermedias que indican interés y progreso en el embudo de conversión, como visualizaciones de vídeo o interacciones específicas.",
      example:
        "Un usuario visualiza un video tutorial completo sobre tu producto o utiliza una herramienta de cálculo en tu web.",
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
            OBJETIVOS CLAROS
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            ¿Qué son las{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Conversiones
            </span>{" "}
            para tu Negocio?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Una conversión es cualquier acción valiosa que un usuario realiza en tu sitio web y que contribuye a tus
            objetivos de negocio. Identificar y medir estas acciones es el primer paso para optimizarlas.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {conversions.map((conversion, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                {conversion.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{conversion.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{conversion.description}</p>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-300">
                  <span className="text-primary font-semibold">Ejemplo:</span> {conversion.example}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
