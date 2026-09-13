import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/UI/BackToTop';
import { ScrollToTop } from './components/UI/ScrollToTop';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { AuthorPage } from './pages/Author/AuthorPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { SingleBlogPostPage } from './pages/Blog/SingleBlogPostPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { DonatePage } from './pages/Donate/DonatePage';
import { CasesPage } from './pages/Cases/CasesPage';
import { SingleCasePage } from './pages/Cases/SingleCasePage';
import { VideosPage } from './pages/Videos/VideosPage';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="app-shell">
        <Header />
        <main id="main-content" className="app-main">
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* 2. About Us */}
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-us/" element={<AboutPage />} />

            {/* 3. Author Page */}
            <Route path="/author-page" element={<AuthorPage />} />
            <Route path="/author-page/" element={<AuthorPage />} />
            <Route path="/author/:slug" element={<AuthorPage />} />
            <Route path="/author/:slug/" element={<AuthorPage />} />

            {/* 4. Blog */}
            <Route path="/blog-page" element={<BlogPage />} />
            <Route path="/blog-page/" element={<BlogPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="/flood-case-1" element={<SingleBlogPostPage />} />
            <Route path="/flood-case-1/" element={<SingleBlogPostPage />} />
            <Route path="/blog/:slug" element={<SingleBlogPostPage />} />
            <Route path="/blog/:slug/" element={<SingleBlogPostPage />} />

            {/* 5. Contact Us */}
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/contacts/" element={<ContactPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact-us/" element={<ContactPage />} />

            {/* 6. Donate Now */}
            <Route path="/donate-now" element={<DonatePage />} />
            <Route path="/donate-now/" element={<DonatePage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/donate/" element={<DonatePage />} />

            {/* 7. Flood Cases */}
            <Route path="/campaigns-page" element={<CasesPage defaultCategory="flood" />} />
            <Route path="/campaigns-page/" element={<CasesPage defaultCategory="flood" />} />
            <Route path="/flood-cases" element={<CasesPage defaultCategory="flood" />} />
            <Route path="/flood-cases/" element={<CasesPage defaultCategory="flood" />} />

            {/* 8. Monthly Cases */}
            <Route path="/monthly-cases" element={<CasesPage defaultCategory="monthly" />} />
            <Route path="/monthly-cases/" element={<CasesPage defaultCategory="monthly" />} />

            {/* 9. Heatwave Cases */}
            <Route path="/heatwave" element={<CasesPage defaultCategory="heatwave" />} />
            <Route path="/heatwave/" element={<CasesPage defaultCategory="heatwave" />} />
            <Route path="/heatwave-cases" element={<CasesPage defaultCategory="heatwave" />} />
            <Route path="/heatwave-cases/" element={<CasesPage defaultCategory="heatwave" />} />

            {/* 10. Healthcare Cases */}
            <Route path="/healthcare-cases" element={<CasesPage defaultCategory="healthcare" />} />
            <Route path="/healthcare-cases/" element={<CasesPage defaultCategory="healthcare" />} />
            <Route path="/healthcare" element={<CasesPage defaultCategory="healthcare" />} />
            <Route path="/healthcare/" element={<CasesPage defaultCategory="healthcare" />} />

            {/* 11. Single Case Page */}
            <Route path="/campaigns/:slug" element={<SingleCasePage />} />
            <Route path="/campaigns/:slug/" element={<SingleCasePage />} />
            <Route path="/case/:slug" element={<SingleCasePage />} />
            <Route path="/case/:slug/" element={<SingleCasePage />} />

            {/* 12. Videos */}
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/" element={<VideosPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default App;