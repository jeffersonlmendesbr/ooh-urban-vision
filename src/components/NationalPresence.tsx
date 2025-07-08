
import { SectionContainer } from './ui/section-container';
import { PageHeader } from './ui/page-header';

const cities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre',
  'Salvador', 'Recife', 'Fortaleza', 'Brasília',
  'Curitiba', 'Manaus', 'Belém', 'Goiânia'
];

const NationalPresence = () => {
  return (
    <SectionContainer id="nationalpresence" className="gradient-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            ALCANCE NACIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white-pure mb-8 leading-none">
          Presença Nacional
        </h2>
        
        <p className="text-xl md:text-2xl font-editorial text-cream-editorial mb-16 max-w-4xl mx-auto leading-relaxed">
          Planejar mídia é mais do que escolher espaços — é entender as ruas.
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-white-pure border border-gold-accent/20 p-6 text-center hover-lift hover-glow transition-all duration-300 group">
              <h3 className="font-heading text-lg text-ink-black group-hover:text-gold-accent transition-colors">{city}</h3>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default NationalPresence;
