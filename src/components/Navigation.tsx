
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../config/sections';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [navTextColor, setNavTextColor] = useState('text-ink-black');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a, button');
      if (focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        first.focus();
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = 'unset';
        };
      }
    } else {
      document.body.style.overflow = 'unset';
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const ids = ['hero', ...sections.filter((s) => s.includeInNav).map((s) => s.id)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            
            // Define a cor do texto baseado na seção
            const darkSections = ['africaddb', 'cases', 'manifesto', 'nationalpresence'];
            if (darkSections.includes(entry.target.id)) {
              setNavTextColor('text-white-pure');
            } else {
              setNavTextColor('text-ink-black');
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    closeMenu();
  };

  return (
    <>
      {/* Navigation Header - Estilo CUSP */}
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className={`text-2xl font-heading cursor-pointer hover:text-gold-accent transition-colors ${navTextColor}`}
              onClick={() => scrollToSection('hero')}
            >
              Jefferson Mendes
            </div>
            
            {/* Menu Hambúrguer - Sempre visível */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className={`p-2 hover:text-gold-accent transition-colors ${navTextColor}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="hamburger-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Lateral FULL SCREEN - LARGURA E ALTURA TOTAIS */}
      {isMenuOpen && (
        <div
          id="hamburger-menu"
          ref={menuRef}
          className="fixed inset-0 w-screen h-screen z-40 bg-ink-black/95 backdrop-blur-lg flex animate-in fade-in overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hamburger-menu-title"
        >
          <h2 id="hamburger-menu-title" className="sr-only">Navegação Principal</h2>
          
          {/* Container com scroll ocupando toda a tela */}
          <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-end pr-8 py-8">
            <div className="flex flex-col space-y-4 max-h-full overflow-y-auto no-scrollbar">
              
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'hero' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'about' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection('africaddb')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'africaddb' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'africaddb' ? 'page' : undefined}
              >
                Africa DDB
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'experience' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'experience' ? 'page' : undefined}
              >
                Jornada
              </button>

              <button
                onClick={() => scrollToSection('cases')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'cases' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'cases' ? 'page' : undefined}
              >
                Cases
              </button>

              <button
                onClick={() => scrollToSection('manifesto')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'manifesto' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'manifesto' ? 'page' : undefined}
              >
                Manifesto
              </button>

              <button
                onClick={() => scrollToSection('nationalpresence')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'nationalpresence' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'nationalpresence' ? 'page' : undefined}
              >
                Presença Nacional
              </button>

              <button
                onClick={() => scrollToSection('tools')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'tools' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'tools' ? 'page' : undefined}
              >
                Ferramentas
              </button>

              <button
                onClick={() => scrollToSection('oohplanner')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'oohplanner' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'oohplanner' ? 'page' : undefined}
              >
                OOH Planner
              </button>

              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'testimonials' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'testimonials' ? 'page' : undefined}
              >
                Testemunhos
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right whitespace-nowrap ${activeSection === 'contact' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contato
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
