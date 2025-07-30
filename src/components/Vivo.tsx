
const Vivo = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* Image Column */}
    <div className="flex items-center justify-center">
      <img
        src="/lovable-uploads/f2c837a9-61c0-43b8-85af-ccbe5c6c392a.png"
        alt="Logo VIVO"
        className="w-full h-auto max-w-md object-contain"
      />
    </div>

    {/* Content Column */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        VIVO
      </h2>

      <div className="space-y-4">
        <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full font-semibold text-sm tracking-wide">
          CONTA QUE ATENDO
        </div>

        <p className="text-lg text-foreground/80">
          Na VIVO, encontrei um parceiro que valoriza estratégia, inovação e consistência.
          Atender uma das maiores marcas do país me desafiou a pensar grande, a planejar com
          profundidade e a buscar impacto real em cada campanha. Estar ao lado da VIVO em
          diferentes agências, por tantos anos, não é apenas um reconhecimento — é um selo de
          confiança que impulsiona minha jornada profissional.
        </p>

        <div className="border-t border-primary/20 pt-4">
          <blockquote className="text-xl font-medium italic text-primary">
            "Ao lado da VIVO, aprendi que presença não é estar em todos os lugares — é estar certo no momento certo."
          </blockquote>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <div className="bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
            <span className="text-primary font-semibold text-xs tracking-wide">DESDE 2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Vivo;
