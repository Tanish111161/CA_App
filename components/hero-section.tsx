import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Automate. Integrate. Elevate Your Accounting Practice.
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            AI-powered workflows for CAs, from invoice scanning to ledger exports. Transform manual processes into
            automated efficiency.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
          </div>

          <div className="hero-image relative max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <img
                src="/modern-dashboard-showing-invoice-automation-workfl.jpg"
                alt="AutoFlow Dashboard showing AI-powered invoice processing"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
