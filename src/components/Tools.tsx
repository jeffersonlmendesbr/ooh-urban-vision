
import { SectionContainer } from './ui/section-container';
import { PageHeader } from './ui/page-header';
import { toolsData } from '../data/tools';

const Tools = () => {

  return (
    <SectionContainer id="tools" className="bg-white-pure">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            ARSENAL TÉCNICO
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-16 leading-none">
          Ferramentas e Plataformas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {toolsData.map((category, index) => (
            <div key={index} className="bg-cream-editorial/50 border border-gold-accent/20 p-8 hover-lift hover:shadow-gold transition-all duration-300 group">
              <h3 className="text-2xl font-heading text-ink-black mb-8 group-hover:text-gold-accent transition-colors">{category.category}</h3>
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-gold-accent text-ink-black px-4 py-2 text-sm font-accent tracking-wide inline-block mr-2 mb-2 hover:bg-ink-black hover:text-gold-accent transition-colors duration-300">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
