
import { SectionContainer } from './ui/section-container';

const cityGroups = [
  {
    region: 'NORTE',
    cities: ['Manaus', 'Belém'],
    position: 'absolute top-20 left-20'
  },
  {
    region: 'NORDESTE', 
    cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís'],
    position: 'absolute top-20 right-20'
  },
  {
    region: 'CENTRO-OESTE',
    cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá'],
    position: 'absolute top-1/2 left-20 transform -translate-y-1/2'
  },
  {
    region: 'SUDESTE',
    cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória'],
    position: 'absolute top-1/2 right-20 transform -translate-y-1/2'
  },
  {
    region: 'SUL',
    cities: ['Porto Alegre', 'Florianópolis', 'Curitiba'],
    position: 'absolute bottom-20 left-20'
  }
];

const NationalPresence = () => {
  return (
    <SectionContainer 
      id="nationalpresence" 
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative h-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            ALCANCE NACIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-editorial text-cream-editorial max-w-4xl mx-auto leading-relaxed">
            Planejar mídia é mais do que escolher espaços — é entender as ruas.
          </p>
        </div>
        
        {/* City Groups positioned over the map */}
        {cityGroups.map((group, index) => (
          <div key={index} className={group.position}>
            <div className="bg-gold-accent/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
              <h3 className="font-accent text-sm font-bold text-ink-black mb-3 tracking-wide">
                {group.region}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.cities.map((city, cityIndex) => (
                  <span 
                    key={cityIndex}
                    className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default NationalPresence;
