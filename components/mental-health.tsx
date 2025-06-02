import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MentalHealth() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-6">Salud Mental Integral</h2>
            <p className="text-lg text-[#262626] mb-6 leading-relaxed">
              Recurre a un equipo de <span className="font-semibold">Psicólogos y Psiquiatras</span> con vasta
              experiencia ayudando a las personas a mejorar su calidad de vida, a través de la práctica de terapias
              basadas en evidencia científica.
            </p>
            <p className="text-lg text-[#262626] mb-8 leading-relaxed">
              Nuestro enfoque integral considera todos los aspectos de tu bienestar, proporcionando un tratamiento
              personalizado que se adapta a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#015233] hover:bg-[#015233]/90 text-white font-semibold">
                <Link href="/servicios">CONOCE NUESTROS SERVICIOS</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600&query=salud+mental+terapia"
                alt="Salud Mental Integral"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
