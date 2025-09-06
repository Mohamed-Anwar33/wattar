import prosecutionLogo from '../assets/partners/prosecution.png';
import disabilityLogo from '../assets/partners/disability-association.png';
import sallaLogo from '../assets/partners/salla.svg';
import prosecutionJpg from '../../شركاء النجاح/النيابه العامه.jpg';

const partners = [
  {
    id: 2,
    name: "متجر سله",
    logo: sallaLogo,
  },
  {
    id: 3,
    name: "جمعية الإعاقة الحركية",
    logo: disabilityLogo,
  },
  {
    id: 4,
    name: "شريك آخر",
    logo: prosecutionLogo,
  }
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-4 md:py-6 scroll-mt-24 md:scroll-mt-28 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 font-din_ar font-bold">
            شركاء النجاح
          </h2>
        </div>

        {/* Partners Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-card border border-foreground/20 sm:border-2 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 h-20 sm:h-28 md:h-40 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-8 sm:max-h-12 md:max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
