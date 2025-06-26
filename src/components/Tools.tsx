
const Tools = () => {
  const toolsData = [
    {
      category: "Planejamento",
      tools: ['Sismidia', 'Kantar IBOPE', 'Nielsen', 'Target Group Index', 'Google Analytics']
    },
    {
      category: "Mensuração",
      tools: ['Power BI', 'Tableau', 'Google Data Studio', 'Excel Avançado', 'QGIS']
    },
    {
      category: "Formação",
      tools: ['Monday.com', 'Figma', 'Salesforce', 'HubSpot', 'Mapbox']
    }
  ];

  return (
    <section id="tools" className="min-h-screen flex items-center py-24 bg-warm-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">Ferramentas e Plataformas</h2>
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
      </div>
    </section>
  );
};

export default Tools;
