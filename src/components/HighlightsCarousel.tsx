
import { useRef, useEffect, useState } from 'react';

const HighlightsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!sectionRef.current || !scrollContainerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isInSection = sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight;

      if (isInSection && !isScrolling) {
        event.preventDefault();
        setIsScrolling(true);

        const direction = event.deltaY > 0 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(2, currentIndex + direction));

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
          const sectionWidth = scrollContainerRef.current.clientWidth;
          scrollContainerRef.current.scrollTo({
            left: newIndex * sectionWidth,
            behavior: 'smooth'
          });
        }

        // Reset scrolling flag with longer delay for better control
        setTimeout(() => {
          setIsScrolling(false);
          
          // If we're at the last slide and scrolling down, scroll to experience section
          if (newIndex === 2 && direction === 1) {
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
              experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
          // If we're at the first slide and scrolling up, allow normal scroll up
          else if (newIndex === 0 && direction === -1) {
            window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
          }
        }, 800); // Increased delay for more controlled behavior
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentIndex, isScrolling]);

  return (
    <section ref={sectionRef} id="highlights" className="relative h-screen overflow-hidden">
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
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
