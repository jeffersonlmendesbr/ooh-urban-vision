import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
  const faqItems = [
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

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-rose-600">
              Perguntas Frequentes
            </span>
            <div className="w-20 h-0.5 mt-2 bg-rose-600 mx-auto" />
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
              FAQ
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Respostas diretas sobre trajetória, experiência e abordagem profissional.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;