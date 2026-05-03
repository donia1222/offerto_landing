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
  title: 'Offerto PROFI — Alle Angebote von Aligro, TopCC & Transgourmet. Eine App.',
  description: 'Offerto PROFI: Die kostenlose App für Gastronomie-Profis in der Schweiz. Alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Kein Abo, keine Werbung. Jetzt gratis downloaden.',
  keywords: [
    'Offerto PROFI', 'Offerto', 'PROFI',
    'Aligro Angebote', 'TopCC Angebote', 'Transgourmet Angebote',
    'Grosshandel Schweiz', 'Cash and Carry Schweiz',
    'Gastronomie App Schweiz', 'Wochenangebote Gastronomie',
    'Aktionen Grosshandel', 'Gastronomie Einkauf',
    'offres Aligro', 'offres TopCC', 'offres Transgourmet',
    'offerte Aligro', 'offerte TopCC', 'offerte Transgourmet',
    'App Gastronomie', 'Restaurant App Schweiz',
    'Kostenlose App', 'Einkaufsliste Gastronomie',
  ],
  authors: [{ name: 'lweb.ch', url: 'https://www.lweb.ch' }],
  creator: 'lweb.ch',
  publisher: 'Offerto PROFI',
  metadataBase: new URL('https://offerto-profi.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
      'fr': '/',
      'it': '/',
      'en': '/',
      'es': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://offerto-profi.ch',
    title: 'Offerto PROFI — Alle Angebote. Eine App.',
    description: 'Alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Kostenlos. Kein Abo. Keine Werbung. Für Gastronomie-Profis in der Schweiz.',
    siteName: 'Offerto PROFI',
    locale: 'de_CH',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Offerto PROFI — App für Gastronomie-Profis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offerto PROFI — Alle Angebote von Aligro, TopCC & Transgourmet',
    description: 'Die kostenlose App für Gastronomie-Profis: alle Wochenangebote auf einen Blick.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Offerto PROFI',
    url: 'https://offerto-profi.ch',
    description: 'Die kostenlose App für Gastronomie-Profis in der Schweiz. Alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CHF',
    },
    author: {
      '@type': 'Person',
      name: 'Roberto',
      url: 'https://www.lweb.ch',
    },
    inLanguage: ['de', 'fr', 'it', 'en', 'es'],
    keywords: 'Aligro, TopCC, Transgourmet, Grosshandel, Gastronomie, Schweiz, Angebote, Cash and Carry',
  }

  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
