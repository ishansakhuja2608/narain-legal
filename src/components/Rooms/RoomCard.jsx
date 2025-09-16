import React, { useState } from 'react';
import './RoomCard.css';

const RoomCard = ({ room, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMoreClick = () => {
    console.log(`View more details for ${room.name}`);
  };

  return (
    <div 
      className={`room-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="room-image-container">
        <img 
          src={room.image} 
          alt={room.name}
          className={`room-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="image-overlay">
          <div className="overlay-content">
            <button className="view-gallery-btn" onClick={handleMoreClick}>
              <i className="fas fa-images"></i>
              <span>View Gallery</span>
            </button>
          </div>
        </div>

        <div className="room-badge">
          <i className="fas fa-users"></i>
          <span>{room.capacity}</span>
        </div>
      </div>

      <div className="room-content">
        <h3 className="room-title">{room.name}</h3>
        <p className="room-description">{room.description}</p>

        <div className="room-features">
          <div className="features-list">
            {room.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="feature-tag">
                <i className="fas fa-check"></i>
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="room-tech">
          <div className="tech-header">
            <i className="fas fa-cog"></i>
            <span>Technology</span>
          </div>
          <div className="tech-list">
            {room.technology.slice(0, 2).map((tech, idx) => (
              <span key={idx} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>

        <button 
          className={`room-cta-btn ${isHovered ? 'hovered' : ''}`}
          onClick={handleMoreClick}
        >
          <span>MORE DETAILS</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RoomCard;