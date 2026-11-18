import { Phone, MessageCircle } from "lucide-react"

/**
 * Cómo atenderse con bono FONASA (Modalidad Libre Elección).
 * Validado por la clínica: el beneficio se obtiene al comprar el bono, no hay reembolso.
 * Si cambian los valores del bono, actualizar FONASA_BONO_PSICOLOGIA.
 */
export const FONASA_BONO_PSICOLOGIA = { presencial: "$14.420", online: "$12.250" } as const

const steps = [
  {
    title: "Agenda y pide tu código",
    text: "Reserva tu hora con el profesional y comunícate con secretaría: te darán el código de prestación para comprar tu bono.",
  },
  {
    title: "Compra tu bono FONASA",
    text: "Con ese código, compra el bono en una sucursal FONASA, en ChileAtiende o en el Sitio Privado de FONASA con tu ClaveÚnica.",
  },
  {
    title: "Envía tu bono",
    text: "Envía el bono a secretaría antes de tu sesión y listo: te atiendes con el valor FONASA.",
  },
]

export default function FonasaSteps({ modality }: { modality: "presencial" | "online" }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Cómo atenderte con bono FONASA
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          El beneficio se obtiene al comprar el bono: <strong>no necesitas pedir reembolso</strong>.
        </p>

        <ol className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center bg-white rounded-xl shadow-lg p-6">
              <div className="mx-auto w-16 h-16 bg-phillips-green rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-phillips-green mb-2">
                Paso {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-800 font-semibold mb-1">Valor del bono FONASA por sesión de psicología</p>
          <p className="text-gray-600">
            {modality === "online" ? (
              <>
                Online: <strong>{FONASA_BONO_PSICOLOGIA.online}</strong> · Presencial en Santiago:{" "}
                {FONASA_BONO_PSICOLOGIA.presencial}
              </>
            ) : (
              <>
                Presencial: <strong>{FONASA_BONO_PSICOLOGIA.presencial}</strong> · Online:{" "}
                {FONASA_BONO_PSICOLOGIA.online}
              </>
            )}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Revisa en la ficha de cada profesional si atiende con FONASA y en qué modalidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <a
              href="tel:+56991595875"
              className="inline-flex items-center justify-center gap-2 bg-phillips-green text-white px-5 py-2.5 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" aria-hidden="true" /> Secretaría: +56 9 9159 5875
            </a>
            <a
              href="https://wa.me/56991595875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-phillips-green text-phillips-green px-5 py-2.5 rounded-lg font-semibold"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
