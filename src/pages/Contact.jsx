// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingSocialIcons from '../components/FloatingSocialIcons';

const branches = [
  {
    name: 'Johannesburg (Head Office)',
    address: '362 Isibaha Close , Tirong Estate, Johannesburg, 2000',
    cell: '(071) 534 7554',
    email: 'info@Inevitableaccounting.co.za',
    mapLink:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.6960498872822!2d27.958072574745266!3d-26.01077235612291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9577f86a534207%3A0x4ed1b781e880403c!2sTirong%20Estate!5e0!3m2!1sen!2sza!4v1768547735507!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    name: 'Polokwane (Branch)',
    address: '4 Nautalis, Emdo Park, Polokwane, 0742',
    cell: '+27(71) 534 7554',
    mapLink: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5332366494804!2d29.428715000000004!3d-23.870703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d861e2618735%3A0x5662ca8866659db0!2sEmdo%20Park%20ext%2029!5e0!3m2!1sen!2sza!4v1768547349193!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  
];

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out-quart', once: true });
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner */}
        <section className="contact-banner" data-aos="fade-down">
          <div className="container">
            <h1>Contact Us</h1>
            <p style={{color:'green'}}>Get in touch with your nearest Office</p>
          </div>
        </section>

        {/* Branches List */}
        <section className="branches" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <h2>Our Offices</h2>
            <div className="branches-grid">
              {branches.map((branch, index) => (
                <div key={index} className="branch-card">
                  <h3>{branch.name}</h3>
                  <p>{branch.address}</p>
                  <p>{branch.postal}</p>
                  <p><strong>cell:</strong> {branch.cell}</p>
                
                  {branch.email && <p><strong>Email:</strong> <a href={`mailto:${branch.email}`}>{branch.email}</a></p>}
                  
                 {branch.mapLink && (
                <div
                    className="branch-map"
                     dangerouslySetInnerHTML={{ __html: branch.mapLink }}
                          />
                    )}

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contact-cta" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <h2 style={{color:'white'}}>Want To Learn More About Our Services?</h2>
            
            
            <p style={{color:'white'}}>Get in touch to find out how we can help you</p>
          </div>
        </section>
        <a href="/services" className="cta-btn">Our Services →</a>
      </main>

      <FloatingSocialIcons />
      <Footer />
    </>
  );
};

export default Contact;