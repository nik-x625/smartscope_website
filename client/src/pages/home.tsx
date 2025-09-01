import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import UseCasesSection from "@/components/use-cases-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import BlogSection from "@/components/blog-section";
import AboutSection from "@/components/about-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
