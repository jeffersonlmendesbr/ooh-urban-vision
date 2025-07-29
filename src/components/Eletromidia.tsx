import { SectionContainer } from './ui/section-container';

const Eletromidia = () => {
  return (
    <SectionContainer 
      id="eletromidia" 
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/09861dfd-7dd8-4613-b85a-455a319b75f1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo Eletromidia - Esquerda */}
          <div className="relative">
            <div className="h-[60vh] flex items-center justify-center">
              <img 
                src="/lovable-uploads/ae3d4628-d043-4ed3-b3ee-fb59396fef58.png" 
                alt="Logo Eletromidia" 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          </div>

          {/* Conteúdo - Direita */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="mb-8">
              <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
                DESTAQUE PROFISSIONAL
              </span>
              <div className="w-24 h-px bg-gold-accent"></div>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white-pure mb-8 leading-none">
              Eletromidia
            </h2>
            
            <div className="space-y-6">
              <div className="mb-6">
                <div className="inline-block bg-gold-accent text-ink-black px-4 py-2 font-accent text-sm tracking-wide mb-4">
                  EMBAIXADOR
                </div>
              </div>
              
              <p className="text-lg md:text-xl font-editorial leading-relaxed text-cream-editorial">
                Junto com a Eletromidia, encontrei um reconhecimento que vai além dos resultados: 
                Ser Embaixador da marca em 2025. Escolhido para representar um dos principais players 
                de OOH do país é um reflexo da minha trajetória e do meu compromisso com esse meio. 
                Mais do que uma homenagem, esse título reforça minha visão de que a rua é um espaço de 
                conexão viva entre marcas e pessoas — e que planejar OOH é ocupar a cidade com intenção 
                e inteligência.
              </p>
              
              <div className="border-t border-gold-accent/30 pt-6">
                <blockquote className="text-xl md:text-2xl font-heading text-gold-accent italic leading-tight">
                  "Agora represento a mídia que me representa."
                </blockquote>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-gold-accent/20 border border-gold-accent/50 px-4 py-2">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">EMBAIXADOR ELETROMIDIA ADS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Eletromidia;