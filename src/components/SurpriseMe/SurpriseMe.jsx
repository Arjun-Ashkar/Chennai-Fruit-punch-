import React, { useState } from 'react';
import './SurpriseMe.css';
import { getAllItems } from '../../data/menuData';

export default function SurpriseMe() {
  const [recommendedItem, setRecommendedItem] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleSurpriseClick = () => {
    setIsRolling(true);
    const allItems = getAllItems();

    // Short playful delay for slot-machine feel
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allItems.length);
      setRecommendedItem(allItems[randomIndex]);
      setIsRolling(false);
    }, 280);
  };

  return (
    <section className="surprise-section" aria-label="Can't Decide Menu Recommendation">
      <div className="container">
        <div className="surprise-card-box">
          <div className="surprise-header">
            <span className="surprise-tag">✨ Craving Dilemma?</span>
            <h2 className="surprise-title">Can't Decide?</h2>
            <p className="surprise-desc">
              Overwhelmed by our delicious array of juices, shakes, burgers and snacks? Let destiny choose your treat today!
            </p>
          </div>

          {/* Random Result display if selected */}
          {recommendedItem && (
            <div key={recommendedItem.id} className="surprise-result-card">
              <img
                src={recommendedItem.image}
                alt={recommendedItem.name}
                className="surprise-item-img"
              />
              <div className="surprise-result-text">
                <span className="surprise-recommend-label">How about...</span>
                <h3 className="surprise-item-name">{recommendedItem.name}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Category: {recommendedItem.categoryName}
                </span>
                <div className="surprise-item-price">
                  ₹{recommendedItem.price}
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            className="btn btn-orange surprise-action-btn"
            onClick={handleSurpriseClick}
            disabled={isRolling}
          >
            {isRolling ? 'Picking your flavour...' : recommendedItem ? 'Try Another Surprise 🍹' : 'Surprise Me 🍹'}
          </button>
        </div>
      </div>
    </section>
  );
}
