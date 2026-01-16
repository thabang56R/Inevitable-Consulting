// IntroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section className="intro-section">
      <motion.div
        className="card-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Excellence Through the Power of Collective Capability</h1>
        <p>
          A2A Kopano is a mid-tier assurance firm, established in 1998, with the oldest practice dating back to 1928.
          We have 23 directors with an average of 24 years' experience and 284 permanent staff members.
          Committed to job creation and B-BBEE compliance.
        </p>

        <Slider {...settings} className="intro-slider">
          <div>
            <img
              src="/image.jpg"
              alt="Professional Team"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1000x500/228B22/ffffff?text=Office+Environment"
              alt="Office Environment"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1000x500/8B0000/ffffff?text=Client+Meeting"
              alt="Client Meeting"
            />
          </div>
        </Slider>
      </motion.div>
    </section>
  );
};

export default IntroSection;