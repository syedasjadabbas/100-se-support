import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'This field is required. Please enter your name.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div className="contact-page">
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* Intro / Mission Section */}
      <section className="contact-intro-section">
        <div className="contact-container contact-intro-grid">
          <div className="contact-intro-content">
            <span className="contact-badge">Get in Touch</span>
            <h2 className="contact-heading">We Would Love to Hear From You</h2>
            <p className="contact-lead">
              Established in 2021, 100seSupport is a charity organization that believes even a
              small donation of PKR. 100 can make a big difference in someone's life. Our mission
              is to help households and families overcome challenges and improve their lives,
              without expecting anything in return.
            </p>
            <Link to="/about-us/" className="contact-btn contact-btn-primary">
              Know More About Us
            </Link>
          </div>

          <div className="contact-intro-media">
            <img
              src="/assets/IMG_20220711_103203-1-scaled.jpg"
              alt="100seSupport Community Outreach"
              className="contact-intro-img"
            />
          </div>
        </div>
      </section>

      {/* Social Media Channels Section */}
      <section className="contact-social-section">
        <div className="contact-container">
          <h2 className="contact-section-title">Follow Us on Social Media</h2>
          <div className="contact-social-cards">
            <a
              href="https://www.facebook.com/100sesupport/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card contact-social-card--facebook"
            >
              <div className="contact-social-icon">
                <svg viewBox="0 0 320 512" width="24" height="24" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </div>
              <span className="contact-social-name">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/100sesupport/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card contact-social-card--instagram"
            >
              <div className="contact-social-icon">
                <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1z" />
                </svg>
              </div>
              <span className="contact-social-name">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/company/100-se-support"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card contact-social-card--linkedin"
            >
              <div className="contact-social-icon">
                <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </div>
              <span className="contact-social-name">LinkedIn</span>
            </a>

            <a
              href="https://www.youtube.com/@100sesupport"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card contact-social-card--youtube"
            >
              <div className="contact-social-icon">
                <svg viewBox="0 0 576 512" width="24" height="24" fill="currentColor">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </div>
              <span className="contact-social-name">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Form Section: Have a Question? */}
      <section className="contact-form-section">
        <div className="contact-container contact-form-grid">
          <div className="contact-form-media">
            <img
              src="/assets/315834509_472331661665103_6828342614131799185_n.jpg"
              alt="100seSupport Helping In Need"
              className="contact-form-img"
            />
          </div>

          <div className="contact-form-content">
            <h2 className="contact-form-title">Have a Question?</h2>
            <p className="contact-form-subtitle">
              Do you have questions, comments? Do not hesitate to contact us and we will answer you quickly.
            </p>

            {isSubmitted ? (
              <div className="contact-success-box" role="alert">
                <div className="contact-success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been successfully received. We will respond promptly.</p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="contact-btn contact-btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-name" className="contact-label">
                      Name <span className="contact-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`contact-input ${errors.name ? 'contact-input--error' : ''}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                    />
                    {errors.name && <span className="contact-field-error">{errors.name}</span>}
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-email" className="contact-label">
                      E-Mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`contact-input ${errors.email ? 'contact-input--error' : ''}`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                    />
                    {errors.email && <span className="contact-field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-message" className="contact-label">
                    Your Message <span className="contact-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className={`contact-textarea ${errors.message ? 'contact-input--error' : ''}`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you?"
                  />
                  {errors.message && <span className="contact-field-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-btn contact-btn-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
