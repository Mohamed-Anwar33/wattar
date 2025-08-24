import prosecutionLogo from '../assets/partners/prosecution.png';
import disabilityLogo from '../assets/partners/disability-association.png';
import sallaLogo from '../assets/partners/salla.svg';

const partners = [
  {
    id: 1,
    name: "النيابة العامة",
    logo: prosecutionLogo,
  },
  {
    id: 2,
    name: "سله",
    logo: sallaLogo,
  },
  {
    id: 3,
    name: "جمعية الإعاقة الحركية",
    logo: disabilityLogo,
  }
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-16 md:py-24 scroll-mt-24 md:scroll-mt-28 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            شركاء النجاح
          </h2>
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative flex items-center justify-center"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-auto object-contain filter brightness-0 invert opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:invert-0 group-hover:brightness-100"
                />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
