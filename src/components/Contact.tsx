
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
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 bg-cream-editorial text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            PILARES DE ATUAÇÃO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
        </div>

        {/* Main Layout Container */}
        <div className="relative flex items-center justify-between max-w-6xl mx-auto">
          {/* Jefferson Mendes Circle - Left */}
          <div className="flex-shrink-0">
            <div className="bg-white-pure border-2 border-gold-accent rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-gold relative">
              <h2 className="font-display text-2xl lg:text-3xl text-ink-black mb-2 leading-none">
                Jefferson
              </h2>
              <h2 className="font-display text-2xl lg:text-3xl text-gold-accent mb-3 leading-none">
                Mendes
              </h2>
              <div className="w-12 h-px bg-gold-accent mb-2"></div>
              <p className="font-accent text-xs text-slate-elegant tracking-wider">
                RESUMO PROFISSIONAL
              </p>
            </div>
          </div>

          {/* Icons Column - Center */}
          <div className="flex flex-col items-center space-y-8 mx-16">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              
              return (
                <div key={index} className="relative flex items-center">
                  {/* Connection Line to Jefferson (Left) */}
                  <div className="absolute right-full w-16 h-px bg-gold-accent/30 mr-4"></div>
                  
                  {/* Icon Circle */}
                  <div className="bg-white-pure border-2 border-gold-accent rounded-full w-16 h-16 flex items-center justify-center shadow-editorial hover:scale-110 transition-transform duration-300 relative z-10">
                    <IconComponent className="w-7 h-7 text-gold-accent" />
                  </div>
                  
                  {/* Connection Line to Description (Right) */}
                  <div className="absolute left-full w-16 h-px bg-gold-accent/30 ml-4"></div>
                  
                  {/* Title below icon */}
                  <div className="absolute top-full mt-2 w-24 text-center">
                    <h3 className="font-heading text-xs font-bold text-gold-accent tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Descriptions Column - Right */}
          <div className="flex flex-col space-y-8 flex-1 max-w-md">
            {professionalPillars.map((pillar, index) => (
              <div key={index} className="bg-white-pure border border-gold-accent/20 p-4 rounded-lg shadow-sm">
                <h3 className="font-heading text-sm font-bold text-gold-accent mb-2 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-slate-elegant font-editorial text-xs leading-relaxed">
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
