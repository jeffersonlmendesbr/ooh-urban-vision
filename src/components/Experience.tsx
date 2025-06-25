
// Definição da interface para cada experiência
interface ExperienceCardProps {
  tagType: "AGÊNCIA" | "VEÍCULO";
  logoUrl: string;
  companyName: string;
  title: string;
  description: string;
}

const experiencesData: ExperienceCardProps[] = [
  {
    tagType: "AGÊNCIA",
    logoUrl: "/placeholder.svg",
    companyName: "VML",
    title: "Gerente de Mídia",
    description: "Atuação na coordenação das campanhas OOH nacionais para a conta da VIVO, com foco em varejo, lançamentos e inovação."
  },
  {
    tagType: "AGÊNCIA",
    logoUrl: "/placeholder.svg",
    companyName: "Galeria",
    title: "Head de Mídia OOH",
    description: "Liderança da estratégia de mídia Out-of-Home, buscando sinergia entre criatividade e performance para grandes contas."
  },
  {
    tagType: "VEÍCULO",
    logoUrl: "/placeholder.svg",
    companyName: "LATCOM",
    title: "Diretor de Contas",
    description: "Gerenciamento de portfólio de clientes internacionais, adaptando soluções de mídia OOH para o mercado latino-americano."
  },
  {
    tagType: "VEÍCULO",
    logoUrl: "/placeholder.svg",
    companyName: "Eletromidia",
    title: "Gerente de Produto NOALVO",
    description: "Desenvolvimento e gestão da plataforma NOALVO, integrando dados e tecnologia para otimizar campanhas de OOH."
  },
  {
    tagType: "VEÍCULO",
    logoUrl: "/placeholder.svg",
    companyName: "Kallas",
    title: "Coordenador de Mídia",
    description: "Planejamento e execução de campanhas OOH, com foco em resultados e otimização de budget para diversos segmentos."
  }
];

const competenceTags = [
  "Planejamento Nacional OOH",
  "Integração Dados + Mídia",
  "Experiência Multimodal",
  "Liderança de Projetos",
  "Atuação em Agências e Veículos",
  "Conhecimento Prático de Praças Nacionais",
  "Foco em Mensuração e Eficiência"
];

const Experience = () => {
  return (
    <section
      id="experiencias"
      className="h-screen w-screen flex flex-col bg-olive-green text-soft-white relative overflow-hidden" // Removido padding geral da seção, será aplicado nos filhos
    >
      {/* Cabeçalho da Seção */}
      <div className="absolute top-0 left-0 w-full px-8 md:px-12 py-6 md:py-8 z-10">
        <h2 className="font-heading text-3xl md:text-4xl text-soft-white lowercase">
          a jornada até aqui
        </h2>
        <hr className="border-t border-soft-white mt-3 md:mt-4" />
      </div>

      {/* Container Principal (Cards + Espaço para Ticker) */}
      {/* Este container usa flex-grow e permite que o ticker fique no final */}
      <div className="flex-grow flex flex-col pt-24 md:pt-32"> {/* Padding top para não sobrepor header */}

        {/* Container dos Cards Horizontais (ocupa a maior parte do espaço) */}
        <div className="flex-grow flex flex-col justify-center"> {/* Centraliza verticalmente o carrossel de cards */}
          <div
            className="flex overflow-x-auto no-scrollbar py-4 px-8 md:px-12" // Aplicado padding horizontal (px) para simetria
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {experiencesData.map((exp, index) => (
              <div
                key={index}
                // A largura do card agora é (100vw - padding da seção) / 2.5
                // O padding da seção é 8*2 (16) ou 12*2 (24) tailwind units. 1 unit = 0.25rem.
                // Então, para md: (100vw - 6rem) / 2.5. Para sm: (100vw - 4rem) / 2.5
                // Usaremos calc() mas com cuidado para Tailwind JIT
                // Ajustado: o container de scroll agora tem padding-left, então o card pode usar 100vw/2.5 diretamente.
                className="flex-shrink-0 w-[calc(100vw/2.5)] h-[70vh] max-h-[600px] bg-olive-green border-r border-soft-white last:border-r-0 flex flex-col items-center justify-start pt-10 pb-6 px-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Tag AGÊNCIA/VEÍCULO */}
                <div className="mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-semibold tracking-wider uppercase border border-soft-white px-3 py-1 rounded-full">
                    {exp.tagType}
                  </span>
                </div>

                {/* Logo da Empresa */}
                <div className="mb-4 md:mb-6 h-16 md:h-20 flex items-center justify-center">
                  <img
                    src={exp.logoUrl}
                    alt={`${exp.companyName} logo`}
                    className="max-h-full max-w-[150px] md:max-w-[200px] object-contain"
                  />
                </div>

                {/* Cargo (Título) */}
                <h3 className="font-heading text-xl md:text-2xl text-center text-soft-white mb-2 md:mb-3">
                  {exp.title}
                </h3>

                {/* Descrição */}
                <div className="text-center text-sm md:text-base text-gray-200 flex-grow w-full max-w-xs md:max-w-sm overflow-y-auto custom-scrollbar-thin">
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa de Competências (Ticker) */}
        {/* Ocupa a altura definida e fica na parte inferior do container principal */}
        <div className="h-16 md:h-20 w-full bg-olive-green overflow-hidden relative border-t border-soft-white/50"> {/* Adicionada borda superior sutil */}
          <div className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap">
            {/* Conteúdo duplicado para efeito de ticker contínuo */}
            <div className="flex animate-ticker-scroll group-hover:animation-pause">
              {competenceTags.map((tag, index) => (
                <span key={`ticker-1-${index}`} className="text-md md:text-lg font-medium text-soft-white mx-6 md:mx-8">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex animate-ticker-scroll group-hover:animation-pause" aria-hidden="true"> {/* Segunda cópia para loop suave */}
              {competenceTags.map((tag, index) => (
                <span key={`ticker-2-${index}`} className="text-md md:text-lg font-medium text-soft-white mx-6 md:mx-8">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
