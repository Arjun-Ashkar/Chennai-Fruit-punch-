import React, { useState, useEffect } from 'react';
import './Location.css';
import { siteConfig } from '../../data/siteConfig';

export default function Location() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    setIsOpenNow(siteConfig.isCurrentlyOpen());
    const timer = setInterval(() => {
      setIsOpenNow(siteConfig.isCurrentlyOpen());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0, Sunday = 6

  return (
    <section id="location" className="section location-section" aria-label="Visit Chennai Fruit Punch">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Visit Chennai Fruit Punch</h2>
          <p className="section-subtitle">
            Drop by our Aminjikarai spot on Nelson Manickam Road for chilled juices and warm snacks.
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="location-grid">
          {/* Left: Info Card */}
          <div className="location-info-card">
            <div>
              {/* Live Status Badge */}
              <div className={`location-status-badge ${isOpenNow ? 'open' : 'closed'}`}>
                <span className={`status-indicator-dot ${isOpenNow ? 'open' : 'closed'}`}></span>
                <span>{isOpenNow ? 'Store is Open Now' : 'Store is Currently Closed'}</span>
              </div>

              {/* Address Details */}
              <address className="location-address-box" style={{ marginTop: '20px' }}>
                <h3 className="location-brand-title">{siteConfig.name}</h3>

                <div className="location-address-line">
                  <span className="location-pin-icon">📍</span>
                  <div className="location-address-text">
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      {siteConfig.address.line1}
                    </p>
                    <p>{siteConfig.address.line2}</p>
                    <p>
                      {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}
                    </p>
                  </div>
                </div>
              </address>
            </div>

            {/* Opening Hours Schedule */}
            <div className="hours-box">
              <h4 className="hours-heading">
                <span>🕒</span>
                <span>Operating Hours</span>
              </h4>
              <ul className="hours-list">
                {siteConfig.openingHours.days.map((schedule, idx) => (
                  <li
                    key={schedule.day}
                    className={`hours-row ${todayIndex === idx ? 'is-today' : ''}`}
                  >
                    <span>
                      {schedule.day}
                      {todayIndex === idx && <span className="today-indicator">Today</span>}
                    </span>
                    <span>{schedule.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions Action */}
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Get Directions on Google Maps 📍
            </a>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="location-map-card">
            <iframe
              title="Chennai Fruit Punch Google Map Location"
              src={siteConfig.googleMapsEmbedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-floating-overlay">
              <div>
                <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--green-deep)' }}>
                  Nelson Manickam Road
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Aminjikarai, Chennai 600029
                </div>
              </div>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-orange"
              >
                Open Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
