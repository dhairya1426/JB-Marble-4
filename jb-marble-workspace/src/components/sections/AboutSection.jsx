import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section-quarry">
      <div className="marble-texture-bg"></div>
      <div className="container-quarry">
        <div className="section-header-quarry" data-aos="fade-up">
          <h2 className="section-title-quarry">From The Heart Of Rajasthan</h2>
          <h3 className="section-subtitle-quarry">To Your World.</h3>
        </div>
        
        <div className="about-grid-quarry">
          <div className="about-text-quarry" data-aos="fade-right" data-aos-delay="200">
            <div className="text-block-quarry">
              <p className="large-text-quarry">
                There are stories born from imagination. And then, there are stories born from within the earth. We believe these stories must be sought. The ones hidden deep within ancient quarries across Rajasthan.
              </p>
            </div>
            
            <div className="highlight-text-quarry" data-aos="fade-up" data-aos-delay="400">
              <h4>We are JB Marble, Rajasthan's trusted name in natural stone excellence.</h4>
            </div>
            
            <div className="body-text-quarry" data-aos="fade-up" data-aos-delay="600">
              <p>
                We bring over <strong>40 years</strong> of dedicated expertise in producing and exporting premium natural stones. Under the leadership of <strong>Miss Pooja Muralia</strong>, we have grown into a globally trusted name known for excellence, integrity, and craftsmanship.
              </p>
              <p>
                With our marble mines located in <strong>Agria, Rajasthan</strong>, we extract and process high-quality marble blocks and slabs that reflect world-class standards of beauty and durability.
              </p>
              <p>
                From our own quarries to clients worldwide, our journey is built on precision, reliability, and a commitment to timeless quality that defines every stone we create.
              </p>
            </div>
          </div>
          
          <div className="about-image-quarry" data-aos="fade-left" data-aos-delay="400">
            <div className="image-frame-quarry">
              <img 
                src="https://images.unsplash.com/photo-1659362549741-c32157cc71f4?w=800&q=80" 
                alt="JB Marble Quarry" 
              />
              <div className="image-overlay-quarry"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;