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
    <SectionContainer id="cases" className="gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12 text-center">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            VEM PRA RUA
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white-pure mb-16 leading-none text-center">
          Cases
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 h-[70vh]">
          {/* Lista de Projetos */}
          <div className="lg:w-1/4 space-y-3 overflow-y-auto no-scrollbar">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(projectsData[0])}
                className={`
                  uppercase text-sm font-accent cursor-pointer transition-all duration-300 hover-lift
                  p-3 border-l-2 transition-colors
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

          {/* Mídia Central */}
          <div className="lg:w-1/2 relative overflow-hidden">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`
                  absolute inset-0 flex items-center justify-center transition-all duration-500
                  ${hoveredProject?.id === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              >
                <div className="w-full h-4/5 bg-slate-elegant/20 border border-gold-accent/20 flex items-center justify-center shadow-editorial hover-glow transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-heading text-gold-accent mb-4">
                      {project.agency}
                    </div>
                    <div className="text-lg font-editorial text-cream-editorial mb-2">
                      {project.client}
                    </div>
                    <div className="text-xl font-accent text-white-pure">
                      {project.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Descrição */}
          <div className="lg:w-1/4 space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-gold-accent">
                Histórias Reais nas Ruas
              </h3>
              <p className="text-cream-editorial font-editorial leading-relaxed">
                Cada projeto representa uma história real nas ruas. O desafio vai além da criação visual — 
                está em entender o espaço, o tempo, o público e o impacto.
              </p>
              <p className="text-cream-editorial font-editorial leading-relaxed">
                A mídia exterior exige mais do que presença: ela pede propósito. É sobre criar relevância 
                onde todos passam — mas nem todos olham.
              </p>
            </div>
            
            {hoveredProject && (
              <div className="border-t border-gold-accent/30 pt-6 animate-fade-in">
                <h4 className="font-accent text-gold-accent text-sm tracking-wide mb-2">
                  PROJETO EM DESTAQUE
                </h4>
                <div className="text-white-pure font-heading text-lg">
                  {hoveredProject.agency} × {hoveredProject.client}
                </div>
                <div className="text-cream-editorial font-editorial">
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
