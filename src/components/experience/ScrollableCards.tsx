
import { ReactNode } from 'react';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

interface ScrollableCardsProps {
  children: ReactNode;
}

export const ScrollableCards = ({ children }: ScrollableCardsProps) => {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scroll } = useScrollNavigation();

  return (
    <div className="flex-1 flex items-center max-w-7xl mx-auto w-full min-h-0">
      <div className="relative w-full">
        {/* Navigation Buttons - sempre visíveis, sem bordas, brancos com ícone dourado */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white-pure text-gold-accent text-xl font-light transition-all duration-300 hover:scale-105 ${
            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          ←
        </button>
        
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white-pure text-gold-accent text-xl font-light transition-all duration-300 hover:scale-105 ${
            !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          →
        </button>

        {/* Scrollable Cards Container */}
        <div className="py-4">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden no-scrollbar px-20"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6">
              {children}
              {/* Partial card at the end for visual continuity */}
              <div className="min-w-[200px] w-[200px] h-[600px] bg-gradient-to-r from-gold-accent/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
