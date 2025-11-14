import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section-quarry">
      <div className="container-quarry">
        <div className="contact-content-quarry" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title-quarry">Let's Connect</h2>
          <p className="contact-intro">
            Experience the finest marble and quartzite from Rajasthan. Get in touch to start your journey with JB Marble.
          </p>
          
          <div className="contact-cards-interactive">
            <div className="contact-card-interactive" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="contact-icon-interactive">
                <Phone size={36} strokeWidth={1.5} />
              </div>
              <h3>Phone</h3>
              <a href="tel:+917568263799">+91-7568263799</a>
              <div className="contact-card-line"></div>
            </div>
            
            <div className="contact-card-interactive" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <div className="contact-icon-interactive">
                <Mail size={36} strokeWidth={1.5} />
              </div>
              <h3>Email</h3>
              <a href="mailto:muraliapooja@gmail.com">muraliapooja@gmail.com</a>
              <div className="contact-card-line"></div>
            </div>
            
            <div className="contact-card-interactive whatsapp" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
              <div className="contact-icon-interactive">
                <MessageCircle size={36} strokeWidth={1.5} />
              </div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/917568263799" target="_blank" rel="noopener noreferrer">Chat with us</a>
              <div className="contact-card-line"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-quarry">
        <div className="container-quarry">
          <div className="footer-content">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/b1v0md0r_logogogo.png" 
                alt="JB MARBLE" 
              />
            </div>
            <p className="footer-text">© 2025 JB Marble. Crafting Timeless Beauty in Stone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;