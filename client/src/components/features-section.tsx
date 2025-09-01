import { Lightbulb, FileText, DollarSign, Users, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "AI-Powered Automation",
    description: "Intelligent proposal generation with machine learning algorithms that analyze requirements and suggest optimal solutions."
  },
  {
    icon: FileText,
    title: "Professional Templates",
    description: "Industry-specific SoW templates and proposal formats that follow best practices and compliance standards."
  },
  {
    icon: DollarSign,
    title: "Smart Cost Estimation",
    description: "Accurate effort and cost calculations based on historical data, complexity analysis, and market benchmarks."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools with version control, comments, and approval workflows for seamless teamwork."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create comprehensive proposals in minutes with our guided wizard and intelligent content suggestions."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track proposal performance, win rates, and get actionable insights to improve your success rate."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create winning proposals with AI assistance and professional templates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all group"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
