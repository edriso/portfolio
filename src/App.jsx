import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Showcase from './pages/Showcase';
import Kudos from './pages/Kudos';
import Contact from './pages/Contact';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen" key={pathname}>
      <Header />
      <main className="mx-auto w-full max-w-[1110px] px-5 py-8 md:px-8 md:py-12 flex-1">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/kudos" element={<Kudos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
