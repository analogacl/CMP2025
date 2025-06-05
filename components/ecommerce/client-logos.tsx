import Image from "next/image"

const clients = [
  { name: "Cliente 1", logo: "/minimal-logo.png" },
  { name: "Cliente 2", logo: "/minimal-logo.png" },
  { name: "Cliente 3", logo: "/minimal-logo.png" },
  { name: "Cliente 4", logo: "/minimal-logo.png" },
  { name: "Cliente 5", logo: "/minimal-logo.png" },
]

export default function ClientLogos() {
  return (
    <section className="border-y border-gray-800 bg-gray-900/30 py-12">
      <div className="container px-4">
        <p className="text-center text-sm text-gray-400 mb-8">CONFÍAN EN NOSOTROS</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="w-24 md:w-32">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={40}
                className="w-full h-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
