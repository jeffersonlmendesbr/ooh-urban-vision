import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems: FAQItem[] = [
    {
      question: "Por que você escolheu o OOH?",
      answer: "OOH é o meio mais urbano, presente e humano da mídia. Ele exige visão estratégica, domínio territorial e sensibilidade cultural — e isso combina com meu estilo. OOH é onde minha cabeça pensa e meu coração vibra."
    },
    {
      question: "Qual foi um desafio marcante que você superou?",
      answer: "Implantar a operação OOH da Vivo na Galeria do zero foi um marco. Estruturei processos, negociações e entregas com excelência desde o início. Também reassumi a operação da conta na Africa com alta performance."
    },
    {
      question: "Como você descreve seu estilo de liderança?",
      answer: "Sou acessível e estratégico. Gosto de ouvir, distribuir responsabilidades com clareza e incentivar a autonomia. Acredito na liderança pelo exemplo e na construção de relações duradouras."
    },
    {
      question: "Você se atualiza com frequência?",
      answer: "Sim, participo regularmente de palestras, eventos e simpósios voltados à comunicação e mídia, especialmente no universo OOH. Além disso, acompanho de perto movimentos do mercado por meio de plataformas como o LinkedIn, seguindo estrategicamente profissionais e empresas que têm se destacado na transformação do setor."
    },
    {
      question: "Como você lida com pressão e prazos curtos?",
      answer: "OOH exige agilidade e precisão — aprendi a ser resolutivo sem comprometer a qualidade. A experiência em atender clientes que exigem um nível de qualidade alto e entregas ágeis me ensinou a buscar soluções mesmo sob restrições extremas de tempo."
    },
    {
      question: "Qual o seu diferencial em relação a outros profissionais de mídia?",
      answer: "Minha trajetória une vivência em agências e veículos, o que me permite enxergar o planejamento e a operação do OOH por múltiplas lentes. Tenho forte presença nacional e uma rede de mais de 500 players mapeados, o que garante soluções com agilidade e assertividade."
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="h-screen flex flex-col bg-white-pure text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234B5D49%22%20fill-opacity%3D%220.015%22%3E%3Cpath%20d%3D%22M20%200l20%2020-20%2020L0%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <span className="inline-block text-olive-warm font-accent text-sm tracking-widest mb-3">
          PERGUNTAS FREQUENTES
        </span>
        <h2 className="font-display text-4xl lg:text-5xl text-ink-black mb-4">
          FAQ
        </h2>
        <div className="w-16 h-px bg-olive-warm mx-auto mb-4"></div>
        <p className="font-editorial text-slate-elegant max-w-2xl mx-auto leading-relaxed">
          Respostas diretas sobre trajetória, experiência e abordagem profissional.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="flex-1 flex items-center justify-center px-8 relative z-10 overflow-y-auto">
        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.has(index);
              
              return (
                <div 
                  key={index}
                  className="border border-olive-warm/20 rounded-lg bg-white-pure shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-olive-warm/5 transition-colors duration-300 rounded-lg"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading text-lg font-semibold text-ink-black pr-4 leading-tight group-hover:text-olive-warm transition-colors duration-300">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-olive-warm transition-transform duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-elegant group-hover:text-olive-warm transition-colors duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-olive-warm/10 mb-4"></div>
                      <p className="font-editorial text-base text-slate-elegant leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="relative z-10 text-center pb-8">
        <div className="flex items-center justify-center space-x-2 opacity-60">
          <div className="w-2 h-2 bg-olive-warm rounded-full"></div>
          <div className="w-1 h-1 bg-olive-warm rounded-full"></div>
          <div className="w-2 h-2 bg-olive-warm rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;