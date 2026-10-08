import { Award, Cpu, GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section section-dark career-section">
      <div className="container">
        <p className="eyebrow">
          <span />
          {t.experience.eyebrow}
        </p>

        <div className="section-heading">
          <div>
            <h2>{t.experience.title}</h2>
          </div>
          <span className="section-number">02</span>
        </div>

        <div className="timeline modern-timeline">
          {t.experience.jobs.map((job, index) => (
            <article className="job modern-job" key={`${job.company}-${job.date}`}>
              <div className="job-timeline-connector">
                <span className="connector-node" />
                <span className="connector-line" />
              </div>

              <div className="job-meta">
                <span className="job-index">0{index + 1}</span>
                <time className="job-time">{job.date}</time>
                {job.location && (
                  <span className="job-location">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                )}
              </div>

              <div className="job-logo-wrapper">
                <div className="company-logo" aria-hidden={!job.logo}>
                  {job.logo ? (
                    <img src={job.logo} alt={`${job.company} logo`} />
                  ) : (
                    <span className="text-logo">TFF</span>
                  )}
                </div>
              </div>

              <div className="job-body">
                <div className="job-header">
                  <div>
                    <p className="company-name">{job.company}</p>
                    <h3 className="job-role-title">{job.role}</h3>
                  </div>
                  {'badge' in job && (job as { badge?: string }).badge && (
                    <span className="job-badge">{(job as { badge: string }).badge}</span>
                  )}
                </div>

                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="bullet-glow-dot" />
                      <span className="bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Skills Section */}
        <section className="career-block skills-block" aria-labelledby="skills-title">
          <div className="career-block-heading">
            <div className="block-title-wrapper">
              <Cpu className="block-icon" size={20} />
              <div>
                <p className="aside-label">03 // TECHNICAL STACK</p>
                <h3 id="skills-title">{t.experience.skillsTitle}</h3>
              </div>
            </div>
          </div>

          <div className="skill-groups">
            {t.experience.skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-header">
                  <h4>{group.title}</h4>
                  {'tag' in group && (group as { tag?: string }).tag && (
                    <span className="skill-group-tag">{(group as { tag: string }).tag}</span>
                  )}
                </div>
                <div className="skill-badges">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="career-block education-block" aria-labelledby="education-title">
          <div className="career-block-heading">
            <div className="block-title-wrapper">
              <GraduationCap className="block-icon" size={20} />
              <div>
                <p className="aside-label">04 // ACADEMIC</p>
                <h3 id="education-title">{t.experience.educationTitle}</h3>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-info">
              <strong>{t.experience.education.degree}</strong>
              <p>{t.experience.education.school}</p>
            </div>
            <time className="education-date">{t.experience.education.date}</time>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="career-block certificates-block" aria-labelledby="certificates-title">
          <div className="career-block-heading">
            <div className="block-title-wrapper">
              <Award className="block-icon" size={20} />
              <div>
                <p className="aside-label">05 // CREDENTIALS</p>
                <h3 id="certificates-title">{t.experience.certificateTitle}</h3>
              </div>
            </div>
          </div>

          <div className="certificate-grid">
            {t.experience.certificates.map((item, index) => (
              <article className="certificate-card" key={item}>
                <span className="cert-index">0{index + 1}</span>
                <p className="cert-title">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

