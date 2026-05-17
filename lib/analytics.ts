export const GTM_ID = "GTM-5Q839W38"

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

export function trackAgendarClick(params?: { link_url?: string; link_text?: string; source?: string }) {
  pushDataLayer({
    event: "agendar_click",
    event_category: "engagement",
    event_label: params?.link_text || params?.source || "agendar",
    link_url: params?.link_url,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  })
}

export function trackWhatsAppClick(params?: { link_url?: string; link_text?: string }) {
  pushDataLayer({
    event: "whatsapp_click",
    event_category: "engagement",
    event_label: params?.link_text || "whatsapp",
    link_url: params?.link_url,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  })
}

/** Reservo iframe booking complete — mirrors Google Ads conversion + GA4 via GTM */
export function trackReservoConversion() {
  pushDataLayer({
    event: "reservo_booking_complete",
    event_category: "conversion",
    event_label: "reservo_agendamiento",
    conversion_id: GOOGLE_ADS_ID,
    conversion_label: GOOGLE_ADS_CONVERSION_LABEL,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  })

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_LABEL,
    })
  }
}
