
const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black via-charcoal-deep to-slate-elegant">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-accent/20 via-transparent to-gold-accent/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
        
        {/* Moving geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200v40M0%2020h40%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Dynamic diagonal stripes */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-accent/5 to-transparent transform rotate-12 scale-150 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-accent/3 to-transparent transform -rotate-12 scale-150 animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
      </div>
      
      {/* Floating Quote Marks with Enhanced Animation */}
      <div className="absolute top-8 left-4 sm:top-16 sm:left-8 text-6xl sm:text-8xl text-gold-accent opacity-60 font-display animate-bounce" style={{ animationDuration: '3s' }}>"</div>
      <div className="absolute bottom-8 right-4 sm:bottom-16 sm:right-8 text-6xl sm:text-8xl text-gold-accent opacity-60 font-display animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>"</div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 px-6 py-20">
        {/* Section Label with Glow Effect */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4 drop-shadow-lg animate-fadeInSlightlyDelayed">
            MANIFESTO
          </span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto shadow-gold"></div>
        </div>
        
        <div className="space-y-12 font-editorial">
          <p className="text-xl md:text-2xl leading-relaxed text-cream-editorial animate-fadeInSlightlyDelayed drop-shadow-md">
            Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do 
            comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio 
            ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma 
            identidade própria em cada praça.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-cream-editorial animate-fadeInSlightlyDelayed drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre 
            disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde 
            antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro 
            é ser maior ainda: contextual, mensurável e inteligente.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-cream-editorial animate-fadeInSlightlyDelayed drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história. 
            Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
          </p>
          
          <div className="pt-12 border-t border-gold-accent/50">
            <blockquote className="text-4xl md:text-5xl font-display text-gold-accent leading-tight animate-fadeInSlightlyDelayed drop-shadow-lg shadow-gold" style={{ animationDelay: '0.6s' }}>
              Se é pra estar na rua, que seja com propósito.
            </blockquote>
          </div>
        </div>
      </div>
      
      {/* Additional floating elements for energy */}
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-gold-accent rounded-full opacity-40 animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 right-12 w-1 h-1 bg-gold-accent rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-gold-accent rounded-full opacity-50 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
    </section>
  );
};

export default Manifesto;
