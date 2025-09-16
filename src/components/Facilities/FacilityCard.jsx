import React, { useState } from 'react';
import './FacilityCard.css';

const FacilityCard = ({ facility, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    // Add facility details modal or navigation logic here
    console.log(`Clicked on ${facility.name}`);
  };

  return (
    <div 
      className={`facility-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="card-background"></div>
      <div className="card-content">
        <div className="facility-icon">
          <i className={facility.icon}></i>
        </div>

        <h3 className="facility-title">{facility.name}</h3>
        <p className="facility-description">{facility.description}</p>

        <div className="card-footer">
          <span className="learn-more">
            Learn More
            <i className={`fas fa-arrow-right ms-2 ${isHovered ? 'arrow-animate' : ''}`}></i>
          </span>
        </div>
      </div>

      <div className="card-hover-effect"></div>
    </div>
  );
};

export default FacilityCard;