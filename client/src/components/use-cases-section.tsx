export default function UseCasesSection() {
  const useCases = [
    {
      icon: "💼",
      title: "Consulting",
      stat: "92% faster proposal creation",
      description: "Streamline consulting proposal workflows with intelligent automation and industry-specific templates."
    },
    {
      icon: "💻",
      title: "IT Services",
      stat: "Accurate technical estimations",
      description: "Generate precise technical proposals with cost breakdowns for complex IT projects and integrations."
    },
    {
      icon: "🏗️",
      title: "Project Management",
      stat: "Comprehensive scope planning",
      description: "Create detailed project scopes with timeline management and resource allocation planning."
    },
    {
      icon: "🎨",
      title: "Creative Agencies",
      stat: "Creative project scoping",
      description: "Develop creative briefs and project proposals with accurate timelines and creative deliverable planning."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consulting to IT services, SmartScope adapts to your industry's unique requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary/20 hover:border-accent/40 transition-all group"
              data-testid={`card-use-case-${index}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{useCase.stat}</p>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
