import React from 'react';
import './Footer.css';

const Footer = ({ companyInfo }) => {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (type) => {
    switch (type) {
      case 'phone':
        window.location.href = `tel:${companyInfo.phone}`;
        break;
      case 'email':
        window.location.href = `mailto:${companyInfo.email}`;
        break;
      default:
        break;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <div className="footer-logo">
                  <i className="fas fa-balance-scale"></i>
                  <h4>{companyInfo.name}</h4>
                </div>
                <p className="footer-description">
                  {companyInfo.vision}
                </p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Services</h5>
                <ul className="footer-links">
                  <li><a href="#facilities">Arbitration</a></li>
                  <li><a href="#facilities">Mediation</a></li>
                  <li><a href="#facilities">Virtual Hearings</a></li>
                  <li><a href="#facilities">Court Reporting</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#rooms">Our Rooms</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Contact Information</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{companyInfo.address}</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span 
                      className="clickable"
                      onClick={() => handleContactClick('phone')}
                    >
                      {companyInfo.phone}
                    </span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span 
                      className="clickable"
                      onClick={() => handleContactClick('email')}
                    >
                      {companyInfo.email}
                    </span>
                  </div>
                </div>

                <div className="newsletter-section">
                  <h6>Newsletter</h6>
                  <p>Stay updated with our latest news and services.</p>
                  <div className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="newsletter-input"
                    />
                    <button className="newsletter-btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-bottom-links">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;