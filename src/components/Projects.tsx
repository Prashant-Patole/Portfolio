
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const projectsData = [
  {
    title: 'Enterprise Banking System',
    description: 'A robust banking platform with microservices architecture handling 10M+ daily transactions with 99.99% uptime.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Healthcare Management Suite',
    description: 'Integrated healthcare system managing patient records, appointments, and billing for a network of 50+ hospitals.',
    technologies: ['Java', 'Spring', 'Hibernate', 'REST APIs', 'MySQL', 'Angular'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Real-time supply chain monitoring system with predictive analytics that reduced logistics costs by 22%.',
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Elasticsearch', 'Docker', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'E-Learning Platform',
    description: 'Comprehensive learning management system with interactive content, assessments, and analytics for educational institutions.',
    technologies: ['Java', 'Spring', 'Hibernate', 'MongoDB', 'React', 'AWS'],
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing innovative Java solutions for complex business challenges"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="reveal-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-section">
          <p className="text-muted-foreground mb-6">
            These projects represent a small selection of my work. Each solution was designed with scalability, 
            performance, and security as primary considerations.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-secondary transition-colors duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
