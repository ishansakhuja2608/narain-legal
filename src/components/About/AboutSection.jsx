import React, { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button';
import './AboutSection.css';

const AboutSection = ({ companyInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <section id="about" className="about-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={`about-image ${isVisible ? 'animate-in' : ''}`}>
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Narain Legal Office"
                  className="img-fluid rounded-3 shadow-lg"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-play-circle play-icon"></i>
                    <span>Virtual Tour</span>
                  </div>
                </div>
              </div>

              <div className="floating-stats">
                <div className="stat-card">
                  <div className="stat-number">25+</div>
                  <div className="stat-text">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header mb-4">
                <span className="section-subtitle">About Us</span>
                <h2 className="section-title">
                  Leading the Future of 
                  <span className="highlight"> Dispute Resolution</span>
                </h2>
              </div>

              <p className="about-description mb-4">
                {companyInfo.description}
              </p>

              <div className="about-vision mb-4">
                <div className="vision-card">
                  <i className="fas fa-lightbulb vision-icon"></i>
                  <div className="vision-content">
                    <h5>Our Vision</h5>
                    <p className="mb-0">{companyInfo.vision}</p>
                  </div>
                </div>
              </div>

              <div className="about-features mb-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-shield-alt feature-icon"></i>
                      <div className="feature-content">
                        <h6>Secure & Confidential</h6>
                        <p>End-to-end encryption and privacy protection</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-clock feature-icon"></i>
                      <div className="feature-content">
                        <h6>Time Efficient</h6>
                        <p>Streamlined processes for faster resolutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-users feature-icon"></i>
                      <div className="feature-content">
                        <h6>Expert Team</h6>
                        <p>Highly qualified arbitrators and mediators</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-globe feature-icon"></i>
                      <div className="feature-content">
                        <h6>Global Reach</h6>
                        <p>International dispute resolution capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3 mb-3"
                  onClick={() => document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Facilities
                  <i className="fas fa-arrow-right ms-2"></i>
                </Button>

                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className="mb-3"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                  <i className="fas fa-phone ms-2"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;