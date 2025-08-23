import { useRef, useState, useEffect } from "react";
import { Sparkles, Heart, Zap, Trophy, Users, Clock, Star, Rocket, Palette, Code, Megaphone, Smartphone, ArrowDown, Phone, Mail } from "lucide-react";
import logoImage from '../assets/logo.png';

const WhoWeAreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Only reset animations when section completely exits viewport
          if (entry.intersectionRatio === 0) {
            setIsVisible(false);
          }
        }
      },
      { 
        threshold: [0, 0.1, 0.2],
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,128,128,0.08), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-96 h-96 object-contain animate-pulse-slow transform rotate-12" 
        />
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Geometric Shapes */}
        <svg className="absolute top-10 left-10 w-32 h-32 text-[#008080]/10 animate-float" viewBox="0 0 100 100">
          <polygon points="50,0 100,38 82,100 18,100 0,38" fill="currentColor" className="animate-pulse-slow" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-24 h-24 text-[#FFEB3B]/15 animate-float" viewBox="0 0 100 100" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="animate-pulse-slow" />
          <circle cx="50" cy="50" r="20" fill="currentColor" className="animate-pulse-slow" />
        </svg>
        
        {/* Floating Icons */}
        <div className={`absolute top-16 left-[8%] transition-all duration-1000 ${isVisible ? 'animate-float opacity-60' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
          <Sparkles className="w-6 h-6 text-[#FFEB3B] animate-pulse-slow" />
        </div>
        <div className={`absolute top-24 right-[12%] transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.7s' }}>
          <Heart className="w-5 h-5 text-[#008080] animate-pulse-slow" />
        </div>
        <div className={`absolute bottom-32 left-[15%] transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.1s' }}>
          <Star className="w-4 h-4 text-[#FFEB3B] animate-pulse-slow" />
        </div>
        <div className={`absolute top-1/3 right-[6%] transition-all duration-1000 ${isVisible ? 'animate-float opacity-55' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.5s' }}>
          <Rocket className="w-5 h-5 text-[#008080] animate-pulse-slow" />
        </div>
        
        {/* Brand Icons Scattered */}
        <div className="absolute top-16 right-1/4 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Palette className="w-12 h-12 text-[#008080]" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>
          <Code className="w-10 h-10 text-[#FFEB3B]" />
        </div>
        <div className="absolute top-1/2 left-8 opacity-10 animate-float" style={{ animationDelay: '2.1s' }}>
          <Megaphone className="w-8 h-8 text-[#008080]" />
        </div>
        <div className="absolute bottom-1/3 right-12 opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>
          <Smartphone className="w-9 h-9 text-[#FFEB3B]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Special "من نحن" Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.9s' }}>
            <div className="relative inline-block mb-6">
              <button
                onClick={scrollToContact}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden bg-gradient-to-r from-[#008080] via-[#00a0a0] to-[#FFEB3B] p-1 rounded-2xl shadow-xl hover:shadow-[0_15px_35px_rgba(0,128,128,0.4)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="relative bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl transition-all duration-300 group-hover:bg-transparent">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-10 h-10 bg-gradient-to-r from-[#008080] to-[#FFEB3B] rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      {isHovered && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#008080]/30 to-[#FFEB3B]/30 rounded-xl animate-ping" />
                      )}
                    </div>
                    <div className="text-right">
                      <h3 className={`text-xl font-bold transition-all duration-300 ${isHovered ? 'text-white' : 'bg-gradient-to-r from-[#008080] to-[#FFEB3B] bg-clip-text text-transparent'}`}>
                        تعرف علينا أكثر
                      </h3>
                      <p className={`text-sm transition-all duration-300 ${isHovered ? 'text-white/90' : 'text-muted-foreground'}`}>
                        اضغط للتواصل معنا
                      </p>
                    </div>
                    <div className={`transition-all duration-300 ${isHovered ? 'animate-bounce text-white' : 'text-[#008080]'}`}>
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Magical Particles */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-float opacity-60"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${30 + (i * 8)}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + (i % 3)}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
              
              {/* Decorative Elements Around Button */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFEB3B]/30 rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#008080]/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Call to Action Text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1.2s' }}>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              💫 اكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الرقمية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
