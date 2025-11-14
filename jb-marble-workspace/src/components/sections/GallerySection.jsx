import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/g4zaxha4_IMG_3095.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/ktsooiwv_IMG_3097.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/74vh6fmc_IMG_3100.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/y07sgv86_IMG_3104.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/hrn7aqfn_IMG_3107.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/zewkcarj_IMG_3108.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/bqxmrs9x_IMG_3115.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/0f02i3vu_IMG_3119.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/ylve2wlw_IMG_3146.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/1ae7yns1_IMG_3147.JPG',
  'https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/2v6f24kg_IMG_3148.JPG'
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    let newIndex = selectedIndex + direction;
    if (newIndex < 0) newIndex = galleryImages.length - 1;
    if (newIndex >= galleryImages.length) newIndex = 0;
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="gallery-section-quarry">
      <div className="container-quarry">
        <div className="section-header-quarry" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title-quarry">Where Stories Are Carved In Stone</h2>
          <p className="section-intro-text">A curated collection of our finest marble and quartzite selections from Rajasthan</p>
        </div>
        
        <div className="gallery-grid-interactive">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item-interactive"
              data-aos="zoom-in"
              data-aos-delay={index * 40}
              data-aos-duration="600"
              onClick={() => openLightbox(image, index)}
            >
              <div className="gallery-image-wrapper">
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay-gradient"></div>
              </div>
              <div className="gallery-hover-content">
                <ZoomIn size={28} className="zoom-icon-interactive" />
                <span className="gallery-view-text">View Details</span>
              </div>
              <div className="gallery-item-border"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox-quarry" onClick={closeLightbox}>
          <button className="lightbox-close-quarry" onClick={closeLightbox}>
            <X size={28} />
          </button>
          <button className="lightbox-nav left" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>
            ‹
          </button>
          <button className="lightbox-nav right" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>
            ›
          </button>
          <img src={selectedImage} alt="Gallery preview" className="lightbox-image-quarry" onClick={(e) => e.stopPropagation()} />
          <div className="lightbox-counter">{selectedIndex + 1} / {galleryImages.length}</div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;