
import { SectionContainer } from './ui/section-container';
import { PageHeader } from './ui/page-header';

const cities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre',
  'Salvador', 'Recife', 'Fortaleza', 'Brasília',
  'Curitiba', 'Manaus', 'Belém', 'Goiânia'
];

const NationalPresence = () => {
  return (
    <SectionContainer id="nationalpresence" className="bg-soft-white">
      <PageHeader 
        title="Presença Nacional" 
        subtitle="Planejar mídia é mais do que escolher espaços — é entender as ruas."
      >
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-warm-beige border border-olive-green rounded-xl p-4 text-center hover-lift">
              <h3 className="font-heading text-dark-charcoal">{city}</h3>
            </div>
          ))}
        </div>
      </PageHeader>
    </SectionContainer>
  );
};

export default NationalPresence;
