"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Shield, Globe, Wifi, AlertTriangle } from "lucide-react"

// Dynamically import the IframeDiagnostics component to avoid SSR issues
const IframeDiagnostics = dynamic(() => import("@/components/iframe-diagnostics"), {
  ssr: false,
  loading: () => <div className="bg-gray-100 rounded-lg p-4 animate-pulse h-64"></div>,
})

export default function DiagnosticsPage() {
  const [browserInfo, setBrowserInfo] = useState<any>({})
  const [networkInfo, setNetworkInfo] = useState<any>({})
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Gather browser information only on client side
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setBrowserInfo({
        userAgent: navigator.userAgent,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        onLine: navigator.onLine,
      })

      // Check network information if available
      if ("connection" in navigator) {
        const connection = (navigator as any).connection
        setNetworkInfo({
          effectiveType: connection?.effectiveType,
          downlink: connection?.downlink,
          rtt: connection?.rtt,
        })
      }
    }
  }, [])

  const testUrls = [
    {
      src: "https://tokbox.com/embed/embed/ot-embed.js?embedId=e94ca780-e804-4e6a-a0b8-3c7d1405235a&room=CMP2025&iframe=true",
      title: "Tokbox Video Call",
      testId: "tokbox-video",
    },
    {
      src: "https://agendamiento.reservo.cl/makereserva/agenda/F00bJNy0x0f4l06M5a51dBd9V8g3og",
      title: "Reservo Booking System (Default)",
      testId: "reservo-default",
    },
    {
      src: "https://agendamiento.reservo.cl/makereserva/agenda/v05ojpT0k0IZPX995971C5y9c6x3YF",
      title: "Reservo Booking System (Psychology - Presencial)",
      testId: "reservo-psicologia-presencial",
    },
    {
      src: "https://agendamiento.reservo.cl/makereserva/agenda/n016jNr000zIRw775k41ren9X1t3h",
      title: "Reservo Booking System (Psychology - Online)",
      testId: "reservo-psicologia-online",
    },
  ]

  useEffect(() => {
    if (!isClient) return

    // Test camera and microphone permissions
    if (typeof navigator !== "undefined" && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(() => {
          const cameraStatus = document.getElementById("camera-status")
          const micStatus = document.getElementById("mic-status")
          if (cameraStatus) cameraStatus.textContent = "✅ Granted"
          if (micStatus) micStatus.textContent = "✅ Granted"
        })
        .catch(() => {
          const cameraStatus = document.getElementById("camera-status")
          const micStatus = document.getElementById("mic-status")
          if (cameraStatus) cameraStatus.textContent = "❌ Denied/Unavailable"
          if (micStatus) micStatus.textContent = "❌ Denied/Unavailable"
        })
    }

    // Test domain connectivity
    if (typeof fetch !== "undefined") {
      fetch("https://tokbox.com", { mode: "no-cors" })
        .then(() => {
          const tokboxPing = document.getElementById("tokbox-ping")
          if (tokboxPing) tokboxPing.textContent = "✅ Reachable"
        })
        .catch(() => {
          const tokboxPing = document.getElementById("tokbox-ping")
          if (tokboxPing) tokboxPing.textContent = "❌ Unreachable"
        })

      fetch("https://agendamiento.reservo.cl", { mode: "no-cors" })
        .then(() => {
          const reservoPing = document.getElementById("reservo-ping")
          if (reservoPing) reservoPing.textContent = "✅ Reachable"
        })
        .catch(() => {
          const reservoPing = document.getElementById("reservo-ping")
          if (reservoPing) reservoPing.textContent = "❌ Unreachable"
        })
    }
  }, [isClient])

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading diagnostics...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">System Diagnostics</h1>
            <p className="text-gray-600">Comprehensive testing of video call and booking integrations</p>
          </div>

          {/* Browser Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Browser Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <strong>User Agent:</strong> {browserInfo.userAgent || "Loading..."}
                </p>
                <p>
                  <strong>Platform:</strong> {browserInfo.platform || "Loading..."}
                </p>
                <p>
                  <strong>Language:</strong> {browserInfo.language || "Loading..."}
                </p>
              </div>
              <div>
                <p>
                  <strong>Cookies Enabled:</strong> {browserInfo.cookieEnabled ? "✅ Yes" : "❌ No"}
                </p>
                <p>
                  <strong>Online Status:</strong> {browserInfo.onLine ? "✅ Online" : "❌ Offline"}
                </p>
                {networkInfo.effectiveType && (
                  <p>
                    <strong>Connection Type:</strong> {networkInfo.effectiveType}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Security Checks */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-green-500" />
              <h2 className="text-xl font-semibold">Security & Permissions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <strong>HTTPS:</strong>{" "}
                  {typeof window !== "undefined" && window.location?.protocol === "https:"
                    ? "✅ Secure"
                    : "❌ Not Secure"}
                </p>
                <p>
                  <strong>Third-party Cookies:</strong> Testing...
                </p>
              </div>
              <div>
                <p>
                  <strong>Camera Permission:</strong> <span id="camera-status">Testing...</span>
                </p>
                <p>
                  <strong>Microphone Permission:</strong> <span id="mic-status">Testing...</span>
                </p>
              </div>
            </div>
          </div>

          {/* Network Tests */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="h-5 w-5 text-purple-500" />
              <h2 className="text-xl font-semibold">Network Connectivity</h2>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Tokbox Domain:</strong> <span id="tokbox-ping">Testing...</span>
              </p>
              <p>
                <strong>Reservo Domain:</strong> <span id="reservo-ping">Testing...</span>
              </p>
            </div>
          </div>

          {/* Iframe Tests */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-semibold">Iframe Integration Tests</h2>
            </div>

            {testUrls.map((test, index) => (
              <IframeDiagnostics key={index} src={test.src} title={test.title} testId={test.testId} />
            ))}
          </div>

          {/* Recommendations */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-yellow-800 mb-3">Troubleshooting Recommendations</h3>
            <ul className="text-sm text-yellow-700 space-y-2">
              <li>• If iframes fail to load, check if ad blockers are enabled</li>
              <li>• Ensure browser allows third-party cookies and scripts</li>
              <li>• For video calls, grant camera and microphone permissions</li>
              <li>• Try using Chrome or Firefox for better compatibility</li>
              <li>• Check if corporate firewall is blocking external domains</li>
              <li>• Disable browser extensions that might interfere</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
