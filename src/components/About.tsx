import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section-light about-section">
      <div className="container section-grid">
        <div className="about-intro">
          <p className="eyebrow dark">
            <span />
            {t.about.eyebrow}
          </p>
          <h2>{t.about.title}</h2>
          
          <div className="about-personal-pills">
            {t.about.personal.map((item) => (
              <span className="personal-pill" key={item}>
                <CheckCircle2 size={13} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="about-copy">
          <p className="about-p1">{t.about.p1}</p>
          <p className="about-p2">{t.about.p2}</p>
        </div>
      </div>

      <div className="container stats-grid">
        {t.about.stats.map((stat, idx) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-top">
              <span className="stat-index">0{idx + 1}</span>
            </div>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

