
import { useState, useRef } from 'react';
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
          'group relative transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col',
          'hover:-translate-y-1 focus-within:-translate-y-1',
          'animate-in fade-in-0 zoom-in-95',
          isECA && 'ring-2 ring-primary/50'
        )}
        style={{ animationDelay: `${index * 50}ms` }}
        onClick={() => isMobile ? setSelectedItem(item) : undefined}
      >
        <CardContent className="p-4 flex flex-col justify-between flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300',
              'group-hover:scale-110 group-hover:rotate-3',
              isECA 
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary/10 text-primary'
            )}>
              <CategoryIcon className="w-5 h-5" />
            </div>
            {!isMobile && <ArrowUpRight className="w-4 h-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />}
          </div>
          <div className="space-y-1.5">
            <h4 className="font-bold text-sm leading-tight line-clamp-2 text-foreground">
              {item.title}
            </h4>
            {item.subtitle && (
              <p className="text-xs text-primary font-semibold line-clamp-1">
                {item.subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-3">
            {item.year && (
              <Badge variant={isECA ? 'default' : 'secondary'} className="text-xs">
                {item.year}
              </Badge>
            )}
            {selectedCategory === 'future' && (
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            )}
          </div>
        </CardContent>
      </Card>
    );

    if (isMobile) return <div key={item.id}>{cardContent}</div>;

    return (
      <HoverCard key={item.id} openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>{cardContent}</HoverCardTrigger>
        <HoverCardContent className="w-80 p-4 glass-card">
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className={cn(
                'w-12 h-12 rounded-lg flex items-center justify-center shrink-0',
                isECA ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
              )}>
                <CategoryIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base text-foreground mb-1">{item.title}</h4>
                {item.subtitle && <p className="text-sm text-primary font-semibold mb-2">{item.subtitle}</p>}
                {item.year && <Badge variant={isECA ? 'default' : 'secondary'}>{item.year}</Badge>}
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  };

  const getGridColumns = () => 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';

  return (
    <section
      id="tools" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 5% 95%, hsla(var(--primary), 0.1) 0px, transparent 25%),
          radial-gradient(circle at 95% 5%, hsla(var(--primary), 0.1) 0px, transparent 25%)
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-primary">
            Ferramentas e Plataformas
          </span>
          <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
          <h2 className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
            Especialização contínua em ferramentas estratégicas do mercado OOH
          </h2>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="relative flex justify-center mb-8">
            {isMobile && (
              <Button variant="ghost" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2" onClick={() => scrollTabs('left')}><ChevronLeft /></Button>
            )}
            <TabsList ref={tabsRef} className="p-1 h-auto glass-card max-w-full overflow-x-auto no-scrollbar">
              {categories.map(category => {
                const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={category.key}
                    value={category.key}
                    className="px-4 py-2.5 text-sm font-semibold flex items-center gap-2"
                  >
                    <CategoryIcon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <Badge variant={selectedCategory === category.key ? 'default' : 'secondary'} className="ml-1">{category.count}</Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {isMobile && (
              <Button variant="ghost" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2" onClick={() => scrollTabs('right')}><ChevronRight /></Button>
            )}
          </div>

          <div className="min-h-[400px]">
            {categories.map(category => (
              <TabsContent key={category.key} value={category.key} className="animate-in fade-in-50 duration-500">
                <div className={cn('grid gap-4 w-full', getGridColumns())}>
                  {categorizedData[category.key as keyof typeof categorizedData].map((item, index) =>
                    renderToolCard(item, index)
                  )}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {isMobile && selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="glass-card">
              <DialogHeader>
                <DialogTitle>{selectedItem.title}</DialogTitle>
                <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setSelectedItem(null)}><X className="h-4 w-4" /></Button>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center shrink-0', selectedItem.id === 'eca-usp' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary')}>
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    {selectedItem.subtitle && <p className="text-sm text-primary font-semibold mb-2">{selectedItem.subtitle}</p>}
                    {selectedItem.year && <Badge variant={selectedItem.id === 'eca-usp' ? 'default' : 'secondary'}>{selectedItem.year}</Badge>}
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{selectedItem.description}</p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Tools;
