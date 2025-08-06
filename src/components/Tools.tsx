
import React, { useState, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { GraduationCap, Monitor, Shield, Wrench, Clock, Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('academic');
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const isMobile = useIsMobile();
  const tabsRef = useRef<HTMLDivElement>(null);

  // Data organization remains the same
  const categorizedData = {
    academic: timelineData.filter(item => item.id === 'unifieo' || item.id === 'eca-usp' || item.id === 'ooh-fgv' || item.id === 'idiomas'),
    strong: timelineData.filter(item => item.category === 'strong' && !['unifieo', 'eca-usp', 'ooh-fgv', 'idiomas'].includes(item.id)),
    certifications: timelineData.filter(item => item.category === 'certification'),
    tools: timelineData.filter(item => item.category === 'illustrative'),
    future: timelineData.filter(item => item.category === 'future')
  };

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

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  const renderToolCard = (item: TimelineItem, index: number) => {
    const isECA = item.id === 'eca-usp';
    const CategoryIcon = categoryIcons[selectedCategory as keyof typeof categoryIcons];
    
    const cardContent = (
      <Card 
        className={cn(
          'group relative transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col',
          'hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10',
          'focus-within:-translate-y-2 focus-within:shadow-xl focus-within:shadow-primary/10',
          'animate-in fade-in-0 zoom-in-95 duration-500',
          'border-border/50 backdrop-blur-sm',
          isECA && 'ring-2 ring-primary/50 shadow-lg shadow-primary/20'
        )}
        style={{ 
          animationDelay: `${index * 100}ms`,
          background: isECA 
            ? 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.02))'
            : 'hsl(var(--card) / 0.8)'
        }}
        onClick={() => isMobile ? setSelectedItem(item) : undefined}
      >
        <CardContent className="p-6 flex flex-col justify-between flex-1 relative">
          {/* Background gradient overlay */}
          <div className={cn(
            'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
            'bg-gradient-to-br from-primary/5 via-transparent to-primary/10'
          )} />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500',
                'group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg',
                isECA 
                  ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/30'
                  : 'bg-gradient-to-br from-primary/10 to-primary/5 text-primary border border-primary/20'
              )}>
                <CategoryIcon className="w-6 h-6" />
              </div>
              {!isMobile && (
                <ArrowUpRight className="w-5 h-5 text-foreground/30 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              <h4 className={cn(
                'font-bold text-base leading-tight line-clamp-2 transition-colors duration-300',
                isECA ? 'text-primary' : 'text-foreground group-hover:text-primary'
              )}>
                {item.title}
              </h4>
              {item.subtitle && (
                <p className="text-sm text-muted-foreground font-medium line-clamp-2 group-hover:text-primary/80 transition-colors duration-300">
                  {item.subtitle}
                </p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              {item.year && (
                <Badge 
                  variant={isECA ? 'default' : 'secondary'} 
                  className={cn(
                    'text-xs font-semibold transition-all duration-300',
                    !isECA && 'group-hover:bg-primary group-hover:text-primary-foreground'
                  )}
                >
                  {item.year}
                </Badge>
              )}
              {selectedCategory === 'future' && (
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-5 h-5 text-primary/50" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );

    if (isMobile) return <div key={item.id}>{cardContent}</div>;

    return (
      <HoverCard key={item.id} openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>{cardContent}</HoverCardTrigger>
        <HoverCardContent className="w-96 p-6 glass-card border-primary/20 shadow-xl shadow-primary/10">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className={cn(
                'w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300',
                isECA 
                  ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/30' 
                  : 'bg-gradient-to-br from-primary/10 to-primary/5 text-primary border border-primary/20'
              )}>
                <CategoryIcon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">{item.title}</h4>
                {item.subtitle && (
                  <p className="text-sm text-primary font-semibold mb-3 leading-relaxed">{item.subtitle}</p>
                )}
                {item.year && (
                  <Badge 
                    variant={isECA ? 'default' : 'secondary'} 
                    className="text-xs font-semibold"
                  >
                    {item.year}
                  </Badge>
                )}
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  };

  const getGridColumns = () => 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7';

  return (
    <section
      id="tools" 
      className="py-12 sm:py-20 lg:py-32 xl:py-40 relative overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Enhanced background with subtle patterns */}
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
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 49%, hsl(var(--border)/0.3) 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, hsl(var(--border)/0.2) 50%, transparent 51%)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-wide uppercase text-primary">
              Ferramentas e Plataformas
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Arsenal Tecnológico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6 rounded-full" />
          <p className="text-xl lg:text-2xl xl:text-3xl text-foreground/80 max-w-3xl xl:max-w-5xl mx-auto leading-relaxed">
            Especialização contínua em ferramentas estratégicas que potencializam resultados no mercado OOH
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="relative flex justify-center mb-12 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-300">
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border border-border/50" 
                onClick={() => scrollTabs('left')}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}
            <TabsList 
              ref={tabsRef} 
              className={cn(
                "p-2 h-auto glass-card border-primary/20 shadow-lg backdrop-blur-md",
                "max-w-full overflow-x-auto no-scrollbar",
                isMobile ? "mx-12" : "mx-0"
              )}
            >
              {categories.map((category, index) => {
                const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={category.key}
                    value={category.key}
                    className={cn(
                      "px-6 py-3 text-sm font-semibold flex items-center gap-3 transition-all duration-300",
                      "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                      "data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20",
                      "hover:bg-primary/10 hover:text-primary rounded-lg"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CategoryIcon className="w-5 h-5" />
                    <span className="whitespace-nowrap">{category.title}</span>
                    <Badge 
                      variant={selectedCategory === category.key ? 'secondary' : 'outline'} 
                      className={cn(
                        "ml-1 text-xs font-bold transition-colors duration-300",
                        selectedCategory === category.key && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                      )}
                    >
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm border border-border/50" 
                onClick={() => scrollTabs('right')}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="min-h-[500px] lg:min-h-[600px]">
            {categories.map(category => (
              <TabsContent 
                key={category.key} 
                value={category.key} 
                className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              >
                <div className={cn('grid gap-6 lg:gap-8 w-full', getGridColumns())}>
                  {categorizedData[category.key as keyof typeof categorizedData].map((item, index) =>
                    renderToolCard(item, index)
                  )}
                </div>
                {categorizedData[category.key as keyof typeof categorizedData].length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Wrench className="w-8 h-8 text-primary/50" />
                    </div>
                    <p className="text-foreground/60 text-lg">Nenhum item encontrado nesta categoria</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {isMobile && selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="glass-card border-primary/20 shadow-xl max-w-md">
              <DialogHeader className="relative pb-6">
                <DialogTitle className="text-xl font-bold text-foreground pr-8">
                  {selectedItem.title}
                </DialogTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 hover:bg-destructive/10 hover:text-destructive" 
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg',
                    selectedItem.id === 'eca-usp' 
                      ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/30' 
                      : 'bg-gradient-to-br from-primary/10 to-primary/5 text-primary border border-primary/20'
                  )}>
                    {React.createElement(categoryIcons[selectedCategory as keyof typeof categoryIcons], { className: "w-7 h-7" })}
                  </div>
                  <div className="flex-1">
                    {selectedItem.subtitle && (
                      <p className="text-sm text-primary font-semibold mb-3 leading-relaxed">
                        {selectedItem.subtitle}
                      </p>
                    )}
                    {selectedItem.year && (
                      <Badge 
                        variant={selectedItem.id === 'eca-usp' ? 'default' : 'secondary'} 
                        className="text-xs font-semibold"
                      >
                        {selectedItem.year}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Tools;
