
import { useState } from 'react';

interface Project {
  id: string;
  agency: string;
  client: string;
  name: string;
  description: string;
  image: string;
}

const projectsData: Project[] = [
  { 
    id: 'wilson', 
    agency: 'AFRICA', 
    client: 'VIVO', 
    name: 'WILSON', 
    description: 'Campanha emocional usando tecnologia e proximidade.',
    image: '/lovable-uploads/a1717b63-d6f0-4787-a3ca-42ee07cde2d2.png'
  },
  { 
    id: 'futuro', 
    agency: 'AFRICA', 
    client: 'VIVO', 
    name: 'FUTURO', 
    description: 'Visão de conectividade e inovação no Brasil.',
    image: '/lovable-uploads/644eaac9-68cc-48a8-9622-817a05e2cf81.png'
  },
  { 
    id: 'raizes', 
    agency: 'AFRICA', 
    client: 'VIVO', 
    name: 'RAIZES VIVAS', 
    description: 'Conexão com tradições e modernidade.',
    image: '/lovable-uploads/74901c2f-77b9-4e9a-ae45-d368d7d1b97a.png'
  },
  { 
    id: 'recicle', 
    agency: 'AFRICA', 
    client: 'VIVO', 
    name: 'RECICLE', 
    description: 'Sustentabilidade e responsabilidade social.',
    image: '/lovable-uploads/9c3e7a8c-2ed0-412a-8465-f17bb05911f9.png'
  },
  { 
    id: 'olimpiadas', 
    agency: 'VML', 
    client: 'VIVO', 
    name: 'OLIMPIADAS', 
    description: 'Cobertura dos Jogos Olímpicos no Brasil.',
    image: '/lovable-uploads/597d1cf2-94e0-4cff-8e85-a903c1a11fe4.png'
  },
  { 
    id: 'blackfriday', 
    agency: 'VML', 
    client: 'VIVO', 
    name: 'BLACK FRIDAY', 
    description: 'Ofertas especiais e promoções sazonais.',
    image: '/lovable-uploads/5bf1055e-408b-4fd2-9a8c-68bb02edd87d.png'
  }
];

const Cases = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="cases" className="py-24 lg:py-32 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-purple-600 mb-4">
            Vem pra Rua
          </h2>
          <div className="w-20 h-0.5 bg-purple-600 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-gray-900">Cases de Sucesso</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Cada projeto representa uma história real nas ruas, conectando marcas a contextos únicos.
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={`${project.agency} - ${project.client} - ${project.name}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                  {project.agency} | {project.client}
                </p>
                <p className="text-sm font-bold mt-1">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.agency} - ${selectedProject.client} - ${selectedProject.name}`}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
                    {selectedProject.agency} | {selectedProject.client}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {selectedProject.name}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cases;
