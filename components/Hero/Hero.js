import React from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Future Of Smartphones</h1>
        <p>
          Discover premium smartphones with powerful cameras, flagship performance, 
          secure payments, and fast delivery. Choose your favorite mobile and order it in minutes.
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => onNavigate('products')}>
            Buy Now
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('products')}>
            Explore
          </button>
        </div>
        <div className="hero-phone">
          <img src="https://pngimg.com/uploads/iphone16/iphone16_PNG37.png" alt="iPhone" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
