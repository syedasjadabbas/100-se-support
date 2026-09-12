import React, { useEffect, useRef } from 'react';
import './SearchModal.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (query) {
      // Direct to search url or handle search
      window.location.href = `/?s=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="search-modal" role="dialog" aria-modal="true" aria-label="Site Search">
      <div className="search-modal__backdrop" onClick={onClose} />
      <div className="search-modal__content">
        <button
          className="search-modal__close"
          onClick={onClose}
          aria-label="Close search"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <form className="search-modal__form" onSubmit={handleSubmit}>
          <div className="search-modal__input-wrapper">
            <input
              ref={inputRef}
              type="search"
              className="search-modal__input"
              placeholder="Search..."
              name="s"
              autoComplete="off"
            />
            <button type="submit" className="search-modal__submit" aria-label="Submit search">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
