import React, { useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    carouselApi?.scrollPrev();
  }, [carouselApi]);

  const scrollNext = useCallback(() => {
    carouselApi?.scrollNext();
  }, [carouselApi]);

  return (
    <section
      id="highlights"
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
              Destaque Profissional
            </h2>
            <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
        </div>

        <Carousel
          setApi={setCarouselApi}
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

          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollNext}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
