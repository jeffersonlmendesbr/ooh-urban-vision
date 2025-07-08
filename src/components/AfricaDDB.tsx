
import { SectionContainer } from './ui/section-container';

const AfricaDDB = () => {
  return (
    <SectionContainer id="africaddb" className="bg-white-pure">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            DESTAQUE PROFISSIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-16 leading-none">
          Africa Creative DDB
        </h2>
        
        <div className="bg-ink-black text-white-pure p-12 md:p-16 shadow-ink hover-lift">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-editorial leading-relaxed mb-8 text-cream-editorial">
              Na Africa Creative, encontrei o ambiente perfeito para combinar criatividade e estratégia. 
              Trabalhando ao lado dos melhores profissionais do mercado, desenvolvi campanhas que não apenas 
              entregaram resultados, mas também elevaram o padrão de excelência da agência no Cannes Lions 2025.
            </p>
            
            <div className="border-t border-gold-accent/30 pt-8">
              <blockquote className="text-2xl md:text-3xl font-heading text-gold-accent italic leading-tight">
                "Aqui, criatividade e dados não competem - eles dançam juntos."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AfricaDDB;
