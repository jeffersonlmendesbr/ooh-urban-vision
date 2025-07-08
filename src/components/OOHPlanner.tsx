
const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="min-h-screen flex items-center py-24 gradient-dark text-white-pure relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-accent opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-accent opacity-5 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            PROJETO PESSOAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white-pure mb-12 leading-none">
          OOHPlanner
        </h2>
        
        <p className="text-xl md:text-2xl font-editorial text-cream-editorial mb-16 max-w-4xl mx-auto leading-relaxed">
          OOHPlanner é um projeto em construção que nasce da urgência de transformar dados, 
          deslocamento e inventário urbano em decisões estratégicas.
        </p>
        
        <div className="bg-white-pure/10 border border-gold-accent/30 p-12 md:p-16 shadow-gold hover-lift backdrop-blur-sm">
          <p className="text-lg md:text-xl font-editorial leading-relaxed text-cream-editorial">
            Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH, 
            eliminando a barreira entre grandes agências e pequenos anunciantes. 
            <span className="block mt-6 text-gold-accent font-heading text-xl">
              Porque estratégia não deveria ser privilégio.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OOHPlanner;
