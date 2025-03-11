
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
  className,
}) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl', 
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
