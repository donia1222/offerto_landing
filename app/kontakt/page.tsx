import Link from "next/link"
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt — Offerto PROFI",
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Link>

        <h1 className="font-bold text-3xl text-foreground mb-2">Kontakt</h1>
        <p className="text-muted-foreground text-sm mb-10">Wir freuen uns auf Ihre Nachricht.</p>

        <div className="space-y-4">
          <a href="mailto:info@lweb.ch" className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">E-Mail</div>
              <div className="text-primary text-sm">info@lweb.ch</div>
            </div>
          </a>

          <a href="tel:+41765608645" className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Telefon</div>
              <div className="text-primary text-sm">+41 76 560 86 45</div>
            </div>
          </a>

          <a href="https://www.lweb.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Website</div>
              <div className="text-primary text-sm">lweb.ch</div>
            </div>
          </a>
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-border/40 bg-card/50 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">Lweb — Roberto Salvador</p>
          <p>9475 Sevelen, Schweiz</p>
        </div>
      </div>
    </div>
  )
}
