
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HighlightsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToSlide = (index: number) => {
    setCurrentIndex(index);
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

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

      {/* Content Container - Sem scroll horizontal */}
      <div className="relative h-full">
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <AfricaDDB />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <Vivo />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
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
