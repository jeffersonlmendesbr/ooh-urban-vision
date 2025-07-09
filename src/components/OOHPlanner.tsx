
const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="min-h-screen flex items-center py-24 bg-[#F0F0F0] text-[#080808] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#660099] opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#CB2166] opacity-5 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-[#660099] font-accent text-sm tracking-widest mb-4">
            PROJETO PESSOAL
          </span>
          <div className="w-24 h-px bg-[#CB2166] mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#080808] mb-12 leading-none">
          OOHPlanner
        </h2>
        
        <p className="text-xl md:text-2xl font-editorial text-[#080808] mb-16 max-w-4xl mx-auto leading-relaxed">
          OOHPlanner é um projeto em construção que nasce da urgência de transformar dados, 
          deslocamento e inventário urbano em decisões estratégicas.
        </p>
        
        <div className="bg-[#FFFFFF]/90 border border-[#660099]/30 p-12 md:p-16 shadow-lg hover-lift backdrop-blur-sm">
          <p className="text-lg md:text-xl font-editorial leading-relaxed text-[#080808]">
            Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH, 
            eliminando a barreira entre grandes agências e pequenos anunciantes. 
            <span className="block mt-6 text-[#CB2166] font-heading text-xl">
              Porque estratégia não deveria ser privilégio.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OOHPlanner;
