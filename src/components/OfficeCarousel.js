import React, { useState, useEffect } from 'react';
import '../styles/components/OfficeCarousel.css';

const images = [
  require('../assets/images/banners/front-office.jpg'),
  require('../assets/images/banners/inside-office.jpg'),
];

const OfficeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="office-carousel-container">
      <div
        className="office-carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="office-image"
          />
        ))}
      </div>
    </div>
  );
};

export default OfficeCarousel;