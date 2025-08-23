import { useRef, useState, useEffect } from "react";
import { Star, Sparkles, Crown, Trophy, Zap, Heart, Award, Shield, Users, Handshake, CheckCircle, ArrowRight } from "lucide-react";
import logoImage from '../assets/logo.png';

const partners = [
  {
    id: 1,
    name: "النيابة العامة",
    description: "شريك استراتيجي في تطوير الحلول القانونية الرقمية",
    logo: "🏛️",
    gradient: "from-[#1e40af] via-[#3b82f6] to-[#60a5fa]",
    shadowColor: "shadow-[0_20px_50px_rgba(59,130,246,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]",
    category: "حكومي"
  },
  {
    id: 2,
    name: "سله",
    description: "منصة التجارة الإلكترونية الرائدة في المملكة",
    logo: "🛒",
    gradient: "from-[#059669] via-[#10b981] to-[#34d399]",
    shadowColor: "shadow-[0_20px_50px_rgba(16,185,129,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]",
    category: "تجاري"
  },
  {
    id: 3,
    name: "جمعية الإعاقة الحركية",
    description: "شريك في تطوير حلول الوصول الرقمي والشمولية",
    logo: "♿",
    gradient: "from-[#dc2626] via-[#ef4444] to-[#f87171]",
    shadowColor: "shadow-[0_20px_50px_rgba(239,68,68,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]",
    category: "خيري"
  }
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Only reset animations when section completely exits viewport
          if (entry.intersectionRatio === 0) {
            setIsVisible(false);
            setActivePartner(null);
            setHoveredPartner(null);
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

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147,51,234,0.1), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-3">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[700px] h-[700px] object-contain animate-pulse-slow transform -rotate-12" 
        />
      </div>

      {/* Spectacular Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className={`absolute top-20 left-[5%] w-40 h-40 transition-all duration-1000 ${isVisible ? 'animate-float opacity-20' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-slow" />
        </div>
        <div className={`absolute bottom-32 right-[8%] w-32 h-32 transition-all duration-1000 ${isVisible ? 'animate-float opacity-25' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 transform rotate-45 blur-xl animate-morph" />
        </div>
        <div className={`absolute top-1/3 right-[4%] w-24 h-24 transition-all duration-1000 ${isVisible ? 'animate-float opacity-15' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-full blur-lg animate-breathe" />
        </div>

        {/* Magical Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`}
            style={{
              left: `${10 + (i * 4.5)}%`,
              top: `${20 + (i * 3)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 5)}s`
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <div className={`absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-30' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-25' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-20' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 relative">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                شركاء النجاح
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-2xl blur-2xl opacity-40 animate-pulse-slow" />
            </h2>
            
            {/* Floating Icons Around Title */}
            <div className={`absolute -top-8 -right-8 transition-all duration-1000 ${isVisible ? 'animate-float opacity-60' : 'opacity-0'}`}>
              <Handshake className="w-10 h-10 text-purple-600 animate-pulse-slow" />
            </div>
            <div className={`absolute -bottom-4 -left-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <Trophy className="w-8 h-8 text-blue-600 animate-pulse-slow" />
            </div>
            <div className={`absolute top-1/2 -right-12 transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <Crown className="w-6 h-6 text-green-600 animate-pulse-slow" />
            </div>
          </div>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            🤝 نفتخر بشراكاتنا الاستراتيجية مع <span className="text-purple-600 font-bold animate-pulse">عملاء مميزين</span> يثقون في قدرتنا على 
            تحويل رؤاهم إلى <span className="text-blue-600 font-bold glow-soft">حلول رقمية متطورة</span> تحقق النجاح والتميز ✨
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group relative transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => {
                setActivePartner(partner.id);
                setHoveredPartner(partner.id);
              }}
              onMouseLeave={() => {
                setActivePartner(null);
                setHoveredPartner(null);
              }}
            >
              {/* Main Partner Card */}
              <div className={`relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-6 ${partner.shadowColor} ${partner.glowColor} ${hoveredPartner === partner.id ? 'rotate-1' : ''}`}>
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-15 rounded-[2.5rem] transition-all duration-500`} />
                
                {/* Category Badge */}
                <div className={`absolute -top-4 right-6 px-4 py-2 bg-gradient-to-r ${partner.gradient} text-white text-sm font-bold rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                  {partner.category}
                </div>

                {/* Partner Logo */}
                <div className="relative mb-8 text-center">
                  <div className={`inline-flex p-8 rounded-full bg-gradient-to-br ${partner.gradient} shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${activePartner === partner.id ? 'animate-pulse-slow' : ''}`}>
                    <span className="text-6xl filter drop-shadow-lg">{partner.logo}</span>
                    
                    {/* Magical Glow Ring */}
                    {activePartner === partner.id && (
                      <div className="absolute -inset-6 rounded-full border-2 border-current opacity-30 animate-ping" />
                    )}
                  </div>
                  
                  {/* Floating Logo Shadows */}
                  <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${partner.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-all duration-500`} />
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10 text-center">
                  <h3 className={`text-2xl font-bold mb-6 transition-all duration-300 ${activePartner === partner.id ? 'text-transparent bg-gradient-to-r bg-clip-text ' + partner.gradient + ' scale-105' : 'text-foreground group-hover:text-purple-600'}`}>
                    {partner.name}
                  </h3>
                  
                  <p className={`text-muted-foreground leading-relaxed text-lg transition-all duration-300 ${activePartner === partner.id ? 'text-foreground/90 scale-105' : ''}`}>
                    {partner.description}
                  </p>

                  {/* Success Indicators */}
                  <div className="mt-8 flex justify-center items-center gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 transition-all duration-300 ${activePartner === partner.id ? 'text-green-500 animate-bounce' : 'text-green-400'}`} />
                      <span className="text-sm font-medium text-green-600">شراكة نشطة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 transition-all duration-300 ${activePartner === partner.id ? 'text-yellow-400 animate-pulse' : 'text-yellow-300'} fill-current`} />
                      ))}
                    </div>
                  </div>

                  {/* Interactive Progress Bar */}
                  <div className="mt-8 relative">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${partner.gradient} transform transition-all duration-1000 ${activePartner === partner.id ? 'translate-x-0' : '-translate-x-full'}`}
                      />
                    </div>
                    <div className={`mt-3 text-sm font-medium transition-all duration-300 ${activePartner === partner.id ? 'opacity-100 text-purple-600' : 'opacity-0'}`}>
                      شراكة استراتيجية مميزة! 🎯
                    </div>
                  </div>
                </div>

                {/* Magical Corner Decorations */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse-slow" />
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-blue-500/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                
                {/* Hover Ripple Effect */}
                {activePartner === partner.id && (
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                )}
              </div>

              {/* Card Shadow Enhancement */}
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Epic Call to Action */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1.2s' }}>
          <div className="relative inline-block mb-8">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                هل تريد أن تكون شريك النجاح التالي؟
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              🚀 انضم إلى قائمة شركائنا المميزين واحصل على حلول رقمية استثنائية!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                🤝 ابدأ شراكتك معنا
                <Handshake className="w-6 h-6 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
            
            <button 
              className="group relative border-2 border-purple-500 text-purple-600 bg-transparent px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="flex items-center gap-3">
                ✨ شاهد قصص نجاحنا
                <ArrowRight className="w-6 h-6 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
