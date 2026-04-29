import { Badge } from "@/components/ui/badge"
const features = [
  {
    title: "Alle Angebote. Eine App.",
    description: "Keine drei verschiedenen Apps mehr. Offerto PROFI zeigt alle Wochenangebote von Aligro, TopCC und Transgourmet in einer übersichtlichen Ansicht.",
    img: "/feat-offers.jpg",
  },
  {
    title: "Suchen, filtern, sparen.",
    description: "Filtere nach Kategorie, Händler oder Rabatt. Suche auf Deutsch, Französisch oder Italienisch — die App findet das günstigste Angebot.",
    img: "/feat-search.jpg",
  },
  {
    title: "Nie wieder etwas vergessen.",
    description: "Füge Angebote direkt zur Einkaufsliste hinzu, hake Artikel ab und sieh in Echtzeit wie viel du sparst. Vollständig offline verfügbar.",
    img: "/feat-list.jpg",
  },
  {
    title: "Digitale Prospekte.",
    description: "Blättere in den originalen Werbeprospekten direkt in der App. Zoom, swipe und speichere interessante Seiten — alles digital, kein Papier.",
    img: "/feat-catalog.jpg",
  },
  {
    title: "Benachrichtigungen.",
    description: "Erhalte eine Push-Benachrichtigung, sobald neue Angebote verfügbar sind. Nie mehr verpassen, wenn dein Lieblingsprodukt im Angebot ist.",
    img: "/feat-notif.jpg",
  },
  {
    title: "Offline verfügbar.",
    description: "Alle Angebote werden lokal gespeichert. Auch ohne Internetverbindung hast du vollen Zugriff — perfekt für den Einkauf im Lager.",
    img: "/feat-offline.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-white/80 backdrop-blur-md border border-border/60 rounded-3xl px-10 py-8 shadow-xl shadow-black/5">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
              Features
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Gebaut für den{" "}
              <span className="text-primary">Gastronomie-Profi.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kein Bloat. Kein Abo. Keine Werbung. Nur das, was du wirklich brauchst — jede Woche, wenn die neuen Angebote kommen.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-44">
                <img
                  src={feature.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
