import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 
        <div className="b border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} Offerto PROFI. Alle Rechte vorbehalten.
          </p>

          {/* Policy links */}
          <div className="flex items-center gap-5">
            <Link href="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <div className="w-px h-3 bg-border" />
            <Link href="/impressum" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <div className="w-px h-3 bg-border" />
            <Link href="/kontakt" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
