import { ReactNode } from 'react';

interface ExperienceSectionProps {
  children: ReactNode;
}

export const ExperienceSection = ({ children }: ExperienceSectionProps) => (
  <section
    id="experience"
    className="h-screen bg-olive-green flex flex-col justify-center py-16 px-8"
  >
    {children}
  </section>
);