const Eletromidia = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* Image Column */}
    <div className="flex items-center justify-center">
      <img
        src="/lovable-uploads/ae3d4628-d043-4ed3-b3ee-fb59396fef58.png"
        alt="Logo Eletromidia"
        className="w-full h-auto max-w-md object-contain"
      />
    </div>

    {/* Content Column */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        Eletromidia
      </h2>

      <div className="space-y-4">
        <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full font-semibold text-sm tracking-wide">
          EMBAIXADOR
        </div>

        <p className="text-lg text-foreground/80">
          Junto com a Eletromidia, encontrei um reconhecimento que vai além dos resultados:
          Ser Embaixador da marca em 2025. Escolhido para representar um dos principais players
          de OOH do país é um reflexo da minha trajetória e do meu compromisso com esse meio.
          Mais do que uma homenagem, esse título reforça minha visão de que a rua é um espaço de
          conexão viva entre marcas e pessoas — e que planejar OOH é ocupar a cidade com intenção
          e inteligência.
        </p>

        <div className="border-t border-primary/20 pt-4">
          <blockquote className="text-xl font-medium italic text-primary">
            "Agora represento a mídia que me representa."
          </blockquote>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <div className="bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
            <span className="text-primary font-semibold text-xs tracking-wide">EMBAIXADOR ELETROMIDIA ADS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Eletromidia;
