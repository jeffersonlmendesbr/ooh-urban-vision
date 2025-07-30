
import { useState } from 'react';
import { Card } from './ui/card';

interface Project {
  id: string;
  agency: string;
  client: string;
  name: string;
  mediaPlaceholderUrl: string;
}

const projectsData: Project[] = [
  { id: 'wilson', agency: 'AFRICA', client: 'VIVO', name: 'WILSON', mediaPlaceholderUrl: 'placeholder-wilson.jpg' },
  { id: 'futuro', agency: 'AFRICA', client: 'VIVO', name: 'FUTURO', mediaPlaceholderUrl: 'placeholder-futuro.jpg' },
  { id: 'raizes', agency: 'AFRICA', client: 'VIVO', name: 'RAIZES VIVAS', mediaPlaceholderUrl: 'placeholder-raizes.jpg' },
  { id: 'recicle', agency: 'AFRICA', client: 'VIVO', name: 'RECICLE', mediaPlaceholderUrl: 'placeholder-recicle.jpg' },
  { id: 'olimpiadas', agency: 'VML', client: 'VIVO', name: 'OLIMPIADAS', mediaPlaceholderUrl: 'placeholder-olimpiadas.jpg' },
  { id: 'blackfriday', agency: 'VML', client: 'VIVO', name: 'BLACK FRIDAY', mediaPlaceholderUrl: 'placeholder-blackfriday.jpg' },
  { id: 'nordeste', agency: 'VML', client: 'VIVO', name: 'NORDESTE', mediaPlaceholderUrl: 'placeholder-nordeste.jpg' },
  { id: 'cooperados', agency: 'GALERIA', client: 'VIVO', name: 'COOPERADOS', mediaPlaceholderUrl: 'placeholder-cooperados.jpg' },
  { id: 'total', agency: 'GALERIA', client: 'VIVO', name: 'TOTAL', mediaPlaceholderUrl: 'placeholder-total.jpg' },
  { id: '5g', agency: 'GALERIA', client: 'VIVO', name: '5G', mediaPlaceholderUrl: 'placeholder-5g.jpg' },
  { id: 'reileao', agency: 'LATCOM', client: 'DISNEY', name: 'O REI LEAO', mediaPlaceholderUrl: 'placeholder-reileao.jpg' },
  { id: 'toystory', agency: 'LATCOM', client: 'DISNEY', name: 'TOY STORY', mediaPlaceholderUrl: 'placeholder-toystory.jpg' },
  { id: 'malevola', agency: 'LATCOM', client: 'DISNEY', name: 'MALEVOLA', mediaPlaceholderUrl: 'placeholder-malevola.jpg' },
  { id: 'espn', agency: 'LATCOM', client: 'DISNEY', name: 'ESPN', mediaPlaceholderUrl: 'placeholder-espn.jpg' },
  { id: 'natgeo', agency: 'LATCOM', client: 'DISNEY', name: 'NATGEO', mediaPlaceholderUrl: 'placeholder-natgeo.jpg' },
  { id: 'fox', agency: 'LATCOM', client: 'DISNEY', name: 'FOX', mediaPlaceholderUrl: 'placeholder-fox.jpg' },
  { id: 'vingadores', agency: 'LATCOM', client: 'DISNEY', name: 'VINGADORES', mediaPlaceholderUrl: 'placeholder-vingadores.jpg' },
  { id: 'spotifyretro', agency: 'LATCOM', client: 'SPOTIFY', name: 'RETROSPECTIVA', mediaPlaceholderUrl: 'placeholder-spotifyretro.jpg' },
  { id: 'spotifyartistas', agency: 'LATCOM', client: 'SPOTIFY', name: 'ARTISTAS', mediaPlaceholderUrl: 'placeholder-spotifyartistas.jpg' },
];

const Cases = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projectsData[0]);

  return (
    <section id="cases" className="py-24 lg:py-32 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">
        <div className="mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-primary">
            Vem pra Rua
          </span>
          <div className="w-20 h-0.5 mt-2 bg-primary" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 flex-1">
          {/* Column 1: Project List */}
          <div className="lg:col-span-1 space-y-2 overflow-y-auto no-scrollbar pr-4">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                className={`
                  p-3 rounded-lg cursor-pointer transition-all duration-200
                  ${hoveredProject?.id === project.id 
                    ? 'bg-primary/10'
                    : 'bg-transparent hover:bg-primary/5'
                  }
                `}
              >
                <p className={`uppercase text-xs font-bold tracking-wider transition-colors ${hoveredProject?.id === project.id ? 'text-primary' : 'text-foreground/60'}`}>
                  {project.agency} | {project.client}
                </p>
                <p className={`text-sm font-semibold transition-colors ${hoveredProject?.id === project.id ? 'text-foreground' : 'text-foreground/80'}`}>
                  {project.name}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2: Media Display */}
          <div className="lg:col-span-1 relative flex items-center justify-center">
            <div className="w-full max-w-sm h-[500px] relative">
              {projectsData.map((project) => (
                <Card
                  key={project.id}
                  className={`
                    absolute inset-0 flex items-center justify-center text-center p-8 transition-all duration-300
                    ${hoveredProject?.id === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                >
                  <div>
                    <p className="text-2xl font-bold text-primary mb-2">
                      {project.agency}
                    </p>
                    <p className="text-lg text-foreground/80 mb-4">
                      {project.client}
                    </p>
                    <p className="text-3xl font-extrabold text-foreground text-glow">
                      {project.name}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Column 3: Description */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Histórias Reais nas Ruas
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Cada projeto representa uma história real nas ruas. O desafio vai além da criação visual — 
                está em entender o espaço, o tempo, o público e o impacto.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A mídia exterior exige mais do que presença: ela pede propósito. É sobre criar relevância 
                onde todos passam — mas nem todos olham.
              </p>
            </div>
            
            {hoveredProject && (
              <div className="border-t border-primary/20 pt-6 animate-in fade-in duration-500">
                <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
                  Projeto em Destaque
                </h4>
                <p className="text-lg font-bold text-foreground">
                  {hoveredProject.agency} × {hoveredProject.client}
                </p>
                <p className="text-base text-foreground/80">
                  {hoveredProject.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
