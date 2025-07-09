
const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="min-h-screen flex items-center py-24 bg-white relative overflow-hidden">
      {/* OOHPlanner specific design elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#660099] to-[#CB2166] opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#D0B0DF] to-[#660099] opacity-5 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/a1717b63-d6f0-4787-a3ca-42ee07cde2d2.png" 
              alt="OOHPlanner Logo" 
              className="h-16 md:h-20"
            />
          </div>
          
          <div className="mb-8">
            <span className="inline-block text-[#660099] font-semibold text-sm tracking-widest mb-4 uppercase">
              Projeto Pessoal
            </span>
            <div className="w-24 h-px bg-[#CB2166] mx-auto"></div>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#080808] mb-8 leading-tight">
            Como gerenciar seu inventário de <br />
            <span className="text-[#4B82F8]">mídia exterior</span> de <br />
            forma gratuita no Brasil?
          </h2>
          
          <p className="text-lg md:text-xl text-[#080808] mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubra como a OOHPlanner ajuda exibidores de São Paulo, Rio de Janeiro, Belo Horizonte 
            e todo o Brasil a gerenciar outdoor, painéis eletrônicos e mobiliário urbano de forma simples e gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-[#4B82F8] hover:bg-[#3968E5] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Começar gestão gratuita agora
            </button>
            <button className="text-[#080808] hover:text-[#660099] font-semibold flex items-center gap-2 transition-colors duration-200">
              Ver como funciona na prática →
            </button>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-[#080808]">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#CB2166] rounded-full"></div>
              <span>100% gratuito para exibidores</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#CB2166] rounded-full"></div>
              <span>Usado em todo o Brasil</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#CB2166] rounded-full"></div>
              <span>Cadastro em 5 minutos</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#080808] text-center mb-12">
            Como a OOHPlanner resolve os principais desafios dos exibidores de mídia exterior?
          </h3>
          
          <p className="text-center text-[#080808] mb-12 max-w-2xl mx-auto">
            Descubra como nossa plataforma gratuita oferece todas as ferramentas necessárias
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F0F0F0] p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h4 className="font-semibold text-[#080808] mb-3">Gestão Completa de Inventário</h4>
              <p className="text-[#080808] text-sm">
                Cadastre de forma simples todos os seus pontos de mídia: outdoors tradicionais e digitais, 
                painéis eletrônicos LED, mobiliário urbano.
              </p>
            </div>
            
            <div className="bg-[#F0F0F0] p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h4 className="font-semibold text-[#080808] mb-3">Mapa Interativo</h4>
              <p className="text-[#080808] text-sm">
                Visualize seu inventário completo em um mapa interativo com tecnologia GPS de alta precisão 
                e análise de cobertura territorial.
              </p>
            </div>
            
            <div className="bg-[#F0F0F0] p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h4 className="font-semibold text-[#080808] mb-3">Controle de Ocupação</h4>
              <p className="text-[#080808] text-sm">
                Gerencie a ocupação de todos os seus pontos com calendário interativo avançado 
                e alertas automáticos.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-[#660099] to-[#CB2166] p-8 md:p-12 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Eliminando a barreira entre grandes agências e pequenos anunciantes.
            </p>
            <p className="text-white text-xl font-semibold">
              Porque estratégia não deveria ser privilégio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOHPlanner;
