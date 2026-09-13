import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageBanner } from '../../components/UI/PageBanner';
import { BLOG_POSTS } from '../../data/blogData';
import './SingleBlogPostPage.css';

export const SingleBlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  // default to flood-case-1 if not specified or matched
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const [commentText, setCommentText] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [authorWebsite, setAuthorWebsite] = useState('');
  const [saveCookies, setSaveCookies] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentError, setCommentError] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !authorName.trim() || !authorEmail.trim()) {
      setCommentError('Please fill out all required fields (*)');
      return;
    }
    setCommentError('');
    setCommentSubmitted(true);
    setCommentText('');
  };

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

          {/* WordPress Comment Area: Leave a Reply */}
          <section id="respond" className="comment-respond">
            <h3 id="reply-title" className="comment-reply-title">
              Leave a Reply
            </h3>

            {commentSubmitted ? (
              <div className="comment-success-notice" role="alert">
                <p>
                  <strong>Thank you!</strong> Your comment has been submitted and is awaiting
                  moderation.
                </p>
                <button
                  type="button"
                  onClick={() => setCommentSubmitted(false)}
                  className="comment-submit-another-btn"
                >
                  Post another comment
                </button>
              </div>
            ) : (
              <form className="comment-form" onSubmit={handleCommentSubmit} noValidate>
                <p className="comment-notes">
                  <span id="email-notes">Your email address will not be published.</span>{' '}
                  <span className="required-field-message">
                    Required fields are marked <span className="required">*</span>
                  </span>
                </p>

                {commentError && (
                  <p className="comment-form-error" role="alert">
                    {commentError}
                  </p>
                )}

                <p className="comment-form-comment">
                  <textarea
                    name="comment"
                    id="comment"
                    cols={67}
                    rows={5}
                    placeholder="Comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                </p>

                <p className="comment-form-author">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your name *"
                    required
                  />
                </p>

                <p className="comment-form-email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    placeholder="Your email *"
                    required
                  />
                </p>

                <p className="comment-form-url">
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={authorWebsite}
                    onChange={(e) => setAuthorWebsite(e.target.value)}
                    placeholder="Website"
                  />
                </p>

                <p className="comment-form-cookies-consent">
                  <input
                    type="checkbox"
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    checked={saveCookies}
                    onChange={(e) => setSaveCookies(e.target.checked)}
                  />
                  <label htmlFor="wp-comment-cookies-consent">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </p>

                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="submit"
                    value="Post Comment"
                  />
                </p>
              </form>
            )}
          </section>
        </div>
      </article>
    </div>
  );
};
