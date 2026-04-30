"use client"

import { Badge } from "@/components/ui/badge"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

const featureImgs = [
  "/feat-offers.jpg",
  "/feat-search.jpg",
  "/feat-list.jpg",
  "/feat-catalog.jpg",
  "/feat-notif.jpg",
  "/feat-offline.jpg",
]

export function FeaturesSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].features

  return (
    <section id="features" className="py-20 sm:py-28">
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
          {t.items.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={featureImgs[index]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
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
