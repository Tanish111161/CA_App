import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function ClosingSection() {
  return (
    <section className="closing-section py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="closing-content max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Stop Wasting Hours on Manual Work. Automate Your Practice Today.
          </h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Join the hundreds of CA firms already saving time and reducing errors with AutoFlow. Start your free trial
            and see the difference in just 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            No credit card required • 14-day free trial • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  )
}
