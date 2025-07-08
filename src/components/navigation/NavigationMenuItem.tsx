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
      className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading text-white-pure hover:text-gold-accent transition-colors duration-300 text-right w-full block leading-none ${
        isActive ? 'text-gold-accent font-semibold' : ''
      }`}
      style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  );
};

export default NavigationMenuItem;