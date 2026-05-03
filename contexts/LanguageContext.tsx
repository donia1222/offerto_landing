"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Lang = "de" | "fr" | "it" | "en" | "es"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de")

  useEffect(() => {
    const saved = localStorage.getItem("offerto-lang") as Lang | null
    if (saved && (["de", "fr", "it", "en", "es"] as Lang[]).includes(saved)) {
      setLangState(saved)
      return
    }
    const browser = navigator.language.slice(0, 2).toLowerCase()
    const detected = (["de", "fr", "it", "en", "es"] as Lang[]).find((l) => l === browser)
    if (detected) setLangState(detected)
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem("offerto-lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
