// src/pages/About.jsx (new file)
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingSocialIcons from '../components/FloatingSocialIcons';

const leadershipMembers = [
  { name: 'Mr Monama MA', position: 'Managing Director', image: '/director.png' },
  

];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out-quart', once: true });
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* About Banner */}
        <section className="about-banner" data-aos="fade-down">
          <div className="container">
            <h1>Inevitable</h1>
            <h2 style={{color:'green'}}>Clarity in Numbers , Confidence in Decisions , Sustanable growth</h2>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <p>
              Inevitable Accounting & Advisory(Pty) Ltd , Trading as Inevitable Consulting, is a 100% registered  black-owned , 
              Future-Focused accounting , Tax , and advisory Company that exist to partners with ambitions businesses , Entrepreneurs,
              and institutions by delivering exceptional services that drive  businesses and financial growth , transformation , and lasting impact solutions that go beyond in South Africa.
            </p>
            <p>
              The firm combines deep technical expertise , strong commercial acumen, and international exposure to deliver services that rival established
              global firms while maintaining a distinctly local perspective. We dedicated to providing innovative solutions tailored to the unique needs of each client.
            </p>
            <a href="#leadership" className="cta-btn">Our Directors →</a>
          </div>
        </section>

        {/* Values Section */}
        <section className="values" data-aos="fade-left" data-aos-delay="300">
          <div className="container">
            <h2>Our Values</h2>
            <blockquote>
              ‘We uphold the highest ethical standards, ensuring honest , transparency , respect 
              and Independence in all our engagements’ – Mr Monama MA (Managing-Director )
            </blockquote>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission" data-aos="fade-right" data-aos-delay="400">
          <div className="container">
            <h2>Our Mission</h2>
            <p>To Empower our clients with reliable financial information strategic insight, and compliants solutions that enable confident decision making and sustanable value creation .</p>
            <div className="mission-image oval-image">
              {/* Placeholder for mission image */}
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974" alt="Team meeting" />
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="social-responsibility" data-aos="fade-up" data-aos-delay="500">
          <div className="container">
            <h2>Collaboration</h2>
            <p>we work hand in hand with our clients, gaining a deep understanding of their businesses to deliver tailored , practical solutions</p>
            

            <h3>Excellence & Competence</h3>
            <p>We are commited to technical excellence , continuous learning, and delivering consistency high quality work that meets both regulatory and commercial expectations.</p>

            <h4>Ownership & Accountability</h4>
            <p> We take responsibility for outcomes , apply an ownership mindset , and stand by the quality of our advices.</p>
          </div>
        </section>

        {/* Enhanced Insight */}
        <section className="enhanced-insight" data-aos="fade-up" data-aos-delay="600">
          <div className="container">
            <h1>Enhanced Insight Through Data interpretation</h1>
            <p> We deliver enhanced financial insight by transforming complex data into clear , actionable intelligence. Through in-depth analysis, strategic foresight, and a strong understanding of regulatory and business environments.</p>
            <p>We help organisations identify risks, uncover opportunities , and make informed decisions. Our approach goes beyond compliance and reporting-providing forward-looking insights that support sustainable growth, operational efficiency , and long-term value creation.</p>
            <a href="/services" className="cta-btn">Our Services →</a>
          </div>
        </section>

        

        {/* Leadership Section */}
        <section id="leadership" className="leadership" data-aos="fade-up" data-aos-delay="800">
          <div className="container">
            <h2>Our Leadership</h2>
            <h3>Managing Director </h3>
            <p>Mr Monama MA is an aspiring Charted Accountant with over 8 Years of professional Experience in Audit , Accounting , Taxation , and Advisory services. He brings extensive experience gained from working with broad spectrum of international and local companies, from emerging businesses to prominent listed businesses.
              He also brings experience from across multiple sectors , including real estate and property , general and commercial services, financial services, technology and media, oil, mining and energy, as well as public sector frameworks such as the MFMA, PFMA, and the nation's tax-collecting authority.
            </p>
            
            <div className="leadership-grid">
              {leadershipMembers.map((member, index) => (
                <div key={index} className="leader-card">
                  <div className="leader-image oval-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="career-cta" data-aos="fade-up" data-aos-delay="900">
          <div className="container">
            <h1>Do You Want To Work With A Leading South African Accounting & Advisory Consulting Firm?</h1>
            <p style={{color:'white'}}>Get In Touch With Us Today</p>
            <a href="/contact" className="cta-btn">Contact Us →</a>
            <div className="cta-image oval-image">
              {/* Placeholder */}
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1970" alt="Working team" />
            </div>
          </div>
        </section>
      </main>

      <FloatingSocialIcons />
      <Footer />
    </>
  );
};

export default About;

