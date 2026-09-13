import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import { BLOG_POSTS } from '../../data/blogData';
import './SingleBlogPostPage.css';

export const SingleBlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  // default to flood-case-1 if not specified or matched
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="single-blog-page">
      <PageBanner
        title={post.title}
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Blog', url: '/blog-page/' },
          { label: post.title },
        ]}
      />

      <article className="single-blog-article">
        <div className="single-blog-container">
          <div className="single-blog-card">
            {/* Meta */}
            <div className="single-blog-meta-top">
              <span className="single-blog-badge">{post.category}</span>
              <span className="single-blog-author">By {post.author}</span>
              <span className="single-blog-dot">•</span>
              <span className="single-blog-date">{post.date}</span>
            </div>

            {/* Featured Image */}
            <div className="single-blog-media">
              <img
                src={post.image}
                alt={post.title}
                className="single-blog-featured-img"
              />
            </div>

            {/* Content Body */}
            <div
              className="single-blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Navigation */}
            <div className="single-blog-footer">
              <Link to="/blog-page/" className="single-blog-back-link">
                <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all Articles
              </Link>
              <Link to="/donate-now/" className="single-blog-donate-btn">
                Support This Cause
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
