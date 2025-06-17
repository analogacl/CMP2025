import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "El tratamiento en Centro Médico Phillips cambió mi vida. Después de años luchando con ansiedad, finalmente encontré las herramientas para manejarla.",
      author: "Carolina Vega",
      title: "Paciente desde 2021",
    },
    {
      quote:
        "Los profesionales son excepcionales. Me sentí escuchado y comprendido desde la primera sesión. Recomiendo totalmente sus servicios.",
      author: "Martín Fuentes",
      title: "Paciente desde 2020",
    },
    {
      quote:
        "La terapia familiar nos ayudó a superar una crisis muy difícil. Ahora tenemos mejores herramientas de comunicación y nuestra relación ha mejorado enormemente.",
      author: "Familia Hernández",
      title: "Pacientes desde 2022",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">TESTIMONIOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardHeader>
                <Quote className="h-10 w-10 text-[#015233]/30" />
              </CardHeader>
              <CardContent>
                <p className="text-[#262626] italic mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="font-bold text-[#262626]">{testimonial.author}</p>
                <p className="text-sm text-[#262626]/70">{testimonial.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
