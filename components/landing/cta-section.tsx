"use client"

import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

export function CTASection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].cta

  return (
    <section id="cta" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/4 to-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/6 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          {t.title}{" "}
          <span className="text-primary">{t.titleHighlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <Link href="#">
            <img src="/shops/apple.png" alt="App Store" className="h-14 w-auto object-contain hover:opacity-80 transition-opacity rounded-[10px]" />
          </Link>
          <Link href="#">
            <img src="/shops/google.png" alt="Google Play" className="h-14 w-auto object-contain hover:opacity-80 transition-opacity rounded-[10px]" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {t.benefits.map((benefit) => (
            <div
              key={benefit}
              className="inline-flex items-center gap-1.5 bg-white border border-border/60 text-foreground/80 text-sm font-medium rounded-full px-4 py-2 shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
