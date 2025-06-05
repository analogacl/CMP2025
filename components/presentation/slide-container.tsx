"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SlideContainerProps {
  children: ReactNode
  className?: string
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      }}
      className={`h-full flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  )
}
