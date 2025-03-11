
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  highlightWords?: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  highlightWords = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(container);
    
    return () => {
      if (container) observer.unobserve(container);
    };
  }, [once]);

  const highlightText = (word: string) => {
    return highlightWords.includes(word.toLowerCase()) 
      ? `<span class="text-gradient font-semibold">${word}</span>` 
      : word;
  };
  
  const processedText = text
    .split(' ')
    .map(highlightText)
    .join(' ');
  
  return (
    <div 
      ref={containerRef}
      className={cn('reveal-section', className)}
      dangerouslySetInnerHTML={{ __html: processedText }}
    />
  );
};

export default AnimatedText;
