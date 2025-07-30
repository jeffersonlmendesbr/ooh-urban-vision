
const PepeTribute = () => {
  return (
    <section id="pepetribute" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 lg:p-12">
          {/* Header with photo */}
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/2b9c99c8-66c1-4acd-baf4-1baf4182873c.png"
                    alt="Edson Pereira Pinto do Nascimento - Pepê, referência em OOH"
                    loading="lazy"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-lg border border-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Title Section */}
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Uma Homenagem
                </span>
                <div className="flex-1 h-px bg-primary/30"></div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Edson Pereira Pinto do Nascimento
              </h2>
              <p className="text-xl font-medium text-primary/90 italic">
                "Pepê" — como todos no mercado conhecem
              </p>
            </div>
          </div>

          {/* Content in newspaper columns */}
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 text-foreground/80 leading-relaxed">
            {/* First Column */}
            <div className="space-y-6 text-base">
              <p>
                Em cada etapa da minha trajetória, algumas pessoas foram fundamentais. E entre elas, nenhuma teve um papel tão formador, generoso e determinante quanto o Pepê — Edson Pereira Pinto do Nascimento.
              </p>
              
              <p>
                Com ele, aprendi que o planejamento de mídia não é apenas sobre planilhas e formatos — é sobre <span className="text-primary font-semibold">responsabilidade com as marcas</span>, <span className="text-primary font-semibold">respeito com os veículos</span> e <span className="text-primary font-semibold">parceria verdadeira com as agências</span>.
              </p>
              
              <p>
                Foi com o Pepê que aprendi a dar valor ao detalhe, a negociar com critério e a enxergar o OOH como parte estratégica da construção de marca.
              </p>
            </div>

            {/* Second Column */}
            <div className="space-y-6 text-base">
              <p>
                Foi ele quem me apresentou à África, à DM9, aos grandes nomes do mercado. Incentivou minhas visitas técnicas pelo Brasil, me empurrou pra perto dos veículos, me colocou na mesa com diretores, me levou para eventos, leilões, rodadas de negócios.
              </p>
              
              <p>
                Quando saí do Brasil, me apoiou. Quando voltei, me acolheu. Durante 3 anos e 4 meses me deu oportunidades quando eu ainda nem sabia que as merecia.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-bold text-primary mb-2">
                  Mais do que mentor, Pepê foi farol. E ainda é.
                </p>
                <p className="italic text-foreground/70">
                  Essa homenagem é um gesto pequeno diante do impacto gigante que ele teve — e tem — na minha jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PepeTribute;
