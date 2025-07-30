import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AfricaDDB from './AfricaDDB';
import Vivo from './Vivo';
import Eletromidia from './Eletromidia';

const slides = [
  { id: 'africa', Component: AfricaDDB },
  { id: 'vivo', Component: Vivo },
  { id: 'eletromidia', Component: Eletromidia },
];

const HighlightsCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="highlights" className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 bg-cream-editorial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-3">
              DESTAQUE PROFISSIONAL
            </span>
            <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map(({ id, Component }) => (
              <CarouselItem key={id}>
                <div className="p-1">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="flex items-center justify-center p-0">
                      <Component />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 bg-gold-accent text-white-pure hover:bg-gold-accent/90 hover:scale-105 disabled:bg-gold-accent/20 disabled:text-gold-accent/40 disabled:cursor-not-allowed" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 bg-gold-accent text-white-pure hover:bg-gold-accent/90 hover:scale-105 disabled:bg-gold-accent/20 disabled:text-gold-accent/40 disabled:cursor-not-allowed" />
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
