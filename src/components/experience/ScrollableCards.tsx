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
              {children}
              {/* Partial card at the end for visual continuity */}
              <div className="min-w-[200px] w-[200px] h-[480px] bg-olive-green border-l border-soft-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};