import React from 'react';
import './MonthlySubscription.css';

export const MonthlySubscription: React.FC = () => {
  return (
    <section className="monthly-sub-section" aria-label="Monthly Subscription">
      <div className="monthly-sub-container">
        {/* Left Column: Heading & Info */}
        <div className="monthly-sub-intro">
          <h2 className="monthly-sub-subtitle">Monthly</h2>
          <h2 className="monthly-sub-title">Subscription</h2>
          <div className="monthly-sub-divider" aria-hidden="true">
            <span className="monthly-sub-divider-line" />
          </div>
          <p className="monthly-sub-text">
            By donating a small amount each month, we can make a big difference in the lives of those in need.
          </p>
        </div>

        {/* Right Columns: Staggered 2 Columns */}
        <div className="monthly-sub-columns">
          {/* Column 1: 300 PKR and 1000 PKR (shifted up on desktop) */}
          <div className="monthly-sub-col monthly-sub-col-left">
            <a
              href="http://bit.ly/300SESUPPORT"
              target="_blank"
              rel="noopener noreferrer"
              className="monthly-sub-card"
            >
              <h3 className="monthly-sub-card-title">300 PKR/month</h3>
            </a>
            <a
              href="http://bit.ly/1000SESUPPORT"
              target="_blank"
              rel="noopener noreferrer"
              className="monthly-sub-card"
            >
              <h3 className="monthly-sub-card-title">1000 PKR/month</h3>
            </a>
          </div>

          {/* Column 2: 500 PKR and Desired Amount/month (shifted down on desktop) */}
          <div className="monthly-sub-col monthly-sub-col-right">
            <a
              href="http://bit.ly/500SESUPPORT"
              target="_blank"
              rel="noopener noreferrer"
              className="monthly-sub-card"
            >
              <h3 className="monthly-sub-card-title">500 PKR/month</h3>
            </a>
            <a
              href="https://bit.ly/DonateforaCause"
              target="_blank"
              rel="noopener noreferrer"
              className="monthly-sub-card"
            >
              <h3 className="monthly-sub-card-title">
                Desired Amount/<br />month
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
