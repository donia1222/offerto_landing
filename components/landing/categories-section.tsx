import { Badge } from "@/components/ui/badge"

const categories = [
  { name: "Früchte & Gemüse",      img: "/categorias/frutaverdura.png" },
  { name: "Fleisch & Wurst",       img: "/categorias/carne.png" },
  { name: "Fisch & Meeresfrüchte", img: "/categorias/pescado.png" },
  { name: "Milch & Käse",          img: "/categorias/leche-queso.png" },
  { name: "Getränke",              img: "/categorias/bebidas.png" },
  { name: "Bäckerei",              img: "/categorias/panaderia.png" },
]

export function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30" id="kategorien">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
            Kategorien
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Angebote in{" "}
            <span className="text-primary">jeder Kategorie.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Von Frischprodukten bis Getränke — finde jede Woche die besten Aktionen für deinen Betrieb.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>

              {/* Gradient overlay + label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-4">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-white drop-shadow-sm">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
