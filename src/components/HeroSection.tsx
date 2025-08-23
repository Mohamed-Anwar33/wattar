import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import abstractElements from "@/assets/abstract-elements.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotPos, setSpotPos] = useState<{ x: string; y: string }>({ x: "50%", y: "50%" });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (sectionRef.current)?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotPos({ x: `${x}px`, y: `${y}px` });
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const max = 8; // degrees
    const ry = px * max; // rotateY by horizontal movement
    const rx = -py * max; // rotateX by vertical movement (invert for natural feel)
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const handleCardLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return <section
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Cursor Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-spotlight"
        style={{
          // @ts-ignore custom CSS vars
          "--mx": spotPos.x,
          // @ts-ignore custom CSS vars
          "--my": spotPos.y,
        } as React.CSSProperties}
      />

      {/* Subtle Creative Particles (non-intrusive) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* soft diagonal glow lines */}
        <span className="hidden md:block absolute right-[12%] top-[14%] w-48 h-[6px] bg-[#008080]/10 rounded-full blur-sm rotate-12"></span>
        <span className="hidden md:block absolute left-[15%] bottom-[18%] w-56 h-[6px] bg-[#FFEB3B]/15 rounded-full blur-sm -rotate-6"></span>

        {/* tiny particles cluster top-right */}
        <div className="hidden sm:block absolute top-12 right-16 flex gap-3">
          <span className="size-2 rounded-full bg-[#FFEB3B]/60 animate-pulse-slow"></span>
          <span className="size-3 rounded-full bg-[#008080]/40 animate-float"></span>
          <span className="size-1.5 rounded-full bg-[#008080]/30 translate-y-1"></span>
        </div>

        {/* tiny particles cluster left-center */}
        <div className="hidden sm:block absolute top-1/2 left-20 flex gap-2">
          <span className="size-2 rounded-full bg-[#FFEB3B]/50 animate-pulse-slow"></span>
          <span className="size-1.5 rounded-full bg-[#008080]/30"></span>
        </div>
      </div>
      
      {/* Floating Abstract Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float">
        <img src={abstractElements} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-30 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="w-full h-full bg-gradient-primary rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/3 right-10 w-16 h-16 opacity-25 animate-float" style={{
      animationDelay: '1s'
    }}>
        <div className="w-full h-full bg-gradient-secondary rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Illustration */}
          <div className="order-2 md:order-2 mx-auto w-full max-w-[600px] md:max-w-[720px] lg:max-w-[840px] xl:max-w-[900px] animate-fade-in">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardLeave}
              className="tilt-card relative aspect-video rounded-[36px] md:rounded-[48px] bg-white/90 md:bg-white/95 shadow-2xl p-3 md:p-4 overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute -left-10 -top-12 w-[140%] aspect-[1.6] rounded-full bg-neutral-100"></div>
              </div>
              <div className="relative h-full w-full rounded-[28px] md:rounded-[36px]">
                <DotLottieReact
                  src="https://lottie.host/049682c1-0b68-4e1c-b410-0bb932d03158/Yx2xNTNsDg.json"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              {/* subtle glossy highlight */}
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[36px] md:rounded-[48px] bg-gradient-to-b from-white/20 via-transparent to-transparent mix-blend-overlay" />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-1 md:pl-6 animate-slide-up" dir="rtl">
            <div className="relative ml-auto max-w-[560px] px-3 sm:px-0">
              {/* soft spotlight and accents */}
              <span className="hidden sm:block pointer-events-none absolute -z-10 right-[-80px] top-[-40px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl"></span>
              <span className="hidden sm:block pointer-events-none absolute -z-10 left-[-120px] bottom-[-100px] w-[360px] h-[360px] rounded-full bg-secondary/10 blur-[70px]"></span>
              {/* removed dark overlay for a brighter, clean background */}

              <div className="relative text-right">
                <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FFEB3B]/90 border border-transparent text-slate-900 px-4 py-1.5 mb-4">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.64 4 9l5.91-.74L12 2z"></path>
                  </svg>
                  <span className="text-sm md:text-base">وكالة إبداعية رقمية</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.24] md:leading-[1.18] text-[#008080] drop-shadow-[0_6px_20px_rgba(255,235,59,0.5)] gradient-stroke">
                  صناعة الأثر الرقمي
                </h2>
                <div
                  aria-hidden
                  className="mt-3 inline-flex items-center rounded-full bg-[#FFEB3B]/60 text-slate-900 px-6 py-2 text-base md:text-lg font-semibold border border-[#FFEB3B]/60 shadow-md shadow-yellow-200/30 transition-colors hover:bg-[#FFEB3B]/70">
                  فريق جاهز لصناعة اثرك الرقمي
                </div>
                <p className="mt-6 text-[17px] md:text-xl text-[#6B7280] leading-relaxed md:leading-loose tracking-[0.01em]">
                  نمنحك تجربة سلسة لتصل بأعمالك إلى المستوى التالي من النجاح <span className="text-[#008080] font-medium glow-soft">في مكانٍ واحد</span>.
                </p>
                <div className="mt-6 h-[5px] w-40 md:w-56 rounded-full bg-[#FFEB3B] ml-auto"></div>

                <div className="hidden sm:grid mt-7 sm:grid-cols-3 gap-3.5 text-slate-800">
                  <div className="flex items-center justify-end gap-2">
                    <div className="size-6 rounded-full bg-[#FFEB3B]/20 flex items-center justify-center text-[#008080]">
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span className="text-sm">تصميم براند</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="size-6 rounded-full bg-[#FFEB3B]/20 flex items-center justify-center text-[#008080]">
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                    </div>
                    <span className="text-sm">مواقع وتجارب</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="size-6 rounded-full bg-[#FFEB3B]/20 flex items-center justify-center text-[#008080]">
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12V4"/></svg>
                    </div>
                    <span className="text-sm">محتوى وإعلانات</span>
                  </div>
                </div>

                <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3 justify-end">
                  <Button 
                    className="group btn-primary h-12 md:h-14 px-6 md:px-8 rounded-full inline-flex items-center gap-2 transition-transform w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    تواصل معنا
                    <svg className="size-5 md:size-6 -scale-x-100 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="group btn-outline h-12 md:h-14 px-6 md:px-8 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById('portfolio');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    شاهد أعمالنا
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-10"></div>
    </section>;
};
export default HeroSection;