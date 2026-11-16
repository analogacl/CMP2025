import { legacyRedirects } from "./lib/legacy-redirects.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimización de Next/Vercel: sirve AVIF/WebP redimensionado según el dispositivo
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Nadie debe incrustar el sitio en un iframe (anti-clickjacking)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'; upgrade-insecure-requests" },
          // Sin Permissions-Policy restrictiva: /teleconsulta necesita cámara y micrófono
        ],
      },
    ]
  },
  async redirects() {
    return [
      // /agenda era una versión antigua de /reserva; se unifican para no competir en buscadores
      { source: "/agenda", destination: "/reserva", permanent: true },
      ...legacyRedirects,
    ]
  },
}

export default nextConfig