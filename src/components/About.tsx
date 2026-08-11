import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return <section id="about" className="section section-light">
    <div className="container section-grid">
      <div><p className="eyebrow dark"><span />{t.about.eyebrow}</p><h2>{t.about.title}</h2></div>
      <div className="about-copy"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
    </div>
    <div className="container stats-grid">
      {t.about.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
    </div>
  </section>;
}
