import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Apply parallax effect to bg-pattern
      const patternEl = heroRef.current.querySelector('.bg-pattern');
      if (patternEl) {
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        (patternEl as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-pattern absolute inset-0 opacity-10 transition-transform duration-700 ease-out"/>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Code rings decoration */}
      <div className="absolute -left-28 -top-28 w-96 h-96 rounded-full border border-accent/10 animate-float" />
      <div className="absolute -right-28 -bottom-28 w-96 h-96 rounded-full border border-java-dark/10 animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="max-w-3xl w-full text-center z-10">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary animate-fade-in">
          <span className="text-sm font-medium text-muted-foreground">
            Junior Java Developer
          </span>
        </div>
        
        <div className="overflow-hidden mb-6">
          <h1 
            className="text-4xl md:text-6xl font-display font-bold animate-text-reveal"
            style={{ 
              opacity: 0, 
              animationDelay: '300ms', 
              animationFillMode: 'forwards' 
            }}
          >
            Hi, I'm <span className="text-gradient">Prashant Patole</span>
          </h1>
        </div>
        
        <div className="overflow-hidden mb-10">
          <p 
            className="text-lg md:text-xl text-muted-foreground animate-text-reveal"
            style={{ 
              opacity: 0, 
              animationDelay: '500ms', 
              animationFillMode: 'forwards' 
            }}
          >
            Building the future at The BAAP Service Private Limited
          </p>
        </div>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ 
            opacity: 0, 
            animationDelay: '800ms', 
            animationFillMode: 'forwards' 
          }}
        >
          <a 
            href="#contact" 
            className={cn(
              "button-glow px-6 py-3 rounded-full bg-accent text-white font-medium",
              "transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            )}
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-secondary/30 text-foreground font-medium hover:bg-secondary transition-colors duration-300"
          >
            View My Work <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in"
        style={{ 
          opacity: 0, 
          animationDelay: '1.2s', 
          animationFillMode: 'forwards' 
        }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
