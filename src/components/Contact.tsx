
import { Brain, Target, Users, Settings, BarChart3 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
              Pilares de Atuação
            </h2>
            <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
          </div>

          <Accordion type="single" collapsible className="w-full">
            {professionalPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center">
                         <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-left tracking-widest">{pillar.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
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
