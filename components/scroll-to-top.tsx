"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Cuando cambia la ruta, desplazar hacia arriba
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
