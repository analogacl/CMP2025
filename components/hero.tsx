import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ParticleBackground from "./particle-background"
import TechSphere from "./tech-sphere"
import AnimatedTitle from "./animated-title"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo de partículas */}
      <ParticleBackground />

      {/* Gradientes de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[100px] transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[100px] transform translate-y-1/2" />
      </div>

      <div className="container flex flex-col items-center justify-center h-full py-8 md:py-12 z-10">
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="space-y-4 px-4 sm:px-6 max-w-4xl">
            <AnimatedTitle animatedText="de tu ecommerce">Aumenta las ventas </AnimatedTitle>
            <p className="relative mx-auto max-w-[42rem] text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Ayudamos a desarrollar y escalar negocios digitales mediante el uso de tecnología y estrategia de
                negocios.
              </span>
              <span className="absolute -inset-x-6 -inset-y-2 blur-md bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 -z-10 rounded-full"></span>
            </p>
          </div>

          {/* Elemento visual tecnológico en segundo plano con botones superpuestos */}
          <div className="relative w-full max-w-md mx-auto mt-4 mb-8">
            {/* Esfera tecnológica con opacidad reducida */}
            <div className="opacity-40">
              <TechSphere />
            </div>

            {/* Efecto de brillo */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-500/20 rounded-full blur-xl opacity-30 animate-pulse"
              style={{ animationDuration: "4s" }}
            />

            {/* Botones superpuestos sobre la esfera */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 z-20">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg"
                >
                  Conversemos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 shadow-lg"
                >
                  Conocer Más
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración adicional */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
