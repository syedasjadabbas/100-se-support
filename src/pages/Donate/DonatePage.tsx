import React from 'react';
import { PageBanner } from '../../components/UI/PageBanner';
import { DonationAccounts } from '../../components/DonationAccounts/DonationAccounts';
import './DonatePage.css';

export const DonatePage: React.FC = () => {
  return (
    <div className="donate-page">
      <PageBanner
        title="Donate Now"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Donate Now' },
        ]}
      />

      <section className="donate-main-section">
        <div className="donate-container donate-grid">
          {/* Main Accounts Column */}
          <div className="donate-form-column">
            <div className="donate-card">
              <span className="donate-badge">Make a Difference</span>
              <h2 className="donate-title">Make a Donation</h2>
              <p className="donate-subtitle">
                Donate now! Support our mission to connect people to quality giving and volunteer
                opportunities worldwide.
              </p>

              {/* Direct Bank & Mobile Account Details */}
              <div className="donate-offline-info">
                <p className="donate-offline-heading">
                  <strong>Direct Bank & Mobile Account Details (Pakistan):</strong>
                </p>
                <div className="donate-accounts-cards-grid">
                  <div className="donate-account-detail-card">
                    <div className="donate-account-detail-header">
                      <span className="donate-account-badge">Bank Account</span>
                      <strong>Meezan Bank</strong>
                    </div>
                    <div className="donate-account-detail-row">
                      <span>Account #:</span>
                      <strong className="donate-account-highlight">9201 0104980230</strong>
                    </div>
                    <div className="donate-account-detail-row">
                      <span>Title:</span>
                      <span>Usama Waseem (Meezan Bank)</span>
                    </div>
                  </div>

                  <div className="donate-account-detail-card">
                    <div className="donate-account-detail-header">
                      <span className="donate-account-badge donate-account-badge--ep">Easypaisa</span>
                      <strong className="donate-account-highlight">03133474377</strong>
                    </div>
                    <div className="donate-account-detail-row">
                      <span>Title:</span>
                      <span>Haseeb Ur Rehman</span>
                    </div>
                  </div>

                  <div className="donate-account-detail-card">
                    <div className="donate-account-detail-header">
                      <span className="donate-account-badge donate-account-badge--jc">Jazzcash</span>
                      <strong className="donate-account-highlight">03030305309</strong>
                    </div>
                    <div className="donate-account-detail-row">
                      <span>Title:</span>
                      <span>Amanullah</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="donate-media-column">
            <div className="donate-media-card">
              <img
                src="/logo.jpg"
                alt="100seSupport Logo"
                className="donate-logo-img"
              />
              <div className="donate-card-callout">
                <h3>Every PKR. 100 Counts</h3>
                <p>
                  100% of public donations are delivered directly to verified recipients on the
                  ground with photographic and video transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Donation Accounts Component matching Homepage */}
      <DonationAccounts />
    </div>
  );
};
