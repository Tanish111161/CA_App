import { Card, CardContent } from "@/components/ui/card"
import { Scan, Brain, Link, Download } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Scan,
      title: "AI OCR Scanning",
      description: "Automatically extract data from invoices, receipts, and financial documents with 99%+ accuracy",
    },
    {
      icon: Brain,
      title: "Intelligent Parsing",
      description: "Smart categorization and validation of financial data using advanced machine learning",
    },
    {
      icon: Link,
      title: "Software Integrations",
      description: "Seamlessly connect with Tally, QuickBooks, Xero, and other accounting platforms",
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Export processed data in JSON, XLSX, CSV formats for maximum compatibility",
    },
  ]

  return (
    <section id="features" className="solution-section py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="solution-title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful AI-Driven Automation
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Transform your accounting workflow with cutting-edge technology that handles the tedious work so you can
            focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="solution-card bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
