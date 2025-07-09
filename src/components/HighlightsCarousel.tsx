import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AfricaDDB from './AfricaDDB';
import Vivo from './Vivo';
import Eletromidia from './Eletromidia';

const HighlightsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      
      // Calculate current index based on scroll position
      const sectionWidth = clientWidth;
      const newIndex = Math.round(scrollLeft / sectionWidth);
      setCurrentIndex(newIndex);
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
      const sectionWidth = scrollContainerRef.current.clientWidth;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - sectionWidth
        : scrollContainerRef.current.scrollLeft + sectionWidth;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="highlights" className="relative h-screen overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gold-accent/40 bg-ink-black/90 backdrop-blur-sm text-gold-accent flex items-center justify-center transition-all duration-300 hover:bg-gold-accent hover:text-ink-black hover:scale-105 ${
          !canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gold-accent/40 bg-ink-black/90 backdrop-blur-sm text-gold-accent flex items-center justify-center transition-all duration-300 hover:bg-gold-accent hover:text-ink-black hover:scale-105 ${
          !canScrollRight ? 'opacity-30 cursor-not-allowed' : ''
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const sectionWidth = scrollContainerRef.current.clientWidth;
                scrollContainerRef.current.scrollTo({
                  left: index * sectionWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-gold-accent scale-125' 
                : 'bg-gold-accent/40 hover:bg-gold-accent/60'
            }`}
          />
        ))}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="min-w-full snap-start">
          <AfricaDDB />
        </div>
        <div className="min-w-full snap-start">
          <Vivo />
        </div>
        <div className="min-w-full snap-start">
          <Eletromidia />
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;