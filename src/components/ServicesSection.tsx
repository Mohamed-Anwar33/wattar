import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { Palette, BookOpen, Monitor, Sparkles, Star, Zap, Crown, Rocket, Heart, Trophy, Target, Wand2 } from "lucide-react";
import logoImage from '../assets/logo.png';
import servicesImage from '../assets/الخدمات على شاشة الموبايل.png';

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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    // Mouse position tracking removed for simplicity
  };

  return (
    <section 
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-4 md:py-6 bg-background scroll-mt-24 md:scroll-mt-28"
    >
      


      <div className="container mx-auto px-3 sm:px-6 relative z-10">

        {/* Mobile Services Image */}
        <div className="sm:hidden mb-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}>
            <img 
              src={servicesImage} 
              alt="خدماتنا على شاشة الموبايل" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>


        {/* Desktop Services Cards */}
        <div className="hidden sm:grid grid-cols-3 gap-6 md:gap-12 mb-6 sm:mb-12 md:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Main Service Card - no shadow, teal border, rounded corners */}
                <div className="relative bg-card rounded-lg sm:rounded-2xl border border-foreground/20 sm:border-2 p-6 md:p-8 h-64 md:h-80 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-[#0e7c8d]/20 group cursor-pointer">
                  {/* Spectacular Icon Container */}
                  <div className="relative mb-4 md:mb-6 flex justify-center">
                    <div className="inline-flex p-2 md:p-4 rounded-lg sm:rounded-3xl bg-card">
                      <Icon className="w-8 sm:h-8 md:w-12 md:h-12 text-[#0e7c8d]" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className={`text-lg md:text-2xl font-bold mb-3 md:mb-4 transition-all duration-300 text-foreground leading-tight text-center`}>
                      {service.title}
                    </h3>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <p className={`text-muted-foreground leading-relaxed text-sm md:text-lg transition-all duration-300 line-clamp-3 text-center`}>
                        {service.description}
                      </p>

                      <div className="mt-auto">
                        {/* Interactive Progress Bar */}
                        <div className="mt-4 md:mt-6 relative">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${service.gradient} transform transition-all duration-1000 ${activeCard === index ? 'translate-x-0' : '-translate-x-full'}`}
                            />
                          </div>
                          <div className={`mt-2 text-xs font-medium transition-all duration-300 opacity-0 text-center`}>
                            جاهز للإبداع معك! 🚀
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Epic Call to Action */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1.2s' }}>
          <div className="relative inline-block mb-8">
          </div>
          
        </div>

        {/* Modal */}
        {isModalOpen && selectedService && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="bg-card rounded-2xl border-2 border-[#0e7c8d] p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="pt-2">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-2xl bg-card border border-[#0e7c8d]/20">
                    <selectedService.icon className="w-8 h-8 text-[#0e7c8d]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                  {selectedService.title}
                </h3>
                
                {/* Full Description */}
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {selectedService.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${selectedService.gradient} w-full transition-all duration-1000`}
                    />
                  </div>
                  <div className="mt-3 text-sm font-medium text-[#0e7c8d]">
                    جاهز للإبداع معك! 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;