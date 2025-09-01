import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for freelancers and small teams",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 proposals/month",
        "Basic AI assistance",
        "5 templates",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited proposals",
        "Advanced AI features",
        "All templates & customization",
        "Team collaboration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      period: "",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "SSO & advanced security"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your team size and requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl p-8 relative hover:shadow-lg transition-all ${
                plan.popular ? 'border-2 border-primary' : 'border border-border'
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-accent text-primary-foreground' 
                    : 'border border-border hover:bg-secondary'
                }`}
                variant={plan.popular ? "default" : "outline"}
                data-testid={`button-select-${plan.name.toLowerCase()}`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
