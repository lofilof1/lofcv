import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navigateTo } from '../App';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState(
    () => window.location.pathname.replace(/\/$/, '') || '/'
  );
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname.replace(/\/$/, '') || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    e.preventDefault();
    setOpen(false);
    navigateTo(targetPath);
  };

  const cvPath = lang === 'tr' ? '/Emre_Lofca_TR.pdf' : '/Emre_Lofca_EN.pdf';

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menüyü aç veya kapat"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <a
            href="/"
            className={path === '/' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/')}
          >
            {t.nav.career}
          </a>
          <a
            href="/hobiler"
            className={path === '/hobiler' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/hobiler')}
          >
            {t.nav.hobbies}
          </a>
          <a
            href="/spor"
            className={path === '/spor' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/spor')}
          >
            {t.nav.sports}
          </a>
          <a
            href="/iletisim"
            className={path === '/iletisim' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/iletisim')}
          >
            {t.nav.contact}
          </a>
          <div className="nav-actions">
            <button
              className="theme-switch"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Açık moda geç' : 'Koyu moda geç'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="language-switch"
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              aria-label="Change language"
            >
              <span className={lang === 'tr' ? 'active' : ''}>TR</span>
              <i />
              <span className={lang === 'en' ? 'active' : ''}>EN</span>
            </button>
            <a className="button button-small" href={cvPath} download>
              <Download size={16} />
              {t.nav.downloadCV}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

