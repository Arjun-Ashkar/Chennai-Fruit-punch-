import React from 'react';
import './QuickHighlights.css';

const highlights = [
  {
    icon: '🍹',
    title: 'Fresh Juices',
    description: 'Refreshing fruit-based drinks',
    bgColor: 'rgba(46, 204, 113, 0.14)',
    categorySlug: 'fresh-juice',
  },
  {
    icon: '🍔',
    title: 'Tasty Snacks',
    description: 'Burgers, sandwiches and more',
    bgColor: 'rgba(243, 156, 18, 0.14)',
    categorySlug: 'burgers',
  },
  {
    icon: '🍨',
    title: 'Sweet Treats',
    description: 'Falooda, shakes and ice cream',
    bgColor: 'rgba(142, 68, 173, 0.14)',
    categorySlug: 'falooda',
  },
  {
    icon: '🔥',
    title: 'Combo Deals',
    description: 'More food. Better value.',
    bgColor: 'rgba(231, 76, 60, 0.14)',
    categorySlug: 'combo-offers',
  },
];

export default function QuickHighlights({ onSelectCategory }) {
  const handleClick = (slug) => {
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="highlights-section" aria-label="Highlights">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="highlight-card"
              onClick={() => handleClick(item.categorySlug)}
            >
              <div
                className="highlight-icon-box"
                style={{ backgroundColor: item.bgColor }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
