import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image and a more subtle gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png"
          alt="Foto de Jefferson Mendes especialista em Mídia OOH"
          loading="lazy"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      {/* Main Content Container with Glass Effect */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl p-8 mx-auto text-center glass-card">

        {/* Top Tagline */}
        <span className="mb-6 text-sm font-medium tracking-widest uppercase text-primary fade-in">
          {t('hero.tagline')}
        </span>

        {/* Main Content */}
        <div className="w-full mb-10">
          <div className="text-center text-foreground">
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl text-glow fade-in" style={{ animationDelay: '0.2s' }}>
              Jefferson
              <span className="italic text-primary"> Mendes</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 fade-in" style={{ animationDelay: '0.4s' }}>
              {t('hero.title')}
            </p>
          </div>
          <p className="max-w-md mx-auto mt-8 text-lg text-center text-foreground/70 md:text-xl fade-in" style={{ animationDelay: '0.6s' }}>
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Social Links as Glass Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="https://www.linkedin.com/in/jeffersonlmendes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 space-x-3 transition-all duration-300 transform border rounded-full group hover:scale-105 border-primary/50 bg-primary/10 hover:bg-primary/20"
            aria-label="Visitar LinkedIn de Jefferson Mendes"
          >
            <Linkedin className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-medium text-primary">{t('hero.linkedin')}</span>
          </a>
          <a
            href="mailto:jeffersonlmendes@gmail.com"
            className="flex items-center justify-center px-6 py-3 space-x-3 transition-all duration-300 transform border rounded-full group hover:scale-105 border-foreground/30 bg-foreground/10 hover:bg-foreground/20"
            aria-label="Enviar email para Jefferson Mendes"
          >
            <Mail className="w-5 h-5 text-foreground/80" aria-hidden="true" />
            <span className="font-medium text-foreground/80">{t('hero.email')}</span>
          </a>
          <a
            href="https://wa.me/5511997941150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 space-x-3 transition-all duration-300 transform rounded-full group hover:scale-105 bg-primary hover:bg-primary/80"
            aria-label="Conversar no WhatsApp com Jefferson Mendes"
          >
            <MessageCircle className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
            <span className="font-medium text-primary-foreground">{t('hero.whatsapp')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;