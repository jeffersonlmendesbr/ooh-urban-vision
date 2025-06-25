
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../config/sections';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-soft-white/95 backdrop-blur-sm border-b border-warm-beige z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="text-2xl font-heading text-dark-charcoal cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Jefferson Mendes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections
                .filter((s) => s.includeInNav)
                .map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-dark-charcoal hover:text-olive-green transition-colors font-medium cursor-pointer"
                  >
                    {section.label}
                  </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-dark-charcoal p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-dark-charcoal z-50 md:hidden">
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button 
              onClick={closeMenu}
              className="text-soft-white p-2"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-3xl font-heading text-soft-white hover:text-olive-green transition-colors"
            >
              Início
            </button>
            
            {sections
              .filter((s) => s.includeInNav)
              .map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-3xl font-heading text-soft-white hover:text-olive-green transition-colors"
                >
                  {section.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
