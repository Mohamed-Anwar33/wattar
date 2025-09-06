import { useRef, useState, useEffect } from "react";
import { Palette, Monitor, BookOpen } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");

  const categories = ["الكل", "تطوير تجربة المستخدم", "تصميم الهويات البصرية", "تصميم الملفات التعريفية"];

  const filteredItems = selectedCategory === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section 
      ref={sectionRef}
      id="portfolio"
      className="relative py-8 md:py-12 scroll-mt-24 md:scroll-mt-28 bg-background"
    >

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-6 text-foreground font-din_ar font-bold">
            معرض أعمالنا
          </h2>
          
          <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-8 font-din_ar">
            مجموعة مختارة من أفضل أعمالنا التي تحكي قصص نجاح استثنائية
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-4">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative">
                {/* Main Portfolio Card */}
                <div className="bg-card rounded-lg sm:rounded-2xl overflow-hidden border shadow-lg">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-20 sm:h-32 lg:h-48 object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-1 sm:p-2 lg:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="p-0.5 sm:p-1 lg:p-1.5 rounded bg-primary sm:rounded-lg">
                          <Icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-primary-foreground" />
                        </div>
                        <span className="text-[8px] sm:text-[10px] lg:text-xs font-medium px-1 py-0.5 sm:px-2 sm:py-1 rounded-full bg-secondary text-secondary-foreground hidden sm:inline">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-[10px] sm:text-sm lg:text-base font-bold mb-1 sm:mb-2 text-foreground leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-1 sm:mb-3 text-[8px] sm:text-xs lg:text-sm line-clamp-2 sm:line-clamp-3">
                      {item.description.slice(0, 60)}...
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-[7px] sm:text-[9px] lg:text-xs bg-muted text-muted-foreground px-1 py-0.5 sm:px-2 sm:py-1 rounded-sm sm:rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;