import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'Premium White Marble',
    description: 'Elegant and pure, ideal for bright, luxurious spaces.',
    image: 'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/h31ywmmc_image.png'
  },
  {
    title: 'Classic Beige Marble',
    description: 'Warm and graceful tones that bring natural charm to interiors.',
    image: 'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/vho8vnvh_image.png'
  },
  {
    title: 'Royal Grey Marble',
    description: 'Sophisticated choice with refined textures and subtle character.',
    image: 'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/n7z5dznr_image.png'
  },
  {
    title: 'Exotic Selections',
    description: 'Rare and beautiful stones with unique patterns and depth.',
    image: 'https://images.unsplash.com/photo-1660296445904-0adbea655c57?w=800&q=80'
  },
  {
    title: 'Quartzite',
    description: 'Strong, stylish, and versatile for modern and classic designs.',
    image: 'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/7mbkwhk3_image.png'
  }
];

const CategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'left' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === 'right' && activeIndex < categories.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section id="categories" className="categories-section-quarry">
      <div className="container-quarry">
        <div className="section-header-quarry" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title-quarry">Our Featured Categories</h2>
        </div>
        
        <div className="categories-carousel-quarry" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <button 
            className={`carousel-arrow left ${activeIndex === 0 ? 'disabled' : ''}`}
            onClick={() => handleScroll('left')}
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="categories-slider-wrapper">
            <div className="categories-slider-quarry" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {categories.map((category, index) => (
                <div key={index} className="category-card-quarry">
                  <div className="category-image-container-quarry">
                    <img src={category.image} alt={category.title} />
                    <div className="category-gradient-overlay"></div>
                  </div>
                  <div className="category-content-quarry">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className={`carousel-arrow right ${activeIndex === categories.length - 1 ? 'disabled' : ''}`}
            onClick={() => handleScroll('right')}
            disabled={activeIndex === categories.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className="carousel-dots-quarry">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;