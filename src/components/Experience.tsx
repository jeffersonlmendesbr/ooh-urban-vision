
const Experience = () => {
  const experiences = [
    {
      title: "VML + Galeria",
      subtitle: "Campanhas VIVO",
      description: "Desenvolvimento de estratégias integradas para uma das maiores operadoras do país, focando em soluções inovadoras de mídia exterior."
    },
    {
      title: "Eletromidia",
      subtitle: "NOALVO, Dados, DV360",
      description: "Implementação de soluções baseadas em dados e programática, revolucionando a forma como trabalhamos com audiência e performance."
    },
    {
      title: "Latcom",
      subtitle: "Disney, Spotify",
      description: "Gestão de contas globais com foco em estratégias que conectam marcas internacionais com a realidade do mercado brasileiro."
    },
    {
      title: "Kallas",
      subtitle: "Coordenação e Liderança",
      description: "Desenvolvimento de equipes e processos, estabelecendo metodologias que se tornaram referência no mercado."
    }
  ];

  return (
    <section id="experiencias" className="py-24 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">Experiências</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-soft-white rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-4">{exp.title}</h3>
              <p className="text-olive-green font-medium mb-4">{exp.subtitle}</p>
              <p className="text-dark-charcoal">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
