import React from 'react';
import './CatalogCard.css';

const CatalogCard = ({ title, image, description, link }) => {
  return (
    <a href={link} className="game-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <div className="content">
          <h3><b>{title}</b></h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CatalogCard;
