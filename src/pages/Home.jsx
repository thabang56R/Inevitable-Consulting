import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import HeroSection from '../components/HeroSection';
import ExcellenceSection from '../components/ExcellenceSection';
import WhySection from '../components/WhySection';
import ServicesSection from '../components/ServicesSection';
import ValueProposition from '../components/ValueProposition';
import Bbbeebadge from '../components/Bbbeebadge';
import AccordionItem from '../components/AccordionItem';
import FloatingSocialIcons from '../components/FloatingSocialIcons'; 

const Home = () => {
  const [expanded, setExpanded] = useState({
    proven: true,
    experience: false,
    formula: false,
    job: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-quart',
      once: true, // Animate only once
    });
  }, []);

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <Header />

      <main>
          <div data-aos="fade-up" data-aos-delay="200">
          <ContactInfo />
        </div>

       
        <section className="about-accordions" data-aos="fade-up" data-aos-delay="300">
          <AccordionItem
            title="Our Competitive Advantage"
            isOpen={expanded.proven}
            onToggle={() => toggleSection('proven')}
          >
            What set Inevitable Accounting & Advisory Consulting firm apart from traditional firms is our Ability to blend big-Firms technical capability with entrepreneurial responsiveness. This unique combination allows us to deliver high-quality services while remaining agile and client-focused, ensuring tailored solutions that meet the specific needs of each business we serve.Every engagement is customised practical, and aligned to our clients strategic objectives.
          </AccordionItem>

          <AccordionItem
            title="Why Clients Chooses Us"
            isOpen={expanded.experience}
            onToggle={() => toggleSection('experience')}
          >
            <p>We are trusted advisors who provide comprehensive financial and strategic guidance to our clients not just compliance providers. We have International and listed company experience . We are Responsive , partner-led services delivery . We are committed to transformation and SMEs empowerment.</p>
          </AccordionItem>

          <AccordionItem
            title="Our Winning Formula"
            isOpen={expanded.formula}
            onToggle={() => toggleSection('formula')}
          >
            <p>We exist to build trust through ethical, transparent accounting and to empower businesses with clear financial insight that supports confident decision-making and sustainable growth. We deliver more than compliance - We provide strategic financial guidance, practical insights, and technology-driven solutions that help our clients understand their numbers and shape their future.</p>
          </AccordionItem>

          <AccordionItem
            title="Growth & Impact"
            isOpen={expanded.job}
            onToggle={() => toggleSection('job')}
          >
            <p>We are committed to supporting SMEs, entrepreneurs, and growing businesses by providing tailored business and financial solutions and strategic guidance , resilience that drive sustainable growth and long-term success in south african economy.</p>
          </AccordionItem>
          
          <div data-aos="fade-right" data-aos-delay="400">
          <HeroSection />
        </div>

          
        </section>
        

        <div data-aos="fade-up" data-aos-delay="500">
          <ExcellenceSection />
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
          <WhySection />
        </div>
        <Bbbeebadge />
        
        <div data-aos="fade-up" data-aos-delay="700">
          <ServicesSection />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="800">
          <ValueProposition />
        </div>

        

        {/* Add more sections with data-aos as needed */}
      </main>

      <FloatingSocialIcons /> 

      <Footer />
    </>
  );
};

export default Home;







