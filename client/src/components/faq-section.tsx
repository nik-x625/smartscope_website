import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the AI cost estimation?",
    answer: "Our AI uses historical project data, industry benchmarks, and complexity analysis to provide estimations with 90%+ accuracy. The system continuously learns from completed projects to improve precision over time."
  },
  {
    question: "Can I customize the proposal templates?",
    answer: "Absolutely! SmartScope offers full template customization including branding, sections, formatting, and content. You can create custom templates or modify existing ones to match your specific requirements."
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes, we use enterprise-grade security with AES-256 encryption, SOC 2 compliance, and GDPR adherence. Your data is never shared with third parties and you maintain full ownership of your content."
  },
  {
    question: "What industries does SmartScope support?",
    answer: "SmartScope works across all industries including IT services, consulting, creative agencies, construction, marketing, and professional services. Our templates and AI are trained on diverse industry requirements."
  },
  {
    question: "Can I integrate SmartScope with my existing tools?",
    answer: "Yes! SmartScope integrates with popular CRM systems, project management tools, and cloud storage platforms. We offer API access and custom integrations for Enterprise plans."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about SmartScope
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6"
              data-testid={`faq-item-${index}`}
            >
              <button 
                className="w-full text-left flex justify-between items-center font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
                data-testid={`button-faq-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-4 text-muted-foreground animate-fade-in-up" data-testid={`text-faq-answer-${index}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
