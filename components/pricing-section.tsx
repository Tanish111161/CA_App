import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Solo",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individual CAs and small practices",
      features: [
        "Up to 500 documents/month",
        "Basic AI OCR processing",
        "2 software integrations",
        "Email support",
        "Standard security",
      ],
      popular: false,
    },
    {
      name: "Firm",
      price: "₹7,999",
      period: "/month",
      description: "Ideal for growing CA firms and teams",
      features: [
        "Up to 2,000 documents/month",
        "Advanced AI processing",
        "Unlimited integrations",
        "Priority support",
        "Team collaboration tools",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large firms with custom requirements",
      features: [
        "Unlimited documents",
        "Custom AI training",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="pricing-section py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="pricing-title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose the plan that fits your practice. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`pricing-card bg-card border-border relative ${plan.popular ? "ring-2 ring-secondary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
