import { useEffect, useRef } from 'react';
import NavigationMenuItem from './NavigationMenuItem';
import { useTranslation } from 'react-i18next';

interface NavigationMenuProps {
  isMenuOpen: boolean;
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ isMenuOpen, activeSection, onScrollToSection }: NavigationMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Handle focus management for accessibility
  useEffect(() => {
    if (isMenuOpen) {
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
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  const menuItems = [
    { label: t('nav.home'), sectionId: 'hero' },
    { label: t('nav.about'), sectionId: 'about' },
    { label: t('nav.africaddb'), sectionId: 'africaddb' },
    { label: t('nav.experience'), sectionId: 'experience' },
    { label: t('nav.cases'), sectionId: 'cases' },
    { label: t('nav.manifesto'), sectionId: 'manifesto' },
    { label: t('nav.nationalpresence'), sectionId: 'nationalpresence' },
    { label: t('nav.tools'), sectionId: 'tools' },
    { label: t('nav.oohplanner'), sectionId: 'oohplanner' },
    { label: t('nav.testimonials'), sectionId: 'testimonials' },
    { label: t('nav.contact'), sectionId: 'contact' },
  ];

  return (
    <div
      id="hamburger-menu"
      ref={menuRef}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen z-40 bg-background/90 backdrop-blur-lg animate-in fade-in"
      style={{ width: '100vw', height: '100vh' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hamburger-menu-title"
    >
      <h2 id="hamburger-menu-title" className="sr-only">{t('nav.home')}</h2>
      
      <div className="w-full h-full min-h-screen flex flex-col justify-center items-stretch px-4 py-8 overflow-y-auto">
        <div className="flex flex-col space-y-16 w-full max-h-full overflow-y-auto no-scrollbar">
          {menuItems.map((item) => (
            <NavigationMenuItem
              key={item.sectionId}
              label={item.label}
              sectionId={item.sectionId}
              isActive={activeSection === item.sectionId}
              onScrollToSection={onScrollToSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;