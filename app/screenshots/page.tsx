import Link from "next/link"
import { ArrowLeft, Check, Smartphone, Server, Database, Bell, Package, Layers, Zap, Globe } from "lucide-react"

const galleryImages = [
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.31.png",
    label: "Aktionen",
    description: "Alle aktuellen Angebote aller Händler auf einen Blick",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.37.00.png",
    label: "Produkte",
    description: "Detailansicht mit Preis, Händler und Verfügbarkeit",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.37.png",
    label: "Kategorien",
    description: "Angebote gezielt nach Produktkategorie filtern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.54.png",
    label: "PDFs herunterladen",
    description: "Originale Prospekte direkt in der App speichern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.20.06.png",
    label: "Angebots-PDFs",
    description: "Digitale Werbematerialien komfortabel durchblättern",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.18.01.png",
    label: "Einkaufsliste",
    description: "Aktionsprodukte direkt zur Einkaufsliste hinzufügen",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.02.png",
    label: "Benachrichtigungen",
    description: "Neue Aktionen sofort per Push-Benachrichtigung erhalten",
  },
  {
    file: "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.17.png",
    label: "Benutzereinstellungen",
    description: "Händler und persönliche Präferenzen individuell anpassen",
  },
]

const colors = [
  "bg-blue-50/60 dark:bg-blue-950/20",
  "bg-rose-50/60 dark:bg-rose-950/20",
  "bg-emerald-50/60 dark:bg-emerald-950/20",
  "bg-amber-50/60 dark:bg-amber-950/20",
  "bg-violet-50/60 dark:bg-violet-950/20",
  "bg-cyan-50/60 dark:bg-cyan-950/20",
  "bg-orange-50/60 dark:bg-orange-950/20",
  "bg-teal-50/60 dark:bg-teal-950/20",
]

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl scale-110" />
      <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl shadow-slate-900/30 ring-1 ring-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4.5rem] h-5 bg-slate-900 rounded-b-2xl z-10" />
        <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-slate-900">
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
        <div className="w-14 h-0.5 bg-white/20 rounded-full mx-auto mt-2" />
      </div>
    </div>
  )
}

