"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BrandCardProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

export function BrandCard({ children, variant = "primary", className = "" }: BrandCardProps) {
  const variants = {
    primary: "bg-gray-900/50 border-gray-700/50",
    secondary: "bg-blue-950/30 border-blue-800/30",
    accent: "bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border-cyan-700/30",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`backdrop-blur-sm p-8 rounded-xl border ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}
