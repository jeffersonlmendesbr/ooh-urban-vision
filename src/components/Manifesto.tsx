
const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="min-h-screen flex items-center justify-center bg-cream-editorial text-ink-black py-20 px-6 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-4 sm:top-20 sm:left-10 text-8xl sm:text-9xl text-gold-accent opacity-30 font-display animate-pulse motion-reduce:animate-none">"</div>
      <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 text-8xl sm:text-9xl text-gold-accent opacity-30 font-display animate-pulse motion-reduce:animate-none">"</div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            MANIFESTO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <div className="space-y-12 font-editorial">
          <p className="text-xl md:text-2xl leading-relaxed text-slate-elegant animate-fadeInSlightlyDelayed">
            Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do 
            comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio 
            ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma 
            identidade própria em cada praça.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-slate-elegant animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.2s' }}>
            O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre 
            disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde 
            antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro 
            é ser maior ainda: contextual, mensurável e inteligente.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-slate-elegant animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.4s' }}>
            Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história. 
            Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
          </p>
          
          <div className="pt-12 border-t border-gold-accent/30">
            <blockquote className="text-4xl md:text-5xl font-display text-gold-accent leading-tight animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.6s' }}>
              Se é pra estar na rua, que seja com propósito.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
