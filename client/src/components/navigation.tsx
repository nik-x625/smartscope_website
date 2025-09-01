import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X, CheckCircle } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SmartScope</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-how-it-works"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("blog")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-blog"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            <a 
              href="https://dashboard.smartscope24.com" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-dashboard"
            >
              <Button className="bg-primary hover:bg-accent transition-colors">
                Dashboard
              </Button>
            </a>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("features")} 
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")} 
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-nav-how-it-works"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("blog")} 
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-nav-blog"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-mobile-nav-contact"
            >
              Contact
            </button>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                data-testid="button-mobile-theme-toggle"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
              <a 
                href="https://dashboard.smartscope24.com" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-mobile-dashboard"
              >
                <Button size="sm" className="bg-primary hover:bg-accent">Dashboard</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
