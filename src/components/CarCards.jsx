import React from 'react';
import carData from "../data/cars.json"
import CarCard from './CarCard';

import { useNavigate } from 'react-router-dom';

function CarCards() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to '/target-page'
    navigate('/findcars');
  };

  let newData = carData.slice(0,9);
  return (
    <section className="car-cards">
      {newData.map((car, index) => (
        <CarCard car={car} id={index}/>
      ))}
      <button onClick={handleClick}>
            Click Me!
      </button>

    </section>
  );
}

export default CarCards;
