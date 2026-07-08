import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skills, competencies } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/skills.css';

const categoryIcons = {
  'Mobile': '📱',
  'Native & Hardware': '⚙️',
  'Payments & Fintech': '💳',
  'Backend & Cloud': '☁️',
  'Web': '🌐',
  'Tools & DevOps': '🛠️',
};

export default function SkillsSection() {
  useScrollAnimation();
  const [active, setActive] = useState(0);

  return (
    <section id="skills">
      <div className="fade-up">
        <SectionHeading label="02 / Expertise" heading="Skills & Technology" />
      </div>

      <div className="skills-layout fade-up delay-1">
        {/* Left: Category list */}
        <div className="skills-nav">
          {skills.map((skillGroup, idx) => (
            <button
              key={skillGroup.category}
              className={`skill-nav-btn hover-target ${active === idx ? 'active' : ''}`}
              onClick={() => setActive(idx)}
            >
              <div className="nav-btn-left">
                <span className="nav-btn-icon">
                  {categoryIcons[skillGroup.category] || '⚡'}
                </span>
                <span>{skillGroup.category}</span>
              </div>
              <span className="nav-btn-count">{skillGroup.tags.length}</span>
              <span className="nav-btn-arrow">→</span>
            </button>
          ))}
        </div>

        {/* Right: Tags panel */}
        <div className="skills-panel">
          <div className="skills-panel-top">
            <h3 className="skills-panel-title">
              {skills[active].category}
            </h3>
            <span className="skills-panel-count">
              {skills[active].tags.length} Skills
            </span>
          </div>

          <div className="skills-tags" key={active}>
            {skills[active].tags.map((tag, i) => (
              <span
                key={tag}
                className="skill-tag hover-target"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Competencies Row */}
      {competencies && (
        <div className="skills-competencies fade-up delay-2">
          <h4 className="skills-comp-label">Core Competencies</h4>
          <div className="skills-comp-tags">
            {competencies.map((comp) => (
              <span key={comp} className="comp-tag hover-target">
                {comp}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
