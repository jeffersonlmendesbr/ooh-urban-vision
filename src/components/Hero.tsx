
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Personal Photo Background */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png" 
          alt="Jefferson Mendes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-black bg-opacity-40"></div>
      </div>
      
      {/* Content positioned to avoid face overlap */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="text-left text-white-pure lg:pr-8">
            {/* Editorial Quote */}
            <div className="mb-6">
              <span className="inline-block text-gold-accent font-accent text-xs sm:text-sm tracking-widest mb-4 animate-fadeInSlightlyDelayed">
                CREATIVE • STRATEGIC • LEADERSHIP
              </span>
            </div>
            
            {/* Main Impact Phrase */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-editorial text-grey-sophisticated mb-8 leading-relaxed animate-fadeInSlightlyDelayed text-shadow-subtle" style={{
              animationDelay: '0.2s'
            }}>
              Transformando o comum em extraordinário, uma campanha OOH por vez.
            </p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display mb-6 animate-fadeInSlightlyDelayed text-shadow-bold" style={{
              animationDelay: '0.4s'
            }}>
              Jefferson
              <span className="block text-gold-accent italic">Mendes</span>
            </h1>
            
            {/* Title */}
            <div className="mb-8 animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.6s'
            }}>
              <p className="text-lg sm:text-xl font-editorial text-cream-editorial mb-2">
                Especialista em Mídia OOH
              </p>
              <p className="text-sm sm:text-base font-accent text-gold-accent">HÁ 15 ANOS TRADUZINDO DESAFIOS DE MÍDIA EM SOLUÇÕES QUE IMPACTAM</p>
            </div>
          </div>

          {/* Right Column - Contact Links */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:pl-8">
            <div className="flex flex-col gap-4 animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.8s'
            }}>
              <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 border border-grey-sophisticated hover:border-gold-accent transition-all duration-300 hover-lift bg-ink-black bg-opacity-20 backdrop-blur-sm" aria-label="Visitar LinkedIn de Jefferson Mendes">
                <Linkedin className="w-5 h-5 text-grey-sophisticated group-hover:text-gold-accent transition-colors" aria-hidden="true" />
                <span className="font-accent text-sm text-grey-sophisticated group-hover:text-gold-accent transition-colors">LinkedIn</span>
              </a>

              <a href="mailto:jeffersonlmendes@gmail.com" className="group flex items-center space-x-3 px-6 py-3 border border-grey-sophisticated hover:border-gold-accent transition-all duration-300 hover-lift bg-ink-black bg-opacity-20 backdrop-blur-sm" aria-label="Enviar email para Jefferson Mendes">
                <Mail className="w-5 h-5 text-grey-sophisticated group-hover:text-gold-accent transition-colors" aria-hidden="true" />
                <span className="font-accent text-sm text-grey-sophisticated group-hover:text-gold-accent transition-colors">E-mail</span>
              </a>

              <a href="https://wa.me/5511997941150" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 bg-gold-accent hover:bg-white-pure transition-all duration-300 hover-glow" aria-label="Conversar no WhatsApp com Jefferson Mendes">
                <MessageCircle className="w-5 h-5 text-ink-black transition-colors" aria-hidden="true" />
                <span className="font-accent text-sm text-ink-black">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
