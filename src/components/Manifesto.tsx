
import { Card } from "./ui/card";

const Manifesto = () => {
  return (
    <section 
      id="manifesto" 
      className="py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 lg:p-16 text-center">
          <div className="mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-primary">
              Manifesto
            </span>
            <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-8 text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto">
            <p>
              Acredito que a Mídia OOH não é apenas sobre o espaço físico. É também um reflexo do
              comportamento urbano. Tem ritmo vivo. Da sociedade com suas escolhas e evoluções em meio
              ao urbanismo, dos aspectos regionais íntimos e variações culturais que constroem uma
              identidade própria em cada praça.
            </p>

            <p>
              O Brasil é gigante pela própria natureza e atuar com mídia exterior não é mais sobre
              disputar atenção. É mais que transformar cotidiano em impacto ou criar presença onde
              antes só havia passagem. A mídia exterior já deixou de ser apenas digital e seu futuro
              é ser maior ainda: contextual, mensurável e inteligente.
            </p>

            <p>
              Estou pronto para essa visão. Faço parte dos profissionais que constroem essa história.
              Não planejo apenas mídia em espaços fora de casa, o que faço é construir narrativas.
            </p>

            <div className="pt-8 mt-12 border-t border-primary/20">
              <blockquote className="text-3xl lg:text-5xl font-bold text-primary leading-tight italic text-glow">
                "Se é pra estar na rua, que seja com propósito."
              </blockquote>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Manifesto;
