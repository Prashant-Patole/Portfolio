
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <div className="overflow-hidden mb-1">
        <h2 
          className="text-3xl md:text-4xl font-display font-bold text-foreground animate-text-reveal"
          style={{ opacity: 0, animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <div className="overflow-hidden">
          <p 
            className="text-muted-foreground mt-2 animate-text-reveal"
            style={{ opacity: 0, animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            {subtitle}
          </p>
        </div>
      )}
      <div 
        className="w-20 h-1 bg-accent mt-4 animate-fade-in"
        style={{ opacity: 0, animationDelay: '500ms', animationFillMode: 'forwards' }}
      />
    </div>
  );
};

export default SectionHeading;
