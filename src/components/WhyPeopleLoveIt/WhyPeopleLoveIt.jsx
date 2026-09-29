import React from 'react';
import './WhyPeopleLoveIt.css';
import { useInView } from '../../hooks/useInView';

const features = [
  {
    icon: '✨',
    title: 'Freshly Prepared',
    description: 'Refreshing drinks and tasty food prepared for you.',
    bgColor: 'rgba(46, 204, 113, 0.12)',
  },
  {
    icon: '🍉',
    title: 'Wide Variety',
    description: 'From fresh juices to burgers, desserts and snacks.',
    bgColor: 'rgba(247, 127, 0, 0.12)',
  },
  {
    icon: '🔥',
    title: 'Affordable Combos',
    description: 'Value-packed combinations for a satisfying meal.',
    bgColor: 'rgba(230, 57, 70, 0.12)',
  },
  {
    icon: '🍽️',
    title: 'Something for Every Craving',
    description: 'Drinks, snacks, desserts and quick bites under one roof.',
    bgColor: 'rgba(114, 9, 183, 0.12)',
  },
];

export default function WhyPeopleLoveIt() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="section why-love-section" ref={ref} aria-label="Why People Love Chennai Fruit Punch">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Promise</span>
          <h2 className="section-title">Why People Love It</h2>
          <p className="section-subtitle">
            What makes Chennai Fruit Punch the go-to neighborhood hangout for cool sips and hot bites.
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="why-love-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className="why-card"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
              }}
            >
              <div
                className="why-icon-bubble"
                style={{ backgroundColor: item.bgColor }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
