import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Sports from './components/Sports';
import Contact from './components/Contact';
import './index.css';

export function navigateTo(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  }
}

function CareerPage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
    </>
  );
}

function CurrentPage() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname.replace(/\/$/, '') || '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      if (path === '/galeri') {
        window.history.replaceState({}, '', '/spor');
        setCurrentPath('/spor');
      } else {
        setCurrentPath(path);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/hobiler') return <Hobbies />;
  if (currentPath === '/spor' || currentPath === '/sportif') return <Sports />;
  if (currentPath === '/iletisim') return <Contact />;
  return <CareerPage />;
}

function Site() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <main id="page-top">
        <CurrentPage />
      </main>
      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} Emre Lofça</span>
          <span>{t.footer}</span>
          <a
            href="#page-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

