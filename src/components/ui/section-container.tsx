
import { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
  style?: CSSProperties;
}

export const SectionContainer = ({ 
  id, 
  className, 
  children, 
  fullHeight = true,
  style 
}: SectionContainerProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]',
        'flex items-center py-8 sm:py-16 lg:py-24',
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};
