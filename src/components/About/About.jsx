import React from 'react';
import './About.css';
import { useInView } from '../../hooks/useInView';

const varieties = [
  { name: 'Fresh Juices', icon: '🧃' },
  { name: 'Falooda', icon: '🍨' },
  { name: 'Milkshakes', icon: '🥤' },
  { name: 'Mojitos', icon: '🍹' },
  { name: 'Ice Cream', icon: '🍦' },
  { name: 'Burgers', icon: '🍔' },
  { name: 'Momos', icon: '🥟' },
  { name: 'Sandwiches', icon: '🥪' },
  { name: 'French Fries', icon: '🍟' },
  { name: 'Pasta', icon: '🍝' },
  { name: 'Maggi', icon: '🍜' },
  { name: 'Nuggets', icon: '🍗' },
  { name: 'Tea & Coffee', icon: '☕' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section about-section" ref={ref} aria-label="About Chennai Fruit Punch">
      <div className="container">
        <div className="about-grid">
          {/* Left Text Column */}
          <div
            className="about-content"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div>
              <span className="section-tag">About Us</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                About Chennai Fruit Punch
              </h2>
              <div className="title-underline" style={{ margin: '14px 0 0 0' }}></div>
            </div>

            <p className="about-main-text">
              Chennai Fruit Punch brings together refreshing fruit juices, delicious snacks, creamy desserts and flavour-packed combos in one place.
            </p>

            <p className="about-sub-text">
              Whether you are craving a chilled natural fruit juice after a sunny day, hot crispy momos, or a hearty evening burger with friends, our kitchen prepares each item with dedication to freshness and authentic taste.
            </p>

            <div className="variety-tags-wrapper">
              <div className="variety-tags-title">What We Serve:</div>
              <div className="variety-tags-list">
                {varieties.map((v, i) => (
                  <span key={i} className="variety-tag">
                    <span>{v.icon}</span>
                    <span>{v.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Collage Column */}
          <div
            className="about-collage"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            <div className="collage-center-badge">
              <span>🍍</span>
              <span>Fresh Flavours</span>
            </div>

            <div className="collage-item collage-item-1">
              <img
                src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&auto=format&fit=crop&q=80"
                alt="Fresh watermelon and citrus juice"
                loading="lazy"
              />
            </div>

            <div className="collage-item collage-item-2">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
                alt="Gourmet burger with crisp toppings"
                loading="lazy"
              />
            </div>

            <div className="collage-item collage-item-3">
              <img
                src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&auto=format&fit=crop&q=80"
                alt="Freshly steamed momos with chutney"
                loading="lazy"
              />
            </div>

            <div className="collage-item collage-item-4">
              <img
                src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop&q=80"
                alt="Chilled dessert drink and falooda"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
