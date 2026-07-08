import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/experience.css';

export default function ExperienceSection() {
  useScrollAnimation();

  // Helper to dynamically wrap numbers/percentages in styled highlights
  const highlightMetrics = (text) => {
    const patterns = ["30%", "40%", "4.5★", "35%", "8-month", "3–4 days", "3-4 days", "2 hours"];
    let highlighted = text;
    patterns.forEach((pattern) => {
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedPattern, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span style="color: var(--accent); font-weight: 600">${pattern}</span>`
      );
    });
    return highlighted;
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <SectionHeading label="04 / Career" heading="Work Experience" />

        {/* Timeline */}
        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={idx} className="experience-item fade-up">
              {/* Timeline Line */}
              <div className="experience-timeline-line">
                <div className="experience-timeline-dot">
                  <span className="experience-timeline-dot-inner"></span>
                </div>
                {idx < experience.length - 1 && (
                  <div className="experience-timeline-connector"></div>
                )}
              </div>

              {/* Content */}
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-company-info">
                    <h3 className="experience-company">{item.company}</h3>
                    <span className="experience-badge">Current</span>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-role">{item.role}</span>
                    <span className="experience-period">{item.period}</span>
                  </div>
                </div>

                {item.location && (
                  <div className="experience-location">
                    <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                )}

                <ul className="experience-points">
                  {item.points.map((point, pointIdx) => (
                    <li
                      key={pointIdx}
                      className="experience-point"
                      dangerouslySetInnerHTML={{ __html: highlightMetrics(point) }}
                    />
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="experience-tech-tags">
                  {item.techStack && item.techStack.map((tech, i) => (
                    <span key={i} className="experience-tech-tag">{tech}</span>
                  ))}
                  {!item.techStack && (
                    <>
                      <span className="experience-tech-tag">Flutter</span>
                      <span className="experience-tech-tag">Dart</span>
                      <span className="experience-tech-tag">Firebase</span>
                      <span className="experience-tech-tag">REST APIs</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}