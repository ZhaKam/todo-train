import React, { useState, useEffect } from 'react';
import { sliderData } from './slider.data';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length);
    }, 5000); 
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % sliderData.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {sliderData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${100 * (index - currentSlide)}%)`
            }}
          >
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="arrow prev" onClick={handlePrev}>&#10094;</button>
      <button className="arrow next" onClick={handleNext}>&#10095;</button>
      
      <div className="dots">
        {sliderData.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
