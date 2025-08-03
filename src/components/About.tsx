import { Quote } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="w-full py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      {/* Background mesh */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Content Column with enhanced styling */}
          <div className="flex flex-col justify-center space-y-10 glass-card maximalist-glow p-12 lg:p-16 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none rounded-xl" />
            <div className="relative z-10">
              <div>
                <h2 className="text-lg font-black tracking-[0.3em] uppercase text-emerald-600 border-2 border-emerald-600 inline-block px-6 py-3 rounded-lg">
                  {t('about.heading')}
                </h2>
                <div className="w-24 h-1 mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full" />
              </div>
              
              <div className="space-y-8 text-xl text-foreground/85 font-medium leading-relaxed tracking-wide">
                <p className="slide-up">{t('about.p1')}</p>
                <p className="slide-up" style={{ animationDelay: '0.2s' }}>{t('about.p2')}</p>
                <p className="slide-up" style={{ animationDelay: '0.4s' }}>{t('about.p3')}</p>
              </div>
            </div>
          </div>
          
          {/* Quote Column with hyper-realistic effects */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative p-12 lg:p-16 glass-card hyper-shadow maximalist-glow">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-emerald-600/30 drop-shadow-lg" />
              <blockquote className="text-4xl lg:text-5xl font-black text-foreground leading-tight mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t('about.quote')}
              </blockquote>
              <div className="text-base font-bold tracking-[0.2em] uppercase text-teal-600">
                {t('about.author')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;