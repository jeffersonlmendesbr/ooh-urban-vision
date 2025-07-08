import { Menu, X } from 'lucide-react';

interface NavigationHeaderProps {
  navTextColor: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onScrollToSection: (sectionId: string) => void;
}

const NavigationHeader = ({ 
  navTextColor, 
  isMenuOpen, 
  onToggleMenu, 
  onScrollToSection 
}: NavigationHeaderProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className={`text-2xl font-heading cursor-pointer hover:text-gold-accent transition-colors ${navTextColor}`}
            onClick={() => onScrollToSection('hero')}
          >
            Jefferson Mendes
          </div>
          
          <button
            onClick={onToggleMenu}
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
  );
};

export default NavigationHeader;