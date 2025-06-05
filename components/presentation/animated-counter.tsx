"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface AnimatedCounterProps {
  value: string
  label: string
  className?: string
}

export function AnimatedCounter({ value, label, className = "" }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      // Simular animación de contador si es numérico
      const numericValue = value.match(/\d+/)
      if (numericValue) {
        let current = 0
        const target = Number.parseInt(numericValue[0])
        const increment = target / 30
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(value.replace(/\d+/, Math.floor(current).toString()))
          }
        }, 50)
        return () => clearInterval(timer)
      } else {
        setDisplayValue(value)
      }
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center ${className}`}
    >
      <div className="text-4xl font-bold text-cyan-400 mb-2">{displayValue}</div>
      <p className="text-gray-300 text-sm">{label}</p>
    </motion.div>
  )
}
