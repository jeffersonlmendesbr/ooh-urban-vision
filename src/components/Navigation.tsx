
import NavigationHeader from './navigation/NavigationHeader';
import NavigationMenu from './navigation/NavigationMenu';
import { useNavigation } from '../hooks/useNavigation';

const Navigation = () => {
  const {
    isMenuOpen,
    activeSection,
    navTextColor,
    toggleMenu,
    scrollToSection,
  } = useNavigation();

  return (
    <>
      <NavigationHeader
        navTextColor={navTextColor}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onScrollToSection={scrollToSection}
      />
      
      <NavigationMenu
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navigation;
