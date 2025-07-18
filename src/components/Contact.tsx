
import { Brain, Target, Users, Settings, BarChart3 } from 'lucide-react';

const Contact = () => {
  const professionalPillars = [
    {
      icon: Brain,
      title: "ESTRATÉGIA",
      description: "Planejamento com olhar 360, integrando o OOH com demais meios no planejamento de mídia. Como resultado, o meio é explorado de forma mais estratégica e relevante dentro da composição."
    },
    {
      icon: Target,
      title: "TÁTICA",
      description: "Relacionamento forte com os players regionais, rentabilizando as negociações e elencando sempre pontos de mídia eficazes para cumprir com o objetivo de cada plano."
    },
    {
      icon: Users,
      title: "GESTÃO",
      description: "Acompanhamento de entregas financeiras, gestão de equipe e integração da equipe com demais departamentos e suas demandas."
    },
    {
      icon: Settings,
      title: "OPERAÇÃO",
      description: "Acompanhamento do processo operacional completo, da emissão de autorizações, relatoria, checking fotográfico e pós-vendas com mensuração."
    },
    {
      icon: BarChart3,
      title: "MENSURAÇÃO",
      description: "Uso de ferramentas próprias e sistemas de métricas para entrega de resultados de acordo com a necessidade de KPIs do cliente."
    }
  ];

  return (
    <section id="contact" className="h-screen flex flex-col bg-cream-editorial text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
          PILARES DE ATUAÇÃO
        </span>
        <div className="w-24 h-px bg-gold-accent mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="relative flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Jefferson Mendes Circle - Left */}
          <div className="flex-shrink-0">
            <div className="bg-white-pure border-2 border-gold-accent rounded-full w-72 h-72 flex flex-col items-center justify-center shadow-gold relative">
              <h2 className="font-display text-3xl lg:text-4xl text-ink-black mb-2 leading-none">
                Jefferson
              </h2>
              <h2 className="font-display text-3xl lg:text-4xl text-gold-accent mb-4 leading-none">
                Mendes
              </h2>
              <div className="w-16 h-px bg-gold-accent mb-3"></div>
              <p className="font-accent text-sm text-slate-elegant tracking-wider">
                RESUMO PROFISSIONAL
              </p>
            </div>
          </div>

          {/* Icons Column - Center */}
          <div className="flex flex-col items-center space-y-8 mx-20">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Connection Line to Jefferson (Left) */}
                  <div className="absolute right-full w-20 h-px bg-gold-accent/40 mr-6 top-1/2 transform -translate-y-1/2"></div>
                  
                  {/* Icon Circle */}
                  <div className="bg-white-pure border-2 border-gold-accent rounded-full w-20 h-20 flex items-center justify-center shadow-editorial hover:scale-110 transition-transform duration-300 relative z-10 mb-3">
                    <IconComponent className="w-8 h-8 text-gold-accent" />
                  </div>
                  
                  {/* Connection Line to Description (Right) */}
                  <div className="absolute left-full w-20 h-px bg-gold-accent/40 ml-6 top-1/2 transform -translate-y-1/2"></div>
                  
                  {/* Title centered below icon */}
                  <h3 className="font-heading text-sm font-bold text-gold-accent tracking-wide text-center">
                    {pillar.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Descriptions Column - Right */}
          <div className="flex flex-col space-y-8 flex-1 max-w-lg">
            {professionalPillars.map((pillar, index) => (
              <div key={index} className="bg-white-pure border border-gold-accent/20 p-6 rounded-lg shadow-sm hover:shadow-editorial transition-shadow duration-300">
                <h3 className="font-heading text-base font-bold text-gold-accent mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-slate-elegant font-editorial text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
