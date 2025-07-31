import { Users, Building2, Target, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LabelList, Legend, Tooltip } from 'recharts';
import { Card } from './ui/card';

const Analytics = () => {
  // HSL colors using CSS variables for consistency with design system
  const primaryColor = 'hsl(var(--primary))';
  const foregroundColor = 'hsl(var(--foreground))';
  const mutedColor = 'hsl(var(--muted-foreground))';
  const accentColor = 'hsl(var(--accent))';

  const leadershipData = [
    { name: 'Jefferson', value: 52 }, 
    { name: 'Mercado', value: 28 }
  ];
  
  const tenureData = [
    { name: 'Jefferson', years: 2.4 }, 
    { name: 'Mercado', years: 1.9 }
  ];
  
  const skillsData = [
    { skill: 'Experiência OOH', Jefferson: 90, Mercado: 45 },
    { skill: 'Liderança', Jefferson: 85, Mercado: 60 },
    { skill: 'Permanência', Jefferson: 75, Mercado: 50 },
    { skill: 'Versatilidade', Jefferson: 80, Mercado: 55 }
  ];
  
  const distributionData = [
    { name: 'Agência', value: 47 },
    { name: 'Veículo', value: 25 },
    { name: 'Outros', value: 28 }
  ];
  
  const PIE_COLORS = [
    'hsl(var(--primary))', 
    'hsl(var(--primary) / 0.8)', 
    'hsl(var(--primary) / 0.6)'
  ];

  const ChartCard = ({ title, subtitle, icon: Icon, children }: { 
    title: string, 
    subtitle: string, 
    icon: React.ElementType, 
    children: React.ReactNode 
  }) => (
    <Card className="p-6 h-[400px] flex flex-col glass-card">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mr-4 shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </Card>
  );

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean
    payload?: { fill: string; name: string; value: number }[]
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 glass-card text-sm border-primary/20 shadow-lg rounded-lg">
          <p className="label text-foreground font-semibold mb-2">{`${label}`}</p>
          {payload.map((pld, index) => (
            <p key={index} className="text-sm" style={{ color: pld.fill }}>
              {`${pld.name}: ${pld.value}${typeof pld.value === 'number' && pld.value < 10 ? ' anos' : '%'}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id="analytics" 
      className="py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, hsla(var(--primary), 0.08) 0px, transparent 35%),
              radial-gradient(circle at 80% 20%, hsla(var(--primary), 0.08) 0px, transparent 35%),
              radial-gradient(circle at 40% 40%, hsla(var(--primary), 0.03) 0px, transparent 50%)
            `,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-wide uppercase text-primary">
              Análise Profissional
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Analytics da Carreira
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Dados objetivos que demonstram consistência, maturidade e especialização comparados às médias do mercado brasileiro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-300">
          <ChartCard title="Tempo em Liderança" subtitle="% do tempo de carreira" icon={Users}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadershipData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid stroke={mutedColor} strokeOpacity={0.2} strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  stroke={mutedColor} 
                  fontSize={14} 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: foregroundColor }}
                />
                <YAxis 
                  stroke={mutedColor} 
                  fontSize={14} 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: foregroundColor }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--primary), 0.1)' }} />
                <Bar 
                  dataKey="value" 
                  fill={primaryColor} 
                  radius={[8, 8, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Permanência Média" subtitle="Anos por empresa" icon={Building2}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tenureData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid stroke={mutedColor} strokeOpacity={0.2} strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  stroke={mutedColor} 
                  fontSize={14} 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: foregroundColor }}
                />
                <YAxis 
                  stroke={mutedColor} 
                  fontSize={14} 
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: foregroundColor }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--primary), 0.1)' }} />
                <Bar 
                  dataKey="years" 
                  fill={primaryColor} 
                  radius={[8, 8, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Radar de Competências" subtitle="Comparativo multidimensional" icon={Target}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <PolarGrid stroke={mutedColor} strokeOpacity={0.3} />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fill: foregroundColor, fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 100]} 
                  tick={{ fill: mutedColor, fontSize: 10 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Radar 
                  name="Jefferson" 
                  dataKey="Jefferson" 
                  stroke={primaryColor} 
                  fill={primaryColor} 
                  fillOpacity={0.6}
                  strokeWidth={2}
                  animationDuration={1000}
                />
                <Radar 
                  name="Mercado" 
                  dataKey="Mercado" 
                  stroke={mutedColor} 
                  fill={mutedColor} 
                  fillOpacity={0.3}
                  strokeWidth={2}
                  animationDuration={1000}
                />
                <Legend iconSize={12} wrapperStyle={{fontSize: "14px", color: foregroundColor}} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Distribuição da Experiência" subtitle="Segmentos de atuação" icon={BarChart3}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <Pie 
                  data={distributionData} 
                  cx="50%" 
                  cy="50%" 
                  labelLine={false} 
                  outerRadius={100} 
                  innerRadius={40}
                  dataKey="value" 
                  nameKey="name"
                  animationDuration={1000}
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize={12} wrapperStyle={{fontSize: "14px", color: foregroundColor}}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="text-center mt-16 animate-in fade-in-0 delay-700">
          <p className="text-sm text-muted-foreground bg-card/50 backdrop-blur-sm rounded-lg px-6 py-4 inline-block border border-border/50">
            * Dados compilados com base em fontes públicas e análises setoriais. Comparativos refletem médias observadas no mercado brasileiro de mídia e publicidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
