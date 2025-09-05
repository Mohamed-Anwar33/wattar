import { Button } from "@/components/ui/button";
import wattarVector from "@/assets/WATTAR VECTOR.png";
import heroTextDay from "@/assets/نص الهيرو سيكشن الوضع النهارى.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24 scroll-mt-20 md:scroll-mt-24 bg-background"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-1 lg:order-1 text-right" dir="rtl">
            <div className="space-y-6">
              {/* Main Heading (as image) */}
              <div className="w-full">
                <img
                  src={heroTextDay}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="block ml-auto w-full max-w-[680px] h-auto object-contain select-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button 
                  className="bg-[#ffeb19] hover:bg-[#ffd700] text-black font-semibold px-8 py-3 rounded-full text-lg"
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  شاهد أعمالنا
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#0e7c8d] text-[#0e7c8d] hover:bg-[#0e7c8d] hover:text-white font-semibold px-8 py-3 rounded-full text-lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - WATTAR Vector Image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img 
                src={wattarVector} 
                alt="WATTAR Vector" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;