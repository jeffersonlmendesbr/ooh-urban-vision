
import { useState } from 'react';
import { SectionContainer } from './ui/section-container';
import { timelineData, TimelineItem } from '../data/timeline';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Organizar dados por categoria
  const categorizedData = {
    academic: timelineData.filter(item => 
      item.id === 'unifieo' || item.id === 'eca-usp' || item.id === 'ooh-fgv'
    ),
    strong: timelineData.filter(item => 
      item.category === 'strong' && !['unifieo', 'eca-usp', 'ooh-fgv'].includes(item.id)
    ),
    certifications: timelineData.filter(item => item.category === 'certification'),
    tools: timelineData.filter(item => item.category === 'illustrative'),
    future: timelineData.filter(item => item.category === 'future')
  };

  const getCategoryConfig = (categoryKey: string) => {
    const configs = {
      academic: {
        title: 'Formação Acadêmica',
        subtitle: 'Base sólida para especialização',
        gridCols: 'grid-cols-1 md:grid-cols-3',
        cardStyle: 'bg-gradient-to-br from-gold-accent/5 to-gold-accent/10 border-gold-accent/30',
        iconStyle: 'text-gold-accent bg-gold-accent/10'
      },
      strong: {
        title: 'Domínio Forte',
        subtitle: 'Ferramentas com expertise avançada',
        gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        cardStyle: 'bg-white-pure border-ink-black/10 hover:border-gold-accent/40',
        iconStyle: 'text-ink-black bg-ink-black/5'
      },
      certifications: {
        title: 'Certificações',
        subtitle: 'Credenciais profissionais validadas',
        gridCols: 'grid-cols-1 md:grid-cols-2',
        cardStyle: 'bg-gradient-to-br from-ink-black/5 to-ink-black/10 border-ink-black/20',
        iconStyle: 'text-ink-black bg-white-pure'
      },
      tools: {
        title: 'Conhecimento Aplicado',
        subtitle: 'Ferramentas complementares',
        gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
        cardStyle: 'bg-grey-sophisticated/5 border-grey-sophisticated/20',
        iconStyle: 'text-grey-sophisticated bg-white-pure'
      },
      future: {
        title: 'Planejamento Futuro',
        subtitle: 'Próximos passos estratégicos',
        gridCols: 'grid-cols-1 md:grid-cols-2',
        cardStyle: 'bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 border-gold-accent/20 border-dashed',
        iconStyle: 'text-gold-accent/70 bg-gold-accent/5'
      }
    };
    return configs[categoryKey as keyof typeof configs];
  };

  const renderCategorySection = (categoryKey: string, items: TimelineItem[]) => {
    if (items.length === 0) return null;
    
    const config = getCategoryConfig(categoryKey);
    const isECAHighlight = categoryKey === 'academic';

    return (
      <div key={categoryKey} className="mb-16">
        {/* Category Header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-ink-black mb-2">
            {config.title}
          </h3>
          <p className="text-grey-sophisticated font-editorial text-sm">
            {config.subtitle}
          </p>
          <div className="w-16 h-px bg-gold-accent mx-auto mt-4"></div>
        </div>

        {/* Items Grid */}
        <div className={cn('grid gap-4', config.gridCols)}>
          {items.map((item) => {
            const isECA = item.id === 'eca-usp';
            
            return (
              <HoverCard key={item.id}>
                <HoverCardTrigger asChild>
                  <div className={cn(
                    'group relative p-4 rounded-lg border transition-all duration-300 cursor-pointer',
                    config.cardStyle,
                    isECA && 'ring-2 ring-gold-accent/30 scale-105',
                    'hover:shadow-lg hover:-translate-y-1'
                  )}>
                    {/* Icon */}
                    <div className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110',
                      config.iconStyle,
                      isECA && 'w-12 h-12 bg-gold-accent text-ink-black'
                    )}>
                      <item.icon className={cn(
                        'transition-all duration-300',
                        isECA ? 'w-6 h-6' : 'w-5 h-5'
                      )} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className={cn(
                        'font-heading text-sm font-medium text-ink-black mb-1 group-hover:text-gold-accent transition-colors',
                        isECA && 'text-base'
                      )}>
                        {item.title}
                      </h4>
                      
                      {item.subtitle && (
                        <p className="text-xs text-gold-accent font-accent mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      
                      {item.year && (
                        <Badge className={cn(
                          'text-xs',
                          isECA ? 'bg-gold-accent text-ink-black' : 'bg-ink-black/10 text-ink-black'
                        )}>
                          {item.year}
                        </Badge>
                      )}

                      {/* ECA Special Badge */}
                      {isECA && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-4 h-4 bg-gold-accent rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
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
    );
  };

  return (
    <SectionContainer id="tools" className="bg-gradient-editorial">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            ARSENAL PROFISSIONAL
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto mb-8"></div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-6 leading-none">
            Ferramentas e Plataformas
          </h2>
          <p className="text-grey-sophisticated text-lg max-w-3xl mx-auto font-editorial">
            Uma trajetória de especialização contínua, desde a formação acadêmica até as ferramentas mais avançadas do mercado OOH.
          </p>
        </div>

        {/* Categories Sections */}
        {renderCategorySection('academic', categorizedData.academic)}
        {renderCategorySection('strong', categorizedData.strong)}
        {renderCategorySection('certifications', categorizedData.certifications)}
        {renderCategorySection('tools', categorizedData.tools)}
        {renderCategorySection('future', categorizedData.future)}

        {/* Summary Stats */}
        <div className="mt-16 pt-8 border-t border-gold-accent/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-display text-gold-accent mb-1">
                {categorizedData.academic.length}
              </div>
              <div className="text-sm text-grey-sophisticated font-accent">
                Formações
              </div>
            </div>
            <div>
              <div className="text-2xl font-display text-gold-accent mb-1">
                {categorizedData.strong.length}
              </div>
              <div className="text-sm text-grey-sophisticated font-accent">
                Domínio Forte
              </div>
            </div>
            <div>
              <div className="text-2xl font-display text-gold-accent mb-1">
                {categorizedData.certifications.length}
              </div>
              <div className="text-sm text-grey-sophisticated font-accent">
                Certificações
              </div>
            </div>
            <div>
              <div className="text-2xl font-display text-gold-accent mb-1">
                {categorizedData.future.length}
              </div>
              <div className="text-sm text-grey-sophisticated font-accent">
                Em Breve
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
