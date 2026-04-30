"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

const storesMeta = [
  { name: "Aligro",       logo: "/logos-shops/aligrotrasnparehte.png",    offers: "200+", website: "www.aligro.ch",       url: "https://www.aligro.ch"       },
  { name: "TopCC",        logo: "/logos-shops/topcctrasparehte.png",      offers: "150+", website: "www.topcc.ch",         url: "https://www.topcc.ch"         },
  { name: "Transgourmet", logo: "/logos-shops/trasngoustettrasprete.png",  offers: "180+", website: "www.transgourmet.ch", url: "https://www.transgourmet.ch" },
]

export function StoresSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].stores

  return (
    <section className="py-20 sm:py-28 bg-card border-y border-border/50" id="stores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-white/80 backdrop-blur-md border border-border/60 rounded-3xl px-10 py-8 shadow-xl shadow-black/5">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
              {t.badge}
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t.title}{" "}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((store, index) => {
            const meta = storesMeta[index]
            return (
              <Card
                key={store.name}
                className="group border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="bg-white flex items-center justify-center h-32 px-8 border-b border-border/40">
                    <img
                      src={meta.logo}
                      alt={store.name}
                      className={`max-w-full object-contain ${store.name === "Transgourmet" ? "max-h-24" : "max-h-16"}`}
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                      {store.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {store.description}
                    </p>
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {meta.website}
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground/70 mt-10 italic">
          {t.thankYou}
        </p>
      </div>
    </section>
  )
}
