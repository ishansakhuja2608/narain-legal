import React, { useState, useEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './StatsSection.css';

const StatsSection = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-background"></div>
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Our Achievements</span>
          <h2 className="section-title text-white">
            Proven Excellence in 
            <span className="highlight"> Dispute Resolution</span>
          </h2>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isVisible }) => {
  const count = useCounter(isVisible ? stat.number : 0, stat.number, 2000);

  return (
    <div className="col-lg-3 col-md-6">
      <div 
        className={`stat-card ${isVisible ? 'animate-in' : ''}`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="stat-icon">
          <i className={stat.icon}></i>
        </div>
        <div className="stat-number">
          {count}{stat.suffix}
        </div>
        <div className="stat-label">
          {stat.label}
        </div>
        <div className="stat-description">
          {stat.description}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;