"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { resolvedTheme } = useTheme() || { resolvedTheme: "dark" }
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const { width, height } = canvas.getBoundingClientRect()

        // Actualizar las dimensiones en la ref en lugar de usar setState
        dimensionsRef.current = { width, height }

        canvas.width = width
        canvas.height = height

        // Reinicializar partículas cuando cambia el tamaño
        initParticles()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()

        // Actualizar la posición del mouse en la ref en lugar de usar setState
        mousePositionRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }
    }

    const initParticles = () => {
      if (!canvasRef.current) return

      const particles: Particle[] = []
      const { width, height } = dimensionsRef.current
      const particleCount = Math.min(Math.floor(width * 0.05), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }

      particlesRef.current = particles
    }

    const animate = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const { width, height } = dimensionsRef.current
      ctx.clearRect(0, 0, width, height)

      // Actualizar y dibujar partículas
      particlesRef.current.forEach((particle, i) => {
        // Mover partículas
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Efecto de mouse
        const mousePosition = mousePositionRef.current
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.x -= dx * force * 0.02
          particle.y -= dy * force * 0.02
        }

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > height) {
          particle.speedY *= -1
        }

        // Dibujar partícula
        const color = isDark ? `rgba(255, 255, 255, ${particle.opacity})` : `rgba(0, 0, 0, ${particle.opacity})`

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Dibujar líneas entre partículas cercanas
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const particle2 = particlesRef.current[j]
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${0.05 * (1 - distance / 100)})`
              : `rgba(0, 0, 0, ${0.05 * (1 - distance / 100)})`
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Inicializar
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Iniciar animación
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isDark]) // Solo depende de isDark, no de dimensions ni mousePosition

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}
