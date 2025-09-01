import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "SmartScope reduced our proposal creation time by 75%. The AI suggestions are incredibly accurate and the templates are professional.",
      author: "Sarah Mitchell",
      role: "CEO, TechConsult Pro",
      initials: "SM"
    },
    {
      rating: 5,
      text: "The cost estimation feature is a game-changer. We're now winning 40% more proposals with accurate, competitive pricing.",
      author: "Michael Johnson",
      role: "Project Director, InnovateSoft",
      initials: "MJ"
    },
    {
      rating: 5,
      text: "Finally, a tool that understands the complexity of modern project scoping. The collaboration features are outstanding.",
      author: "Lisa Rodriguez",
      role: "Operations Manager, CreativeFlow",
      initials: "LR"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Growing Teams
          </h2>
          <p className="text-xl text-muted-foreground">
            See how SmartScope has transformed proposal workflows for businesses worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold" data-testid={`text-author-${index}`}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
