"use client"

import { useEffect, useRef } from "react"

export default function TechSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      // Reducimos el tamaño para que sea menos prominente
      const size = Math.min(window.innerWidth * 0.3, 300)
      canvas.width = size
      canvas.height = size
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let rotation = 0
    let hue = 210 // Azul

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = canvas.width * 0.35

      // Dibujar círculo exterior con gradiente
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.2)`)
      gradient.addColorStop(1, `hsla(${hue + 60}, 80%, 60%, 0.2)`)

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5 // Línea más delgada
      ctx.stroke()

      // Dibujar líneas de datos (menos líneas)
      const lines = 8 // Reducimos el número de líneas
      for (let i = 0; i < lines; i++) {
        const angle = (i / lines) * Math.PI * 2 + rotation
        const length = radius * (0.7 + Math.sin(Date.now() * 0.001 + i) * 0.3)

        const startX = centerX + Math.cos(angle) * (radius * 0.2)
        const startY = centerY + Math.sin(angle) * (radius * 0.2)
        const endX = centerX + Math.cos(angle) * length
        const endY = centerY + Math.sin(angle) * length

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = `hsla(${hue + i * 10}, 80%, 60%, 0.4)` // Reducimos la opacidad
        ctx.lineWidth = 1 // Línea más delgada
        ctx.stroke()

        // Dibujar nodos en los extremos (más pequeños)
        ctx.beginPath()
        ctx.arc(endX, endY, 2, 0, Math.PI * 2) // Nodos más pequeños
        ctx.fillStyle = `hsla(${hue + i * 10}, 80%, 60%, 0.6)` // Reducimos la opacidad
        ctx.fill()
      }

      // Dibujar círculo central
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.2)` // Reducimos la opacidad
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.15, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${hue + 30}, 80%, 60%, 0.3)` // Reducimos la opacidad
      ctx.fill()

      // Actualizar rotación
      rotation += 0.003 // Rotación más lenta
      hue = (hue + 0.05) % 360 // Cambio de color más lento

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="mx-auto max-w-full" style={{ maxHeight: "30vh" }} />
}
