import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import { TEAM_MEMBERS } from '../../data/teamData';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {
              // Browsers permit autoplay when muted
            });
          } else {
            videoEl.pause();
          }
        });
      },
      {
        threshold: 0.35, // Starts playing when 35% visible, pauses when scrolled away
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="about-page">
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Hero / Intro Overview Section */}
      <section className="about-intro-section">
        <div className="about-container about-intro-grid">
          <div className="about-intro-content">
            <span className="about-badge">About 100seSupport</span>
            <h2 className="about-heading">Changing Lives With PKR 100</h2>
            <p className="about-description">
              We focus on providing vital support to those in need, addressing issues like
              poverty, business startup, education, marriage, construction, healthcare, and basic necessities.
            </p>
            <p className="about-description-secondary">
              We truly believe that contributing just PKR. 100 can bring positive change to
              society. Transparency, accountability, and empathy are at the heart of
              100seSupport. We ensure that every donation, big or small, is used wisely and
              reaches those who need it the most.
            </p>
            <div className="about-intro-actions">
              <Link to="/monthly-cases/" className="about-btn about-btn-primary">
                Monthly Cases
              </Link>
              <Link to="/donate-now/" className="about-btn about-btn-secondary">
                Donate Now
              </Link>
            </div>
          </div>

          <div className="about-intro-media">
            <div className="about-image-wrapper">
              <img
                src="/assets/341759218_212601078073447_524777491893904537_n.jpg"
                alt="100seSupport Field Distribution"
                className="about-main-img"
              />
              <img
                src="/assets/about-8.png"
                alt=""
                className="about-decor-element"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Practices Section */}
      <section id="core" className="about-core-section">
        <div className="about-container about-core-grid">
          <div className="about-core-media">
            <div className="about-image-wrapper">
              <img
                src="/assets/294883611_426663139407634_7377770372108596763_n-e1717236773990-578x1024.jpg"
                alt="Core Practices in Action"
                className="about-core-img"
              />
              <img
                src="/assets/about-9.png"
                alt=""
                className="about-decor-element-2"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="about-core-content">
            <span className="about-badge">About Us</span>
            <h2 className="about-heading">Our Core Practices</h2>
            <p className="about-core-lead">
              Our principles define how every rupee is accounted for and how every family is
              treated with complete dignity and respect.
            </p>

            <ul className="about-practices-list">
              <li className="about-practice-item">
                <span className="about-practice-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="about-practice-text">
                  <h3>Monthly Commitment</h3>
                  <p>We aim to help at least one person or family every month.</p>
                </div>
              </li>

              <li className="about-practice-item">
                <span className="about-practice-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="about-practice-text">
                  <h3>Direct On-Site Verification</h3>
                  <p>We personally visit and verify the situation of those in need.</p>
                </div>
              </li>

              <li className="about-practice-item">
                <span className="about-practice-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="about-practice-text">
                  <h3>In-Kind Need Fulfillment</h3>
                  <p>Instead of giving money directly, we prefer to fulfill the required needs ourselves.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who" className="about-who-section">
        <div className="about-container">
          <div className="about-who-header">
            <h2 className="about-heading about-who-title">Who We Are</h2>
          </div>
          <div className="about-video-wrapper">
            <video
              ref={videoRef}
              className="about-video-player"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/assets/who-we-are.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="about-team-section">
        <div className="about-container">
          <div className="about-team-header">
            <span className="about-badge">Meet Our Team</span>
            <h2 className="about-heading">The People Behind 100seSupport</h2>
            <p className="about-team-subtitle">
              Passionate volunteers, field researchers, and community leaders dedicating their time
              to bring hope across Pakistan.
            </p>
          </div>

          <div className="about-team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-member-image-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-img"
                    loading="lazy"
                  />
                </div>
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  {member.role && <p className="team-member-role">{member.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="donate" className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-card">
            <span className="about-cta-tag">support our work</span>
            <h2 className="about-cta-title">Help us fulfill the need of someone in need</h2>
            <p className="about-cta-subtitle">
              Your PKR. 100 may seem small, but combined with thousands of others, it changes lives forever.
            </p>
            <Link to="/donate-now/" className="about-btn about-btn-cta">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
