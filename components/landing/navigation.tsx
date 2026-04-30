"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features",   href: "#features"     },
  { label: "App",        href: "#app-preview"   },
  { label: "Händler",    href: "#stores"        },
  { label: "Kategorien", href: "#kategorien"    },
  { label: "So geht's",  href: "#how-it-works"  },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Navigation() {
  const [open, setOpen] = useState(false)

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

          {/* Desktop links */}
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
            <Link
              href="/praesentation"
              className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              Präsentation
            </Link>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#cta")}
            className="hidden md:inline-flex rounded-full px-5 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-colors cursor-pointer"
          >
            App holen — Kostenlos
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2.5 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

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
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border/50">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="Offerto PROFI" className="w-9 h-9 object-contain rounded-[8px]" />
            <span className="font-[family-name:var(--font-display)] font-bold text-base text-foreground">Offerto <span className="text-primary text-[10px] tracking-widest">PROFI</span></span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Menü schließen"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Drawer links */}
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
            <Link
              href="/praesentation"
              onClick={() => setOpen(false)}
              className="text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
            >
              Präsentation
            </Link>

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
