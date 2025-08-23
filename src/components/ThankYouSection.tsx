import { useRef, useState, useEffect } from "react";
import { CheckCircle, Heart, Sparkles, ArrowRight, Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logoImage from '../assets/logo.png';

const ThankYouSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-green-900/20 overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,197,94,0.2), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[700px] h-[700px] object-contain animate-pulse-slow transform rotate-6" 
        />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Success Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0'}`}
            style={{
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              left: `${15 + (i * 4)}%`,
              top: `${25 + (i * 2.5)}%`,
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, rgba(34,197,94,0.7), rgba(16,185,129,0.5))' 
                : 'linear-gradient(45deg, rgba(59,130,246,0.6), rgba(147,197,253,0.4))',
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          />
        ))}

        {/* Success Rays */}
        <div className={`absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/25 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-30' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-25' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          
          {/* Success Animation */}
          <div className="relative mb-12">
            <div className="w-full max-w-sm mx-auto relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full p-8 border border-white/40 shadow-2xl">
                <DotLottieReact
                  src="https://lottie.host/embed/4d3f78c4-8c5b-4b2a-9c4b-2e8f1a6b5c3d/success-checkmark.json"
                  loop={false}
                  autoplay
                  className="w-32 h-32 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Success Icon */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse-slow" />
              <div className="relative w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                <CheckCircle className="w-12 h-12 text-white animate-pulse-slow" />
              </div>
            </div>
          </div>

          {/* Main Success Message */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.7s' }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative">
              <span className="bg-gradient-to-r from-green-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                تم الإرسال بنجاح! 🎉
              </span>
              <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-50 animate-pulse-slow" />
            </h1>
            
            <div className="space-y-4 text-xl md:text-2xl text-muted-foreground leading-relaxed">
              <p className="flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                شكراً لك على تواصلك معنا! 
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
              </p>
              <p>
                تم استلام رسالتك بنجاح وسيتم <span className="text-green-600 font-bold">التواصل معك قريباً</span>
              </p>
              <p className="text-lg">
                فريق وتار متحمس للعمل معك على تحويل فكرتك إلى <span className="text-cyan-600 font-bold animate-pulse">واقع رقمي مذهل</span> ✨
              </p>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1s' }}>
            <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">سرعة الاستجابة</h3>
                <p className="text-sm text-muted-foreground">سنرد عليك خلال 24 ساعة</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <Sparkles className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">استشارة مجانية</h3>
                <p className="text-sm text-muted-foreground">أول استشارة مجانية تماماً</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <Heart className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">فريق محترف</h3>
                <p className="text-sm text-muted-foreground">خبراء في التطوير والتصميم</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1.2s' }}>
            <Button 
              onClick={() => window.location.href = '/'}
              className="group relative bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-2xl shadow-green-500/50 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <Home className="w-5 h-5" />
                العودة للصفحة الرئيسية
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/#services'}
              className="group relative border-2 border-cyan-500/50 hover:border-cyan-500 text-cyan-600 hover:text-white hover:bg-cyan-500 font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                تصفح خدماتنا
              </span>
            </Button>
          </div>

          {/* Footer Message */}
          <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
            <p className="text-lg text-muted-foreground">
              🚀 نتطلع لبناء شيء <span className="text-gradient font-bold">استثنائي</span> معك!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
