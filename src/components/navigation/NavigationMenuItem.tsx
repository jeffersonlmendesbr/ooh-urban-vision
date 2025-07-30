interface NavigationMenuItemProps {
  label: string;
  sectionId: string;
  isActive: boolean;
  onScrollToSection: (sectionId: string) => void;
}

const NavigationMenuItem = ({ 
  label, 
  sectionId, 
  isActive, 
  onScrollToSection 
}: NavigationMenuItemProps) => {
  return (
    <button
      onClick={() => onScrollToSection(sectionId)}
      className={`w-full block text-right font-extrabold leading-none transition-colors duration-300
        ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
      style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  );
};

export default NavigationMenuItem;