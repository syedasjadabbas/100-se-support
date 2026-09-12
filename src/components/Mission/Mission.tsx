import React from 'react';
import './Mission.css';

export const Mission: React.FC = () => {
  return (
    <section className="mission-section" aria-label="Our Mission">
      {/* Curved Text Banner */}
      <div className="mission-curved-text-container" aria-hidden="true">
        <svg
          viewBox="0 0 1920 194"
          className="mission-curve-svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="mission-text-path"
              d="M0.0848,39.7811C77.0694,26.526,226.2372-5.0553,389.6254,1.3466 c176.0777,6.899,316.9352,45.0923,458.1081,80.948c280.5467,71.2546,451.5484,89.0483,667.5355,104.7344 c180.9156,13.139,280.0178,4.5814,404.8159-20.6472"
              fill="none"
            />
          </defs>
          <text className="mission-curved-text">
            <textPath href="#mission-text-path" startOffset="0%">
              giving is the best form of action - be the change - giving is the best form of of action
            </textPath>
          </text>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="mission-container">
        <div className="mission-content">
          <span className="mission-badge">our mission</span>
          <h3 className="mission-heading">
            We focus on providing vital support to those in need, addressing issues like poverty,
            food entrepreneurship, education, healthcare, and basic necessities.
          </h3>
          <div className="mission-btn-wrap">
            <a href="/about-us/" className="mission-learn-more-btn">
              Learn More About Us
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
