import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  performGlobalSearch,
  highlightTextParts,
  type SearchResultItem,
} from '../../utils/searchEngine';
import './SearchModal.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SUGGESTIONS = [
  'Syed Asjad',
  'Flood Cases',
  'Monthly Cases',
  'Meezan Bank',
  'Healthcare',
  'Videos',
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      // Delay focus slightly to let animation start smoothly
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  const liveResults = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    return performGlobalSearch(trimmed);
  }, [query]);

  const topResults = useMemo(() => liveResults.slice(0, 6), [liveResults]);

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      onClose();
      navigate(`/search?s=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleSelectResult = (item: SearchResultItem) => {
    onClose();
    navigate(item.url);
  };

  const handleChipClick = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  const renderHighlighted = (text: string, maxLen?: number) => {
    const parts = highlightTextParts(text, query, maxLen);
    return (
      <>
        {parts.map((p, idx) =>
          p.isMatch ? (
            <mark key={idx} className="search-highlight">
              {p.text}
            </mark>
          ) : (
            <span key={idx}>{p.text}</span>
          )
        )}
      </>
    );
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
            <span className="search-modal__input-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              ref={inputRef}
              type="search"
              className="search-modal__input"
              placeholder="Search cases, volunteers, blogs, bank info..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="search-modal__clear"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear query"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
            <button type="submit" className="search-modal__submit" aria-label="Submit search">
              Search
            </button>
          </div>
        </form>

        {/* Live Search Preview Box */}
        <div className="search-modal__results-card">
          {query.trim() === '' ? (
            <div className="search-modal__suggestions">
              <span className="search-modal__suggestions-label">Popular Searches:</span>
              <div className="search-modal__chips">
                {POPULAR_SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="search-modal__chip"
                    onClick={() => handleChipClick(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : topResults.length > 0 ? (
            <div className="search-modal__preview-list">
              <div className="search-modal__preview-header">
                <span>Top Results ({liveResults.length} matches)</span>
                <button
                  type="button"
                  className="search-modal__view-all-link"
                  onClick={() => handleSubmit()}
                >
                  View all results →
                </button>
              </div>

              <div className="search-modal__preview-items">
                {topResults.map((item) => (
                  <div
                    key={item.id}
                    className="search-modal__preview-item"
                    onClick={() => handleSelectResult(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSelectResult(item);
                    }}
                  >
                    <div className="search-modal__preview-thumb">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="search-modal__preview-img"
                        />
                      ) : (
                        <div className="search-modal__preview-fallback">
                          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="search-modal__preview-info">
                      <div className="search-modal__preview-row">
                        <span className="search-modal__preview-badge">
                          {item.badge || item.typeLabel}
                        </span>
                        <h4 className="search-modal__preview-title">
                          {renderHighlighted(item.title, 50)}
                        </h4>
                      </div>
                      <p className="search-modal__preview-snippet">
                        {renderHighlighted(item.description, 85)}
                      </p>
                    </div>

                    <div className="search-modal__preview-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {liveResults.length > topResults.length && (
                <div className="search-modal__preview-footer">
                  <button
                    type="button"
                    className="search-modal__view-all-btn"
                    onClick={() => handleSubmit()}
                  >
                    View all {liveResults.length} results for "{query}"
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="search-modal__empty">
              <p className="search-modal__empty-text">
                No matching results found for "<strong>{query}</strong>".
              </p>
              <span className="search-modal__suggestions-label">Try searching for:</span>
              <div className="search-modal__chips">
                {POPULAR_SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="search-modal__chip"
                    onClick={() => handleChipClick(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
