
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Title with same styling as the previous EDUCAÇÃO label */}
          <div className="mb-6">
            <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-2">
              OOH DESCOMPLICADO
            </span>
            <div className="w-24 h-px bg-gold-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="bg-gold-accent rounded-2xl shadow-lg p-4 border border-sage-light/20">
                <div className="aspect-video mb-3 rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                <h3 className="text-lg font-heading text-white-pure mb-2">
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
