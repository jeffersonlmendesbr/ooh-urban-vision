import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl p-4 sm:p-8 lg:p-12 mx-auto">
        <div className="relative mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png"
              alt="Jefferson Mendes - Especialista em Mídia OOH"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <span className="mb-8 text-base font-bold tracking-[0.3em] uppercase text-primary slide-up inline-block px-6 py-2 rounded-lg">
            {t('hero.tagline')}
          </span>
          <div className="w-full mb-12">
            <div className="text-center text-foreground">
              <h1 className="text-6xl font-black md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] slide-up relative tracking-tight" style={{ animationDelay: '0.2s' }}>
                Jefferson
                <span className="block text-primary gradient-text"> Mendes</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary font-bold slide-up tracking-wide" style={{ animationDelay: '0.4s' }}>
                {t('hero.title')}
              </p>
            </div>
            <p className="max-w-2xl xl:max-w-4xl mx-auto mt-10 text-xl text-center text-foreground/80 md:text-2xl lg:text-3xl xl:text-4xl slide-up font-medium leading-relaxed" style={{ animationDelay: '0.6s' }}>
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://www.linkedin.com/in/jeffersonlmendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 space-x-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              aria-label="Visitar LinkedIn de Jefferson Mendes"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              <span>{t('hero.linkedin')}</span>
            </a>
            <a
              href="mailto:jeffersonlmendes@gmail.com"
              className="flex items-center justify-center px-6 py-3 space-x-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              aria-label="Enviar email para Jefferson Mendes"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>{t('hero.email')}</span>
            </a>
            <a
              href="https://wa.me/5511997941150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 space-x-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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