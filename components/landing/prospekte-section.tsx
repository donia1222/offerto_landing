import { Badge } from "@/components/ui/badge"
import { CalendarDays, ExternalLink } from "lucide-react"

const prospekte = [
  {
    store: "Aligro",
    logo: "/logos-shops/aligrotrasnparehte.png",
    img: "/prospectos/aligro.png",
    logoH: "h-8",
    url: "https://www.aligro.ch/documents/prospectus",
  },
  {
    store: "TopCC",
    logo: "/logos-shops/topcctrasparehte.png",
    img: "/prospectos/topcc.png",
    logoH: "h-8",
    url: "https://www.topcc.ch/aktuelles",
  },
  {
    store: "Transgourmet",
    logo: "/logos-shops/trasngoustettrasprete.png",
    img: "/prospectos/transgousrmet.png",
    logoH: "h-12",
    url: "https://www.transgourmet.ch/de/aktionen-broschueren",
  },
]

export function ProspekteSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30" id="prospekte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
            Wochenkataloge
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Alle Prospekte.{" "}
            <span className="text-primary">Eine App.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Blättere durch die aktuellen Wochenkataloge von Aligro, TopCC und Transgourmet — digital, direkt in der App.
          </p>
        </div>

        {/* Prospekte grid */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {prospekte.map((p) => (
            <div
              key={p.store}
              className="group bg-white border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Store header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
                <img src={p.logo} alt={p.store} className={`${p.logoH} w-auto object-contain`} />
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-secondary rounded-full px-3 py-1.5">
                  <CalendarDays className="w-3.5 h-3.5" />
                  Diese Woche
                </div>
              </div>

              {/* Prospekt image */}
              <div className="overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={`${p.store} Wochenkatalog`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Link button */}
              <div className="px-5 py-4 border-t border-border/40">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center rounded-xl bg-primary/8 border border-primary/20 text-primary text-sm font-semibold py-2.5 hover:bg-primary/15 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Prospekt ansehen
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground/60 mt-10 italic">
          Die Wochenkataloge werden jeden Montag automatisch in der App aktualisiert.
        </p>

      </div>
    </section>
  )
}
