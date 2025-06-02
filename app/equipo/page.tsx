import Team from "@/components/team"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#015233] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Nuestro Equipo</h1>
          <p className="text-white/90 text-center mt-4 max-w-3xl mx-auto">
            Contamos con un equipo multidisciplinario de profesionales altamente calificados y comprometidos con tu
            bienestar mental y emocional.
          </p>
        </div>
      </div>
      <Team />
    </div>
  )
}
