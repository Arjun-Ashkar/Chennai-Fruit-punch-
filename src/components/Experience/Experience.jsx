import React from 'react';
import './Experience.css';

const experiences = [
  {
    icon: '🍉',
    title: 'Refreshing fruit flavours',
    text: 'Over 35 distinct freshly pressed juices and fruit blends crafted with natural goodness.',
  },
  {
    icon: '🍔',
    title: 'Plenty of snack options',
    text: 'From loaded burgers and momos to crispy fries, sandwiches, and hot maggi plates.',
  },
  {
    icon: '🔥',
    title: 'Affordable combo choices',
    text: 'Budget-friendly sets combining burgers, fries, and fresh juices starting at ₹99.',
  },
  {
    icon: '🍨',
    title: 'Juices, desserts & snacks in one place',
    text: 'Everything under one roof for quick evening hangouts and casual food breaks.',
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" aria-label="Why Chennai Fruit Punch">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Experience</span>
          <h2 className="section-title">Why Chennai Fruit Punch?</h2>
          <p className="section-subtitle">
            Crafted for fruit enthusiasts and snack lovers looking for authentic taste and quick refreshment.
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="experience-icon" aria-hidden="true">
                {exp.icon}
              </div>
              <h3 className="experience-card-title">{exp.title}</h3>
              <p className="experience-card-text">{exp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
