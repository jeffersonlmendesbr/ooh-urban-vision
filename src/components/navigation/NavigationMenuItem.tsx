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
      className={`text-2xl md:text-3xl lg:text-4xl font-heading text-white-pure hover:text-gold-accent transition-all duration-300 hover:scale-105 text-right w-full ${
        isActive ? 'text-gold-accent font-semibold' : ''
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  );
};

export default NavigationMenuItem;