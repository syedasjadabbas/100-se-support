import React from 'react';
import './ActionCTA.css';

interface ActionLink {
  label: string;
  url: string;
}

const ACTION_LINKS: ActionLink[] = [
  { label: 'Monthly Cases', url: '/monthly-cases/' },
  { label: 'Flood Emergency Cases', url: '/campaigns-page/' },
  { label: 'Khairpur Heatwave Cases 2024', url: '/heatwave/' },
];

export const ActionCTA: React.FC = () => {
  return (
    <section className="action-cta-section" aria-label="It's Time to Take Action">
      <div className="action-cta-container">
        {/* Title */}
        <div className="action-cta-heading-wrap">
          <h2 className="action-cta-title">
            <span className="action-cta-lead">It’s Time to</span>
            <span className="action-cta-accent">Take</span>
            <span className="action-cta-accent">Action</span>
          </h2>
        </div>

        {/* 3 Pill Action Buttons */}
        <div className="action-cta-buttons">
          {ACTION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="action-cta-btn"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
