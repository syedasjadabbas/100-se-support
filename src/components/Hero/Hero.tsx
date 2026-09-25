import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero" aria-label="Hero Section">
      {/* Background Topographic / Contour Lines Graphic */}
      <div className="hero__bg-graphic" aria-hidden="true">
        <img
          src="/hero/home-main-background.png"
          alt=""
          className="hero__bg-graphic-img"
        />
      </div>

      <div className="hero__container">
        <div className="hero__row">
          {/* Left Column: Heading, Paragraph, Buttons */}
          <div className="hero__content-col">
            <h1 className="hero__heading">
              <span className="hero__heading-main">Changing Lives</span>
              <span className="hero__heading-sub">
                <span className="hero__heading-with">With</span>{' '}
                <span className="hero__heading-accent">PKR. 100</span>
              </span>
            </h1>

            <p className="hero__description">
              We truly believe that contributing just PKR. 100 can bring positive
              change to society. Transparency, accountability, and empathy are at
              the heart of 100seSupport. We ensure that every donation, big or
              small, is used wisely and reaches those who need it the most.
            </p>

            <div className="hero__actions">
              <a href="#donate" className="hero__btn hero__btn--donate">
                Donate Now
              </a>
              <a href="/about-us/" className="hero__btn hero__btn--learn">
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right Column: Photo Collage (4 Images) */}
          <div className="hero__collage-col" aria-label="Relief and Support Activities">
            <div className="hero__collage-grid">
              <div className="hero__photo">
                <img
                  src="/hero/hero-main-tree.jpg"
                  alt="100seSupport volunteer tree plantation initiative"
                  className="hero__photo-img"
                  loading="eager"
                />
              </div>

              <div className="hero__photo">
                <img
                  src="/hero/hero-volunteer-food.jpg"
                  alt="Volunteers organizing food and relief supplies"
                  className="hero__photo-img"
                  loading="lazy"
                />
              </div>

              <div className="hero__photo">
                <img
                  src="/hero/hero-family-ration.jpg"
                  alt="Providing ration assistance to families"
                  className="hero__photo-img"
                  loading="lazy"
                />
              </div>

              <div className="hero__photo">
                <img
                  src="/hero/hero-child-support.jpg"
                  alt="Community child welfare support"
                  className="hero__photo-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
