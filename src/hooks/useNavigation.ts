import { useState, useEffect } from 'react';
import { sections } from '../config/sections';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [navTextColor, setNavTextColor] = useState('text-ink-black');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    closeMenu();
  };

  // Handle overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Track active section and update nav text color
  useEffect(() => {
    const ids = ['hero', ...sections.filter((s) => s.includeInNav).map((s) => s.id)];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            
            // Define text color based on section
            const darkSections = ['africaddb', 'cases', 'manifesto', 'nationalpresence'];
            if (darkSections.includes(entry.target.id)) {
              setNavTextColor('text-white-pure');
            } else {
              setNavTextColor('text-ink-black');
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return {
    isMenuOpen,
    activeSection,
    navTextColor,
    toggleMenu,
    closeMenu,
    scrollToSection,
  };
};