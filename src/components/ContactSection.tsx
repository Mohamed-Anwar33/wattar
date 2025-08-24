import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Twitter, Send, Sparkles, Crown, Heart, Zap, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logoImage from '../assets/logo.png';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const actionUrl = form.getAttribute('action');
    const formData = new FormData(form);

    try {
      if (!actionUrl) throw new Error('Missing form action URL');

      const res = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      // Expect 2xx success from AJAX endpoint
      if (!res.ok) {
        throw new Error(`Failed to send: ${res.status}`);
      }

      setShowThankYou(true);
      form.reset();

      // Hide thank you after a few seconds
      setTimeout(() => setShowThankYou(false), 4000);
    } catch (err) {
      console.error('Contact form submit error:', err);
      alert('تعذر إرسال الرسالة حالياً. حاول مرة أخرى لاحقاً.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="contact"
      className="relative py-16 md:py-28 scroll-mt-24 md:scroll-mt-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900/20 overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.2), transparent 70%)`,
        }}
      />
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.01]">
        <img 
          src={logoImage} 
          alt="Wattar Logo" 
          className="w-[560px] h-[560px] md:w-[680px] md:h-[680px] object-contain animate-pulse-slow transform -rotate-6" 
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
        <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-20' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent transition-all duration-1000 ${isVisible ? 'animate-pulse-slow opacity-15' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Section Header */}
        <div className={`text-center mb-14 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}> 
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 relative">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                تواصل معنا
              </span>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-3xl blur-3xl opacity-40 animate-pulse-slow" />
            </h2>
            
            {/* Floating Icons Around Title */}
            <div className={`absolute -top-8 -right-8 transition-all duration-1000 ${isVisible ? 'animate-float opacity-50' : 'opacity-0'}`}>
              <MessageCircle className="w-8 h-8 text-cyan-500 animate-pulse-slow" />
            </div>
            <div className={`absolute -bottom-6 -left-6 transition-all duration-1000 ${isVisible ? 'animate-float opacity-40' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-6 h-6 text-purple-500 animate-pulse-slow" />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
            🚀 هل أنت مستعد لتحويل فكرتك إلى <span className="text-cyan-600 font-bold animate-pulse">واقع رقمي مذهل</span>؟ 
            تواصل معنا اليوم ودعنا نساعدك في إنشاء شيء <span className="text-purple-600 font-bold glow-soft">استثنائي</span> معاً ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Lottie Animation & Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}> 
            {/* Lottie Animation */}
            <div className="relative mb-8 md:mb-12 hidden lg:block">
              <div className="w-full max-w-md mx-auto relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-3xl blur-2xl animate-pulse-slow" />
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


            {/* Enhanced Social Media */}
            <div className="relative">
              <h4 className="font-bold text-xl text-foreground mb-6 text-center">تابعنا على</h4>
              <div className="flex justify-center gap-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/wattar_ksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative"
                >
                  <span className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <span className="relative w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-pink-500/50">
                    <Instagram className="w-6 h-6 text-white" />
                  </span>
                </a>
                {/* X (Twitter) */}
                <a
                  href="https://x.com/wattar_ksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="group relative"
                >
                  <span className="absolute -inset-2 bg-gradient-to-r from-slate-800 to-slate-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <span className="relative w-14 h-14 bg-gradient-to-r from-slate-800 to-slate-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-slate-800/40">
                    <Twitter className="w-6 h-6 text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow" />
              <div className="relative max-w-xl mx-auto bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/30 dark:border-slate-700/40 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                    <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                      تواصل معنا
                    </span>
                  </h3>
                </div>
                
{!showThankYou ? (
                  <form 
                    action="https://formsubmit.co/ajax/contact@example.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    acceptCharset="UTF-8"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    {/* Optional: if native submission is re-enabled later, add _next at that time */}
                    {/* Honeypot to reduce spam */}
                    <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                    {/* Default email subject shown in inbox. User's entered subject will appear in body as 'subject' */}
                    <input type="hidden" name="_subject" value="رسالة جديدة من موقع وتار" />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Label htmlFor="name" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                          <Crown className="w-4 h-4 text-cyan-500" />
                          الاسم
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="الاسم"
                          className="bg-background/80 border-2 border-cyan-200/50 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 rounded-xl h-12"
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                        />
                        {activeField === 'name' && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-50" />
                        )}
                      </div>
                      <div className="relative">
                        <Label htmlFor="company" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                          <Mail className="w-4 h-4 text-purple-500" />
                          الشركة
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          placeholder="الشركة"
                          className="bg-background/80 border-2 border-purple-200/50 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 rounded-xl h-12"
                          onFocus={() => setActiveField('company')}
                          onBlur={() => setActiveField(null)}
                        />
                        {activeField === 'company' && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-50" />
                        )}
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="relative">
                      <Label htmlFor="email" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-500" />
                        الايميل
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="الايميل"
                        className="bg-background/80 border-2 border-purple-200/50 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 rounded-xl h-12"
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'email' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <Label htmlFor="phone" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                        <Phone className="w-4 h-4 text-teal-500" />
                        رقم التواصل
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="رقم التواصل"
                        pattern="^[+]?[^a-zA-Z]{7,20}$"
                        autoComplete="tel"
                        className="bg-background/80 border-2 border-teal-200/50 focus:border-teal-500 focus:ring-teal-500/20 transition-all duration-300 rounded-xl h-12"
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'phone' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>

                    

                    <div className="relative">
                      <Label htmlFor="message" className="text-foreground font-bold mb-3 block flex items-center gap-2">
                        <Heart className="w-4 h-4 text-purple-500" />
                        نبذة عن نطاق العمل المطلوب
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="نبذة عن نطاق العمل المطلوب"
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
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold text-lg py-6 rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                      >
                        <span className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              جاري الإرسال...
                            </>
                          ) : (
                            <>
                              إرسال
                              <Send className="w-5 h-5 group-hover:animate-bounce" />
                            </>
                          )}
                        </span>
                      </Button>
                    </div>

                  </form>
                ) : (
                  /* Thank You Message */
                  <div className="text-center space-y-8 animate-slide-up">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse-slow" />
                        <div className="relative w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-bounce-in">
                          <CheckCircle className="w-12 h-12 text-white animate-pulse-slow" />
                        </div>
                      </div>
                    </div>

                    {/* Thank You Text */}
                    <div className="space-y-4">
                      <h3 className="text-4xl font-extrabold">
                        <span className="bg-gradient-to-r from-green-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                          تم الإرسال بنجاح! 🎉
                        </span>
                      </h3>
                      
                      <div className="space-y-3 text-xl text-muted-foreground">
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

                    {/* Decorative Elements */}
                    <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

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