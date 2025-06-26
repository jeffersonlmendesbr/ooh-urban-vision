
const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-warm-beige py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 text-lg text-dark-charcoal leading-relaxed font-editorial">
          <p className="text-xl md:text-2xl leading-relaxed animate-fadeInSlightlyDelayed motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none">
            Sou publicitário com mais de 15 anos dedicados à mídia OOH. Atuei em agências como VML e Galeria, 
            liderando campanhas nacionais para marcas como VIVO, e também em veículos como Eletromidia e Latcom, 
            com projetos internacionais para Disney, ESPN e Spotify.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed animate-fadeInSlightlyDelayed motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none" style={{ animationDelay: '0.2s' }}>
            Acredito que a rua é muito mais do que um ponto de exibição – ela é território de disputa de atenção. 
            E por isso, a mídia exterior precisa ser planejada com inteligência, sensibilidade e intenção.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed animate-fadeInSlightlyDelayed motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none" style={{ animationDelay: '0.4s' }}>
            Tenho um pé na criação e outro na estratégia. Conheço as ferramentas, os números e os mapas – 
            mas também caminho pelas ruas.
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-olive-green leading-relaxed animate-fadeInSlightlyDelayed motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none" style={{ animationDelay: '0.6s' }}>
            Busco conectar marcas a contextos reais. E mais do que mídia, criar presença.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
