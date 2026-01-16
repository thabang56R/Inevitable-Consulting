import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <img 
            src="/Logo Design (1)-images-0.jpg" 
            alt="Inevitable Logo" 
            className="logo-img"
          />
          <div className="logo-text">
            <h1>INEVITABLE</h1>
            <small>ACCOUNTING & ADVISORY</small>
            <p style={{color:'green'}}>(Pty) Ltd</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="main-nav desktop-nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li className="dropdown">
              <a href="/about">About Us<span className="arrow">▼</span></a>
              
            </li>
            <li><NavLink to="/services">Services</NavLink></li>
      
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-contact desktop-contact">
          <a href="call:+27715347554" className="phone-link">
            <span className="phone-icon">☎</span> (071) 534 7554
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
        >
          <button className="close-menu" onClick={toggleMobileMenu}>×</button>
          <ul>
            <li><NavLink to="/" end onClick={toggleMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={toggleMobileMenu}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink></li>
          </ul>
          <div className="mobile-contact">
            <a href="tel:+27715347554" className="phone-link">
              <span className="phone-icon">☎</span> (071) 534 7554
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;