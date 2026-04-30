import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz — Offerto PROFI",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Link>

        <h1 className="font-bold text-3xl text-foreground mb-2">Datenschutzerklärung</h1>
        <p className="text-muted-foreground text-sm mb-10">Stand: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">1. Verantwortliche Stelle</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
            <div className="mt-2 space-y-1">
              <p className="font-semibold text-foreground">Lweb — Roberto Salvador</p>
              <p>9475 Sevelen, Schweiz</p>
              <p>E-Mail: <a href="mailto:info@lweb.ch" className="text-primary hover:underline">info@lweb.ch</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">2. Erhobene Daten</h2>
            <p>Beim Besuch dieser Website werden automatisch folgende technische Daten erfasst:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Browsertyp und -version</li>
              <li>Besuchte Seiten und Navigationspfade</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
            </ul>
            <p className="mt-2">Diese Daten werden ausschliesslich zur Verbesserung der Website und zur statistischen Auswertung verwendet.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">3. Analyse-Tools (Vercel Analytics)</h2>
            <p>Wir verwenden <strong className="text-foreground">Vercel Analytics</strong> zur anonymisierten Analyse des Website-Traffics. Vercel Analytics sammelt keine personenbezogenen Daten und verwendet keine Werbe-Cookies. Die Daten werden in aggregierter, anonymer Form gespeichert. Weitere Informationen: <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com/docs/analytics/privacy-policy</a></p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">4. Cookies</h2>
            <p>Diese Website verwendet ausschliesslich technisch notwendige Cookies sowie anonymisierte Analyse-Cookies (Vercel Analytics). Es werden keine Werbe- oder Tracking-Cookies von Dritten eingesetzt.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">5. Datenweitergabe</h2>
            <p>Personenbezogene Daten werden nicht an Dritte weitergegeben, verkauft oder vermietet. Eine Übermittlung an Dritte erfolgt ausschliesslich, wenn dies gesetzlich vorgeschrieben ist.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">6. Datenspeicherung</h2>
            <p>Die Daten werden auf Servern von <strong className="text-foreground">Hostpoint AG</strong> (Schweiz) gespeichert. Alle Daten verbleiben in der Schweiz und unterliegen dem Schweizer Datenschutzgesetz (DSG).</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung Ihrer gespeicherten Daten. Für Anfragen wenden Sie sich bitte an: <a href="mailto:info@lweb.ch" className="text-primary hover:underline">info@lweb.ch</a></p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">8. Änderungen</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Die aktuelle Version ist stets auf dieser Seite abrufbar.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
