import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScheduleForm from "@/components/schedule-form"
import AnimatedTitle from "@/components/animated-title"
import { CheckCircle, Clock, PhoneCall } from "lucide-react"

export default function AgendarPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background z-0"></div>

          {/* Animated dots background */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedTitle>Agenda una Auditoría Gratuita</AnimatedTitle>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Reserva un espacio de trabajo con nuestros expertos para analizar tu ecommerce y descubrir oportunidades
                de mejora.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultoría Personalizada</h3>
                <p className="text-gray-400">
                  Conversaremos sobre tu negocio, objetivos y desafíos específicos para ofrecerte soluciones a medida.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Análisis Gratuito</h3>
                <p className="text-gray-400">
                  Realizaremos un análisis preliminar de tu ecommerce para identificar oportunidades de mejora
                  inmediatas.
                </p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sin Compromiso</h3>
                <p className="text-gray-400">
                  Esta sesión es completamente gratuita y sin compromiso. Nuestro objetivo es brindarte valor desde el
                  primer contacto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Agenda */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <ScheduleForm />
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 hidden">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <p className="text-gray-300 italic mb-4">
                  "La consultoría gratuita con Analoga fue reveladora. Identificaron problemas críticos en nuestro
                  proceso de checkout que estaban afectando nuestras conversiones. Después de implementar sus
                  recomendaciones, vimos un aumento del 35% en ventas."
                </p>
                <p className="font-semibold">Marcela Rojas</p>
                <p className="text-sm text-gray-400">Gerente de Marketing, Moda Express</p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                <p className="text-gray-300 italic mb-4">
                  "Estaba escéptico sobre qué tanto valor podría obtener en una consultoría gratuita, pero me
                  sorprendieron gratamente. El análisis fue profundo y las recomendaciones fueron específicas y
                  accionables. Definitivamente superó mis expectativas."
                </p>
                <p className="font-semibold">Carlos Mendoza</p>
                <p className="text-sm text-gray-400">Fundador, TechGadgets</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
