"use client"

import { useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

export default function NavigationHandler() {
  const pathname = usePathname()

  const handleNavigation = useCallback(() => {
    // Always scroll to top when navigating to a new page
    window.scrollTo(0, 0)

    // If we're on the home page and there's a hash in the URL, scroll to that section
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1)

      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerHeight = 96 // Account for sticky header
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      })
    }
  }, [pathname])

  useEffect(() => {
    handleNavigation()
  }, [pathname, handleNavigation])

  return null
}
