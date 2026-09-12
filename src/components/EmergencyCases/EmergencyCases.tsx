import React from 'react';
import './EmergencyCases.css';

export const EmergencyCases: React.FC = () => {
  return (
    <section className="emergency-cases-section" aria-label="Featured Campaign - Flood Emergency Cases">
      <div className="emergency-cases-container">
        {/* Lavender Inner Box (9c53d11) */}
        <div className="emergency-cases-box">
          {/* Badge */}
          <div className="emergency-badge-wrap">
            <span className="emergency-badge">featured campaign</span>
          </div>

          {/* Goal Card */}
          <div className="emergency-card">
            <div className="emergency-card-body">
              <div className="emergency-card-image-wrap">
                <img
                  src="/assets/flood-campaign.jpg"
                  alt="100seSupport food and medicine distribution at Khairpur relief camp"
                  loading="lazy"
                  className="emergency-card-img"
                />
              </div>

              <div className="emergency-card-text">
                <h3 className="emergency-card-title">Flood Emergency Cases:</h3>
                <p className="emergency-card-desc">
                  100seSupport team contributed in providing food and medicines to needy families
                  during the rain emergency, served many families with food at Khairpur relief camp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
