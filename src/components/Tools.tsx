
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const Tools = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const getCategoryStyles = (category: TimelineItem['category']) => {
    switch (category) {
      case 'strong':
        return {
          circle: 'w-6 h-6 bg-gold-accent border-4 border-white-pure shadow-gold hover:scale-125',
          connector: 'bg-gold-accent/40',
          badge: 'bg-gold-accent text-ink-black'
        };
      case 'certification':
        return {
          circle: 'w-5 h-5 bg-ink-black border-2 border-gold-accent hover:scale-110',
          connector: 'bg-ink-black/20',
          badge: 'bg-ink-black text-gold-accent'
        };
      case 'future':
        return {
          circle: 'w-4 h-4 bg-gold-accent/30 border-2 border-gold-accent/50 hover:scale-105',
          connector: 'bg-gold-accent/20',
          badge: 'bg-gold-accent/20 text-gold-accent border border-gold-accent/30'
        };
      default: // illustrative
        return {
          circle: 'w-3 h-3 bg-grey-sophisticated border-2 border-white-pure hover:scale-105',
          connector: 'bg-grey-sophisticated/20',
          badge: 'bg-grey-sophisticated text-white-pure'
        };
    }
  };

  return (
    <SectionContainer id="tools" className="bg-gradient-editorial">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            JORNADA DE ESPECIALIZAÇÃO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-6 leading-none">
            Ferramentas e Plataformas
          </h2>
          <p className="text-grey-sophisticated text-lg max-w-2xl mx-auto font-editorial">
            Uma trajetória de especialização contínua, desde a formação acadêmica até as ferramentas mais avançadas do mercado OOH.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-accent/20 via-gold-accent/60 to-gold-accent/20 transform -translate-y-1/2"></div>

          {/* Timeline Items */}
          <div className="flex justify-between items-center py-12 overflow-x-auto no-scrollbar">
            <div className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 min-w-max px-4">
              {timelineData.sort((a, b) => a.order - b.order).map((item, index) => {
                const styles = getCategoryStyles(item.category);
                const isCenter = item.id === 'eca-usp';
                
                return (
                  <HoverCard key={item.id}>
                    <HoverCardTrigger asChild>
                      <div 
                        className="relative flex flex-col items-center cursor-pointer group"
                        onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
                      >
                        {/* Circle Marker */}
                        <div className={cn(
                          'rounded-full transition-all duration-300 relative z-10',
                          styles.circle,
                          isCenter && 'ring-4 ring-gold-accent/30',
                          selectedItem?.id === item.id && 'scale-125 ring-2 ring-gold-accent'
                        )}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <item.icon className={cn(
                              'transition-all duration-300',
                              item.category === 'strong' ? 'w-3 h-3 text-ink-black' :
                              item.category === 'certification' ? 'w-2.5 h-2.5 text-gold-accent' :
                              item.category === 'future' ? 'w-2 h-2 text-gold-accent' :
                              'w-2 h-2 text-white-pure'
                            )} />
                          </div>
                        </div>

                        {/* Item Label */}
                        <div className="mt-4 text-center max-w-[120px]">
                          <h3 className={cn(
                            'font-accent text-xs tracking-wide mb-1 transition-colors duration-300',
                            item.category === 'strong' ? 'text-ink-black group-hover:text-gold-accent' :
                            item.category === 'certification' ? 'text-ink-black' :
                            item.category === 'future' ? 'text-gold-accent/70' :
                            'text-grey-sophisticated'
                          )}>
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs text-grey-sophisticated/70">
                              {item.subtitle}
                            </p>
                          )}
                          {item.year && (
                            <span className="text-xs text-gold-accent font-accent mt-1 block">
                              {item.year}
                            </span>
                          )}
                        </div>

                        {/* Category Badge (visible on hover) */}
                        <Badge 
                          className={cn(
                            'mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs',
                            styles.badge
                          )}
                        >
                          {item.category === 'strong' ? 'Domínio Forte' :
                           item.category === 'certification' ? 'Certificação' :
                           item.category === 'future' ? 'Futuro' : 'Conhecimento'}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    
                    <HoverCardContent className="w-80 p-4 bg-white-pure border border-gold-accent/20 shadow-editorial">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            'p-2 rounded-full',
                            item.category === 'strong' ? 'bg-gold-accent/10' :
                            item.category === 'certification' ? 'bg-ink-black/10' :
                            item.category === 'future' ? 'bg-gold-accent/5' :
                            'bg-grey-sophisticated/10'
                          )}>
                            <item.icon className={cn(
                              'w-4 h-4',
                              item.category === 'strong' ? 'text-gold-accent' :
                              item.category === 'certification' ? 'text-ink-black' :
                              item.category === 'future' ? 'text-gold-accent/70' :
                              'text-grey-sophisticated'
                            )} />
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
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-gold-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gold-accent rounded-full"></div>
              <span className="text-sm font-accent text-grey-sophisticated">Domínio Forte</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-ink-black rounded-full"></div>
              <span className="text-sm font-accent text-grey-sophisticated">Certificações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-grey-sophisticated rounded-full"></div>
              <span className="text-sm font-accent text-grey-sophisticated">Conhecimento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gold-accent/30 border-2 border-gold-accent/50 rounded-full"></div>
              <span className="text-sm font-accent text-grey-sophisticated">Futuro Planejado</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
