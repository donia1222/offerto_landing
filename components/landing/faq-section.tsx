"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"
import { useInView, fi } from "@/hooks/use-in-view"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-card transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-display)] font-semibold text-foreground text-sm sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].faq
  const { ref, inView } = useInView()

  return (
    <section ref={ref as any} className="py-20 sm:py-28 bg-secondary/30" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" style={fi(inView, 0)}>
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

        <div className="space-y-3">
          {t.items.map((faq, index) => (
            <div key={index} style={fi(inView, index + 1)}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
