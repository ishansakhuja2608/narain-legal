import React, { useState, useEffect, useRef } from 'react';
import FacilityCard from './FacilityCard';
import './FacilitiesSection.css';

const FacilitiesSection = ({ facilities }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="facilities" className="facilities-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">
            Comprehensive Dispute Resolution
            <span className="highlight"> Facilities</span>
          </h2>
          <p className="section-description">
            We provide a complete suite of modern facilities and services designed to meet 
            all your dispute resolution needs with the highest standards of professionalism.
          </p>
        </div>

        <div className="row g-4">
          {facilities.map((facility, index) => (
            <div key={facility.id} className="col-lg-3 col-md-6">
              <FacilityCard 
                facility={facility} 
                index={index} 
                isVisible={isVisible} 
              />
            </div>
          ))}
        </div>

        <div className="facilities-cta text-center mt-5">
          <p className="cta-text">
            Ready to experience our world-class facilities?
          </p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Visit
            <i className="fas fa-calendar-plus ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;