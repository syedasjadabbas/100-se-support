import React from 'react';
import './Mission.css';

export const Mission: React.FC = () => {
  return (
    <section className="mission-section" aria-label="Our Mission">
      {/* Main Content Container */}
      <div className="mission-container">
        <div className="mission-content">
          <span className="mission-badge">our mission</span>
          <h3 className="mission-heading">
            &ldquo;We focus on providing vital support to those in need, addressing issues like poverty,
            business startup, education, marriage, construction, healthcare, and basic necessities.&rdquo;
          </h3>
          <div className="mission-btn-wrap">
            <a href="/about-us/#team" className="mission-learn-more-btn">
              Meet Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Floating Decorative Illustration */}
      <div className="mission-floating-graphic" aria-hidden="true">
        <img
          src="/assets/about-9.png"
          alt=""
          loading="lazy"
          className="mission-floating-img"
        />
      </div>
    </section>
  );
};
