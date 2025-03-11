
import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import ExperienceCard from './ui/ExperienceCard';

const experiences = [
  {
    title: 'Junior Java Developer',
    company: 'The BAAP Service Private Limited',
    duration: '2023 - Present',
    description: 'Working on enterprise Java applications, learning modern development practices, and contributing to team projects. Actively participating in code reviews and improving coding skills.',
    skills: ['Java', 'Spring Boot', 'Git', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Senior Java Developer',
    company: 'Baap Company',
    duration: '2020 - Present',
    description: 'Leading the development of enterprise Java applications, designing microservices architecture, and mentoring junior developers. Implemented high-performance solutions that improved system efficiency by 40%.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    title: 'Java Training Specialist',
    company: 'BAAP Academy',
    duration: '2019 - Present',
    description: 'Developing and delivering comprehensive Java training programs for professionals and students. Created custom curriculum that has successfully trained over 500 developers, with 92% certification success rate.',
    skills: ['Java', 'Training', 'Curriculum Design', 'Mentorship', 'Technical Workshops'],
  },
  {
    title: 'Java Developer',
    company: 'Innovate Solutions',
    duration: '2017 - 2020',
    description: 'Designed and developed RESTful APIs and backend services for financial clients. Optimized database queries resulting in 60% faster transaction processing times.',
    skills: ['Java', 'Spring', 'REST APIs', 'Hibernate', 'Oracle', 'Git'],
  },
  {
    title: 'Junior Developer',
    company: 'TechFirst Corp',
    duration: '2015 - 2017',
    description: 'Contributed to the development and maintenance of Java applications. Collaborated in an Agile team environment to deliver features and bug fixes on schedule.',
    skills: ['Java', 'JSP', 'Servlets', 'MySQL', 'Maven'],
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading
          title="Professional Journey"
          subtitle="My experience and career path in Java development and training"
          centered
        />
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
              isActive={index === activeIndex}
              className="reveal-section"
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center reveal-section">
          <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java', 'Spring Boot', 'Microservices', 'JPA/Hibernate', 
              'REST APIs', 'Oracle', 'MySQL', 'MongoDB',
              'Docker', 'Kubernetes', 'AWS', 'CI/CD',
              'JUnit', 'Mockito', 'Git', 'Maven', 'Gradle',
              'Angular', 'React', 'Design Patterns', 'Agile'
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
                style={{ 
                  opacity: 0, 
                  animation: 'fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 50}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
