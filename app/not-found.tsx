export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-[#015233] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#262626] mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-[#015233] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#015233]/90 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
