
import { SectionContainer } from './ui/section-container';
const AfricaDDB = () => {
  return <SectionContainer id="africaddb" className="gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem do Continente Africano - Esquerda */}
          <div className="relative order-2 lg:order-1">
            <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center">
              <img src="/lovable-uploads/d2c3d440-d9a8-4970-bf0b-b4fbdc110f06.png" alt="Logo África" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Conteúdo - Direita */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Section Label */}
            <div className="mb-6 md:mb-8">
              <span className="inline-block text-gold-accent font-accent text-xs md:text-sm tracking-widest mb-3 md:mb-4">
                DESTAQUE PROFISSIONAL
              </span>
              <div className="w-20 md:w-24 h-px bg-gold-accent"></div>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white-pure mb-6 md:mb-8 leading-none">
              Africa Creative DDB
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="mb-4 md:mb-6">
                <div className="inline-block bg-gold-accent text-ink-black px-3 md:px-4 py-2 font-accent text-xs md:text-sm tracking-wide mb-3 md:mb-4">
                  GERENTE DE MÍDIA
                </div>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl font-editorial leading-relaxed text-cream-editorial">
                Na Africa Creative, encontrei o ambiente perfeito para combinar criatividade e estratégia. 
                Trabalhando ao lado dos melhores profissionais do mercado, desenvolvi campanhas que não apenas 
                entregaram resultados, mas também elevaram o padrão de excelência da agência no Cannes Lions 2025.
              </p>
              
              <div className="border-t border-gold-accent/30 pt-4 md:pt-6">
                <blockquote className="text-lg md:text-xl lg:text-2xl font-heading text-gold-accent italic leading-tight">"Aqui, criatividade e dados não competem, 
eles convivem juntos."</blockquote>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-3 md:pt-4">
                <div className="bg-gold-accent/20 border border-gold-accent/50 px-3 md:px-4 py-2">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">CANNES LIONS 2025</span>
                </div>
                <div className="bg-gold-accent/20 border border-gold-accent/50 px-3 md:px-4 py-2">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">DESDE 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>;
};
export default AfricaDDB;
