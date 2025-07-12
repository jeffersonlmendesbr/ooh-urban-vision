
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';

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
    <SectionContainer 
      id="cases" 
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/644eaac9-68cc-48a8-9622-817a05e2cf81.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        {/* Section Header - Alinhado à esquerda */}
        <div className="mb-8 text-left">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-3">
            VEM PRA RUA
          </span>
          <div className="w-24 h-px bg-gold-accent"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
          {/* Lista de Projetos - Mais compacta */}
          <div className="lg:w-1/4 space-y-2 overflow-y-auto no-scrollbar max-h-[60vh]">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(projectsData[0])}
                className={`
                  uppercase text-xs font-accent cursor-pointer transition-all duration-300 hover-lift
                  p-2 border-l-2 transition-colors
                  ${hoveredProject?.id === project.id 
                    ? 'text-gold-accent border-gold-accent bg-gold-accent/10' 
                    : 'text-cream-editorial border-transparent hover:text-gold-accent hover:border-gold-accent/50'
                  }
                `}
              >
                {project.agency} | {project.client} | {project.name}
              </div>
            ))}
          </div>

          {/* Mídia Central - Movida mais 1% para cima (9vh) */}
          <div className="lg:w-1/2 relative overflow-hidden flex items-start justify-center -mt-[9vh]">
            <div className="w-[302px] h-[432px] relative">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className={`
                    absolute inset-0 flex items-center justify-center transition-all duration-500
                    ${hoveredProject?.id === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  `}
                >
                  <div className="w-full h-full bg-slate-elegant/20 border border-gold-accent/20 flex items-center justify-center shadow-editorial hover-glow transition-all duration-300">
                    <div className="text-center">
                      <div className="text-xl font-heading text-gold-accent mb-3">
                        {project.agency}
                      </div>
                      <div className="text-base font-editorial text-cream-editorial mb-2">
                        {project.client}
                      </div>
                      <div className="text-lg font-accent text-white-pure">
                        {project.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Descrição - Mais compacta */}
          <div className="lg:w-1/4 space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              <h3 className="font-heading text-xl text-gold-accent">
                Histórias Reais nas Ruas
              </h3>
              <p className="text-cream-editorial font-editorial leading-relaxed text-sm">
                Cada projeto representa uma história real nas ruas. O desafio vai além da criação visual — 
                está em entender o espaço, o tempo, o público e o impacto.
              </p>
              <p className="text-cream-editorial font-editorial leading-relaxed text-sm">
                A mídia exterior exige mais do que presença: ela pede propósito. É sobre criar relevância 
                onde todos passam — mas nem todos olham.
              </p>
            </div>
            
            {hoveredProject && (
              <div className="border-t border-gold-accent/30 pt-4 animate-fade-in">
                <h4 className="font-accent text-gold-accent text-xs tracking-wide mb-2">
                  PROJETO EM DESTAQUE
                </h4>
                <div className="text-white-pure font-heading text-base">
                  {hoveredProject.agency} × {hoveredProject.client}
                </div>
                <div className="text-cream-editorial font-editorial text-sm">
                  {hoveredProject.name}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Cases;
