"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Search, ShoppingCart, CreditCard, Users } from "lucide-react"

export default function BaymardUX() {
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

  const uxAreas = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Navegación y Búsqueda",
      description:
        "Implementamos patrones de navegación intuitivos y búsqueda avanzada que ayudan a los usuarios a encontrar productos rápidamente.",
      stats: "42% de mejora en descubrimiento de productos",
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Páginas de Producto",
      description:
        "Diseñamos páginas de producto que presentan la información de manera clara y convincente, con llamadas a la acción efectivas.",
      stats: "35% de aumento en añadir al carrito",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Proceso de Checkout",
      description: "Optimizamos el proceso de pago para eliminar fricciones y reducir el abandono del carrito.",
      stats: "28% de reducción en abandono de carrito",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Experiencia Mobile",
      description:
        "Creamos una experiencia móvil excepcional con interfaces táctiles optimizadas y flujos de compra simplificados.",
      stats: "65% de aumento en conversiones móviles",
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
            EXPERIENCIA DE USUARIO OPTIMIZADA
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Conversión maximizada con{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Baymard Institute
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Aplicamos los hallazgos de más de 88,000 horas de investigación en UX de ecommerce para crear experiencias
            que convierten.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=ecommerce+user+experience+heatmap+professional+visualization"
                  alt="Baymard Institute UX Research"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Research stats overlay */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-primary/20 to-blue-600/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Investigación UX</p>
                    <p className="text-primary font-bold">88,000+ horas</p>
                  </div>
                </div>
              </div>

              {/* User testing overlay */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-600/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Usuarios testeados</p>
                    <p className="text-primary font-bold">9,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">
              Áreas de optimización UX basadas en investigación
            </motion.h3>
            <motion.div variants={containerVariants} className="space-y-6">
              {uxAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{area.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{area.description}</p>
                    <p className="text-primary text-sm font-medium">{area.stats}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-lg border border-gray-700 relative"
          >
            <div className="absolute -top-5 -left-5 text-primary text-6xl opacity-30">"</div>
            <div className="relative z-10">
              <p className="text-xl text-gray-300 italic mb-6">
                "La implementación de las directrices de UX de Baymard transformó nuestra tienda Shopify. Vimos un
                aumento del 45% en nuestra tasa de conversión y una reducción del 30% en el abandono del carrito en los
                primeros 60 días."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=professional+headshot+portrait"
                    alt="Cliente satisfecho"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Alejandra Morales</p>
                  <p className="text-sm text-gray-400">CEO, Fashion Boutique</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
