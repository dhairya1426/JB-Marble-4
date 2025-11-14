import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'categories', label: 'Categories' },
  { id: 'legacy', label: 'Legacy' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // close menu after click
    setMobileMenuOpen(false);
  };

  // MOBILE MENU rendered in a portal – always above everything
  const mobileMenu = mobileMenuOpen
    ? createPortal(
        <>
          {/* Dark backdrop */}
          <div
            className="mobile-menu-backdrop"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.35)',
              zIndex: 9998,
            }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Left-side slide panel */}
          <nav
            className="nav-menu-mobile"
            style={{
              position: 'fixed',
              top: 0,
              left: 0, // left side
              bottom: 0,
              width: '75vw',
              maxWidth: '320px',
              backgroundColor: '#ffffff',
              zIndex: 9999,
              padding: '80px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '2px 0 16px rgba(0,0,0,0.15)',
            }}
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  border: 'none',
                  background: 'none',
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </>,
        document.body
      )
    : null;

  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="https://customer-assets.emergentagent.com/job_e20de504-1631-4d11-a1e2-88bb70ca8e11/artifacts/b1v0md0r_logogogo.png"
              alt="JB MARBLE"
            />
          </div>

          {/* Desktop menu (CSS should hide this on mobile) */}
          <ul className="nav-menu">
            {links.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <button
            className="mobile-menu-toggle"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
};

export default Navigation;
