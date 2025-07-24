import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full flex flex-col justify-between relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png" 
          alt="Jefferson Mendes" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>
      
      {/* Top Section - CREATIVE • STRATEGIC • LEADERSHIP */}
      <div className="relative z-10 flex justify-center items-start pt-16 sm:pt-20 padding-responsive">
        <span className="inline-block text-gold-accent font-accent text-xs sm:text-sm tracking-widest animate-fadeInSlightlyDelayed text-shadow-subtle">
          CREATIVE • STRATEGIC • LEADERSHIP
        </span>
      </div>

      {/* Middle Section - Main Content */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto padding-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          
          {/* Left Column - Name and Title */}
          <div className="text-left text-white space-y-6">
            {/* Name */}
            <h1 className="font-display animate-fadeInSlightlyDelayed text-shadow-bold" 
                style={{
                  animationDelay: '0.4s',
                  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                  lineHeight: '0.9'
                }}>
              Jefferson
              <span className="block text-gold-accent italic">Mendes</span>
            </h1>
            
            {/* Title */}
            <div className="animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.6s'
            }}>
              <p className="text-responsive-xl font-editorial text-cream-editorial">
                Especialista em Mídia OOH
              </p>
            </div>
          </div>

          {/* Right Column - Impact Phrase */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="glass-effect p-6 lg:p-8 rounded-lg max-w-md">
              <p style={{
                animationDelay: '0.2s'
              }} className="text-responsive-xl font-editorial text-gold-accent leading-relaxed animate-fadeInSlightlyDelayed text-center lg:text-right font-medium">
                Transformando o comum em extraordinário. 
                <span className="block mt-2">Uma campanha OOH por vez.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Links */}
      <div className="relative z-10 flex justify-center items-end pb-8 padding-responsive">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInSlightlyDelayed w-full sm:w-auto" style={{
          animationDelay: '0.8s'
        }}>
          <a 
            href="https://www.linkedin.com/in/jeffersonlmendes/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 border border-cream-editorial/40 hover:border-gold-accent transition-all duration-300 glass-effect hover-lift" 
            aria-label="Visitar LinkedIn de Jefferson Mendes"
          >
            <Linkedin className="w-5 h-5 text-cream-editorial group-hover:text-gold-accent transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-cream-editorial group-hover:text-gold-accent transition-colors">LinkedIn</span>
          </a>

          <a 
            href="mailto:jeffersonlmendes@gmail.com" 
            className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 border border-cream-editorial/40 hover:border-gold-accent transition-all duration-300 glass-effect hover-lift" 
            aria-label="Enviar email para Jefferson Mendes"
          >
            <Mail className="w-5 h-5 text-cream-editorial group-hover:text-gold-accent transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-cream-editorial group-hover:text-gold-accent transition-colors">E-mail</span>
          </a>

          <a 
            href="https://wa.me/5511997941150" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 bg-gold-accent hover:bg-white-pure transition-all duration-300 shadow-premium hover-lift" 
            aria-label="Conversar no WhatsApp com Jefferson Mendes"
          >
            <MessageCircle className="w-5 h-5 text-ink-black transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-ink-black">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;