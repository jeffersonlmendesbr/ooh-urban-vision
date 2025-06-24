
import { Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-warm-beige relative overflow-hidden experimental-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 bg-matte-silver rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-dark-charcoal">JM</span>
            </div>
          </div>
          <div className="text-center lg:text-left animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-heading text-dark-charcoal mb-6 leading-tight">
              A cidade é a tela.<br />
              <span className="text-olive-green">O desafio é capturar</span><br />
              olhares que não pediram por isso.
            </h1>
            <div className="text-2xl font-heading text-olive-green mb-8">
              Jefferson Mendes
            </div>
            <div className="text-lg text-dark-charcoal mb-8">
              Especialista em Mídia OOH • +15 anos de experiência
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://linkedin.com/in/jefferson-mendes" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href="mailto:jeffersonlmendes@gmail.com" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </a>
              <a href="tel:+5511997941150" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +55 11 99794-1150
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
