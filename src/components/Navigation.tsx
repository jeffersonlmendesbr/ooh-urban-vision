
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

      {/* Menu Lateral - OCUPANDO TELA TODA */}
      {isMenuOpen && (
        <div
          id="hamburger-menu"
          ref={menuRef}
          className="fixed inset-0 z-40 bg-ink-black/95 backdrop-blur-lg flex animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hamburger-menu-title"
        >
          <h2 id="hamburger-menu-title" className="sr-only">Navegação Principal</h2>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-12">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'hero' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'about' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection('africaddb')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'africaddb' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'africaddb' ? 'page' : undefined}
              >
                Africa DDB
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'experience' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'experience' ? 'page' : undefined}
              >
                Jornada
              </button>

              <button
                onClick={() => scrollToSection('cases')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'cases' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'cases' ? 'page' : undefined}
              >
                Cases
              </button>

              <button
                onClick={() => scrollToSection('manifesto')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'manifesto' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'manifesto' ? 'page' : undefined}
              >
                Manifesto
              </button>

              <button
                onClick={() => scrollToSection('nationalpresence')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'nationalpresence' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'nationalpresence' ? 'page' : undefined}
              >
                Presença
              </button>

              <button
                onClick={() => scrollToSection('tools')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'tools' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'tools' ? 'page' : undefined}
              >
                Ferramentas
              </button>

              <button
                onClick={() => scrollToSection('oohplanner')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'oohplanner' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'oohplanner' ? 'page' : undefined}
              >
                OOH Planner
              </button>

              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'testimonials' ? 'text-gold-accent font-semibold' : ''}`}
                aria-current={activeSection === 'testimonials' ? 'page' : undefined}
              >
                Testemunhos
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-110 ${activeSection === 'contact' ? 'text-gold-accent font-semibold' : ''}`}
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
