import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Función para verificar el token de reCAPTCHA
async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("Error verificando reCAPTCHA:", error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, captchaToken } = body

    // Verificar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Nombre, correo electrónico y mensaje son campos requeridos" },
        { status: 400 },
      )
    }

    // Verificar reCAPTCHA
    const isValidCaptcha = await verifyRecaptcha(captchaToken)
    if (!isValidCaptcha) {
      return NextResponse.json({ message: "Verificación de reCAPTCHA fallida" }, { status: 400 })
    }

    // Configurar transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "contacto@analoga.cl",
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || "No especificada"}
        
        Mensaje:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
          <div style="margin-top: 20px;">
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Mensaje enviado correctamente" })
  } catch (error) {
    console.error("Error al enviar el mensaje:", error)
    return NextResponse.json({ message: "Ocurrió un error al procesar tu solicitud" }, { status: 500 })
  }
}
