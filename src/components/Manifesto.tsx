
const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 bg-dark-charcoal text-soft-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-heading mb-12">Manifesto</h2>
        <div className="space-y-8 text-xl leading-relaxed">
          <blockquote className="border-l-4 border-olive-green pl-6 italic">
            "A mídia exterior não deveria ser sobre ocupar espaço, mas sobre criar conexões. 
            Cada ponto de mídia é uma oportunidade de diálogo, não de interrupção."
          </blockquote>
          <blockquote className="border-l-4 border-olive-green pl-6 italic">
            "Dados são a bússola, criatividade é o combustível, mas é o entendimento 
            do comportamento urbano que nos leva ao destino certo."
          </blockquote>
          <blockquote className="border-l-4 border-olive-green pl-6 italic">
            "Não basta estar na rua. É preciso estar no momento certo, 
            falando com quem importa, da forma que ressoa."
          </blockquote>
          <div className="text-2xl font-heading text-olive-green mt-12">
            "Se é pra estar na rua, que seja com propósito."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
