
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
    <section id="contact" className="min-h-screen flex items-center py-24 bg-cream-editorial text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            PILARES DE ATUAÇÃO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-8 leading-none">
            Resumo Profissional
          </h2>
        </div>
        
        {/* Professional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {professionalPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            
            return (
              <div 
                key={index}
                className="text-center p-6 hover:bg-white-pure/50 transition-all duration-300 rounded-lg group"
              >
                <div className="mb-6">
                  <IconComponent 
                    className="w-12 h-12 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" 
                    aria-hidden="true" 
                  />
                  <h3 className="font-heading text-lg font-bold text-gold-accent mb-4 tracking-wide">
                    {pillar.title}
                  </h3>
                </div>
                
                <p className="text-slate-elegant font-editorial text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
