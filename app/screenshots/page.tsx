"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Smartphone, Server, Database, Bell, Package, Layers, Zap, Globe, Mail, X } from "lucide-react"
import { SectionNav } from "./section-nav"
import { translations, type Lang } from "./translations"

const galleryFiles = [
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.31.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.37.00.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.37.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.16.54.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.20.06.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.18.01.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.02.png",
  "Simulator Screenshot - iPhone 16 - 2026-04-29 at 23.19.17.png",
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

const techIcons = [
  <Smartphone className="w-6 h-6" />,
  <Layers className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <Package className="w-6 h-6" />,
  <Bell className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Server className="w-6 h-6" />,
  <Database className="w-6 h-6" />,
]

const techColors = [
  { color: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50", icon_color: "text-blue-500" },
  { color: "bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900/50", icon_color: "text-sky-500" },
  { color: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50", icon_color: "text-violet-500" },
  { color: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50", icon_color: "text-orange-500" },
  { color: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/50", icon_color: "text-rose-500" },
  { color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50", icon_color: "text-emerald-500" },
  { color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50", icon_color: "text-indigo-500" },
  { color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50", icon_color: "text-amber-500" },
]

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
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

const githubIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function ScreenshotsPage() {
  const [lang, setLang] = useState<Lang>("de")
  const [langOpen, setLangOpen] = useState(false)
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="w-full px-4 py-3 relative flex items-center justify-between">
          {/* Izquierda: logo + título */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img src="/icon.png" alt="Offerto PROFI" className="w-9 h-9 rounded-[8px] shadow-sm" />
            <h2 className="font-bold text-base leading-tight whitespace-nowrap">
              <span className="text-foreground">Offerto</span>
              <span className="text-red-500 text-[10px] font-bold tracking-widest ml-1">PROFI</span>
              <span className="text-foreground hidden sm:inline"> — {t.headerTitle}</span>
            </h2>
          </div>
          {/* Centro: nav links — absolutamente centrado, solo desktop */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {[
              { label: t.navScreenshots, href: "#screenshots" },
              { label: t.navTech, href: "#technologie" },
              { label: t.navBiz, href: "#geschaeftsmodell" },
            ].map((s) => (
              <button
                key={s.href}
                onClick={() => { const el = document.querySelector(s.href); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap"
              >
                {s.label}
              </button>
            ))}
          </div>
          {/* Derecha: globo idioma */}
          <button
            onClick={() => setLangOpen(true)}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.label}</span>
            <span className="sm:hidden">{languages.find(l => l.code === lang)?.flag}</span>
          </button>
        </div>
      </div>

      {/* Language modal */}
      {langOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setLangOpen(false)}>
          <div className="bg-background rounded-2xl border border-border/50 shadow-2xl p-6 w-full max-w-xs" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Sprache / Language</h3>
              <button onClick={() => setLangOpen(false)} className="p-1 rounded-full hover:bg-muted transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${lang === l.code ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted text-foreground"}`}
                >
                  <span className="text-xl">{l.flag}</span>
                  {l.label}
                  {lang === l.code && <Check className="w-4 h-4 ml-auto" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden">
        <SectionNav lang={lang} t={{ navScreenshots: t.navScreenshots, navTech: t.navTech, navBiz: t.navBiz }} />
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-background border-b border-border/40 px-6 py-16 md:py-24 text-center">
        <h1 className="font-bold text-4xl md:text-6xl text-foreground leading-tight tracking-tight mb-6">
          {t.heroTitle1}<br />
          <span className="text-primary">{t.heroTitle2}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          {t.heroSub}
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src="/shops/apple.png" alt="App Store" className="h-12 object-contain" />
          <img src="/shops/google.png" alt="Google Play" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {t.chips.map((chip) => (
            <span key={chip} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
              <Check className="w-3 h-3 text-red-500 shrink-0" strokeWidth={3} />
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshots */}
      <div id="screenshots" className="max-w-4xl mx-auto w-full px-6 pt-14 pb-2 text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-foreground">{t.impressionenTitle}</h2>
        <p className="text-muted-foreground mt-2 text-base">{t.impressionenSub}</p>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-10 flex flex-col gap-6">
        {galleryFiles.map((file, i) => {
          const screen = t.screenshots[i]
          return (
            <div key={file} className={`flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 rounded-3xl px-6 md:px-8 py-8 ${colors[i]} ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="w-[240px] md:w-[320px] shrink-0">
                <PhoneFrame src={`/captutras_presentacion/${encodeURIComponent(file)}`} alt={screen.label} />
              </div>
              <div className={`flex-1 space-y-2 text-center md:text-left ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div className={`flex items-center justify-center md:justify-start gap-2.5 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-foreground text-xl md:text-3xl">{screen.label}</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{screen.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tech Stack */}
      <div id="technologie" className="border-t border-border/40 bg-card/50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl md:text-3xl text-foreground mb-2">{t.techTitle}</h2>
            <p className="text-muted-foreground text-sm md:text-base">{t.techSub}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.techItems.map((item, i) => (
              <div key={item.title} className={`flex flex-col gap-3 p-5 rounded-2xl border ${techColors[i].color}`}>
                <div className={techColors[i].icon_color}>{techIcons[i]}</div>
                <div>
                  <div className="font-bold text-foreground text-base">{item.title}</div>
                  <div className="text-muted-foreground text-sm mt-0.5 leading-snug">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-8 mb-4">{t.swissLabel}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {t.swiss.map((s) => (
              <div key={s.title} className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
                <span className="text-xl">{s.emoji}</span>
                <div>
                  <div className="font-semibold text-foreground text-base">{s.title}</div>
                  <div className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: s.sub.replace("hostpoint.ch", '<a href="https://www.hostpoint.ch" target="_blank" class="text-primary hover:underline">hostpoint.ch</a>').replace("lweb.ch", '<a href="https://www.lweb.ch" target="_blank" class="text-primary hover:underline">lweb.ch</a>') }} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-8 mb-4">{t.availableLabel}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <img src="/shops/apple.png" alt="App Store" className="h-8 object-contain" />
              <div>
                <div className="font-semibold text-foreground text-base">{t.available[0].title}</div>
                <div className="text-muted-foreground text-sm">{t.available[0].sub}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <img src="/shops/google.png" alt="Google Play" className="h-8 object-contain" />
              <div>
                <div className="font-semibold text-foreground text-base">{t.available[1].title}</div>
                <div className="text-muted-foreground text-sm">{t.available[1].sub}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-background">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="font-semibold text-foreground text-base">{t.available[2].title}</div>
                <div className="text-muted-foreground text-sm">{t.available[2].sub}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/50 bg-background px-6 py-6 flex flex-col gap-4">
            <div>
              <div className="font-bold text-foreground text-lg mb-1">{t.openSourceTitle}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.openSourceText}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://github.com/donia1222/offerto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-foreground">
                {githubIcon} App — github.com/donia1222/offerto
              </a>
              <a href="https://github.com/donia1222/offerto_landing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-foreground">
                {githubIcon} Landing Page — github.com/donia1222/offerto_landing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Model */}
      <div id="geschaeftsmodell" className="border-t border-border/40 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl md:text-3xl text-foreground mb-2">{t.bizTitle}</h2>
            <p className="text-muted-foreground text-sm md:text-base">{t.bizSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.biz.map((b, i) => {
              const blockColors = [
                "border-blue-100 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-950/20",
                "border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/20",
                "border-rose-100 dark:border-rose-900/50 bg-rose-50/60 dark:bg-rose-950/20",
                "border-violet-100 dark:border-violet-900/50 bg-violet-50/60 dark:bg-violet-950/20",
                "border-amber-100 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20",
                "border-cyan-100 dark:border-cyan-900/50 bg-cyan-50/60 dark:bg-cyan-950/20",
              ]
              return (
                <div key={i} className={`rounded-2xl border p-6 ${blockColors[i]}`}>
                  <div className="text-2xl mb-3">{b.emoji}</div>
                  <h3 className="font-bold text-foreground text-base mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.bold ? b.text.replace(b.bold, `__BOLD__`) : b.text}
                    {b.bold && b.text.includes(b.bold) ? (
                      <>
                        {b.text.split(b.bold)[0]}
                        <strong className="text-foreground">{b.bold}</strong>
                        {b.text.split(b.bold)[1]}
                      </>
                    ) : b.text}
                  </p>
                  {i === 5 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Facebook", "YouTube", "TikTok", "Google"].map(p => (
                        <span key={p} className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">{p}</span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="md:col-span-2 rounded-2xl border border-teal-100 dark:border-teal-900/50 bg-teal-50/60 dark:bg-teal-950/20 p-6">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="font-bold text-foreground text-base mb-3">{t.benefitsTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.benefits.map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-teal-500 shrink-0" strokeWidth={3} />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 rounded-2xl border border-border/50 bg-card p-6 text-center">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-bold text-foreground text-base mb-2">{t.fazitTitle}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">{t.fazitText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 border-t border-border/40 bg-card">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
            <div className="flex flex-col items-center md:items-start gap-3 md:w-56 shrink-0">
              <img src="/icon.png" alt="Offerto PROFI" className="w-16 h-16 rounded-[8px] shadow-md" />
              <div className="text-center md:text-left">
                <div className="font-bold text-foreground text-lg">Offerto PROFI</div>
                <div className="text-muted-foreground text-sm">{t.footerTagline}</div>
              </div>
            </div>
            <div className="flex-1 text-sm text-muted-foreground leading-relaxed border border-border/40 rounded-2xl px-6 py-5 bg-background">
              <p className="font-semibold text-foreground mb-2">{t.footerNote}</p>
              <p>{t.footerNoteText}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                {t.backBtn}
              </Link>
              <a href="mailto:info@lweb.ch" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                <Mail className="w-4 h-4" />
                Kontakt — info@lweb.ch
              </a>
            </div>
            <div className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Offerto PROFI</div>
          </div>
        </div>
      </footer>

    </div>
  )
}
