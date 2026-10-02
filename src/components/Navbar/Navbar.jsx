import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { siteConfig } from '../../data/siteConfig';
import logoImage from '../../assets/logo.png.jpeg';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Fruit Facts', id: 'fruit-facts' },
  { label: 'Menu', id: 'menu' },
  { label: 'Location', id: 'location' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ activeSection = 'hero' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Monitor scroll for compact navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update live store status
  useEffect(() => {
    setIsOpenNow(siteConfig.isCurrentlyOpen());
    const interval = setInterval(() => {
      setIsOpenNow(siteConfig.isCurrentlyOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent background scroll when mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            aria-label="Chennai Fruit Punch Home"
          >
            <div className="logo-badge">
              <img src={logoImage} alt="" />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-city">Chennai</span>
              <span className="logo-main">Fruit Punch</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions on right: Live Status + CTA button + Hamburger */}
          <div className="nav-actions">
            <div className={`header-status-pill ${isOpenNow ? 'open' : 'closed'}`} title="Live shop status based on operating hours">
              <span className={`status-indicator-dot ${isOpenNow ? 'open' : 'closed'}`}></span>
              <span>{isOpenNow ? 'Open Now' : 'Closed'}</span>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
              <img src={logoImage} alt="" className="mobile-logo-image" />
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', color: 'var(--orange)' }}>CHENNAI</div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--green-deep)' }}>FRUIT PUNCH</div>
              </div>
            </div>

            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-drawer-bottom">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu 📋
            </button>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Get Directions 📍
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
