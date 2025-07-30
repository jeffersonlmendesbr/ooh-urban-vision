
const AfricaDDB = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* Image Column */}
    <div className="flex items-center justify-center">
      <img
        src="/lovable-uploads/d2c3d440-d9a8-4970-bf0b-b4fbdc110f06.png"
        alt="Logo da Africa Creative DDB para projetos OOH"
        loading="lazy"
        className="w-full h-auto max-w-md object-contain"
      />
    </div>

    {/* Content Column */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        Africa Creative DDB
      </h2>

      <div className="space-y-4">
        <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full font-semibold text-sm tracking-wide">
          GERENTE DE MÍDIA
        </div>

        <p className="text-lg text-foreground/80">
          Na Africa Creative, encontrei o ambiente perfeito para combinar criatividade e estratégia.
          Trabalhando ao lado dos melhores profissionais do mercado, desenvolvi campanhas que não apenas
          entregaram resultados, mas também elevaram o padrão de excelência da agência no Cannes Lions 2025.
        </p>

        <div className="border-t border-primary/20 pt-4">
          <blockquote className="text-xl font-medium italic text-primary">
            "Aqui, criatividade e dados não competem, eles convivem juntos."
          </blockquote>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <div className="bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
            <span className="text-primary font-semibold text-xs tracking-wide">CANNES LIONS 2025</span>
          </div>
          <div className="bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
            <span className="text-primary font-semibold text-xs tracking-wide">DESDE 2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AfricaDDB;
