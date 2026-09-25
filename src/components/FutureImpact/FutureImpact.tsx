import React from 'react';
import './FutureImpact.css';

export const FutureImpact: React.FC = () => {
  return (
    <section className="future-section" aria-label="Be a Force for the Future">
      <div className="future-grid">
        {/* Left Column: Relief Volunteer Photograph */}
        <div className="future-image-col">
          <picture className="future-picture">
            <source
              media="(max-width: 767px)"
              srcSet="/assets/force-future-mobile.jpg"
            />
            <img
              src="/assets/force-future.jpg"
              alt="100seSupport team relief operations"
              loading="lazy"
              className="future-img"
            />
          </picture>
        </div>

        {/* Right Column: Navy Textured Content Box */}
        <div className="future-content-col">
          <div className="future-content-inner">
            <div className="future-heading-wrap">
              <h2 className="future-title">
                <span className="future-title-main">Be a Force </span>
                <span className="future-title-accent">for the Future</span>
              </h2>
            </div>

            <ul className="future-bullets">
              <li>We aim to help at least one person or family every month.</li>
              <li>We personally visit and verify the situation of those in need.</li>
              <li>
                Instead of giving money directly, we prefer to fulfill the required needs ourselves
              </li>
            </ul>

            <div className="future-action">
              <a href="#donate" className="future-cta-btn">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
