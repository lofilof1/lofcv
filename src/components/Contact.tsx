import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="top" className="contact-section inner-page contact-page">
      <div className="container contact-grid">
        <div className="contact-heading-box">
          <p className="eyebrow">
            <span />
            {t.contact.eyebrow}
          </p>
          <h1>{t.contact.title}</h1>
          <div className="contact-badge-info">
            <span className="contact-geo">
              <MapPin size={14} />
              İstanbul / Yalova / Tekirdağ, Türkiye
            </span>
            <span className="contact-number">SYSTEM NODE // 04</span>
          </div>
        </div>

        <div className="contact-card">
          <p className="contact-intro">{t.contact.desc}</p>

          <div className="contact-channels">
            <a className="contact-channel-item" href="mailto:emrelofca@gmail.com">
              <div className="channel-icon-box">
                <Mail size={20} />
              </div>
              <div className="channel-info">
                <span className="channel-label">{t.contact.email}</span>
                <span className="channel-value">emrelofca@gmail.com</span>
              </div>
              <ArrowUpRight className="channel-arrow" size={18} />
            </a>

            <a
              className="contact-channel-item"
              href="https://www.linkedin.com/in/e-lofca"
              target="_blank"
              rel="noreferrer"
            >
              <div className="channel-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div className="channel-info">
                <span className="channel-label">{t.contact.linkedin}</span>
                <span className="channel-value">linkedin.com/in/e-lofca</span>
              </div>
              <ArrowUpRight className="channel-arrow" size={18} />
            </a>
          </div>

          <div className="contact-terminal-footer">
            <span className="terminal-prompt">$</span>
            <span>ping -c 1 lofca.com.tr // latency &lt; 1ms // ready for new collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

