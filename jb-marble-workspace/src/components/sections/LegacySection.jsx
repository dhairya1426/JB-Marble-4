import React from 'react';
import { Globe, Award, TrendingUp } from 'lucide-react';

const LegacySection = () => {
  return (
    <section id="legacy" className="legacy-section-quarry">
      <div className="container-quarry">
        <div className="section-header-quarry centered" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title-quarry">Our Legacy & Global Reach</h2>
          <p className="section-intro-text">
            JB Marble has been partnering with architects, interior designers, builders, and developers to provide top-quality marble for residential, commercial, and luxury projects worldwide.
          </p>
        </div>
        
        <div className="legacy-stats-interactive">
          <div 
            className="stat-card-interactive"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="stat-background-glow"></div>
            <div className="stat-icon-interactive">
              <Award size={56} strokeWidth={1.5} />
            </div>
            <div className="stat-content-interactive">
              <h3 className="stat-number-interactive">40+</h3>
              <p className="stat-label-interactive">Years of Expertise</p>
              <div className="stat-divider-interactive"></div>
              <p className="stat-description-interactive">Decades of hands-on experience in the marble industry ensure unmatched quality and service</p>
            </div>
            <div className="stat-hover-line"></div>
          </div>
          
          <div 
            className="stat-card-interactive"
            data-aos="fade-up" 
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="stat-background-glow"></div>
            <div className="stat-icon-interactive">
              <Globe size={56} strokeWidth={1.5} />
            </div>
            <div className="stat-content-interactive">
              <h3 className="stat-number-interactive">20+</h3>
              <p className="stat-label-interactive">Countries Exported</p>
              <div className="stat-divider-interactive"></div>
              <p className="stat-description-interactive">Strong and lasting relationships built on trust, consistency, and excellence worldwide</p>
            </div>
            <div className="stat-hover-line"></div>
          </div>
          
          <div 
            className="stat-card-interactive"
            data-aos="fade-up" 
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <div className="stat-background-glow"></div>
            <div className="stat-icon-interactive">
              <TrendingUp size={56} strokeWidth={1.5} />
            </div>
            <div className="stat-content-interactive">
              <h3 className="stat-number-interactive">100%</h3>
              <p className="stat-label-interactive">Quality Control</p>
              <div className="stat-divider-interactive"></div>
              <p className="stat-description-interactive">Complete control from our own quarries to clients worldwide, ensuring perfection</p>
            </div>
            <div className="stat-hover-line"></div>
          </div>
        </div>
        
        <div className="legacy-bottom-content" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
          <div className="legacy-quote-box">
            <p className="legacy-quote">
              "With international expertise, we have exported our products worldwide, building strong and lasting relationships based on trust, consistency, and excellence."
            </p>
            <div className="legacy-quote-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;