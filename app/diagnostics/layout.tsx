import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Diagnóstico técnico",
  description: "Herramienta interna de diagnóstico de conectividad y iframes. No indexable.",
  path: "/diagnostics",
  noIndex: true,
})

export default function DiagnosticsLayout({ children }: { children: ReactNode }) {
  return children
}
