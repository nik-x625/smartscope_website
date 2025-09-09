import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI-Powered <span className="text-primary bg-primary/10 px-2 py-1 rounded-lg">Proposal Creation</span> Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your proposal workflow with intelligent automation. Create professional statements of work, 
              accurate cost estimations, and winning proposals in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-accent transition-all transform hover:scale-105"
                data-testid="button-start-trial"
                asChild
              >
                <a href="https://dashboard.smart-scope.io/sign-up">Start Free Trial</a>
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-secondary transition-colors"
                data-testid="button-watch-demo"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button> */}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaborating on business proposals" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Processing Proposal...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
