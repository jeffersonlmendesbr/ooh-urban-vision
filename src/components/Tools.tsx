
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';
import { Separator } from './ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { GraduationCap, Monitor, Shield, Wrench, Clock, Sparkles, ArrowUpRight } from 'lucide-react';

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

  const renderToolCard = (item: TimelineItem, index: number) => {
    const isECA = item.id === 'eca-usp';
    const CategoryIcon = categoryIcons[selectedCategory as keyof typeof categoryIcons];
    
    return (
      <HoverCard key={item.id}>
        <HoverCardTrigger asChild>
          <div 
            className={cn(
              'group relative p-5 rounded-xl border transition-all duration-500 cursor-pointer h-36 flex flex-col justify-between',
              'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border-white/10',
              'hover:border-gold-accent/50 hover:shadow-2xl hover:shadow-gold-accent/10 hover:-translate-y-2',
              'hover:bg-gradient-to-br hover:from-gold-accent/5 hover:to-gold-accent/10',
              'animate-fade-in',
              isECA && 'ring-1 ring-gold-accent/40 bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 shadow-lg shadow-gold-accent/20'
            )}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Modern gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Enhanced icon */}
            <div className="relative z-10 flex items-start justify-between mb-3">
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                'group-hover:scale-110 group-hover:rotate-3',
                isECA 
                  ? 'bg-gradient-to-br from-gold-accent to-gold-accent/80 text-ink-black shadow-md' 
                  : 'bg-gradient-to-br from-white/20 to-white/10 text-white backdrop-blur-sm border border-white/10'
              )}>
                <CategoryIcon className="w-5 h-5" />
              </div>
              
              {/* Hover indicator */}
              <ArrowUpRight className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gold-accent" />
            </div>

            {/* Enhanced content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className={cn(
                  'font-heading text-sm font-semibold leading-tight line-clamp-2',
                  'text-white group-hover:text-gold-accent transition-colors duration-300',
                  isECA && 'text-white'
                )}>
                  {item.title}
                </h4>
                
                {item.subtitle && (
                  <p className="text-xs text-gold-accent/90 font-accent line-clamp-1 group-hover:text-gold-accent transition-colors duration-300">
                    {item.subtitle}
                  </p>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-3">
                {item.year && (
                  <Badge className={cn(
                    'text-xs px-2.5 py-1 font-medium transition-all duration-300',
                    isECA 
                      ? 'bg-gold-accent/90 text-ink-black hover:bg-gold-accent' 
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/10'
                  )}>
                    {item.year}
                  </Badge>
                )}
                
                {/* Future category sparkle effect */}
                {selectedCategory === 'future' && (
                  <Sparkles className="w-3 h-3 text-gold-accent animate-pulse" />
                )}
              </div>

              {/* ECA premium indicator */}
              {isECA && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-gold-accent to-gold-accent/80 rounded-full animate-pulse shadow-lg shadow-gold-accent/50" />
                </div>
              )}
            </div>
          </div>
        </HoverCardTrigger>
        
        <HoverCardContent className="w-80 p-5 bg-gradient-to-br from-white to-white/95 border border-gold-accent/30 shadow-2xl shadow-gold-accent/10 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 border border-gold-accent/20">
                <CategoryIcon className="w-5 h-5 text-gold-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-ink-black text-base font-semibold mb-1">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-sm text-gold-accent font-accent mb-2">
                    {item.subtitle}
                  </p>
                )}
                {item.year && (
                  <Badge className="text-xs bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
                    {item.year}
                  </Badge>
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
    <SectionContainer 
      id="tools" 
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/35691327-dd57-4eac-8565-719797073f46.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        {/* Enhanced header with modern styling */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold-accent"></div>
            <span className="text-gold-accent font-accent text-xs md:text-sm tracking-[0.2em] uppercase">
              Ferramentas e Plataformas
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold-accent"></div>
          </div>
          
          <h2 className="text-white text-lg md:text-xl font-heading mb-4 max-w-2xl mx-auto leading-relaxed">
            Especialização contínua em ferramentas estratégicas do mercado OOH
          </h2>
        </div>

        {/* Modern Tabs Navigation */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full mb-8">
          <TabsList className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1 h-auto flex-wrap justify-center gap-1 mx-auto w-fit">
            {categories.map(category => {
              const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
              return (
                <TabsTrigger
                  key={category.key}
                  value={category.key}
                  className={cn(
                    'px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2',
                    'data-[state=active]:bg-gold-accent data-[state=active]:text-ink-black data-[state=active]:shadow-lg',
                    'data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10'
                  )}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span>{category.title}</span>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      'text-xs px-2 py-0.5 ml-1',
                      selectedCategory === category.key 
                        ? 'bg-ink-black/20 text-ink-black' 
                        : 'bg-white/20 text-white/70'
                    )}
                  >
                    {category.count}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Animated content area */}
          <div className="mt-8">
            {categories.map(category => (
              <TabsContent 
                key={category.key} 
                value={category.key}
                className="animate-fade-in"
              >
                <div className="flex justify-center">
                  <div className={cn('grid gap-4 md:gap-5 max-w-7xl w-full', getGridColumns())}>
                    {categorizedData[category.key as keyof typeof categorizedData].map((item, index) => 
                      renderToolCard(item, index)
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Enhanced Summary Stats */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="grid grid-cols-5 gap-3 md:gap-6 max-w-4xl mx-auto">
            {categories.map(category => {
              const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
              return (
                <div
                  key={category.key}
                  className={cn(
                    "group cursor-pointer p-3 rounded-xl transition-all duration-300 text-center",
                    "hover:bg-white/5 hover:scale-105",
                    selectedCategory === category.key 
                      ? "bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 border border-gold-accent/30" 
                      : "hover:border-white/20 border border-transparent"
                  )}
                  onClick={() => setSelectedCategory(category.key)}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <CategoryIcon className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      selectedCategory === category.key ? "text-gold-accent" : "text-white/60 group-hover:text-white/80"
                    )} />
                    <div className={cn(
                      "text-xl md:text-2xl font-display font-bold transition-colors duration-300",
                      selectedCategory === category.key ? "text-gold-accent" : "text-white/80 group-hover:text-white"
                    )}>
                      {category.count}
                    </div>
                    <div className={cn(
                      "text-xs font-accent transition-colors duration-300 leading-tight",
                      selectedCategory === category.key ? "text-gold-accent/80" : "text-white/60 group-hover:text-white/70"
                    )}>
                      {category.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
