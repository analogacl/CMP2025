"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import AnimatedTitle from "@/components/animated-title"
import { MapPin, Mail, Phone, Clock, Award, Users, Target } from "lucide-react"

// Estilos para la animación del título
const titleAnimationStyles = `
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 8s ease infinite;
  }
  
  .animate-title {
    animation: float 6s ease-in-out infinite;
  }
`

export default function NosotrosPage() {
  return (
    <>
      <style jsx global>
        {titleAnimationStyles}
      </style>
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
              <AnimatedTitle>Impulsamos el Crecimiento Digital</AnimatedTitle>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Somos un equipo apasionado por el desarrollo web, el comercio electrónico y el marketing digital.
                Estamos comprometidos con la entrega de productos digitales de vanguardia.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="relative inline-block text-3xl font-bold mb-6 overflow-hidden">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
                    Manifesto
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
                  <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    En Analoga, creamos puentes sólidos entre tu negocio y el éxito digital. Fusionamos el desarrollo
                    web de vanguardia con una consultoría estratégica profunda, entendiendo la esencia de cada empresa
                    para construir tiendas de alta conversión y rápido crecimiento.
                  </p>
                  <p>
                    Nuestra filosofía se centra en la simplicidad para abordar la complejidad digital. No solo
                    construimos plataformas, sino que cultivamos experiencias de compra fluidas y significativas,
                    siempre orientados a resultados concretos. Analoga evoca la conexión entre lo probado y la potencia
                    del presente digital.
                  </p>
                  <p>
                    Soy Daniel, especialista en negocios digitales. Me formé como Ingeniero Comercial con
                    especialización en Tecnologías de la Información. Llevo más de 12 años trabajando con grandes y
                    pequeñas empresas en ecommerce y proyectos digitales para negocios. Formé Analoga para ayudar a las
                    empresas a desarrollar sus canales digitales.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/20 to-transparent z-10"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vtxgpw-58-MUqlnbt2t67vxtJ7I2tFTVs7D257qk.jpeg"
                    alt="Fundador de Analoga presentando"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="flex justify-center mb-12">
              <h2 className="relative inline-block text-3xl font-bold overflow-hidden">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
                  Nuestros Valores
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
                <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="relative inline-block text-xl font-semibold mb-3 overflow-hidden">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                    Resultados Medibles
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-blue-500/40 to-transparent"></span>
                  <span className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-primary/10 blur-md"></span>
                </h3>
                <p className="text-gray-400">
                  Nos enfocamos en métricas claras y resultados tangibles. Cada estrategia que implementamos está
                  diseñada para generar un ROI positivo y medible.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="relative inline-block text-xl font-semibold mb-3 overflow-hidden">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                    Colaboración Transparente
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-blue-500/40 to-transparent"></span>
                  <span className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-primary/10 blur-md"></span>
                </h3>
                <p className="text-gray-400">
                  Creemos en relaciones abiertas y honestas. Trabajamos como una extensión de tu equipo, compartiendo
                  conocimientos y construyendo confianza.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="relative inline-block text-xl font-semibold mb-3 overflow-hidden">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
                    Excelencia Técnica
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-blue-500/40 to-transparent"></span>
                  <span className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-primary/10 blur-md"></span>
                </h3>
                <p className="text-gray-400">
                  Mantenemos los más altos estándares en desarrollo y estrategia. Nuestras soluciones no solo resuelven
                  problemas actuales, sino que se adaptan a necesidades futuras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}

        {/* Ubicación */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="flex justify-center mb-12">
              <h2 className="relative inline-block text-3xl font-bold overflow-hidden">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
                  Nuestra Ubicación
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
                <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-gray-300">
                      Av. Presidente Kennedy 5600, Of 4013
                      <br />
                      Vitacura, Santiago de Chile
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-gray-300">+56942870742</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-gray-300">contacto@analoga.cl</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="rounded-lg overflow-hidden h-[300px] shadow-lg border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5374521379266!2d-70.5752138!3d-33.4001871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2c2c215b3b%3A0x5b41e6483e93e90c!2sAv.%20Pdte.%20Kennedy%205600%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1715015000000!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Analoga"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-center mb-8">
              <h2 className="relative inline-block text-3xl font-bold overflow-hidden">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
                  Contáctanos
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-transparent"></span>
                <span className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary/10 blur-md"></span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 mb-8 text-center">
                ¿Tienes alguna pregunta o quieres discutir cómo podemos ayudarte a mejorar tu ecommerce? Completa el
                formulario y nos pondremos en contacto contigo a la brevedad.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
