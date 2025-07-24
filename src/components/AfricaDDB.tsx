
import { SectionContainer } from './ui/section-container';

const AfricaDDB = () => {
  return (
    <SectionContainer id="africaddb" className="gradient-dark">
      <div className="max-w-7xl mx-auto padding-responsive">
        <div className="grid-responsive-2 items-center min-h-[80vh]">
          {/* Imagem do Continente Africano - Esquerda */}
          <div className="relative order-2 lg:order-1">
            <div className="h-[40vh] lg:h-[60vh] flex items-center justify-center">
              <img 
                src="/lovable-uploads/d2c3d440-d9a8-4970-bf0b-b4fbdc110f06.png" 
                alt="Logo África" 
                className="max-w-full max-h-full object-contain hover-glow transition-all duration-500" 
              />
            </div>
          </div>

          {/* Conteúdo - Direita */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Section Label */}
            <div className="mb-6 lg:mb-8">
              <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
                DESTAQUE PROFISSIONAL
              </span>
              <div className="w-20 lg:w-24 h-px bg-gold-accent"></div>
            </div>
            
            <h2 className="font-display text-responsive-4xl lg:text-responsive-5xl text-white-pure mb-6 lg:mb-8 leading-none text-shadow-bold">
              Africa Creative DDB
            </h2>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="mb-4 lg:mb-6">
                <div className="inline-block bg-gold-accent text-ink-black px-4 lg:px-6 py-2 lg:py-3 font-accent text-sm tracking-wide mb-4 shadow-premium hover-lift">
                  GERENTE DE MÍDIA
                </div>
              </div>
              
              <p className="text-responsive-xl font-editorial leading-relaxed text-cream-editorial">
                Na Africa Creative, encontrei o ambiente perfeito para combinar criatividade e estratégia. 
                Trabalhando ao lado dos melhores profissionais do mercado, desenvolvi campanhas que não apenas 
                entregaram resultados, mas também elevaram o padrão de excelência da agência no Cannes Lions 2025.
              </p>
              
              <div className="border-t border-gold-accent/30 pt-6 lg:pt-8">
                <blockquote className="text-responsive-2xl font-heading text-gold-accent italic leading-tight">
                  "Aqui, criatividade e dados não competem, eles convivem juntos."
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 lg:pt-6">
                <div className="glass-effect border border-gold-accent/50 px-4 py-2 hover-lift">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">CANNES LIONS 2025</span>
                </div>
                <div className="glass-effect border border-gold-accent/50 px-4 py-2 hover-lift">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">DESDE 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default AfricaDDB;
