
import { ReactNode } from 'react';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

interface ScrollableCardsProps {
  children: ReactNode;
}

import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ScrollableCards = ({ children }: ScrollableCardsProps) => {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scroll } = useScrollNavigation();

  return (
    <div className="flex-1 flex items-center max-w-full mx-auto w-full min-h-0">
      <div className="relative w-full">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowRight />
        </Button>

        {/* Scrollable Cards Container */}
        <div className="py-8">
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
