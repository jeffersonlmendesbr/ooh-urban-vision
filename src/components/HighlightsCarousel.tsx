
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
        
        if (direction === 1) {
          // Scrolling down - advance through slides
          if (currentIndex < 2) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            const sectionWidth = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
              left: newIndex * sectionWidth,
              behavior: 'smooth'
            });
          } else {
            // At last slide, go to next section
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
              experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else {
          // Scrolling up - go back through slides
          if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            const sectionWidth = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
              left: newIndex * sectionWidth,
              behavior: 'smooth'
            });
          } else {
            // At first slide, allow normal scroll up
            window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
          }
        }

        // Reset scrolling flag
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
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
