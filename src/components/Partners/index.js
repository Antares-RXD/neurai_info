import React from 'react';
import './styles.partner-banner.css';

const Partners = () => {
  const partners = Array.from({ length: 12 }, (_, i) => `partner${i + 1}.svg`);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...partners, ...partners].map((partner, index) => (
          <img
            key={index}
            src={`/img/partner/${partner}`}
            alt={`${partner} logo`}
            className="partner-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;

