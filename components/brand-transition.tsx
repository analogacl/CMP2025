import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function BrandTransition() {
  return (
    <section className="bg-gradient-to-r from-[#015233]/5 via-white to-[#015233]/5 py-8 md:py-12 border-y border-[#015233]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Mensaje principal */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#262626] mb-3">
              ¡Tenemos un nuevo nombre!
            </h2>
            <p className="text-base md:text-lg text-[#262626]/80 max-w-2xl mx-auto">
              Centro Médico Phillips ahora es <span className="font-bold text-[#015233]">Optima Salud</span>.
              <br className="hidden md:block" />
              Mismo equipo, misma calidad, nueva identidad.
            </p>
          </div>

          {/* Logos con transición */}
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap md:flex-nowrap">
            {/* Logo Phillips */}
            <div className="flex flex-col items-center gap-3 flex-1 max-w-[200px] md:max-w-[250px]">
              <div className="relative w-full aspect-[3/2] bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                <Image
                  src="/images/SmallLogo.jpg"
                  alt="Centro Médico Phillips"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </div>
              <p className="text-sm md:text-base text-[#262626]/70 font-medium text-center">
                Centro Médico Phillips
              </p>
            </div>

            {/* Flecha de transición */}
            <div className="flex items-center justify-center">
              <div className="bg-[#015233] rounded-full p-3 md:p-4 shadow-lg">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>

            {/* Logo Optima Salud */}
            <div className="flex flex-col items-center gap-3 flex-1 max-w-[200px] md:max-w-[250px]">
              <div className="relative w-full aspect-[3/2] bg-white rounded-lg shadow-md p-4 flex items-center justify-center border-2 border-[#015233]/20">
                <Image
                  src="/images/logo-optima-salud-beta.png"
                  alt="Optima Salud - Centro de Salud Mental"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </div>
              <p className="text-sm md:text-base text-[#015233] font-bold text-center">
                Optima Salud
              </p>
            </div>
          </div>

          {/* Mensaje adicional */}
          <div className="text-center mt-8">
            <p className="text-sm md:text-base text-[#262626]/70 max-w-3xl mx-auto">
              Seguimos comprometidos con tu bienestar y salud mental con más de 30 años de experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

