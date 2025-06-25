
interface ExperienceCardProps {
  tagType: "AGÊNCIA" | "VEÍCULO";
  logoUrl: string;
  companyName: string;
  title: string;
  description: string;
  period: string;
}

const experiencesData: ExperienceCardProps[] = [
  {
    tagType: "AGÊNCIA",
    logoUrl: "/placeholder.svg",
    companyName: "África DDB",
    title: "Gerente de Mídia",
    description: "Liderança das estratégias de mídia OOH para a VIVO, um dos clientes mais consistentes do meu portfólio. Responsável por campanhas premiadas como 'Wilson', vencedora em Cannes 2025.",
    period: "2023 - atual"
  },
  {
    tagType: "AGÊNCIA",
    logoUrl: "/placeholder.svg",
    companyName: "VML",
    title: "Coordenador de Mídia",
    description: "Coordenação das campanhas OOH da VIVO, incluindo estratégia, execução e acompanhamento de grandes lançamentos, ativações e varejo em todo o Brasil.",
    period: "2021 - 2022"
  },
  {
    tagType: "AGÊNCIA",
    logoUrl: "/placeholder.svg",
    companyName: "Galeria",
    title: "Gerente de Mídia",
    description: "Continuidade da atuação com a conta da VIVO, liderando frentes de mídia exterior em projetos institucionais, segmentados e de cobertura nacional.",
    period: "2022 - 2023"
  },
  {
    tagType: "VEÍCULO",
    logoUrl: "/placeholder.svg",
    companyName: "LATCOM",
    title: "Media Coordinator",
    description: "Coordenação de campanhas OOH para players globais como Disney e Spotify em múltiplos mercados da América Latina.",
    period: "2014 - 2017"
  },
  {
    tagType: "VEÍCULO",
    logoUrl: "/placeholder.svg",
    companyName: "Eletromidia",
    title: "Sales & OOH Product Manager",
    description: "Desenvolvimento e comercialização de produtos OOH inovadores, incluindo a plataforma NOALVO e a integração com DV360.",
    period: "2017 - 2019"
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
      className="min-h-screen bg-olive-green text-soft-white py-16 px-4"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="font-heading text-4xl md:text-5xl text-soft-white lowercase mb-4">
          a jornada até aqui
        </h2>
        <hr className="border-t border-soft-white/50 w-full" />
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="bg-olive-green border border-soft-white/30 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase border border-soft-white px-3 py-1 rounded-full">
                  {exp.tagType}
                </span>
              </div>

              {/* Logo */}
              <div className="mb-4 h-16 flex items-center justify-center">
                <img
                  src={exp.logoUrl}
                  alt={`${exp.companyName} logo`}
                  className="max-h-full max-w-[150px] object-contain"
                />
              </div>

              {/* Company & Title */}
              <h3 className="font-heading text-xl text-center text-soft-white mb-2">
                {exp.companyName}
              </h3>
              <p className="text-center text-soft-white/80 mb-2 font-medium">
                {exp.title}
              </p>
              <p className="text-center text-soft-white/60 text-sm mb-4">
                {exp.period}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-200 text-center leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Stack Layout */}
        <div className="md:hidden space-y-6">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="bg-olive-green border border-soft-white/30 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase border border-soft-white px-3 py-1 rounded-full">
                  {exp.tagType}
                </span>
                <span className="text-soft-white/60 text-sm">{exp.period}</span>
              </div>
              
              <h3 className="font-heading text-xl text-soft-white mb-1">
                {exp.companyName}
              </h3>
              <p className="text-soft-white/80 mb-3 font-medium">
                {exp.title}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Competências Footer */}
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-soft-white/30 pt-8">
          <div className="flex flex-wrap justify-center gap-4">
            {competenceTags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm md:text-base font-medium text-soft-white bg-soft-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
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
