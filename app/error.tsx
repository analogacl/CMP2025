"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-[#262626] mb-4">¡Algo salió mal!</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-[#015233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015233]/90 transition-colors"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="bg-white text-[#015233] border-2 border-[#015233] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
