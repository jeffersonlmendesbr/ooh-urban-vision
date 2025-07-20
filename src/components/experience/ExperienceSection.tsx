import { ReactNode } from 'react';

interface ExperienceSectionProps {
  children: ReactNode;
}

export const ExperienceSection = ({ children }: ExperienceSectionProps) => (
  <section
    id="experience"
    className="h-screen flex flex-col justify-center py-12 px-8 relative overflow-hidden"
    style={{
      backgroundImage: 'url(/lovable-uploads/ff931af1-37af-40cc-b9eb-18e9c728b5fd.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/20"></div>
    
    <div className="relative z-10">
      {children}
    </div>
  </section>
);