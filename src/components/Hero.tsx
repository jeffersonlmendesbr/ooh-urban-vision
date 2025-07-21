import { Linkedin, Mail, MessageCircle } from 'lucide-react';
const Hero = () => {
  return <section id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-ink-black">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black via-charcoal-deep to-slate-elegant opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 text-center text-white-pure max-w-5xl mx-auto px-6">
        {/* Editorial Quote */}
        <div className="mb-8">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4 animate-fadeInSlightlyDelayed">
            CREATIVE • STRATEGIC • LEADERSHIP
          </span>
        </div>
        
        {/* Main Impact Phrase */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-editorial text-grey-sophisticated mb-12 leading-relaxed animate-fadeInSlightlyDelayed max-w-4xl mx-auto text-shadow-subtle" style={{
        animationDelay: '0.2s'
      }}>
          Transformando o comum em extraordinário, uma campanha OOH por vez.
        </p>
        
        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display mb-8 animate-fadeInSlightlyDelayed text-shadow-bold" style={{
        animationDelay: '0.4s'
      }}>
          Jefferson
          <span className="block text-gold-accent italic">Mendes</span>
        </h1>
        
        {/* Title */}
        <div className="mb-16 animate-fadeInSlightlyDelayed" style={{
        animationDelay: '0.6s'
      }}>
          <p className="text-xl md:text-2xl font-editorial text-cream-editorial mb-2">
            Especialista em Mídia OOH
          </p>
          <p className="text-lg md:text-xl font-accent text-gold-accent">HÁ 15 ANOS TRADUZINDO DESAFIOS DE MÍDIA EM SOLUÇÕES QUE IMPACTAM</p>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fadeInSlightlyDelayed" style={{
        animationDelay: '0.8s'
      }}>
          <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 border border-grey-sophisticated hover:border-gold-accent transition-all duration-300 hover-lift" aria-label="Visitar LinkedIn de Jefferson Mendes">
            <Linkedin className="w-5 h-5 text-grey-sophisticated group-hover:text-gold-accent transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-grey-sophisticated group-hover:text-gold-accent transition-colors">LinkedIn</span>
          </a>

          <a href="mailto:jeffersonlmendes@gmail.com" className="group flex items-center space-x-3 px-6 py-3 border border-grey-sophisticated hover:border-gold-accent transition-all duration-300 hover-lift" aria-label="Enviar email para Jefferson Mendes">
            <Mail className="w-5 h-5 text-grey-sophisticated group-hover:text-gold-accent transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-grey-sophisticated group-hover:text-gold-accent transition-colors">E-mail</span>
          </a>

          <a href="https://wa.me/5511997941150" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 bg-gold-accent hover:bg-white-pure transition-all duration-300 hover-glow" aria-label="Conversar no WhatsApp com Jefferson Mendes">
            <MessageCircle className="w-5 h-5 text-ink-black transition-colors" aria-hidden="true" />
            <span className="font-accent text-sm text-ink-black">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;