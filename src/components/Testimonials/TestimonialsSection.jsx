import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Client Testimonials</span>
          <h2 className="section-title">
            What Our Clients 
            <span className="highlight"> Say About Us</span>
          </h2>
          <p className="section-description">
            Discover why leading organizations trust Narain Legal
            for their dispute resolution needs.
          </p>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${
                index === activeTestimonial ? 'active' : ''
              } ${isVisible ? 'animate-in' : ''}`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>

                <p className="testimonial-text">
                  "{testimonial.content}"
                </p>

                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-title">
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.length > 1 && (
            <div className="testimonials-navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;