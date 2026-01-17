import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    alt: "Business handshake professional"
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    alt: "Team collaboration in office"
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970&q=80",
    alt: "Professional meeting discussion"
  },
  {
    image: "/director.png",
    alt: "Professional business discussion"
  },
  {
    image: "/image.jpg (2).jpg",
    alt: "Professional compacy Logo"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content-left">
          <h2 style={{color:'green'}}>Inevitable Accounting & Advisory</h2>
          <h1>
            We uphold highest ethical standards<br />
            ensuring honest , Transparency and<br />
            Independence in all our engagements.
          </h1>
          <p style={{color:'green'}}>
            To be trusted, innovative accounting and advisory firm driving ethical
            excellence and SME-led economic growth.
          </p>
        </div>

        <div className="hero-image-right">
          <div className="image-ellipse-wrapper">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.alt}
                className={`slide-image ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Navigation dots */}
          <div className="slider-controls">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Optional arrow buttons */}
          <button 
            className="slider-arrow prev" 
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          >
            ←
          </button>
          <button 
            className="slider-arrow next" 
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          >
            →
          </button>
        </div>
      </div>

     <a href="/contact"><button className="cta-btn">Get In Touch →</button></a>
      
    </section>
  );
};

export default HeroSection;
        
      
