import { useRef, useState, useEffect } from "react";
import { Sparkles, Heart, Zap, Trophy, Users, Clock, Star, Rocket, Palette, Code, Megaphone, Smartphone } from "lucide-react";
import logoImage from '../assets/logo.png';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start particle animation
          const interval = setInterval(() => {
            setParticleCount(prev => (prev + 1) % 20);
          }, 200);
          return () => clearInterval(interval);
        } else {
          // Reset animations when section leaves viewport
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
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

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="about"
      className="relative py-16 md:py-24 scroll-mt-24 md:scroll-mt-28 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      
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
      
      {/* Decorative SVG Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Geometric Shapes */}
        <svg className="absolute top-10 left-10 w-32 h-32 text-[#008080]/10 animate-float" viewBox="0 0 100 100">
          <polygon points="50,0 100,38 82,100 18,100 0,38" fill="currentColor" className="animate-pulse-slow" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-24 h-24 text-[#FFEB3B]/15 animate-float" viewBox="0 0 100 100" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="animate-pulse-slow" />
          <circle cx="50" cy="50" r="20" fill="currentColor" className="animate-pulse-slow" />
        </svg>
        <svg className="absolute top-1/3 right-10 w-20 h-20 text-[#008080]/12 animate-float" viewBox="0 0 100 100" style={{ animationDelay: '2s' }}>
          <rect x="20" y="20" width="60" height="60" fill="currentColor" rx="10" className="animate-pulse-slow" />
        </svg>
        
        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#008080]/20 to-transparent animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFEB3B]/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
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

      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        
        {/* Dynamic Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-[#008080] to-[#FFEB3B] rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-30' : 'opacity-0'}`}
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
        
        {/* Enhanced Morphing Shapes */}
        <div className={`absolute top-1/4 left-[5%] w-8 h-8 transition-all duration-1000 ${isVisible ? 'animate-morph opacity-20' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-[#008080]/30 to-[#FFEB3B]/30 rounded-full animate-pulse-slow" />
        </div>
        <div className={`absolute bottom-1/4 right-[4%] w-6 h-6 transition-all duration-1000 ${isVisible ? 'animate-morph opacity-25' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-[#FFEB3B]/30 to-[#008080]/30 rounded-full animate-pulse-slow" />
        </div>
        
        {/* Additional Decorative Elements */}
        <div className={`absolute top-12 left-1/2 w-4 h-4 transition-all duration-1000 ${isVisible ? 'animate-float opacity-15' : 'opacity-0'}`} style={{ animationDelay: '3s' }}>
          <div className="w-full h-full bg-[#008080]/20 transform rotate-45" />
        </div>
        <div className={`absolute bottom-16 left-1/3 w-3 h-3 transition-all duration-1000 ${isVisible ? 'animate-float opacity-20' : 'opacity-0'}`} style={{ animationDelay: '3.5s' }}>
          <div className="w-full h-full bg-[#FFEB3B]/25 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Glowing Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 relative text-foreground">
                <span className="text-foreground">
                  نبذة عنا
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#008080]/20 to-[#FFEB3B]/20 rounded-lg blur-lg opacity-30 animate-pulse-slow" />
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground relative">
                  🚀 في <span className="text-foreground font-bold">وتار</span>، نحن لا نصنع مواقع عادية... 
                  <span className="text-foreground font-bold">نحن نخلق تجارب رقمية تخطف الأنفاس!</span> 
                  كل مشروع هو رحلة إبداعية تبدأ بحلمك وتنتهي بواقع يفوق توقعاتك.
                </p>
                <p className="text-muted-foreground relative">
                  ⚡ <span className="text-foreground font-semibold">أكثر من 100 مشروع</span> حولناه من مجرد فكرة إلى 
                  <span className="text-foreground font-bold"> إمبراطورية رقمية!</span> 
                  نحن السحرة الذين يحولون الأكواد إلى معجزات، والتصاميم إلى قصص تُحكى.
                </p>
                <p className="text-foreground font-medium">
                  🎯 <span className="text-foreground font-bold">مهمتنا؟</span> أن نجعل علامتك التجارية 
                  <span className="text-foreground font-bold">النجم الأول</span> في سماء الإنترنت! 
                  نحن لا نبني مواقع... نحن نبني <span className="text-foreground font-bold">إمبراطوريات رقمية!</span>
                </p>
                
                {/* Enhanced Interactive Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div 
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#008080]/10 to-[#008080]/5 border border-[#008080]/20 hover:border-[#008080]/40 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.8s' }}
                    onMouseEnter={() => setActiveCard(0)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative">
                      <Trophy className={`w-5 h-5 text-[#008080] transition-all duration-300 ${activeCard === 0 ? 'scale-125 rotate-12' : ''}`} />
                      {activeCard === 0 && (
                        <div className="absolute -inset-2 bg-[#008080]/20 rounded-full animate-ping" />
                      )}
                    </div>
                    <span className="font-bold text-foreground transition-all duration-300 group-hover:text-lg">+100 مشروع مكتمل</span>
                  </div>
                  <div 
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#FFEB3B]/10 to-[#FFEB3B]/5 border border-[#FFEB3B]/30 hover:border-[#FFEB3B]/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '1s' }}
                    onMouseEnter={() => setActiveCard(1)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative">
                      <Users className={`w-5 h-5 text-[#FFEB3B] transition-all duration-300 ${activeCard === 1 ? 'scale-125 rotate-12' : ''}`} />
                      {activeCard === 1 && (
                        <div className="absolute -inset-2 bg-[#FFEB3B]/20 rounded-full animate-ping" />
                      )}
                    </div>
                    <span className="font-bold text-foreground text-shadow-sm transition-all duration-300 group-hover:text-lg">+50 عميل راضٍ</span>
                  </div>
                  <div 
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#008080]/10 to-[#008080]/5 border border-[#008080]/20 hover:border-[#008080]/40 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '1.2s' }}
                    onMouseEnter={() => setActiveCard(2)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative">
                      <Clock className={`w-5 h-5 text-[#008080] transition-all duration-300 ${activeCard === 2 ? 'scale-125 rotate-12' : ''}`} />
                      {activeCard === 2 && (
                        <div className="absolute -inset-2 bg-[#008080]/20 rounded-full animate-ping" />
                      )}
                    </div>
                    <span className="font-bold text-[#008080] transition-all duration-300 group-hover:text-lg">5 سنوات خبرة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.4s' }}>
            {/* Main Card with 3D Effect */}
            <div className="relative group perspective-1000">
              <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 p-8 rounded-3xl shadow-2xl border border-[#008080]/20 hover:border-[#008080]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,128,128,0.15)] transform hover:-translate-y-2 hover:scale-[1.02]">
                
                {/* Revolutionary Interactive Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    className={`group text-center p-6 bg-gradient-to-br from-[#008080] to-[#00a0a0] rounded-2xl text-white relative overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.6s' }}
                    onMouseEnter={() => setActiveCard(10)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {activeCard === 10 && (
                      <div className="absolute inset-0 animate-pulse">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-ping" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                      </div>
                    )}
                    <div className="relative z-10">
                      <div className={`text-4xl font-bold mb-2 transition-all duration-300 ${isVisible ? 'animate-count-up' : ''} ${activeCard === 10 ? 'scale-125 text-shadow-lg' : ''}`}>100%</div>
                      <div className={`text-sm opacity-90 transition-all duration-300 ${activeCard === 10 ? 'font-bold scale-110' : ''}`}>رضا العملاء</div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  </div>
                  
                  <div 
                    className={`group text-center p-6 bg-gradient-to-br from-[#FFEB3B] to-[#ffd700] rounded-2xl text-slate-900 relative overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '0.8s' }}
                    onMouseEnter={() => setActiveCard(11)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {activeCard === 11 && (
                      <div className="absolute inset-0">
                        <Zap className="absolute top-1 right-1 w-4 h-4 text-slate-700/40 animate-pulse" />
                        <Zap className="absolute bottom-1 left-1 w-3 h-3 text-slate-700/30 animate-pulse" style={{ animationDelay: '0.7s' }} />
                      </div>
                    )}
                    <div className="relative z-10">
                      <div className={`text-4xl font-bold mb-2 transition-all duration-300 ${isVisible ? 'animate-support' : ''} ${activeCard === 11 ? 'scale-125 text-shadow-lg' : ''}`}>24/7</div>
                      <div className={`text-sm opacity-80 font-medium transition-all duration-300 ${activeCard === 11 ? 'font-bold scale-110' : ''}`}>دعم فني</div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                  </div>
                  
                  <div 
                    className={`group text-center p-6 border-2 border-[#008080]/30 rounded-2xl bg-gradient-to-br from-[#008080]/5 to-transparent hover:border-[#008080]/50 hover:bg-[#008080]/10 transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '1s' }}
                    onMouseEnter={() => setActiveCard(12)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {activeCard === 12 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/20 via-transparent to-[#008080]/20 animate-pulse rounded-2xl" />
                    )}
                    <div className={`text-5xl font-bold mb-2 text-[#008080] transition-all duration-300 ${isVisible ? 'animate-infinity' : ''} ${activeCard === 12 ? 'scale-150 rotate-12' : 'group-hover:scale-110'}`}>∞</div>
                    <div className={`text-sm text-muted-foreground font-medium transition-all duration-300 ${activeCard === 12 ? 'font-bold scale-110 text-[#008080]' : ''}`}>إبداع لا محدود</div>
                  </div>
                  
                  <div 
                    className={`group text-center p-6 border-2 border-[#FFEB3B]/40 rounded-2xl bg-gradient-to-br from-[#FFEB3B]/5 to-transparent hover:border-[#FFEB3B]/60 hover:bg-[#FFEB3B]/10 transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: '1.2s' }}
                    onMouseEnter={() => setActiveCard(13)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {activeCard === 13 && (
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#FFEB3B]/50 via-transparent to-[#FFEB3B]/50 animate-pulse" />
                        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-[#FFEB3B]/50 via-transparent to-[#FFEB3B]/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                    )}
                    <div className={`text-5xl mb-2 transition-all duration-300 ${isVisible ? 'animate-lightning' : ''} ${activeCard === 13 ? 'scale-150 rotate-12 filter brightness-125' : 'group-hover:scale-110'}`}>⚡</div>
                    <div className={`text-sm text-muted-foreground font-medium transition-all duration-300 ${activeCard === 13 ? 'font-bold scale-110 text-[#FFEB3B]' : ''}`}>تسليم سريع</div>
                  </div>
                </div>
                
                {/* Floating Glow Effect with Brand Pattern */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#008080]/5 via-transparent to-[#FFEB3B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Subtle Brand Watermark */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <img src={logoImage} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Enhanced Decorative Elements with Brand Touch */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#008080]/30 to-[#008080]/10 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#FFEB3B]/40 to-[#FFEB3B]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#008080]/20 rounded-full blur-sm animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/4 -right-2 w-4 h-4 bg-[#FFEB3B]/30 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }} />
              
              {/* Subtle Logo Reflection */}
              <div className="absolute -top-12 -right-12 w-16 h-16 opacity-5 animate-float" style={{ animationDelay: '2.5s' }}>
                <img src={logoImage} alt="" className="w-full h-full object-contain transform rotate-45" />
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#008080]/20 rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-[#FFEB3B]/25 transform rotate-45 animate-float" style={{ animationDelay: '1.8s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;