import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  return <section id="experience" className="section section-dark">
    <div className="container">
      <p className="eyebrow"><span />{t.experience.eyebrow}</p>
      <div className="section-heading"><h2>{t.experience.title}</h2><span className="section-number">02</span></div>
      <div className="experience-layout">
        <div className="timeline">
          {t.experience.jobs.map((job, index) => <article className="job" key={job.role}>
            <div className="job-meta"><span>0{index + 1}</span><time>{job.date}</time></div>
            <div className="job-body">
              <h3>{job.role}</h3><p className="company">{job.company} · {job.location}</p>
              <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          </article>)}
        </div>
        <aside className="career-aside">
          <div className="aside-block"><p className="aside-label">{t.experience.educationTitle}</p><h3>{t.experience.education.degree}</h3><p>{t.experience.education.school}<br />{t.experience.education.date}</p></div>
          <div className="aside-block"><p className="aside-label">{t.experience.certificateTitle}</p>{t.experience.certificates.map((item) => <p className="certificate" key={item}>{item}<ArrowUpRight size={14} /></p>)}</div>
        </aside>
      </div>
      <div className="skills"><p className="aside-label">{t.experience.skillsTitle}</p><div>{t.experience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
    </div>
  </section>;
}
