
import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, Calendar, Users, Star, CheckCircle } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Jefferson Mendes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
              <a href="#africa" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Africa DDB</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experiência</a>
              <a href="#presence" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Presença</a>
              <a href="#manifesto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Manifesto</a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Ferramentas</a>
              <a href="#oohplanner" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">OOHPlanner</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
                <a href="#africa" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Africa DDB</a>
                <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Experiência</a>
                <a href="#presence" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Presença</a>
                <a href="#manifesto" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Manifesto</a>
                <a href="#tools" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Ferramentas</a>
                <a href="#oohplanner" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">OOHPlanner</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contato</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23E5E7EB" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Especialista em Mídia OOH
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
              Jefferson<br />
              <span className="text-blue-600">Mendes</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              Transformando a paisagem urbana em oportunidades de conexão através de 
              <span className="text-blue-600 font-medium"> estratégias inovadoras</span> em Out-of-Home media
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg hover:shadow-lg hover:scale-105">
                Vamos Conversar
              </a>
              <a href="#about" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg">
                Conheça Minha História
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Campanhas Executadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Estados Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Sobre Mim</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Com mais de uma década de experiência no mercado publicitário, sou especialista em mídia Out-of-Home (OOH) 
                  e apaixonado por transformar espaços urbanos em pontos de conexão entre marcas e pessoas.
                </p>
                <p>
                  Minha trajetória inclui passagens por grandes agências como Africa Creative DDB, onde desenvolvi 
                  estratégias inovadoras que revolucionaram a forma como as marcas se comunicam no ambiente urbano.
                </p>
                <p>
                  Hoje, dedico-me a democratizar o acesso à mídia OOH através de ferramentas como o OOHPlanner, 
                  tornando este universo mais acessível para empresas de todos os tamanhos.
                </p>
              </div>
              <div className="mt-8">
                <a href="#africa" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Conheça minha trajetória na Africa DDB
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expertise Principal</h3>
              <div className="space-y-4">
                {[
                  'Estratégia de Mídia OOH',
                  'Planejamento de Campanhas Integradas',
                  'Análise de Dados e Performance',
                  'Geomarketing e Audiência',
                  'Inovação em Mídia Digital',
                  'Gestão de Equipes e Projetos'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Africa Creative DDB Section */}
      <section id="africa" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Africa Creative DDB</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meus anos na Africa Creative DDB foram fundamentais para moldar minha visão estratégica 
              e aprofundar minha expertise em mídia Out-of-Home.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Especialista em Mídia OOH</h3>
                    <p className="text-blue-600 font-medium">2018 - 2023 • 5 anos</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Na Africa Creative DDB, liderei estratégias de mídia Out-of-Home para grandes contas, 
                    desenvolvendo campanhas inovadoras que resultaram em aumentos significativos de brand awareness e engajamento.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Principais Conquistas:</h4>
                    <ul className="space-y-2">
                      {[
                        'Gestão de portfolio de clientes premium com faturamento de R$ 50M+',
                        'Desenvolvimento de metodologias proprietárias de planejamento',
                        'Mentoria e desenvolvimento de equipes júnior',
                        'Implementação de ferramentas avançadas de análise de dados',
                        'Criação de cases premiados no mercado publicitário'
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-3">Impacto Quantitativo</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">200+</div>
                      <div className="text-sm text-gray-600">Campanhas Planejadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">35%</div>
                      <div className="text-sm text-gray-600">Aumento Médio ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Marcas Atendidas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Satisfação Cliente</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl">
                  <h4 className="font-bold mb-3">Reconhecimento</h4>
                  <p className="text-sm opacity-90">
                    "Jefferson foi fundamental para revolucionar nossa abordagem de mídia OOH. 
                    Sua visão estratégica e conhecimento técnico elevaram nossos resultados a um novo patamar."
                  </p>
                  <div className="mt-3 text-sm font-medium">
                    — Direção Geral, Africa Creative DDB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Trajetória Profissional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma década construindo expertise em mídia Out-of-Home através de experiências diversificadas
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Africa Creative DDB */}
              <div className="relative flex items-start md:pl-20">
                <div className="absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Africa Creative DDB</h3>
                      <p className="text-blue-600 font-semibold text-lg">Especialista em Mídia OOH</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">2018 - 2023</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Período de maior crescimento profissional, desenvolvendo estratégias inovadoras 
                    para grandes contas e estabelecendo novos padrões de planejamento de mídia OOH.
                  </p>
                </div>
              </div>

              {/* Agências Regionais */}
              <div className="relative flex items-start md:pl-20">
                <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Agências Regionais</h3>
                      <p className="text-blue-600 font-semibold text-lg">Planejador de Mídia Senior</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">2015 - 2018</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Expansão da atuação para mercados regionais, desenvolvendo expertise em 
                    geomarketing e estratégias localizadas de comunicação.
                  </p>
                </div>
              </div>

              {/* Veículos OOH */}
              <div className="relative flex items-start md:pl-20">
                <div className="absolute left-6 w-5 h-5 bg-blue-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Grandes Veículos OOH</h3>
                      <p className="text-blue-600 font-semibold text-lg">Executivo de Contas</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">2012 - 2015</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Experiência direta no lado dos veículos, compreendendo profundamente 
                    a operação e as possibilidades técnicas da mídia exterior.
                  </p>
                </div>
              </div>

              {/* Início da Carreira */}
              <div className="relative flex items-start md:pl-20">
                <div className="absolute left-6 w-5 h-5 bg-blue-300 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Início da Jornada</h3>
                      <p className="text-blue-600 font-semibold text-lg">Assistente de Planejamento</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">2010 - 2012</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Primeiros passos na publicidade, construindo bases sólidas em 
                    planejamento de mídia e desenvolvendo paixão pela comunicação exterior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Presence Section */}
      <section id="presence" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Presença Nacional</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experiência consolidada em mais de 15 estados brasileiros, 
              compreendendo as particularidades de cada mercado regional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { region: 'Sudeste', states: 'SP, RJ, MG, ES', campaigns: '200+' },
              { region: 'Sul', states: 'RS, SC, PR', campaigns: '120+' },
              { region: 'Nordeste', states: 'BA, PE, CE, RN', campaigns: '150+' },
              { region: 'Centro-Oeste', states: 'DF, GO, MT, MS', campaigns: '80+' },
              { region: 'Norte', states: 'AM, PA, RO, AC', campaigns: '60+' },
              { region: 'Nacional', states: 'Campanhas Integradas', campaigns: '300+' }
            ].map((region, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{region.region}</h3>
                <p className="text-blue-100 mb-3">{region.states}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{region.campaigns}</span>
                  <span className="text-sm text-blue-200">Campanhas</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Alcance Total</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Estados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200">Cidades</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500M+</div>
                  <div className="text-blue-200">Impactos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold mb-12">Meu Manifesto</h2>
          <div className="space-y-8 text-xl leading-relaxed">
            <blockquote className="border-l-4 border-blue-400 pl-6 italic">
              "Acredito que a mídia Out-of-Home é mais do que publicidade - 
              é arte urbana que conecta, inspira e transforma a experiência das pessoas na cidade."
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-6 italic">
              "Cada campanha é uma oportunidade de criar momentos únicos, 
              onde a criatividade encontra a estratégia e gera impacto real na vida das pessoas."
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-6 italic">
              "Minha missão é democratizar o acesso a esta poderosa ferramenta de comunicação, 
              tornando-a acessível e eficiente para marcas de todos os tamanhos."
            </blockquote>
          </div>
          <div className="mt-12">
            <a href="#tools" className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-lg">
              Veja as ferramentas que uso para isso
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ferramentas & Tecnologias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stack tecnológico e metodologias que utilizo para entregar resultados excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Análise de Dados',
                tools: ['Google Analytics', 'Power BI', 'Tableau', 'Excel Avançado'],
                color: 'bg-blue-500',
                description: 'Insights profundos de performance e audiência'
              },
              {
                category: 'Geomarketing',
                tools: ['ArcGIS', 'QGIS', 'Google Earth Pro', 'Mapbox'],
                color: 'bg-green-500',
                description: 'Análise territorial e localização estratégica'
              },
              {
                category: 'Planejamento',
                tools: ['Sismidia', 'Kantar IBOPE', 'Nielsen', 'Target Group Index'],
                color: 'bg-purple-500',
                description: 'Softwares especializados em mídia OOH'
              },
              {
                category: 'Gestão de Projetos',
                tools: ['Monday.com', 'Asana', 'Trello', 'Microsoft Project'],
                color: 'bg-orange-500',
                description: 'Organização e acompanhamento de campanhas'
              },
              {
                category: 'Apresentações',
                tools: ['PowerPoint', 'Keynote', 'Figma', 'Canva Pro'],
                color: 'bg-pink-500',
                description: 'Comunicação visual e storytelling'
              },
              {
                category: 'CRM & Comercial',
                tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'RD Station'],
                color: 'bg-indigo-500',
                description: 'Relacionamento e gestão comercial'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.category}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                <div className="space-y-1">
                  {tool.tools.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white px-3 py-1 rounded-full inline-block mr-2 mb-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OOHPlanner Section */}
      <section id="oohplanner" className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">OOHPlanner</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A ferramenta que desenvolvi para revolucionar o planejamento de mídia Out-of-Home, 
              democratizando o acesso a estratégias profissionais
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-8">Por que Criei o OOHPlanner?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Democratização do Acesso</h4>
                    <p className="text-blue-100">Tornar o planejamento profissional de OOH acessível para empresas de todos os tamanhos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Eficiência Operacional</h4>
                    <p className="text-blue-100">Reduzir drasticamente o tempo necessário para criar estratégias eficazes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Precisão Estratégica</h4>
                    <p className="text-blue-100">Eliminar o "achismo" e basear decisões em dados concretos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Funcionalidades Principais</h3>
              <div className="space-y-4">
                {[
                  'Interface intuitiva para planejamento de campanhas',
                  'Base de dados completa de pontos de mídia',
                  'Análise automatizada de audiência e geomarketing',
                  'Relatórios detalhados de performance e ROI',
                  'Integração com principais veículos OOH do país',
                  'Dashboard executivo em tempo real'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Campanhas Planejadas</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Clientes Ativos</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-200">Economia de Tempo</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfação</div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Quero Conhecer o OOHPlanner
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">O Que Dizem Sobre Mim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos de clientes e parceiros que trabalharam comigo ao longo da minha trajetória
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "Jefferson transformou completamente nossa estratégia de mídia OOH. Sua visão estratégica 
                e conhecimento técnico resultaram em campanhas com performance 40% superior ao esperado. 
                Um profissional excepcional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodrigues</div>
                  <div className="text-gray-500">Diretora de Marketing • Empresa Nacional</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "O OOHPlanner revolucionou nossa forma de trabalhar. Uma ferramenta indispensável 
                que nos permitiu otimizar investimentos e aumentar significativamente o ROI das campanhas. 
                Jefferson é um visionário."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">João Silva</div>
                  <div className="text-gray-500">Head de Planejamento • Agência Regional</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "Trabalhar com Jefferson foi uma experiência transformadora. Sua capacidade de traduzir 
                objetivos de negócio em estratégias de mídia eficazes é impressionante. 
                Resultados consistentemente acima das expectativas."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">AC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Costa</div>
                  <div className="text-gray-500">CEO • Startup de Tecnologia</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg">
                "Um profissional que combina expertise técnica com visão de negócios. 
                Jefferson nos ajudou a expandir para novos mercados com estratégias precisas e eficientes. 
                Parceria de longo prazo garantida."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">RF</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Roberto Ferreira</div>
                  <div className="text-gray-500">Diretor Comercial • Multinacional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Vamos Conversar?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades de parceria 
              ou simplesmente trocar ideias sobre o futuro da mídia OOH
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Como Posso Ajudar?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Consultoria Estratégica',
                    description: 'Desenvolvimento de estratégias personalizadas de mídia OOH'
                  },
                  {
                    title: 'Planejamento de Campanhas',
                    description: 'Criação de planos de mídia otimizados e orientados por dados'
                  },
                  {
                    title: 'Treinamentos Corporativos',
                    description: 'Capacitação de equipes em mídia Out-of-Home'
                  },
                  {
                    title: 'Palestras e Workshops',
                    description: 'Compartilhamento de conhecimento e tendências do mercado'
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{service.title}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">jefferson.mendes@exemplo.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Localização</h4>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para Revolucionar sua Estratégia OOH?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Vamos transformar sua visão em campanhas de alto impacto que conectam sua marca com o público certo, 
                no momento certo, no lugar certo.
              </p>
              <a href="mailto:jefferson.mendes@exemplo.com" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Iniciar Conversa
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jefferson Mendes</h3>
              <p className="text-gray-400 mb-4">
                Especialista em Mídia OOH transformando a comunicação urbana através de estratégias inovadoras.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">Sobre</a>
                <a href="#africa" className="block text-gray-400 hover:text-white transition-colors">Africa DDB</a>
                <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experiência</a>
                <a href="#oohplanner" className="block text-gray-400 hover:text-white transition-colors">OOHPlanner</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>São Paulo, SP - Brasil</p>
                <p>jefferson.mendes@exemplo.com</p>
                <p>(11) 99999-9999</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Jefferson Mendes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
