import { personal, competencies } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/about.css';

export default function AboutSection() {
  useScrollAnimation();

  return (
    <section id="about">
      <div className="about-inner">

        {/* Left — Image */}
        <div className="about-image-wrap fade-up">
          <img
            src="/myimage.jpeg"
            onError={e => e.target.src = '/my.jpg'}
            alt="Farhathullah Najeeb"
            className="about-img hover-target"
          />
          <div className="about-badge">
            <div className="about-badge-number">3+</div>
            <div className="about-badge-label">Years Exp</div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="about-content">
          <div className="section-label fade-up">01 / PROFILE</div>
          <h2 className="section-heading fade-up delay-1">About Me</h2>
          <p className="about-bio fade-up delay-2">{personal.bio}</p>
          <blockquote className="about-quote fade-up delay-3">
            "{personal.quote}"
          </blockquote>
          <div className="about-competencies fade-up delay-4">
            {competencies.map(c => (
              <span key={c} className="competency-chip hover-target">{c}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
