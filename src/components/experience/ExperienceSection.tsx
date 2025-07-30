import { ReactNode } from 'react';

interface ExperienceSectionProps {
  children: ReactNode;
}

export const ExperienceSection = ({ children }: ExperienceSectionProps) => (
  <section
    id="experience"
    className="min-h-screen w-full flex flex-col justify-center py-24 lg:py-32"
  >
    {children}
  </section>
);