import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../types/navigation';
import { Dropdown } from './Dropdown';
import './NavMenu.css';

export const NavMenu: React.FC = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const location = useLocation();

  // Close dropdown immediately when page route changes
  useEffect(() => {
    setOpenDropdownId(null);
  }, [location.pathname]);

  // Close dropdown immediately when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setOpenDropdownId(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (id: string) => {
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdownId(null);
  };

  return (
    <nav className="nav-menu" aria-label="Main Navigation">
      <ul className="nav-menu__list">
        {NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isDropdownOpen = openDropdownId === item.id;
          
          // Match active state based on pathname
          const isCurrentActive =
            item.href === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.href) ||
                (item.href.endsWith('/') && location.pathname === item.href.slice(0, -1));

          return (
            <li
              key={item.id}
              className={`nav-menu__item ${isCurrentActive ? 'nav-menu__item--active' : ''} ${hasChildren ? 'nav-menu__item--has-dropdown' : ''}`}
              onMouseEnter={() => hasChildren && handleMouseEnter(item.id)}
              onMouseLeave={() => hasChildren && handleMouseLeave()}
            >
              <Link
                to={item.href}
                className={`nav-menu__link ${isCurrentActive ? 'nav-menu__link--active' : ''}`}
                aria-current={isCurrentActive ? 'page' : undefined}
                aria-haspopup={hasChildren ? 'true' : undefined}
                aria-expanded={hasChildren ? isDropdownOpen : undefined}
                onClick={(e) => {
                  e.currentTarget.blur();
                  setOpenDropdownId(null);
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
                  onClose={() => setOpenDropdownId(null)}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
