import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Section - Logo + Quick Links + Contact */}
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img 
                src="/Logo Design (1)-images-0.jpg" 
                alt="INEVITABLE logo" 
                className="footer-logo-img"
              />
              <div className="footer-logo-text">
                <h3>INEVITABLE</h3>
                <small>ACCOUNTING & ADVISORY </small>
                <p style={{color:'green'}}>Consulting</p>
              </div>
            </div>
            <p className="footer-description" style={{color:'lightblue'}}>
              A Trusted Accounting & Advisory Partners for Sustanable Growth across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <address>
              <p><strong>johannesburg office</strong></p>
              <p>362 Isibaha, Tirong Estate, Johannesburg, 2000</p>
              <p><strong>Polokwane office</strong></p>
              <p>4 Nautalis, Emdo Park, Polokwane, 0742</p>

              <p><strong>Tel:</strong> <a href="tel:+27 71 534 7554">(071) 534 7554</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@inevitableconsulting.co.za">info@inevitableconsulting.co.za</a></p>
            </address>

            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="icon fb">f</span>
                </a>
                <a href="https://linkedin.com" target="Inevitable Consulting" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="icon linkedin">in</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Inevitable Accounting & Advisory. All Rights Reserved.
          </p>
          <p className="developed">
            Proudly South African | Designed & Developed By: Thabang Rakeng - 064 917 3328 - thabang56@hotmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
