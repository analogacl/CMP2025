import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "./client-layout"
import FooterWrapper from "@/components/footer-wrapper"
import NavigationHandler from "@/components/navigation-handler"
import Script from "next/script"
import { getSiteUrl } from "@/lib/site-url"
import StructuredData from "@/components/structured-data"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-tag-manager"
import { GA4_MEASUREMENT_ID, GOOGLE_ADS_ID, isAnalyticsEnabled } from "@/lib/analytics"

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
  metadataBase: new URL(getSiteUrl()),
  title: "Optima Salud | Centro de Salud Mental Integral",
  description:
    "Optima Salud ofrece servicios de salud mental integral con un equipo multidisciplinario de expertos para mejorar tu calidad de vida.",
  applicationName: "Optima Salud",
  authors: [{ name: "Optima Salud" }],
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
        {isAnalyticsEnabled() && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        <GoogleTagManager />
        {isAnalyticsEnabled() && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID || GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tags-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
                ${GA4_MEASUREMENT_ID ? `gtag('config', '${GA4_MEASUREMENT_ID}');` : ""}
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleTagManagerNoScript />
        <StructuredData />
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
