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

interface CasesPageProps {
  defaultCategory?: CaseCategoryType;
}

export const CasesPage: React.FC<CasesPageProps> = ({ defaultCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<CaseCategoryType>(defaultCategory);

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
              onClick={() => setActiveCategory('all')}
            >
              All ({ALL_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'monthly'}
              className={`cases-filter-btn ${activeCategory === 'monthly' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('monthly')}
            >
              Monthly ({MONTHLY_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'flood'}
              className={`cases-filter-btn ${activeCategory === 'flood' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('flood')}
            >
              Flood ({FLOOD_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'heatwave'}
              className={`cases-filter-btn ${activeCategory === 'heatwave' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('heatwave')}
            >
              Heatwave ({HEATWAVE_CASES.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'healthcare'}
              className={`cases-filter-btn ${activeCategory === 'healthcare' ? 'cases-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('healthcare')}
            >
              Healthcare ({HEALTHCARE_CASES.length})
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="cases-portfolio-grid">
            {filteredCases.map((item) => (
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
        </div>
      </section>
    </div>
  );
};
