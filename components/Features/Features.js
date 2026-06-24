import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fa-truck-fast',
      title: 'Fast Delivery',
      description: 'Delivery within 24 hours in selected locations.'
    },
    {
      icon: 'fa-shield',
      title: 'Secure Payment',
      description: 'Safe and secure online payment methods.'
    },
    {
      icon: 'fa-award',
      title: 'Premium Quality',
      description: '100% genuine smartphones and accessories.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Dedicated support team always ready to help.'
    }
  ];

  return (
    <section className="features">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <i className={`fa-solid ${feature.icon}`}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
