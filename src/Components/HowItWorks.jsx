import React, { useState } from "react";
import cardData from "../Data/cards.json";
import HowCard from "./HowCard";
import "../Styles/HowItWorks.css";

function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tags = [...new Set(cardData.map((card) => card.title))];
  const cardsPerView = 3;

  const totalCards = cardData.length;
  const loopIndex = (index) => (index + totalCards) % totalCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => loopIndex(prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => loopIndex(prev + 1));
  };

  const visibleCards = Array.from({ length: cardsPerView }, (_, i) => {
    const index = loopIndex(currentIndex + i);
    return cardData[index];
  });

  return (
    <section className="how-it-works">
      <div className="how-header">
        <h4>HOW IT WORKS</h4>
        <h2>
          <span>Lifestyle as medicine:</span> The six pillars
        </h2>
        <div className="tag-filters">
          {tags.map((tag, i) => (
            <button key={i} className={i === 0 ? "active" : ""}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="slider-wrapper">
        <div className="slider-controls">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>

        <div className="card-slider">
          <div className="card-slider-track">
            {visibleCards.map((card, i) => (
              <HowCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
