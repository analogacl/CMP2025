import Image from "next/image"

const partners = [
  {
    name: "Shopify",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopify-El7CdRfo4w6erTD9dvMxIGYs0xbOQD.png",
    width: 120,
    height: 40,
  },
  {
    name: "VTEX",
    logo: "https://blobs.vusercontent.net/blob/VTEX-ISBiowq6UFZ09Ko0lirJBCkbFHvEjm.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Klaviyo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/klaviyo-xLeAS9TPYSs3PZTCjtLxWTDBIaX1sg.png",
    width: 120,
    height: 40,
  },
  {
    name: "Google",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-47OSKkf0hTi4Kjh1P5XtHFT8NSQUBy.png",
    width: 120,
    height: 40,
  },
]

export function Partners() {
  return (
    <section className="border-y bg-background/50 py-12 md:py-16">
      <div className="container px-4">
        <h2 className="text-center text-lg font-medium bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent font-semibold mb-8">
          Conectamos la mejor tecnología con tu negocio
        </h2>
        <div className="mx-auto grid max-w-screen-lg grid-cols-2 items-center gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`Logo de ${partner.name}`}
                width={partner.width}
                height={partner.height}
                className={`transition-all hover:opacity-100 opacity-80 object-contain ${
                  partner.name === "VTEX" ? "h-16 w-auto md:h-20" : "h-10 w-auto md:h-12"
                }`}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
