"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe, Check } from "lucide-react"
import { useLang, type Lang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Navigation() {
  const { lang, setLang } = useLang()
  const t = landingTranslations[lang].nav
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { label: t.features,   href: "#features"    },
    { label: t.app,        href: "#app-preview"  },
    { label: t.stores,     href: "#stores"       },
    { label: t.categories, href: "#kategorien"   },
    { label: t.howItWorks, href: "#how-it-works" },
  ]

  const currentLang = languages.find((l) => l.code === lang)!

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="Offerto PROFI" className="w-11 h-11 object-contain rounded-[8px]" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] font-bold text-lg text-foreground">Offerto</span>
              <span className="font-[family-name:var(--font-display)] font-bold text-[10px] text-primary tracking-widest">PROFI</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop: language button */}
          <button
            onClick={() => setLangOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full border border-border/60 hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Globe className="w-4 h-4" />
            <span>{currentLang.label}</span>
          </button>

          {/* Mobile: globe + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLangOpen(true)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
              aria-label="Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="p-2.5 rounded-full bg-primary hover:bg-primary/90 transition-colors"
              aria-label="Menü"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </nav>

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

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border/50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-border/50">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="Offerto PROFI" className="w-9 h-9 object-contain rounded-[8px]" />
            <span className="font-[family-name:var(--font-display)] font-bold text-base text-foreground">
              Offerto <span className="text-primary text-[10px] tracking-widest">PROFI</span>
            </span>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollTo(link.href); setOpen(false) }}
              className="text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-6 px-4 flex flex-col gap-3">
            <Link href="#cta" onClick={() => setOpen(false)}>
              <img src="/shops/apple.png" alt="App Store" className="h-9 w-auto rounded-[8px] hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#cta" onClick={() => setOpen(false)}>
              <img src="/shops/google.png" alt="Google Play" className="h-9 w-auto rounded-[8px] hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
