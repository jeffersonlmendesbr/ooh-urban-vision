
import { Brain, Target, Users, Settings, BarChart3 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    <section id="contact" className="flex flex-col bg-cream-editorial text-ink-black relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-10 md:mb-12">
        <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-2">
          PILARES DE ATUAÇÃO
        </span>
        <div className="w-24 h-px bg-gold-accent mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Desktop Layout: hidden below lg */}
        <div className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Jefferson Mendes Circle - Left */}
          <div className="flex-shrink-0 relative">
            <div className="bg-white-pure border-2 border-gold-accent rounded-full w-56 h-56 flex flex-col items-center justify-center shadow-gold relative">
              <h2 className="font-display text-2xl text-ink-black mb-1 leading-none">
                Jefferson
              </h2>
              <h2 className="font-display text-2xl text-gold-accent mb-3 leading-none">
                Mendes
              </h2>
              <div className="w-12 h-px bg-gold-accent mb-2"></div>
              <p className="font-accent text-xs text-slate-elegant tracking-wider text-center">
                RESUMO PROFISSIONAL
              </p>
            </div>
            
            {/* Central connection lines from Jefferson to each icon */}
            {professionalPillars.map((_, index) => (
              <div 
                key={`line-${index}`}
                className="absolute w-24 h-px bg-gold-accent opacity-60"
                style={{
                  left: '100%',
                  top: '50%',
                  transformOrigin: 'left center',
                  transform: `translateY(-50%) rotate(${(index - 2) * 15}deg)`
                }}
              />
            ))}
          </div>

          {/* Icons Column - Center */}
          <div className="flex flex-col items-center justify-center space-y-5 mx-12">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="bg-white-pure border-2 border-gold-accent rounded-full w-16 h-16 flex items-center justify-center shadow-editorial hover:scale-110 transition-transform duration-300 relative z-10">
                    <IconComponent className="w-7 h-7 text-gold-accent" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-gold-accent tracking-wide text-center mt-1">
                    {pillar.title}
                  </h3>
                  <div className="absolute left-full w-16 h-px bg-gold-accent opacity-60 ml-4 top-1/2 transform -translate-y-1/2"></div>
                </div>
              );
            })}
          </div>

          {/* Descriptions Column - Right */}
          <div className="flex flex-col justify-center space-y-5 flex-1 max-w-md">
            {professionalPillars.map((pillar, index) => (
              <div key={index} className="bg-white-pure border border-gold-accent/20 p-4 rounded-lg shadow-sm hover:shadow-editorial transition-shadow duration-300">
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

        {/* Mobile Layout: visible below lg */}
        <div className="block lg:hidden max-w-2xl mx-auto">
           <Accordion type="single" collapsible className="w-full">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="font-heading text-base text-ink-black hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-white-pure border border-gold-accent/30 rounded-full w-12 h-12 flex items-center justify-center">
                         <IconComponent className="w-6 h-6 text-gold-accent" />
                      </div>
                      <span className="text-left">{pillar.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-elegant font-editorial text-sm leading-relaxed pb-4">
                    {pillar.description}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Contact;
