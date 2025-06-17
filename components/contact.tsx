"use client"

import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">INFORMACIÓN DE CONTACTO</h2>
          <p className="text-lg text-gray-600">
            Ponte en contacto con nosotros para cualquier consulta o información adicional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#262626] mb-6">Datos de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#015233] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#262626] mb-1">Dirección</h4>
                    <p className="text-[#262626]">Pasaje Phillips 15, 8320340 Santiago, Región Metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#015233] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#262626] mb-1">Teléfono</h4>
                    <a href="tel:+56226335519" className="text-[#262626] hover:text-[#015233] transition-colors">
                      +56226335519
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-[#015233] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#262626] mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/56991595875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#262626] hover:text-[#015233] transition-colors"
                    >
                      +56991595875
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#015233] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#262626] mb-1">Email</h4>
                    <a
                      href="mailto:info@centromedicophillips.cl"
                      className="text-[#262626] hover:text-[#015233] transition-colors break-words"
                    >
                      info@centromedicophillips.cl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#262626] mb-6">Ubicación</h3>
              <div className="h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2309668465!2d-70.65273!3d-33.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a7c02b7577%3A0x4e0f8d1a442dd196!2sPasaje%20Phillips%2015%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1716417600000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Centro Médico Phillips - Pasaje Phillips 15, Santiago"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-3 right-3 bg-white p-2 rounded-md shadow-md">
                    <a
                      href="https://maps.google.com/?q=Pasaje+Phillips+15+8320340+Santiago+Región+Metropolitana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-[#015233] font-medium"
                      aria-label="Ver ubicación en Google Maps"
                    >
                      <span>Ver en Google Maps</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
