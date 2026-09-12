import React, { useState } from 'react';
import { NavMenu } from './NavMenu';
import { MobileDrawer } from './MobileDrawer';
import { SearchModal } from './SearchModal';
import { Button } from '../UI/Button';
import './Header.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__container">
          {/* Logo */}
          <div className="site-header__logo-col">
            <a href="/" className="site-header__logo-link" aria-label="100seSupport Home">
              <img
                src="/logo.jpg"
                alt="100seSupport Logo"
                className="site-header__logo-img"
                width={64}
                height={62}
              />
            </a>
          </div>

          {/* Right Area: Navigation + Search + CTA */}
          <div className="site-header__actions-col">
            {/* Desktop Navigation */}
            <div className="site-header__desktop-nav">
              <NavMenu />
            </div>

            {/* Search Trigger Button */}
            <button
              type="button"
              className="site-header__search-trigger"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search dialog"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Donate Now CTA Button */}
            <div className="site-header__cta">
              <Button href="#donate" variant="primary" size="md">
                Donate Now
              </Button>
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              className="site-header__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="site-header__hamburger-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Search Popup Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
