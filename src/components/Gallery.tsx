import { Cpu, Server, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  hardware: <Cpu size={42} />,
  server: <Server size={42} />,
  sports: <Trophy size={42} />,
  ai: <Cpu size={42} />,
};

export default function Gallery() {
  const { t } = useLanguage();
  return <section className="section section-light inner-page gallery-page">
    <div className="container">
      <p className="eyebrow dark"><span />{t.gallery.eyebrow}</p>
      <div className="section-heading page-heading"><div><h1>{t.gallery.title}</h1><p>{t.gallery.desc}</p></div><span className="section-number">03</span></div>
      <div className="photo-grid">
        {t.gallery.items.map((item, index) => <figure className={`photo-card photo-${item.type} ${index === 0 ? 'photo-wide' : ''}`} key={item.number}>
          <div className="photo-art" aria-hidden="true"><span>{item.number}</span>{icons[item.type]}<i /></div>
          <figcaption><strong>{item.title}</strong><p>{item.caption}</p></figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}
