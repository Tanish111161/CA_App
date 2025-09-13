import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      title: "Senior Partner, Sharma & Associates",
      content:
        "AutoFlow has transformed our practice. We've reduced processing time by 70% and our clients are amazed by our quick turnaround.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      title: "Managing Director, Patel CA Firm",
      content:
        "The AI accuracy is incredible. We rarely need to make corrections, and the integration with Tally is seamless.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      title: "Founder, Kumar Financial Services",
      content:
        "Best investment we've made for our firm. The time savings alone paid for itself within the first month.",
      rating: 5,
    },
  ]

  const partners = ["Tally Solutions", "QuickBooks", "Xero", "Zoho Books", "SAP", "Oracle"]

  return (
    <section id="testimonials" className="testimonials-section py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by Leading CA Firms
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            See what accounting professionals are saying about AutoFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-muted-foreground mb-4" />

                <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">Seamlessly Integrates With Your Existing Tools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-muted-foreground font-medium">
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">ISO 27001 Certified</div>
            <div className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">GDPR Compliant</div>
            <div className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">SOC 2 Type II</div>
          </div>
        </div>
      </div>
    </section>
  )
}
