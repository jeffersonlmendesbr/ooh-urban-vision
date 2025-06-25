
import React, { useRef, useEffect, useState } from 'react';

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

const ExperienceCard = ({ experience }: { experience: ExperienceCardProps }) => (
  <div className="min-w-[400px] w-[400px] h-[500px] bg-olive-green border border-soft-white/20 flex flex-col justify-between p-8 group hover:border-soft-white/40 transition-all duration-300">
    {/* Tag */}
    <div className="text-center mb-6">
      <span className="text-xs font-semibold tracking-widest uppercase border border-soft-white px-4 py-2 text-soft-white">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center mb-6">
      <div className="w-32 h-16 flex items-center justify-center">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Content */}
    <div className="text-center text-soft-white">
      <h3 className="font-heading text-xl mb-2 tracking-tight">
        {experience.companyName}
      </h3>
      <p className="text-soft-white/90 mb-2 font-medium text-sm">
        {experience.title}
      </p>
      <p className="text-soft-white/70 text-xs mb-4 tracking-wide">
        {experience.period}
      </p>
      <p className="text-sm text-soft-white/80 leading-relaxed">
        {experience.description}
      </p>
    </div>
  </div>
);

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="experiencias"
      className="h-screen bg-olive-green text-soft-white py-16 px-4 flex flex-col"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <h2 className="font-heading text-4xl md:text-5xl text-soft-white lowercase mb-6">
          a jornada até aqui
        </h2>
        <hr className="border-t border-soft-white/50 w-full" />
      </div>

      {/* Cards Section */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-soft-white/50 bg-olive-green/80 backdrop-blur-sm text-soft-white hover:bg-olive-green hover:border-soft-white transition-all duration-300 ${
              !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            ←
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-soft-white/50 bg-olive-green/80 backdrop-blur-sm text-soft-white hover:bg-olive-green hover:border-soft-white transition-all duration-300 ${
              !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            →
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar px-16"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-5 pb-4">
              {experiencesData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competências Ticker */}
      <div className="mt-16 border-t border-soft-white/30 pt-8">
        <div className="relative overflow-hidden">
          <div className="flex animate-ticker-scroll">
            {/* First set of tags */}
            {competenceTags.map((tag, index) => (
              <span 
                key={`first-${index}`}
                className="text-lg font-medium text-soft-white whitespace-nowrap mx-8 tracking-wide"
              >
                {tag}
              </span>
            ))}
            {/* Duplicate set for seamless loop */}
            {competenceTags.map((tag, index) => (
              <span 
                key={`second-${index}`}
                className="text-lg font-medium text-soft-white whitespace-nowrap mx-8 tracking-wide"
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
