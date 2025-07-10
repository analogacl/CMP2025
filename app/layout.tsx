import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "./client-layout"
import FooterWrapper from "@/components/footer-wrapper"
import NavigationHandler from "@/components/navigation-handler"

// Optimize font loading with display:swap and preload
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#015233",
}

export const metadata: Metadata = {
  title: "Centro Médico Phillips | Salud Mental Integral",
  description:
    "Centro Médico Phillips ofrece servicios de salud mental integral con un equipo multidisciplinario de expertos para mejorar tu calidad de vida.",
  applicationName: "Centro Médico Phillips",
  authors: [{ name: "Centro Médico Phillips" }],
  keywords: ["salud mental", "psicología", "psiquiatría", "terapia", "bienestar", "Santiago", "Chile"],
  robots: "index, follow",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://agendamiento.reservo.cl" />
        <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17292929805"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-17292929805'); </script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <NavigationHandler />
          </Suspense>
          <ClientLayout>{children}</ClientLayout>
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
