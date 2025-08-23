import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'نبذة عنا' },
    { id: 'services', label: 'الخدمات' },
    { id: 'portfolio', label: 'معرض الأعمال' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection('home')}
            aria-label="العودة للرئيسية"
          >
            <span
              aria-hidden
              className="block h-10 w-36 md:h-12 md:w-40"
              style={{
                backgroundColor: "#008080",
                WebkitMask: `url(${logo}) center / contain no-repeat`,
                mask: `url(${logo}) center / contain no-repeat`,
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button 
            className="hidden md:block btn-primary text-sm px-6 py-2"
            onClick={() => scrollToSection('contact')}
          >
            ابدأ مشروعك
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-card border border-border/50 animate-slide-up">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-right text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              className="btn-primary w-full mt-6"
              onClick={() => scrollToSection('contact')}
            >
              ابدأ مشروعك
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;