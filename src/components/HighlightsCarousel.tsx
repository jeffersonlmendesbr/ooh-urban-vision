
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

const HighlightsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollContainerRef, canScrollLeft, canScrollRight, scroll } = useScrollNavigation();

  const navigateToSlide = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigateToSlide(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 2) {
      navigateToSlide(currentIndex + 1);
    }
  };

  return (
    <section id="highlights" className="relative h-screen overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 ${
          currentIndex === 0
            ? 'bg-gold-accent/20 text-gold-accent/40 cursor-not-allowed'
            : 'bg-gold-accent/80 text-white-pure hover:bg-gold-accent hover-scale'
        }`}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === 2}
        className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 ${
          currentIndex === 2
            ? 'bg-gold-accent/20 text-gold-accent/40 cursor-not-allowed'
            : 'bg-gold-accent/80 text-white-pure hover:bg-gold-accent hover-scale'
        }`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => navigateToSlide(index)}
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
        className="flex h-full overflow-x-hidden overflow-y-hidden no-scrollbar snap-x snap-mandatory"
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

// Import components
import AfricaDDB from './AfricaDDB';
import Vivo from './Vivo';
import Eletromidia from './Eletromidia';

export default HighlightsCarousel;
