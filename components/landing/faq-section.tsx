"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Ist die App wirklich kostenlos?",
    answer: "Ja, Offerto PROFI ist vollständig kostenlos. Kein Abo, keine versteckten Kosten, keine Werbung.",
  },
  {
    question: "Welche Grosshändler sind verfügbar?",
    answer: "Aktuell aggregiert Offerto PROFI die Wochenangebote von Aligro, TopCC und Transgourmet — den drei führenden Cash-&-Carry-Händlern der Schweiz.",
  },
  {
    question: "Wie oft werden die Angebote aktualisiert?",
    answer: "Die Angebote werden jede Woche automatisch aktualisiert, sobald die neuen Aktionen der Händler verfügbar sind. Du erhältst eine Push-Benachrichtigung, wenn neue Angebote erscheinen.",
  },
  {
    question: "Funktioniert die App auch ohne Internet?",
    answer: "Ja. Alle Angebote werden lokal auf deinem Gerät gespeichert. Du kannst die App und deine Einkaufsliste vollständig offline nutzen — ideal für den Einkauf im Lager.",
  },
  {
    question: "In welchen Sprachen ist die App verfügbar?",
    answer: "Offerto PROFI ist vollständig auf Deutsch, Französisch, Italienisch und Englisch verfügbar.",
  },
  {
    question: "Gibt es eine Android-Version?",
    answer: "Die App ist aktuell für iOS verfügbar. Eine Android-Version ist in Entwicklung und wird bald im Google Play Store erhältlich sein.",
  },
]

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
  return (
    <section className="py-20 sm:py-28 bg-secondary/30" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
            FAQ
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Häufig gestellte{" "}
            <span className="text-primary">Fragen.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alles, was du über Offerto PROFI wissen musst.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
