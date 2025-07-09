import { ReactNode } from 'react';

interface ExperienceSectionProps {
  children: ReactNode;
}

export const ExperienceSection = ({ children }: ExperienceSectionProps) => (
  <section
    id="experience"
    className="h-screen bg-gold-accent flex flex-col justify-center py-12 px-8 relative overflow-hidden"
  >
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gold-accent opacity-5 rounded-full -translate-x-48 -translate-y-48"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-accent opacity-10 rounded-full translate-x-40 translate-y-40"></div>
    
    <div className="relative z-10">
      {children}
    </div>
  </section>
);