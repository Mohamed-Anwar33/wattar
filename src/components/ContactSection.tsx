import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, Send, Star, Sparkles, Crown, Heart, Zap, MessageCircle } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logoImage from '../assets/logo.png';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState<string | null>(null);

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

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900/20 overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.2), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[700px] h-[700px] object-contain animate-pulse-slow transform -rotate-6" 
        />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className={`absolute top-20 left-[5%] w-48 h-48 transition-all duration-1500 ${isVisible ? 'animate-float opacity-12' : 'opacity-0'}`}>
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute inset-8 w-32 h-32 bg-gradient-to-tl from-teal-400/10 to-cyan-500/15 rounded-full blur-xl animate-breathe" />
        </div>
        
        <div className={`absolute bottom-24 right-[8%] w-40 h-40 transition-all duration-1500 ${isVisible ? 'animate-float opacity-15' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-purple-500/18 via-pink-500/12 to-cyan-500/18 transform rotate-45 blur-xl animate-morph" />
        </div>

        {/* Magical Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-30' : 'opacity-0'}`}
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${10 + (i * 3.5)}%`,
              top: `${20 + (i * 2.8)}%`,
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, rgba(6,182,212,0.6), rgba(59,130,246,0.4))' 
                : 'linear-gradient(45deg, rgba(168,85,247,0.5), rgba(236,72,153,0.4))',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 5)}s`
            }}
          />
        ))}

        {/* Dynamic Light Rays */}
        <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-25' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/15 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-20' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 relative">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                تواصل معنا
              </span>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-50 animate-pulse-slow" />
            </h2>
            
            {/* Floating Icons Around Title */}
            <div className={`absolute -top-8 -right-8 transition-all duration-1000 ${isVisible ? 'animate-float opacity-60' : 'opacity-0'}`}>
              <MessageCircle className="w-8 h-8 text-cyan-500 animate-pulse-slow" />
            </div>
            <div className={`absolute -bottom-6 -left-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-6 h-6 text-purple-500 animate-pulse-slow" />
            </div>
          </div>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            🚀 هل أنت مستعد لتحويل فكرتك إلى <span className="text-cyan-600 font-bold animate-pulse">واقع رقمي مذهل</span>؟ 
            تواصل معنا اليوم ودعنا نساعدك في إنشاء شيء <span className="text-purple-600 font-bold glow-soft">استثنائي</span> معاً ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Lottie Animation & Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}>
            {/* Lottie Animation */}
            <div className="relative mb-12">
              <div className="w-full max-w-md mx-auto relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse-slow" />
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                  <DotLottieReact
                    src="https://lottie.host/bf1f4ee7-d88f-4b94-bcf0-5ea07a47ed28/br8dyJzXli.lottie"
                    loop
                    autoplay
                    className="w-full h-64"
                  />
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-cyan-600 transition-colors">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground font-medium">hello@wattar.com</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse-slow" />
              </div>

              <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-purple-600 transition-colors">الهاتف</h4>
                    <p className="text-muted-foreground font-medium">+966 50 123 4567</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse-slow" />
              </div>

              <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-cyan-600 transition-colors">الموقع</h4>
                    <p className="text-muted-foreground font-medium">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400/40 rounded-full animate-pulse-slow" />
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div className="relative">
              <h4 className="font-bold text-xl text-foreground mb-6 text-center">تابعنا على</h4>
              <div className="flex justify-center gap-6">
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-pink-500/50">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-blue-500/50">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-cyan-500/50">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow" />
              <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                      ابدأ مشروعك معنا
                    </span>
                  </h3>
                  <p className="text-muted-foreground">
                    🎯 احكي لنا عن حلمك ودعنا نحوله إلى واقع مذهل!
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Label htmlFor="name" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                        <Crown className="w-4 h-4 text-cyan-500" />
                        الاسم الكامل
                      </Label>
                      <Input
                        id="name"
                        placeholder="أدخل اسمك الكامل"
                        className="bg-background/80 border-2 border-cyan-200/50 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 rounded-xl h-12"
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'name' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>
                    <div className="relative">
                      <Label htmlFor="email" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-500" />
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@domain.com"
                        className="bg-background/80 border-2 border-purple-200/50 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 rounded-xl h-12"
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'email' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Label htmlFor="subject" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                      <Star className="w-4 h-4 text-cyan-500" />
                      موضوع الرسالة
                    </Label>
                    <Input
                      id="subject"
                      placeholder="اختر موضوع رسالتك"
                      className="bg-background/80 border-2 border-cyan-200/50 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 rounded-xl h-12"
                      onFocus={() => setActiveField('subject')}
                      onBlur={() => setActiveField(null)}
                    />
                    {activeField === 'subject' && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-50" />
                    )}
                  </div>

                  <div className="relative">
                    <Label htmlFor="message" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                      <Heart className="w-4 h-4 text-purple-500" />
                      تفاصيل المشروع
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="أخبرنا عن مشروعك وما تحتاجه... كلما كانت التفاصيل أكثر، كان بإمكاننا مساعدتك بشكل أفضل! ✨"
                      className="bg-background/80 border-2 border-purple-200/50 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 resize-none rounded-xl"
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                    />
                    {activeField === 'message' && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-50" />
                    )}
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <Button className="relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg py-6 rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center justify-center gap-3">
                        🚀 إرسال الرسالة
                        <Send className="w-5 h-5 group-hover:animate-bounce" />
                      </span>
                    </Button>
                  </div>
                </form>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400/40 rounded-full animate-pulse-slow" />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;