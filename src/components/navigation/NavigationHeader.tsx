import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { i18n } = useTranslation();
  const changeLang = (lng: string) => {
    if (lng === 'pt') {
      window.location.pathname = '/';
    } else {
      window.location.pathname = `/${lng}`;
    }
    i18n.changeLanguage(lng);
  };
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
          <div className="flex items-center gap-4">
            <div className="text-sm space-x-2">
              <button onClick={() => changeLang('pt')}>PT 🇧🇷</button>
              <button onClick={() => changeLang('en')}>EN 🇺🇸</button>
              <button onClick={() => changeLang('es')}>ES 🇪🇸</button>
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
      </div>
    </header>
  );
};

export default NavigationHeader;