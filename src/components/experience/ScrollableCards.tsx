import { ReactNode } from 'react';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

interface ScrollableCardsProps {
  children: ReactNode;
}

export const ScrollableCards = ({ children }: ScrollableCardsProps) => {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scroll } = useScrollNavigation();

  return (
    <div className="flex-1 flex items-center max-w-7xl mx-auto w-full">
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-gold-accent/40 bg-ink-black/90 backdrop-blur-sm text-gold-accent text-xl font-light transition-all duration-300 hover:bg-gold-accent hover:text-ink-black hover:scale-105 ${
            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          ←
        </button>
        
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-gold-accent/40 bg-ink-black/90 backdrop-blur-sm text-gold-accent text-xl font-light transition-all duration-300 hover:bg-gold-accent hover:text-ink-black hover:scale-105 ${
            !canScrollRight ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          →
        </button>

        {/* Scrollable Cards Container */}
        <div className="border-t border-b border-gold-accent/30 py-8">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden no-scrollbar px-20"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-0">
              {children}
              {/* Partial card at the end for visual continuity */}
              <div className="min-w-[200px] w-[200px] h-[580px] bg-gradient-to-r from-gold-accent/20 to-transparent border-l border-gold-accent/20"></div>
            </div>
          </div>
        </div>
        
        {/* Competences Ticker between two lines */}
        <div className="border-t border-gold-accent/40 pt-8 pb-8">
          <div className="relative overflow-hidden">
            <div className="flex animate-ticker-scroll">
              {/* First set of tags */}
              {["Planejamento Nacional OOH", "Integração Dados + Mídia", "Experiência Multimodal", "Liderança de Projetos", "Atuação em Agências e Veículos", "Conhecimento Prático de Praças Nacionais", "Foco em Mensuração e Eficiência"].map((tag, index) => (
                <span 
                  key={`first-${index}`}
                  className="text-lg font-accent text-gold-accent whitespace-nowrap mx-12 tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {["Planejamento Nacional OOH", "Integração Dados + Mídia", "Experiência Multimodal", "Liderança de Projetos", "Atuação em Agências e Veículos", "Conhecimento Prático de Praças Nacionais", "Foco em Mensuração e Eficiência"].map((tag, index) => (
                <span 
                  key={`second-${index}`}
                  className="text-lg font-accent text-gold-accent whitespace-nowrap mx-12 tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-b border-gold-accent/40"></div>
      </div>
    </div>
  );
};