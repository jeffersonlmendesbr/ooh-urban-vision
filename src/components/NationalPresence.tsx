
import { SectionContainer } from './ui/section-container';

const cityGroups = [
  {
    region: 'NORTE',
    cities: ['Manaus', 'Belém'],
    position: 'absolute top-24 left-8 md:left-16'
  },
  {
    region: 'NORDESTE', 
    cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís'],
    position: 'absolute top-24 right-8 md:right-16'
  },
  {
    region: 'CENTRO-OESTE',
    cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá'],
    position: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  },
  {
    region: 'SUDESTE',
    cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória'],
    position: 'absolute bottom-32 right-8 md:right-16'
  },
  {
    region: 'SUL',
    cities: ['Porto Alegre', 'Florianópolis', 'Curitiba'],
    position: 'absolute bottom-24 left-8 md:left-16'
  }
];

const NationalPresence = () => {
  return (
    <SectionContainer 
      id="nationalpresence" 
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative h-full flex flex-col">
        {/* Section Header - Fixed at top */}
        <div className="text-center pt-12 pb-8 relative z-10">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            ALCANCE NACIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-editorial text-cream-editorial max-w-4xl mx-auto leading-relaxed">
            Planejar mídia é mais do que escolher espaços — é entender as ruas.
          </p>
        </div>
        
        {/* Map Area with City Groups */}
        <div className="flex-1 relative">
          {cityGroups.map((group, index) => (
            <div key={index} className={group.position}>
              <div className="bg-gold-accent/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                <h3 className="font-accent text-sm font-bold text-ink-black mb-3 tracking-wide border-b border-ink-black/20 pb-2">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.cities.map((city, cityIndex) => (
                    <span 
                      key={cityIndex}
                      className="bg-white-pure text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default NationalPresence;
