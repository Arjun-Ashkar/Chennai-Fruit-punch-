import React from 'react';
import './MobileCTA.css';
import { siteConfig } from '../../data/siteConfig';

export default function MobileCTA() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="mobile-cta-bar" aria-label="Mobile Quick Actions">
      <div className="mobile-cta-inner">
        <button
          type="button"
          className="mobile-cta-btn btn-mobile-menu"
          onClick={scrollToMenu}
        >
          <span>📋</span>
          <span>Menu</span>
        </button>

        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-btn btn-mobile-directions"
        >
          <span>📍</span>
          <span>Directions</span>
        </a>

        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="mobile-cta-btn btn-mobile-call"
        >
          <span>📞</span>
          <span>Call</span>
        </a>
      </div>
    </aside>
  );
}
