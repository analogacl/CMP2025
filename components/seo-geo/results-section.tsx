"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Ene", seo: 100, geo: 0, total: 100 },
  { month: "Feb", seo: 120, geo: 10, total: 130 },
  { month: "Mar", seo: 135, geo: 25, total: 160 },
  { month: "Abr", seo: 150, geo: 45, total: 195 },
  { month: "May", seo: 170, geo: 70, total: 240 },
  { month: "Jun", seo: 185, geo: 95, total: 280 },
  { month: "Jul", seo: 200, geo: 130, total: 330 },
  { month: "Ago", seo: 210, geo: 160, total: 370 },
  { month: "Sep", seo: 225, geo: 195, total: 420 },
  { month: "Oct", seo: 240, geo: 230, total: 470 },
  { month: "Nov", seo: 255, geo: 265, total: 520 },
  { month: "Dic", seo: 270, geo: 300, total: 570 },
]

export function ResultsSection() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-900">
          Resultados que Hablan por Sí Mismos
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            Nuestro enfoque integrado de SEO y GEO ha generado resultados excepcionales para nuestros clientes. Observa
            cómo la combinación de ambas estrategias multiplica el impacto total en la visibilidad digital.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16 bg-white p-6 rounded-lg shadow-lg border border-slate-100">
          <h3 className="text-2xl font-semibold mb-6 text-slate-900 text-center">Crecimiento de Visibilidad Digital</h3>
          <p className="text-slate-700 text-center mb-8">Caso de estudio: Cliente del sector eCommerce (12 meses)</p>

          <div className="h-[400px]">
            <ChartContainer
              config={{
                seo: {
                  label: "Visibilidad SEO",
                  color: "hsl(var(--chart-1))",
                },
                geo: {
                  label: "Visibilidad GEO",
                  color: "hsl(var(--chart-2))",
                },
                total: {
                  label: "Visibilidad Total",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="seo" stroke="var(--color-seo)" strokeWidth={2} />
                  <Line type="monotone" dataKey="geo" stroke="var(--color-geo)" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" stroke="var(--color-total)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">+270%</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Aumento en Tráfico Orgánico</h3>
            <p className="text-slate-700">
              Incremento promedio en el tráfico orgánico de nuestros clientes tras 12 meses de implementación de nuestra
              estrategia dual.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">+93%</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Menciones en Respuestas Generativas</h3>
            <p className="text-slate-700">
              Aumento en la frecuencia con que el contenido de nuestros clientes es citado en respuestas generadas por
              IA.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">+145%</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Incremento en Conversiones</h3>
            <p className="text-slate-700">
              Mejora en la tasa de conversión gracias a un tráfico más cualificado y una mayor autoridad de marca.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/professional-man-headshot.png"
                alt="Carlos Martínez, Director de Marketing Digital"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            </div>

            <div className="md:w-2/3">
              <svg className="h-10 w-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-slate-700 italic mb-4">
                "La estrategia integrada de SEO y GEO de Analoga transformó nuestra presencia digital. No solo
                aumentamos nuestro tráfico orgánico en un 320%, sino que ahora nuestro contenido aparece constantemente
                en las respuestas generativas de ChatGPT y Google SGE, posicionándonos como autoridad en nuestro
                sector."
              </p>
              <p className="font-semibold text-slate-900">Carlos Martínez</p>
              <p className="text-slate-600">Director de Marketing Digital, TechSolutions Inc.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
