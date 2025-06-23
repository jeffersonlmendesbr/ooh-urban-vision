
import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Jefferson Mendes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experiência</a>
              <a href="#manifesto" className="text-gray-700 hover:text-blue-600 transition-colors">Manifesto</a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors">Ferramentas</a>
              <a href="#oohplanner" className="text-gray-700 hover:text-blue-600 transition-colors">OOHPlanner</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
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
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
                <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Experiência</a>
                <a href="#manifesto" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Manifesto</a>
                <a href="#tools" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ferramentas</a>
                <a href="#oohplanner" className="block px-3 py-2 text-gray-700 hover:text-blue-600">OOHPlanner</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Jefferson Mendes
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Especialista em Mídia OOH | Estrategista Digital | Inovador em Publicidade Exterior
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Transformando a paisagem urbana em oportunidades de conexão através de estratégias inovadoras em Out-of-Home media.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Entre em Contato
              </a>
              <a href="#about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Mim</h2>
              <p className="text-lg text-gray-600 mb-6">
                Com mais de uma década de experiência no mercado publicitário, sou especialista em mídia Out-of-Home (OOH) 
                e apaixonado por transformar espaços urbanos em pontos de conexão entre marcas e pessoas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Minha trajetória inclui passagens por grandes agências como Africa Creative DDB, onde desenvolvi 
                estratégias inovadoras que revolucionaram a forma como as marcas se comunicam no ambiente urbano.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, dedico-me a democratizar o acesso à mídia OOH através de ferramentas como o OOHPlanner, 
                tornando este universo mais acessível para empresas de todos os tamanhos.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Estratégia de Mídia OOH
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Planejamento de Campanhas
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Análise de Dados e Métricas
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Inovação Digital
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Gestão de Equipes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Experiência Profissional</h2>
          
          <div className="space-y-12">
            {/* Africa Creative DDB */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Africa Creative DDB</h3>
                  <p className="text-blue-600 font-semibold">Especialista em Mídia OOH</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2018 - 2023</span>
              </div>
              <p className="text-gray-600 mb-4">
                Liderei estratégias de mídia Out-of-Home para grandes contas, desenvolvendo campanhas inovadoras 
                que resultaram em aumentos significativos de brand awareness e engajamento.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Gestão de portfolio de clientes premium</li>
                <li>Desenvolvimento de novas metodologias de planejamento</li>
                <li>Mentoria de equipes júnior</li>
                <li>Implementação de ferramentas de análise de dados</li>
              </ul>
            </div>

            {/* Previous Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Experiência Anterior</h3>
                  <p className="text-blue-600 font-semibold">Diversas Agências e Veículos</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2010 - 2018</span>
              </div>
              <p className="text-gray-600">
                Construí minha base sólida em mídia OOH trabalhando em diferentes segmentos do mercado, 
                desde pequenas agências até grandes grupos de comunicação, sempre focado em entregar 
                resultados excepcionais para os clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Meu Manifesto</h2>
          <div className="text-xl leading-relaxed space-y-6">
            <p>
              "Acredito que a mídia Out-of-Home é mais do que publicidade - é arte urbana que conecta, 
              inspira e transforma a experiência das pessoas na cidade."
            </p>
            <p>
              "Cada campanha é uma oportunidade de criar momentos únicos, onde a criatividade encontra 
              a estratégia e gera impacto real na vida das pessoas."
            </p>
            <p>
              "Minha missão é democratizar o acesso a esta poderosa ferramenta de comunicação, 
              tornando-a acessível e eficiente para marcas de todos os tamanhos."
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Ferramentas & Tecnologias</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Análise de Dados</h3>
              <p className="text-gray-600">Google Analytics, Power BI, Tableau para insights profundos de performance</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planejamento</h3>
              <p className="text-gray-600">Softwares especializados em geomarketing e planejamento de mídia OOH</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão</h3>
              <p className="text-gray-600">Ferramentas de gestão de projetos e relacionamento com clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* OOHPlanner Section */}
      <section id="oohplanner" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">OOHPlanner</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A ferramenta que criei para revolucionar o planejamento de mídia Out-of-Home, 
              tornando-o mais acessível, eficiente e estratégico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Características Principais</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Interface intuitiva para planejamento de campanhas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Base de dados completa de pontos de mídia</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Análise de audiência e geomarketing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Relatórios detalhados de performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Integração com principais veículos OOH</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Impacto</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Campanhas Planejadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30%</div>
                  <div className="text-sm opacity-90">Economia de Tempo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Depoimentos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                "Jefferson transformou nossa estratégia de mídia OOH. Sua visão estratégica e conhecimento 
                técnico resultaram em campanhas com performance excepcional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodrigues</div>
                  <div className="text-gray-500">Diretora de Marketing</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                "O OOHPlanner revolucionou nossa forma de trabalhar. Uma ferramenta indispensável 
                para qualquer profissional sério de mídia OOH."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">João Silva</div>
                  <div className="text-gray-500">Planejador de Mídia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades de parceria 
              ou simplesmente trocar ideias sobre o futuro da mídia OOH.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">jefferson@exemplo.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-300">(11) 99999-9999</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-gray-300">São Paulo, SP</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Jefferson Mendes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
