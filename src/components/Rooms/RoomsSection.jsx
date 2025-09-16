import React, { useState, useEffect, useRef } from 'react';
import RoomCard from './RoomCard';
import './RoomsSection.css';

const RoomsSection = ({ rooms }) => {
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
    <section id="rooms" className="rooms-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Our Rooms</span>
          <h2 className="section-title">
            Enhancing the way 
            <span className="highlight"> arbitration is done</span>
          </h2>
          <p className="section-description">
            Discover our state-of-the-art facilities designed to provide the perfect environment 
            for all types of dispute resolution proceedings.
          </p>
        </div>

        <div className="row g-4">
          {rooms.map((room, index) => (
            <div key={room.id} className="col-lg-6 col-md-12">
              <RoomCard 
                room={room} 
                index={index} 
                isVisible={isVisible} 
              />
            </div>
          ))}
        </div>

        <div className="rooms-bottom-section mt-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bottom-content">
                <h3>Ready to book your ideal space?</h3>
                <p>
                  Our team is here to help you select the perfect room and configuration 
                  for your specific needs. Contact us for personalized assistance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
                <i className="fas fa-calendar-check ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;