import React from 'react';
import { Link } from 'react-router-dom';
import './PageBanner.css';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; url?: string }>;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-banner" aria-label={title}>
      <div className="page-banner__container">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="page-banner__breadcrumbs" aria-label="Breadcrumb">
            <ol className="page-banner__breadcrumb-list">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="page-banner__breadcrumb-item">
                  {crumb.url ? (
                    <Link to={crumb.url} className="page-banner__breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="page-banner__breadcrumb-current" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="page-banner__breadcrumb-sep" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
};
