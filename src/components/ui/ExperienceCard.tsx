
import React from 'react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills?: string[];
  className?: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
  skills,
  className,
  isActive = false,
}) => {
  return (
    <div 
      className={cn(
        'relative p-6 rounded-lg glass-card transition-all duration-300',
        isActive && 'border-accent bg-accent/5',
        className
      )}
    >
      {isActive && (
        <div className="absolute -left-1 top-0 bottom-0 w-1 bg-accent rounded-full" />
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
        </div>
        <span className="mt-2 md:mt-0 text-sm font-medium px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
          {duration}
        </span>
      </div>
      
      <p className="mb-4">{description}</p>
      
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-java-dark/10 text-java-dark"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
