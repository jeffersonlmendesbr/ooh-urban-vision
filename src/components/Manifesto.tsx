
const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="min-h-screen flex items-center justify-center bg-dark-charcoal text-soft-white py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* Aspas decorativas */}
      <div className="absolute top-20 left-10 text-8xl text-soft-white opacity-20 font-serif animate-pulse">"</div>
      <div className="absolute bottom-20 right-10 text-8xl text-soft-white opacity-20 font-serif animate-pulse">"</div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-12 text-xl md:text-2xl leading-relaxed font-editorial">
          <p className="animate-fadeInSlightlyDelayed">
            Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do 
            comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio 
            ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma 
            identidade própria em cada praça.
          </p>
          
          <p className="animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.3s' }}>
            O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre 
            disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde 
            antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro 
            é ser maior ainda: contextual, mensurável e inteligente.
          </p>
          
          <p className="animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.6s' }}>
            Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história. 
            Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
          </p>
          
          <div className="pt-8 border-t border-soft-white/30">
            <p className="text-3xl md:text-4xl font-bold text-olive-green animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.9s' }}>
              Se é pra estar na rua, que seja com propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
