"use client"

import { useEffect } from "react"
import { isAnalyticsEnabled, trackAgendarClick, trackReservoConversion, trackWhatsAppClick } from "@/lib/analytics"

function isAgendarHref(href: string): boolean {
  return (
    href.startsWith("/reserva") ||
    href.startsWith("/agenda") ||
    href.includes("/reserva") ||
    href.includes("/agenda")
  )
}

function isAgendarElement(el: HTMLElement): boolean {
  const text = (el.textContent || "").toLowerCase()
  return (
    text.includes("reserva") ||
    text.includes("agendar") ||
    el.classList.contains("cta-button")
  )
}

export default function AnalyticsEvents() {
  useEffect(() => {
    if (!isAnalyticsEnabled()) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target
      if (!(target instanceof HTMLElement)) return

      const anchor = target.closest("a")
      if (anchor) {
        const href = anchor.getAttribute("href") || ""
        if (href.includes("wa.me")) {
          trackWhatsAppClick({
            link_url: href,
            link_text: anchor.textContent?.trim() || undefined,
          })
          return
        }
        if (isAgendarHref(href)) {
          trackAgendarClick({
            link_url: href,
            link_text: anchor.textContent?.trim() || undefined,
            source: "link",
          })
        }
        return
      }

      const button = target.closest("button")
      if (button && isAgendarElement(button)) {
        trackAgendarClick({
          link_text: button.textContent?.trim() || undefined,
          source: "button",
        })
      }
    }

    const handleReservoMessage = (e: MessageEvent) => {
      if (e.data === "conversion_event") {
        trackReservoConversion()
      }
    }

    document.addEventListener("click", handleClick, true)
    window.addEventListener("message", handleReservoMessage)

    return () => {
      document.removeEventListener("click", handleClick, true)
      window.removeEventListener("message", handleReservoMessage)
    }
  }, [])

  return null
}
