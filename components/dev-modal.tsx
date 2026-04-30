"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export function DevModal() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return
    const seen = sessionStorage.getItem("dev-modal-seen")
    if (!seen) setVisible(true)
  }, [pathname])

  const close = () => {
    sessionStorage.setItem("dev-modal-seen", "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-background border border-border/60 rounded-2xl shadow-2xl w-full max-w-md p-7 relative">
        <button
          onClick={close}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-3xl mb-4">🚧</div>
        <h2 className="font-bold text-foreground text-xl mb-2">Work in Progress</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Diese Website befindet sich derzeit in der <strong className="text-foreground">Entwicklungsphase</strong>. Inhalte, Design und Funktionen können sich jederzeit ändern. Es handelt sich um eine Vorschau — noch nichts ist definitiv festgelegt.
        </p>
        <button
          onClick={close}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Verstanden
        </button>
      </div>
    </div>
  )
}
