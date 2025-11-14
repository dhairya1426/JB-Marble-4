import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="floating-icons-quarry">
      <a 
        href="https://wa.me/917568263799" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-icon-quarry whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} strokeWidth={2} />
      </a>
      <a 
        href="tel:+917568263799" 
        className="floating-icon-quarry phone"
        aria-label="Phone"
      >
        <Phone size={20} strokeWidth={2} />
      </a>
      <a 
        href="mailto:muraliapooja@gmail.com" 
        className="floating-icon-quarry email"
        aria-label="Email"
      >
        <Mail size={20} strokeWidth={2} />
      </a>
    </div>
  );
};

export default FloatingIcons;