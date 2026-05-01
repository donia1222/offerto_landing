"use client"

import { Store, Tag, Sparkles, Globe } from "lucide-react"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"
import { useInView, fi } from "@/hooks/use-in-view"

export function StatsBar() {
  const { lang } = useLang()
  const t = landingTranslations[lang].stats
  const { ref, inView } = useInView()

  const stats = [
    { Icon: Store,    value: "3",           label: t.storesLabel },
    { Icon: Tag,      value: "500+",        label: t.offersLabel  },
    { Icon: Sparkles, value: t.freeValue,   label: t.freeLabel    },
    { Icon: Globe,    value: "DE/FR/IT/EN", label: t.langLabel    },
  ]

  return (
    <section ref={ref as any} className="bg-primary/15 border-y border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-1/4 w-56 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2.5 px-6 py-4" style={fi(inView, index)}>
              <div className="w-10 h-10 rounded-xl bg-primary/12 flex items-center justify-center">
                <stat.Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-primary leading-none">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
