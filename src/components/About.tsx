
const About = () => {
  return (
    <section id="sobre" className="py-24 bg-soft-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-12 text-center">Sobre Mim</h2>
        <div className="space-y-8 text-lg text-dark-charcoal leading-relaxed">
          <p>
            Sou um profissional híbrido que combina o rigor estratégico de um planejador de mídia 
            com a sensibilidade criativa necessária para entender que cada campanha OOH é, antes de tudo, 
            uma conversa entre marca e cidade.
          </p>
          <p>
            Minha trajetória de mais de 15 anos me levou da operação tática aos corredores estratégicos 
            de agências como Africa Creative DDB, sempre com uma obsessão: como transformar dados de 
            deslocamento urbano em momentos de impacto real.
          </p>
          <p>
            Acredito que o futuro da mídia exterior está na intersecção entre tecnologia, comportamento 
            humano e a urgência de comunicar com propósito. Por isso, desenvolvo ferramentas como o 
            OOHPlanner - para que estratégia deixe de ser privilégio e se torne acessível.
          </p>
          <div className="flex items-center justify-center mt-12">
            <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
              <span className="font-medium">+15 anos</span>
            </div>
            <div className="mx-6 text-matte-silver">•</div>
            <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
              <span className="font-medium">Experiência Internacional</span>
            </div>
            <div className="mx-6 text-matte-silver">•</div>
            <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
              <span className="font-medium">Gestão de Equipe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
