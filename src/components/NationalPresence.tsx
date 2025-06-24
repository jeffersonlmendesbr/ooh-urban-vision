
const NationalPresence = () => {
  const cities = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre',
    'Salvador', 'Recife', 'Fortaleza', 'Brasília',
    'Curitiba', 'Manaus', 'Belém', 'Goiânia'
  ];

  return (
    <section id="presenca" className="py-24 bg-soft-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-8 text-center">Presença Nacional</h2>
        <p className="text-xl text-center text-dark-charcoal mb-16 max-w-3xl mx-auto">
          Planejar mídia é mais do que escolher espaços — é entender as ruas.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-warm-beige border border-olive-green rounded-xl p-4 text-center hover-lift">
              <h3 className="font-heading text-dark-charcoal">{city}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalPresence;
