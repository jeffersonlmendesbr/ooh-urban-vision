import React, { useState } from 'react';

interface Project {
  id: string;
  agency: string;
  client: string;
  name: string;
  mediaPlaceholderUrl: string; // Usaremos isso mais tarde
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

const Cases: React.FC = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Cases] Component rendering...');
  }
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projectsData[0]); // Inicializa com o primeiro projeto

  if (process.env.NODE_ENV !== 'production') {
    console.log('[Cases] Initial hoveredProject:', hoveredProject);
  }

  return (
    <section
      id="cases"
      // Ajuste para responsividade: min-h-screen e flex-col padrão, md:h-screen e md:flex-row para desktops
      className="min-h-screen md:h-screen flex flex-col justify-center items-center bg-warm-beige text-dark-charcoal p-4 md:p-8 font-editorial"
    >
      {/* Ajuste para responsividade: flex-col padrão, md:flex-row para desktops */}
      <div className="container mx-auto flex flex-col md:flex-row flex-1 max-w-7xl w-full md:h-full">
        {/* Coluna Esquerda: Lista de Projetos */}
        {/* Ajuste para responsividade: w-full md:w-1/4, h-64 md:h-auto, mb-4 md:mb-0 */}
        <div
            className="w-full md:w-1/4 p-4 md:pr-8 space-y-4 overflow-y-auto custom-scrollbar h-64 md:h-full mb-4 md:mb-0"
            style={{ scrollBehavior: 'smooth' }}
        >
          <ul className="space-y-3">
            {projectsData.map((project) => (
              <li
                key={project.id}
                onMouseEnter={() => {
                  if (process.env.NODE_ENV !== 'production') {
                    console.log('[Cases] MouseEnter:', project.id);
                  }
                  setHoveredProject(project);
                }}
                onMouseLeave={() => {
                  if (process.env.NODE_ENV !== 'production') {
                    console.log('[Cases] MouseLeave, resetting to Wilson');
                  }
                  setHoveredProject(projectsData[0]);
                }}
                className={`
                  uppercase text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out
                  hover:text-olive-green hover:pl-2
                  ${project.id === 'wilson' ? 'border-l-2 border-gray-400 pl-2 text-base' : ''}
                  ${hoveredProject?.id === project.id ? 'text-olive-green pl-2' : 'text-dark-charcoal'}
                `}
              >
                {project.agency} | {project.client} | {project.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Central: Mídia do Projeto */}
        {/* Ajuste para responsividade: w-full md:w-1/2, h-96 md:h-auto, mb-4 md:mb-0 */}
        <div className="w-full md:w-1/2 p-2 md:p-4 flex justify-center items-center relative overflow-hidden h-96 md:h-full mb-4 md:mb-0">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`
                absolute w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out
                ${hoveredProject?.id === project.id ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <div className="w-full h-full md:w-4/5 md:h-4/5 bg-gray-300 flex justify-center items-center text-center p-4">
                <span className="text-lg md:text-xl text-gray-600">
                  Placeholder Mídia Para: <br />
                  {project.agency} | {project.client} | {project.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna Direita: Título da Seção e Descrição */}
        {/* Ajuste para responsividade: w-full md:w-1/4 */}
        <div className="w-full md:w-1/4 p-4 md:pl-8 border-l-0">
          <h1 className="text-lg md:text-xl font-bold mb-6 md:mb-10 text-dark-charcoal opacity-0 animate-fadeInSlightlyDelayed motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none">
            Cases
          </h1>
          <p className="text-xs md:text-sm font-light leading-relaxed text-gray-700">
            Cada projeto listado aqui representa uma história real nas ruas.
            O desafio vai além da criação visual — ele está em entender o espaço,
            o tempo, o público e o impacto. A mídia exterior pede mais do que presença:
            ela exige propósito. É sobre criar relevância onde todos passam —
            mas nem todos olham.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cases;
