import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I will get back to you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's discuss how we can collaborate on your Java development or training needs"
          centered
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left column - Contact form */}
          <div className="reveal-section">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "button-glow w-full py-3 rounded-lg bg-accent text-white font-medium flex items-center justify-center",
                  "transition-all duration-300 hover:shadow-lg hover:shadow-accent/20",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Right column - Contact info */}
          <div className="reveal-section">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-java-dark/10 text-java-dark mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:prashnatpatole132@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      prashnatpatole132@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-java-light/10 text-java-light mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+911234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 text-accent mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Maharashtra, Tal Sangamner,<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Available For</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Java Development', 
                    'Technical Training', 
                    'Code Reviews',
                    'Architecture Consulting', 
                    'Workshop Facilitation'
                  ].map((item, index) => (
                    <span 
                      key={index} 
                      className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div 
                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-java-dark/5 to-java-light/5 border border-java-dark/10"
              >
                <p className="text-sm text-muted-foreground">
                  For immediate training inquiries or project consultations, 
                  please mention specific requirements in your message for a faster response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
