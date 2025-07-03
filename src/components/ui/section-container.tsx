import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
}

export const SectionContainer = ({ 
  id, 
  className, 
  children, 
  fullHeight = true 
}: SectionContainerProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]',
        'flex items-center py-24',
        className
      )}
    >
      {children}
    </section>
  );
};