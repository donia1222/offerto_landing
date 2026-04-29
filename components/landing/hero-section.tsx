"use client"

import { Sparkles, TrendingDown, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const partners = [
  { name: "Aligro",       logo: "/logos-shops/aligrotrasnparehte.png",   offers: "200+", logoH: "h-10" },
  { name: "TopCC",        logo: "/logos-shops/topcctrasparehte.png",     offers: "150+", logoH: "h-10" },
  { name: "Transgourmet", logo: "/logos-shops/trasngoustettrasprete.png", offers: "180+", logoH: "h-20" },
]

const chips = ["Kostenlos", "Kein Abo", "Keine Werbung"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/35" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">

          {/* Left: Content — frosted card */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/80 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl shadow-black/10">
            <div className="space-y-5">
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
                Alle Angebote.{" "}
                <span className="text-primary">Eine App.</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                Spare Zeit und Geld — alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Nie wieder Prospekte wälzen.
              </p>
            </div>

            {/* Store badges */}
            <div className="flex flex-row gap-3">
              <Link href="#cta">
                <img src="/shops/apple.png" alt="App Store" className="h-16 w-auto object-contain hover:opacity-80 transition-opacity rounded-[10px]" />
              </Link>
              <Link href="#cta">
                <img src="/shops/google.png" alt="Google Play" className="h-16 w-auto object-contain hover:opacity-80 transition-opacity rounded-[10px]" />
              </Link>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-1.5 bg-primary/8 border border-primary/20 text-primary text-sm font-semibold rounded-full px-4 py-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {chip}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Store cards */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md space-y-4">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl scale-105 -z-10" />

              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <img src={partner.logo} alt={partner.name} className={`${partner.logoH} w-auto object-contain`} />
                  <div className="flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5">
                    <TrendingDown className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-primary">{partner.offers} Angebote/Woche</span>
                  </div>
                </div>
              ))}

              <div className="bg-primary rounded-2xl px-6 py-5 flex items-center justify-between shadow-lg shadow-primary/25">
                <div>
                  <div className="text-primary-foreground font-[family-name:var(--font-display)] font-bold text-lg">
                    500+ Angebote
                  </div>
                  <div className="text-primary-foreground/70 text-sm">jede Woche aktualisiert</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center overflow-hidden">
                  <img src="/icon.png" alt="Offerto PROFI" className="w-9 h-9 object-contain" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
