import React, { useState, useEffect } from 'react';
import './Hero.css';
import { siteConfig } from '../../data/siteConfig';

const rotatingPhrases = [
  { text: "Fresh Juices that refresh your day.", icon: "🍹" },
  { text: "Loaded Burgers that satisfy your cravings.", icon: "🍔" },
  { text: "Refreshing Mojitos for every mood.", icon: "🍃" },
  { text: "Creamy Falooda for sweet celebrations.", icon: "🍨" },
  { text: "Delicious Snacks for quick evening bites.", icon: "🍟" },
];

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Rotate hero phrase every 2.6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const currentPhrase = rotatingPhrases[currentPhraseIndex];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Floating Fruit Elements Around Hero */}
      <span className="floating-fruit fruit-lemon" role="img" aria-label="Lemon">🍋</span>
      <span className="floating-fruit fruit-orange" role="img" aria-label="Orange">🍊</span>
      <span className="floating-fruit fruit-watermelon" role="img" aria-label="Watermelon">🍉</span>
      <span className="floating-fruit fruit-strawberry" role="img" aria-label="Strawberry">🍓</span>
      <span className="floating-fruit fruit-pineapple" role="img" aria-label="Pineapple">🍍</span>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Left */}
          <div className="hero-content">
            <div className="hero-pill">
              <span>📍 Aminjikarai, Chennai</span>
              <span>•</span>
              <span>100% Fresh Daily</span>
            </div>

            <h1 className="hero-title">
              Fruit Punch Chennai: <span className="hero-title-highlight">Fresh Juices & Refreshments</span>
            </h1>

            <p className="hero-subtitle">
              {siteConfig.heroSubtitle}
            </p>

            {/* Dynamic Rotating Phrase Box */}
            <div className="rotating-phrase-box" aria-live="polite">
              <span className="rotating-phrase-icon">{currentPhrase.icon}</span>
              <p key={currentPhraseIndex} className="rotating-phrase-text">
                {currentPhrase.text}
              </p>
            </div>

            <p className="hero-description">
              {siteConfig.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection('menu')}
              >
                Explore Menu 📋
              </button>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Directions 📍
              </a>
            </div>
          </div>

          {/* Hero Visual Composition Right */}
          <div className="hero-visual-wrapper">
            {/* Top-left Glass Floating Badge */}
            <div className="hero-glass-badge badge-top-left">
              <div className="badge-icon-box">🍹</div>
              <div>
                <div className="badge-title">35+ Fresh Juices</div>
                <div className="badge-sub">Cold-pressed & Real Fruit</div>
              </div>
            </div>

            {/* Centerpiece Image Composition */}
            <div className="hero-visual-centerpiece">
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&auto=format&fit=crop&q=85"
                alt="Colorful fresh fruit juices and loaded snacks at Chennai Fruit Punch"
                className="hero-main-img"
                loading="eager"
              />
            </div>

            {/* Bottom-right Glass Floating Badge */}
            <div className="hero-glass-badge badge-bottom-right">
              <div className="badge-icon-box" style={{ background: 'var(--orange-soft)' }}>🔥</div>
              <div>
                <div className="badge-title">Value Combos</div>
                <div className="badge-sub">Starting from just ₹99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
