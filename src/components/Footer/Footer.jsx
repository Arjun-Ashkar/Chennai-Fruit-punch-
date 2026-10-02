import React from 'react';
import './Footer.css';
import { siteConfig } from '../../data/siteConfig';
import logoImage from '../../assets/logo.png.jpeg';

const quickLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Fruit Facts', id: 'fruit-facts' },
  { label: 'Menu', id: 'menu' },
  { label: 'Location', id: 'location' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src={logoImage} alt="" className="footer-logo-badge" />
              <span className="footer-logo-title">{siteConfig.name}</span>
            </div>
            <p className="footer-tagline">
              “{siteConfig.tagline}”
            </p>
            <p className="footer-brand-desc">
              Your neighborhood destination for freshly extracted natural fruit juices, wholesome shakes, sizzling burgers, and savory evening snacks in Aminjikarai, Chennai.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer-nav-link"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Col */}
          <div className="footer-address-col">
            <h4 className="footer-heading">Address</h4>
            <div className="footer-address-text">
              <p style={{ color: '#ffffff', fontWeight: 600 }}>{siteConfig.name}</p>
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}
              </p>
              <p style={{ marginTop: '12px' }}>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--lemon)', textDecoration: 'underline' }}
                >
                  View on Google Maps ↗
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <p>© 2026 Chennai Fruit Punch. All rights reserved.</p>
          <p>Fresh Food & Juice Bar • Aminjikarai, Chennai</p>
        </div>
      </div>
    </footer>
  );
}
