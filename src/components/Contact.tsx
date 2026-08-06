import { ArrowUpRight, Link, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return <section id="top" className="contact-section inner-page contact-page">
    <div className="container contact-grid">
      <div><p className="eyebrow"><span />{t.contact.eyebrow}</p><h1>{t.contact.title}</h1><span className="contact-number">04</span></div>
      <div className="contact-copy"><p>{t.contact.desc}</p>
        <a href="mailto:emrelofca@gmail.com"><Mail size={18} />{t.contact.email}<ArrowUpRight size={18} /></a>
        <a href="https://www.linkedin.com/in/e-lofca" target="_blank" rel="noreferrer"><Link size={18} />{t.contact.linkedin}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </section>;
}
