import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import { ALL_CASES } from '../../data/casesData';
import type { CaseItem } from '../../data/casesData';
import './SingleCasePage.css';

export const SingleCasePage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const caseItem: CaseItem | undefined = ALL_CASES.find((c) => c.slug === slug);

  // Fallback to first case if not matched
  const currentCase = caseItem || ALL_CASES[0];

  const getCategoryArchiveLink = (category: string) => {
    switch (category) {
      case 'flood':
        return { label: 'Flood Cases', url: '/campaigns-page/' };
      case 'heatwave':
        return { label: 'Heatwave Cases', url: '/heatwave/' };
      case 'monthly':
      default:
        return { label: 'Monthly Cases', url: '/monthly-cases/' };
    }
  };

  const archive = getCategoryArchiveLink(currentCase.category);

  return (
    <div className="single-case-page">
      <PageBanner
        title={currentCase.title}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: archive.label, url: archive.url },
          { label: currentCase.title },
        ]}
      />

      <section className="single-case-content-section">
        <div className="single-case-container single-case-grid">
          {/* Main Case Info */}
          <div className="single-case-main-col">
            <div className="single-case-card">
              <div className="single-case-meta">
                <span className="single-case-tag">{currentCase.category} Case</span>
                {currentCase.isHealthcare && (
                  <span className="single-case-tag single-case-tag--health">
                    Medical & Healthcare
                  </span>
                )}
                <span className="single-case-verified">✓ 100% Verified Field Case</span>
              </div>

              <div className="single-case-media">
                <img
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="single-case-img"
                />
              </div>

              <h2 className="single-case-heading">Case Overview & Details</h2>
              <div className="single-case-description">
                {currentCase.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
                ))}
              </div>

              <div className="single-case-footer-nav">
                <Link to={archive.url} className="single-case-back-btn">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to {archive.label}
                </Link>
                <Link to="/donate-now/" className="single-case-donate-btn">
                  Support Similar Cases
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Contribution Card */}
          <aside className="single-case-sidebar-col">
            <div className="single-case-support-card">
              <span className="single-case-card-badge">Direct Donation</span>
              <h3 className="single-case-card-title">How to Support</h3>
              <p className="single-case-card-desc">
                Contribute PKR. 100 or any amount to support verified cases like this one.
              </p>

              <div className="single-case-bank-details">
                {/* Meezan Bank */}
                <div className="single-case-account-block">
                  <span className="single-case-account-type">Bank Account (Meezan Bank):</span>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Account #:</span>
                    <span className="single-case-bank-val">9201 0104980230</span>
                  </div>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Title:</span>
                    <span className="single-case-bank-val">Usama Waseem (Meezan Bank)</span>
                  </div>
                </div>

                <div className="single-case-account-divider" />

                {/* Easypaisa */}
                <div className="single-case-account-block">
                  <span className="single-case-account-type">Easypaisa:</span>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Account #:</span>
                    <span className="single-case-bank-val">03133474377</span>
                  </div>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Title:</span>
                    <span className="single-case-bank-val">Haseeb Ur Rehman</span>
                  </div>
                </div>

                <div className="single-case-account-divider" />

                {/* Jazzcash */}
                <div className="single-case-account-block">
                  <span className="single-case-account-type">Jazzcash:</span>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Account #:</span>
                    <span className="single-case-bank-val">03030305309</span>
                  </div>
                  <div className="single-case-bank-row">
                    <span className="single-case-bank-label">Title:</span>
                    <span className="single-case-bank-val">Amanullah</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
