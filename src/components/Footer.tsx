import { Heart, Mail, Phone, MapPin, Instagram, Twitter, ArrowUp } from "lucide-react";
import IconBadge from "@/components/ui/IconBadge";
import { useState, useEffect } from "react";
import logoImage from '../assets/logo.png';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background text-foreground overflow-hidden">

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span
                aria-hidden
                className="block h-16 w-32 md:h-20 md:w-36 lg:h-24 lg:w-40"
                style={{
                  backgroundColor: "#008080",
                  WebkitMask: `url(${logoImage}) center / contain no-repeat`,
                  mask: `url(${logoImage}) center / contain no-repeat`,
                }}
              />
            </div>
            <p className="text-lg font-semibold text-muted-foreground mb-6">
              شريكك في صناعة الأثر الرقمي
            </p>
            
            {/* Social Media (using IconBadge color variants) */}
            <div className="flex gap-4">
              <IconBadge
                href="https://www.instagram.com/wattar_ksa"
                ariaLabel="Instagram"
                variant="yellow-teal"
                size="lg"
                icon={<Instagram className="w-6 h-6" />}
              />
              <IconBadge
                href="https://x.com/wattar_ksa"
                ariaLabel="X (Twitter)"
                variant="teal-yellow"
                size="lg"
                icon={<Twitter className="w-6 h-6" />}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-lg mb-2 md:mb-4 text-foreground">روابط سريعة</h4>
            {/* Mobile: Horizontal layout, Desktop: Vertical layout */}
            <div className="md:hidden">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a href="#home" className="text-xs text-muted-foreground hover:text-primary transition-colors">الرئيسية</a>
                <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors">نبذة عنا</a>
                <a href="#services" className="text-xs text-muted-foreground hover:text-primary transition-colors">الخدمات</a>
                <a href="#portfolio" className="text-xs text-muted-foreground hover:text-primary transition-colors">معرض الأعمال</a>
                <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a>
              </div>
            </div>
            {/* Desktop: Vertical layout */}
            <ul className="hidden md:block space-y-3">
              <li><a href="#home" className="text-base text-muted-foreground hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-base text-muted-foreground hover:text-primary transition-colors">نبذة عنا</a></li>
              <li><a href="#services" className="text-base text-muted-foreground hover:text-primary transition-colors">الخدمات</a></li>
              <li><a href="#portfolio" className="text-base text-muted-foreground hover:text-primary transition-colors">معرض الأعمال</a></li>
              <li><a href="#contact" className="text-base text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm md:text-lg mb-2 md:mb-4 text-foreground">معلومات التواصل</h4>
            <div className="space-y-1 md:space-y-3">
              <a
                href="mailto:WATTAR_SALES@outlook.sa"
                className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-base break-all">WATTAR_SALES@outlook.sa</span>
              </a>
              <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-base">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-base">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 وتار - جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;