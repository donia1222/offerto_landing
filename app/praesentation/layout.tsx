import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Offerto PROFI — Präsentation",
  description: "Alle Wochenangebote von Aligro, TopCC und Transgourmet in einer App. Kostenlos. Kein Abo. Keine Werbung.",
  openGraph: {
    title: "Offerto PROFI — Präsentation",
    description: "Alle Wochenangebote von Aligro, TopCC und Transgourmet in einer App. Kostenlos. Kein Abo. Keine Werbung.",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Offerto PROFI" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Offerto PROFI — Präsentation",
    description: "Alle Wochenangebote von Aligro, TopCC und Transgourmet in einer App.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
  },
}

export default function ScreenshotsLayout({ children }: { children: React.ReactNode }) {
  return children
}
