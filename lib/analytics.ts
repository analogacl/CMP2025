export const GTM_ID = "GTM-5Q839W38"

/** ID de propiedad GA4 (Administrador → Detalles de la propiedad) */
export const GA4_PROPERTY_ID = "538077850"

/** ID de medición web GA4 (propiedad 538077850) */
export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "G-FZYVMHLEE7"

export const GOOGLE_ADS_ID = "AW-17292929805"
export const GOOGLE_ADS_CONVERSION_LABEL = "AW-17292929805/PBraCNm85fAaEI3W9LVA"

export function isAnalyticsEnabled(): boolean {
  return process.env.NODE_ENV === "production"
}

type DataLayerEvent = Record<string, unknown> & { event: string }

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[]
    gtag?: (...args: unknown[]) => void
  }
}

export function pushDataLayer(payload: DataLayerEvent): void {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

function sendGa4Event(eventName: string, params?: Record<string, unknown>) {
  if (!GA4_MEASUREMENT_ID || typeof window.gtag !== "function") return
  window.gtag("event", eventName, params)
}

export function trackAgendarClick(params?: { link_url?: string; link_text?: string; source?: string }) {
  const page_path = typeof window !== "undefined" ? window.location.pathname : undefined
  pushDataLayer({
    event: "agendar_click",
    event_category: "engagement",
    event_label: params?.link_text || params?.source || "agendar",
    link_url: params?.link_url,
    page_path,
    ...params,
  })
  sendGa4Event("agendar_click", { ...params, page_path })
}

export function trackWhatsAppClick(params?: { link_url?: string; link_text?: string }) {
  const page_path = typeof window !== "undefined" ? window.location.pathname : undefined
  pushDataLayer({
    event: "whatsapp_click",
    event_category: "engagement",
    event_label: params?.link_text || "whatsapp",
    link_url: params?.link_url,
    page_path,
    ...params,
  })
  sendGa4Event("whatsapp_click", { ...params, page_path })
}

/** Reservo iframe booking complete — mirrors Google Ads conversion + GA4 via GTM */
export function trackReservoConversion() {
  const page_path = typeof window !== "undefined" ? window.location.pathname : undefined
  pushDataLayer({
    event: "reservo_booking_complete",
    event_category: "conversion",
    event_label: "reservo_agendamiento",
    conversion_id: GOOGLE_ADS_ID,
    conversion_label: GOOGLE_ADS_CONVERSION_LABEL,
    page_path,
  })
  sendGa4Event("reservo_booking_complete", { page_path })
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_LABEL,
    })
  }
}
