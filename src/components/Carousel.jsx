import React, { useState } from 'react';
import carData from "../data/cars.json"
import CarCard from './CarCard';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const initialItems = [
  { image: 'car1.jpg', brand: 'LAMBORGHINI', model: 'Huracán EVO Spyder LP640-4 AWD 640hk.' },
  { image: 'car2.jpg', brand: 'LAMBORGHINI', model: 'Aventador LP750-4 SV Roadster/ Carbon / 1 av 500.' },
  { image: 'car3.jpg', brand: 'BENTLEY', model: 'Flying Spur V8 549hk 2023 / Azure / Touring / SPEC.' },
  { image: 'car4.jpg', brand: 'FERRARI', model: 'SF90 Stradale 1000hk / Full Options / Nybil / OMG.' },
  { image: 'car5.jpg', brand: 'PORSCHE', model: '911 GT3 RS / Clubsport / Keramiska / LIFT / Ny.' },
  { image: 'car6.jpg', brand: 'MERCEDES-BENZ', model: 'G 63 AMG 585hk / Burmester / Night P / 22" / OMG.' }
];

function Carousel() {
  const [carouselItems, setCarouselItems] = useState(initialItems);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCarouselItems((prevItems) => {
      const lastItem = prevItems[prevItems.length - 1];
      const restItems = prevItems.slice(0, prevItems.length - 1);
      return [lastItem, ...restItems];
    });
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCarouselItems((prevItems) => {
      const [firstItem, ...restItems] = prevItems;
      return [...restItems, firstItem];
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>Featured Cars</h2>
        <div className="carousel-controls-top">
          <button className="carousel-control top prev" onClick={prevSlide}>Prev</button>
          <button className="carousel-control top next" onClick={nextSlide}>Next</button>
        </div>
      </div>
        {/* <div className="carousel-track"></div> */}
        <Slider {...settings}>
          {carData.map((item, index) => (
            <CarCard id={index} car={item}/>
          ))}
        </Slider>
    </section>
  );
}

export default Carousel;
