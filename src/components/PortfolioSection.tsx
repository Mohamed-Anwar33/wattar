import { useRef, useState, useEffect } from "react";
import { ExternalLink, Eye, Heart, Star, Zap, Crown, Sparkles, Trophy, Award, Rocket, Palette, Monitor, Smartphone, Camera, PenTool, Globe, ShoppingBag, BookOpen, TrendingUp, Users, Target, Coffee } from "lucide-react";
import logoImage from '../assets/logo.png';

const portfolioItems = [
  {
    id: 1,
    title: "موقع منصة تعليمية تفاعلية",
    category: "تطوير تجربة المستخدم",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "تصميم وتطوير موقع منصة تعليمية مع واجهات بديهية وتجربة مستخدم متميزة للطلاب والمعلمين",
    stats: { views: "45K+", likes: "3.2K" },
    tags: ["Website Design", "UX/UI", "Education", "Responsive"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    icon: Monitor,
    year: "2024"
  },
  {
    id: 2,
    title: "هوية بصرية لشركة استشارات",
    category: "تصميم الهويات البصرية",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "تصميم هوية بصرية احترافية ومتكاملة تعكس قيم الشركة وتميزها في السوق مع دليل استخدام شامل",
    stats: { views: "38K+", likes: "2.7K" },
    tags: ["Visual Identity", "Branding", "Logo Design", "Guidelines"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: Palette,
    year: "2024"
  },
  {
    id: 3,
    title: "ملف تعريفي لشركة عقارية",
    category: "تصميم الملفات التعريفية",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "تصميم ملف تعريفي احترافي يعرض خدمات الشركة ومشاريعها بطريقة جذابة ومقنعة للعملاء المحتملين",
    stats: { views: "52K+", likes: "3.8K" },
    tags: ["Company Profile", "Brochure", "Real Estate", "Professional"],
    gradient: "from-green-500 via-teal-500 to-blue-500",
    icon: BookOpen,
    year: "2024"
  },
  {
    id: 4,
    title: "موقع شركة خدمات مالية",
    category: "تطوير تجربة المستخدم",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "تطوير موقع احترافي لشركة خدمات مالية مع تجربة مستخدم آمنة وسهلة التنقل وتصميم عصري",
    stats: { views: "67K+", likes: "4.5K" },
    tags: ["Website", "Finance", "Professional", "Responsive"],
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    icon: Monitor,
    year: "2024"
  }
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");

  const categories = ["الكل", "تطوير تجربة المستخدم", "تصميم الهويات البصرية", "تصميم الملفات التعريفية"];

  const filteredItems = selectedCategory === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        if (entry.intersectionRatio === 0) {
          setIsVisible(false);
          setActiveCard(null);
          setHoveredCard(null);
        }
      }
    }, { threshold: [0, 0.1, 0.2], rootMargin: '0px 0px 0px 0px' });

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
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168,85,247,0.15), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[800px] h-[800px] object-contain animate-pulse-slow transform rotate-3" 
        />
      </div>

      {/* Enhanced Spectacular Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes with Enhanced Gradients */}
        <div className={`absolute top-16 left-[3%] w-60 h-60 transition-all duration-1500 ${isVisible ? 'animate-float opacity-15' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-indigo-500/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute inset-8 w-44 h-44 bg-gradient-to-tl from-cyan-400/10 to-blue-500/15 rounded-full blur-2xl animate-breathe" />
        </div>
        
        <div className={`absolute bottom-20 right-[5%] w-48 h-48 transition-all duration-1500 ${isVisible ? 'animate-float opacity-20' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-red-500/15 to-pink-500/20 transform rotate-45 blur-2xl animate-morph" />
          <div className="absolute inset-6 w-36 h-36 bg-gradient-to-tr from-yellow-400/10 to-orange-500/15 rounded-full blur-xl animate-pulse-slow" />
        </div>
        
        <div className={`absolute top-1/4 right-[12%] w-36 h-36 transition-all duration-1500 ${isVisible ? 'animate-float opacity-18' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
          <div className="w-full h-full bg-gradient-to-br from-emerald-500/15 via-teal-500/20 to-cyan-500/15 rounded-full blur-xl animate-breathe" />
        </div>

        <div className={`absolute bottom-1/3 left-[8%] w-28 h-28 transition-all duration-1500 ${isVisible ? 'animate-float opacity-12' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-purple-500/15 transform rotate-12 blur-lg animate-pulse-slow" />
        </div>

        {/* Enhanced Magical Particles with Different Sizes */}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0'}`}
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              left: `${5 + (i * 2.8)}%`,
              top: `${15 + (i * 2.2)}%`,
              background: i % 3 === 0 
                ? 'linear-gradient(45deg, rgba(168,85,247,0.6), rgba(236,72,153,0.4))' 
                : i % 3 === 1 
                ? 'linear-gradient(45deg, rgba(59,130,246,0.5), rgba(14,165,233,0.4))'
                : 'linear-gradient(45deg, rgba(245,101,101,0.5), rgba(251,146,60,0.4))',
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 6)}s`
            }}
          />
        ))}

        {/* Floating Sparkle Effects */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className={`absolute transition-all duration-1000 ${isVisible ? 'animate-float opacity-25' : 'opacity-0'}`}
            style={{
              left: `${20 + (i * 5)}%`,
              top: `${25 + (i * 4)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 4)}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-pulse-slow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 rounded-full blur-sm" />
          </div>
        ))}

        {/* Enhanced Dynamic Light Rays */}
        <div className={`absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-25' : 'opacity-0'}`} />
        <div className={`absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/15 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-20' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }} />
        <div className={`absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/18 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-22' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-orange-400/15 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-18' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }} />

        {/* Animated Gradient Waves */}
        <div className={`absolute top-0 left-0 w-full h-full transition-all duration-2000 ${isVisible ? 'opacity-10' : 'opacity-0'}`}>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse-slow" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/25 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Rotating Gradient Orbs */}
        <div className={`absolute top-1/5 left-1/5 w-20 h-20 transition-all duration-1500 ${isVisible ? 'animate-spin-slow opacity-15' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        </div>
        <div className={`absolute bottom-1/5 right-1/5 w-16 h-16 transition-all duration-1500 ${isVisible ? 'animate-spin-slow opacity-12' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg" />
        </div>

        {/* Floating Hexagons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className={`absolute transition-all duration-1500 ${isVisible ? 'animate-float opacity-8' : 'opacity-0'}`}
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + (i % 3)}s`
            }}
          >
            <div 
              className="w-6 h-6 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 transform rotate-45 blur-sm"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                معرض أعمالنا
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-40 animate-pulse-slow" />
            </h2>
            
            {/* Floating Icons Around Title */}
            <div className={`absolute -top-6 -right-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-60' : 'opacity-0'}`}>
              <Crown className="w-6 h-6 text-purple-500 animate-pulse-slow" />
            </div>
            <div className={`absolute -bottom-4 -left-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-5 h-5 text-pink-500 animate-pulse-slow" />
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            🎨 مجموعة مختارة من أفضل أعمالنا التي تحكي قصص نجاح <span className="text-purple-600 font-bold">استثنائية</span> ✨
          </p>
        </div>

        {/* Compact Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => {
                  setActiveCard(item.id);
                  setHoveredCard(item.id);
                }}
                onMouseLeave={() => {
                  setActiveCard(null);
                  setHoveredCard(null);
                }}
              >
                {/* Main Portfolio Card */}
                <div className={`relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-6 ${hoveredCard === item.id ? 'rotate-1 shadow-purple-500/30' : ''}`}>
                  
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                  
                  {/* Compact Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      loading="lazy"
                    />
                    
                    {/* Image Overlay with Stats */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Top Stats */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                          <Eye className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">{item.stats.views}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                          <Heart className="w-4 h-4 text-red-400" />
                          <span className="text-white text-sm font-medium">{item.stats.likes}</span>
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${item.gradient}`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                            {item.category}
                          </span>
                          <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                        
                      </div>
                      
                      {/* Action Button */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 cursor-pointer group/btn">
                          <ExternalLink className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Content */}
                  <div className="relative z-10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-r ${item.gradient} shadow-lg`}>
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium bg-muted/50 px-1.5 py-0.5 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className={`text-base font-bold mb-2 transition-all duration-300 ${activeCard === item.id ? 'text-transparent bg-gradient-to-r bg-clip-text ' + item.gradient + ' scale-105' : 'text-foreground group-hover:text-purple-600'}`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed mb-3 text-xs transition-all duration-300 ${activeCard === item.id ? 'text-foreground/90 scale-105' : ''}`}>
                      {item.description.slice(0, 80)}...
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-muted/80 text-muted-foreground px-1.5 py-0.5 rounded-md font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Progress Bar */}
                    <div className="relative">
                      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.gradient} transform transition-all duration-1000 ${activeCard === item.id ? 'translate-x-0' : '-translate-x-full'}`}
                        />
                      </div>
                      <div className={`mt-1 text-xs font-bold transition-all duration-300 ${activeCard === item.id ? 'opacity-100 text-purple-600' : 'opacity-0'}`}>
                        مكتمل! 🎉
                      </div>
                    </div>
                  </div>

                  {/* Magical Corner Decorations */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse-slow" />
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  
                  {/* Hover Ripple Effect */}
                  {activeCard === item.id && (
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                  )}
                </div>

                {/* Card Shadow Enhancement */}
                <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Compact Call to Action */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1s' }}>
          <div className="relative inline-block mb-6">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                هل أنت مستعد لتكون التالي؟
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              🚀 انضم إلى قائمة عملائنا المميزين واحصل على مشروع استثنائي!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                🎨 ابدأ مشروعك الآن
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
            
            <button 
              className="group relative border-2 border-purple-500 text-purple-600 bg-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="flex items-center gap-2">
                ✨ المزيد من الأعمال
                <Trophy className="w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;