"use client"

type Props = {
  lang: string
  t: { navScreenshots: string; navTech: string; navBiz: string }
}

export function SectionNav({ t }: Props) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const sections = [
    { label: t.navScreenshots, href: "#screenshots" },
    { label: t.navTech, href: "#technologie" },
    { label: t.navBiz, href: "#geschaeftsmodell" },
  ]

  return (
    <div className="border-b border-border/40 bg-background/90 backdrop-blur-sm overflow-x-auto">
      <div className="w-full px-4 py-2 flex items-center justify-center">
        <div className="flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.href}
              onClick={() => scrollTo(s.href)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
