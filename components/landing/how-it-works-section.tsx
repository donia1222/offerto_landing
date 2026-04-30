"use client"

import { Badge } from "@/components/ui/badge"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

export function HowItWorksSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].howItWorks

  return (
    <section className="py-20 sm:py-28" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        <div className="grid sm:grid-cols-3 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground font-[family-name:var(--font-display)] text-4xl font-bold shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
