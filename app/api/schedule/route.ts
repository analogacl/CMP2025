import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, website, challenges } = await request.json()

    // Validar campos requeridos
    if (!firstName || !lastName || !email || !phone || !website || !challenges) {
      return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Enviar email a daniel@analoga.cl
    const { data, error } = await resend.emails.send({
      from: "Analoga Website <noreply@analoga.cl>",
      to: ["daniel@analoga.cl"],
      subject: `Nueva Solicitud de Auditoría - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nueva Solicitud de Auditoría
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Sitio Web:</strong> <a href="${website}" target="_blank">${website}</a></p>
          </div>

          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">Desafíos y Objetivos</h3>
            <p style="color: #856404; white-space: pre-wrap;">${challenges}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Próximos pasos:</strong> Contactar al cliente para coordinar la auditoría de 1.5 horas.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ message: "Error al enviar el correo" }, { status: 500 })
    }

    return NextResponse.json({ message: "Solicitud enviada exitosamente", data }, { status: 200 })
  } catch (error) {
    console.error("Error in schedule API:", error)
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 })
  }
}
