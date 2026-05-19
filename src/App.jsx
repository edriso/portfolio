import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Projects from './pages/Projects';
import Kudos from './pages/Kudos';
import Contact from './pages/Contact';

const PAGE_TITLES = {
  '/': 'Mohamed Idris | Software Engineer',
  '/projects': 'Projects | Mohamed Idris',
  '/kudos': 'Kudos & Testimonials | Mohamed Idris',
  '/contact': 'Contact | Mohamed Idris',
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || PAGE_TITLES['/'];
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        key={pathname}
        className="mx-auto w-full max-w-[1110px] px-5 py-8 md:px-8 md:py-12 flex-1 animate-fade-in"
      >
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/kudos" element={<Kudos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
