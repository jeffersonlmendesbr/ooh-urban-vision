import { Quote } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="w-full py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-8 glass-card p-8 lg:p-12 h-full">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
                {t('about.heading')}
              </h2>
              <div className="w-16 h-0.5 mt-2 bg-primary" />
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </div>
          
          {/* Quote Column */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative p-8 lg:p-12 glass-card">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                {t('about.quote')}
              </blockquote>
              <div className="text-sm font-semibold tracking-widest uppercase text-primary">
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