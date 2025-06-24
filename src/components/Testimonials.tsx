
import { Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jefferson transformou nossa visão sobre mídia OOH. Sua capacidade de traduzir dados em estratégias reais é impressionante.",
      author: "Diretor de Marketing"
    },
    {
      quote: "Um profissional que combina visão técnica com entendimento de negócio. Resultados sempre acima das expectativas.",
      author: "Head de Planejamento"
    }
  ];

  return (
    <section className="py-24 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">O que dizem sobre mim</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-soft-white rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-olive-green fill-current" />
                ))}
              </div>
              <p className="text-dark-charcoal mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="font-medium text-dark-charcoal">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://linkedin.com/in/jefferson-mendes" className="inline-flex items-center text-olive-green font-medium hover:text-dark-charcoal transition-colors">
            Ver todas no LinkedIn
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
