import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ companyInfo, navigation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={() => handleNavClick('#home')}>
          <div className="brand-content">
            <i className="fas fa-balance-scale brand-icon"></i>
            <div className="brand-text">
              <span className="brand-name">{companyInfo.name}</span>
              <span className="brand-slogan">{companyInfo.slogan}</span>
            </div>
          </div>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  className={`nav-link ${item.primary ? 'btn btn-primary ms-2' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;