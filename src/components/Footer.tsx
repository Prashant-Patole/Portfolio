
import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              BAAP.dev
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">
              Delivering excellence in Java development and training. 
              Creating robust solutions and empowering the next generation of developers.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Training', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top <ArrowUp size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Baap Company. All rights reserved.</p>
          <p className="mt-1">
            Designed with <span className="text-accent">❤</span> for Java excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
