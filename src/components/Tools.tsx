
import { useState, useRef, useEffect } from 'react';
import { SectionContainer } from './ui/section-container';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
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

  // Enhanced scroll functionality for tabs
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      const currentScroll = tabsRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      tabsRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const renderToolCard = (item: TimelineItem, index: number) => {
    const isECA = item.id === 'eca-usp';
    const CategoryIcon = categoryIcons[selectedCategory as keyof typeof categoryIcons];
    
    const cardContent = (
      <Card 
        className={cn(
          'group relative transition-all duration-500 cursor-pointer border-0 bg-transparent overflow-hidden',
          'hover:-translate-y-2 focus-within:-translate-y-2',
          'animate-fade-in',
          isECA && 'ring-1 ring-gold-accent/40 shadow-lg shadow-gold-accent/20'
        )}
        style={{
          animationDelay: `${index * 100}ms`
        }}
        onClick={() => isMobile ? setSelectedItem(item) : undefined}
      >
        <CardContent className={cn(
          'p-4 md:p-5 h-32 md:h-36 flex flex-col justify-between',
          'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl',
          'group-hover:border-gold-accent/50 group-hover:shadow-2xl group-hover:shadow-gold-accent/10',
          'group-hover:bg-gradient-to-br group-hover:from-gold-accent/5 group-hover:to-gold-accent/10',
          'group-focus-within:border-gold-accent/50 group-focus-within:shadow-xl',
          isECA && 'bg-gradient-to-br from-gold-accent/10 to-gold-accent/5'
        )}>
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Enhanced icon */}
          <div className="relative z-10 flex items-start justify-between mb-2 md:mb-3">
            <div className={cn(
              'w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300',
              'group-hover:scale-110 group-hover:rotate-3',
              isECA 
                ? 'bg-gradient-to-br from-gold-accent to-gold-accent/80 text-ink-black shadow-md' 
                : 'bg-gradient-to-br from-white/20 to-white/10 text-white backdrop-blur-sm border border-white/10'
            )}>
              <CategoryIcon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            
            {/* Hover indicator */}
            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gold-accent" />
          </div>

          {/* Enhanced content */}
          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <div className="space-y-1 md:space-y-2">
              <h4 className={cn(
                'font-heading text-xs md:text-sm font-semibold leading-tight line-clamp-2',
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
            
            <div className="flex items-center justify-between mt-2 md:mt-3">
              {item.year && (
                <Badge className={cn(
                  'text-xs px-2 md:px-2.5 py-0.5 md:py-1 font-medium transition-all duration-300',
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
                <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-gold-accent to-gold-accent/80 rounded-full animate-pulse shadow-lg shadow-gold-accent/50" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );

    // Use Dialog for mobile, HoverCard for desktop
    if (isMobile) {
      return (
        <div key={item.id}>
          {cardContent}
        </div>
      );
    }

    return (
      <HoverCard key={item.id}>
        <HoverCardTrigger asChild>
          {cardContent}
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
    
    // Mobile-first responsive grid
    if (itemCount <= 2) return 'grid-cols-1 sm:grid-cols-2';
    if (itemCount <= 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    if (itemCount <= 4) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4';
    if (itemCount <= 6) return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6';
    
    // For categories with many items, ensure no horizontal scrolling
    if (selectedCategory === 'strong' || selectedCategory === 'tools') {
      return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
    }
    
    return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
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

        {/* Enhanced Tabs Navigation with Mobile Scrolling */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full mb-6 md:mb-8">
          <div className="relative">
            {/* Mobile scroll buttons */}
            {isMobile && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={() => scrollTabs('left')}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={() => scrollTabs('right')}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
            
            <TabsList 
              ref={tabsRef}
              className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1 h-auto gap-1",
                isMobile 
                  ? "flex overflow-x-auto no-scrollbar mx-8 justify-start" 
                  : "flex-wrap justify-center mx-auto w-fit"
              )}
            >
              {categories.map(category => {
                const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={category.key}
                    value={category.key}
                    className={cn(
                      'px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 md:gap-2 whitespace-nowrap',
                      'data-[state=active]:bg-gold-accent data-[state=active]:text-ink-black data-[state=active]:shadow-lg data-[state=active]:scale-105',
                      'data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent/50',
                      isMobile && 'flex-shrink-0'
                    )}
                  >
                    <CategoryIcon className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        'text-xs px-1.5 md:px-2 py-0.5 ml-0.5 md:ml-1',
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
          </div>

          {/* Animated content area */}
          <div className="mt-6 md:mt-8">
            {categories.map(category => (
              <TabsContent 
                key={category.key} 
                value={category.key}
                className="animate-fade-in focus-visible:outline-none"
              >
                <div className="flex justify-center">
                  <div className={cn('grid gap-3 md:gap-4 lg:gap-5 max-w-7xl w-full', getGridColumns())}>
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
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {categories.map(category => {
              const CategoryIcon = categoryIcons[category.key as keyof typeof categoryIcons];
              return (
                <button
                  key={category.key}
                  className={cn(
                    "group p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 text-center",
                    "hover:bg-white/5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent/50",
                    selectedCategory === category.key 
                      ? "bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 border border-gold-accent/30" 
                      : "hover:border-white/20 border border-transparent"
                  )}
                  onClick={() => setSelectedCategory(category.key)}
                  aria-label={`Visualizar ${category.title}`}
                >
                  <div className="flex flex-col items-center space-y-1 md:space-y-2">
                    <CategoryIcon className={cn(
                      "w-4 h-4 md:w-5 md:h-5 transition-colors duration-300",
                      selectedCategory === category.key ? "text-gold-accent" : "text-white/60 group-hover:text-white/80"
                    )} />
                    <div className={cn(
                      "text-lg md:text-xl lg:text-2xl font-display font-bold transition-colors duration-300",
                      selectedCategory === category.key ? "text-gold-accent" : "text-white/80 group-hover:text-white"
                    )}>
                      {category.count}
                    </div>
                    <div className={cn(
                      "text-xs font-accent transition-colors duration-300 leading-tight px-1",
                      selectedCategory === category.key ? "text-gold-accent/80" : "text-white/60 group-hover:text-white/70"
                    )}>
                      <span className="hidden sm:inline">{category.title}</span>
                      <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Detail Modal */}
        {isMobile && selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="max-w-md mx-4 bg-white border border-gold-accent/30 shadow-2xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-ink-black text-lg font-semibold">
                  {selectedItem.title}
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-4 p-0 h-6 w-6"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 border border-gold-accent/20">
                    {(() => {
                      const CategoryIcon = categoryIcons[selectedCategory as keyof typeof categoryIcons];
                      return <CategoryIcon className="w-5 h-5 text-gold-accent" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    {selectedItem.subtitle && (
                      <p className="text-sm text-gold-accent font-accent mb-2">
                        {selectedItem.subtitle}
                      </p>
                    )}
                    {selectedItem.year && (
                      <Badge className="text-xs bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
                        {selectedItem.year}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-grey-sophisticated text-sm font-editorial leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </SectionContainer>
  );
};

export default Tools;
