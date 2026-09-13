import React from 'react';
import { PageBanner } from '../../components/UI/PageBanner';
import { AUTHOR_DATA } from '../../data/authorData';
import './AuthorPage.css';

export const AuthorPage: React.FC = () => {
  return (
    <div className="author-page">
      <PageBanner
        title="Author Page"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Author Page' },
        ]}
      />

      <section className="author-content-section">
        <div className="author-container author-grid">
          {/* Left Column: Bio & Socials */}
          <div className="author-info-col">
            <h2 className="author-name">{AUTHOR_DATA.name}</h2>

            <div className="author-bio">
              {AUTHOR_DATA.bio.map((para, i) => (
                <p key={i} className="author-bio-paragraph">
                  {para}
                </p>
              ))}
            </div>

            <div className="author-social-section">
              <h3 className="author-social-title">Social Media:</h3>
              <div className="author-social-buttons">
                <a
                  href={AUTHOR_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-btn author-social-btn--facebook"
                  aria-label="Share on Facebook"
                >
                  <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>

                <a
                  href={AUTHOR_DATA.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-btn author-social-btn--twitter"
                  aria-label="Share on Twitter"
                >
                  <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>

                <a
                  href={AUTHOR_DATA.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-btn author-social-btn--pinterest"
                  aria-label="Save on Pinterest"
                >
                  <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                  </svg>
                </a>

                <a
                  href={AUTHOR_DATA.socials.email}
                  className="author-social-btn author-social-btn--email"
                  aria-label="Share via Email"
                >
                  <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Photo with Decorative Elements */}
          <div className="author-media-col">
            <div className="author-media-wrapper">
              <img
                src={AUTHOR_DATA.badgeSvg}
                alt=""
                className="author-badge-svg"
                aria-hidden="true"
              />
              <img
                src={AUTHOR_DATA.image}
                alt={AUTHOR_DATA.name}
                className="author-portrait-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
