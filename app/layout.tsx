import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { DevModal } from '@/components/dev-modal'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Offerto PROFI — Alle Angebote. Eine App.',
  description: 'Offerto PROFI aggregiert die wöchentlichen Aktionen von Aligro, TopCC und Transgourmet in einer einzigen schnellen App. Hunderte Angebote, immer aktuell — für Gastronomie-Profis.',
  keywords: ['Offerto PROFI', 'Grosshandel', 'Aligro', 'TopCC', 'Transgourmet', 'Angebote', 'Gastronomie', 'Schweiz', 'Cash and Carry', 'App'],
  authors: [{ name: 'Offerto PROFI', url: 'https://offerto-profi.ch' }],
  creator: 'Offerto PROFI',
  publisher: 'Offerto PROFI',
  metadataBase: new URL('https://offerto-profi.ch'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://offerto-profi.ch',
    title: 'Offerto PROFI — Alle Angebote. Eine App.',
    description: 'Alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Kostenlos. Kein Abo. Keine Werbung.',
    siteName: 'Offerto PROFI',
    locale: 'de_CH',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Offerto PROFI',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Offerto PROFI — Alle Angebote. Eine App.',
    description: 'Alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <DevModal />
          <CookieBanner />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
