import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section-quarry">
      <div className="hero-background">
        <img 
          src="https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/37koq4x9_image.png" 
          alt="Marble Quarry Background" 
          className="hero-bg-image"
        />
        <div className="hero-overlay-dark"></div>
      </div>
      <div className="hero-content-quarry">
        <h1 className="hero-title-large" data-aos="fade-up" data-aos-duration="1000">
          Crafting Timeless Beauty in Stone
        </h1>
        <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <p>40+ Years of Excellence</p>
          <span className="dot-separator">•</span>
          <p>100% Quality Control</p>
          <span className="dot-separator">•</span>
          <p>Global Reach</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;