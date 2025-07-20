import { TrendingUp, Users, Building2, Target, BarChart3 } from 'lucide-react';

const Analytics = () => {
  const kpis = [
    {
      icon: Users,
      title: "Tempo em Cargos de Liderança",
      personalData: "52%",
      marketData: "28%",
      description: "do tempo de carreira com gestão de equipe",
      comparison: "vs média do mercado",
      source: "LinkedIn Workforce Insights e dados setoriais da Aberje",
      percentage: 65 // (52/80) * 100 for visual bar
    },
    {
      icon: Building2,
      title: "Tempo Médio por Empresa",
      personalData: "2,4",
      marketData: "1,9",
      description: "anos de permanência média",
      comparison: "vs média do setor",
      source: "LinkedIn Brasil, 2023",
      percentage: 75 // (2.4/3.2) * 100 for visual bar
    },
    {
      icon: Target,
      title: "Especialização em OOH",
      personalData: "+12",
      marketData: "<5",
      description: "anos de experiência acumulada",
      comparison: "vs média do mercado",
      source: "Estimativa com base em amostragens do setor OOH (MaxMídia, Eletromidia, LinkedIn)",
      percentage: 90 // visual representation of expertise level
    },
    {
      icon: BarChart3,
      title: "Distribuição Agência vs Veículo",
      personalData: "47% | 25%",
      marketData: "60% | 15%",
      description: "experiência balanceada entre segmentos",
      comparison: "vs padrão do mercado",
      source: "GP e Meio&Mensagem",
      percentage: 80 // balanced experience indicator
    }
  ];

  return (
    <section id="analytics" className="h-screen flex flex-col bg-white-pure text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center pt-8 pb-6">
        <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-3">
          ANÁLISE PROFISSIONAL
        </span>
        <h2 className="font-display text-4xl lg:text-5xl text-ink-black mb-4">
          Analytics da Carreira
        </h2>
        <div className="w-32 h-px bg-gold-accent mx-auto mb-4"></div>
        <p className="font-editorial text-slate-elegant max-w-2xl mx-auto leading-relaxed">
          Dados objetivos que demonstram consistência, maturidade e especialização 
          na área de mídia OOH comparados às médias do mercado brasileiro.
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="flex-1 flex items-center justify-center px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white-pure border border-gold-accent/20 rounded-lg p-6 shadow-editorial hover:shadow-gold transition-all duration-300 group"
              >
                {/* Header with Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gold-accent/10 rounded-full p-3 group-hover:bg-gold-accent/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gold-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-ink-black leading-tight">
                      {kpi.title}
                    </h3>
                  </div>
                </div>

                {/* Main Data Comparison */}
                <div className="mb-4">
                  <div className="flex items-end justify-between mb-2">
                    <div className="text-center">
                      <div className="font-display text-3xl font-bold text-gold-accent mb-1">
                        {kpi.personalData}
                      </div>
                      <div className="font-accent text-xs text-slate-elegant tracking-wide">
                        JEFFERSON
                      </div>
                    </div>
                    
                    <div className="text-center text-slate-elegant">
                      <div className="font-heading text-sm mb-1">vs</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="font-display text-2xl font-semibold text-slate-elegant mb-1">
                        {kpi.marketData}
                      </div>
                      <div className="font-accent text-xs text-slate-elegant tracking-wide">
                        MERCADO
                      </div>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-elegant/20 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-gold-accent to-gold-accent/80 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${kpi.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-editorial text-sm text-slate-elegant mb-3 leading-relaxed">
                  {kpi.description} <span className="text-gold-accent font-medium">{kpi.comparison}</span>
                </p>

                {/* Source */}
                <div className="border-t border-gold-accent/10 pt-3">
                  <p className="font-accent text-xs text-slate-elegant/80 leading-relaxed">
                    <span className="font-medium text-gold-accent">Fonte:</span> {kpi.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 text-center pb-8">
        <p className="font-accent text-xs text-slate-elegant/60 max-w-4xl mx-auto">
          * Dados compilados com base em fontes públicas e análises setoriais. 
          Comparativos refletem médias observadas no mercado brasileiro de mídia e publicidade.
        </p>
      </div>
    </section>
  );
};

export default Analytics;