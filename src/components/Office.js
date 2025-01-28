import React, { useState, useEffect } from 'react';
import '../styles/components/Office.css';

const images = [
  require('../assets/images/banners/office1.jpeg'),
  require('../assets/images/banners/office2.jpeg'),
  require('../assets/images/banners/office3.jpeg'),
  require('../assets/images/banners/office4.jpeg'),
];

const Office = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Office;