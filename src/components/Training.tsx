
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Check, Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const trainingPrograms = [
  {
    title: 'Java Core Fundamentals',
    description: 'Master the foundations of Java programming with hands-on exercises and real-world examples.',
    duration: '4 weeks',
    level: 'Beginner',
    icon: BookOpen,
  },
  {
    title: 'Enterprise Java Development',
    description: 'Learn to build robust enterprise applications using Spring, Hibernate, and related technologies.',
    duration: '8 weeks',
    level: 'Intermediate',
    icon: Users,
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implement scalable, resilient microservices with Spring Boot and Cloud.',
    duration: '6 weeks',
    level: 'Advanced',
    icon: GraduationCap,
  },
  {
    title: 'Java Certification Preparation',
    description: 'Comprehensive preparation for Oracle Java certification exams with mock tests and guided practice.',
    duration: '5 weeks',
    level: 'All Levels',
    icon: Award,
  },
];

const features = [
  'Hands-on practical exercises',
  'Real-world project implementation',
  'Code reviews and feedback sessions',
  'One-on-one mentoring opportunities',
  'Industry-relevant curriculum',
  'Small batch sizes for personalized attention',
  'Post-training support',
  'Certification preparation'
];

const Training: React.FC = () => {
  return (
    <section id="training" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Training Expertise"
          subtitle="Empowering the next generation of Java developers through specialized programs"
          centered
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left column - Training programs */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 reveal-section">Training Programs</h3>
            
            <div className="space-y-6">
              {trainingPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div 
                    key={index}
                    className="reveal-section p-6 rounded-lg glass-card"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-2 rounded-full bg-java-dark/10 text-java-dark mr-4">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="font-semibold">{program.title}</h4>
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {program.level}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {program.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{program.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right column - Training approach */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 reveal-section">Training Methodology</h3>
            
            <div className="reveal-section mb-8">
              <p className="text-lg mb-4">
                My training approach combines in-depth technical knowledge with practical, 
                industry-relevant applications to create a comprehensive learning experience.
              </p>
              <p className="text-muted-foreground">
                With over 500 developers trained and a 92% certification success rate, 
                my methodology focuses on building both theoretical understanding and practical skills 
                through immersive, hands-on learning experiences.
              </p>
            </div>
            
            <div className="reveal-section">
              <h4 className="font-semibold mb-4">Program Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center"
                    style={{ 
                      opacity: 0, 
                      animation: 'fade-in 0.5s ease-out forwards',
                      animationDelay: `${index * 100}ms` 
                    }}
                  >
                    <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={cn(
                "reveal-section mt-8 p-6 rounded-lg",
                "bg-gradient-to-r from-java-dark/10 to-java-light/10",
                "border border-java-dark/20"
              )}
            >
              <h4 className="font-semibold mb-3">Training Success Stories</h4>
              <p className="italic text-muted-foreground">
                "The Java training program completely transformed our development team's capabilities. 
                The practical approach and mentorship provided were invaluable for our projects."
              </p>
              <div className="mt-3 text-sm font-medium">
                — Technical Director, Enterprise Solutions Inc.
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal-section">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            Inquire About Training
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;
