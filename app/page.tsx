"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ClosingSection } from "@/components/closing-section"
import { Footer } from "@/components/footer"
import { useGSAPAnimations } from "@/hooks/use-gsap-animations"

export default function HomePage() {
  useGSAPAnimations()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  )
}
