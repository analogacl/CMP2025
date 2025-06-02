import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[#262626] mb-8 leading-relaxed">
            Con más de 30 años de experiencia en salud mental, contamos con un equipo de psicólogos y psiquiatras que
            combina experiencia clínica, vocación de servicio y un profundo compromiso con el bienestar de cada
            paciente. Ofrecemos terapias efectivas basadas en evidencia científica, adaptadas a tus necesidades y etapas
            de vida. Nuestro enfoque integral considera todos los aspectos de tu salud mental, para ayudarte a superar
            desafíos y mejorar tu calidad de vida.
          </p>
          <Button
            size="lg"
            className="bg-white border-2 border-[#015233] text-[#015233] hover:bg-[#015233] hover:text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            CONOCE NUESTROS SERVICIOS
          </Button>
        </div>
      </div>
    </section>
  )
}
