"use client"

import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
  gradient: string
  borderColor: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className={`bg-gradient-to-br ${stat.gradient} p-8 rounded-xl border ${stat.borderColor} text-center hover:border-opacity-60 transition-all duration-300`}
        >
          <p
            className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient.replace("from-", "from-").replace("to-", "to-").replace("/10", "")}`}
          >
            {stat.value}
          </p>
          <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
