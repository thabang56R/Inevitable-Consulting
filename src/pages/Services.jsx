// src/pages/Services.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingSocialIcons from '../components/FloatingSocialIcons';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out-quart', once: true });
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner */}
        <section className="services-banner" data-aos="fade-down">
          <div className="container">
            <h1>Services</h1>
            <p style={{color:'green'}}>Transparency , Integrity, and Accountability</p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-prop" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <h2>Our Value Proposition</h2>
            <p>
              At Inevitable Accounting & Advisory , we offer transparency , accountability & integrated professional services designed to support businesses throughout their full lifecycle from start-up to scale, maturity, and restructuring
            </p>
          </div>
        </section>

        {/* Main Service Categories */}
        <section className="service-categories" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <h2>Our Services</h2>

            <div className="category">
              <h3>Business Advisory Services</h3>
              <ul>
                <li>Strategic business planning and growth advisory</li>
                <li>Financial modelling , forecasting and business budgeting</li>
                <li>Corporate structuring and governance advisory</li>
                <li>Transaction support, due diligence , and valuations</li>
                <li>Turn-around strategies and performance optimisation</li>
                
              </ul>
            </div>

            <div className="category">
              <h3>Business Taxation Services</h3>
              <ul>
                <li>Corporate, Individual and trust TAX compliance </li>
                <li>VAT , PAYE , SDL , and UIF advisory and compliance</li>
                <li>Tax planning , structuring , and risk Management</li>
                <li>SARS audits , verifications , objections , and disputes</li>
                <li>Ongoing tax advisory and consulting</li>
                
              </ul>
            </div>

            <div className="category">
              <h3>Business Accounting & Financial Reporting</h3>
              <ul>
                <li> Preparation of annual financial statements(IFRS FOR SMEs)</li>
                <li> Monthly and quartely management reporting</li>
                <li> Bookeeping and outsourced finance Functions</li>
                <li> Audit readiness and auditor-General support</li>

              </ul>
            </div>

            <div className="category">
              <h3>Payroll & Compliance Services</h3>
              <ul>
                <li>End-to-End Payroll processingan and administation</li>
                <li>Statutory compliance and reconciliations</li>
                <li>Employee tax submissions and reporting</li>
                <li>Payroll controls and governance reviews</li>
                
              </ul>
            </div>
            
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta" data-aos="fade-up" data-aos-delay="400">
          <div className="container">
            <h2 style={{color:'white'}}>Get in touch to find out how we can help you</h2>
            
          </div>
          <a href="/contact" className="cta-btn">Contact Us →</a>
        </section>
      </main>

      <FloatingSocialIcons />
      <Footer />
    </>
  );
};

export default Services;