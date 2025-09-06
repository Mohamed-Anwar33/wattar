import { Button } from "@/components/ui/button";
import wattarVector from "@/assets/WATTAR VECTOR.png";
import heroTextDay from "@/assets/نص الهيرو سيكشن الوضع النهارى.png";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 scroll-mt-32 md:scroll-mt-36 bg-background overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-right" dir="rtl">
            <div className="space-y-3 sm:space-y-6">
              {/* Main Heading (as image) */}
              <div className="w-full">
                <img
                  src={heroTextDay}
                  alt=""
                  className="block ml-auto w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain select-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-2 sm:gap-4 justify-end">
                <Button 
                  className="bg-[#ffeb19] hover:bg-[#ffd700] text-black font-semibold px-2 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-3 rounded-full text-xs sm:text-sm lg:text-lg flex-1"
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
                  className="border-[#0e7c8d] text-[#0e7c8d] hover:bg-[#0e7c8d] hover:text-white font-semibold px-2 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-3 rounded-full text-xs sm:text-sm lg:text-lg flex-1"
                  onClick={() => {
                    // Open WhatsApp with default message
                    const number = '966500000000'; // Replace with your actual WhatsApp number
                    const defaultMsg = 'مرحبًا، أود الاستفسار عن خدماتكم';
                    const url = `https://wa.me/${number}?text=${encodeURIComponent(defaultMsg)}`;
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[680px]">
              <img 
                src={wattarVector} 
                alt="WATTAR Vector Illustration" 
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