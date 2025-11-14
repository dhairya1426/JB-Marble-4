import React from 'react';
import { Mountain, Factory, Globe, Award } from 'lucide-react';

const reasons = [
  {
    icon: Mountain,
    title: 'Proven Expertise',
    description: 'Decades of hands-on experience in the marble industry ensure unmatched quality and service.'
  },
  {
    icon: Factory,
    title: 'Own Mines & Production',
    description: 'We manage everything from quarrying to processing, ensuring complete control over quality.'
  },
  {
    icon: Globe,
    title: 'Global Supply Network',
    description: 'Our well-established network enables smooth export operations across countries.'
  },
  {
    icon: Award,
    title: 'Quality Finishes',
    description: 'Every block and slab we produce meets high standards of texture, strength, and visual appeal.'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section-quarry">
      <div className="container-quarry">
        <div className="section-header-quarry" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title-quarry">Why Choose JB Marble</h2>
          <p className="section-intro-text">Four pillars that define our commitment to excellence</p>
        </div>
        
        <div className="why-choose-grid-interactive">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="why-card-interactive"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="why-card-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="why-icon-container-interactive">
                  <div className="why-icon-bg"></div>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="why-card-content">
                  <h3 className="why-title-interactive">{reason.title}</h3>
                  <p className="why-description-interactive">{reason.description}</p>
                </div>
                <div className="why-card-hover-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;