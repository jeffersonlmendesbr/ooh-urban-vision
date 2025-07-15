
import { SectionContainer } from './ui/section-container';

const cityGroups = [
  {
    region: 'NORTE',
    cities: ['Manaus', 'Belém']
  },
  {
    region: 'CENTRO-OESTE',
    cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá']
  },
  {
    region: 'NORDESTE', 
    cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís']
  },
  {
    region: 'SUDESTE',
    cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória']
  },
  {
    region: 'SUL',
    cities: ['Porto Alegre', 'Florianópolis', 'Curitiba']
  }
];

const NationalPresence = () => {
  return (
    <SectionContainer 
      id="nationalpresence" 
      className="relative overflow-hidden flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Título e subtítulo sobrepostos */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
          ALCANCE NACIONAL
        </span>
        <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
        <p className="text-xl font-editorial text-cream-editorial max-w-sm mx-auto leading-relaxed">
          Planejar mídia é mais do que escolher espaços — é entender as ruas.
        </p>
      </div>

      {/* Seção do mapa com grupos de cidades */}
      <div className="flex-1 w-full relative">
        <div className="max-w-7xl mx-auto px-6 relative h-full flex">
          {/* Coluna esquerda - Norte e Centro-Oeste */}
          <div className="w-1/3 flex flex-col justify-center space-y-6 pr-8">
            {cityGroups.slice(0, 2).map((group, index) => (
              <div key={index} className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
                <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.cities.map((city, cityIndex) => (
                    <span 
                      key={cityIndex}
                      className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coluna central - espaço do mapa */}
          <div className="w-1/3">
          </div>

          {/* Coluna direita - Nordeste, Sudeste e Sul */}
          <div className="w-1/3 flex flex-col justify-center space-y-6 pl-8">
            {cityGroups.slice(2).map((group, index) => (
              <div key={index} className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
                <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.cities.map((city, cityIndex) => (
                    <span 
                      key={cityIndex}
                      className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NationalPresence;
