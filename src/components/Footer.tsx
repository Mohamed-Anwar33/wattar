import { Heart, Mail, Phone, MapPin, Instagram, Twitter, ArrowUp } from "lucide-react";
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="Wattar Logo" 
                className="w-16 h-16 object-contain drop-shadow-lg" 
              />
            </div>
            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              شريكك في صناعة الأثر الرقمي
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wattar_ksa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-pink-500/30"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/wattar_ksa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-slate-800/30"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">نبذة عنا</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">الخدمات</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors">معرض الأعمال</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">معلومات التواصل</h4>
            <div className="space-y-3">
              <a
                href="mailto:WATTAR_SALES@outlook.sa"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>WATTAR_SALES@outlook.sa</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400">
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