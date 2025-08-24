import { useRef, useState, useEffect } from "react";
import { Palette, BookOpen, Monitor, Sparkles, Star, Zap, Crown, Rocket, Heart, Trophy, Target, Wand2 } from "lucide-react";
import logoImage from '../assets/logo.png';

const services = [
  {
    icon: Palette,
    title: "تصميم الهويات البصرية",
    description: "نحول رؤيتك إلى هوية بصرية مذهلة تحكي قصة علامتك التجارية بطريقة لا تُنسى وتترك انطباعاً قوياً في أذهان عملائك",
    color: "primary",
    gradient: "from-[#FFEB3B] via-[#FFC107] to-[#FF9800]",
    shadowColor: "shadow-[0_20px_50px_rgba(255,235,59,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(255,235,59,0.6)]",
    particles: [
      { icon: Crown, delay: "0s", position: "top-2 right-2" },
      { icon: Sparkles, delay: "0.5s", position: "bottom-2 left-2" },
      { icon: Star, delay: "1s", position: "top-1/2 right-0" }
    ]
  },
  {
    icon: BookOpen,
    title: "تصميم الملفات التعريفية",
    description: "ملفات تعريفية احترافية تعكس قوة وتميز شركتك، مصممة بعناية فائقة لتقدم عرضاً مقنعاً يجذب العملاء ويحول الفرص إلى صفقات رابحة",
    color: "secondary",
    gradient: "from-[#008080] via-[#20B2AA] to-[#48D1CC]",
    shadowColor: "shadow-[0_20px_50px_rgba(0,128,128,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(0,128,128,0.6)]",
    particles: [
      { icon: Trophy, delay: "0.2s", position: "top-2 left-2" },
      { icon: Target, delay: "0.7s", position: "bottom-2 right-2" },
      { icon: Zap, delay: "1.2s", position: "bottom-1/2 left-0" }
    ]
  },
  {
    icon: Monitor,
    title: "تطوير تجربة المستخدم",
    description: "نعمل على تصميم المتاجر الإلكترونية وصفحات الهبوط المخصصة لتلبي احتياجات عملائنا وتبرز هوية علامتهم التجارية بشكل استثنائي",
    color: "accent",
    gradient: "from-[#FF6B6B] via-[#FF8E53] to-[#FF6B9D]",
    shadowColor: "shadow-[0_20px_50px_rgba(255,107,107,0.4)]",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(255,107,107,0.6)]",
    particles: [
      { icon: Heart, delay: "0.3s", position: "top-2 right-1/2" },
      { icon: Rocket, delay: "0.8s", position: "bottom-2 left-1/2" },
      { icon: Wand2, delay: "1.3s", position: "top-1/2 left-2" }
    ]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Only reset animations when section completely exits viewport
          if (entry.intersectionRatio === 0) {
            setIsVisible(false);
            setActiveCard(null);
            setHoveredCard(null);
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
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,235,59,0.1), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-3">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[600px] h-[600px] object-contain animate-pulse-slow transform rotate-6" 
        />
      </div>

      {/* Spectacular Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className={`absolute top-20 left-[8%] w-32 h-32 transition-all duration-1000 ${isVisible ? 'animate-float opacity-20' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-[#FFEB3B]/30 to-[#FF9800]/30 rounded-full blur-xl animate-pulse-slow" />
        </div>
        <div className={`absolute bottom-32 right-[12%] w-24 h-24 transition-all duration-1000 ${isVisible ? 'animate-float opacity-25' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-[#008080]/30 to-[#20B2AA]/30 transform rotate-45 blur-lg animate-morph" />
        </div>
        <div className={`absolute top-1/3 right-[6%] w-20 h-20 transition-all duration-1000 ${isVisible ? 'animate-float opacity-15' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B]/25 to-[#FF8E53]/25 rounded-full blur-md animate-breathe" />
        </div>

        {/* Magical Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-[#FFEB3B] to-[#008080] rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0'}`}
            style={{
              left: `${15 + (i * 6)}%`,
              top: `${25 + (i * 4)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + (i % 4)}s`
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FFEB3B]/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-30' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#008080]/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-25' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Section Header */}
        <div className={`text-center mb-10 md:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 relative">
              <span className="bg-gradient-to-r from-[#FFEB3B] via-[#008080] to-[#FF6B6B] bg-clip-text text-transparent animate-gradient-x">
                خدماتنا المذهلة
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FFEB3B]/20 via-[#008080]/20 to-[#FF6B6B]/20 rounded-2xl blur-2xl opacity-40 animate-pulse-slow" />
            </h2>
            
            {/* Floating Icons Around Title */}
            <div className={`absolute -top-8 -right-8 transition-all duration-1000 ${isVisible ? 'animate-float opacity-60' : 'opacity-0'}`}>
              <Crown className="w-8 h-8 text-[#FFEB3B] animate-pulse-slow" />
            </div>
            <div className={`absolute -bottom-4 -left-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-6 h-6 text-[#008080] animate-pulse-slow" />
            </div>
          </div>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نحن نبتكر حلول تصميم وتطوير متقدمة، تُمكّن العلامات التجارية من النمو والتأثير في مستقبل التحول الرقمي بالمملكة
          </p>
        </div>

        {/* Revolutionary Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
                onMouseEnter={() => {
                  setActiveCard(index);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => {
                  setActiveCard(null);
                  setHoveredCard(null);
                }}
              >
                {/* Main Service Card */}
                <div className={`relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${service.shadowColor} ${service.glowColor} ${hoveredCard === index ? 'rotate-1' : ''}`}>
                  
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-all duration-500`} />
                  
                  {/* Floating Particles for Each Card */}
                  {service.particles.map((particle, pIndex) => {
                    const ParticleIcon = particle.icon;
                    return (
                      <div
                        key={pIndex}
                        className={`absolute ${particle.position} opacity-0 group-hover:opacity-60 transition-all duration-500 animate-float`}
                        style={{ animationDelay: particle.delay }}
                      >
                        <ParticleIcon className="w-4 h-4 text-current" />
                      </div>
                    );
                  })}

                  {/* Spectacular Icon Container */}
                  <div className="relative mb-8">
                    <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${activeCard === index ? 'animate-pulse-slow' : ''}`}>
                      <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                      
                      {/* Magical Glow Ring */}
                      {activeCard === index && (
                        <div className="absolute -inset-4 rounded-full border-2 border-current opacity-30 animate-ping" />
                      )}
                    </div>
                    
                    {/* Floating Icon Shadows */}
                    <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-all duration-500`} />
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-6 transition-all duration-300 ${activeCard === index ? 'text-transparent bg-gradient-to-r bg-clip-text ' + service.gradient + ' scale-105' : 'text-foreground group-hover:text-[#008080]'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed text-lg transition-all duration-300 ${activeCard === index ? 'text-foreground/90 scale-105' : ''}`}>
                      {service.description}
                    </p>

                    {/* Interactive Progress Bar */}
                    <div className="mt-8 relative">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${service.gradient} transform transition-all duration-1000 ${activeCard === index ? 'translate-x-0' : '-translate-x-full'}`}
                        />
                      </div>
                      <div className={`mt-3 text-sm font-medium transition-all duration-300 ${activeCard === index ? 'opacity-100 text-[#008080]' : 'opacity-0'}`}>
                        جاهز للإبداع معك! 🚀
                      </div>
                    </div>
                  </div>

                  {/* Magical Corner Decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#FFEB3B]/30 rounded-full animate-pulse-slow" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#008080]/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  
                  {/* Hover Ripple Effect */}
                  {activeCard === index && (
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                  )}
                </div>

                {/* Card Shadow Enhancement */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Epic Call to Action */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1.2s' }}>
          <div className="relative inline-block mb-8">
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;