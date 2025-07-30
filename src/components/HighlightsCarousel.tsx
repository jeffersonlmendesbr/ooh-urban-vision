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
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    <section
      id="highlights"
      className="relative w-full overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage: 'url(/lovable-uploads/09861dfd-7dd8-4613-b85a-455a319b75f1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-primary">
              Destaque Profissional
            </span>
            <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {slides.map(({ id, Component }) => (
              <CarouselItem key={id} className="pl-4">
                <Card>
                  <CardContent className="flex items-center justify-center p-8 lg:p-12 min-h-[500px]">
                    <Component />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious asChild>
            <Button variant="secondary" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <ArrowLeft />
            </Button>
          </CarouselPrevious>
          <CarouselNext asChild>
            <Button variant="secondary" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight />
            </Button>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
