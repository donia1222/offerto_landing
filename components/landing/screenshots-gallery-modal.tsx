"use client"

import { useState } from "react"
import { Smartphone, ArrowLeft } from "lucide-react"

const galleryImages = [
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.31.png",
    label: "Aktionen",
    description: "Alle aktuellen Angebote aller Händler auf einen Blick",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.37.00.png",
    label: "Produkte",
    description: "Detailansicht mit Preis, Händler und Verfügbarkeit",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.37.png",
    label: "Kategorien",
    description: "Angebote gezielt nach Produktkategorie filtern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.54.png",
    label: "PDFs herunterladen",
    description: "Originale Prospekte direkt in der App speichern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.20.06.png",
    label: "Angebots-PDFs",
    description: "Digitale Werbematerialien komfortabel durchblättern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.18.01.png",
    label: "Einkaufsliste",
    description: "Aktionsprodukte direkt zur Einkaufsliste hinzufügen",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.02.png",
    label: "Benachrichtigungen",
    description: "Neue Aktionen sofort per Push-Benachrichtigung erhalten",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.17.png",
    label: "Benutzereinstellungen",
    description: "Händler und persönliche Präferenzen individuell anpassen",
  },
]

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl scale-110" />
      <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl shadow-slate-900/30 ring-1 ring-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4.5rem] h-5 bg-slate-900 rounded-b-2xl z-10" />
        <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-slate-900">
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
        <div className="w-14 h-0.5 bg-white/20 rounded-full mx-auto mt-2" />
      </div>
    </div>
  )
}

export function ScreenshotsGalleryModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:bg-primary/90 active:scale-95 transition-all"
        >
          <Smartphone className="w-4 h-4" />
          Alle App-Screenshots ansehen
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background overflow-y-auto">

          {/* Header */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/40">
            <div className="w-full px-8 py-4 grid grid-cols-3 items-center">
              {/* Izquierda: botón volver */}
              <div className="flex justify-start">
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zur Startseite
                </button>
              </div>

              {/* Centro: título */}
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-lg text-foreground leading-tight">App-Screenshots</h2>
                  <p className="text-xs text-muted-foreground">Alle Funktionen im Überblick</p>
                </div>
              </div>

              {/* Derecha: vacío */}
              <div />
            </div>
          </div>

          {/* Hero Banner */}
          <div className="bg-gradient-to-b from-primary/10 to-background border-b border-border/40 px-6 py-16 md:py-24 text-center">
            <h1 className="font-bold text-4xl md:text-6xl text-foreground leading-tight tracking-tight mb-6">
              Alle Angebote.<br />
              <span className="text-primary">Eine App.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Spare Zeit und Geld — alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Nie wieder Prospekte wälzen.
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="/shops/apple.png" alt="App Store" className="h-12 object-contain" />
              <img src="/shops/google.png" alt="Google Play" className="h-12 object-contain" />
            </div>
          </div>

          {/* Lista: teléfono izquierda, texto derecha */}
          <div className="max-w-4xl mx-auto w-full px-6 py-10 flex flex-col gap-6">
            {galleryImages.map((item, i) => {
              const colors = [
                "bg-blue-50/60 dark:bg-blue-950/20",
                "bg-rose-50/60 dark:bg-rose-950/20",
                "bg-emerald-50/60 dark:bg-emerald-950/20",
                "bg-amber-50/60 dark:bg-amber-950/20",
                "bg-violet-50/60 dark:bg-violet-950/20",
                "bg-cyan-50/60 dark:bg-cyan-950/20",
                "bg-orange-50/60 dark:bg-orange-950/20",
                "bg-teal-50/60 dark:bg-teal-950/20",
              ]
              return (
              <div key={item.file} className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl px-6 md:px-8 py-8 ${colors[i]} ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Teléfono grande */}
                <div className="w-[240px] md:w-[320px] shrink-0">
                  <PhoneFrame
                    src={`/captutras_presentacion/${encodeURIComponent(item.file)}`}
                    alt={item.label}
                  />
                </div>
                {/* Texto */}
                <div className={`flex-1 space-y-2 text-center md:text-left ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className={`flex items-center justify-center md:justify-start gap-2.5 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-foreground text-xl">{item.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
