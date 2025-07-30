import { Users, Building2, Target, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LabelList, Legend, Tooltip } from 'recharts';
import { Card } from './ui/card';

const Analytics = () => {
  // HSL colors corresponding to the new design system for recharts
  const primaryColor = 'hsl(40 80% 60%)';
  const foregroundColor = 'hsl(220 20% 98%)';
  const mutedColor = 'hsl(220 15% 65%)';
  const cardColor = 'hsl(220 10% 12%)';

  const leadershipData = [{ name: 'Jefferson', value: 52 }, { name: 'Mercado', value: 28 }];
  const tenureData = [{ name: 'Jefferson', years: 2.4 }, { name: 'Mercado', years: 1.9 }];
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
  const PIE_COLORS = ['hsl(40 80% 60%)', 'hsl(40 80% 45%)', 'hsl(40 80% 30%)'];

  const ChartCard = ({ title, subtitle, icon: Icon, children }: { title: string, subtitle: string, icon: React.ElementType, children: React.ReactNode }) => (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <p className="text-sm text-foreground/70">{subtitle}</p>
        </div>
      </div>
      <div className="flex-1 text-xs">
        {children}
      </div>
    </Card>
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 glass-card text-xs border-primary/20">
          <p className="label text-foreground/80">{`${label}`}</p>
          {payload.map((pld: any, index: number) => (
            <p key={index} style={{ color: pld.fill }}>{`${pld.name}: ${pld.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics" className="py-24 lg:py-32" style={{
      backgroundImage: `
        radial-gradient(circle at 5% 5%, hsla(var(--primary), 0.1) 0px, transparent 30%),
        radial-gradient(circle at 95% 95%, hsla(var(--primary), 0.1) 0px, transparent 30%)
      `,
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary">Análise Profissional</h2>
          <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
          <p className="mt-4 text-3xl lg:text-4xl font-bold text-foreground mb-4">Analytics da Carreira</p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Dados objetivos que demonstram consistência, maturidade e especialização comparados às médias do mercado brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChartCard title="Tempo em Liderança" subtitle="% do tempo de carreira" icon={Users}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadershipData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid stroke={mutedColor} strokeOpacity={0.2} />
                <XAxis dataKey="name" stroke={mutedColor} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke={mutedColor} fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--primary), 0.1)' }} />
                <Bar dataKey="value" fill={primaryColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Permanência Média" subtitle="Anos por empresa" icon={Building2}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tenureData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid stroke={mutedColor} strokeOpacity={0.2} />
                <XAxis dataKey="name" stroke={mutedColor} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke={mutedColor} fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--primary), 0.1)' }} />
                <Bar dataKey="years" fill={primaryColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Radar de Competências" subtitle="Comparativo multidimensional" icon={Target}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid stroke={mutedColor} strokeOpacity={0.3} />
                <PolarAngleAxis dataKey="skill" tick={{ fill: foregroundColor, fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: mutedColor, fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Radar name="Jefferson" dataKey="Jefferson" stroke={primaryColor} fill={primaryColor} fillOpacity={0.4} />
                <Radar name="Mercado" dataKey="Mercado" stroke={mutedColor} fill={mutedColor} fillOpacity={0.2} />
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Distribuição da Experiência" subtitle="Segmentos de atuação" icon={BarChart3}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distributionData} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey="value" nameKey="name">
                  {distributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <p className="text-center text-xs text-foreground/60 mt-12">
          * Dados compilados com base em fontes públicas e análises setoriais. Comparativos refletem médias observadas no mercado brasileiro de mídia e publicidade.
        </p>
      </div>
    </section>
  );
};

export default Analytics;
