import React from "react";
import NewImage from "@/assets/القسم الجديد.png";
import NewImageDark from "@/assets/القسم الجديد الوضع الليلى.png";

const NewSection: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative py-4 md:py-6 bg-background text-foreground"
      dir="rtl"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-2xl md:text-3xl leading-relaxed font-din_ar space-y-4 text-[hsl(var(--heading-foreground))]">
              <span className="block">نحن نبتكر حلول <span className="font-bold">تصميم وتطوير</span> متقدمة،</span>
              <span className="block">تُمكّن العلامات التجارية من <span className="font-bold">النمو والتأثير</span></span>
              <span className="block">في <span className="font-bold">مستقبل</span> التحول الرقمي بالمملكة</span>
            </p>
          </div>

          {/* Illustration */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            {/* Light mode image */}
            <img
              src={NewImage}
              alt="رسم توضيحي"
              className="w-full h-auto select-none pointer-events-none block dark:hidden"
              loading="lazy"
            />
            {/* Dark mode image */}
            <img
              src={NewImageDark}
              alt="رسم توضيحي"
              className="w-full h-auto select-none pointer-events-none hidden dark:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
