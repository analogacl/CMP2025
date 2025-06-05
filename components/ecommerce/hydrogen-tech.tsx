"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Zap, Smartphone, BarChart2, RefreshCw } from "lucide-react"

export default function HydrogenTech() {
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

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Velocidad Ultrarrápida",
      description:
        "Tiempos de carga inferiores a 1 segundo gracias a la arquitectura headless y la renderización del lado del servidor.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: "Optimizado para Móviles",
      description:
        "Diseñado con enfoque Mobile First para ofrecer una experiencia excepcional en dispositivos móviles.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: "Mejor SEO",
      description:
        "Estructura optimizada para motores de búsqueda que mejora tu visibilidad y posicionamiento orgánico.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      title: "Actualizaciones Instantáneas",
      description: "Cambios de contenido y productos en tiempo real sin necesidad de recargar la página completa.",
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
          <motion.div
            variants={itemVariants}
            className="inline-block bg-blue-500/20 text-blue-500 text-sm font-medium py-1 px-3 rounded-full mb-4"
          >
            TECNOLOGÍA AVANZADA
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Potencia tu tienda con{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary">
              Shopify Hydrogen
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300">
            Hydrogen es el framework de React de Shopify para crear experiencias de comercio electrónico rápidas,
            dinámicas y personalizadas.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/modern-ecommerce-smartphone.png"
                  alt="Shopify Hydrogen en acción"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Performance metrics overlay */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600/20 to-primary/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Performance Score</p>
                    <p className="text-blue-500 font-bold">98/100</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Code snippet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-gray-400 ml-2">hydrogen-product.jsx</p>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`import { useShopQuery, gql, useServerProps } from '@shopify/hydrogen';
import ProductDetails from './ProductDetails.client';

export default function Product({ handle }) {
  const { serverProps, setServerProps } = useServerProps();
  
  const { data } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });
  
  const { product } = data;
  
  return (
    <ProductDetails 
      product={product} 
      onAddToCart={() => {
        // Add to cart functionality
      }} 
    />
  );
}

const PRODUCT_QUERY = gql\`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      media(first: 10) {
        nodes {
          ... on MediaImage {
            id
            image {
              url
              width
              height
              altText
            }
          }
        }
      }
      variants(first: 100) {
        nodes {
          id
          title
          availableForSale
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
\`;`}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
