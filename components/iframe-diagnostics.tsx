"use client"

import { useState, useEffect, useRef } from "react"
import { AlertCircle, CheckCircle, Loader2, RefreshCw } from "lucide-react"

interface IframeDiagnosticsProps {
  src: string
  title: string
  testId: string
}

export default function IframeDiagnostics({ src, title, testId }: IframeDiagnosticsProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error" | "timeout">("loading")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [loadTime, setLoadTime] = useState<number>(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    startTimeRef.current = Date.now()
    setStatus("loading")
    setErrorMessage("")

    // Set a timeout for iframe loading
    const timeout = setTimeout(() => {
      if (status === "loading") {
        setStatus("timeout")
        setErrorMessage("Iframe failed to load within 30 seconds")
      }
    }, 30000)

    return () => clearTimeout(timeout)
  }, [src])

  const handleLoad = () => {
    const endTime = Date.now()
    setLoadTime(endTime - startTimeRef.current)
    setStatus("success")
    console.log(`✅ ${testId} loaded successfully in ${endTime - startTimeRef.current}ms`)
  }

  const handleError = (error: any) => {
    setStatus("error")
    setErrorMessage(`Failed to load iframe: ${error?.message || "Unknown error"}`)
    console.error(`❌ ${testId} failed to load:`, error)
  }

  const retry = () => {
    if (iframeRef.current) {
      startTimeRef.current = Date.now()
      setStatus("loading")
      setErrorMessage("")
      // Force reload by changing src
      const currentSrc = iframeRef.current.src
      iframeRef.current.src = ""
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc
        }
      }, 100)
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
      case "timeout":
        return <AlertCircle className="h-5 w-5 text-red-500" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "border-blue-200 bg-blue-50"
      case "success":
        return "border-green-200 bg-green-50"
      case "error":
      case "timeout":
        return "border-red-200 bg-red-50"
    }
  }

  return (
    <div className={`border rounded-lg p-4 ${getStatusColor()}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        {(status === "error" || status === "timeout") && (
          <button
            onClick={retry}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </button>
        )}
      </div>

      <div className="text-sm text-gray-600 mb-2">
        <p>
          <strong>URL:</strong> {src}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        {loadTime > 0 && (
          <p>
            <strong>Load Time:</strong> {loadTime}ms
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600">
            <strong>Error:</strong> {errorMessage}
          </p>
        )}
      </div>

      <div className="relative bg-gray-100 rounded" style={{ height: "200px" }}>
        <iframe
          ref={iframeRef}
          src={src}
          width="100%"
          height="100%"
          className="border-0 rounded"
          onLoad={handleLoad}
          onError={handleError}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
          allow="microphone; camera; autoplay; encrypted-media; fullscreen"
          title={title}
        />
      </div>
    </div>
  )
}
