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
    // Temporary fallback kept for reference; replaced by WhatsApp open below
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      /* no-op */
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 bg-background"
      dir="rtl">
      
      
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Special "من نحن" Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.9s' }}>
            <div className="relative inline-block mb-6">
              <button
                onClick={() => {
                  // Build WhatsApp URL using env number if available
                  const number = (import.meta as any).env?.VITE_WHATSAPP_NUMBER || '';
                  const defaultMsg = 'مرحبًا، أود الاستفسار عن خدماتكم';
                  const url = number
                    ? `https://wa.me/${number}?text=${encodeURIComponent(defaultMsg)}`
                    : 'https://wa.me/'; // Fallback until number is provided
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
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

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
