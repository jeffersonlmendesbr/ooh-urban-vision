
import { SectionContainer } from './ui/section-container';

const OOHDescomplicado = () => {
  const videos = [
    {
      id: "PxgN1cCxosM",
      title: "Como funciona o OOH?",
      description: "Uma introdução completa sobre o universo do OOH. Entenda como o meio se organiza, o que são grupos, categorias e formatos."
    },
    {
      id: "8x1cw5gPRc4", 
      title: "Conceitos de mídia aplicados ao OOH",
      description: "Uma abordagem sobre os conceitos clássicos de mídia e como eles se aplicam na prática ao planejamento OOH."
    }
  ];

  return (
    <SectionContainer id="oohdescomplicado" className="bg-white-pure">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-gold-accent mb-4">
            OOH Descomplicado
          </h2>
          
          <h4 className="text-lg md:text-xl text-ink-light font-editorial mb-6">
            Do básico ao avançado, descomplicando a mídia que movimenta as ruas.
          </h4>
          
          <p className="text-base text-ink-light font-editorial mb-8 max-w-4xl mx-auto leading-relaxed">
            Você já se confundiu com os termos do OOH? Meio, formato, grupo, categoria… Calma, respira.<br />
            Neste espaço, compartilho vídeos onde explico, com simplicidade e profundidade, como o OOH funciona de verdade. Um conteúdo que já ajudou muita gente — e espero que ajude você também.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-gold-accent rounded-2xl shadow-lg p-4 border border-sage-light/20">
                <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                <h3 className="text-lg font-heading text-white-pure mb-3">
                  {video.title}
                </h3>
                
                <p className="text-sm text-ink-light font-editorial leading-relaxed">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default OOHDescomplicado;
