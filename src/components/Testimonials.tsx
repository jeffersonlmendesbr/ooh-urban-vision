
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

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
      quote: "Trabaje junto con Jefferson varios años y siempre se ha destacado por su proactividad, responsabilidad y trabajo en equipo. Hemos tenido grandes desafíos y en cada uno de éstos logró superar los obstáculos para obtener los mejores resultados. Lo que más destaco de él es su iniciativa y creatividad para dar valor al trabajo de todos los días.",
      author: "Nicolas Matera",
      role: "Business Development en TDT Global"
    },
    {
      quote: "Além de estar sempre atualizado com as novidades do mercado e desenvolver um ótimo trabalho interpessoal, Jefferson possui um perfil de liderança bastante aprimorado. Sabe aliar teorias, práticas e técnicas de forma admirável.",
      author: "Aline Neris",
      role: "Marketing na Mauricio de Souza Produções"
    }
  ];

  // Imagens placeholder para o lado direito (serão substituídas pelas reais)
  const mediaImages = [
    { src: "/placeholder.svg", alt: "Menção em portal de notícias 1" },
    { src: "/placeholder.svg", alt: "Post em rede social 2" },
    { src: "/placeholder.svg", alt: "Artigo em mídia especializada 3" }
  ];

  // Auto-scroll para testemunhos (8 segundos para leitura confortável)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-scroll para imagens (5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mediaImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mediaImages.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % mediaImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
  };

  return (
    <section id="testimonials" className="h-screen flex flex-col bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        {/* Header com título e link do LinkedIn */}
        <div className="flex justify-between items-center py-8">
          <h2 className="text-4xl font-heading text-dark-charcoal">O que dizem sobre mim</h2>
          <a
            href="https://www.linkedin.com/in/jeffersonlmendes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-olive-green font-medium hover:text-dark-charcoal transition-colors"
            aria-label="Ver todas as recomendações no LinkedIn de Jefferson Mendes"
          >
            Ver todas no LinkedIn
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-12 flex-1 items-center min-h-0">
          {/* Lado Esquerdo - Testemunhos */}
          <div className="relative h-full flex flex-col justify-center">
            <div className="relative bg-soft-white rounded-xl p-8 flex flex-col justify-between" style={{ minHeight: '400px', maxHeight: '500px' }}>
              <div className="overflow-y-auto flex-1">
                <div className="flex mb-6" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" aria-hidden="true" />
                  ))}
                </div>
                
                <p className="text-dark-charcoal mb-6 italic text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>
              
              <div className="mt-4">
                <div className="font-semibold text-dark-charcoal text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-slate-600 mt-1">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Navegação dos testemunhos - posição fixa */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="bg-olive-green text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Testemunho anterior"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-olive-green text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Próximo testemunho"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-olive-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para testemunho ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Lado Direito - Imagens de Mídia */}
          <div className="relative h-full flex flex-col justify-center">
            <div className="relative bg-soft-white rounded-xl p-6 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '500px' }}>
              <div className="relative w-full h-full">
                <img
                  src={mediaImages[currentImage].src}
                  alt={mediaImages[currentImage].alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Navegação das imagens - posição fixa */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevImage}
                className="bg-olive-green text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Imagem anterior"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="bg-olive-green text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Próxima imagem"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicadores das imagens */}
            <div className="flex justify-center space-x-2 mt-4">
              {mediaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? 'bg-olive-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
