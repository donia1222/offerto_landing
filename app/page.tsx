import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesSection } from "@/components/landing/features-section"
import { AppScreenshotsSection } from "@/components/landing/app-screenshots-section"
import { StoresSection } from "@/components/landing/stores-section"
import { ProspekteSection } from "@/components/landing/prospekte-section"
import { CategoriesSection } from "@/components/landing/categories-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { CTASection } from "@/components/landing/cta-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <AppScreenshotsSection />
      <StoresSection />
      <ProspekteSection />
      <CategoriesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
