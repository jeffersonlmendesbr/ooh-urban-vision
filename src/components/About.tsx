const About = () => {
  return <section id="about" className="min-h-screen flex items-center justify-center gradient-about py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-10">
            {/* Section Label */}
            <div className="animate-fadeInSlightlyDelayed">
              <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-6">
                SOBRE
              </span>
              <div className="w-20 h-px bg-gold-accent"></div>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-slate-elegant font-editorial">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.1s'
            }}>Sou publicitário com mais de 15 anos dedicados à mídia OOH. Atuei em agências como VML e Galeria, liderando campanhas nacionais para marcas como VIVO, e também em veículos como Eletromidia e Kallas. Na agência de planejamento LATCOM trabalhei com projetos internacionais para Disney, ESPN e Spotify.</p>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.2s'
            }}>Acredito que a rua é muito mais do que um ponto de exibição – ela é território de disputa onde a mídia exterior precisa ser planejada com inteligência, sensibilidade e intenção.</p>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.3s'
            }}>
                Tenho um pé na criação e outro na estratégia. Conheço as ferramentas, os números e os mapas – 
                mas também caminho pelas ruas.
              </p>
            </div>
          </div>
          
          {/* Quote Column */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white-pure shadow-editorial p-6 md:p-8 lg:p-12 relative z-10 animate-fadeInSlightlyDelayed" style={{
            animationDelay: '0.4s'
          }}>
              {/* Quote Marks */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gold-accent flex items-center justify-center">
                <span className="text-white-pure font-display text-xl md:text-2xl">"</span>
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading text-ink-black leading-tight mb-4 md:mb-6">
                Busco conectar marcas a contextos reais. E mais do que mídia, criar presença.
              </blockquote>
              
              <div className="text-gold-accent font-accent text-xs md:text-sm tracking-widest">
                JEFFERSON MENDES
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-gold-accent opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;