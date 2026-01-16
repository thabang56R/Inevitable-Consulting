// src/components/FloatingSocialIcons.jsx
import React from 'react';

const FloatingSocialIcons = () => {
  return (
    <div className="floating-social">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-float fb"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-float instagram"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a 
        href="https://linkedin.com" 
        target="Inevitable Accounting" 
        rel="noopener noreferrer" 
        className="social-float linkedin"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a 
        href="https://wa.me/+27715347554" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-float whatsapp"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a 
        href="tel:+2771 534 7554" 
        className="social-float phone"
        aria-label="Call us"
      >
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default FloatingSocialIcons;