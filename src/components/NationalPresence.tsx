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
  return <SectionContainer id="nationalpresence" className="relative overflow-hidden flex items-center justify-center" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1a1a1a'
  }}>
      {/* Título centralizado no topo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
          ALCANCE NACIONAL
        </span>
        <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
      </div>

      {/* Layout em duas colunas deixando o centro livre para o mapa */}
      <div className="w-full h-full flex justify-between items-center px-8">
        
        {/* Coluna esquerda - Subtítulo, Norte e Centro-Oeste */}
        <div className="flex flex-col space-y-12 w-1/3">
          {/* Subtítulo */}
          <div className="text-cream-editorial">
            <p className="text-lg font-editorial leading-relaxed mb-3">
              Planejar é mais do que escolher espaços — é entender as ruas
            </p>
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
    </SectionContainer>;
};
export default NationalPresence;