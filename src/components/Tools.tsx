
import { SectionContainer } from './ui/section-container';
import { PageHeader } from './ui/page-header';
import { toolsData } from '../data/tools';

const Tools = () => {

  return (
    <SectionContainer id="tools" className="bg-warm-beige">
      <PageHeader title="Ferramentas e Plataformas">
        <div className="grid md:grid-cols-3 gap-8">
          {toolsData.map((category, index) => (
            <div key={index} className="bg-soft-white rounded-xl p-8">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-6">{category.category}</h3>
              <div className="space-y-2">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-olive-green text-soft-white px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>
    </SectionContainer>
  );
};

export default Tools;
