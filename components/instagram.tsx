import Link from "next/link"
import { Instagram, ExternalLink } from "lucide-react"

export default function InstagramComponent() {
  return (
    <section className="py-16 bg-gray-50">
              {/* Instagram highlight section */}
        <div className="bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 p-5 sm:p-6 rounded-xl mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold text-[#262626] mb-2">Síguenos en Instagram</h4>
              <p className="text-gray-600">Mantente al día con nuestras últimas noticias y eventos</p>
            </div>
            <Link
              href="https://www.instagram.com/centromedicophillips"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center"
              aria-label="Síguenos en Instagram @centromedicophillips"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @centromedicophillips
            </Link>
          </div>
        </div>
    </section>
  )
}
