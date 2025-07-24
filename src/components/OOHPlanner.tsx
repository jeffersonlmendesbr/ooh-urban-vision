

const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="min-h-screen flex items-center bg-gradient-to-br from-[#D0B0DF] via-[#F0F0F0] to-[#4B82F8] text-[#080808] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto padding-responsive text-center relative z-10">
        {/* Section Label */}
        <div className="mb-8">
          <span className="inline-block text-[#080808] font-accent text-sm tracking-widest mb-3">
            PROJETO PESSOAL
          </span>
          <div className="w-24 h-px bg-[#080808] mx-auto"></div>
        </div>
        
        <h2 className="font-display text-responsive-4xl lg:text-responsive-5xl text-[#4B82F8] mb-6 lg:mb-8 leading-none text-shadow-bold">
          OOHPlanner
        </h2>
        
        <p className="text-responsive-xl font-editorial text-[#080808] mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
          OOHPlanner é um projeto em construção que nasce da urgência de transformar dados, 
          deslocamento e inventário urbano em decisões estratégicas.
        </p>
        
        <div className="bg-gradient-to-r from-[#660099] via-[#CB2166] to-[#660099] p-8 md:p-10 rounded-xl shadow-lg hover-lift backdrop-blur-sm mb-6">
          <p className="text-base md:text-lg font-editorial leading-relaxed text-[#FFFFFF]">
            Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH, 
            eliminando a barreira entre grandes agências e pequenos anunciantes. 
          </p>
        </div>
        
        <a 
          href="https://oohplanner.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#4B82F8] hover:bg-[#3968E5] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg mb-8"
        >
          Conhecer
        </a>
        
        <p className="text-xl md:text-2xl font-heading text-[#080808] leading-relaxed">
          Porque estratégia não deveria ser privilégio.
        </p>
      </div>
    </section>
  );
};

export default OOHPlanner;

