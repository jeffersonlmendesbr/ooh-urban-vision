import { ReactNode } from 'react';

interface ExperienceSectionProps {
  children: ReactNode;
}

export const ExperienceSection = ({ children }: ExperienceSectionProps) => (
  <section
    id="experience"
    className="min-h-screen w-full flex flex-col justify-center py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-100"
  >
    {children}
  </section>
);