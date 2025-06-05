"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  gradient: string
  borderColor: string
  iconColor: string
  index: number
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  gradient,
  borderColor,
  iconColor,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`bg-gradient-to-br ${gradient} backdrop-blur-sm p-8 rounded-xl border ${borderColor} hover:border-opacity-60 transition-all duration-300 group`}
    >
      <div
        className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6 border ${borderColor} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

      <div className="space-y-2">
        {features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + featureIndex * 0.1, duration: 0.6 }}
            className="flex items-center text-gray-300"
          >
            <div className={`w-2 h-2 rounded-full ${iconColor.replace("text-", "bg-")} mr-3`}></div>
            <span className="text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
