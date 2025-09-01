import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing! You'll receive our weekly insights.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
      console.error("Newsletter subscription error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Stay Updated with Industry Insights
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Get weekly tips on proposal writing, AI automation, and project management best practices
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" data-testid="form-newsletter">
          <Input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            data-testid="input-newsletter-email"
          />
          <Button 
            type="submit" 
            className="bg-primary hover:bg-accent transition-colors whitespace-nowrap"
            disabled={newsletterMutation.isPending}
            data-testid="button-subscribe"
          >
            {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
