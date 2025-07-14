
import { SectionContainer } from './ui/section-container';

const cityGroups = [
  {
    region: 'NORTE',
    cities: ['Manaus', 'Belém'],
    position: 'absolute top-20 left-12'
  },
  {
    region: 'NORDESTE', 
    cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís'],
    position: 'absolute top-16 right-20'
  },
  {
    region: 'CENTRO-OESTE',
    cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá'],
    position: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-8'
  },
  {
    region: 'SUDESTE',
    cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória'],
    position: 'absolute bottom-1/3 right-16'
  },
  {
    region: 'SUL',
    cities: ['Porto Alegre', 'Florianópolis', 'Curitiba'],
    position: 'absolute bottom-16 left-20'
  }
];

const NationalPresence = () => {
  return (
    <SectionContainer 
      id="nationalpresence" 
      className="relative overflow-hidden bg-cream-editorial"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png"
          alt="Mapa do Brasil"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col">
        {/* Header fixo no topo */}
        <div className="text-center pt-8 pb-6">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-2">
            ALCANCE NACIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-4"></div>
          <p className="text-lg md:text-xl font-editorial text-ink-black max-w-3xl mx-auto leading-relaxed">
            Planejar mídia é mais do que escolher espaços — é entender as ruas.
          </p>
        </div>
        
        {/* Área do mapa com as cidades */}
        <div className="flex-1 relative min-h-[600px]">
          {cityGroups.map((group, index) => (
            <div key={index} className={group.position}>
              <div className="bg-gold-accent/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[200px]">
                <h3 className="font-accent text-xs font-bold text-ink-black mb-2 tracking-wide border-b border-ink-black/20 pb-1">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {group.cities.map((city, cityIndex) => (
                    <span 
                      key={cityIndex}
                      className="bg-gold-accent text-ink-black px-2 py-1 rounded-full text-xs font-heading font-medium shadow-sm"
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
