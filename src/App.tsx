import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Sports from './components/Sports';
import Contact from './components/Contact';
import './index.css';

function CareerPage() { return <><Hero /><About /><Experience /></>; }

function CurrentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/hobiler') return <Hobbies />;
  if (path === '/galeri') {
    window.location.replace('/spor');
    return null;
  }
  if (path === '/spor' || path === '/sportif') return <Sports />;
  if (path === '/iletisim') return <Contact />;
  return <CareerPage />;
}

function Site() {
  const { t } = useLanguage();
  return <><Navbar /><main id="page-top"><CurrentPage /></main>
    <footer><div className="container"><span>© {new Date().getFullYear()} Emre Lofça</span><span>{t.footer}</span><a href="#page-top">↑</a></div></footer></>;
}

export default function App() { return <LanguageProvider><Site /></LanguageProvider>; }
