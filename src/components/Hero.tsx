import { ArrowDownRight, ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return <section id="top" className="hero-section">
    <div className="hero-grid container">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span />{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-lead">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a className="button" href="#experience">{t.hero.primaryCta}<ArrowDownRight size={18} /></a>
          <a className="text-link" href="/iletisim">{t.hero.secondaryCta}<ArrowRight size={17} /></a>
        </div>
      </div>
      <aside className="hero-card reveal delay-1" aria-label="Profile card">
        <img className="profile-photo" src="/profile/emre-lofca.jpg" alt="Emre Lofça" width="140" height="140" />
        <div className="hero-card-copy">
          <p className="profile-name">Emre Lofça</p>
          <p>{t.hero.role}<br />{t.hero.focus}</p>
        </div>
        <a href="/iletisim" className="round-link" aria-label={t.hero.secondaryCta}><Mail size={20} /></a>
        <div className="availability"><span />{t.hero.available}</div>
      </aside>
    </div>
    <div className="hero-index" aria-hidden="true">01</div>
  </section>;
}
