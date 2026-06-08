import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { PathwaysPage } from './pages/PathwaysPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { TutorPage } from './pages/TutorPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { TeamPage } from './pages/TeamPage';
import { PressPage } from './pages/PressPage';
import { GalleryPage } from './pages/GalleryPage';
import { ImpactPage } from './pages/ImpactPage';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Consent } from './pages/Consent';
import { ChildPolicy } from './pages/ChildPolicy';
import { Conduct } from './pages/Conduct';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { Questions } from './pages/Questions';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <BackgroundOrbs />
        <Navigation />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pathways" element={<PathwaysPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/tutor" element={<TutorPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/consent" element={<Consent />} />
            <Route path="/child-policy" element={<ChildPolicy />} />
            <Route path="/conduct" element={<Conduct />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<Questions />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
