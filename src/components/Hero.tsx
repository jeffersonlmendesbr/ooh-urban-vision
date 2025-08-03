import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Enhanced Background with Hyper-realistic Effects */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-blue-900/10 to-indigo-900/15" />
        {/* Mesh overlay for hyper-realism */}
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.1), transparent),
            radial-gradient(ellipse at bottom right, rgba(99, 102, 241, 0.08), transparent),
            radial-gradient(ellipse at center, rgba(147, 51, 234, 0.06), transparent)
          ` 
        }} />
      </div>
      
      {/* Floating geometric elements for maximalism */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-secondary/5 blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/5 blur-2xl float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Enhanced Glass Container with Maximalist Effects */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl p-12 mx-auto glass-card maximalist-glow">
        {/* Jefferson's Photo - Now in focus */}
        <div className="relative mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png"
              alt="Jefferson Mendes - Especialista em Mídia OOH"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10" />
          </div>
          {/* Floating elements around photo */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-500/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
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

          {/* Enhanced Social Links with Unified Design */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://www.linkedin.com/in/jeffersonlmendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 space-x-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Visitar LinkedIn de Jefferson Mendes"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              <span>{t('hero.linkedin')}</span>
            </a>
            <a
              href="mailto:jeffersonlmendes@gmail.com"
              className="flex items-center justify-center px-6 py-3 space-x-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Enviar email para Jefferson Mendes"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>{t('hero.email')}</span>
            </a>
            <a
              href="https://wa.me/5511997941150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 space-x-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Conversar no WhatsApp com Jefferson Mendes"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;