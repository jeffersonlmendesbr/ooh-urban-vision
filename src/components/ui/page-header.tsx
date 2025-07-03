import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

export const PageHeader = ({ 
  title, 
  subtitle, 
  children, 
  className,
  centered = true 
}: PageHeaderProps) => {
  return (
    <div className={cn(
      'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-4xl font-heading text-dark-charcoal mb-8">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-dark-charcoal mb-16 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};