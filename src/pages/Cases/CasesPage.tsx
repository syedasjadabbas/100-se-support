import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import {
  ALL_CASES,
  FLOOD_CASES,
  MONTHLY_CASES,
  HEATWAVE_CASES,
  HEALTHCARE_CASES,
} from '../../data/casesData';
import type { CaseItem } from '../../data/casesData';
import './CasesPage.css';

export type CaseCategoryType = 'all' | 'flood' | 'monthly' | 'heatwave' | 'healthcare';

const ITEMS_PER_PAGE = 12;

interface CasesPageProps {
  defaultCategory?: CaseCategoryType;
}

export const CasesPage: React.FC<CasesPageProps> = ({ defaultCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<CaseCategoryType>(defaultCategory);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCategoryChange = (category: CaseCategoryType) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const getFilteredCases = (): CaseItem[] => {
    switch (activeCategory) {
      case 'flood':
        return FLOOD_CASES;
      case 'monthly':
        return MONTHLY_CASES;
      case 'heatwave':
        return HEATWAVE_CASES;
      case 'healthcare':
        return HEALTHCARE_CASES;
      case 'all':
      default:
        return ALL_CASES;
    }
  };

  const getPageTitle = (): string => {
    switch (activeCategory) {
      case 'flood':
        return 'Emergency Flood Cases';
      case 'monthly':
        return 'Monthly Cases';
      case 'heatwave':
        return 'Khairpur Heatwave Cases 2024';
      case 'healthcare':
        return 'Healthcare & Medical Aid Cases';
      case 'all':
      default:
        return 'All Cases & Campaigns';
    }
  };

  const filteredCases = getFilteredCases();
  const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
  const displayedCases = filteredCases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.querySelector('.cases-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="cases-page">
      <PageBanner
        title={getPageTitle()}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: getPageTitle() },
        ]}
      />

      <section className="cases-section">
        <div className="cases-container">
          {/* Category Filter Tabs */}
          <div className="cases-filter-bar" role="tablist" aria-label="Case Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`cases-filter-btn ${activeCategory === 'all' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All ({ALL_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'monthly'}
              className={`cases-filter-btn ${activeCategory === 'monthly' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange('monthly')}
            >
              Monthly ({MONTHLY_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'flood'}
              className={`cases-filter-btn ${activeCategory === 'flood' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange('flood')}
            >
              Flood ({FLOOD_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'heatwave'}
              className={`cases-filter-btn ${activeCategory === 'heatwave' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange('heatwave')}
            >
              Heatwave ({HEATWAVE_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'healthcare'}
              className={`cases-filter-btn ${activeCategory === 'healthcare' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange('healthcare')}
            >
              Healthcare ({HEALTHCARE_CASES.length})
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="cases-portfolio-grid">
            {displayedCases.map((item) => (
              <article key={item.id} className="case-portfolio-item">
                <Link to={`/campaigns/${item.slug}/`} className="case-portfolio-link">
                  <div className="case-portfolio-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="case-portfolio-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="case-portfolio-overlay">
                    <span className="case-portfolio-category-tag">{item.category}</span>
                    <h3 className="case-portfolio-title">{item.title}</h3>
                    <span className="case-portfolio-view-text">
                      View Case
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Elementor-Style Client-Side Pagination */}
          {totalPages > 1 && (
            <nav className="cases-pagination" aria-label="Cases Pagination">
              {currentPage > 1 && (
                <button
                  type="button"
                  className="cases-page-btn cases-page-btn--prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous page"
                >
                  &laquo;
                </button>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={`cases-page-btn ${
                    currentPage === pageNum ? 'cases-page-btn--active' : ''
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              ))}

              {currentPage < totalPages && (
                <button
                  type="button"
                  className="cases-page-btn cases-page-btn--next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next page"
                >
                  &raquo;
                </button>
              )}
            </nav>
          )}
        </div>
      </section>
    </div>
  );
};
