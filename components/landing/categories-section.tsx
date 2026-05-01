"use client"

import { Badge } from "@/components/ui/badge"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"
import { useInView, fi } from "@/hooks/use-in-view"

const categoryImgs = [
  "/categorias/frutaverdura.png",
  "/categorias/carne.png",
  "/categorias/pescado.png",
  "/categorias/leche-queso.png",
  "/categorias/bebidas.png",
  "/categorias/panaderia.png",
]

export function CategoriesSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].categories
  const { ref, inView } = useInView()

  return (
    <section ref={ref as any} className="py-20 sm:py-28 bg-secondary/30" id="kategorien">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14" style={fi(inView, 0)}>
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
            {t.badge}
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.title}{" "}
            <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {t.items.map((name, index) => (
            <div
              key={name}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25"
              style={fi(inView, index + 1)}
            >
              <div className="overflow-hidden">
                <img
                  src={categoryImgs[index]}
                  alt={name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-4">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-white drop-shadow-sm">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
