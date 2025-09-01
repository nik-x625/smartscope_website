import { CheckCircle, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              About SmartScope
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We believe that creating professional proposals shouldn't be a time-consuming, manual process. 
              Founded by industry experts with decades of experience in project management and AI technology, 
              SmartScope was built to solve the real challenges faced by modern businesses.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Democratize professional proposal creation through intelligent automation and best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where every business can create compelling, accurate proposals that win more projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional team working in modern office environment"
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about-team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
