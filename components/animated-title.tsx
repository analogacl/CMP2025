"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface AnimatedTitleProps {
  children: React.ReactNode
  className?: string
  animatedText?: string
}

// Estilos para la animación del título
const titleAnimationStyles = `
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 8s ease infinite;
  }
  
  .animate-title {
    animation: float 6s ease-in-out infinite;
  }
`

export function AnimatedTitle({ children, className = "", animatedText }: AnimatedTitleProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!animatedText) return

    if (currentIndex < animatedText.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + animatedText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Velocidad de escritura

      return () => clearTimeout(timeout)
    } else if (currentIndex >= animatedText.length) {
      setIsTyping(false)
    }
  }, [currentIndex, animatedText, isTyping])

  return (
    <>
      <style jsx global>
        {titleAnimationStyles}
      </style>
      <h1
        className={`animate-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative leading-tight ${className}`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 animate-gradient-x">
          {children}
          <div className="h-2"></div>
          {animatedText && (
            <>
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </>
          )}
        </span>
        <span
          className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-500/20 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></span>
      </h1>
    </>
  )
}

// Mantener la exportación por defecto para compatibilidad con el código existente
export default AnimatedTitle
