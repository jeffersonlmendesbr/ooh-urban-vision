

import { Button } from "./ui/button";
import { Card } from "./ui/card";

const OOHPlanner = () => {
  return (
    <section id="oohplanner" className="py-12 sm:py-16 lg:py-24 xl:py-32 flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 lg:p-16 text-center hover:border-primary/50 hover:-translate-y-1">
          <div className="mb-8">
            <span className="text-sm font-bold tracking-widest uppercase text-violet-600">
              Projeto Pessoal
            </span>
            <div className="w-20 h-0.5 mt-2 bg-violet-600 mx-auto" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-foreground mb-6 text-glow">
            OOHPlanner
          </h2>

          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            OOHPlanner é um projeto em construção que nasce da urgência de transformar dados,
            deslocamento e inventário urbano em decisões estratégicas.
          </p>

          <Card className="bg-primary/10 p-6 lg:p-8 mb-8 hover:border-primary/50 hover:-translate-y-1">
            <p className="text-lg font-medium text-foreground">
              Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH,
              eliminando a barreira entre grandes agências e pequenos anunciantes.
            </p>
          </Card>

          <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
            <a
              href="https://oohplanner.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer o Projeto
            </a>
          </Button>

          <p className="mt-8 text-xl font-semibold text-violet-600 italic">
            Porque estratégia não deveria ser privilégio.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default OOHPlanner;

