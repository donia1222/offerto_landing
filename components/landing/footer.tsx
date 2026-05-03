"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, Check, X } from "lucide-react"
import { useLang, type Lang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
]

export function Footer() {
  const { lang, setLang } = useLang()
  const t = landingTranslations[lang].footer
  const [langOpen, setLangOpen] = useState(false)
  const currentLang = languages.find((l) => l.code === lang)!

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} Offerto PROFI. {t.copyright}
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {/* Language switcher — desktop only */}
            <button
              onClick={() => setLangOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang.label}</span>
            </button>

            <div className="hidden sm:block w-px h-3 bg-border" />
            <Link href="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.datenschutz}
            </Link>
            <div className="w-px h-3 bg-border" />
            <Link href="/impressum" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.impressum}
            </Link>
            <div className="w-px h-3 bg-border" />
            <Link href="/kontakt" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.kontakt}
            </Link>
            <div className="w-px h-3 bg-border" />
            <Link href="/praesentation" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t.praesentation}
            </Link>
          </div>
        </div>
      </div>

      {/* Language modal — same style as /praesentation */}
      {langOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setLangOpen(false)}
        >
          <div
            className="bg-background rounded-2xl border border-border/50 shadow-2xl p-6 w-full max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">{t.langModal}</h3>
              <button onClick={() => setLangOpen(false)} className="p-1 rounded-full hover:bg-muted transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors cursor-pointer ${
                    lang === l.code ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted text-foreground"
                  }`}
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
    </footer>
  )
}
