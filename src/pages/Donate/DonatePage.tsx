import React, { useState } from 'react';
import { PageBanner } from '../../components/UI/PageBanner';
import './DonatePage.css';

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'test' | 'offline' | 'paypal'>('test');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const effectiveTotal = isCustom
    ? parseFloat(customAmount) || 0
    : selectedAmount;

  const handleAmountClick = (amount: number) => {
    setIsCustom(false);
    setSelectedAmount(amount);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { firstName?: string; email?: string } = {};
    if (!formData.firstName.trim()) {
      errs.firstName = 'First Name is required.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'A valid Email Address is required.';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

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
          {/* Form Column */}
          <div className="donate-form-column">
            <div className="donate-card">
              <span className="donate-badge">Make a Difference</span>
              <h2 className="donate-title">Make a Donation</h2>
              <p className="donate-subtitle">
                Donate now! Support our mission to connect people to quality giving and volunteer
                opportunities worldwide!
              </p>

              {/* Staging Notice Banner */}
              <div className="donate-notice-banner" role="alert">
                <span className="donate-notice-icon" aria-hidden="true">ℹ</span>
                <p>
                  <strong>Notice:</strong> Test mode is enabled. While in test mode no live
                  donations are processed.
                </p>
              </div>

              {isSubmitted ? (
                <div className="donate-success-box">
                  <div className="donate-success-icon">✓</div>
                  <h3>Thank You for Your Generosity!</h3>
                  <p>
                    Your simulated donation of <strong>${effectiveTotal.toFixed(2)}</strong> has been
                    registered in test mode.
                  </p>
                  <p className="donate-success-sub">
                    For local contributions in Pakistan, please use our direct bank transfer or
                    EasyPaisa/JazzCash accounts below.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ firstName: '', lastName: '', email: '' });
                    }}
                    className="donate-btn donate-btn-reset"
                  >
                    Make Another Donation
                  </button>
                </div>
              ) : (
                <form className="donate-form" onSubmit={handleSubmit} noValidate>
                  {/* Amount Selector */}
                  <div className="donate-fieldset">
                    <label className="donate-fieldset-label">
                      <span className="donate-currency-symbol">$</span> Donation Amount:
                    </label>

                    <div className="donate-amount-presets">
                      {PRESET_AMOUNTS.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          className={`donate-amount-btn ${
                            !isCustom && selectedAmount === amt ? 'donate-amount-btn--active' : ''
                          }`}
                          onClick={() => handleAmountClick(amt)}
                        >
                          ${amt.toFixed(2)}
                        </button>
                      ))}

                      <button
                        type="button"
                        className={`donate-amount-btn ${
                          isCustom ? 'donate-amount-btn--active' : ''
                        }`}
                        onClick={handleCustomClick}
                      >
                        Custom Amount
                      </button>
                    </div>

                    {isCustom && (
                      <div className="donate-custom-input-wrap">
                        <span className="donate-custom-prefix">$</span>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          className="donate-custom-input"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          autoFocus
                        />
                      </div>
                    )}
                  </div>

                  {/* Payment Method Selector */}
                  <div className="donate-fieldset">
                    <label className="donate-fieldset-label">Select Payment Method</label>
                    <div className="donate-payment-methods">
                      <label
                        className={`donate-payment-label ${
                          paymentMethod === 'test' ? 'donate-payment-label--active' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="test"
                          checked={paymentMethod === 'test'}
                          onChange={() => setPaymentMethod('test')}
                          className="donate-radio"
                        />
                        <span>Test Donation</span>
                      </label>

                      <label
                        className={`donate-payment-label ${
                          paymentMethod === 'offline' ? 'donate-payment-label--active' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="offline"
                          checked={paymentMethod === 'offline'}
                          onChange={() => setPaymentMethod('offline')}
                          className="donate-radio"
                        />
                        <span>Offline Donation</span>
                      </label>

                      <label
                        className={`donate-payment-label ${
                          paymentMethod === 'paypal' ? 'donate-payment-label--active' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="donate-radio"
                        />
                        <span>PayPal</span>
                      </label>
                    </div>

                    {paymentMethod === 'offline' && (
                      <div className="donate-offline-info">
                        <p className="donate-offline-heading">
                          <strong>Direct Bank & Mobile Account Details (Pakistan):</strong>
                        </p>
                        <ul>
                          <li><strong>Bank:</strong> Bank Alfalah Ltd.</li>
                          <li><strong>Account Title:</strong> 100seSupport Welfare Trust</li>
                          <li><strong>Account Number:</strong> 0123-1004567890</li>
                          <li><strong>EasyPaisa / JazzCash:</strong> 0300-1234567</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Personal Info */}
                  <div className="donate-fieldset">
                    <label className="donate-fieldset-label">Personal Info</label>
                    <div className="donate-personal-grid">
                      <div className="donate-field-group">
                        <label htmlFor="first-name" className="donate-input-label">
                          First Name <span className="donate-required">*</span>
                        </label>
                        <input
                          id="first-name"
                          type="text"
                          className={`donate-input ${errors.firstName ? 'donate-input--error' : ''}`}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="First Name"
                        />
                        {errors.firstName && (
                          <span className="donate-error-text">{errors.firstName}</span>
                        )}
                      </div>

                      <div className="donate-field-group">
                        <label htmlFor="last-name" className="donate-input-label">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          className="donate-input"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="donate-field-group" style={{ marginTop: '16px' }}>
                      <label htmlFor="email-address" className="donate-input-label">
                        Email Address <span className="donate-required">*</span>
                      </label>
                      <input
                        id="email-address"
                        type="email"
                        className={`donate-input ${errors.email ? 'donate-input--error' : ''}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                      />
                      {errors.email && <span className="donate-error-text">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Total & Submit */}
                  <div className="donate-total-section">
                    <div className="donate-total-display">
                      <span className="donate-total-label">Donation Total:</span>
                      <span className="donate-total-amount">${effectiveTotal.toFixed(2)}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || effectiveTotal <= 0}
                      className="donate-submit-btn"
                    >
                      {isSubmitting ? 'Processing...' : 'Donate Now'}
                    </button>
                  </div>
                </form>
              )}

              {/* Share This Opportunity */}
              <div className="donate-share-box">
                <h3 className="donate-share-title">Share this opportunity:</h3>
                <div className="donate-share-links">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fdonate-now%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donate-share-btn donate-share-btn--fb"
                    aria-label="Share on Facebook"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fdonate-now%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donate-share-btn donate-share-btn--tw"
                    aria-label="Share on Twitter"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fdonate-now%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donate-share-btn donate-share-btn--li"
                    aria-label="Share on LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?text=Donate%20to%20100seSupport%20https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fdonate-now%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="donate-share-btn donate-share-btn--wa"
                    aria-label="Share on WhatsApp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="donate-media-column">
            <div className="donate-media-card">
              <img
                src="/assets/open-campaing-3.png"
                alt="Support 100seSupport Campaign"
                className="donate-illustration-img"
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
    </div>
  );
};
