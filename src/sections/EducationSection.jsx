import { education, certifications } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/education.css';

export default function EducationSection() {
  useScrollAnimation();

  return (
    <section className="education-section" id="education">
      {/* Background Decorations */}
      <div className="education-bg-decoration">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="education-container">
        <div className="fade-up">
          <div className="section-label">Qualifications</div>
          <h2 className="section-heading">Education & Certifications</h2>
        </div>

        <div className="education-grid">
          {/* Left Column: Education */}
          <div className="education-col fade-up">
            <h3 className="education-column-title">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card hover-target">
                {/* Glow Effect */}
                <div className="edu-glow"></div>

                <div className="edu-icon">🎓</div>
                <div className="edu-content">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span className="edu-institution">{edu.institution}</span>
                  <div className="edu-meta">
                    <span className="edu-badge">Completed</span>
                    {edu.year && <span className="edu-year">{edu.year}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="certifications-col fade-up delay-2">
            <h3 className="certifications-column-title">Certifications</h3>
            <div className="certs-stack">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card hover-target">
                  {/* Glow Effect */}
                  <div className="cert-glow"></div>

                  <div className="cert-icon-wrap">{cert.icon || '📜'}</div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <span className="cert-badge">✓ Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
