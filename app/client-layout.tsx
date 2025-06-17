"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Suspense } from "react"
import Navbar from "@/components/navbar"
import NavbarReserva from "@/components/navbar-agenda"

// Simple loading component for Suspense
function NavLoading() {
  return <div className="h-20 bg-white border-b border-gray-100"></div>
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAgendaPage = pathname === "/agenda" || pathname === "/reserva"

  return (
    <>
      <Suspense fallback={<NavLoading />}>{isAgendaPage ? <NavbarReserva /> : <Navbar />}</Suspense>
      {children}
    </>
  )
}
