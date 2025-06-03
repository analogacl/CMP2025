"use client"

import { usePathname } from "next/navigation"
import Footer from "./footer"
import InstagramComponent from "./instagram"

export default function FooterWrapper() {
  const pathname = usePathname()
  const isTeleconsultaPage = pathname === "/teleconsulta"

  // Para la página de teleconsulta, no mostrar footer ni Instagram (ya tiene su propio footer integrado)
  if (isTeleconsultaPage) {
    return null
  }

  // Para todas las demás páginas, mostrar Instagram seguido del footer original de la versión 120
  return (
    <>
      <InstagramComponent />
      <Footer />
    </>
  )
}
