import React from 'react';
import { PageBanner } from '../../components/UI/PageBanner';
import { VIDEOS_DATA } from '../../data/videosData';
import './VideosPage.css';

export const VideosPage: React.FC = () => {
  const anniversary2nd = VIDEOS_DATA.find((v) => v.section === '2nd-anniversary');
  const anniversary3rd = VIDEOS_DATA.find((v) => v.section === '3rd-anniversary');
  const caseVideos = VIDEOS_DATA.filter((v) => v.section === 'case-videos');

  return (
    <div className="videos-page">
      <PageBanner
        title="Videos"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Videos' },
        ]}
      />

      {/* 2nd Anniversary Section */}
      {anniversary2nd && (
        <section className="videos-featured-section">
          <div className="videos-container">
            <div className="videos-section-header">
              <span className="videos-badge">Milestone</span>
              <h2 className="videos-section-title">{anniversary2nd.title}</h2>
              {anniversary2nd.description && (
                <p className="videos-section-desc">{anniversary2nd.description}</p>
              )}
            </div>

            <div className="videos-player-wrapper">
              <video
                className="videos-player"
                controls
                playsInline
                preload="metadata"
                poster={anniversary2nd.poster}
              >
                <source src={anniversary2nd.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* 3rd Anniversary Section */}
      {anniversary3rd && (
        <section className="videos-featured-section videos-featured-section--alt">
          <div className="videos-container">
            <div className="videos-section-header">
              <span className="videos-badge">Milestone</span>
              <h2 className="videos-section-title">{anniversary3rd.title}</h2>
              {anniversary3rd.description && (
                <p className="videos-section-desc">{anniversary3rd.description}</p>
              )}
            </div>

            <div className="videos-player-wrapper">
              <video
                className="videos-player"
                controls
                playsInline
                preload="metadata"
                poster={anniversary3rd.poster}
              >
                <source src={anniversary3rd.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Case Videos Section */}
      <section className="videos-cases-section">
        <div className="videos-container">
          <div className="videos-section-header">
            <span className="videos-badge">Field Reports</span>
            <h2 className="videos-section-title">Case Videos</h2>
            <p className="videos-section-desc">
              Watch real field recordings of our direct verifications, monthly grocery deliveries,
              and community support operations.
            </p>
          </div>

          <div className="videos-grid">
            {caseVideos.map((vid) => (
              <div key={vid.id} className="video-card">
                <div className="video-card-player-wrap">
                  <video
                    className="video-card-player"
                    controls
                    playsInline
                    preload="none"
                    poster={vid.poster}
                  >
                    <source src={vid.src} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
                <div className="video-card-content">
                  <h3 className="video-card-title">{vid.title}</h3>
                  {vid.description && (
                    <p className="video-card-desc">{vid.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
