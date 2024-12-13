import React from 'react';
import './styles.tech.css';
const Tech = () => {
  const partners = Array.from({ length: 8 }, (_, i) => `partner${i + 1}.svg`);

  return (
        <div className="partner-banner">
      {partners.map((partner, index) => (
        <img
          key={index}
          src={`/img/partner/${partner}`}
          alt={`${partner} logo`}
          className="partner-logo"
        />
      ))}
    </div>
  );
};

export default Tech;
