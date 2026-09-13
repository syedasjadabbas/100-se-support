import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import { BLOG_POSTS } from '../../data/blogData';
import './BlogPage.css';

export const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <PageBanner
        title="Blog Page"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Blog Page' },
        ]}
      />

      <section className="blog-posts-section">
        <div className="blog-container">
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/${post.slug}/`} className="blog-card-media-link">
                  <div className="blog-card-image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                </Link>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-author">{post.author}</span>
                    <span className="blog-card-meta-dot">•</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={`/${post.slug}/`} className="blog-card-title-link">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <Link to={`/${post.slug}/`} className="blog-read-more-btn">
                      Read More
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
