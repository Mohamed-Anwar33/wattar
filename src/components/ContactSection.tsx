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
      className="relative py-8 md:py-12 scroll-mt-24 md:scroll-mt-28 bg-background"
    >
      


      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Spectacular Section Header */}
        <div className={`text-center mb-6 sm:mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}> 
          <div className="relative inline-block">
            {/* Section title removed per request */}
            
          </div>
          
          {/* Intro paragraph removed per request */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start">
          {/* Right Column in RTL - Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              <div className="relative bg-card p-2 sm:p-4 md:p-8 rounded-lg sm:rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg">
                <div className="text-center mb-3 sm:mb-6 md:mb-8">
                  <h3 className="text-sm sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
                    <span className="text-foreground">
                      تواصل معنا
                    </span>
                  </h3>
                </div>
                
                {!showThankYou ? (
                  <form 
                    action="https://formsubmit.co/ajax/contact@example.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-2 sm:space-y-4 md:space-y-6"
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
                    
                    <div className="grid grid-cols-1 gap-2 sm:gap-4">
                      <div className="relative">
                        <Label htmlFor="name" className="text-foreground font-bold mb-1 sm:mb-2 md:mb-3 block flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Crown className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-cyan-500" />
                          الاسم
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="الاسم"
                          className="bg-background/80 border border-cyan-200/50 sm:border-2 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 rounded-lg sm:rounded-xl h-8 sm:h-10 md:h-12 text-xs sm:text-sm"
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                        />
                        {activeField === 'name' && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-50" />
                        )}
                      </div>
                      <div className="relative">
                        <Label htmlFor="company" className="text-foreground font-bold mb-1 sm:mb-2 md:mb-3 block flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Mail className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-purple-500" />
                          الشركة
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          placeholder="الشركة"
                          className="bg-background/80 border border-purple-200/50 sm:border-2 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 rounded-lg sm:rounded-xl h-8 sm:h-10 md:h-12 text-xs sm:text-sm"
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
                      <Label htmlFor="email" className="text-foreground font-bold mb-1 sm:mb-2 md:mb-3 block flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <Mail className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-purple-500" />
                        الايميل
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="الايميل"
                        className="bg-background/80 border border-purple-200/50 sm:border-2 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 rounded-lg sm:rounded-xl h-8 sm:h-10 md:h-12 text-xs sm:text-sm"
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'email' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <Label htmlFor="phone" className="text-foreground font-bold mb-1 sm:mb-2 md:mb-3 block flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <Phone className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-teal-500" />
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
                        className="bg-background/80 border border-teal-200/50 sm:border-2 focus:border-teal-500 focus:ring-teal-500/20 transition-all duration-300 rounded-lg sm:rounded-xl h-8 sm:h-10 md:h-12 text-xs sm:text-sm"
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                      />
                      {activeField === 'phone' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-50" />
                      )}
                    </div>

                    

                    <div className="relative">
                      <Label htmlFor="message" className="text-foreground font-bold mb-1 sm:mb-2 md:mb-3 block flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-purple-500" />
                        نبذة عن نطاق العمل المطلوب
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        placeholder="نبذة عن نطاق العمل المطلوب"
                        className="bg-background/80 border border-purple-200/50 sm:border-2 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 resize-none rounded-lg sm:rounded-xl text-xs sm:text-sm"
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
                        className="relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold text-xs sm:text-sm md:text-lg py-2 sm:py-4 md:py-6 rounded-lg sm:rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                      >
                        <span className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-spin" />
                              جاري الإرسال...
                            </>
                          ) : (
                            <>
                              إرسال
                              <Send className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
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
                      <h3 className="text-4xl font-extrabold text-foreground">
                        <span className="text-foreground">
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
                          تم استلام رسالتك بنجاح وسيتم <span className="text-foreground font-bold">التواصل معك قريباً</span>
                        </p>
                        <p className="text-lg">
                          فريق وتار متحمس للعمل معك على تحويل فكرتك إلى <span className="text-foreground font-bold">واقع رقمي مذهل</span> ✨
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
              </div>
            </div>
          </div>

          {/* Left Column in RTL - Lottie/Visual - Hidden on mobile */}
          <div className={`hidden lg:block transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`} style={{ animationDelay: '0.2s' }}> 
            {/* Lottie Animation */}
            <div className="relative mb-4 sm:mb-8 md:mb-12">
              <div className="w-full relative">
                <div className="relative bg-card rounded-lg sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-6 border border-gray-200 shadow-lg">
                  <DotLottieReact
                    src="https://lottie.host/bf1f4ee7-d88f-4b94-bcf0-5ea07a47ed28/br8dyJzXli.lottie"
                    loop
                    autoplay
                    className="w-full h-32 sm:h-48 md:h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;