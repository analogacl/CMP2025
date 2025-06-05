"use client"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function StrategyTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "La consultoría de estrategia digital de Analoga transformó completamente nuestra presencia online. En solo 6 meses, aumentamos nuestro tráfico orgánico en un 150% y nuestras conversiones en un 85%. Su enfoque metódico y basado en datos nos dio exactamente lo que necesitábamos.",
      author: "María Fernández",
      position: "Directora de Marketing, TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Trabajar con Analoga ha sido una experiencia excepcional. Su equipo no solo nos proporcionó una estrategia digital clara y accionable, sino que nos acompañó durante todo el proceso de implementación. Los resultados han superado nuestras expectativas, con un ROI del 320% en nuestras campañas digitales.",
      author: "Carlos Mendoza",
      position: "CEO, Innovación Retail",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Después de varios intentos fallidos con otras agencias, encontramos en Analoga un verdadero socio estratégico. Su enfoque holístico de la estrategia digital nos permitió entender realmente a nuestros clientes y crear experiencias que resonaron con ellos. Nuestras ventas online han crecido un 200% en el último año.",
      author: "Laura Sánchez",
      position: "Directora General, Moda Express",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

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

  // Ocultar toda la sección
  return null
}
