
import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, ArrowRight, CheckCircle, Star, MapPin } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-soft-white font-editorial">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-soft-white/95 backdrop-blur-sm border-b border-warm-beige z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-heading text-dark-charcoal">
              Jefferson Mendes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Sobre</a>
              <a href="#africa" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Africa DDB</a>
              <a href="#experiencias" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Experiências</a>
              <a href="#presenca" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Presença</a>
              <a href="#manifesto" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Manifesto</a>
              <a href="#ferramentas" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Ferramentas</a>
              <a href="#oohplanner" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">OOHPlanner</a>
              <a href="#contato" className="text-dark-charcoal hover:text-olive-green transition-colors font-medium">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-dark-charcoal">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-soft-white border-t border-warm-beige animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#sobre" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Sobre</a>
                <a href="#africa" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Africa DDB</a>
                <a href="#experiencias" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Experiências</a>
                <a href="#presenca" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Presença</a>
                <a href="#manifesto" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Manifesto</a>
                <a href="#ferramentas" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Ferramentas</a>
                <a href="#oohplanner" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">OOHPlanner</a>
                <a href="#contato" className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium">Contato</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-warm-beige relative overflow-hidden experimental-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 bg-matte-silver rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-dark-charcoal">JM</span>
              </div>
            </div>
            <div className="text-center lg:text-left animate-scale-in">
              <h1 className="text-4xl md:text-6xl font-heading text-dark-charcoal mb-6 leading-tight">
                A cidade é a tela.<br />
                <span className="text-olive-green">O desafio é capturar</span><br />
                olhares que não pediram por isso.
              </h1>
              <div className="text-2xl font-heading text-olive-green mb-8">
                Jefferson Mendes
              </div>
              <div className="text-lg text-dark-charcoal mb-8">
                Especialista em Mídia OOH • +15 anos de experiência
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/jefferson-mendes" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a href="mailto:jeffersonlmendes@gmail.com" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail
                </a>
                <a href="tel:+5511997941150" className="flex items-center text-dark-charcoal hover:text-olive-green transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  +55 11 99794-1150
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-24 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-12 text-center">Sobre Mim</h2>
          <div className="space-y-8 text-lg text-dark-charcoal leading-relaxed">
            <p>
              Sou um profissional híbrido que combina o rigor estratégico de um planejador de mídia 
              com a sensibilidade criativa necessária para entender que cada campanha OOH é, antes de tudo, 
              uma conversa entre marca e cidade.
            </p>
            <p>
              Minha trajetória de mais de 15 anos me levou da operação tática aos corredores estratégicos 
              de agências como Africa Creative DDB, sempre com uma obsessão: como transformar dados de 
              deslocamento urbano em momentos de impacto real.
            </p>
            <p>
              Acredito que o futuro da mídia exterior está na intersecção entre tecnologia, comportamento 
              humano e a urgência de comunicar com propósito. Por isso, desenvolvo ferramentas como o 
              OOHPlanner - para que estratégia deixe de ser privilégio e se torne acessível.
            </p>
            <div className="flex items-center justify-center mt-12">
              <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
                <span className="font-medium">+15 anos</span>
              </div>
              <div className="mx-6 text-matte-silver">•</div>
              <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
                <span className="font-medium">Experiência Internacional</span>
              </div>
              <div className="mx-6 text-matte-silver">•</div>
              <div className="bg-olive-green text-soft-white px-6 py-2 rounded-full">
                <span className="font-medium">Gestão de Equipe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencias" className="py-24 bg-warm-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">Experiências</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-soft-white rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-4">VML + Galeria</h3>
              <p className="text-olive-green font-medium mb-4">Campanhas VIVO</p>
              <p className="text-dark-charcoal">
                Desenvolvimento de estratégias integradas para uma das maiores operadoras do país, 
                focando em soluções inovadoras de mídia exterior.
              </p>
            </div>
            <div className="bg-soft-white rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-4">Eletromidia</h3>
              <p className="text-olive-green font-medium mb-4">NOALVO, Dados, DV360</p>
              <p className="text-dark-charcoal">
                Implementação de soluções baseadas em dados e programática, revolucionando 
                a forma como trabalhamos com audiência e performance.
              </p>
            </div>
            <div className="bg-soft-white rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-4">Latcom</h3>
              <p className="text-olive-green font-medium mb-4">Disney, Spotify</p>
              <p className="text-dark-charcoal">
                Gestão de contas globais com foco em estratégias que conectam marcas 
                internacionais com a realidade do mercado brasileiro.
              </p>
            </div>
            <div className="bg-soft-white rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-4">Kallas</h3>
              <p className="text-olive-green font-medium mb-4">Coordenação e Liderança</p>
              <p className="text-dark-charcoal">
                Desenvolvimento de equipes e processos, estabelecendo metodologias 
                que se tornaram referência no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Africa Creative DDB Section */}
      <section id="africa" className="py-24 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-8">Africa Creative DDB</h2>
          <div className="bg-dark-charcoal text-soft-white p-12 rounded-2xl">
            <p className="text-xl leading-relaxed mb-8">
              Na Africa Creative, encontrei o ambiente perfeito para combinar criatividade e estratégia. 
              Trabalhando ao lado dos melhores profissionais do mercado, desenvolvi campanhas que não apenas 
              entregaram resultados, mas também elevaram o padrão de excelência da agência no Cannes Lions 2025.
            </p>
            <div className="text-olive-green font-medium">
              "Aqui, criatividade e dados não competem - eles dançam juntos."
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 bg-dark-charcoal text-soft-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-heading mb-12">Manifesto</h2>
          <div className="space-y-8 text-xl leading-relaxed">
            <blockquote className="border-l-4 border-olive-green pl-6 italic">
              "A mídia exterior não deveria ser sobre ocupar espaço, mas sobre criar conexões. 
              Cada ponto de mídia é uma oportunidade de diálogo, não de interrupção."
            </blockquote>
            <blockquote className="border-l-4 border-olive-green pl-6 italic">
              "Dados são a bússola, criatividade é o combustível, mas é o entendimento 
              do comportamento urbano que nos leva ao destino certo."
            </blockquote>
            <blockquote className="border-l-4 border-olive-green pl-6 italic">
              "Não basta estar na rua. É preciso estar no momento certo, 
              falando com quem importa, da forma que ressoa."
            </blockquote>
            <div className="text-2xl font-heading text-olive-green mt-12">
              "Se é pra estar na rua, que seja com propósito."
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas Section */}
      <section id="ferramentas" className="py-24 bg-warm-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">Ferramentas e Plataformas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-soft-white rounded-xl p-8">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-6">Planejamento</h3>
              <div className="space-y-2">
                {['Sismidia', 'Kantar IBOPE', 'Nielsen', 'Target Group Index', 'Google Analytics'].map((tool, index) => (
                  <div key={index} className="bg-olive-green text-soft-white px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-soft-white rounded-xl p-8">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-6">Mensuração</h3>
              <div className="space-y-2">
                {['Power BI', 'Tableau', 'Google Data Studio', 'Excel Avançado', 'QGIS'].map((tool, index) => (
                  <div key={index} className="bg-olive-green text-soft-white px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-soft-white rounded-xl p-8">
              <h3 className="text-2xl font-heading text-dark-charcoal mb-6">Formação</h3>
              <div className="space-y-2">
                {['Monday.com', 'Figma', 'Salesforce', 'HubSpot', 'Mapbox'].map((tool, index) => (
                  <div key={index} className="bg-olive-green text-soft-white px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OOHPlanner Section */}
      <section id="oohplanner" className="py-24 bg-dark-charcoal text-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading mb-8">OOHPlanner</h2>
          <p className="text-xl mb-12 leading-relaxed">
            OOHPlanner é um projeto em construção que nasce da urgência de transformar dados, 
            deslocamento e inventário urbano em decisões estratégicas.
          </p>
          <div className="bg-olive-green/20 border border-olive-green rounded-2xl p-8">
            <p className="text-lg leading-relaxed">
              Uma ferramenta que democratiza o acesso ao planejamento profissional de mídia OOH, 
              eliminando a barreira entre grandes agências e pequenos anunciantes. 
              Porque estratégia não deveria ser privilégio.
            </p>
          </div>
        </div>
      </section>

      {/* Presença Nacional Section */}
      <section id="presenca" className="py-24 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-8 text-center">Presença Nacional</h2>
          <p className="text-xl text-center text-dark-charcoal mb-16 max-w-3xl mx-auto">
            Planejar mídia é mais do que escolher espaços — é entender as ruas.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre',
              'Salvador', 'Recife', 'Fortaleza', 'Brasília',
              'Curitiba', 'Manaus', 'Belém', 'Goiânia'
            ].map((city, index) => (
              <div key={index} className="bg-warm-beige border border-olive-green rounded-xl p-4 text-center hover-lift">
                <h3 className="font-heading text-dark-charcoal">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que dizem sobre mim Section */}
      <section className="py-24 bg-warm-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading text-dark-charcoal mb-16 text-center">O que dizem sobre mim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-soft-white rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-olive-green fill-current" />
                ))}
              </div>
              <p className="text-dark-charcoal mb-6 italic">
                "Jefferson transformou nossa visão sobre mídia OOH. Sua capacidade de traduzir 
                dados em estratégias reais é impressionante."
              </p>
              <div className="font-medium text-dark-charcoal">
                Diretor de Marketing
              </div>
            </div>
            <div className="bg-soft-white rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-olive-green fill-current" />
                ))}
              </div>
              <p className="text-dark-charcoal mb-6 italic">
                "Um profissional que combina visão técnica com entendimento de negócio. 
                Resultados sempre acima das expectativas."
              </p>
              <div className="font-medium text-dark-charcoal">
                Head de Planejamento
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://linkedin.com/in/jefferson-mendes" className="inline-flex items-center text-olive-green font-medium hover:text-dark-charcoal transition-colors">
              Ver todas no LinkedIn
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-dark-charcoal text-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading mb-8">Conecte-se comigo</h2>
          <p className="text-xl mb-12 leading-relaxed">
            Estou sempre aberto para discutir projetos, trocar ideias sobre o futuro da mídia OOH 
            ou simplesmente conversar sobre como podemos transformar espaços urbanos em oportunidades.
          </p>
          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <Mail className="w-6 h-6 text-olive-green" />
              <a href="mailto:jeffersonlmendes@gmail.com" className="text-lg hover:text-olive-green transition-colors">
                jeffersonlmendes@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-6 h-6 text-olive-green" />
              <a href="tel:+5511997941150" className="text-lg hover:text-olive-green transition-colors">
                +55 11 99794-1150
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Linkedin className="w-6 h-6 text-olive-green" />
              <a href="https://linkedin.com/in/jefferson-mendes" className="text-lg hover:text-olive-green transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-soft-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading mb-4">Jefferson Mendes</h3>
            <p className="text-matte-silver mb-8 max-w-2xl mx-auto">
              Especialista em Mídia OOH transformando a comunicação urbana através de estratégias 
              inovadoras baseadas em dados e comportamento.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-matte-silver">
                © 2024 Jefferson Mendes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
