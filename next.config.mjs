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
    unoptimized: true,
  },
  async redirects() {
    return [
      // /agenda era una versión antigua de /reserva; se unifican para no competir en buscadores
      { source: "/agenda", destination: "/reserva", permanent: true },
    ]
  },
}

export default nextConfig