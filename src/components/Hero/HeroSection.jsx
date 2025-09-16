import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import './HeroSection.css';

const HeroSection = ({ companyInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
              <h1 className="hero-title mb-4">
                Welcome to <span className="highlight">{companyInfo.name}</span>
              </h1>

              <p className="hero-description lead mb-5">
                {companyInfo.description}
              </p>

              <div className="hero-actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleLearnMore}
                  className="me-3 mb-3"
                >
                  Learn More
                  <i className="fas fa-arrow-right ms-2"></i>
                </Button>

                <Button 
                  variant="outline-light" 
                  size="lg" 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mb-3"
                >
                  Book Consultation
                  <i className="fas fa-calendar ms-2"></i>
                </Button>
              </div>

              <div className="hero-stats mt-5">
                <div className="row text-center">
                  <div className="col-md-3 col-6 mb-3">
                    <div className="stat-item">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Years</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="stat-item">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Cases</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="stat-item">
                      <div className="stat-number">98%</div>
                      <div className="stat-label">Success</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="stat-item">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;