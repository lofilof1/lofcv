import { ArrowDownRight, ArrowRight, Mail, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navigateTo } from '../App';

export default function Hero() {
  const { t } = useLanguage();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('/iletisim');
  };

  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('experience');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="hero-section">
      <div className="hero-ambient-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
      </div>

      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <div className="hero-status-pill">
            <span className="live-beacon">
              <span className="live-ping" />
              <span className="live-dot" />
            </span>
            <span className="hero-status-text">{t.hero.status}</span>
          </div>

          <h1 className="hero-title">
            {t.hero.title}
          </h1>

          <p className="hero-lead">{t.hero.subtitle}</p>

          <div className="hero-tech-ticker" aria-label="Primary Technologies">
            {t.hero.techPills && t.hero.techPills.map((pill) => (
              <span className="tech-badge" key={pill}>
                <span className="tech-badge-dot" />
                {pill}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#experience" onClick={handleExperienceClick}>
              <span>{t.hero.primaryCta}</span>
              <ArrowDownRight size={18} />
            </a>
            <a className="button button-glass" href="/iletisim" onClick={handleContactClick}>
              <span>{t.hero.secondaryCta}</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <aside className="hero-card reveal delay-1" aria-label="Profile Card">
          <div className="hero-card-header">
            <div className="hero-card-chip">
              <Terminal size={14} />
              <span>AI & GPU Infrastructure</span>
            </div>
            <div className="availability">
              <span className="live-dot-pulse" />
              <span>{t.hero.available}</span>
            </div>
          </div>

          <div className="hero-card-media">
            <img
              className="profile-photo"
              src="/profile/emre-lofca.jpg"
              alt="Emre Lofça"
              width="140"
              height="140"
            />
            <div className="profile-overlay-badge">
              <Sparkles size={14} />
              <span>Senior Specialist</span>
            </div>
          </div>

          <div className="hero-card-copy">
            <div>
              <p className="profile-name">Emre Lofça</p>
              <p className="profile-role">{t.hero.role}</p>
            </div>
            <p className="profile-focus">{t.hero.focus}</p>
          </div>

          <a
            href="/iletisim"
            className="round-link"
            aria-label={t.hero.secondaryCta}
            onClick={handleContactClick}
          >
            <Mail size={18} />
          </a>
        </aside>
      </div>

      <div className="hero-index" aria-hidden="true">
        <span>SYSTEM ID // 01</span>
      </div>
    </section>
  );
}


