import { Cpu, Server, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  hardware: <Cpu size={30} />,
  server: <Server size={30} />,
  sports: <Trophy size={30} />,
  ai: <Cpu size={30} />,
};

export default function Hobbies() {
  const { t } = useLanguage();
  return <section className="section section-light inner-page hobbies-page">
    <div className="container">
      <p className="eyebrow dark"><span />{t.hobbies.eyebrow}</p>
      <div className="section-heading page-heading"><h1>{t.hobbies.title}</h1><span className="section-number">02</span></div>
      <div className="gallery-grid">
        {t.hobbies.items.map((item) => <article className={`gallery-card gallery-${item.type}`} key={item.number} tabIndex={0}>
          <div className="gallery-visual" aria-hidden="true">
            <span className="gallery-number">{item.number}</span>
            <div className="gallery-icon">{icons[item.type]}</div>
            <strong>{item.metric}</strong>
          </div>
          <div className="gallery-content">
            <span className="gallery-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
