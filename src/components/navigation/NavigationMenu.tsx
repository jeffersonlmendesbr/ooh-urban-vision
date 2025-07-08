import { useEffect, useRef } from 'react';
import NavigationMenuItem from './NavigationMenuItem';

interface NavigationMenuProps {
  isMenuOpen: boolean;
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ isMenuOpen, activeSection, onScrollToSection }: NavigationMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
    { label: 'Início', sectionId: 'hero' },
    { label: 'Sobre', sectionId: 'about' },
    { label: 'Africa DDB', sectionId: 'africaddb' },
    { label: 'Jornada', sectionId: 'experience' },
    { label: 'Cases', sectionId: 'cases' },
    { label: 'Manifesto', sectionId: 'manifesto' },
    { label: 'Presença Nacional', sectionId: 'nationalpresence' },
    { label: 'Ferramentas', sectionId: 'tools' },
    { label: 'OOH Planner', sectionId: 'oohplanner' },
    { label: 'Testemunhos', sectionId: 'testimonials' },
    { label: 'Contato', sectionId: 'contact' },
  ];

  return (
    <div
      id="hamburger-menu"
      ref={menuRef}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen z-40 bg-ink-black/95 backdrop-blur-lg animate-in fade-in"
      style={{ width: '100vw', height: '100vh' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hamburger-menu-title"
    >
      <h2 id="hamburger-menu-title" className="sr-only">Navegação Principal</h2>
      
      <div className="w-full h-full min-h-screen flex flex-col justify-center items-end px-8 py-8 overflow-y-auto">
        <div className="flex flex-col space-y-4 w-full max-h-full overflow-y-auto no-scrollbar">
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