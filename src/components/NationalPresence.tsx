import { SectionContainer } from './ui/section-container';
const cityGroups = [{
  region: 'NORTE',
  cities: ['Manaus', 'Belém']
}, {
  region: 'CENTRO-OESTE',
  cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá']
}, {
  region: 'NORDESTE',
  cities: ['Salvador', 'Recife', 'Maceió', 'Fortaleza', 'João Pessoa', 'Natal', 'São Luís']
}, {
  region: 'SUDESTE',
  cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória']
}, {
  region: 'SUL',
  cities: ['Porto Alegre', 'Florianópolis', 'Curitiba']
}];
const NationalPresence = () => {
  return <SectionContainer id="nationalpresence" className="relative overflow-hidden flex items-center justify-center bg-black" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Título centralizado no topo */}
      <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <span className="inline-block text-gold-accent font-accent text-xs md:text-sm tracking-widest mb-3 md:mb-4">
          ALCANCE NACIONAL
        </span>
        <div className="w-20 md:w-24 h-px bg-gold-accent mx-auto mb-4 md:mb-6"></div>
      </div>

      {/* Layout adaptativo - coluna única em mobile, duas colunas em desktop */}
      <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between items-center px-4 md:px-8 pt-20 md:pt-0 gap-6 lg:gap-0">
        
        {/* Mobile: Layout em coluna única */}
        <div className="flex flex-col lg:hidden space-y-4 w-full max-w-md">
          {/* Subtítulo */}
          <div className="text-cream-editorial text-center">
            <p className="text-sm md:text-base font-editorial leading-relaxed mb-3">Planejar é mais do que escolher espaços, é entender as ruas</p>
            <p className="text-sm md:text-base font-editorial leading-relaxed">Essas são as praças em que eu já estive em visita técnica</p>
          </div>

          {/* Todas as regiões em mobile */}
          {cityGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-gold-accent/95 rounded-lg p-3 shadow-lg">
              <h3 className="font-accent text-xs font-bold text-white mb-2 tracking-wide border-b border-white/20 pb-1">
                {group.region}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.cities.map((city, cityIndex) => (
                  <span key={cityIndex} className="bg-gold-accent text-ink-black px-2 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Layout original em duas colunas */}
        <div className="hidden lg:flex w-full h-full justify-between items-center">
          {/* Coluna esquerda - Subtítulo, Norte e Centro-Oeste */}
          <div className="flex flex-col space-y-12 w-1/3">
          {/* Subtítulo */}
          <div className="text-cream-editorial">
            <p className="text-lg font-editorial leading-relaxed mb-3">Planejar é mais do que escolher espaços, é entender as ruas
Essas são as praças em que eu já estive em visita técnica</p>
            <p className="text-lg font-editorial leading-relaxed">
          </p>
          </div>

          {/* Norte */}
          <div className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
            <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
              NORTE
            </h3>
            <div className="flex flex-wrap gap-2">
              {cityGroups[0].cities.map((city, cityIndex) => <span key={cityIndex} className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                  {city}
                </span>)}
            </div>
          </div>

          {/* Centro-Oeste */}
          <div className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
            <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
              CENTRO-OESTE
            </h3>
            <div className="flex flex-wrap gap-2">
              {cityGroups[1].cities.map((city, cityIndex) => <span key={cityIndex} className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                  {city}
                </span>)}
            </div>
          </div>
        </div>

        {/* Espaço central livre para o mapa */}
        <div className="w-1/3"></div>

        {/* Coluna direita - Nordeste, Sudeste e Sul */}
        <div className="flex flex-col space-y-8 w-1/3">
          {/* Nordeste */}
          <div className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
            <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
              NORDESTE
            </h3>
            <div className="flex flex-wrap gap-2">
              {cityGroups[2].cities.map((city, cityIndex) => <span key={cityIndex} className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                  {city}
                </span>)}
            </div>
          </div>

          {/* Sudeste */}
          <div className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
            <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
              SUDESTE
            </h3>
            <div className="flex flex-wrap gap-2">
              {cityGroups[3].cities.map((city, cityIndex) => <span key={cityIndex} className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                  {city}
                </span>)}
            </div>
          </div>

          {/* Sul */}
          <div className="bg-gold-accent/95 rounded-lg p-4 shadow-lg">
            <h3 className="font-accent text-sm font-bold text-white mb-3 tracking-wide border-b border-white/20 pb-2">
              SUL
            </h3>
            <div className="flex flex-wrap gap-2">
              {cityGroups[4].cities.map((city, cityIndex) => <span key={cityIndex} className="bg-gold-accent text-ink-black px-3 py-1 rounded-full text-xs font-heading font-medium shadow-sm">
                  {city}
                </span>)}
            </div>
          </div>
        </div>
        </div>

      </div>
    </SectionContainer>;
};
export default NationalPresence;