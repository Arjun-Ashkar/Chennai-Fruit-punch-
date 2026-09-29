import React from 'react';
import './ComboCard.css';

export default function ComboCard({ combo }) {
  return (
    <article className="combo-card" aria-label={combo.name}>
      {/* Top Header Bar */}
      <div className="combo-header-bar">
        <div className="combo-number-badge">
          <span>🔥</span>
          <span>{combo.name}</span>
        </div>
        {combo.badge && (
          <span className="combo-badge-pill">
            {combo.badge}
          </span>
        )}
      </div>

      {/* Visual Image */}
      <div className="combo-img-wrap">
        <img
          src={combo.image}
          alt={combo.name}
          className="combo-img"
          loading="lazy"
        />
      </div>

      {/* Combo Content */}
      <div className="combo-body">
        <ul className="combo-items-list">
          {combo.comboItems.map((itemStr, i) => (
            <li key={i} className="combo-item-entry">
              <span className="combo-check-icon">✓</span>
              <span>{itemStr}</span>
            </li>
          ))}
        </ul>

        {/* Footer with Price */}
        <div className="combo-footer">
          <div className="combo-price-wrap">
            <span className="combo-price-label">Special Combo</span>
            <div className="combo-price">
              <span className="currency">₹</span>
              {combo.price}
            </div>
          </div>

          <span className="combo-order-tag">
            Complete Meal
          </span>
        </div>
      </div>
    </article>
  );
}
