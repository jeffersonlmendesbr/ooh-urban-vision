import { Menu, X } from 'lucide-react';

interface NavigationHeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onScrollToSection: (sectionId: string) => void;
}

const NavigationHeader = ({ 
  isMenuOpen, 
  onToggleMenu, 
  onScrollToSection 
}: NavigationHeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-background/50 backdrop-blur-lg border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="text-2xl font-bold tracking-tight cursor-pointer text-foreground hover:text-primary transition-colors"
            onClick={() => onScrollToSection('hero')}
          >
            Jefferson Mendes
          </div>
          
          <button
            onClick={onToggleMenu}
            className="p-2 text-foreground hover:text-primary transition-colors z-50"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="hamburger-menu"
          >
            {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;