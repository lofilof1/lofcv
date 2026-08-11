import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return <section id="experience" className="section section-dark career-section">
    <div className="container">
      <p className="eyebrow"><span />{t.experience.eyebrow}</p>
      <div className="section-heading"><h2>{t.experience.title}</h2><span className="section-number">02</span></div>

      <div className="career-basics">
        <p className="aside-label">{t.experience.basicsTitle}</p>
        <div>{t.about.personal.map((item) => <span key={item}>{item}</span>)}</div>
      </div>

      <div className="timeline modern-timeline">
        {t.experience.jobs.map((job, index) => <article className="job modern-job" key={`${job.company}-${job.date}`}>
          <div className="job-meta"><span>0{index + 1}</span><time>{job.date}</time></div>
          <div className="company-logo" aria-hidden={!job.logo}>
            {job.logo ? <img src={job.logo} alt={`${job.company} logo`} /> : <span>TFF</span>}
          </div>
          <div className="job-body">
            <p className="company">{job.company}{job.location ? ` · ${job.location}` : ''}</p>
            <h3>{job.role}</h3>
            <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>)}
      </div>

      <section className="career-block skills-block" aria-labelledby="skills-title">
        <div className="career-block-heading"><p className="aside-label">03</p><h3 id="skills-title">{t.experience.skillsTitle}</h3></div>
        <div className="skill-groups">
          {t.experience.skillGroups.map((group) => <article className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section className="career-block education-block" aria-labelledby="education-title">
        <div className="career-block-heading"><p className="aside-label">04</p><h3 id="education-title">{t.experience.educationTitle}</h3></div>
        <div className="education-card"><div><strong>{t.experience.education.degree}</strong><p>{t.experience.education.school}</p></div><time>{t.experience.education.date}</time></div>
      </section>

      <section className="career-block certificates-block" aria-labelledby="certificates-title">
        <div className="career-block-heading"><p className="aside-label">05</p><h3 id="certificates-title">{t.experience.certificateTitle}</h3></div>
        <div className="certificate-grid">{t.experience.certificates.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
      </section>
    </div>
  </section>;
}
