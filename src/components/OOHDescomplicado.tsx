
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

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
    <section id="oohdescomplicado" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-primary">
              OOH Descomplicado
            </span>
            <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Do básico ao avançado, descomplicando a mídia que movimenta as ruas.
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Você já se confundiu com os termos do OOH? Meio, formato, grupo, categoria… Calma, respira.<br />
            Neste espaço, compartilho vídeos onde explico, com simplicidade e profundidade, como o OOH funciona de verdade. Um conteúdo que já ajudou muita gente — e espero que ajude você também.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <Card key={video.id}>
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80">
                    {video.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOHDescomplicado;
