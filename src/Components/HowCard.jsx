import React from "react";
import "../Styles/HowCard.css";

function HowCard({ card }) {
  return (
    <div className="how-card">
      <img src={card.image} alt={card.title} className="how-card-image" />
      <div className="how-card-overlay">
        {card.icon && (
          <img src={card.icon} alt="icon" className="how-card-icon" />
        )}
      </div>
      <div className="how-card-content">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

export default HowCard;
