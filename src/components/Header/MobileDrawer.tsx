import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../types/navigation';
import './MobileDrawer.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const toggleSubmenu = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div className="mobile-drawer__backdrop" onClick={onClose} />
      <div className="mobile-drawer__content">
        <button
          className="mobile-drawer__close"
          onClick={onClose}
          aria-label="Close navigation menu"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="mobile-drawer__nav">
          <ul className="mobile-drawer__list">
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = Boolean(expandedItems[item.id]);
              const isCurrentActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href) ||
                    (item.href.endsWith('/') && location.pathname === item.href.slice(0, -1));

              return (
                <li key={item.id} className="mobile-drawer__item">
                  <div className="mobile-drawer__link-row">
                    <Link
                      to={item.href}
                      className={`mobile-drawer__link ${isCurrentActive ? 'mobile-drawer__link--active' : ''}`}
                      onClick={hasChildren ? (e) => toggleSubmenu(item.id, e) : onClose}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        className={`mobile-drawer__chevron ${isExpanded ? 'mobile-drawer__chevron--expanded' : ''}`}
                        onClick={(e) => toggleSubmenu(item.id, e)}
                        aria-label={`Toggle ${item.label} sub-menu`}
                        aria-expanded={isExpanded}
                      >
                        <svg viewBox="0 0 12 8" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && item.children && isExpanded && (
                    <ul className="mobile-drawer__submenu">
                      {item.children.map((sub) => (
                        <li key={sub.id} className="mobile-drawer__submenu-item">
                          <Link
                            to={sub.href}
                            className="mobile-drawer__submenu-link"
                            onClick={onClose}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
