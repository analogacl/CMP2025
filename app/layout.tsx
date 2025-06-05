import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Analoga - Aumenta las ventas de tu ecommerce.",
  description:
    "Ayudamos a desarrollar y escalar negocios digitales mediante el uso de tecnología y estrategia de negocios",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ScrollToTop />
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
