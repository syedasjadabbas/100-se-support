import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../types/navigation';
import { Dropdown } from './Dropdown';
import './NavMenu.css';

export const isNavItemActive = (itemId: string, itemHref: string, pathname: string): boolean => {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (itemId === 'home') {
    return path === '/';
  }

  if (itemId === 'about-us') {
    return path === '/about-us';
  }

  if (itemId === 'monthly-cases') {
    return path === '/monthly-cases';
  }

  if (itemId === 'flood-cases') {
    return path === '/flood-cases' || path === '/campaigns-page';
  }

  if (itemId === 'heatwave-cases') {
    return path === '/heatwave' || path === '/heatwave-cases';
  }

  if (itemId === 'videos') {
    return path === '/videos';
  }

  if (itemId === 'contact-us') {
    return path === '/contacts' || path === '/contact-us';
  }

  const cleanItemHref = itemHref.replace(/\/+$/, '') || '/';
  return path === cleanItemHref || path.startsWith(cleanItemHref + '/');
};

export const NavMenu: React.FC = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const location = useLocation();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown immediately when page route changes
  useEffect(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdownId(null);
  }, [location.pathname]);

  // Close dropdown immediately when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setOpenDropdownId(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: string, hasChildren: boolean) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (hasChildren) {
      setOpenDropdownId(id);
    } else {
      setOpenDropdownId(null);
    }
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 200);
  };

  const handleClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdownId(null);
  };

  return (
    <nav className="nav-menu" aria-label="Main Navigation">
      <ul className="nav-menu__list">
        {NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isDropdownOpen = openDropdownId === item.id;
          
          // Match active state accurately based on item identity and route aliases
          const isCurrentActive = isNavItemActive(item.id, item.href, location.pathname);

          return (
            <li
              key={item.id}
              className={`nav-menu__item ${isCurrentActive ? 'nav-menu__item--active' : ''} ${hasChildren ? 'nav-menu__item--has-dropdown' : ''} ${isDropdownOpen ? 'nav-menu__item--open' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.id, hasChildren)}
              onMouseLeave={() => hasChildren && handleMouseLeave()}
              onFocus={() => handleMouseEnter(item.id, hasChildren)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  handleClose();
                }
              }}
            >
              <Link
                to={item.href}
                className={`nav-menu__link ${isCurrentActive ? 'nav-menu__link--active' : ''}`}
                aria-current={isCurrentActive ? 'page' : undefined}
                aria-haspopup={hasChildren ? 'true' : undefined}
                aria-expanded={hasChildren ? isDropdownOpen : undefined}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleClose();
                }}
              >
                {item.label}
                {hasChildren && (
                  <span className="nav-menu__arrow" aria-hidden="true">
                    <svg viewBox="0 0 10 6" width="10" height="6" fill="currentColor">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </span>
                )}
              </Link>

              {hasChildren && item.children && (
                <Dropdown
                  items={item.children}
                  isOpen={isDropdownOpen}
                  onClose={handleClose}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
