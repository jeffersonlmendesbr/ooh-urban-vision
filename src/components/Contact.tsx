
import { Brain, Target, Users, Settings, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

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
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            PILARES DE ATUAÇÃO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
        </div>
        
        {/* Circular Layout Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Center Element - Jefferson Mendes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white-pure border-2 border-gold-accent rounded-full w-72 h-72 flex flex-col items-center justify-center shadow-gold z-10">
              <h2 className="font-display text-3xl lg:text-4xl text-ink-black mb-2 leading-none">
                Jefferson
              </h2>
              <h2 className="font-display text-3xl lg:text-4xl text-gold-accent mb-3 leading-none">
                Mendes
              </h2>
              <div className="w-16 h-px bg-gold-accent mb-2"></div>
              <p className="font-accent text-xs text-slate-elegant tracking-wider">
                RESUMO PROFISSIONAL
              </p>
            </div>
          </div>

          {/* Circular Icons */}
          <div className="relative w-full aspect-square max-w-3xl mx-auto">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              // Calculate position for each icon in a circle
              const angle = (index * 360) / professionalPillars.length - 90; // Start from top
              const radius = 45; // Percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              
              return (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`
                  }}
                  onMouseEnter={() => setSelectedPillar(index)}
                  onMouseLeave={() => setSelectedPillar(null)}
                >
                  {/* Icon Circle */}
                  <div className={`
                    w-20 h-20 bg-white-pure border-2 border-gold-accent rounded-full 
                    flex items-center justify-center shadow-editorial
                    transition-all duration-300 group-hover:scale-125 group-hover:shadow-gold
                    ${selectedPillar === index ? 'scale-125 shadow-gold bg-gold-accent' : ''}
                  `}>
                    <IconComponent 
                      className={`w-8 h-8 transition-colors duration-300 ${
                        selectedPillar === index ? 'text-white-pure' : 'text-gold-accent'
                      }`}
                      aria-hidden="true" 
                    />
                  </div>
                  
                  {/* Title below icon */}
                  <div className="mt-3 w-24 text-center">
                    <h3 className="font-heading text-sm font-bold text-gold-accent tracking-wide leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description Panel */}
          {selectedPillar !== null && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-8 w-full max-w-2xl">
              <div className="bg-white-pure border border-gold-accent/20 p-6 rounded-lg shadow-editorial animate-fade-in">
                <h3 className="font-heading text-lg font-bold text-gold-accent mb-3 tracking-wide">
                  {professionalPillars[selectedPillar].title}
                </h3>
                <p className="text-slate-elegant font-editorial text-sm leading-relaxed">
                  {professionalPillars[selectedPillar].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
