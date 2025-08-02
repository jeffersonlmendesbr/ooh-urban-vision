import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Hyper-realistic Effects */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png"
          alt="Foto de Jefferson Mendes especialista em Mídia OOH"
          loading="lazy"
          className="object-cover w-full h-full"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-transparent" />
        {/* Mesh overlay for hyper-realism */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      </div>
      
      {/* Floating geometric elements for maximalism */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-secondary/5 blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/5 blur-2xl float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Enhanced Glass Container with Maximalist Effects */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl p-12 mx-auto text-center glass-card maximalist-glow">
        {/* Inner prismatic effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none rounded-xl" />
        
        {/* Content Layer */}
        <div className="relative z-10">
          {/* Utilitarian Tagline */}
          <span className="mb-8 text-base font-bold tracking-[0.3em] uppercase text-primary slide-up utilitarian-border inline-block px-6 py-2 rounded-lg">
            {t('hero.tagline')}
          </span>

          {/* Hyper-realistic Main Title */}
          <div className="w-full mb-12">
            <div className="text-center text-foreground">
              <h1 className="text-6xl font-black md:text-8xl lg:text-9xl text-glow slide-up relative tracking-tight" style={{ animationDelay: '0.2s' }}>
                Jefferson
                <span className="block text-primary gradient-text text-glow-secondary"> Mendes</span>
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none rounded-lg" />
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-secondary font-bold slide-up text-glow-secondary tracking-wide" style={{ animationDelay: '0.4s' }}>
                {t('hero.title')}
              </p>
            </div>
            <p className="max-w-2xl mx-auto mt-10 text-xl text-center text-foreground/80 md:text-2xl slide-up font-medium leading-relaxed" style={{ animationDelay: '0.6s' }}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Enhanced Social Links with New Design System */}
          <div className="flex flex-wrap items-center justify-center gap-6 slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://www.linkedin.com/in/jeffersonlmendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 space-x-4 interactive maximalist-glow rounded-xl bg-gradient-to-r from-primary to-primary-variant text-white font-bold text-lg tracking-wide shadow-lg"
              aria-label="Visitar LinkedIn de Jefferson Mendes"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
              <span>{t('hero.linkedin')}</span>
            </a>
            <a
              href="mailto:jeffersonlmendes@gmail.com"
              className="flex items-center justify-center px-8 py-4 space-x-4 interactive glass-secondary rounded-xl text-secondary border border-secondary/20 font-bold text-lg tracking-wide"
              aria-label="Enviar email para Jefferson Mendes"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
              <span>{t('hero.email')}</span>
            </a>
            <a
              href="https://wa.me/5511997941150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 space-x-4 interactive utilitarian-border rounded-xl bg-accent/10 text-accent font-bold text-lg tracking-wide hyper-shadow"
              aria-label="Conversar no WhatsApp com Jefferson Mendes"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;