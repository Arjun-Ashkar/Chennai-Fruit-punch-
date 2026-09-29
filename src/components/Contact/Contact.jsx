import React from 'react';
import './Contact.css';
import { siteConfig } from '../../data/siteConfig';

export default function Contact() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Craving Call to Action">
      <div className="contact-bg-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="contact-box">
          <span className="contact-tag">Fresh Vibes Everyday</span>
          <h2 className="contact-title">Got a Craving?</h2>
          <p className="contact-desc">
            Visit Chennai Fruit Punch for something fresh, delicious and satisfying.
          </p>

          <div className="contact-buttons-group">
            {/* Call Now button */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="btn btn-contact-call"
            >
              📞 Call Now
            </a>

            {/* Get Directions */}
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              📍 Get Directions
            </a>

            {/* View Menu */}
            <button
              type="button"
              className="btn btn-contact-menu"
              onClick={scrollToMenu}
            >
              📋 View Menu
            </button>
          </div>

          <p className="phone-note">
            Quick Orders & Takeaways: {siteConfig.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
