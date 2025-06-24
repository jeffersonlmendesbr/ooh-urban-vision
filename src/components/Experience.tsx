
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

  const tags = [
    "Planejamento Nacional OOH",
    "Integração Dados + Mídia",
    "Experiência Multimodal",
    "Liderança de Projetos",
    "Atuação em Agências e Veículos",
    "Conhecimento Prático de Praças Nacionais",
    "Foco em Mensuração e Eficiência"
  ];

  return (
    <section id="experiencias" className="py-16 md:py-24 bg-warm-beige min-h-screen flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-grow">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-12 md:mb-16 text-center">
          A jornada até aqui {/* Título atualizado conforme solicitado indiretamente para "Experiências" */}
        </h2>

        {/* Container dos Cards com Scroll Horizontal */}
        {/* Este wrapper vai crescer e permitir que a linha de cards também cresça em altura */}
        <div className="flex-grow flex">
          {/* A linha de cards agora pode se esticar verticalmente. items-stretch é o padrão para align-items em um container flex row, mas ser explícito pode ajudar. */}
          <div className="flex overflow-x-auto pb-8 custom-scrollbar space-x-6 md:space-x-8 w-full items-stretch">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-soft-white rounded-xl p-6 md:p-8 hover-lift flex flex-col flex-shrink-0 w-80 md:w-96" // flex-col aqui é importante para o flex-grow da descrição funcionar
              >
                <h3 className="text-2xl font-heading text-dark-charcoal mb-3 md:mb-4">{exp.title}</h3>
                <p className="text-olive-green font-medium mb-3 md:mb-4">{exp.subtitle}</p>
                <p className="text-dark-charcoal text-sm md:text-base flex-grow">{exp.description}</p> {/* flex-grow para descrição preencher espaço */}
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Tags */}
        <div className="mt-12 md:mt-16"> {/* Espaçamento superior para a seção de tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-olive-green text-soft-white px-4 py-2 rounded-full text-sm md:text-base font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
