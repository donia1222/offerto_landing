import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum — Offerto PROFI",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Link>

        <h1 className="font-bold text-3xl text-foreground mb-2">Impressum</h1>
        <p className="text-muted-foreground text-sm mb-10">Offerto PROFI ist ein Produkt, entwickelt von:</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Angaben gemäss Schweizer Recht</h2>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Lweb</p>
              <p>Roberto Salvador</p>
              <p>9475 Sevelen</p>
              <p>Schweiz</p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Kontakt</h2>
            <div className="space-y-1">
              <p>Telefon: <a href="tel:+41765608645" className="text-primary hover:underline">+41 76 560 86 45</a></p>
              <p>E-Mail: <a href="mailto:info@lweb.ch" className="text-primary hover:underline">info@lweb.ch</a></p>
              <p>Website: <a href="https://www.lweb.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lweb.ch</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Unternehmensform</h2>
            <p>Einzelunternehmen / Freelance</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Verantwortlich für den Inhalt</h2>
            <p>Roberto Salvador, 9475 Sevelen, Schweiz</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Haftungsausschluss</h2>
            <p>Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen auf dieser Website.</p>
            <p className="mt-2">Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">Urheberrecht</h2>
            <p>Die auf dieser Website enthaltenen Inhalte und Werke sind urheberrechtlich geschützt. Jede Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Autors.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
