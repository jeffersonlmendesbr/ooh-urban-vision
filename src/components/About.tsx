import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-8 glass-card p-8 lg:p-12 h-full">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
                Sobre
              </h2>
              <div className="w-16 h-0.5 mt-2 bg-primary" />
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80">
              <p>Sou publicitário com mais de 15 anos dedicados à mídia OOH. Atuei em agências como VML e Galeria, liderando campanhas nacionais para marcas como VIVO, e também em veículos como Eletromidia e Kallas. Na agência de planejamento LATCOM trabalhei com projetos internacionais para Disney, ESPN e Spotify.</p>
              <p>Acredito que a rua é muito mais do que um ponto de exibição – ela é território de disputa onde a mídia exterior precisa ser planejada com inteligência, sensibilidade e intenção.</p>
              <p>Tenho um pé na criação e outro na estratégia. Conheço as ferramentas, os números e os mapas – mas também caminho pelas ruas.</p>
            </div>
          </div>
          
          {/* Quote Column */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative p-8 lg:p-12 glass-card">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                Busco conectar marcas a contextos reais. E mais do que mídia, criar presença.
              </blockquote>
              <div className="text-sm font-semibold tracking-widest uppercase text-primary">
                Jefferson Mendes
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;