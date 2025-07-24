
const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Simplified Background - Brasil map texture */}
      <div className="absolute inset-0 bg-warm-beige">
        {/* Subtle Brasil map texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M20%2010L80%2015L85%2040L75%2070L60%2085L25%2080L15%2050Z%22%20fill%3D%22none%22%20stroke%3D%22%234A5436%22%20stroke-width%3D%220.5%22%20opacity%3D%220.3%22/%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Clean Quote Marks - agora douradas */}
      <div className="absolute top-16 left-8 text-6xl text-gold-accent opacity-70 font-serif">"</div>
      <div className="absolute bottom-16 right-8 text-6xl text-gold-accent opacity-70 font-serif">"</div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 md:px-6 py-12 md:py-20">
        {/* Clean Section Label - agora dourada */}
        <div className="mb-8 md:mb-12">
          <span className="inline-block text-gold-accent font-medium text-xs md:text-sm tracking-widest mb-3 md:mb-4 uppercase">
            MANIFESTO
          </span>
          <div className="w-12 md:w-16 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <div className="space-y-6 md:space-y-8 text-gray-800">
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do 
            comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio 
            ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma 
            identidade própria em cada praça.
          </p>
          
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre 
            disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde 
            antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro 
            é ser maior ainda: contextual, mensurável e inteligente.
          </p>
          
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história. 
            Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
          </p>
          
          <div className="pt-6 md:pt-8 mt-8 md:mt-12 border-t border-gold-accent/50">
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-gold-accent leading-tight italic">
              "Se é pra estar na rua, que seja com propósito."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
