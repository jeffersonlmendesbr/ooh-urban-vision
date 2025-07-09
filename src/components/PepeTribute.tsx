
import { SectionContainer } from './ui/section-container';

const PepeTribute = () => {
  return (
    <SectionContainer id="pepetribute" className="gradient-about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative">
                <img
                  src="/lovable-uploads/2b9c99c8-66c1-4acd-baf4-1baf4182873c.png"
                  alt="Edson Pereira Pinto do Nascimento - Pepê"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-editorial border border-gold-accent/20 group-hover:shadow-gold transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <span className="inline-block text-gold-accent font-accent text-sm tracking-widest">
                UMA HOMENAGEM
              </span>
              <div className="w-24 h-px bg-gold-accent"></div>
            </div>

            {/* Name and Title */}
            <div className="space-y-3">
              <h2 className="font-display text-4xl lg:text-5xl text-ink-black leading-tight">
                Edson Pereira Pinto do Nascimento
              </h2>
              <p className="text-xl font-heading text-gold-accent italic">
                "Pepê" — como todos no mercado conhecem
              </p>
            </div>

            {/* Tribute Text */}
            <div className="space-y-6 text-ink-black font-editorial text-lg leading-relaxed">
              <p>
                Em cada etapa da minha trajetória, algumas pessoas foram fundamentais. E entre elas, nenhuma teve um papel tão formador, generoso e determinante quanto o Pepê — Edson Pereira Pinto do Nascimento.
              </p>
              
              <p>
                Com ele, aprendi que o planejamento de mídia não é apenas sobre planilhas e formatos — é sobre <span className="text-gold-accent font-medium">responsabilidade com as marcas</span>, <span className="text-gold-accent font-medium">respeito com os veículos</span> e <span className="text-gold-accent font-medium">parceria verdadeira com as agências</span>. Foi com o Pepê que aprendi a dar valor ao detalhe, a negociar com critério e a enxergar o OOH como parte estratégica da construção de marca.
              </p>
              
              <p>
                Foi ele quem me apresentou à África, à DM9, aos grandes nomes do mercado. Incentivou minhas visitas técnicas pelo Brasil, me empurrou pra perto dos veículos, me colocou na mesa com diretores, me levou para eventos, leilões, rodadas de negócios.
              </p>
              
              <p>
                Quando saí do Brasil, me apoiou. Quando voltei, me acolheu. Durante 3 anos e 4 meses me deu oportunidades quando eu ainda nem sabia que as merecia.
              </p>
              
              <p className="text-xl font-heading text-gold-accent">
                Mais do que mentor, Pepê foi farol. E ainda é.
              </p>
              
              <p className="italic opacity-90">
                Essa homenagem é um gesto pequeno diante do impacto gigante que ele teve — e tem — na minha jornada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PepeTribute;
