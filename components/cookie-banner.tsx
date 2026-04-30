"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [pathname])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <div className="bg-card border border-border/60 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground leading-snug">
          🍪 Wir verwenden Cookies zur Analyse des Datenverkehrs (Vercel Analytics). Keine Werbecookies.
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
          >
            OK
          </button>
          <button
            onClick={decline}
            className="p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Ablehnen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
