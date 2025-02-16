import React from 'react';

function CarCard({ car }) {
  const handleMouseMove = (e) => {
    const container = e.currentTarget.querySelector('.scroll-container');
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const scrollWidth = container.scrollWidth - rect.width;
    const scrollLeft = (offsetX / rect.width) * scrollWidth;
    container.scrollLeft = scrollLeft;
  };

  return (
    <div className="car-card" onMouseMove={handleMouseMove}>
      <div className="labels">
        {(car.labels || []).map((label, index) => (
          <span key={index} className="label">{label}</span>
        ))}
      </div>
      <div className="scroll-container">
        <div className="scroll-item" style={{ backgroundColor: car.color }}></div>
        <div className="scroll-item" style={{ backgroundColor: '#e74c3c' }}></div>
        <div className="scroll-item" style={{ backgroundColor: '#2ecc71' }}></div>
      </div>
      <div className="car-info">
        <h4>{car.brand}</h4>
        <div className="model-price">
          <h3>{car.model}</h3>
          <p>{car.price}</p>
        </div>
      </div>
      <span className={car.status.toLowerCase()}>{car.status}</span>
    </div>
  );
}

export default CarCard;
