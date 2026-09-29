import React, { useState, useEffect, useRef } from 'react';
import './FruitFacts.css';
import { fruitFacts } from '../../data/fruitFacts';

export default function FruitFacts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const totalSlides = fruitFacts.length;

  // Auto-advance every 3.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="fruit-facts" className="section fruit-facts-section" aria-label="Fruit Facts">
      {/* Background Floating Fruit Shapes */}
      <div className="facts-bg-fruits" aria-hidden="true">
        <span className="bg-fruit bg-fruit-1">🍋</span>
        <span className="bg-fruit bg-fruit-2">🍊</span>
        <span className="bg-fruit bg-fruit-3">🍉</span>
        <span className="bg-fruit bg-fruit-4">🍓</span>
        <span className="bg-fruit bg-fruit-5">🍍</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="section-header">
          <span className="section-tag">Did You Know?</span>
          <h2 className="section-title">Fresh Facts 🍊</h2>
          <p className="section-subtitle">
            Nature’s vibrant nourishment packed in every single glass we pour.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {fruitFacts.map((fruit, idx) => (
                <div key={fruit.id} className="carousel-slide" aria-hidden={currentIndex !== idx}>
                  <div className="fact-card-inner">
                    {/* Fruit Visual */}
                    <div className="fact-img-wrapper">
                      <img
                        src={fruit.image}
                        alt={`${fruit.name} fresh fruit`}
                        loading="lazy"
                      />
                      <span className="fact-badge-pill">
                        {fruit.emoji} {fruit.tag}
                      </span>
                    </div>

                    {/* Fruit Information */}
                    <div className="fact-info">
                      <div className="fact-header-row">
                        <h3 className="fact-fruit-name">{fruit.name}</h3>
                        <span className="fact-fruit-tamil">{fruit.tamilName}</span>
                      </div>

                      <div className="fact-quote-box">
                        “{fruit.fact}”
                      </div>

                      <div className="fact-stats-tag">
                        <span>✨</span>
                        <span>Key Highlight: {fruit.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous fruit fact"
            >
              ‹
            </button>

            {/* Pagination Dots */}
            <div className="carousel-dots" role="tablist" aria-label="Fruit Fact Slides">
              {fruitFacts.map((fruit, idx) => (
                <button
                  key={fruit.id}
                  type="button"
                  className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  role="tab"
                  aria-selected={currentIndex === idx}
                  aria-label={`Go to slide ${idx + 1}: ${fruit.name}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={handleNext}
              aria-label="Next fruit fact"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
