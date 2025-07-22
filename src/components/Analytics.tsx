import { TrendingUp, Users, Building2, Target, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LabelList } from 'recharts';

const Analytics = () => {
  // Dados para o gráfico de comparação de tempo em liderança
  const leadershipData = [
    { name: 'Jefferson', value: 52, color: '#D4AF37' },
    { name: 'Mercado', value: 28, color: '#94A3B8' }
  ];

  // Dados para o gráfico de permanência por empresa
  const tenureData = [
    { name: 'Jefferson', years: 2.4 },
    { name: 'Mercado', years: 1.9 }
  ];

  // Dados para o radar de competências
  const skillsData = [
    { skill: 'Experiência OOH', Jefferson: 90, Mercado: 45 },
    { skill: 'Liderança', Jefferson: 85, Mercado: 60 },
    { skill: 'Permanência', Jefferson: 75, Mercado: 50 },
    { skill: 'Versatilidade', Jefferson: 80, Mercado: 55 }
  ];

  // Dados para distribuição de experiência
  const distributionData = [
    { name: 'Agência', value: 47, color: '#D4AF37' },
    { name: 'Veículo', value: 25, color: '#B8860B' },
    { name: 'Outros', value: 28, color: '#E5D4A1' }
  ];

  const COLORS = ['#D4AF37', '#B8860B', '#E5D4A1', '#94A3B8'];

  // Função customizada para renderizar labels nas barras
  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    return (
      <text 
        x={x + width / 2} 
        y={y + height / 2} 
        fill="#ffffff" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="bold"
      >
        {value}%
      </text>
    );
  };

  // Função customizada para renderizar labels nas barras de permanência
  const renderTenureLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    return (
      <text 
        x={x + width / 2} 
        y={y + height / 2} 
        fill="#ffffff" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  return (
    <section id="analytics" className="h-screen flex flex-col bg-white text-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-amber-100/20"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center pt-8 pb-6">
        <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest mb-3">
          ANÁLISE PROFISSIONAL
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-4 font-bold">
          Analytics da Carreira
        </h2>
        <div className="w-32 h-px bg-amber-600 mx-auto mb-4"></div>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Dados objetivos que demonstram consistência, maturidade e especialização 
          comparados às médias do mercado brasileiro.
        </p>
      </div>

      {/* Charts Grid */}
      <div className="flex-1 px-8 relative z-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto h-full">
          {/* Tempo em Liderança - Bar Chart */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-amber-600 mr-3" />
              <div>
                <h3 className="font-bold text-lg text-slate-800">Tempo em Liderança</h3>
                <p className="text-sm text-slate-600">% do tempo de carreira</p>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadershipData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" content={renderCustomizedLabel} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              <span className="font-medium text-amber-600">Fonte:</span> LinkedIn Workforce Insights
            </p>
          </div>

          {/* Permanência Média - Line Chart */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Building2 className="w-6 h-6 text-amber-600 mr-3" />
              <div>
                <h3 className="font-bold text-lg text-slate-800">Permanência Média</h3>
                <p className="text-sm text-slate-600">Anos por empresa</p>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tenureData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Bar dataKey="years" fill="#B8860B" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="years" content={renderTenureLabel} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              <span className="font-medium text-amber-600">Fonte:</span> LinkedIn Brasil, 2023
            </p>
          </div>

          {/* Radar de Competências */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-amber-600 mr-3" />
              <div>
                <h3 className="font-bold text-lg text-slate-800">Radar de Competências</h3>
                <p className="text-sm text-slate-600">Comparativo multidimensional</p>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fill: '#64748B' }} />
                  <PolarRadiusAxis tick={{ fontSize: 10, fill: '#64748B' }} domain={[0, 100]} />
                  <Radar
                    name="Jefferson"
                    dataKey="Jefferson"
                    stroke="#D4AF37"
                    fill="#D4AF37"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Mercado"
                    dataKey="Mercado"
                    stroke="#94A3B8"
                    fill="#94A3B8"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
                <span className="text-xs text-slate-600">Jefferson</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-slate-400 rounded-full mr-2"></div>
                <span className="text-xs text-slate-600">Mercado</span>
              </div>
            </div>
          </div>

          {/* Distribuição de Experiência - Pie Chart */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-amber-600 mr-3" />
              <div>
                <h3 className="font-bold text-lg text-slate-800">Distribuição da Experiência</h3>
                <p className="text-sm text-slate-600">Segmentos de atuação</p>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {distributionData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                  <div className="text-xs font-medium text-slate-800">{item.name}</div>
                  <div className="text-xs text-slate-600">{item.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 text-center pb-6">
        <p className="text-xs text-slate-500 max-w-4xl mx-auto">
          * Dados compilados com base em fontes públicas e análises setoriais. 
          Comparativos refletem médias observadas no mercado brasileiro de mídia e publicidade.
        </p>
      </div>
    </section>
  );
};

export default Analytics;
