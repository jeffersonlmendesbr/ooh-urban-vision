
import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
  );
};

export default Navigation;
