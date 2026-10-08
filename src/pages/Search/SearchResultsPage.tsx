import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import {
  performGlobalSearch,
  getSearchCounts,
  highlightTextParts,
  type SearchResultType,
  type SearchResultItem,
} from '../../utils/searchEngine';
import './SearchResultsPage.css';

const ITEMS_PER_PAGE = 12;

const POPULAR_SEARCH_TERMS = [
  'Syed Asjad',
  'Flood Cases',
  'Monthly Cases',
  'Meezan Bank',
  'Healthcare',
  'Videos',
  'Volunteers',
];

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawQuery = searchParams.get('s') || searchParams.get('q') || '';

  const [inputQuery, setInputQuery] = useState(rawQuery);
  const [activeFilter, setActiveFilter] = useState<SearchResultType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Sync input value whenever URL query changes
  const [prevRawQuery, setPrevRawQuery] = useState(rawQuery);
  if (prevRawQuery !== rawQuery) {
    setPrevRawQuery(rawQuery);
    setInputQuery(rawQuery);
    setCurrentPage(1);
    setActiveFilter('all');
  }

  // Compute live counts and filtered search results
  const counts = useMemo(() => getSearchCounts(rawQuery), [rawQuery]);
  const results = useMemo(
    () => performGlobalSearch(rawQuery, activeFilter),
    [rawQuery, activeFilter]
  );

  // Pagination calculation
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const paginatedResults = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return results.slice(start, start + ITEMS_PER_PAGE);
  }, [results, currentPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputQuery.trim();
    if (trimmed) {
      setSearchParams({ s: trimmed });
    } else {
      setSearchParams({});
    }
  };

  const handleClear = () => {
    setInputQuery('');
    setSearchParams({});
  };

  const handleChipClick = (term: string) => {
    setInputQuery(term);
    setSearchParams({ s: term });
  };

  const handleFilterClick = (filter: SearchResultType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const renderHighlighted = (text: string, maxLen?: number) => {
    const parts = highlightTextParts(text, rawQuery, maxLen);
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

  const getActionLabel = (item: SearchResultItem): string => {
    switch (item.type) {
      case 'case':
        return 'View Case Details';
      case 'team':
        return 'View on About Us';
      case 'blog':
        return 'Read Full Article';
      case 'video':
        return 'Watch Video Proof';
      case 'page':
      default:
        return 'Visit Page';
    }
  };

  const pageTitle = rawQuery.trim()
    ? `Search Results for: "${rawQuery.trim()}"`
    : 'Site Search';

  return (
    <div className="search-results-page">
      <PageBanner
        title={pageTitle}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Search Results' },
        ]}
      />

      <section className="search-results-section">
        <div className="search-results-container">
          {/* Top Search Input Bar */}
          <div className="search-results-bar">
            <form className="search-results-form" onSubmit={handleSearchSubmit}>
              <span className="search-results-form__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="search"
                className="search-results-form__input"
                placeholder="Search cases, volunteers, blogs, bank info..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                autoComplete="off"
              />
              {inputQuery && (
                <button
                  type="button"
                  className="search-results-form__clear"
                  onClick={handleClear}
                  aria-label="Clear search query"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              <button type="submit" className="search-results-form__submit">
                Search
              </button>
            </form>
          </div>

          {/* Quick Filter Tabs */}
          {rawQuery.trim() && counts.all > 0 && (
            <div className="search-filters-bar" role="tablist" aria-label="Search categories">
              <button
                type="button"
                className={`search-filter-btn ${activeFilter === 'all' ? 'search-filter-btn--active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                <span>All Results</span>
                <span className="search-filter-count">{counts.all}</span>
              </button>

              {counts.case > 0 && (
                <button
                  type="button"
                  className={`search-filter-btn ${activeFilter === 'case' ? 'search-filter-btn--active' : ''}`}
                  onClick={() => handleFilterClick('case')}
                >
                  <span>Cases</span>
                  <span className="search-filter-count">{counts.case}</span>
                </button>
              )}

              {counts.team > 0 && (
                <button
                  type="button"
                  className={`search-filter-btn ${activeFilter === 'team' ? 'search-filter-btn--active' : ''}`}
                  onClick={() => handleFilterClick('team')}
                >
                  <span>Team & Volunteers</span>
                  <span className="search-filter-count">{counts.team}</span>
                </button>
              )}

              {counts.blog > 0 && (
                <button
                  type="button"
                  className={`search-filter-btn ${activeFilter === 'blog' ? 'search-filter-btn--active' : ''}`}
                  onClick={() => handleFilterClick('blog')}
                >
                  <span>Blog Posts</span>
                  <span className="search-filter-count">{counts.blog}</span>
                </button>
              )}

              {counts.video > 0 && (
                <button
                  type="button"
                  className={`search-filter-btn ${activeFilter === 'video' ? 'search-filter-btn--active' : ''}`}
                  onClick={() => handleFilterClick('video')}
                >
                  <span>Videos</span>
                  <span className="search-filter-count">{counts.video}</span>
                </button>
              )}

              {counts.page > 0 && (
                <button
                  type="button"
                  className={`search-filter-btn ${activeFilter === 'page' ? 'search-filter-btn--active' : ''}`}
                  onClick={() => handleFilterClick('page')}
                >
                  <span>Pages & Info</span>
                  <span className="search-filter-count">{counts.page}</span>
                </button>
              )}
            </div>
          )}

          {/* Result Count Status */}
          {rawQuery.trim() && (
            <div className="search-results-status">
              <div>
                {results.length > 0 ? (
                  <>
                    Showing <strong>{results.length}</strong> {results.length === 1 ? 'match' : 'matches'} for{' '}
                    <strong>"{rawQuery.trim()}"</strong>
                  </>
                ) : (
                  <>
                    No results found for <strong>"{rawQuery.trim()}"</strong>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Results Grid */}
          {paginatedResults.length > 0 ? (
            <>
              <div className="search-results-grid">
                {paginatedResults.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="search-result-card"
                  >
                    <div className="search-result-card__media">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="search-result-card__img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="search-result-card__media-fallback">
                          <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.8" fill="none">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </div>
                      )}
                      {item.badge && (
                        <span className="search-result-card__badge">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="search-result-card__body">
                      <span className="search-result-card__type">
                        {item.typeLabel}
                      </span>
                      <h2 className="search-result-card__title">
                        {renderHighlighted(item.title, 60)}
                      </h2>
                      <p className="search-result-card__desc">
                        {renderHighlighted(item.description, 130)}
                      </p>
                      <span className="search-result-card__action">
                        {getActionLabel(item)}
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="search-pagination" aria-label="Search results pagination">
                  <button
                    type="button"
                    className="search-page-btn"
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    aria-label="Previous page"
                  >
                    ‹
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`search-page-btn ${currentPage === page ? 'search-page-btn--active' : ''}`}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="search-page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    aria-label="Next page"
                  >
                    ›
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="search-empty-state">
              <div className="search-empty-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <h2 className="search-empty-title">
                {rawQuery.trim() ? `Nothing Found for "${rawQuery.trim()}"` : 'Discover 100seSupport'}
              </h2>
              <p className="search-empty-text">
                {rawQuery.trim()
                  ? 'Sorry, but nothing matched your search terms. Please try again with some different keywords or check out popular topics below.'
                  : 'Search for emergency flood relief, monthly cases, team members, bank details, or videos.'}
              </p>

              <div className="search-suggestions-title">Popular Searches</div>
              <div className="search-suggestions-chips">
                {POPULAR_SEARCH_TERMS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="search-suggestion-chip"
                    onClick={() => handleChipClick(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
