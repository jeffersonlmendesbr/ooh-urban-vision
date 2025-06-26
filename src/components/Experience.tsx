
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
  <div className="min-w-[420px] w-[420px] h-[480px] bg-olive-green text-soft-white border border-soft-white/20 flex flex-col justify-between p-8 transition-all duration-300 hover:border-soft-white/40 group">
    {/* Tag Section */}
    <div className="text-center mb-8">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase border border-soft-white/60 px-6 py-2 text-soft-white/90 group-hover:border-soft-white group-hover:text-soft-white transition-all duration-300">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center mb-8">
      <div className="w-40 h-20 flex items-center justify-center">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="text-center">
      <h3 className="font-heading text-xl mb-3 tracking-tight text-soft-white">
        {experience.title}
      </h3>
      <p className="text-soft-white/70 text-sm mb-6 tracking-wide font-medium">
        {experience.period}
      </p>
      <p className="text-sm text-soft-white/85 leading-relaxed line-height-1.6">
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
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440; // Card width + gap
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
      id="experience"
      className="h-screen bg-olive-green flex flex-col justify-center py-16 px-8"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <h2 className="font-heading text-5xl text-soft-white lowercase tracking-tight mb-8 leading-tight">
          a jornada até aqui
        </h2>
        <div className="border-t border-soft-white/30 w-full"></div>
      </div>

      {/* Cards Section */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full">
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-soft-white/40 bg-olive-green/90 backdrop-blur-sm text-soft-white text-lg font-light transition-all duration-300 hover:bg-olive-green hover:border-soft-white/80 hover:scale-105 ${
              !canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            ←
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-soft-white/40 bg-olive-green/90 backdrop-blur-sm text-soft-white text-lg font-light transition-all duration-300 hover:bg-olive-green hover:border-soft-white/80 hover:scale-105 ${
              !canScrollRight ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            →
          </button>

          {/* Scrollable Cards Container */}
          <div className="border-t border-b border-soft-white/20 py-8">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden no-scrollbar px-20"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex gap-0">
                {experiencesData.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
                {/* Partial card at the end for visual continuity */}
                <div className="min-w-[200px] w-[200px] h-[480px] bg-olive-green border-l border-soft-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competências Ticker */}
      <div className="mt-16 max-w-7xl mx-auto w-full">
        <div className="border-t border-soft-white/30 pt-8">
          <div className="relative overflow-hidden">
            <div className="flex animate-ticker-scroll">
              {/* First set of tags */}
              {competenceTags.map((tag, index) => (
                <span 
                  key={`first-${index}`}
                  className="text-lg font-medium text-soft-white/80 whitespace-nowrap mx-12 tracking-wide"
                >
                  {tag}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {competenceTags.map((tag, index) => (
                <span 
                  key={`second-${index}`}
                  className="text-lg font-medium text-soft-white/80 whitespace-nowrap mx-12 tracking-wide"
                >
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
