import { Check } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Save 15+ hours per week on manual data entry",
    "Reduce processing errors by 95%",
    "Improve client turnaround time by 60%",
    "Enhance team collaboration with cloud access",
    "Ensure data security with enterprise-grade encryption",
    "Scale your practice without hiring more staff",
  ]

  return (
    <section className="benefits-section py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="benefits-title text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transform Your Practice with Measurable Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of CA firms who have revolutionized their operations with AutoFlow's intelligent automation
              platform.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefits-item flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-image relative">
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <img
                src="/professional-accountant-working-efficiently-with-a.jpg"
                alt="Efficient accounting workflow with AutoFlow"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
