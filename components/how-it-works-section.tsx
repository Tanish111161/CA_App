import { Card, CardContent } from "@/components/ui/card"
import { Upload, Scan, UserCheck, Download } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Client Uploads Documents",
      description: "Clients securely upload invoices, receipts, and financial documents through our portal",
    },
    {
      icon: Scan,
      title: "AI OCR Processing",
      description: "Our advanced AI extracts and categorizes all relevant data with industry-leading accuracy",
    },
    {
      icon: UserCheck,
      title: "CA Review & Approval",
      description: "Review processed data, make adjustments if needed, and approve for final export",
    },
    {
      icon: Download,
      title: "Export to Your Software",
      description: "Seamlessly export to Tally, QuickBooks, Xero, or download in your preferred format",
    },
  ]

  return (
    <section className="works-section py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="works-title text-3xl md:text-4xl font-bold text-foreground mb-6">How AutoFlow Works</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A simple 4-step process that transforms your document workflow from hours of manual work to minutes of
            automated processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="works-step bg-card border-border relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="text-lg font-semibold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
