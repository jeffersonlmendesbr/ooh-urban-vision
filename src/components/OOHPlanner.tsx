
const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="min-h-screen flex items-center py-12 bg-gradient-to-br from-[#4B82F8] via-[#F0F0F0] to-[#D0B0DF] text-[#080808] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Label */}
        <div className="mb-8">
          <span className="inline-block text-[#660099] font-accent text-sm tracking-widest mb-3">
            PROJETO PESSOAL
          </span>
          <div className="w-24 h-px bg-[#CB2166] mx-auto"></div>
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] mb-8 leading-none drop-shadow-lg">
          OOHPlanner
        </h2>
        
        <p className="text-lg md:text-xl font-editorial text-[#080808] mb-12 max-w-4xl mx-auto leading-relaxed">
          OOHPlanner é um projeto em construção que nasce da urgência de transformar dados, 
          deslocamento e inventário urbano em decisões estratégicas.
        </p>
        
        <div className="bg-gradient-to-r from-[#660099] via-[#CB2166] to-[#D0B0DF] p-8 md:p-10 shadow-lg hover-lift backdrop-blur-sm mb-6">
          <p className="text-base md:text-lg font-editorial leading-relaxed text-[#FFFFFF]">
            Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH, 
            eliminando a barreira entre grandes agências e pequenos anunciantes. 
            <span className="block mt-4 text-[#FFFFFF] font-heading text-lg">
              Porque estratégia não deveria ser privilégio.
            </span>
          </p>
        </div>
        
        <a 
          href="https://oohplanner.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#4B82F8] hover:bg-[#3968E5] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
        >
          Conhecer
        </a>
      </div>
    </section>
  );
};

export default OOHPlanner;
