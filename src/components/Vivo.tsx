
import { SectionContainer } from './ui/section-container';

const Vivo = () => {
  return (
    <SectionContainer id="vivo" className="gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo VIVO - Esquerda */}
          <div className="relative">
            <div className="h-[60vh] flex items-center justify-center">
              <img 
                src="/lovable-uploads/f2c837a9-61c0-43b8-85af-ccbe5c6c392a.png" 
                alt="Logo VIVO" 
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
              VIVO
            </h2>
            
            <div className="space-y-6">
              <div className="mb-6">
                <div className="inline-block bg-gold-accent text-ink-black px-4 py-2 font-accent text-sm tracking-wide mb-4">
                  CONTA QUE ATENDO
                </div>
              </div>
              
              <p className="text-lg md:text-xl font-editorial leading-relaxed text-cream-editorial">
                Na VIVO, encontrei um parceiro que valoriza estratégia, inovação e consistência. 
                Atender uma das maiores marcas do país me desafiou a pensar grande, a planejar com 
                profundidade e a buscar impacto real em cada campanha. Estar ao lado da VIVO em 
                diferentes agências, por tantos anos, não é apenas um reconhecimento — é um selo de 
                confiança que impulsiona minha jornada profissional.
              </p>
              
              <div className="border-t border-gold-accent/30 pt-6">
                <blockquote className="text-xl md:text-2xl font-heading text-gold-accent italic leading-tight">
                  "Ao lado da VIVO, aprendi que presença não é estar em todos os lugares — é estar certo no momento certo."
                </blockquote>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-gold-accent/20 border border-gold-accent/50 px-4 py-2">
                  <span className="text-gold-accent font-accent text-xs tracking-wide">DESDE 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Vivo;