export default function CapturasPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="w-full px-4 py-3 relative flex items-center justify-center">
          {/* Móvil: solo icono redondo */}
          <Link
            href="/"
            className="absolute left-4 sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Zur Startseite"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          {/* Desktop: botón con texto */}
          <Link
            href="/"
            className="absolute left-4 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Zur Startseite
          </Link>
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="Offerto PROFI" className="w-9 h-9 rounded-[8px] shadow-sm" />
            <div className="text-center">
              <h2 className="font-bold text-lg text-foreground leading-tight whitespace-nowrap">App-Screenshots</h2>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Alle Funktionen im Überblick</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-background border-b border-border/40 px-6 py-16 md:py-24 text-center">
        <h1 className="font-bold text-4xl md:text-6xl text-foreground leading-tight tracking-tight mb-6">
          Alle Angebote.<br />
          <span className="text-primary">Eine App.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Spare Zeit und Geld — alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Nie wieder Prospekte wälzen.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src="/shops/apple.png" alt="App Store" className="h-12 object-contain" />
          <img src="/shops/google.png" alt="Google Play" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {["Kostenlos", "Kein Abo", "Keine Werbung", "Lebenslange Updates", "Offline verfügbar"].map((chip) => (
            <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
              <Check className="w-3 h-3 text-red-500 shrink-0" strokeWidth={3} />
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Título sección */}
      <div className="max-w-4xl mx-auto w-full px-6 pt-14 pb-2 text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-foreground">Impressionen</h2>
        <p className="text-muted-foreground mt-2 text-base">Ein Blick in die App — Funktion für Funktion</p>
      </div>

      {/* Lista screenshots */}
      <div className="max-w-4xl mx-auto w-full px-6 py-10 flex flex-col gap-6">
        {galleryImages.map((item, i) => (
          <div
            key={item.file}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl px-6 md:px-8 py-8 ${colors[i]} ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-[240px] md:w-[320px] shrink-0">
              <PhoneFrame
                src={`/captutras_presentacion/${encodeURIComponent(item.file)}`}
                alt={item.label}
              />
            </div>
            <div className={`flex-1 space-y-2 text-center md:text-left ${i % 2 === 1 ? "md:text-right" : ""}`}>
              <div className={`flex items-center justify-center md:justify-start gap-2.5 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-bold text-foreground text-xl md:text-3xl">{item.label}</h3>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="border-t border-border/40 bg-card/50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl md:text-3xl text-foreground mb-2">Technologie & Aufbau</h2>
            <p className="text-muted-foreground text-sm md:text-base">Wie die App unter der Haube funktioniert</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Smartphone className="w-6 h-6" />, title: "React Native", sub: "Expo SDK 54 · Bare Workflow", color: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50", icon_color: "text-blue-500" },
              { icon: <Layers className="w-6 h-6" />, title: "TypeScript", sub: "Strict mode · Typsicher", color: "bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900/50", icon_color: "text-sky-500" },
              { icon: <Zap className="w-6 h-6" />, title: "Expo Router v6", sub: "File-based Navigation", color: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50", icon_color: "text-violet-500" },
              { icon: <Package className="w-6 h-6" />, title: "Zustand 5", sub: "Globales State Management", color: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50", icon_color: "text-orange-500" },
              { icon: <Bell className="w-6 h-6" />, title: "Push Notifications", sub: "expo-notifications", color: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/50", icon_color: "text-rose-500" },
              { icon: <Globe className="w-6 h-6" />, title: "i18next", sub: "DE · FR · IT · Mehrsprachig", color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50", icon_color: "text-emerald-500" },
              { icon: <Server className="w-6 h-6" />, title: "PHP 8.2 Backend", sub: "REST API · JSON", color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50", icon_color: "text-indigo-500" },
              { icon: <Database className="w-6 h-6" />, title: "MySQL 8.0", sub: "Volltextsuche · Offline SQLite", color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50", icon_color: "text-amber-500" },
            ].map((item) => (
              <div key={item.title} className={`flex flex-col gap-3 p-5 rounded-2xl border ${item.color}`}>
                <div className={item.icon_color}>{item.icon}</div>
                <div>
                  <div className="font-bold text-foreground text-base">{item.title}</div>
                  <div className="text-muted-foreground text-sm mt-0.5 leading-snug">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Swiss hosting info */}
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-8 mb-4">100% Schweiz</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <span className="text-xl">🇨🇭</span>
              <div>
                <div className="font-semibold text-foreground text-base">Schweizer Hosting</div>
                <div className="text-muted-foreground text-sm">Server: <a href="https://www.hostpoint.ch" target="_blank" className="text-primary hover:underline">hostpoint.ch</a> — Daten in der Schweiz</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <span className="text-xl">🏢</span>
              <div>
                <div className="font-semibold text-foreground text-base">Entwickelt in der Schweiz</div>
                <div className="text-muted-foreground text-sm">Von <a href="https://www.lweb.ch" target="_blank" className="text-primary hover:underline">lweb.ch</a> — Schweizer Webentwicklung</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <span className="text-xl">🔒</span>
              <div>
                <div className="font-semibold text-foreground text-base">Alles bleibt im Haus</div>
                <div className="text-muted-foreground text-sm">Code, Daten & Server — 100% in Schweizer Hand</div>
              </div>
            </div>
          </div>
          {/* Publikationsformen */}
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-8 mb-4">Verfügbar auf</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <img src="/shops/apple.png" alt="App Store" className="h-8 object-contain" />
              <div>
                <div className="font-semibold text-foreground text-base">Apple App Store</div>
                <div className="text-muted-foreground text-sm">iOS — iPhone & iPad</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <img src="/shops/google.png" alt="Google Play" className="h-8 object-contain" />
              <div>
                <div className="font-semibold text-foreground text-base">Google Play Store</div>
                <div className="text-muted-foreground text-sm">Android — alle Geräte</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="font-semibold text-foreground text-base">Web App</div>
                <div className="text-muted-foreground text-sm">Browser — kein Download nötig</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-border/40 bg-card">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Desktop: izquierda + derecha / Móvil: columna */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
            {/* Izquierda: logo + nombre */}
            <div className="flex flex-col items-center md:items-start gap-3 md:w-56 shrink-0">
              <img src="/icon.png" alt="Offerto PROFI" className="w-16 h-16 rounded-[8px] shadow-md" />
              <div className="text-center md:text-left">
                <div className="font-bold text-foreground text-lg">Offerto PROFI</div>
                <div className="text-muted-foreground text-sm">Alle Angebote. Eine App.</div>
              </div>
            </div>
            {/* Derecha: bloque informativo */}
            <div className="flex-1 text-sm text-muted-foreground leading-relaxed border border-border/40 rounded-2xl px-6 py-5 bg-background">
              <p className="font-semibold text-foreground mb-2">Hinweis — Work in Progress</p>
              <p>Diese Präsentation zeigt den aktuellen Stand der App und der Landing Page. Noch ist nichts definitiv festgelegt — Design, Sektionen, Inhalte und Funktionen können jederzeit angepasst, ergänzt oder entfernt werden. Die App lässt sich vollständig auf die Bedürfnisse und das Erscheinungsbild jedes Unternehmens personalisieren.</p>
            </div>
          </div>
          {/* Botón + copyright */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur Startseite
            </Link>
            <div className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Offerto PROFI</div>
          </div>
        </div>
      </footer>

    </div>
  )
}
