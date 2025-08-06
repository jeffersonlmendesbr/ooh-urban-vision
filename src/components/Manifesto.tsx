
import { Card } from "./ui/card";

const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="py-12 sm:py-20 lg:py-32 xl:py-40 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100"
    >
      {/* Hyper-realistic background texture */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating elements for maximalism */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl float" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-secondary/5 blur-2xl float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="p-12 lg:p-20 text-center maximalist-glow relative overflow-hidden">
          {/* Inner prismatic layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-xl" />
          
          {/* Content layer */}
          <div className="relative z-10">
            <div className="mb-16">
              <h2 className="text-lg font-black tracking-[0.3em] uppercase text-primary utilitarian-border inline-block px-8 py-4 rounded-lg">
                Manifesto
              </h2>
              <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg" />
            </div>
            
            <div className="space-y-12 text-xl lg:text-3xl text-foreground/85 max-w-5xl mx-auto">
              <p className="slide-up font-medium leading-relaxed tracking-wide">
                Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do
                comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio
                ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma
                identidade própria em cada praça.
              </p>

              <p className="slide-up font-medium leading-relaxed tracking-wide" style={{ animationDelay: '0.2s' }}>
                O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre
                disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde
                antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro
                é ser maior ainda: contextual, mensurável e inteligente.
              </p>

              <p className="slide-up font-medium leading-relaxed tracking-wide" style={{ animationDelay: '0.4s' }}>
                Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história.
                Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
              </p>

              <div className="pt-12 mt-16 border-t-2 border-gradient-to-r from-primary to-secondary slide-up" style={{ animationDelay: '0.6s' }}>
                <blockquote className="text-4xl lg:text-6xl font-black text-primary leading-tight italic text-glow gradient-text relative">
                  "Se é pra estar na rua, que seja com propósito."
                  {/* Enhanced quote marks */}
                  <span className="absolute -top-8 -left-8 text-8xl text-primary/20 font-black">"</span>
                  <span className="absolute -bottom-8 -right-8 text-8xl text-primary/20 font-black">"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Manifesto;
