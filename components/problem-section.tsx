import { AlertTriangle, Clock, FileX, TrendingDown } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="problem-section py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="problem-title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Manual Data Entry is Killing Your Productivity
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            CA firms waste countless hours on repetitive tasks that could be automated, leading to errors, delays, and
            frustrated clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="problem-card text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Time Wasted</h3>
            <p className="text-muted-foreground">Hours spent on manual data entry instead of strategic work</p>
          </div>

          <div className="problem-card text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Human Errors</h3>
            <p className="text-muted-foreground">Costly mistakes from repetitive manual processes</p>
          </div>

          <div className="problem-card text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileX className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Lost Documents</h3>
            <p className="text-muted-foreground">Paper trails that disappear and disorganized files</p>
          </div>

          <div className="problem-card text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Client Delays</h3>
            <p className="text-muted-foreground">Slow turnaround times affecting client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
