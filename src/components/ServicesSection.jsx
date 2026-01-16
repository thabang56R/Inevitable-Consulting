import React from 'react';

const ServicesSection = () => {
  const services = [
    "Advisory Services",
    "Accounting & Financial Reporting ",
    "Payroll & Compliance Services",
    "Taxation Services",
    
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <h3>What Can We Do For You?</h3>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service}</h3>
            <a href="/services"><button className="learn-more-btn">Learn More →</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;