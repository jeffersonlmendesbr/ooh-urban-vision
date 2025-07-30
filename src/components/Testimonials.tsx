
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [isImagePaused, setIsImagePaused] = useState(false);

  const testimonials = [
    {
      quote: "I had the pleasure of working alongside Jefferson at Grupo Kallas for about two years, I guess. While we weren't on the same team directly, I was always impressed by his dedication and work ethic. Jefferson consistently brought a seriousness of purpose to his tasks, ensuring a high level of attention to detail in everything he did. Beyond his technical skills, Jefferson was also a fantastic colleague to have around. He has a positive and easy-going personality that created a welcoming and enjoyable work environment. In short, Jefferson is a highly motivated and detail-oriented professional with a great personality. I highly recommend him for any opportunity that requires someone who excels in their work while fostering a positive team atmosphere.",
      author: "Bruno Portella",
      role: "Solutions Consultant at Google"
    },
    {
      quote: "Um excelente profissional quando o assunto é Mídia OOH. Além de ser competente, dinâmico e dedicado, está sempre atento às novidades do mercado. Como responsável pela área de planejamento de mídia, tem grande habilidade nas negociações e ou soluções de problemas junto aos veículos e clientes. Um grande profissional!",
      author: "Thiago Sancho",
      role: "Diretor Comercial na NEOOH"
    },
    {
      quote: "Um profissional extremamente comprometido e parceiro. Disposto a ajudar sempre e a buscar as melhores soluções e propostas para qualquer desafio. Tivemos alguns bons juntos, que já deixam saudades.",
      author: "Fernanda Zonatti",
      role: "Diretora de Mídia"
    },
    {
      quote: "Trabaje junto con Jefferson varios años y siempre se ha destacado por su proactividad, responsabilidad y trabajo en equipo. Hemos tenido grandes desafíos y en cada uno de éstos logró superar los obstáculos para obtener los mejores resultados. Lo que más destaco de él es su iniciativa y creatividad para dar valor al trabalho de todos los días.",
      author: "Nicolas Matera",
      role: "Business Development en TDT Global"
    },
    {
      quote: "Além de estar sempre atualizado com as novidades do mercado e desenvolver um ótimo trabalho interpessoal, Jefferson possui um perfil de liderança bastante aprimorado. Sabe aliar teorias, práticas e técnicas de forma admirável.",
      author: "Aline Neris",
      role: "Marketing na Mauricio de Souza Produções"
    }
  ];

  const mediaImages = [
    { src: "/lovable-uploads/dec3fb29-745f-4680-b554-9517f53b9241.png", alt: "Edição Extra - Publicidade em transporte público" },
    { src: "/lovable-uploads/74901c2f-77b9-4e9a-ae45-d368d7d1b97a.png", alt: "Democrático OOH - Jefferson Mendes" },
    { src: "/lovable-uploads/6b759b3c-4321-40e8-a1d8-526191189e37.png", alt: "Campanha Wilson - Meio & Mensagem" }
  ];

  useEffect(() => {
    if (isTestimonialPaused) return;
    const interval = setInterval(() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length), 8000);
    return () => clearInterval(interval);
  }, [testimonials.length, isTestimonialPaused]);

  useEffect(() => {
    if (isImagePaused) return;
    const interval = setInterval(() => setCurrentImage(prev => (prev + 1) % mediaImages.length), 5000);
    return () => clearInterval(interval);
  }, [mediaImages.length, isImagePaused]);

  const CarouselControls = ({ onPrev, onNext, count, currentIndex, onIndicatorClick }: any) => (
    <div className="flex flex-col items-center mt-6 space-y-4">
      <div className="flex space-x-3">
        <Button variant="secondary" size="icon" onClick={onPrev} aria-label="Anterior">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Button variant="secondary" size="icon" onClick={onNext} aria-label="Próximo">
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex space-x-2">
        {[...Array(count)].map((_, index) => (
          <button
            key={index}
            onClick={() => onIndicatorClick(index)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              currentIndex === index ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
            )}
            aria-label={`Ir para o item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-0">
            O que dizem sobre mim
          </h2>
          <Button asChild variant="link" className="text-base text-primary">
            <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer">
              Ver todas no LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div onMouseEnter={() => setIsTestimonialPaused(true)} onMouseLeave={() => setIsTestimonialPaused(false)} className="flex flex-col">
            <Card className="flex-1 flex flex-col min-h-[450px] hover:border-primary/50 hover:-translate-y-1">
              <CardHeader>
                <div className="flex" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <blockquote className="italic text-lg text-foreground/80">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex-col items-start">
                <p className="font-bold text-foreground text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-foreground/70">{testimonials[currentTestimonial].role}</p>
              </CardFooter>
            </Card>
            <CarouselControls
              onPrev={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              onNext={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              count={testimonials.length}
              currentIndex={currentTestimonial}
              onIndicatorClick={setCurrentTestimonial}
            />
          </div>

          <div onMouseEnter={() => setIsImagePaused(true)} onMouseLeave={() => setIsImagePaused(false)} className="flex flex-col">
            <Card className="flex-1 flex items-center justify-center p-4 min-h-[450px] hover:border-primary/50 hover:-translate-y-1">
              <img
                src={mediaImages[currentImage].src}
                alt={mediaImages[currentImage].alt}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </Card>
            <CarouselControls
              onPrev={() => setCurrentImage(prev => (prev - 1 + mediaImages.length) % mediaImages.length)}
              onNext={() => setCurrentImage(prev => (prev + 1) % mediaImages.length)}
              count={mediaImages.length}
              currentIndex={currentImage}
              onIndicatorClick={setCurrentImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
