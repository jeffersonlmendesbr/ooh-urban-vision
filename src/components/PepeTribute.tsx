
import { SectionContainer } from './ui/section-container';

const PepeTribute = () => {
  return (
    <SectionContainer id="pepetribute" className="gradient-about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex flex-col h-full py-8">
          {/* Header with photo */}
          <div className="flex items-start gap-8 mb-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gold-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/2b9c99c8-66c1-4acd-baf4-1baf4182873c.png"
                    alt="Edson Pereira Pinto do Nascimento - Pepê"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-editorial border border-gold-accent/20"
                  />
                </div>
              </div>
            </div>

            {/* Title Section */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <span className="inline-block text-gold-accent font-accent text-xs tracking-widest">
                  UMA HOMENAGEM
                </span>
                <div className="flex-1 h-px bg-gold-accent/30"></div>
              </div>
              
              <h2 className="font-display text-2xl lg:text-3xl text-ink-black leading-tight">
                Edson Pereira Pinto do Nascimento
              </h2>
              <p className="text-lg font-heading text-gold-accent italic">
                "Pepê" — como todos no mercado conhecem
              </p>
            </div>
          </div>

          {/* Content in newspaper columns */}
          <div className="flex-1 grid lg:grid-cols-2 gap-8 text-ink-black font-editorial leading-relaxed">
            {/* First Column */}
            <div className="space-y-4 text-sm lg:text-base">
              <p>
                Em cada etapa da minha trajetória, algumas pessoas foram fundamentais. E entre elas, nenhuma teve um papel tão formador, generoso e determinante quanto o Pepê — Edson Pereira Pinto do Nascimento.
              </p>
              
              <p>
                Com ele, aprendi que o planejamento de mídia não é apenas sobre planilhas e formatos — é sobre <span className="text-gold-accent font-medium">responsabilidade com as marcas</span>, <span className="text-gold-accent font-medium">respeito com os veículos</span> e <span className="text-gold-accent font-medium">parceria verdadeira com as agências</span>.
              </p>
              
              <p>
                Foi com o Pepê que aprendi a dar valor ao detalhe, a negociar com critério e a enxergar o OOH como parte estratégica da construção de marca.
              </p>
            </div>

            {/* Second Column */}
            <div className="space-y-4 text-sm lg:text-base">
              <p>
                Foi ele quem me apresentou à África, à DM9, aos grandes nomes do mercado. Incentivou minhas visitas técnicas pelo Brasil, me empurrou pra perto dos veículos, me colocou na mesa com diretores, me levou para eventos, leilões, rodadas de negócios.
              </p>
              
              <p>
                Quando saí do Brasil, me apoiou. Quando voltei, me acolheu. Durante 3 anos e 4 meses me deu oportunidades quando eu ainda nem sabia que as merecia.
              </p>
              
              <div className="bg-gold-accent/10 p-4 rounded-lg border-l-4 border-gold-accent">
                <p className="text-lg font-heading text-gold-accent mb-2">
                  Mais do que mentor, Pepê foi farol. E ainda é.
                </p>
                <p className="italic text-sm opacity-90">
                  Essa homenagem é um gesto pequeno diante do impacto gigante que ele teve — e tem — na minha jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PepeTribute;
