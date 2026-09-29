import React, { useState } from 'react';
import './MenuCard.css';

export default function MenuCard({ item }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const badgeClass = item.badge
    ? `badge-${item.badge.toLowerCase().replace(/\s+/g, '-')}`
    : '';

  return (
    <article className="menu-card" aria-label={item.name}>
      {/* Image Wrap */}
      <div className={`menu-card-img-wrap ${!imgLoaded ? 'img-loading' : 'img-ready'}`}>
        <img
          src={item.image}
          alt={item.name}
          className={`menu-card-img ${imgLoaded ? 'loaded' : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
        />

        {/* Promo Badge if present */}
        {item.badge && (
          <span className={`card-badge ${badgeClass}`}>
            {item.badge}
          </span>
        )}

        {/* Veg / Non-Veg Indicator */}
        <div className="card-diet-tag" title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
          <div className={`diet-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
            <span className="diet-dot"></span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="menu-card-body">
        <div>
          <span className="menu-card-category">{item.categoryName || item.categorySlug}</span>
          <h3 className="menu-card-title">{item.name}</h3>
          {item.description && (
            <p className="menu-card-desc">{item.description}</p>
          )}
        </div>

        {/* Price & Action */}
        <div className="menu-card-footer">
          <div className="menu-card-price">
            <span className="currency">₹</span>
            {item.price}
          </div>
          <div className="card-hover-arrow" aria-hidden="true">
            →
          </div>
        </div>
      </div>
    </article>
  );
}
