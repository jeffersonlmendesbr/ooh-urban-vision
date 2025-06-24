
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../config/sections';

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
            {sections
              .filter((s) => s.includeInNav)
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-dark-charcoal hover:text-olive-green transition-colors font-medium"
                >
                  {section.label}
                </a>
              ))}
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
              {sections
                .filter((s) => s.includeInNav)
                .map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 text-dark-charcoal hover:text-olive-green font-medium"
                  >
                    {section.label}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
