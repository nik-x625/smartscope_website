export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Input Requirements",
      description: "Simply describe your project requirements, timeline, and objectives using our intuitive wizard interface.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      imageAlt: "Clean modern workspace setup"
    },
    {
      number: 2,
      title: "AI Processing",
      description: "Our AI analyzes your requirements and generates accurate effort estimations, timelines, and costs based on industry standards.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      imageAlt: "AI technology and automation visualization"
    },
    {
      number: 3,
      title: "Export & Deploy",
      description: "Review, customize, and export your professional proposal in multiple formats ready for client presentation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      imageAlt: "Professional business documents and proposals"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our wizard-based approach guides you through creating professional proposals effortlessly
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`step-${index + 1}`}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <img 
                src={step.image}
                alt={step.imageAlt}
                className="rounded-xl shadow-lg mb-6 w-full h-48 object-cover"
                data-testid={`img-step-${index + 1}`}
              />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
