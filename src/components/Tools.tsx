
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('academic');

  // Organizar dados por categoria
  const categorizedData = {
    academic: timelineData.filter(item => 
      item.id === 'unifieo' || item.id === 'eca-usp' || item.id === 'ooh-fgv' || item.id === 'idiomas'
    ),
    strong: timelineData.filter(item => 
      item.category === 'strong' && !['unifieo', 'eca-usp', 'ooh-fgv', 'idiomas'].includes(item.id)
    ),
    certifications: timelineData.filter(item => item.category === 'certification'),
    tools: timelineData.filter(item => item.category === 'illustrative'),
    future: timelineData.filter(item => item.category === 'future')
  };

  const categories = [
    { key: 'academic', title: 'Formação', count: categorizedData.academic.length },
    { key: 'strong', title: 'Domínio Forte', count: categorizedData.strong.length },
    { key: 'certifications', title: 'Certificações', count: categorizedData.certifications.length },
    { key: 'tools', title: 'Ferramentas', count: categorizedData.tools.length },
    { key: 'future', title: 'Em Breve', count: categorizedData.future.length }
  ];

  const getCurrentItems = () => {
    return categorizedData[selectedCategory as keyof typeof categorizedData] || [];
  };

  const renderToolCard = (item: TimelineItem) => {
    const isECA = item.id === 'eca-usp';
    
    return (
      <HoverCard key={item.id}>
        <HoverCardTrigger asChild>
          <div className={cn(
            'group relative p-3 rounded-lg border transition-all duration-300 cursor-pointer bg-white-pure border-ink-black/10 hover:border-gold-accent/40 hover:shadow-md hover:-translate-y-1',
            isECA && 'ring-2 ring-gold-accent/30 bg-gradient-to-br from-gold-accent/5 to-gold-accent/10'
          )}>
            {/* Icon */}
            <div className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110',
              isECA ? 'bg-gold-accent text-ink-black' : 'text-ink-black bg-ink-black/5'
            )}>
              <item.icon className="w-4 h-4" />
            </div>

            {/* Content */}
            <div>
              <h4 className={cn(
                'font-heading text-xs font-medium text-ink-black mb-1 group-hover:text-gold-accent transition-colors leading-tight',
                isECA && 'text-sm'
              )}>
                {item.title}
              </h4>
              
              {item.subtitle && (
                <p className="text-xs text-gold-accent font-accent mb-1">
                  {item.subtitle}
                </p>
              )}
              
              {item.year && (
                <Badge className={cn(
                  'text-xs px-1 py-0',
                  isECA ? 'bg-gold-accent text-ink-black' : 'bg-ink-black/10 text-ink-black'
                )}>
                  {item.year}
                </Badge>
              )}

              {/* ECA Special Badge */}
              {isECA && (
                <div className="absolute -top-1 -right-1">
                  <div className="w-3 h-3 bg-gold-accent rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        </HoverCardTrigger>
        
        <HoverCardContent className="w-80 p-4 bg-white-pure border border-gold-accent/20 shadow-editorial">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-gold-accent/10">
                <item.icon className="w-4 h-4 text-gold-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-ink-black text-sm mb-1">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs text-gold-accent font-accent mb-2">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
            <p className="text-grey-sophisticated text-sm font-editorial leading-relaxed">
              {item.description}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  };

  return (
    <SectionContainer id="tools" className="bg-gradient-editorial">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header Compacto */}
        <div className="text-center mb-8">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-2">
            ARSENAL PROFISSIONAL
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ink-black mb-3 leading-none">
            Ferramentas e Plataformas
          </h2>
          <p className="text-grey-sophisticated text-base max-w-2xl mx-auto font-editorial">
            Especialização contínua em ferramentas estratégicas do mercado OOH
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-accent transition-all duration-300',
                selectedCategory === category.key
                  ? 'bg-gold-accent text-ink-black shadow-md'
                  : 'bg-white-pure text-grey-sophisticated hover:bg-gold-accent/10 border border-ink-black/10'
              )}
            >
              {category.title}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          {getCurrentItems().map(renderToolCard)}
        </div>

        {/* Summary Stats Compacto */}
        <div className="grid grid-cols-5 gap-4 text-center pt-4 border-t border-gold-accent/20">
          {categories.map((category) => (
            <div key={category.key} className="cursor-pointer" onClick={() => setSelectedCategory(category.key)}>
              <div className={cn(
                "text-xl font-display mb-1 transition-colors",
                selectedCategory === category.key ? "text-gold-accent" : "text-grey-sophisticated"
              )}>
                {category.count}
              </div>
              <div className="text-xs text-grey-sophisticated font-accent">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
