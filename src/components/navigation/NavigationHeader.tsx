import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';

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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-card border-b border-glass-border backdrop-blur-2xl bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <div
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-wide cursor-pointer gradient-text text-glow interactive"
            onClick={() => onScrollToSection('hero')}
          >
            Jefferson Mendes
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm space-x-4 font-bold">
              <button onClick={() => changeLang('pt')} className="interactive text-primary hover:text-secondary">PT 🇧🇷</button>
              <button onClick={() => changeLang('en')} className="interactive text-primary hover:text-secondary">EN 🇺🇸</button>
              <button onClick={() => changeLang('es')} className="interactive text-primary hover:text-secondary">ES 🇪🇸</button>
            </div>
            <ThemeToggle />
            <button
              onClick={onToggleMenu}
              className="p-3 utilitarian-border rounded-lg text-foreground hover:text-primary interactive z-50"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="hamburger-menu"
            >
              {isMenuOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;