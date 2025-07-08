
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../config/sections';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
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
              className="text-2xl font-heading text-dark-charcoal cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Jefferson Mendes
            </div>
            
            {/* Menu Hambúrguer - Sempre visível */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="text-dark-charcoal p-2 hover:text-olive-green transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="hamburger-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Lateral - Estilo CUSP */}
      {isMenuOpen && (
        <div
          id="hamburger-menu"
          ref={menuRef}
          className="fixed inset-0 z-40 bg-dark-charcoal/90 backdrop-blur-sm flex animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hamburger-menu-title"
        >
          <h2 id="hamburger-menu-title" className="sr-only">Navegação Principal</h2>
          <div className="ml-auto flex flex-col justify-center pr-8 w-3/4 max-w-xs">
            <div className="overflow-y-auto max-h-80 flex flex-col items-end space-y-8 pr-2">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-4xl font-heading text-soft-white hover:text-warm-beige transition-colors ${activeSection === 'hero' ? 'text-warm-beige font-semibold' : ''}`}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
              >
                Início
              </button>

              {sections
                .filter((s) => s.includeInNav)
                .map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-4xl font-heading text-soft-white hover:text-warm-beige transition-colors ${activeSection === section.id ? 'text-warm-beige font-semibold' : ''}`}
                    aria-current={activeSection === section.id ? 'page' : undefined}
                  >
                    {section.label}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
