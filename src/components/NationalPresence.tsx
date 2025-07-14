
import { SectionContainer } from './ui/section-container';

const cityGroups = [
  {
    region: 'NORTE',
    cities: ['Manaus', 'Belém']
  },
  {
    region: 'NORDESTE', 
    cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís']
  },
  {
    region: 'CENTRO-OESTE',
    cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá']
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
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative h-full flex">
        {/* Coluna esquerda - Grupos de cidades */}
        <div className="w-1/3 flex flex-col justify-center space-y-6 pr-8">
          {cityGroups.slice(0, 3).map((group, index) => (
            <div key={index} className="bg-gold-accent/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="font-accent text-sm font-bold text-ink-black mb-3 tracking-wide border-b border-ink-black/20 pb-2">
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

        {/* Coluna central - Cabeçalho e mapa */}
        <div className="w-1/3 flex flex-col justify-center">
          <div className="text-center mb-8">
            <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
              ALCANCE NACIONAL
            </span>
            <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
            <p className="text-xl font-editorial text-cream-editorial max-w-sm mx-auto leading-relaxed">
              Planejar mídia é mais do que escolher espaços — é entender as ruas.
            </p>
          </div>
        </div>

        {/* Coluna direita - Grupos de cidades */}
        <div className="w-1/3 flex flex-col justify-center space-y-6 pl-8">
          {cityGroups.slice(3).map((group, index) => (
            <div key={index} className="bg-gold-accent/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="font-accent text-sm font-bold text-ink-black mb-3 tracking-wide border-b border-ink-black/20 pb-2">
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
    </SectionContainer>
  );
};

export default NationalPresence;
