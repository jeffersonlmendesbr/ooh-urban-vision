
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';
import { Separator } from './ui/separator';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { GraduationCap, Monitor, Shield, Wrench, Clock } from 'lucide-react';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('academic');

  // Organizar dados por categoria
  const categorizedData = {
    academic: timelineData.filter(item => item.id === 'unifieo' || item.id === 'eca-usp' || item.id === 'ooh-fgv' || item.id === 'idiomas'),
    strong: timelineData.filter(item => item.category === 'strong' && !['unifieo', 'eca-usp', 'ooh-fgv', 'idiomas'].includes(item.id)),
    certifications: timelineData.filter(item => item.category === 'certification'),
    tools: timelineData.filter(item => item.category === 'illustrative'),
    future: timelineData.filter(item => item.category === 'future')
  };

  // Ícones padronizados por categoria
  const categoryIcons = {
    academic: GraduationCap,
    strong: Monitor,
    certifications: Shield,
    tools: Wrench,
    future: Clock
  };

  const categories = [{
    key: 'academic',
    title: 'Formação',
    count: categorizedData.academic.length
  }, {
    key: 'strong',
    title: 'Domínio Forte',
    count: categorizedData.strong.length
  }, {
    key: 'certifications',
    title: 'Certificações',
    count: categorizedData.certifications.length
  }, {
    key: 'tools',
    title: 'Ferramentas',
    count: categorizedData.tools.length
  }, {
    key: 'future',
    title: 'Em Breve',
    count: categorizedData.future.length
  }];

  const getCurrentItems = () => {
    return categorizedData[selectedCategory as keyof typeof categorizedData] || [];
  };

  const renderToolCard = (item: TimelineItem) => {
    const isECA = item.id === 'eca-usp';
    const CategoryIcon = categoryIcons[selectedCategory as keyof typeof categoryIcons];
    
    return (
      <HoverCard key={item.id}>
        <HoverCardTrigger asChild>
          <div className={cn(
            'group relative p-4 rounded-lg border transition-all duration-300 cursor-pointer bg-white-pure border-ink-black/10 hover:border-gold-accent/40 hover:shadow-md hover:-translate-y-1 h-32 flex flex-col justify-between',
            isECA && 'ring-2 ring-gold-accent/30 bg-gradient-to-br from-gold-accent/5 to-gold-accent/10'
          )}>
            {/* Icon */}
            <div className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110',
              isECA ? 'bg-gold-accent text-ink-black' : 'text-ink-black bg-ink-black/5'
            )}>
              <CategoryIcon className="w-4 h-4" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className={cn(
                  'font-heading text-sm font-medium text-ink-black mb-1 group-hover:text-gold-accent transition-colors leading-tight line-clamp-2',
                  isECA && 'text-sm'
                )}>
                  {item.title}
                </h4>
                
                {item.subtitle && (
                  <p className="text-xs text-gold-accent font-accent mb-2 line-clamp-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
              
              {item.year && (
                <Badge className={cn(
                  'text-xs px-2 py-1 w-fit',
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
                <CategoryIcon className="w-4 h-4 text-gold-accent" />
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

  const getGridColumns = () => {
    const itemCount = getCurrentItems().length;
    
    // Para categorias com poucos itens, centralize com menos colunas
    if (itemCount <= 2) return 'grid-cols-1 md:grid-cols-2';
    if (itemCount <= 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (itemCount <= 4) return 'grid-cols-2 md:grid-cols-4';
    if (itemCount <= 6) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
    
    // Para domínio forte e ferramentas (muitos itens), force uma linha
    if (selectedCategory === 'strong' || selectedCategory === 'tools') {
      return `grid-cols-2 md:grid-cols-4 lg:grid-cols-${Math.min(itemCount, 8)}`;
    }
    
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
  };

  return (
    <SectionContainer id="tools" className="bg-gradient-editorial">
      <div className="max-w-7xl mx-auto padding-responsive w-full">
        {/* Header Compacto com linha divisória */}
        <div className="text-center mb-6 lg:mb-8">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            FERRAMENTAS E PLATAFORMAS
          </span>
          
          {/* Linha divisória padrão */}
          <Separator className="w-20 lg:w-24 mx-auto mb-4 bg-gold-accent/30" />
          
          <p className="text-grey-sophisticated text-responsive-lg max-w-2xl mx-auto font-editorial text-ink-black">
            Especialização contínua em ferramentas estratégicas do mercado OOH
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={cn(
                'px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-accent transition-all duration-300 hover-lift',
                selectedCategory === category.key
                  ? 'bg-gold-accent text-ink-black shadow-premium'
                  : 'glass-effect text-grey-sophisticated hover:bg-gold-accent/10 border border-ink-black/10'
              )}
            >
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.slice(0, 8)}</span>
              <span className="ml-1 sm:ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Tools Grid - Centralizado e responsivo */}
        <div className="flex justify-center mb-6">
          <div className={cn('grid gap-3 sm:gap-4 max-w-6xl w-full', getGridColumns())}>
            {getCurrentItems().map(renderToolCard)}
          </div>
        </div>

        {/* Summary Stats Compacto */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 text-center pt-4 border-t border-gold-accent/20">
          {categories.map(category => (
            <div
              key={category.key}
              className="cursor-pointer hover-lift"
              onClick={() => setSelectedCategory(category.key)}
            >
              <div className={cn(
                "text-lg sm:text-xl font-display mb-1 transition-colors",
                selectedCategory === category.key ? "text-gold-accent" : "text-grey-sophisticated"
              )}>
                {category.count}
              </div>
              <div className="text-xs text-grey-sophisticated font-accent bg-transparent">
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.slice(0, 6)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
