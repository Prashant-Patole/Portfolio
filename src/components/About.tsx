import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import AnimatedText from './ui/AnimatedText';
import { Award, Book, Code, Presentation } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-section');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Passionate Junior Java Developer learning and growing at The BAAP Service"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Profile */}
          <div className="reveal-section" ref={aboutRef}>
            <div className="relative mb-8 rounded-xl overflow-hidden aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-java-dark/80 to-java-light/80 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Java Developer" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="code-block">
              <pre className="overflow-x-auto">
                <code>
                  <span className="code-comment">// Professional Summary</span>
                  <br />
                  <span className="code-keyword">public class</span> <span className="code-java">JavaDeveloper</span> {"{"}
                  <br />
                  {"  "}
                  <span className="code-keyword">private final</span> String name = <span className="code-string">"Prashant Patole"</span>;
                  <br />
                  {"  "}
                  <span className="code-keyword">private final</span> String role = <span className="code-string">"Junior Java Developer"</span>;
                  <br />
                  {"  "}
                  <span className="code-keyword">private final</span> String company = <span className="code-string">"The BAAP Service Private Limited"</span>;
                  <br />
                  {"  "}
                  <span className="code-keyword">private final</span> String focus = <span className="code-string">"Learning & Growing"</span>;
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div>
            <AnimatedText 
              text="As a Junior Java Developer at The BAAP Service Private Limited, I am passionately learning and contributing to cutting-edge Java solutions."
              className="text-lg mb-6"
              highlightWords={['java', 'baap', 'learning']}
            />
            
            <AnimatedText 
              text="I work with modern Java technologies and frameworks, constantly expanding my knowledge while contributing to real-world projects."
              className="mb-6"
              highlightWords={['modern', 'technologies', 'projects']}
            />
            
            <AnimatedText 
              text="Under excellent mentorship, I'm developing my skills in Java development, clean coding practices, and software architecture."
              className="mb-8"
              highlightWords={['mentorship', 'development', 'architecture']}
            />
            
            {/* Skills cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="reveal-section p-4 rounded-lg glass-card">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 text-accent mr-4">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Development</h3>
                    <p className="text-sm text-muted-foreground">Spring Boot, Microservices, JPA/Hibernate, RESTful APIs</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal-section p-4 rounded-lg glass-card" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-java-dark/10 text-java-dark mr-4">
                    <Presentation size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Training</h3>
                    <p className="text-sm text-muted-foreground">Curriculum Design, Workshops, Technical Mentorship</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal-section p-4 rounded-lg glass-card" style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-java-light/10 text-java-light mr-4">
                    <Book size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Architecture</h3>
                    <p className="text-sm text-muted-foreground">System Design, Cloud Native, Performance Optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal-section p-4 rounded-lg glass-card" style={{ transitionDelay: '300ms' }}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 text-accent mr-4">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Certifications</h3>
                    <p className="text-sm text-muted-foreground">Oracle Certified Professional, AWS Solutions Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
