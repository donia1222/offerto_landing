import { Badge } from "@/components/ui/badge"

const screenshots = [
  {
    img: "/capturas/IMG_8581.jpeg",
    label: "Angebots-Übersicht",
    description: "Alle aktuellen Aktionen aller Händler auf einen Blick",
  },
  {
    img: "/capturas/IMG_8583.jpeg",
    label: "Suche & Filter",
    description: "Nach Produkt, Kategorie, Händler oder Rabattstufe filtern",
  },
  {
    img: "/capturas/IMG_8591.PNG",
    label: "Einkaufsliste",
    description: "Angebote direkt hinzufügen, Ersparnis in Echtzeit sehen",
  },
  {
    img: "/capturas/IMG_8614.jpeg",
    label: "Digitale Prospekte",
    description: "Originale Werbematerialien direkt in der App durchblättern",
  },
]

function PhoneFrame({ img, alt }: { img: string; alt: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl scale-110" />
      <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl shadow-slate-900/30 ring-1 ring-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4.5rem] h-5 bg-slate-900 rounded-b-2xl z-10" />
        <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-slate-900">
          <img src={img} alt={alt} className="w-full h-full object-contain" />
        </div>
        <div className="w-14 h-0.5 bg-white/20 rounded-full mx-auto mt-2" />
      </div>
    </div>
  )
}

export function AppScreenshotsSection() {
  return (
    <section className="py-20 sm:py-28 bg-card border-y border-border/50 relative overflow-hidden" id="app-preview">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/4 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
            App-Vorschau
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Die App{" "}
            <span className="text-primary">im Überblick.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Designed für den täglichen Einsatz im Betrieb — schnell, übersichtlich und vollständig offline verfügbar.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {screenshots.map((screen, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <PhoneFrame img={screen.img} alt={screen.label} />
              <div className="text-center space-y-1 px-2">
                <div className="font-[family-name:var(--font-display)] font-bold text-foreground text-sm sm:text-base">
                  {screen.label}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm leading-snug">
                  {screen.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
