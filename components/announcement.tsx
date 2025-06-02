import Link from "next/link"

export default function Announcement() {
  return (
    <div className="bg-[#015233] text-white py-2 px-4 text-center text-sm">
      <p className="flex items-center justify-center gap-1">
        Estamos atendiendo por <span className="font-semibold">Videollamados!</span>
        <Link href="/reserva" className="underline ml-1 font-medium hover:text-[#B8E399] transition-colors">
          Reserva tu hora aquí!
        </Link>
      </p>
    </div>
  )
}
